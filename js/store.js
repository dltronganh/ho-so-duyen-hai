// Saved progress of one case in the browser (localStorage). The game must still work when storage is blocked
// (private mode, previews), so every access is wrapped and failures fall back to memory only.
// Used by: js/app.js and the panels it wires up. Shape documented in fresh().

let KEY = "hsdh.case01.v1";

/** A brand new investigation. */
function fresh() {
  return {
    v: 1,
    started: false,
    stage: 0,            // number of solved questions = highest unlocked document stage
    seen: {},            // docId -> true once opened in the reader
    pos: {},             // docId -> { x, y, r } on the board (world px, rotation deg)
    strings: [],         // [docIdA, docIdB] red strings on the board
    hl: {},              // docId -> [index of highlighted block]
    notes: "",           // notebook text
    resp: {},            // questionId -> { partId: value }
    hints: {},           // questionId -> number of hints shown (0..3)
    peeked: {},          // questionId -> true when the solution was revealed
    tries: {},           // questionId -> wrong submissions
    view: null,          // board pan/zoom { x, y, z }
    sound: true,
    startedAt: null,
    finishedAt: null,
  };
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (data && data.v === 1) return { ...fresh(), ...data };
    }
  } catch { /* storage blocked or corrupt: start fresh */ }
  return fresh();
}

/** The live state object. Mutate it, then call save(). Filled by loadState(). */
export const state = fresh();

/** Switches to the save slot of a case ("01", "02", …) in a language ("vi" keeps the original key) and loads it. */
export function loadState(caseId, lang = "vi") {
  KEY = `hsdh.case${caseId}${lang === "vi" ? "" : "." + lang}.v1`;
  Object.assign(state, load());
}

let timer = 0;
/** Writes the state soon (debounced so dragging cards does not hammer storage). */
export function save() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* memory only */ }
  }, 250);
}

/** Forgets all progress of this case and returns to the cover. */
export function resetAll() {
  try { localStorage.removeItem(KEY); } catch { /* nothing to remove */ }
  Object.assign(state, fresh());
}
