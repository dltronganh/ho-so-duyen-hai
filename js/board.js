// The cork board: every unlocked document as a pinned miniature you can drag around, pan/zoom, and tie with red string.
// Clicking a card opens it in the reader. Positions, strings and the view are saved in the state.
import { state, save } from "./store.js";
import { visibleDocs, currentPins, on } from "./game.js";
import { develop } from "./halftone.js";
import { play } from "./sound.js";
import { toast, esc } from "./ui.js";
import { t } from "./i18n.js";

const CARD_W = 230;          // card width in world px
const THUMB_MAX_H = 300;     // taller documents are cropped like a sheet tucked under others
const COL_W = 262, ROW_H = 372, ZONE_W = 3 * COL_W + 40, ZONE_H = 4 * ROW_H + 60;  // default layout grid per folder stage
const ZONES_PER_ROW = 3;  // folders 0–2 on the first band, 3–5 below, so long cases still fit the screen
const DRAG_SLOP = 5;         // px of movement before a press becomes a drag instead of a click

const el = {};
const cards = new Map();     // docId -> card element
let view = { x: 0, y: 0, z: 0.7 };
let linkFrom = null;         // first card chosen while tying a string
let linking = false;
let openDoc = () => {};
let selected = null;         // index of the string the player tapped (shows the remove button)
const KNOT_PX = 9, KNOT_HIT_PX = 24, LINE_HIT_PX = 16;  // on-screen sizes, kept constant at every zoom

/** Sets up the board; onOpen(docId) is called when a card is clicked. */
export function initBoard(onOpen) {
  openDoc = onOpen;
  el.board = document.getElementById("board");
  el.world = el.board.querySelector(".world");
  el.svg = el.board.querySelector(".strings");
  el.hint = document.querySelector(".board-hint");
  if (state.view) view = { ...state.view };
  document.querySelector("[data-board=zin]").onclick = () => zoomAt(view.z * 1.2);
  document.querySelector("[data-board=zout]").onclick = () => zoomAt(view.z / 1.2);
  document.querySelector("[data-board=fit]").onclick = fitAll;
  document.querySelector("[data-board=tidy]").onclick = tidy;
  el.linkBtn = document.querySelector("[data-board=link]");
  el.linkBtn.onclick = () => setLinking(!linking);
  setupPanZoom();
  el.svg.addEventListener("click", onStringClick);
  el.cut = document.createElement("button");
  el.cut.className = "btn btn--red string-x";
  el.cut.hidden = true;
  el.cut.textContent = `✕ ${t("removeString")}`;
  el.cut.onclick = removeSelected;
  el.board.appendChild(el.cut);
  on("pins", markCards);
  on("seen", markCards);
  window.addEventListener("resize", () => applyView());
  // On a slow connection the game may start before every web font arrives: re-measure the miniatures when they do.
  document.fonts?.addEventListener?.("loadingdone", () => cards.forEach(sizeThumb));
}

/** Scales a card's document to the card width and crops its height (depends on the fonts in use). */
function sizeThumb(card) {
  const paper = card.querySelector(".doc");
  if (!paper || !paper.offsetWidth) return;
  const s = CARD_W / paper.offsetWidth;
  card.querySelector(".scaler").style.transform = `scale(${s})`;
  card.querySelector(".thumb").style.height = `${Math.min(THUMB_MAX_H, paper.offsetHeight * s)}px`;
}

/** Adds cards for newly visible documents and refreshes badges. fresh = list of ids to animate. */
export function renderBoard(fresh = []) {
  const list = visibleDocs();
  list.forEach((d, i) => {
    if (cards.has(d.id)) return;
    if (!state.pos[d.id]) state.pos[d.id] = defaultPos(d, list);
    const card = document.createElement("div");
    card.className = "card" + (fresh.includes(d.id) ? " fresh" : "");
    card.dataset.id = d.id;
    card.innerHTML = `<div class="pin"></div><div class="thumb"><div class="scaler">${d.html()}</div></div>
      <div class="tag"><span class="lbl">${esc(d.label)}</span></div>`;
    el.world.appendChild(card);
    sizeThumb(card);
    develop(card.querySelector(".doc"));
    place(card, state.pos[d.id]);
    attachDrag(card);
    cards.set(d.id, card);
  });
  // Ids that are no longer visible (after a reset) are removed.
  for (const [id, card] of cards) if (!list.some((d) => d.id === id)) { card.remove(); cards.delete(id); }
  markCards();
  drawStrings();
  applyView();
  save();
}

/** Removes every card (used by "start over"). */
export function clearBoard() {
  cards.forEach((c) => c.remove());
  cards.clear();
  view = { x: 0, y: 0, z: 0.7 };
  drawStrings();
}

/** Scrolls the board so a document card is centred and briefly highlighted. */
export function focusCard(id) {
  const p = state.pos[id];
  if (!p) return;
  const r = el.board.getBoundingClientRect();
  view.z = Math.max(view.z, 0.7);
  view.x = r.width / 2 - (p.x + CARD_W / 2) * view.z;
  view.y = r.height / 2 - (p.y + 160) * view.z;
  applyView();
}

/** Fits all cards in the visible board area. */
export function fitAll() {
  const ids = [...cards.keys()];
  if (!ids.length) return;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  ids.forEach((id) => {
    const p = state.pos[id], c = cards.get(id);
    minX = Math.min(minX, p.x); minY = Math.min(minY, p.y);
    maxX = Math.max(maxX, p.x + CARD_W); maxY = Math.max(maxY, p.y + c.offsetHeight);
  });
  const r = el.board.getBoundingClientRect(), pad = 50;
  view.z = Math.max(0.12, Math.min(1, Math.min((r.width - pad * 2) / (maxX - minX), (r.height - pad * 2) / (maxY - minY))));
  view.x = pad - minX * view.z + ((r.width - pad * 2) - (maxX - minX) * view.z) / 2;
  view.y = pad - minY * view.z;
  applyView();
}

function defaultPos(d, list) {
  const sameStage = list.filter((x) => x.stage === d.stage);
  const i = sameStage.indexOf(d);
  const col = i % 3, row = Math.floor(i / 3);
  const zx = d.stage % ZONES_PER_ROW, zy = Math.floor(d.stage / ZONES_PER_ROW);
  return { x: 60 + zx * ZONE_W + col * COL_W, y: 70 + zy * ZONE_H + row * ROW_H + (col % 2) * 24, r: ((i * 37) % 7) - 3 };
}

function tidy() {
  const list = visibleDocs();
  list.forEach((d) => { state.pos[d.id] = defaultPos(d, list); place(cards.get(d.id), state.pos[d.id]); });
  drawStrings(); save(); fitAll();
  toast(t("tidied"));
}

function place(card, p) {
  card.style.left = `${p.x}px`;
  card.style.top = `${p.y}px`;
  card.style.transform = `rotate(${p.r || 0}deg)`;
}

function markCards() {
  const pins = currentPins();
  let z = 1;
  for (const [id, card] of cards) {
    card.classList.toggle("is-evidence", pins.includes(id));
    const tag = card.querySelector(".tag");
    const isNew = !state.seen[id];
    let badge = tag.querySelector(".badge-new");
    if (isNew && !badge) { badge = document.createElement("span"); badge.className = "badge-new"; badge.textContent = t("newBadge"); tag.prepend(badge); }
    if (!isNew && badge) badge.remove();
    let pin = tag.querySelector(".badge-pin");
    if (pins.includes(id) && !pin) { pin = document.createElement("span"); pin.className = "badge-pin"; pin.textContent = "📌"; pin.title = t("pinnedEvidenceTip"); tag.append(pin); }
    if (!pins.includes(id) && pin) pin.remove();
    card.style.zIndex = card.style.zIndex || z++;
  }
}

// ---- pan & zoom ----
function applyView() {
  el.world.style.transform = `translate(${view.x}px, ${view.y}px) scale(${view.z})`;
  state.view = { ...view };
  scaleStrings();
}

function zoomAt(z, cx, cy) {
  const r = el.board.getBoundingClientRect();
  if (cx === undefined) { cx = r.width / 2; cy = r.height / 2; }
  const nz = Math.max(0.12, Math.min(2.2, z));
  view.x = cx - (cx - view.x) * (nz / view.z);
  view.y = cy - (cy - view.y) * (nz / view.z);
  view.z = nz;
  applyView();
  save();
}

function setupPanZoom() {
  const pointers = new Map();
  let pan = null, pinch = null;
  el.board.addEventListener("wheel", (e) => {
    e.preventDefault();
    const r = el.board.getBoundingClientRect();
    if (e.ctrlKey || Math.abs(e.deltaY) > Math.abs(e.deltaX)) zoomAt(view.z * Math.pow(1.0015, -e.deltaY), e.clientX - r.left, e.clientY - r.top);
    else { view.x -= e.deltaX; applyView(); }
  }, { passive: false });
  el.board.addEventListener("pointerdown", (e) => {
    if (e.target.closest(".card") || e.target.closest(".strings g") || e.target.closest(".string-x")) return;
    if (selected !== null) { selected = null; drawStrings(); }
    el.board.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 1) { pan = { x: e.clientX, y: e.clientY, vx: view.x, vy: view.y }; el.board.classList.add("panning"); }
    if (pointers.size === 2) { const [a, b] = [...pointers.values()]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), z: view.z }; pan = null; }
  });
  el.board.addEventListener("pointermove", (e) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pinch && pointers.size === 2) {
      const [a, b] = [...pointers.values()], r = el.board.getBoundingClientRect();
      zoomAt(pinch.z * Math.hypot(a.x - b.x, a.y - b.y) / pinch.d, (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top);
    } else if (pan) { view.x = pan.vx + e.clientX - pan.x; view.y = pan.vy + e.clientY - pan.y; applyView(); }
  });
  const end = (e) => {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinch = null;
    if (!pointers.size) { pan = null; el.board.classList.remove("panning"); save(); }
  };
  el.board.addEventListener("pointerup", end);
  el.board.addEventListener("pointercancel", end);
}

// ---- dragging cards ----
function attachDrag(card) {
  let start = null;
  card.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    e.stopPropagation();
    card.setPointerCapture(e.pointerId);
    const p = state.pos[card.dataset.id];
    start = { x: e.clientX, y: e.clientY, px: p.x, py: p.y, moved: false };
  });
  card.addEventListener("pointermove", (e) => {
    if (!start) return;
    const dx = (e.clientX - start.x) / view.z, dy = (e.clientY - start.y) / view.z;
    if (!start.moved && Math.hypot(dx * view.z, dy * view.z) < DRAG_SLOP) return;
    if (!start.moved) { start.moved = true; card.classList.add("dragging"); bringToFront(card); }
    const p = state.pos[card.dataset.id];
    p.x = start.px + dx; p.y = start.py + dy;
    place(card, p);
    drawStrings();
  });
  const up = () => {
    if (!start) return;
    const wasDrag = start.moved;
    start = null;
    card.classList.remove("dragging");
    if (wasDrag) { save(); play("pin"); return; }
    if (linking) chooseForString(card.dataset.id);
    else openDoc(card.dataset.id);
  };
  card.addEventListener("pointerup", up);
  card.addEventListener("pointercancel", () => { start = null; card.classList.remove("dragging"); });
}

let topZ = 100;
function bringToFront(card) { card.style.zIndex = ++topZ; }

// ---- red strings ----
function setLinking(onOff) {
  linking = onOff;
  linkFrom = null;
  el.linkBtn.classList.toggle("on", linking);
  cards.forEach((c) => c.classList.remove("link-from"));
  el.hint.hidden = !linking;
  el.hint.textContent = t("linkHint");
}

function chooseForString(id) {
  if (!linkFrom) { linkFrom = id; cards.get(id).classList.add("link-from"); return; }
  if (linkFrom !== id) {
    // The same two documents again remove their string: easier on a phone than hitting a thin line.
    const k = state.strings.findIndex(([a, b]) => (a === linkFrom && b === id) || (a === id && b === linkFrom));
    if (k < 0) { state.strings.push([linkFrom, id]); play("pin"); }
    else { state.strings.splice(k, 1); selected = null; toast(t("stringRemoved")); }
    save();
  }
  cards.get(linkFrom)?.classList.remove("link-from");
  linkFrom = null;
  drawStrings();
}

function onStringClick(e) {
  const g = e.target.closest("g[data-i]");
  if (!g) return;
  const i = Number(g.dataset.i);
  selected = selected === i ? null : i;
  drawStrings();
}

/** Removes the selected string (the button shown next to its knot). */
function removeSelected() {
  if (selected === null) return;
  state.strings.splice(selected, 1);
  selected = null;
  save();
  drawStrings();
  play("pin");
  toast(t("stringRemoved"));
}

/** Draws every string: the red line, a wider invisible line and a knot in the middle to tap, then sizes them for the zoom. */
function drawStrings() {
  const pt = (id) => { const p = state.pos[id]; return p && cards.has(id) ? [p.x + CARD_W / 2, p.y + 2] : null; };
  if (selected !== null && !state.strings[selected]) selected = null;
  el.svg.innerHTML = state.strings.map(([a, b], i) => {
    const pa = pt(a), pb = pt(b);
    if (!pa || !pb) return "";
    const ends = `x1="${pa[0]}" y1="${pa[1]}" x2="${pb[0]}" y2="${pb[1]}"`;
    return `<g data-i="${i}" class="${selected === i ? "sel" : ""}"><line class="vis" ${ends}/><line class="hit" ${ends}/>
      <circle class="knot" cx="${(pa[0] + pb[0]) / 2}" cy="${(pa[1] + pb[1]) / 2}"/></g>`;
  }).join("");
  // Strings sit above cards' paper but below the pins, so draw the layer on top and keep pins visible.
  el.svg.style.zIndex = 400;
  scaleStrings();
}

/** Keeps knots and tap areas the same size on screen at any zoom, and places the remove button by the selected knot. */
function scaleStrings() {
  if (!el.svg) return;
  const z = view.z;
  el.svg.querySelectorAll(".knot").forEach((c) => { c.setAttribute("r", KNOT_PX / z); c.setAttribute("stroke-width", (KNOT_HIT_PX - KNOT_PX) / z); });
  el.svg.querySelectorAll(".hit").forEach((l) => l.setAttribute("stroke-width", LINE_HIT_PX / z));
  const knot = selected === null ? null : el.svg.querySelector(`g[data-i="${selected}"] .knot`);
  el.cut.hidden = !knot;
  if (knot) {
    el.cut.style.left = `${view.x + Number(knot.getAttribute("cx")) * z}px`;
    el.cut.style.top = `${view.y + Number(knot.getAttribute("cy")) * z}px`;
  }
}

