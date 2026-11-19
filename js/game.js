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

/** Document ids pinned for the open question. */
export function currentPins() {
  const q = currentQuestion();
  return q ? responseOf(q.id).pins || [] : [];
}

/** Pins or unpins a document as evidence for the open question. Returns a short message for the player. */
export function togglePin(docId) {
  const q = currentQuestion(), part = pinsPart();
  if (!q || !part) return t("noOpenQ");
  const r = responseOf(q.id);
  const pins = r.pins || (r.pins = []);
  const i = pins.indexOf(docId);
  if (i >= 0) { pins.splice(i, 1); save(); emit("pins"); return t("unpinned"); }
  if (pins.length >= part.count) return t("full", part.count);
  pins.push(docId); save(); emit("pins"); return t("pinned");
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
