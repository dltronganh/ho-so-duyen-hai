// Slot checks: the player may ask whether one evidence slot holds a document that proves the idea named on it.
// The answer is only "enough" / "not enough" (never which document is right) and each check costs one hint,
// counted together with the direction hints at the end of the case, so checks cannot be used to probe for free.
// Pure functions over the saved state (js/store.js), so they are unit tested.
import { slotProves } from "./answer.js";

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
