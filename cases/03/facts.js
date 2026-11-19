// Machine-readable truth of case 03 "Đường hầm dưới Thung lũng" (ancient Egypt), used by documents and tests.
// Also holds the hieroglyph sign list and numeral writer used by the documents.

/** Uniliteral signs (Unicode Egyptian Hieroglyphs) keyed by the transliteration the scribe's chart uses. */
export const SIGNS = {
  "A": "\u{1313F}",   // vulture (ꜣ)
  "I": "\u{131CB}",   // reed leaf (j)
  "Y": "\u{131CC}",   // two reed leaves (y)
  "Ơ": "\u{1309D}",   // forearm (ꜥ)
  "W": "\u{13171}",   // quail chick (w)
  "B": "\u{130C0}",   // foot (b)
  "P": "\u{132AA}",   // stool (p)
  "F": "\u{13191}",   // horned viper (f)
  "M": "\u{13153}",   // owl (m)
  "N": "\u{13216}",   // water (n)
  "R": "\u{1308B}",   // mouth (r)
  "H": "\u{13254}",   // reed shelter (h)
  "Ḥ": "\u{1339B}",   // twisted flax (ḥ)
  "KH": "\u{1340D}",  // placenta (ḫ)
  "S": "\u{132F4}",   // folded cloth (s)
  "SH": "\u{13219}",  // pool (š)
  "Q": "\u{1320E}",   // hill slope (q)
  "K": "\u{133A1}",   // basket (k)
  "G": "\u{133BC}",   // jar stand (g)
  "T": "\u{133CF}",   // bread loaf (t)
  "TJ": "\u{1337F}",  // tethering rope (ṯ)
  "D": "\u{130A7}",   // hand (d)
  "DJ": "\u{13193}",  // cobra (ḏ)
};

/** Writes a word from space-separated sign keys: hg("KH N S W"). */
export const hg = (keys) => keys.split(" ").map((k) => SIGNS[k]).join("");

/** Hieroglyphic numerals, largest first: 1000 lotus, 100 coil, 10 heel bone, 1 stroke. */
export const NUM = { 1000: "\u{131BC}", 100: "\u{13362}", 10: "\u{13386}", 1: "\u{133FA}" };
export function numeral(n) {
  let s = "";
  for (const v of [1000, 100, 10, 1]) { while (n >= v) { s += NUM[v]; n -= v; } }
  return s;
}
/** Reads a hieroglyphic numeral string back to a number (used by tests). */
export function readNumeral(str) {
  let n = 0;
  for (const ch of str) for (const v of [1000, 100, 10, 1]) if (ch === NUM[v]) n += v;
  return n;
}

/** Seasons in calendar order. A month has 30 days; a year is 3 seasons × 4 months + 5 extra days. */
export const SEASONS = ["Akhet", "Peret", "Shemu"];
/** Rest days of the crew in every month. */
export const REST_DAYS = [9, 10, 19, 20, 29, 30];

/** Key dates (year 16 unless noted): season index, month (1–4), day. */
export const DAYS = {
  burial:       { year: 6, season: 2, month: 4, day: 28 },
  near_break:   { season: 1, month: 2, day: 16 },
  beer:         { season: 1, month: 2, day: 17 },
  patrol_ok:    { season: 1, month: 2, day: 18 },
  robbery:      { season: 1, month: 2, day: 19 },
  carry_out:    { season: 1, month: 2, day: 20 },
  plaster:      { season: 1, month: 2, day: 21 },
  sale:         { season: 1, month: 2, day: 22 },
  ox:           { season: 1, month: 3, day: 1 },
  accusation:   { season: 1, month: 3, day: 2 },
  inspection:   { season: 1, month: 3, day: 4 },
  opening:      { season: 1, month: 3, day: 9 },
};

/** Day number within the year (1-based) for comparisons and differences. */
export const dayOfYear = (d) => d.season * 120 + (d.month - 1) * 30 + d.day;

/** Corridor C of tomb 9: length before the 11th, and daily progress (cubits, palms) on working days 11–16. */
export const CUBIT_PALMS = 7;
export const CORRIDOR_START = 30;
export const PROGRESS = { 11: [2, 3], 12: [2, 1], 13: [1, 6], 14: [2, 2], 15: [1, 5], 16: [1, 2] };
/** From tomb 9 entrance to the wall of the burial chamber along corridor C, per the survey plan: 42 cubits 0 palms (corridor C reaches 41 cubits 5 palms). */
export const WALL_DISTANCE = [42, 0];

/** Weights: 1 deben = 10 kite. Each gold bracelet 25 kite (2 deben 5 kite); four were taken. */
export const KITE_PER_DEBEN = 10;
export const BRACELET_KITE = 25;
export const BRACELETS_TAKEN = 4;
export const MIRROR_DEBEN = 3;
