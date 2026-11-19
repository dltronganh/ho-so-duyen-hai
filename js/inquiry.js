// The question panel ("Trọng điểm"): the open question's form, evidence slots, hints, solution, and solved summaries.
// Checking is done by js/answer.js; this file only builds the form and reacts to the player.
// onSolved(question) is called by the app when the open question is answered correctly (or the solution is used).
import { state, save } from "./store.js";
import { QUESTIONS, SECRETS, META, doc, visibleDocs, currentQuestion, responseOf, picking, togglePin, pinSlots, pinsPart, ideaOf, on, emit } from "./game.js";
import { checkQuestion, isFilled } from "./answer.js";
import { checkSlot, checkedVerdict, takeCheckTip } from "./checks.js";
import { play } from "./sound.js";
import { toast, dialog, esc } from "./ui.js";
import { t } from "./i18n.js";

/** Wrong-answer notes, in turn. */
const wrongNotes = () => t("wrong", META.boss?.role ?? t("defaultBoss"));

let root = null;
let onSolved = () => {};
let feedback = null;         // { qid, text, ok }

/** Sets up the panel. solvedCallback(question, { peeked }) runs when the open question is solved. */
export function initInquiry(solvedCallback) {
  root = document.querySelector("#inquiry .inquiry");
  onSolved = solvedCallback;
  root.addEventListener("click", onClick);
  root.addEventListener("input", onInput);
  on("pins", renderInquiry);
  on("pick", renderInquiry);
}

/** Redraws the whole panel from the state. */
export function renderInquiry() {
  if (!root) return;
  const html = QUESTIONS.map((q, i) => {
    if (i < state.stage) return solvedCard(q, i);
    if (i === state.stage) return openCard(q, i);
    return `<div class="q-card solved" style="opacity:.55"><div class="q-head"><span class="q-no">${t("qN", i + 1)}</span><span class="q-title">${t("locked")}</span></div></div>`;
  }).join("");
  root.innerHTML = `<h2>${t("notebookTitle")}</h2>${html}`;
}

function solvedCard(q, i) {
  const s = SECRETS[q.id];
  return `<div class="q-card solved">
    <span class="q-stamp ${state.peeked[q.id] ? "peek" : ""}">${state.peeked[q.id] ? t("peekStamp") : t("solvedStamp")}</span>
    <div class="q-head"><span class="q-no">${t("qN", i + 1)}</span><span class="q-title">${q.title}</span></div>
    <details class="q-summary"><summary>${t("solutionOf", META.boss?.role ?? t("defaultBoss"))}</summary><p>${esc(s.solution)}</p></details>
  </div>`;
}

function openCard(q, i) {
  const r = responseOf(q.id);
  const shown = state.hints[q.id] || 0;
  const s = SECRETS[q.id];
  const parts = q.parts.map((p) => partHtml(q, p, r[p.id], r)).join("");
  const hints = s.hints.slice(0, shown).map((h, k) => `<div class="hint"><b>${t("hintN", k + 1)}</b>${esc(h)}</div>`).join("");
  const nextHint = shown < s.hints.length
    ? `<button class="btn btn--paper" data-act="hint">${t("showHint", shown + 1, s.hints.length)}</button>`
    : `<button class="btn btn--paper" data-act="solution">${t("showSolution")}</button>`;
  const fb = feedback && feedback.qid === q.id ? `<div class="q-feedback ${feedback.ok ? "ok" : ""}">${esc(feedback.text)}</div>` : "";
  return `<div class="q-card" data-q="${q.id}">
    <div class="q-head"><span class="q-no">${t("qN", i + 1)}/${QUESTIONS.length}</span><span class="q-title">${q.title}</span></div>
    <p class="q-ask">${q.ask}</p>
    ${parts}
    <div class="q-actions"><button class="btn btn--red" data-act="submit">${t("submit")}</button></div>
    ${fb}
    <div class="q-hints">${hints}<div class="q-actions">${nextHint}</div></div>
  </div>`;
}

function partHtml(q, p, value, r) {
  const head = `<span class="q-label">${p.label}</span>`;
  if (p.type === "choice") {
    const long = p.options.some((o) => o.length > 24);
    return `<div class="q-part">${head}<div class="q-options ${long ? "long" : ""}">${
      p.options.map((o) => `<button data-act="choose" data-part="${p.id}" data-value="${esc(o)}" class="${value === o ? "on" : ""}">${esc(o)}</button>`).join("")}</div></div>`;
  }
  if (p.type === "number") {
    return `<div class="q-part"><label for="n-${q.id}-${p.id}">${p.label}</label><div class="q-number">
      <input id="n-${q.id}-${p.id}" inputmode="decimal" autocomplete="off" data-part="${p.id}" value="${value ?? ""}" placeholder="…"> ${p.unit || ""}</div></div>`;
  }
  if (p.type === "time" || p.type === "text") {
    const isTime = p.type === "time";
    return `<div class="q-part"><label for="n-${q.id}-${p.id}">${p.label}</label><div class="q-number">
      <input id="n-${q.id}-${p.id}" class="${isTime ? "" : "wide"}" autocomplete="off" spellcheck="false" data-part="${p.id}" value="${esc(value ?? "")}" placeholder="${isTime ? "hh:mm" : "…"}"></div>
      ${p.hint ? `<p class="small muted" style="margin:4px 0 0">${p.hint}</p>` : ""}</div>`;
  }
  if (p.type === "order") {
    const list = Array.isArray(value) && value.length === p.items.length ? value : p.items;
    return `<div class="q-part">${head}<ol class="order-list">${list.map((it, k) => `<li><span>${esc(it)}</span>
      <button data-act="up" data-part="${p.id}" data-k="${k}" title="${t("up")}" ${k === 0 ? "disabled" : ""}>▲</button>
      <button data-act="down" data-part="${p.id}" data-k="${k}" title="${t("down")}" ${k === list.length - 1 ? "disabled" : ""}>▼</button></li>`).join("")}</ol></div>`;
  }
  if (p.type === "line") {
    const txt = value ? `${esc(r[p.id + "_text"] || value)} <span class="muted small">(${esc(doc(r[p.id + "_doc"])?.label || "")})</span>` : `<span class="empty">${t("noLine")}</span>`;
    const active = picking.active && picking.active.partId === p.id;
    return `<div class="q-part">${head}<div class="slot ${value ? "filled" : ""}">${txt}${value ? `<button class="x" data-act="unline" data-part="${p.id}" title="${t("unpick")}">×</button>` : ""}</div>
      <div class="q-actions"><button class="btn btn--paper ${active ? "on" : ""}" data-act="pickline" data-part="${p.id}">${active ? t("waitingLine") : t("pickLine")}</button></div></div>`;
  }
  if (p.type === "pins") {
    const pins = pinSlots();
    const slots = pins.map((id, k) => {
      const idea = ideaOf(q.id, k);
      // A checked document shows its verdict while it stays in the slot; an unchecked one offers the paid check.
      const verdict = checkedVerdict(state, q.id, k, id);
      const mark = verdict === null ? "" : verdict
        ? `<em class="slot-ok">✓ ${t("slotOk")}</em>` : `<em class="slot-lack">✗ ${t("slotLacking")}</em>`;
      const top = `<div class="slot-idea"><b>${idea ? t("ideaN", k + 1) : t("ideaFallback", k + 1)}</b>${idea ? `<span>${esc(idea)}</span>` : ""}${mark}</div>`;
      const check = id && verdict === null
        ? `<div class="slot-check"><button class="btn btn--paper" data-act="checkslot" data-slot="${k}">${t("checkSlot")} <small>(${t("checkCost")})</small></button></div>` : "";
      const body = id
        ? `<div class="slot-doc"><button class="slot-pick" data-act="pickdoc" data-slot="${k}" title="${t("changePin")}">📌 ${esc(doc(id)?.label || id)}</button><button class="x" data-act="unpin" data-doc="${id}" title="${t("unpin")}">×</button></div>`
        : `<div class="slot-doc"><span class="empty">${t("slotEmpty")}</span><button class="btn btn--paper slot-add" data-act="pickdoc" data-slot="${k}">${t("pinFromList")}</button></div>`;
      return `<div class="slot slot--idea${id ? " filled" : ""}${verdict === false ? " lacking" : verdict ? " proven" : ""}">${top}${body}${check}</div>`;
    }).join("");
    return `<div class="q-part">${head}<div class="slots">${slots}</div></div>`;
  }
  return "";
}

async function onClick(e) {
  const b = e.target.closest("[data-act]");
  if (!b) return;
  const q = currentQuestion();
  if (!q) return;
  const r = responseOf(q.id);
  const act = b.dataset.act;
  if (act === "choose") { r[b.dataset.part] = b.dataset.value; save(); play("pin"); renderInquiry(); }
  else if (act === "unpin") { togglePin(b.dataset.doc); }
  else if (act === "up" || act === "down") {
    const part = q.parts.find((p) => p.id === b.dataset.part);
    const list = Array.isArray(r[part.id]) && r[part.id].length === part.items.length ? [...r[part.id]] : [...part.items];
    const k = Number(b.dataset.k), j = act === "up" ? k - 1 : k + 1;
    [list[k], list[j]] = [list[j], list[k]];
    r[part.id] = list; save(); play("pin"); renderInquiry();
  }
  else if (act === "unline") { delete r[b.dataset.part]; save(); renderInquiry(); }
  else if (act === "pickline") {
    picking.active = picking.active ? null : { qid: q.id, partId: b.dataset.part };
    emit("pick");
    if (picking.active) toast(t("pickLineToast"));
  }
  else if (act === "pickdoc") pickFromList(q, Number(b.dataset.slot));
  else if (act === "checkslot") checkOneSlot(q, Number(b.dataset.slot));
  else if (act === "hint") showHint(q);
  else if (act === "solution") showSolution(q);
  else if (act === "submit") submit(q);
}

function onInput(e) {
  const input = e.target.closest("input[data-part]");
  const q = currentQuestion();
  if (!input || !q) return;
  responseOf(q.id)[input.dataset.part] = input.value;
  save();
}

/** The document list for one evidence slot: tapping a document pins it in that slot and closes the list. */
async function pickFromList(q, slot) {
  const pins = pinSlots();
  const mark = (id) => { const k = pins.indexOf(id); return k < 0 ? "" : k === slot ? "📌" : `📌 ${t("ideaN", k + 1)}`; };
  const items = visibleDocs().map((d) => `<button class="folder-item" data-pick="${d.id}" style="grid-template-columns:1fr auto">
      <span class="folder-label">${esc(d.label)}</span><span class="small">${mark(d.id)}</span></button>`).join("");
  const idea = ideaOf(q.id, slot);
  const m = document.getElementById("modal");
  const p = dialog(`<h3>${t("pinTitle")} · ${t("qN", QUESTIONS.indexOf(q) + 1)}</h3>
    <h2>${idea ? `${t("ideaN", slot + 1)}: ${esc(idea)}` : t("ideaFallback", slot + 1)}</h2>
    <p class="small">${t("pinSlotHelp")}</p><div class="pick-list">${items}</div>`,
    [{ label: t("close"), value: true, cls: "btn--paper" }]);
  m.querySelector(".pick-list").addEventListener("click", (ev) => {
    const it = ev.target.closest("[data-pick]");
    if (!it) return;
    toast(togglePin(it.dataset.pick, slot));
    play("pin");
    m.querySelector(".actions .btn")?.click();
  });
  await p;
}

/** Checks one evidence slot (one hint): marks it "enough" or "not enough", never naming the right document. */
function checkOneSlot(q, k) {
  const res = checkSlot(state, q.id, SECRETS[q.id].answers[pinsPart().id], pinSlots(), k);
  if (!res) return;
  save();
  play(res.ok ? "pin" : "wrong");
  if (res.charged) toast(t("checkedToast", k + 1, res.ok));
  renderInquiry();
}

async function showHint(q) {
  const n = (state.hints[q.id] || 0) + 1;
  const ok = await dialog(`<h3>${t("hintH3")}</h3><h2>${t("hintH2", n)}</h2><p>${t("hintP")}</p>`,
    [{ label: t("cancel"), value: false, cls: "btn--paper" }, { label: t("openHint"), value: true, cls: "btn--red" }]);
  if (!ok) return;
  state.hints[q.id] = n;
  save();
  play("paper");
  renderInquiry();
}

async function showSolution(q) {
  const s = SECRETS[q.id];
  const ok = await dialog(`<h3>${t("solH3")}</h3><h2>${t("solH2", q.title)}</h2><p>${t("solP")}</p>`,
    [{ label: t("cancel"), value: false, cls: "btn--paper" }, { label: t("showSolution"), value: true, cls: "btn--red" }]);
  if (!ok) return;
  await dialog(`<h3>${t("solH3")}</h3><h2>${q.title}</h2><p>${esc(s.solution)}</p>`, [{ label: t("gotIt"), value: true, cls: "btn--red" }]);
  state.peeked[q.id] = true;
  save();
  feedback = null;
  onSolved(q, { peeked: true });
}

function submit(q) {
  const r = responseOf(q.id);
  // An order list the player never touched still counts as their answer (the order shown on screen).
  q.parts.filter((p) => p.type === "order" && !Array.isArray(r[p.id])).forEach((p) => { r[p.id] = [...p.items]; });
  const missing = q.parts.filter((p) => !isFilled(p, r[p.id]));
  const card = root.querySelector(".q-card[data-q]");
  if (missing.length) {
    const emptySlots = (r.pins || []).map((id, k) => (id ? 0 : k + 1)).filter(Boolean).join(", ");
    toast(t("missing", missing.map((p) => (p.type === "pins" && emptySlots ? t("missingIdeas", emptySlots) : p.label.toLowerCase())).join("; ")));
    card?.classList.add("shake"); setTimeout(() => card?.classList.remove("shake"), 450);
    return;
  }
  const answers = SECRETS[q.id].answers;
  const { ok } = checkQuestion(q, answers, r);
  if (ok) { feedback = null; onSolved(q, { peeked: false }); return; }
  state.tries[q.id] = (state.tries[q.id] || 0) + 1;
  save();
  const n = state.tries[q.id];
  const notes = wrongNotes();
  let text = notes[(n - 1) % notes.length];
  // A wrong answer never says which part is wrong (two-option conclusions would give themselves away);
  // the slot checks are the paid way to test the evidence. They are pointed out once per case only.
  if (n >= 3 && (state.hints[q.id] || 0) === 0) text += t("stuck");
  if (q.parts.some((p) => p.type === "pins") && takeCheckTip(state)) { text += `\n${t("checkTip")}`; save(); }
  feedback = { qid: q.id, text, ok: false };
  play("wrong");
  renderInquiry();
  const c2 = root.querySelector(".q-card[data-q]");
  c2?.classList.add("shake"); setTimeout(() => c2?.classList.remove("shake"), 450);
}
