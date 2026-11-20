// Case-04-only checks: the humidity chart offset, who was in the building when the case was opened, the swap window,
// the sign order of each photograph of the fragment, the minutes alone, the keys, and the twist (Mr. Bảo set the swap up). Called by the test suite.
import { EVENTS, CHART_AHEAD_MIN, CASE_OPENINGS, FAKE_DELIVERED, LAST_GENUINE_PHOTO, FIRST_FAKE_PHOTO, SWAP_DAY, ROOM3_RING, TUBE_CM, LABEL_CM, BAO_ROOM, BKK_PHONE, INSURANCE_RAISED_DAY, INSURED_USD, WALK_LOBBY_OFFICE, WALK_LOBBY_ROOM3 } from "./facts.js";
import { hg } from "../03/facts.js";

const min = (t) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
const hhmm = (m) => `${String(Math.floor(((m % 1440) + 1440) % 1440 / 60)).padStart(2, "0")}:${String(((m % 60) + 60) % 60).padStart(2, "0")}`;

/** Registers the case-specific tests. */
export default function checks(test, assert, { rendered, lang = "vi" }) {
  const say = (vi, en) => (lang === "en" ? en : vi);  // phrase to look for in the documents of this language
  const money = (s) => (lang === "en" ? s.replace(/\./g, ",") : s);
  test("humidity chart: the two Monday anchors and the removal show the same 3 h 30 offset; the opening reads Thursday 23:40", () => {
    assert(CHART_AHEAD_MIN === 210, "offset");
    assert(hhmm(min("09:10") + CHART_AHEAD_MIN) === "12:40", "pen down");
    assert(hhmm(min(EVENTS.silica_open) + CHART_AHEAD_MIN) === "17:30", "silica change");
    assert(hhmm(min(EVENTS.wipe_open) + CHART_AHEAD_MIN) === EVENTS.silica_open, "the cleaning must show at the logged silica time (the trap)");
    assert(hhmm(min(EVENTS.case_opened) + CHART_AHEAD_MIN) === "23:40", "opening");
    assert(hhmm(min(EVENTS.chart_removed) + CHART_AHEAD_MIN) === "11:15", "removal");
    // The naive reading falls after the guard's round, never on it: the round at 23:30 must come before 23:40.
    assert(min(EVENTS.round_2) < min("23:40"), "naive reading should not equal the round");
  });
  test("at the true opening time both Hà and Khoa were inside, nobody else", () => {
    const t = min(EVENTS.case_opened);
    assert(min(EVENTS.ha_back) < t && t < min(EVENTS.ha_leaves), "Hà window");
    assert(min(EVENTS.ring_out) < t && t < min(EVENTS.ring_back), "Khoa window");
    ["quan_out", "kieu_out", "lam_out", "guests_out"].forEach((k) => assert(min(EVENTS[k]) < t, `${k} still inside`));
  });
  test("after the forgery was delivered, the swap window holds exactly one opening of the case (12/11)", () => {
    const inside = CASE_OPENINGS.filter((d) => d > LAST_GENUINE_PHOTO && d > FAKE_DELIVERED && d < FIRST_FAKE_PHOTO);
    assert(CASE_OPENINGS.filter((d) => d > LAST_GENUINE_PHOTO && d < FIRST_FAKE_PHOTO).length === 2, "the 10/11 decoy opening is missing");
    assert(inside.length === 1 && inside[0] === SWAP_DAY, `openings in window: ${inside}`);
    const log = rendered.get("so_tu").textContent;
    CASE_OPENINGS.forEach((d) => assert(log.includes(`${d}/11`), `case log lacks ${d}/11`));
  });
  test("photographs: genuine reads KH-N-S-W; the mirror print, the newspaper and the copy show W-S-N-KH; the newspaper lacks the hole", () => {
    const line2 = hg("KH N S W"), rev2 = hg("W S N KH"), line4rev = hg("Y R H");
    assert(rendered.get("tinh_trang").textContent.includes(line2), "registration photo");
    assert(rendered.get("catalogue2").textContent.includes(line2), "second printing");
    const flat = (id) => rendered.get(id).textContent.replace(/\s/g, "");
    assert(flat("catalogue1").includes(rev2) && flat("catalogue1").includes(line4rev), "first printing");
    assert(flat("bao_7").includes(rev2) && rendered.get("bao_7").querySelectorAll(".pap-hole").length === 0, "newspaper crops the hole");
    assert(flat("anh_lop").includes(rev2) && flat("anh_lop").includes(line4rev), "class photo shows the copy");
    assert(rendered.get("catalogue1").querySelectorAll(".fl").length > 0 && rendered.get("anh_lop").querySelectorAll(".fl").length === 0, "only the print is flipped");
  });
  test("Khoa was alone 20 minutes; the tube is far longer than the labels; only the first catalogue has both the hole and the stain", () => {
    const alone = min(EVENTS.ha_back_case) - min(EVENTS.ha_left_case);
    assert(alone === 20 && min(EVENTS.ha_back_case) - min(EVENTS.call_end) === 2 && min(EVENTS.ha_left_case) - min(EVENTS.call_start) === 2, `alone ${alone}`);
    assert(TUBE_CM > 2 * LABEL_CM[0], "tube");
    assert(rendered.get("so_dat_hang").textContent.includes(say("tờ mẫu", "sample sheet")), "order names the sign chart as model");
    const inv = rendered.get("thiep_moi"), cat = rendered.get("catalogue1");
    assert(inv.querySelectorAll(".pap-stain").length === 0 && inv.querySelectorAll(".pap-hole").length === 1 && inv.querySelectorAll(".fl").length > 0, "invitation: mirrored, stain retouched");
    assert(cat.querySelectorAll(".pap-hole").length === 1 && cat.querySelectorAll(".pap-stain").length === 1, "catalogue keeps hole and stain");
  });
  test("the Room 3 ring holds no display-case key; the parcel left after the swap and before the theft", () => {
    assert(!ROOM3_RING.some((k) => /tủ trưng bày|P-07/.test(k)), "ring");
    assert(rendered.get("khai_luc").textContent.includes(say("ba chìa", "three keys")), "guard statement");
    assert(rendered.get("buu_pham").textContent.includes(`${TUBE_CM} cm`), "parcel tube");
  });
  test("twist: room 204 is Mr. Bảo (16:35 call to the museum on 12/11); it rang the parcel's Bangkok number 25 minutes after posting, the insurer before the swap, the TV station on 17/11", () => {
    const hotel = rendered.get("so_khach_san"), rows = [...hotel.querySelectorAll("tr")].map((r) => r.textContent);
    const row = (time) => rows.find((r) => r.includes(time) && r.includes(BAO_ROOM));
    assert(row(EVENTS.bao_call_12) && [...rendered.get("tong_dai").querySelectorAll("tr")].some((r) => r.textContent.includes(EVENTS.bao_call_12) && r.textContent.includes(say("Ông Bảo gọi từ khách sạn Sông Hoài", "Mr Bảo rings from the Sông Hoài Hotel"))), "room 204 = Bảo");
    assert(row(EVENTS.bao_call_bkk).includes(BKK_PHONE) && rendered.get("buu_pham").textContent.includes(BKK_PHONE), "Bangkok number");
    assert(min(EVENTS.bao_call_bkk) - min(EVENTS.ems_sent) === 25, "call after posting");
    assert(row(EVENTS.bao_call_insurer).includes(say("Bảo hiểm", "Insurance")) && row(EVENTS.bao_call_tv).includes(say("Đài", "Station")), "insurer and TV calls");
    assert(INSURANCE_RAISED_DAY > 7 && INSURANCE_RAISED_DAY < SWAP_DAY, "raised between the order and the swap");
    const amend = rendered.get("phu_luc").textContent;
    assert(amend.includes(money("8.000")) && amend.includes(money("30.000")) && amend.includes(`${INSURANCE_RAISED_DAY}/11`), "amendment");
    assert(INSURED_USD[1] === 30000, "sum");
  });
  test("decoy: the photographer Tín had no time to stop at Room 3 (in 15:20, upstairs 15:21, signed 15:23, out 15:24)", () => {
    assert(min(EVENTS.tin_in) + WALK_LOBBY_OFFICE === min("15:21"), "up");
    assert(min(EVENTS.tin_signed) + WALK_LOBBY_OFFICE === min(EVENTS.tin_out), "straight down and out");
    assert(WALK_LOBBY_OFFICE + WALK_LOBBY_ROOM3 === min(EVENTS.ha_back_case) - min(EVENTS.call_end), "map walks agree with Hà's two minutes");
    assert(rendered.get("so_do").textContent.includes(say("chừng một phút", "about one minute")), "map gives the walks");
  });
}
