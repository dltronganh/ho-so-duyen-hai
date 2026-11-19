// Case-03-only checks: Egyptian dates, hieroglyph spellings and numerals, the corridor arithmetic, the gold weight.
// Called by the test suite with its test helpers.
import { DAYS, REST_DAYS, PROGRESS, CORRIDOR_START, WALL_DISTANCE, CUBIT_PALMS, BRACELET_KITE, BRACELETS_TAKEN, KITE_PER_DEBEN,
  dayOfYear, hg, readNumeral, numeral } from "./facts.js";

/** Registers the case-specific tests. */
export default function checks(test, assert, { rendered, host }) {
  test("Egyptian dates written in documents match the facts", () => {
    const marks = [...host.querySelectorAll("[data-eg]")];
    assert(marks.length >= 15, `only ${marks.length} Egyptian date marks`);
    marks.forEach((el) => {
      const d = DAYS[el.dataset.eg];
      assert(d, `unknown date key ${el.dataset.eg}`);
      const glyphs = el.classList.contains("glyphs") ? el : el.querySelector(".glyphs");
      const day = glyphs ? readNumeral(glyphs.textContent) : Number((el.textContent.match(/ngày (\d+)/) || [])[1]);
      assert(day === d.day, `${el.dataset.eg}: day ${day} ≠ ${d.day}`);
    });
  });
  test("break-in and carrying-out happen on crew rest days; journal has no rest-day entries", () => {
    assert(REST_DAYS.includes(DAYS.robbery.day) && REST_DAYS.includes(DAYS.carry_out.day), "not rest days");
    const journal = rendered.get("nhat_ky");
    [...journal.querySelectorAll("tr td:first-child .glyphs")].forEach((g) => assert(!REST_DAYS.includes(readNumeral(g.textContent)), "journal entry on a rest day"));
  });
  test("the patrol log (written next morning) leaves only night 19 unguarded after the beer was made", () => {
    const rows = [...rendered.get("tuan_tra").querySelectorAll("tr")];
    const unguarded = rows.filter((r) => /không tuần/i.test(r.textContent)).map((r) => readNumeral(r.querySelector(".glyphs").textContent) - 1);
    assert(unguarded.length === 1 && unguarded[0] === DAYS.robbery.day && unguarded[0] > DAYS.beer.day, `unguarded nights ${unguarded}`);
  });
  test("corridor C reaches 41 cubits 5 palms by day 16, two palms short of the burial chamber", () => {
    const palms = Object.values(PROGRESS).reduce((a, [c, p]) => a + c * CUBIT_PALMS + p, CORRIDOR_START * CUBIT_PALMS);
    assert(palms === 41 * CUBIT_PALMS + 5, `corridor ${palms / CUBIT_PALMS} cubits`);
    assert(WALL_DISTANCE[0] * CUBIT_PALMS + WALL_DISTANCE[1] - palms === 2, "gap is not 2 palms");
  });
  test("four bracelets of 25 kite make 10 deben; 20 deben of silver is the right price", () => {
    const deben = BRACELETS_TAKEN * BRACELET_KITE / KITE_PER_DEBEN;
    assert(deben === 10 && deben * 2 === 20, `gold ${deben} deben`);
  });
  test("20 days pass from the break-in to the opening", () => {
    assert(dayOfYear(DAYS.opening) - dayOfYear(DAYS.robbery) === 20, "day count");
  });
  test("the carved mark spells KH-N-S-W (Khonsu); the jar docket spells I-S-T (Pakhar's wife Iset) and day 17", () => {
    assert(rendered.get("hinh_khac").textContent.includes(hg("W S N KH")), "mark missing (stored in visual order, each sign mirrored)");
    const docket = rendered.get("nhan_vo").textContent;
    assert(docket.includes(hg("I S T")) && docket.includes(numeral(17)), "docket wrong");
  });
}
