// Case-01-only logic checks (the puzzle's own arithmetic). Called by the test suite with its test helpers.
import { EVENTS, SEAL, GRAMS_PER_LUONG, STATION_MINUTES } from "./facts.js";

const minutes = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };

/** Registers the case-specific tests. */
export default function checks(test, assert) {
  test("real seal weight is 11 lượng 2 chỉ = 420 g; fake is about 5 lượng", () => {
    assert(SEAL.real_luong * GRAMS_PER_LUONG === SEAL.real_grams, "real weight arithmetic");
    assert(Math.abs(SEAL.fake_luong_fisher * GRAMS_PER_LUONG - SEAL.fake_grams) < 3, "fisherman's 5 lượng ≠ 186 g");
  });
  test("Định's ticket proves he left before the outage; the namesake's does not", () => {
    const leftBy = minutes(EVENTS.ticket_dinh) - STATION_MINUTES[0];
    assert(leftBy < minutes(EVENTS.outage), "Định could have left after the outage");
    const other = minutes(EVENTS.ticket_dinh2) - STATION_MINUTES[1];
    assert(other > minutes(EVENTS.outage), "the namesake trap does not work");
    assert(minutes(EVENTS.dinh_leaves) <= leftBy, "dinh_leaves too late for the ticket");
  });
  test("the flash photo is taken during the outage", () => {
    assert(minutes(EVENTS.flash_photo) > minutes(EVENTS.outage) && minutes(EVENTS.flash_photo) < minutes(EVENTS.power_back), "flash outside outage");
  });
}
