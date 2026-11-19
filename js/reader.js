// Full-screen document reader: zoom, highlighter, "pin as evidence", and picking a lying line.
// Opened with openReader(docId). Talks to the rest of the game through js/game.js (state + events).
import { state, save } from "./store.js";
import { doc, visibleDocs, currentQuestion, pinsPart, currentPins, togglePin, responseOf, picking, emit, on } from "./game.js";
import { develop } from "./halftone.js";
import { play } from "./sound.js";
import { toast } from "./ui.js";
import { t } from "./i18n.js";

/** Blocks the highlighter can mark, in document order. Their index is what gets saved. */
const HL_SELECTOR = "p, figcaption, .receipt-line, .card-field, .news-deck, .news-head, .news-table tr, .ledger tr, .old-table tr, .typed-sub";
const ZOOM_STEP = 1.2;

const el = {};
let current = null;   // doc id
let zoom = 1;         // scale applied to the document
let fitMode = true;   // follow the window width until the player zooms by hand
let hlTool = false;

/** Builds the reader once; call at startup. */
export function initReader() {
  const root = document.getElementById("reader");
  el.root = root;
  el.title = root.querySelector(".reader-title");
  el.scroll = root.querySelector(".reader-scroll");
  el.stage = root.querySelector(".reader-stage");
  el.banner = root.querySelector(".reader-banner");
  el.pin = root.querySelector("[data-act=pin]");
  el.hl = root.querySelector("[data-act=hl]");
  root.querySelector("[data-act=close]").onclick = closeReader;
  root.querySelector("[data-act=zin]").onclick = () => setZoom(zoom * ZOOM_STEP);
  root.querySelector("[data-act=zout]").onclick = () => setZoom(zoom / ZOOM_STEP);
  root.querySelector("[data-act=fit]").onclick = () => { fitMode = true; fit(); };
  root.querySelector(".reader-nav.prev").onclick = () => step(-1);
  root.querySelector(".reader-nav.next").onclick = () => step(1);
  el.pin.onclick = () => { toast(togglePin(current)); play("pin"); refreshButtons(); };
  el.hl.onclick = () => { hlTool = !hlTool; refreshButtons(); toast(hlTool ? t("hlOn") : t("hlOff")); };
  el.banner.addEventListener("click", (e) => { if (e.target.closest("[data-act=cancel-pick]")) { picking.active = null; refreshButtons(); emit("pick"); } });
  el.stage.addEventListener("click", onDocClick);
  window.addEventListener("resize", () => { if (current && fitMode) fit(); });
  setupPinch();
  document.addEventListener("keydown", (e) => {
    if (el.root.hidden) return;
    if (e.key === "Escape") closeReader();
    else if (e.key === "ArrowRight") step(1);
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "+" || e.key === "=") setZoom(zoom * ZOOM_STEP);
    else if (e.key === "-") setZoom(zoom / ZOOM_STEP);
  });
  on("pins", refreshButtons);
  on("pick", refreshButtons);
}

/** Opens a document in the reader and marks it as seen. */
export function openReader(id) {
  const d = doc(id);
  if (!d) return;
  current = id;
  el.root.hidden = false;
  el.title.innerHTML = `<small>${d.kind}</small>${d.label}`;
  el.stage.innerHTML = `<div class="scaler">${d.html()}</div>`;
  const paper = el.stage.querySelector(".doc");
  paper.querySelectorAll(HL_SELECTOR).forEach((b, i) => { b.classList.add("hl"); b.dataset.hi = i; });
  (state.hl[id] || []).forEach((i) => paper.querySelector(`[data-hi="${i}"]`)?.classList.add("is-hl"));
  develop(paper);
  fitMode = true;
  fit();
  el.scroll.scrollTop = 0;
  if (!state.seen[id]) { state.seen[id] = true; save(); emit("seen", id); }
  refreshButtons();
  play("paper");
  emit("open", id);
}

/** Closes the reader. */
export function closeReader() {
  el.root.hidden = true;
  current = null;
  el.stage.innerHTML = "";
}

function step(dir) {
  const list = visibleDocs();
  const i = list.findIndex((d) => d.id === current);
  const next = list[(i + dir + list.length) % list.length];
  if (next) openReader(next.id);
}

function fit() {
  const paper = el.stage.querySelector(".doc");
  if (!paper) return;
  const avail = el.scroll.clientWidth - (window.innerWidth < 700 ? 16 : 120);
  setZoom(Math.min(1.25, avail / paper.offsetWidth), true);
}

function setZoom(z, keepFit = false) {
  const paper = el.stage.querySelector(".doc");
  if (!paper) return;
  if (!keepFit) fitMode = false;
  zoom = Math.max(0.3, Math.min(3, z));
  const scaler = el.stage.querySelector(".scaler");
  // transform: scale (not CSS zoom): zoom breaks the placement of Vietnamese stacked accents in Chrome.
  scaler.style.transform = `scale(${zoom})`;
  el.stage.style.width = `${paper.offsetWidth * zoom}px`;
  el.stage.style.height = `${paper.offsetHeight * zoom}px`;
}

function onDocClick(e) {
  if (picking.active) {
    const lineEl = e.target.closest(".line");
    if (!lineEl) { toast(t("clickLine")); return; }
    const { qid, partId } = picking.active;
    responseOf(qid)[partId] = lineEl.dataset.line;
    responseOf(qid)[partId + "_text"] = lineEl.textContent.trim().slice(0, 140);
    responseOf(qid)[partId + "_doc"] = current;
    picking.active = null;
    save();
    el.stage.querySelectorAll(".line.is-picked").forEach((x) => x.classList.remove("is-picked"));
    lineEl.classList.add("is-picked");
    play("pin");
    toast(t("lineChosen"));
    refreshButtons();
    emit("pick");
    return;
  }
  if (!hlTool) return;
  const block = e.target.closest(".hl");
  if (!block) return;
  block.classList.toggle("is-hl");
  const list = [...el.stage.querySelectorAll(".is-hl")].map((b) => Number(b.dataset.hi));
  state.hl[current] = list;
  save();
}

function refreshButtons() {
  if (!current) return;
  const q = currentQuestion(), part = pinsPart();
  const pins = currentPins();
  const pinned = pins.includes(current);
  el.pin.disabled = !part;
  el.pin.classList.toggle("on", pinned);
  el.pin.querySelector(".lbl").textContent = !part ? t("pinPlain")
    : pinned ? t("unpinN", pins.length, part.count) : t("pinN", pins.length, part.count);
  el.hl.classList.toggle("on", hlTool);
  el.stage.classList.toggle("tool-hl", hlTool && !picking.active);
  el.stage.classList.toggle("picking", !!picking.active);
  if (picking.active) {
    el.banner.hidden = false;
    el.banner.className = "reader-banner";
    el.banner.innerHTML = `${t("pickBanner")} <button class="btn btn--ghost" data-act="cancel-pick">${t("cancelPick")}</button>`;
  } else if (q && pinned) {
    el.banner.hidden = false;
    el.banner.className = "reader-banner pin";
    el.banner.textContent = t("pinnedBanner", q.id.slice(1));
  } else el.banner.hidden = true;
  // Show the line already chosen for the open question, if it is in this document.
  if (q) {
    const r = responseOf(q.id);
    q.parts.filter((p) => p.type === "line").forEach((p) => {
      if (r[p.id]) el.stage.querySelector(`.line[data-line="${r[p.id]}"]`)?.classList.add("is-picked");
    });
  }
}

/** Two-finger pinch zoom inside the reader (the page itself does not zoom: touch-action is pan only). */
function setupPinch() {
  const pts = new Map();
  let start = null;
  el.scroll.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "touch") return;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.size === 2) {
      const [a, b] = [...pts.values()];
      start = { d: Math.hypot(a.x - b.x, a.y - b.y), z: zoom };
    }
  });
  el.scroll.addEventListener("pointermove", (e) => {
    if (!pts.has(e.pointerId)) return;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (start && pts.size === 2) {
      const [a, b] = [...pts.values()];
      setZoom(start.z * Math.hypot(a.x - b.x, a.y - b.y) / start.d);
    }
  });
  const end = (e) => { pts.delete(e.pointerId); if (pts.size < 2) start = null; };
  el.scroll.addEventListener("pointerup", end);
  el.scroll.addEventListener("pointercancel", end);
}
