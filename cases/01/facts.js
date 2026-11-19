// Machine-readable truth of case 01, used by the consistency checks.
// Change a fact here first, then the documents that show it.
// Documents mark checkable values with data-check attributes (see js/kit.js); tests compare them to these facts.

/** People: birth date (ISO) or birth year, ID card number where one exists. */
export const PEOPLE = {
  khai:   { name: "Tôn Thất Khải", born: "1922-05-12" },
  vu:     { name: "Tôn Thất Vũ", born: "1965-11-03" },
  nguyet: { name: "Phan Thị Nguyệt", born: "1949-08-19" },
  dinh:   { name: "Lê Văn Định", born: "1972-06-08", cmnd: "205118437" },
  dinh2:  { name: "Lê Văn Định", born: "1959-01-20", cmnd: "201447026" }, // the other passenger with the same name
  tam:    { name: "Hồ Minh Tâm", born: "1952-01-27", cmnd: "022615390" },
  sau:    { name: "Nguyễn Văn Sáu", born: "1940" },
  hoa:    { name: "Lê Thị Hoa", born: "1969-02-14" },
  thu:    { name: "Đỗ Thị Thu", born: "1958-10-02" },
  bay:    { name: "Trương Văn Bảy", born: "1935" },
};

/** Clock times (HH:MM, evening of Saturday 1997-03-15 unless the key says otherwise). */
export const EVENTS = {
  ribbon: "19:30",
  vu_cafe: "20:30",
  vu_leaves_cafe: "20:38", // "not ten minutes" after arriving, two or three minutes before the outage
  dinh_leaves: "20:20",
  seal_seen: "20:39",
  outage: "20:41",
  flash_photo: "20:50",
  ticket_dinh: "20:52",
  power_back: "21:00",
  case_found_empty: "21:02",
  police_called: "21:10",
  ticket_dinh2: "21:21",
  scene_report: "21:30",
  train_hue: "21:35",
  handover: "15:00", // Friday 1997-03-14
};

/** Weights in grams. One lượng (cây) of gold = 10 chỉ = 37.5 g. */
export const GRAMS_PER_LUONG = 37.5;
export const SEAL = {
  real_luong: 11.2,       // "11 lượng 2 chỉ" in the 1985 family ledger
  real_grams: 420,
  fake_grams: 186,        // weighed at the museum on 1997-03-14
  fake_luong_fisher: 5,   // fisherman's goldsmith scale
};

/** Minutes by motorbike taxi from the town centre to the station, as printed on the town map. */
export const STATION_KM = 12;
export const STATION_MINUTES = [25, 30];
/** By car the same trip takes about this long (also on the map). */
export const STATION_MINUTES_CAR = 20;
/** Walk from the café to the museum back door, in minutes. */
export const CAFE_TO_BACKDOOR_MINUTES = 1;

/** The town radio station started its second tape at this clock time (counter 00:00). */
export const TAPE_START = "20:31";
/** One side of the C90 cassette the station used, in minutes: every quoted counter must fit on it. */
export const TAPE_SIDE_MINUTES = 45;
