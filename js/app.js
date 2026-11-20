// Entry point of the investigation desk: cover, folder list, notebook, panels, unlocking new folders, the ending.
// Loaded by index.html as an ES module. Panels live in board.js, reader.js, inquiry.js; shared model in game.js.
import { state, save, resetAll, loadState } from "./store.js";
import { CASES } from "../cases/list.js";
import { QUESTIONS, SECRETS, DOCS, META, ENDING_DOCS, CASE_ID, loadCase, visibleDocs, finished, currentPins, on, emit, picking } from "./game.js";
import { initBoard, renderBoard, clearBoard, fitAll, focusCard } from "./board.js";
import { initReader, openReader } from "./reader.js";
import { initInquiry, renderInquiry } from "./inquiry.js";
import { play } from "./sound.js";
import { dialog, toast, esc } from "./ui.js";
import { hintsUsed, checksUsed } from "./checks.js";
import { LANG, t, pickLang, setLang, caseLang, translatePage } from "./i18n.js";

/** Folder heading for documents of a stage (the last stage holds the ending documents). */
const folderName = (s) => s === 0 ? t("folderFirst") : s >= QUESTIONS.length ? t("folderEnd") : t("folderN", s + 1);
/** The player's boss as named in the case (falls back to the newspaper editor of the first cases). */
const boss = () => META.boss?.role ?? t("defaultBoss");
const isMobile = () => window.matchMedia("(max-width: 980px)").matches;

function boot() {
  initReader();
  initBoard((id) => openReader(id));
  initInquiry(solved);
  wireChrome();
  on("seen", () => { renderFolder(); renderTabs(); });
  on("open", () => renderFolder());
  on("pins", renderFolder);
  on("pick", () => { if (picking.active && isMobile()) showPanel("folder"); });
  renderAll();
  showCover();
}

function renderAll() {
  renderFolder();
  renderInquiry();
  renderProgress();
  renderTabs();
  if (state.started) renderBoard();
  document.querySelector(".notebook textarea").value = state.notes;
  document.querySelector("[data-top=sound] .lbl").textContent = state.sound ? t("soundOn") : t("soundOff");
}

// ---------- cover ----------
function showCover() {
  const c = document.getElementById("cover");
  const resume = state.started && !finished();
  c.innerHTML = `<div class="folder-cover">
    <a class="back-link" href="./${LANG === "vi" ? "" : "?lang=" + LANG}">${t("backLink")}</a>${langLink()}
    <div class="stamp-top">${t("secret")}</div>
    <div class="series">${META.series} · ${META.number}</div>
    <h1>${META.title}</h1>
    <div class="place">${META.place}</div>
    <p class="blurb">${META.blurb}</p>
    <div class="facts"><span><b>${t("players")}</b>${META.players}</span><span><b>${t("time")}</b>${META.time}</span><span><b>${t("level")}</b>${META.level}</span></div>
    <div class="actions">
      <button class="btn btn--red" data-cover="go">${resume ? t("resume") : state.started ? t("review") : t("open")}</button>
      ${state.started ? `<button class="btn btn--ghost" data-cover="reset">${t("startOver")}</button>` : ""}
    </div>
    <div class="howto"><b>${t("howtoTitle")}</b><ol>${t("howto", boss()).map((x) => `<li>${x}</li>`).join("")}</ol><p class="small" style="margin:8px 0 0">${t("howtoNote")}</p></div>
    <p class="credit">${t("credit")} · <a href="https://github.com/dltronganh/ho-so-duyen-hai" target="_blank" rel="noopener">GitHub</a></p>
  </div>`;
  c.hidden = false;
  c.onclick = async (e) => {
    const b = e.target.closest("[data-cover]");
    if (!b) return;
    if (b.dataset.cover === "reset") { await startOver(); return; }
    c.hidden = true;
    play("paper");
    if (!state.started) {
      state.started = true;
      state.startedAt = Date.now();
      save();
      renderBoard(visibleDocs().map((d) => d.id));
      fitAll();
      openReader(META.firstDoc);
    } else { renderBoard(); fitAll(); }
  };
  c.querySelector("[data-cover=go]").focus();
}

async function startOver() {
  const ok = await dialog(`<h3>${t("resetH3")}</h3><h2>${t("resetH2")}</h2><p>${t("resetP")}</p>`,
    [{ label: t("cancel"), value: false }, { label: t("resetGo"), value: true, cls: "btn--red" }]);
  if (!ok) return;
  resetAll();
  clearBoard();
  emit("reset");
  renderAll();
  showCover();
}

// ---------- folder list and notebook ----------
function renderFolder() {
  const pins = currentPins();
  const groups = new Map();
  visibleDocs().forEach((d) => { if (!groups.has(d.stage)) groups.set(d.stage, []); groups.get(d.stage).push(d); });
  const body = [...groups.entries()].map(([s, list]) => `<h3>${folderName(s)}</h3>${list.map((d) => `
    <button class="folder-item" data-open="${d.id}">
      <span class="folder-kind">${esc(d.kind)}</span>
      <span class="folder-label">${esc(d.label)}</span>
      <span>${!state.seen[d.id] ? `<span class="badge-new">${t("newBadge")}</span>` : pins.includes(d.id) ? `<span class="badge-pin" title="${t("pinnedTip")}">📌</span>` : ""}</span>
    </button>`).join("")}`).join("");
  document.querySelector(".folder").innerHTML = body || `<p>${t("noDocs")}</p>`;
}

function wireChrome() {
  document.querySelector(".folder").addEventListener("click", (e) => {
    const b = e.target.closest("[data-open]");
    if (b) { openReader(b.dataset.open); if (!isMobile()) focusCard(b.dataset.open); }
  });
  const ta = document.querySelector(".notebook textarea");
  ta.addEventListener("input", () => { state.notes = ta.value; save(); });
  document.querySelectorAll(".side-tabs button").forEach((b) => b.onclick = () => showLeftTab(b.dataset.tab));
  document.querySelectorAll(".mobile-tabs button").forEach((b) => b.onclick = () => showPanel(b.dataset.panel));
  document.querySelector("[data-top=help]").onclick = help;
  document.querySelector("[data-top=reset]").onclick = startOver;
  document.querySelector("[data-top=cover]").onclick = showCover;
  document.querySelector("[data-top=sound]").onclick = () => {
    state.sound = !state.sound; save();
    document.querySelector("[data-top=sound] .lbl").textContent = state.sound ? t("soundOn") : t("soundOff");
    play("pin");
  };
}

function showLeftTab(tab) {
  document.querySelectorAll(".side-tabs button").forEach((b) => b.classList.toggle("on", b.dataset.tab === tab));
  document.querySelector(".folder").hidden = tab !== "folder";
  document.querySelector(".notebook").hidden = tab !== "notes";
}

/** Mobile: shows one panel full screen ("board", "folder", "notes", "inquiry"). */
function showPanel(panel) {
  const left = document.querySelector(".side--left"), right = document.querySelector(".side--right");
  left.classList.toggle("show", panel === "folder" || panel === "notes");
  right.classList.toggle("show", panel === "inquiry");
  if (panel === "folder" || panel === "notes") showLeftTab(panel);
  document.querySelectorAll(".mobile-tabs button").forEach((b) => b.classList.toggle("on", b.dataset.panel === panel));
}

function renderTabs() {
  const unseen = visibleDocs().some((d) => !state.seen[d.id]);
  const dot = document.querySelector(".mobile-tabs [data-panel=folder] .dot");
  if (dot) dot.hidden = !unseen;
}

function renderProgress() {
  const dots = QUESTIONS.map((q, i) => `<i class="${i < state.stage ? "done" : i === state.stage ? "now" : ""}" title="${t("qN", i + 1)}"></i>`).join("");
  document.querySelector(".progress-dots").innerHTML = `<span>${t("mInquiry")}</span>${dots}`;
}

async function help() {
  await dialog(t("helpBody"));
}

// ---------- solving and the ending ----------
async function solved(q, { peeked }) {
  state.stage += 1;
  save();
  play("stamp");
  renderInquiry();
  renderProgress();
  const solvedCards = document.querySelectorAll(".q-card.solved .q-stamp");
  solvedCards[solvedCards.length - 1]?.classList.add("stamp-pop");
  const fresh = DOCS.filter((d) => d.stage === state.stage).map((d) => d.id);
  if (finished()) { await ending(); return; }
  renderBoard(fresh);
  renderFolder();
  renderTabs();
  setTimeout(() => play("bell"), 500);
  setTimeout(() => play("aha"), 900);  // new documents unlocked: a small "aha"
  const list = fresh.map((id) => `<li>${esc(DOCS.find((d) => d.id === id).label)}</li>`).join("");
  await dialog(`<h3>${peeked ? t("peekedSol") : t("correct")} · ${t("qN", state.stage)}</h3>
    <h2>${t("letterFrom", boss())}</h2>
    <p class="hand">${esc(q.unlockNote)}</p><p class="hand" style="text-align:right">– ${META.boss?.sign ?? t("defaultSign")}</p>
    <p class="new-list">${t("newDocs", fresh.length)}</p><ul class="new-list">${list}</ul>`,
    [{ label: t("toDesk"), value: true, cls: "btn--red" }]);
  if (!isMobile()) focusCard(fresh[0]);
}

async function ending() {
  state.finishedAt = state.finishedAt || Date.now();
  save();
  renderBoard(DOCS.filter((d) => d.stage === QUESTIONS.length).map((d) => d.id));
  renderFolder();
  const mins = Math.max(1, Math.round((state.finishedAt - state.startedAt) / 60000));
  const hints = hintsUsed(state), checks = checksUsed(state);  // direction hints and slot checks together
  const wrong = Object.values(state.tries).reduce((a, b) => a + b, 0);
  const peeks = Object.keys(state.peeked).length;
  setTimeout(() => play("bell"), 400);
  const go = await dialog(`<h3>${t("endH3")}</h3><h2>${META.ending.title}</h2>
    <p>${META.ending.text}</p>
    <div class="ending-stats"><div><b>${mins}</b><span>${t("minutes")}</span></div><div><b>${hints}</b><span>${t("hintsUsed")}</span></div><div><b>${wrong}</b><span>${t("wrongTries")}</span></div></div>
    ${checks ? `<p class="small">${t("checksLine", checks)}</p>` : ""}
    ${peeks ? `<p class="small">${t("peeksLine", peeks)}</p>` : `<p class="small">${t("noPeeks", boss())}</p>`}
    <p>${t("endDocs")}</p>`,
    [{ label: t("stay"), value: false }, { label: t("readEnd"), value: true, cls: "btn--red" }]);
  if (go) openReader(ENDING_DOCS[0]);
}
// ---------- case picker (no ?case= in the address) ----------
/** Save-slot key of a case in the current language (same rule as store.js loadState). */
const slotKey = (id) => `hsdh.case${id}${LANG === "vi" ? "" : "." + LANG}.v1`;

function progressOf(id) {
  try {
    const s = JSON.parse(localStorage.getItem(slotKey(id)) || "null");
    if (!s || !s.started) return "";
    return s.finishedAt ? t("solvedMark") : t("inProgress");
  } catch { return ""; }
}

/** The picker card text of a case in the current language, or null when the case has no such version. */
const caseText = (k) => LANG === "vi" ? k : k[LANG] ? { ...k, ...k[LANG] } : null;

/** Link that reloads the page in the other language, keeping the open case. */
function langLink() {
  const p = new URLSearchParams(location.search);
  const other = LANG === "vi" ? "en" : "vi";
  p.set("lang", other);
  const id = p.get("case");
  if (id && !CASES.find((k) => k.id === id)?.[other] && other !== "vi") p.delete("case");
  return `<a class="lang-link" href="?${p}" lang="${other}">${t("langSwitch")}</a>`;
}

function showPicker() {
  const c = document.getElementById("cover");
  const list = CASES.map(caseText).filter(Boolean);
  c.innerHTML = `<div class="picker">
    ${langLink()}
    <div class="series">${t("siteTitle").split(" · ")[0]}</div>
    <h1>${t("pickTitle")}</h1>
    <p class="picker-sub">${t("pickSub")}${t("langNote") ? ` ${t("langNote")}` : ""}</p>
    <div class="picker-list">${list.map((k) => `
      <a class="folder-cover mini" href="?case=${k.id}${LANG === "vi" ? "" : "&lang=" + LANG}">
        <div class="stamp-top">${k.level}</div>
        <div class="series">${k.number}</div>
        <h2>${k.title}</h2>
        <div class="place">${k.place}</div>
        <p>${k.teaser}</p>
        <div class="facts"><span><b>${t("time")}</b>${k.time}</span><span><b>${t("level")}</b>${k.level}</span><span><b>${t("progressLbl")}</b>${progressOf(k.id) || t("notOpened")}</span></div>
      </a>`).join("")}</div>
    <p class="credit">${t("credit")} · <a href="https://github.com/dltronganh/ho-so-duyen-hai" target="_blank" rel="noopener">GitHub</a></p>
  </div>`;
  c.hidden = false;
}

/** Waits for the web fonts (or a timeout) so measured layouts use the final fonts. */
function fontsReady(withHieroglyphs, ms) {
  const faces = [...document.fonts].filter((f) => withHieroglyphs || !f.family.includes("Hieroglyphs"));
  return Promise.race([Promise.all(faces.map((f) => f.load().catch(() => null))), new Promise((r) => setTimeout(r, ms))]);
}

async function start() {
  pickLang();
  translatePage();
  document.title = t("siteTitle");
  const params = new URLSearchParams(location.search);
  const known = CASES.find((k) => k.id === params.get("case"));
  // A link to a case without a version in the saved language opens the Vietnamese original (for this page only:
  // the saved choice stays), with a short note in the player's language.
  let langNote = "";
  if (known && caseLang(known, LANG) !== LANG) { langNote = t("viOnly"); setLang(caseLang(known, LANG)); translatePage(); }
  // Wait for the fonts first: card thumbnails are measured once, and Vietnamese accents render wrongly in fallback fonts.
  // Slow phone connections may need longer than the timeout; the board re-measures its cards when the fonts arrive.
  await fontsReady(Boolean(known && known.fonts === "egypt"), 12000);
  if (!known) { document.body.classList.add("picking-case"); showPicker(); return; }
  await loadCase(known.id, LANG);
  loadState(known.id, LANG);
  document.title = `${META.title} · ${META.series}`;
  document.querySelector(".brand small").textContent = `${META.short} · ${META.title}`;
  document.querySelector(".brand").firstChild.textContent = META.series;
  boot();
  if (langNote) toast(langNote, 7000);
}

start();
// Exposed for automated checks (no effect on play).
window.__case = { state, get SECRETS() { return SECRETS; }, get CASE_ID() { return CASE_ID; } };
