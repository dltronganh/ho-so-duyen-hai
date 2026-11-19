// Case-02-only checks: the puzzle's arithmetic (clock offset, fuel, tide window, telegram key, ages, lunar dates,
// map distances and travel times).
// Called by the test suite with its test helpers.
import { EVENTS, POST_CLOCK_FAST, TIDE, FORD_MAX, FUEL, POEM, TELEGRAM_CODE, TELEGRAM_PLAIN, PEOPLE, LUNAR_NEW_YEAR } from "./facts.js";
import { normalizeText } from "../../js/answer.js";
import { MAP } from "./art.js";

const minutes = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };

/** Registers the case-specific tests. */
export default function checks(test, assert, { rendered }) {
  test("both radio anchors in the post's log give the same 25-minute error", () => {
    const log = rendered.get("so_tram");
    const fast = [...log.querySelectorAll("[data-offset]")];
    assert(fast.length === 4, `expected 4 fast-clock entries, got ${fast.length}`);
    fast.forEach((el) => assert(Number(el.dataset.offset) === POST_CLOCK_FAST, `offset ${el.dataset.offset}`));
  });
  test("fuel used matches the run from the pier to the sand bar (4.2 km at 12 km/h), not to Mũi Đá", () => {
    const mins = (FUEL.full - FUEL.left) / FUEL.perHour * 60;
    assert(Math.abs(mins - 4.2 / 12 * 60) <= 2, `engine ran ${mins} min`);
  });
  test("the ford is passable when the boat reaches the sand bar (about 23:02) and closed by 2:00", () => {
    assert(TIDE["23"] < FORD_MAX && TIDE["00"] < FORD_MAX, "ford closed around 23:00–0:00");
    assert(TIDE["02"] > FORD_MAX && TIDE["21"] > FORD_MAX, "ford window too wide");
    assert(TIDE["05"] > FORD_MAX, "footprints at 5:10 must be above a flooded ford");
  });
  test("the telegram decodes with the poem to the official plain text", () => {
    const words = TELEGRAM_CODE.split(" ").map((c) => { const [w, l] = c.split(".").map(Number); return POEM[l - 1].split(" ")[w - 1]; });
    assert(normalizeText(words.join(" ")) === normalizeText(TELEGRAM_PLAIN), `decoded "${words.join(" ")}"`);
    const poem = rendered.get("bao_15").textContent;
    POEM.forEach((l) => assert(poem.includes(l), `poem line missing in bao_15: ${l}`));
  });
  test("the man in Phan Thiết says 50: that is Thành's age, not Thọ's", () => {
    const thoAge = 1998 - Number(PEOPLE.tho.born.slice(0, 4)) - 1;
    assert(thoAge === 40, `Thọ would be ${thoAge}`);
    assert(rendered.get("so_kham").textContent.includes("50"), "clinic register must show 50");
  });
  test("lunar day 10 of tháng Giêng is 6/2/1998 and rằm is 11/2/1998", () => {
    const d0 = Date.parse(LUNAR_NEW_YEAR);
    assert((Date.parse("1998-02-06") - d0) / 86400000 + 1 === 10, "mồng 10");
    assert((Date.parse("1998-02-11") - d0) / 86400000 + 1 === 15, "rằm");
  });
  test("Lan waits at An Phú until the bus leaves and can still be back at the temple at the recorded time", () => {
    const ride = 15;  // 6 km by motorbike at night, slow end of the estimate
    assert(minutes(EVENTS.pickup_temple) + ride < 24 * 60 + minutes(EVENTS.bus_anphu), "cannot reach An Phú before the bus");
    assert(minutes(EVENTS.bus_anphu) + ride <= minutes(EVENTS.lan_back_temple), "cannot be back at the temple after the bus left");
  });
  test("map distances: pier to post, post to the ford, temple road, bus run, drift and tow times", () => {
    const km = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]) / MAP.KM;
    const near = (v, want, tol, what) => assert(Math.abs(v - want) <= tol, `${what}: ${v.toFixed(2)} km`);
    near(km(MAP.pier, MAP.post), 1.4, 0.15, "pier to post");
    near(km(MAP.temple, MAP.anPhu), 6, 0.3, "temple road");
    const arrive = minutes(EVENTS.departure) + km(MAP.post, MAP.fordBar) / 12 * 60;  // accepted answers 23:00–23:05
    assert(arrive >= 23 * 60 && arrive <= 23 * 60 + 5, `boat reaches the ford at minute ${arrive.toFixed(1)}`);
    const fuelKm = (FUEL.full - FUEL.left) / FUEL.perHour * 12;
    near(km(MAP.pier, MAP.post) + km(MAP.post, MAP.fordBar), fuelKm, 0.8, "fuel run vs pier to ford");  // "khoảng 9 lít": about ±0.25 l
    const bus = 24 * 60 + minutes(EVENTS.bus_anphu) - (24 * 60 + minutes(EVENTS.bus_depart));
    const busKmh = km(MAP.town, MAP.anPhu) / (bus / 60);
    assert(busKmh >= 20 && busKmh <= 45, `bus town to An Phú at ${busKmh.toFixed(0)} km/h`);
    const drift = (minutes(EVENTS.boat_found) + 24 * 60 - (minutes(EVENTS.departure) + 18)) / 60;
    assert(drift >= 8 && drift <= 10, `drift from the sand bar took ${drift.toFixed(1)} h, the fisherman says eight hours or more`);
    const towKmh = km(MAP.muiDa, MAP.post) / ((minutes(EVENTS.boat_report) - minutes(EVENTS.boat_found)) / 60);
    assert(towKmh <= 8, `towing at ${towKmh.toFixed(1)} km/h`);
  });
}
