// Shared pieces for case 03 documents: Egyptian date writer, glyph spans, papyrus headers.
import { DAYS, SEASONS, numeral, hg } from "../facts.js";

const ROMAN = ["", "I", "II", "III", "IV"];

/**
 * Writes the date of a known event (facts.DAYS[key]) the way a scribe would: "năm 16, tháng II mùa Peret, ngày 19".
 * glyph = true writes the day in hieroglyphic numerals. The span carries data-eg for the tests.
 */
export function ed(key, glyph = false) {
  const d = DAYS[key];
  const day = glyph ? `<span class="glyphs" style="font-size:26px">${numeral(d.day)}</span>` : d.day;
  return `<span data-eg="${key}">năm ${d.year ?? 16}, tháng ${ROMAN[d.month]} mùa ${SEASONS[d.season]}, ngày ${day}</span>`;
}

/** Day-of-month only, in hieroglyphic numerals, marked for the tests. */
export const eday = (key) => `<span data-eg="${key}" class="glyphs" style="font-size:26px">${numeral(DAYS[key].day)}</span>`;

/** A hieroglyphic word from sign keys, e.g. g("KH N S W"). */
export const g = (keys, cls = "") => `<span class="glyphs ${cls}">${hg(keys)}</span>`;

/** A number in hieroglyphic numerals. */
export const n = (value, size = 26) => `<span class="glyphs" style="font-size:${size}px">${numeral(value)}</span>`;

/** Translator's note under a papyrus (the game presents every text in Vietnamese translation). */
export const tr = (text) => `<p class="tr-note">Bản dịch · ${text}</p>`;
