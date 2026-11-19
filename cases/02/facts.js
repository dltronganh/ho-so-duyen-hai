// Machine-readable truth of case 02 "Đêm rằm tháng Giêng", used by the consistency checks.
// Change a fact here first, then the documents that show it.

/** People: birth date (ISO) or birth year, ID card number where one appears in the documents. */
export const PEOPLE = {
  thanh: { name: "Mạc Văn Thành", born: "1947-03-12", cmnd: "205031776" },
  lan:   { name: "Hồ Thị Ngọc Lan", born: "1951-07-22" },
  tu:    { name: "Lê Văn Tư", born: "1978-06-10" },
  cuong: { name: "Võ Đình Cường", born: "1949-01-04" },
  long:  { name: "Huỳnh Kim Long", born: "1962" },
  huy:   { name: "Đặng Quang Huy", born: "1970" },
  nam:   { name: "Trần Thị Năm", born: "1940" },
  tho:   { name: "Mạc Văn Thọ", born: "1957-09-30", cmnd: "205388412" },
  bong:  { name: "Lê Thị Bông", born: "1955" },
};

/** True clock times (HH:MM). Night of Wednesday 11/2/1998 into Thursday 12/2 unless noted. */
export const EVENTS = {
  sea_forecast: "21:45",   // radio sea-weather bulletin (daily)
  radio_open: "05:30",     // radio opens its morning programme (daily)
  thanh_leaves_home: "22:15",
  departure: "22:47",      // boat HG-0417 passes the border post
  low_tide: "23:41",
  lan_leaves_temple: "23:40",
  pickup_temple: "23:45",
  bus_anphu: "00:45",
  bus_cautrang: "01:20",  // 35 min after leaving An Phú
  bus_depart: "00:35",     // night bus leaves Hoài Giang bus station (about 5 km north of An Phú)
  lan_back_temple: "01:05", // she stood at An Phú until the bus left at 0:45, then rode 6 km back
  footprints_seen: "05:10",
  clock_fixed: "06:00",
  lan_reports: "06:20",
  boat_found: "07:35",
  boat_report: "09:05",   // HG-0233 back at the post, towing the drifting boat about 9 km
  boat_checked: "10:00",
  telegram_sent: "08:30",  // 14/2, Phan Thiết
  telegram_received: "09:20", // 14/2, Hoài Giang
};

/** The border post's wall clock ran this many minutes fast until it was corrected at 06:00 on 12/2. */
export const POST_CLOCK_FAST = 25;

/** Lunar new year (mồng 1 tháng Giêng Mậu Dần). */
export const LUNAR_NEW_YEAR = "1998-01-28";

/** Hourly water level (m) at Cửa Hoài, night 11–12/2/1998, from the tide almanac; the ford is passable below FORD_MAX. */
export const TIDE = { "20": 1.2, "21": 0.9, "22": 0.62, "23": 0.38, "00": 0.33, "01": 0.58, "02": 0.86, "03": 1.2, "04": 1.5, "05": 1.76, "06": 1.9 };
export const FORD_MAX = 0.6;

/** Fuel: tank filled to 10 litres on the afternoon of 11/2; 9 litres left at dawn; engine burns 3 l/h at cruising speed (pier to the ford about 4.7 km ≈ 23 min ≈ 1 l; the tank reading is only "about 9 l"). */
export const FUEL = { full: 10, left: 9, perHour: 3 };

/** The telegram and its key poem. Each code is word.line: "3.1" = 3rd word of line 1. */
export const POEM = [
  "Chiều nay anh vẫn ra khơi",
  "Hải âu gửi gió về nơi em chờ",
  "Đừng buồn sóng vỗ bến bờ",
  "Thư anh viết vội bao giờ báo tin",
  "Trăng rằm soi lối anh nhìn",
  "Biển còn sống mãi như hình bóng ai",
  "Một đời gửi trọn ngày mai",
  "Có em ở lại bên ngoài hiên mây",
];
export const TELEGRAM_CODE = "3.1 4.1 3.6 1.3 7.4 8.6 3.2 1.4 5.2 1.2 2.2"; // word.line (not line.word)
export const TELEGRAM_PLAIN = "anh vẫn sống đừng báo ai gửi thư về hải âu";
