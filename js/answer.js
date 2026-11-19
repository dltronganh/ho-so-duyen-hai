// Pure answer checking for the staged questions ("trọng điểm"). No DOM, no storage: unit tested.
// A question has parts; each part has a type:
//   choice  — one option string;        answer: the right string
//   number  — a number typed by player;  answer: [min, max] inclusive
//   line    — a statement line id;       answer: list of accepted line ids
//   time    — a clock time "HH:MM";       answer: list of accepted times ("22:47")
//   text    — free text (accents, case, spaces, punctuation ignored); answer: list of accepted texts
//   order   — the part's items in the player's order; answer: the items in the right order
//   pins    — documents pinned as proof; answer: list of groups, each group = list of accepted doc ids.
//             The player must pin exactly one document per group (distinct documents, no extras).

/** Checks one response against the decoded answers. Returns { ok, complete } (complete = every part filled in). */
export function checkQuestion(question, answers, response) {
  let ok = true, complete = true;
  for (const part of question.parts) {
    const value = response?.[part.id];
    if (!isFilled(part, value)) { complete = false; ok = false; continue; }
    if (!checkPart(part, answers[part.id], value)) ok = false;
  }
  return { ok, complete };
}

/** True when the player has given something for this part (all pin slots used, a number typed, etc.). */
export function isFilled(part, value) {
  if (part.type === "pins") return Array.isArray(value) && value.length === part.count;
  if (part.type === "number") return value !== undefined && value !== null && value !== "" && !Number.isNaN(parseNumber(value));
  if (part.type === "time") return typeof value === "string" && !Number.isNaN(parseTime(value));
  if (part.type === "text") return typeof value === "string" && normalizeText(value).length > 0;
  if (part.type === "order") return Array.isArray(value) && value.length === part.items.length;
  return typeof value === "string" && value.length > 0;
}

/** Checks a single filled part. */
export function checkPart(part, answer, value) {
  switch (part.type) {
    case "choice": return value === answer;
    case "number": { const n = parseNumber(value); return n >= answer[0] && n <= answer[1]; }
    case "line": return answer.includes(value);
    case "time": return answer.some((t) => parseTime(t) === parseTime(value));
    case "text": return answer.some((t) => normalizeText(t) === normalizeText(value));
    case "order": return answer.length === value.length && answer.every((x, i) => x === value[i]);
    case "pins": return matchPins(answer, value);
    default: throw new Error(`Unknown part type ${part.type}`);
  }
}

/** Accepts "420", "420 g", "420,0" (Vietnamese decimal comma). Returns NaN when no number is found. */
export function parseNumber(value) {
  const m = /-?\d+(?:[.,]\d+)?/.exec(String(value));
  return m ? Number(m[0].replace(",", ".")) : NaN;
}

/**
 * True when the pinned documents cover every group exactly once.
 * Small backtracking search: groups are few (2–3), so this is instant.
 */
export function matchPins(groups, pins) {
  if (new Set(pins).size !== pins.length || pins.length !== groups.length) return false;
  const used = new Array(pins.length).fill(false);
  const place = (g) => {
    if (g === groups.length) return true;
    for (let i = 0; i < pins.length; i++) {
      if (!used[i] && groups[g].includes(pins[i])) {
        used[i] = true;
        if (place(g + 1)) return true;
        used[i] = false;
      }
    }
    return false;
  };
  return place(0);
}

/**
 * Reverses the light obfuscation applied by the answer encoder (UTF-8 bytes XOR key, then base64).
 * Not security: it only keeps answers from being read at a glance in the page source.
 */
export function decode(b64, key) {
  const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
  const k = new TextEncoder().encode(key);
  for (let i = 0; i < bytes.length; i++) bytes[i] ^= k[i % k.length];
  return JSON.parse(new TextDecoder().decode(bytes));
}

/** Minutes after midnight for "22:47", "22h47", "22 giờ 47", "0:45", "10:47 pm", "10.47 p.m.". NaN when not a valid time. */
export function parseTime(value) {
  const m = /^\s*(\d{1,2})\s*(?::|h|g|giờ|\.)\s*(\d{1,2})\s*(?:phút|p|(a|p)\.?\s*m\.?)?\s*$/i.exec(String(value));
  if (!m) return NaN;
  let h = Number(m[1]);
  const min = Number(m[2]), half = m[3]?.toLowerCase();
  if (half) { if (h < 1 || h > 12) return NaN; h = (h % 12) + (half === "p" ? 12 : 0); }
  return h < 24 && min < 60 ? h * 60 + min : NaN;
}

/** Lower-case letters and digits only, Vietnamese accents removed (đ → d), for lenient text comparison. */
export function normalizeText(value) {
  return String(value).normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/gi, "d").toLowerCase().replace(/[^a-z0-9]/g, "");
}
