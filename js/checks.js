// Slot checks: the player may ask whether one evidence slot holds a document that proves the idea named on it.
// The answer is only "enough" / "not enough" (never which document is right) and each check costs one hint,
// counted together with the direction hints at the end of the case, so checks cannot be used to probe for free.
// Pure functions over the saved state (js/store.js), so they are unit tested.
import { slotProves, bestMatch } from "./answer.js";

/** Hints charged per slot check. The same for every case: one rule is easier to remember. */
export const CHECK_COST = 1;

/** The stored verdict for this document in slot k of a question (true / false), or null when not checked yet. */
export function checkedVerdict(state, qid, k, docId) {
  const v = docId ? state.checked?.[qid]?.[k]?.[docId] : undefined;
  return typeof v === "boolean" ? v : null;
}

/**
 * Checks slot k of a question and charges the hint. Returns { ok, charged }, or null when the slot is empty.
 * A document already checked in this slot is answered from the stored verdict without a new charge: the
 * verdict depends only on that document and that slot, so a repeat would pay for nothing new.
 */
export function checkSlot(state, qid, groups, slots, k) {
  const docId = slots[k];
  if (!docId) return null;
  const known = checkedVerdict(state, qid, k, docId);
  if (known !== null) return { ok: known, charged: false };
  const ok = slotProves(groups, slots, k);
  state.checked = state.checked || {};
  state.checked[qid] = state.checked[qid] || {};
  state.checked[qid][k] = { ...state.checked[qid][k], [docId]: ok };
  state.checks = state.checks || {};
  state.checks[qid] = (state.checks[qid] || 0) + CHECK_COST;
  return { ok, charged: true };
}

/** Hints used in the whole case: direction hints opened plus hints spent on slot checks. */
export function hintsUsed(state) {
  const sum = (o) => Object.values(o || {}).reduce((a, b) => a + b, 0);
  return sum(state.hints) + sum(state.checks);
}

/** Hints spent on slot checks in the whole case. */
export function checksUsed(state) {
  return Object.values(state.checks || {}).reduce((a, b) => a + b, 0);
}

/** True exactly once per case (the first time it is asked): whether to show the note about slot checks. */
export function takeCheckTip(state) {
  if (state.checkTip) return false;
  state.checkTip = true;
  return true;
}

// ---- cases that hide the ideas: slot order does not matter ----
// The slots only say "Evidence 1/2/3", so a check asks whether the document proves an idea of the question that
// the other pinned documents do not already prove (the same best matching the grading can find). Verdicts are
// stored per document, not per slot. "Enough" stays true while the document is pinned; "not enough" holds only
// for the same set of pinned documents, because another set can free an idea for it.

/** Key of a set of pinned documents, the same in any slot order. */
const setKey = (slots) => [...new Set(slots.filter(Boolean))].sort().join("|");

/** The stored verdicts of a question in a case without idea labels: { docId: { ok, set } }. */
const anyChecks = (state, qid) => state.checked?.[qid]?.any || {};

/** Documents of a question already found enough. */
const knownEnough = (state, qid) => Object.keys(anyChecks(state, qid)).filter((id) => anyChecks(state, qid)[id].ok);

/**
 * The verdict to show for the document in slot k of a case without idea labels (true / false), or null when it
 * has to be checked (again). An "enough" document keeps its mark only while it still proves an idea of its own
 * next to the other "enough" documents, so all slots marked enough always mean the grading accepts.
 */
export function anyVerdict(state, qid, groups, slots, k) {
  const id = slots[k], v = id ? anyChecks(state, qid)[id] : undefined;
  if (!v) return null;
  if (v.ok) return bestMatch(groups, slots, knownEnough(state, qid)).has(id) ? true : null;
  return v.set === setKey(slots) ? false : null;
}

/**
 * Checks slot k of a case without idea labels and charges the hint. Returns { ok, charged }, or null when the
 * slot is empty. The document is enough when the best matching of the pinned documents (keeping the ones
 * already found enough) gives it an idea of its own. A verdict still shown for it is answered for free.
 */
export function checkAnySlot(state, qid, groups, slots, k) {
  const id = slots[k];
  if (!id) return null;
  const known = anyVerdict(state, qid, groups, slots, k);
  if (known !== null) return { ok: known, charged: false };
  const ok = bestMatch(groups, slots, knownEnough(state, qid), id).has(id);
  state.checked = state.checked || {};
  state.checked[qid] = state.checked[qid] || {};
  state.checked[qid].any = { ...state.checked[qid].any, [id]: ok ? { ok } : { ok, set: setKey(slots) } };
  state.checks = state.checks || {};
  state.checks[qid] = (state.checks[qid] || 0) + CHECK_COST;
  return { ok, charged: true };
}
