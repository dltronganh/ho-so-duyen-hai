// Case-03-only checks: Egyptian dates, the civil calendar and the ten-day week, hieroglyph spellings and numerals,
// the corridor arithmetic against the survey plan, weights, prices and wages, and the answers against the facts.
// Called by the test suite with its test helpers.
import { DAYS, REST_DAYS, PROGRESS, CORRIDOR_START, WALL_DISTANCE, CUBIT_PALMS, BRACELET_KITE, BRACELETS_TAKEN, BRACELETS_LISTED,
  KITE_PER_DEBEN, MIRROR_DEBEN, PRICES, WAGES, OX_SILVER, TOMB_WADI, dayOfYear, hg, readNumeral, numeral } from "./facts.js";

const corridorPalms = () => Object.values(PROGRESS).reduce((a, [c, p]) => a + c * CUBIT_PALMS + p, CORRIDOR_START * CUBIT_PALMS);

/** Registers the case-specific tests. */
export default function checks(test, assert, { rendered, host, S }) {
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
  test("civil calendar: every date is a real day (3 seasons × 4 months × 30 days); events of year 16 run in order", () => {
    Object.entries(DAYS).forEach(([k, d]) => assert(d.season >= 0 && d.season <= 2 && d.month >= 1 && d.month <= 4 && d.day >= 1 && d.day <= 30, `${k} is not a civil date`));
    const order = ["near_break", "beer", "patrol_ok", "robbery", "carry_out", "plaster", "sale", "ox", "accusation", "inspection", "opening"];
    order.slice(1).forEach((k, i) => assert(dayOfYear(DAYS[k]) > dayOfYear(DAYS[order[i]]), `${k} is not after ${order[i]}`));
  });
  test("ten-day week: rest days are the last two days of each decade; nobody works the tombs on them", () => {
    const decade = [...Array(30)].map((_, i) => i + 1).filter((d) => d % 10 === 9 || d % 10 === 0);
    assert(JSON.stringify(decade) === JSON.stringify(REST_DAYS), `rest days ${REST_DAYS}`);
    assert(REST_DAYS.includes(DAYS.robbery.day) && REST_DAYS.includes(DAYS.carry_out.day), "break-in or carrying-out not on a rest day");
    ["plaster", "inspection"].forEach((k) => assert(!REST_DAYS.includes(DAYS[k].day), `${k} must be a working day`));
    const journal = rendered.get("nhat_ky");
    [...journal.querySelectorAll("tr td:first-child .glyphs")].forEach((g) => assert(!REST_DAYS.includes(readNumeral(g.textContent)), "journal entry on a rest day"));
  });
  test("the regnal year does not turn inside the case (no accession festival in the calendar)", () => {
    assert(!/lên ngôi/i.test(rendered.get("lich_le").textContent), "an accession festival on day 19 would start a new regnal year mid-case");
  });
  test("the patrol log (written next morning) leaves only night 19 without a patrol of the tomb's wadi after the beer was made", () => {
    assert(rendered.get("bao_cao").textContent.includes(`khe phía ${TOMB_WADI}`), "the inspection report must say which wadi the tomb is in");
    const rows = [...rendered.get("tuan_tra").querySelectorAll("tr")].map((r) => [readNumeral(r.querySelector(".glyphs").textContent) - 1, r.textContent]);
    const nights = rows.map(([n]) => n);
    for (let n = 11; n <= 29; n++) assert(nights.includes(n), `night ${n} missing from the log`);
    const open = rows.filter(([n, t]) => n > DAYS.beer.day && !(/cả Thung lũng/.test(t) || t.includes(`phía ${TOMB_WADI}`))).map(([n]) => n);
    assert(open.length === 1 && open[0] === DAYS.robbery.day, `unguarded nights ${open}`);
  });
  test("corridor C reaches 41 cubits 5 palms by day 16, two palms short of the burial chamber on the plan", () => {
    const palms = corridorPalms();
    assert(palms === 41 * CUBIT_PALMS + 5, `corridor ${palms / CUBIT_PALMS} cubits`);
    assert(WALL_DISTANCE[0] * CUBIT_PALMS + WALL_DISTANCE[1] - palms === 2, "gap is not 2 palms");
    assert(rendered.get("ban_ve").textContent.includes(numeral(WALL_DISTANCE[0])), "plan does not show the wall distance");
  });
  test("weights: six bracelets listed, two left behind, four of 25 kite = 10 deben of gold; mirror 3 deben everywhere", () => {
    assert(BRACELETS_LISTED - BRACELETS_TAKEN === 2 && /Hai vòng tay vàng/.test(rendered.get("bien_ban_mo").textContent), "bracelets left behind");
    assert(BRACELETS_TAKEN * BRACELET_KITE / KITE_PER_DEBEN === 10, "gold weight");
    ["danh_muc", "le_vat"].forEach((id) => assert(rendered.get(id).textContent.includes(`${numeral(MIRROR_DEBEN)} deben`), `${id}: mirror weight`));
  });
  test("prices: the merchant paid the market rate in silver; the ox cost a normal price, about half a year of a foreman's grain", () => {
    assert(10 * PRICES.goldInSilver === 20 && /hai mươi deben bạc/.test(rendered.get("khai_lai_buon").textContent), "gold price");
    const copper = OX_SILVER * PRICES.silverInCopper;
    assert(copper >= PRICES.oxCopper[0] && copper <= PRICES.oxCopper[1], "ox price out of the market range");
    const months = copper / ((WAGES.chief[0] + WAGES.chief[1]) * PRICES.sackCopper);
    assert(months > 5 && months < 6.5, `ox = ${months} months of wages`);
    assert(/gần sáu tháng lương/.test(S.q4.solution) && !/năm lương/.test(S.q4.solution), "solution misstates the wage comparison");
  });
  test("answers agree with the facts (night, corridor length, gold, day count)", () => {
    assert(S.q1.answers.day[0] === DAYS.robbery.day && S.q1.answers.day[1] === DAYS.robbery.day, "q1 night");
    assert(S.q2.answers.len[0] === Math.floor(corridorPalms() / CUBIT_PALMS), "q2 corridor length");
    assert(S.q3.answers.deben[0] === BRACELETS_TAKEN * BRACELET_KITE / KITE_PER_DEBEN, "q3 gold");
    assert(S.q5.answers.days[0] === dayOfYear(DAYS.opening) - dayOfYear(DAYS.robbery), "q5 days");
    assert(dayOfYear(DAYS.opening) - dayOfYear(DAYS.robbery) === 20, "day count");
  });
  test("the carved mark spells KH-N-S-W (Khonsu); the jar docket spells I-S-T (Pakhar's wife Iset) and day 17", () => {
    assert(rendered.get("hinh_khac").textContent.includes(hg("W S N KH")), "mark missing (stored in visual order, each sign mirrored)");
    const flipped = [...rendered.get("hinh_khac").querySelectorAll("span[style*=\"scaleX(-1)\"]")];
    assert(flipped.length === 4, `the four signs of the carved mark must be drawn mirrored (${flipped.length})`);
    const docket = rendered.get("nhan_vo").textContent;
    assert(docket.includes(hg("I S T")) && docket.includes(numeral(17)), "docket wrong");
  });
}
