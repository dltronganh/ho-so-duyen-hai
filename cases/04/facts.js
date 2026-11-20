// Machine-readable truth of case 04 "Tủ kính số 7" (Hoài Giang, November 1999), used by documents and tests.
// Change a fact here first, then the documents that show it.
// The exhibited object is a fragment of the grain-wage ledger of the Set-Maat crew (the village of case 03).

/** People: birth date (ISO) or birth year. */
export const PEOPLE = {
  bao:    { name: "Trịnh Gia Bảo", born: "1928-04-02" },
  lam:    { name: "Lâm Quang Tịnh", born: "1925-09-15" },
  ha:     { name: "Lê Thu Hà", born: "1968-07-21" },
  khoa:   { name: "Đỗ Văn Khoa", born: "1973-03-08" },
  quan:   { name: "Trịnh Minh Quân", born: "1964-12-01" },
  luc:    { name: "Tạ Văn Lực", born: "1943" },
  kieu:   { name: "Võ Thị Kiều", born: "1971" },
  ngan:   { name: "Trần Thị Ngân", born: "1959" },
  nguyet: { name: "Phan Thị Nguyệt", born: "1949-08-19" },
};

/** True clock times (HH:MM). Keys carry their day where it is not obvious. */
export const EVENTS = {
  install_start: "14:00", install_end: "16:10",      // Fri 5/11
  reshoot_open: "08:40", reshoot_close: "09:20",     // Tue 9/11
  khoa_in_12: "14:50", label_open: "15:05", call_start: "15:11", ha_left_case: "15:13", call_end: "15:31", ha_back_case: "15:33", label_close: "15:40", khoa_out_12: "16:20", // Fri 12/11
  school_in: "15:00", school_out: "16:00", tin_in: "15:20", tin_signed: "15:23", tin_out: "15:24",           // Fri 12/11, a school group in room 1
  bao_call_insurer: "09:30",                          // Wed 10/11, room 204
  bao_call_12: "16:35",                               // Fri 12/11, room 204 to the museum
  ems_sent: "07:40", bao_call_bkk: "08:05",           // Sat 13/11
  bao_call_tv: "14:10",                               // Wed 17/11, room 204 to the TV station
  chart_mount: "09:00", wipe_open: "10:30", wipe_close: "10:40", silica_open: "14:00", silica_close: "14:20", // Mon 15/11
  archive_out: "08:10", archive_back: "16:30",        // Tue 16/11
  talk_start: "18:30", talk_end: "19:45",            // Thu 18/11
  quan_out: "19:50", kieu_out: "19:51", ha_out: "19:52", lam_out: "19:53", lan_out: "19:54", guests_out: "19:56",
  ring_out: "19:58", ha_back: "20:02", case_opened: "20:10", ha_leaves: "20:26", ring_back: "20:21",
  round_1: "21:00", round_2: "23:30", round_3: "02:00", round_4: "05:00",
  cleaner_in: "06:50", case_found: "07:05", police_in: "07:30", chart_removed: "07:45", // Fri 19/11
  tv_reading: "09:00",                                // planned for Fri 19/11
};

/** The humidity chart of case P-07 was mounted 3 h 30 min ahead: chart time = true time + this. */
export const CHART_AHEAD_MIN = 210;

/** Chart week: drum starts Monday 15/11/1999 00:00. Chart day index 0 = Monday. */
export const CHART_WEEK_START = "1999-11-15";

/**
 * The four lines of the genuine fragment P-07, read left to right (signs face left).
 * Line 1 is the number 16 ("year 16"), then the names Khonsu, Iuy, Hori (consonants only).
 */
export const LINES = ["16", "KH N S W", "I W Y", "H R Y"];

/** Days of the exhibition (November 1999) when case P-07 was opened, from the case log. */
export const CASE_OPENINGS = [5, 9, 10, 12, 15];
/** Day the forgery left the photo shop (evening of 11/11, order book). */
export const FAKE_DELIVERED = 11;
/** Last photo of the genuine fragment in the case, first photo of the forgery, day of the swap. */
export const LAST_GENUINE_PHOTO = 9;
export const FIRST_FAKE_PHOTO = 14;
export const SWAP_DAY = 12;

/** The two keys of case P-07: Hà's own, and the spare in the sealed key box upstairs (seal intact). */
export const CASE_KEYS = ["ha", "sealed_box"];
/** Keys on the "Phòng 3" ring the guard lent to Khoa: no display-case key. */
export const ROOM3_RING = ["cửa Phòng 3", "kho Phòng 3", "tủ điện Phòng 3"];

/** Sizes: fragment 24 × 19 cm; Khoa's tube 60 cm; the new labels 21 × 3.5 cm. */
export const FRAGMENT_CM = [24, 19];
export const TUBE_CM = 60;
export const LABEL_CM = [21, 3.5];

/** The twist: Mr. Bảo set the swap up. His hotel room, the Bangkok number he rang after the parcel left, the day he raised the insured value. */
export const BAO_ROOM = "204";
export const BKK_PHONE = "66-2-234 5170";
export const INSURANCE_RAISED_DAY = 10;
export const INSURED_USD = [8000, 30000];

/** Walking minutes from the floor plan: lobby to the admin office upstairs, lobby to Room 3 (Room 3 to the office = 2). */
export const WALK_LOBBY_OFFICE = 1;
export const WALK_LOBBY_ROOM3 = 1;
