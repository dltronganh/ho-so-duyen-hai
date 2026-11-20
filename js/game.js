// Shared game model: case data, what is unlocked, the current question, pins and a tiny event bus.
// Panels (board, reader, folder, inquiry) read from here and talk to each other through emit/on,
// so none of them imports another panel.
import { decode } from "./answer.js";
import { state, save } from "./store.js";
import { t } from "./i18n.js";

// The loaded case. These are live ES-module bindings: importers see the values set by loadCase().
export let CASE_ID = null;
export let DOCS = [];
export let QUESTIONS = [];
export let ENDING_DOCS = [];
export let META = {};
/** Decoded answers, hints and solutions, keyed by question id. */
export let SECRETS = {};
let byId = new Map();

/** Loads case cases/<id>/index.js (or its translation cases/<id>/<lang>/index.js). Must finish before any panel is drawn. */
export async function loadCase(id, lang = "vi") {
  const m = await import(`../cases/${id}/${lang === "vi" ? "" : lang + "/"}index.js`);
  CASE_ID = id;
  DOCS = m.DOCS;
  QUESTIONS = m.QUESTIONS;
  ENDING_DOCS = m.ENDING_DOCS;
  META = m.META;
  SECRETS = decode(m.SECRET, m.SECRET_KEY);
  byId = new Map(DOCS.map((d) => [d.id, d]));
}
/** Document object by id (undefined if unknown). */
export const doc = (id) => byId.get(id);

/** True once the whole case is solved. */
export const finished = () => state.stage >= QUESTIONS.length;

/** Documents the player may see now, in folder order. Ending documents appear once the case is closed. */
export function visibleDocs() {
  return DOCS.filter((d) => d.stage <= state.stage);
}

/** The open question, or null when every question is solved. */
export function currentQuestion() {
  return QUESTIONS[state.stage] || null;
}

/** The response object of a question (created on demand). */
export function responseOf(qid) {
  if (!state.resp[qid]) state.resp[qid] = {};
  return state.resp[qid];
}

/** The pins part of the open question, or null. */
export function pinsPart() {
  const q = currentQuestion();
  return q ? q.parts.find((p) => p.type === "pins") || null : null;
}

/** Document ids pinned for the open question (empty slots left out). */
export function currentPins() {
  return pinSlots().filter(Boolean);
}

/**
 * The evidence slots of the open question: one entry per idea to prove, a document id or null.
 * Older saves kept a packed list; it is padded here so its documents keep their slots.
 */
export function pinSlots() {
  const q = currentQuestion(), part = pinsPart();
  if (!q || !part) return [];
  const r = responseOf(q.id);
  const old = Array.isArray(r.pins) ? r.pins : [];
  r.pins = Array.from({ length: part.count }, (_, k) => old[k] || null);
  return r.pins;
}

/** True when the case hides the ideas on its evidence slots (META.hideIdeas): slots only say "Evidence 1/2/3". */
export const ideasHidden = () => Boolean(META.hideIdeas);

/** The label of the idea an evidence slot must prove (from the case data), or "" when the case has none or hides them. */
export const ideaOf = (qid, k) => (ideasHidden() ? "" : SECRETS[qid]?.ideas?.[k] || "");

/** Short name of evidence slot k: "Ý 2" / "Point 2", or "Bằng chứng 2" / "Evidence 2" without an idea label. */
export const slotName = (qid, k) => (ideaOf(qid, k) ? t("ideaN", k + 1) : t("ideaFallback", k + 1));

/**
 * Pins or unpins a document as evidence for the open question. Returns a short message for the player.
 * Without a slot: unpins a pinned document, else fills the first empty slot.
 * With a slot: puts the document in that slot (moving it from another slot, or replacing what was there).
 */
export function togglePin(docId, slot = null) {
  const q = currentQuestion(), part = pinsPart();
  if (!q || !part) return t("noOpenQ");
  const pins = pinSlots();
  const i = pins.indexOf(docId);
  let msg;
  if (slot === null) {
    if (i >= 0) { pins[i] = null; msg = t("unpinned"); }
    else {
      const free = pins.indexOf(null);
      if (free < 0) return t("full", part.count);
      pins[free] = docId; msg = t(ideasHidden() ? "pinnedToSlot" : "pinnedTo", free + 1);
    }
  } else if (i === slot) { pins[i] = null; msg = t("unpinned"); }
  else {
    if (i >= 0) pins[i] = null;
    pins[slot] = docId; msg = t(ideasHidden() ? "pinnedToSlot" : "pinnedTo", slot + 1);
  }
  save(); emit("pins");
  return msg;
}

// ---- event bus ----
const listeners = new Map();
/** Subscribes to an event: "pins", "unlock", "open", "pick", "seen", "reset". */
export function on(name, fn) {
  if (!listeners.has(name)) listeners.set(name, []);
  listeners.get(name).push(fn);
}
/** Fires an event with an optional payload. */
export function emit(name, payload) {
  (listeners.get(name) || []).forEach((fn) => fn(payload));
}

/** Line-picking mode for "point at the lie" parts: { qid, partId } while active. */
export const picking = { active: null };
