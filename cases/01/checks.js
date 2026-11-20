// Case-01-only logic checks (the puzzle's own arithmetic). Called by the test suite with its test helpers.
import { EVENTS, SEAL, GRAMS_PER_LUONG, STATION_MINUTES, STATION_MINUTES_CAR, CAFE_TO_BACKDOOR_MINUTES, TAPE_START, TAPE_SIDE_MINUTES } from "./facts.js";

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
    assert(minutes(EVENTS.ticket_dinh) - STATION_MINUTES_CAR < minutes(EVENTS.outage), "even by car Định could have left after the outage");
  });
  test("every quoted tape counter fits on one cassette side", () => {
    const quoted = ["seal_seen", "outage", "flash_photo", "power_back", "case_found_empty"].map((k) => minutes(EVENTS[k]) - minutes(TAPE_START));
    assert(Math.min(...quoted) >= 0, "an event is quoted before the tape started");
    assert(Math.max(...quoted) < TAPE_SIDE_MINUTES, "a tape counter runs past the end of the cassette side");
  });
  test("Vũ leaves the café in time to pull the breaker himself", () => {
    const at = minutes(EVENTS.vu_leaves_cafe) + CAFE_TO_BACKDOOR_MINUTES;
    assert(minutes(EVENTS.vu_cafe) < minutes(EVENTS.vu_leaves_cafe), "Vũ leaves before he arrives");
    assert(at <= minutes(EVENTS.outage) && minutes(EVENTS.outage) - minutes(EVENTS.vu_leaves_cafe) <= 5, "café departure does not fit the outage");
  });
  test("the flash photo is taken during the outage", () => {
    assert(minutes(EVENTS.flash_photo) > minutes(EVENTS.outage) && minutes(EVENTS.flash_photo) < minutes(EVENTS.power_back), "flash outside outage");
  });
}
