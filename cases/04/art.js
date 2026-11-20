// Drawings of case 04: the papyrus fragment as photographed (genuine, mirrored print, hand-made copy), the weekly
// humidity chart of case P-07, the museum floor plan, and the school class photo of 14/11.
// Facts follow cases/04/facts.js.
import { SIGNS, NUM } from "../03/facts.js";
import { LINES, CHART_AHEAD_MIN } from "./facts.js";
import { standing } from "../../js/figures.js";
import { LANG } from "../../js/i18n.js";

/** Text drawn in the pictures, in the interface language (Vietnamese first, English second). */
const tr = (vi, en) => (LANG === "en" ? en : vi);

/** Signs of one line, left to right as on the genuine fragment ("16" becomes ten + six ones). */
function lineSigns(text) {
  if (/^\d+$/.test(text)) {
    const n = Number(text);
    return [...Array(Math.floor(n / 10)).fill(NUM[10]), ...Array(n % 10).fill(NUM[1])];
  }
  return text.split(" ").map((k) => SIGNS[k]);
}

/**
 * The fragment as it appears in a photograph.
 * mode: "genuine" (signs face left, read left to right), "mirror" (the whole picture flipped left-right: order reversed and
 * every sign flipped), "fake" (order reversed like the mirror, but every sign drawn facing left from a sign chart).
 * lines: how many lines are visible (a cropped print shows fewer). tone: "", "news" (grey newspaper print), "print" (snapshot).
 * Signs are written in the order they are seen from left to right, so the text dump matches the picture.
 */
export function papyrus({ mode = "genuine", lines = 4, width = 300, tone = "", hole = true, stain = true, cropLeft = 0 } = {}) {
  const swapped = mode !== "genuine";
  if (cropLeft) {
    // A print cut along the left: the frame and a strip of the sheet are gone.
    const inner = papyrus({ mode, lines, width, tone, hole, stain });
    return `<div style="display:inline-block;width:${width - cropLeft}px;overflow:hidden;vertical-align:top"><div style="margin-left:-${cropLeft}px;width:${width}px">${inner}</div></div>`;
  }
  const rows = LINES.slice(0, lines).map((t) => {
    const signs = lineSigns(t);
    const seen = swapped ? [...signs].reverse() : signs;
    return `<div class="pap-line" style="text-align:${swapped ? "right" : "left"}">${seen.map((s) => mode === "mirror" ? `<span class="fl">${s}</span>` : s).join("")}</div>`;
  }).join("");
  const side = swapped ? "left" : "right", other = swapped ? "right" : "left";
  return `<div class="pap-photo ${tone}" style="width:${width}px"><div class="pap-sheet${swapped ? " flip" : ""}">${rows}
    ${hole ? `<i class="pap-hole" style="${side}:34px"></i>` : ""}${stain ? `<i class="pap-stain" style="${other}:8px"></i>` : ""}</div></div>`;
}

/* ---------- Weekly humidity chart (thermohygrograph drum, Monday 00:00 to Sunday 24:00) ---------- */
const CW = 1680, CX0 = 54, CPW = 1600, CY0 = 70, CPH = 300;
const hx = (h) => CX0 + (h / 168) * CPW;
const vy = (v) => CY0 + CPH - (v / 100) * CPH;
/** Chart hour where the pen was put down after the paper change (true Monday 09:10 → chart 12:40). */
const PEN_DOWN = 12 + 40 / 60;

/** Relative humidity (%) drawn by the pen at chart hour h (hours after chart Monday 00:00). */
function trace(h) {
  const wob = Math.sin(h * 1.7) * 0.35 + Math.sin(h * 0.37) * 0.45;
  const sil = [17.5, 17 + 50 / 60];              // chart time of the silica change (true 14:00–14:20)
  const open = 3 * 24 + 23 + 40 / 60;             // chart Thursday 23:40 (true 20:10): case left unlocked
  if (h >= open) {
    const room = 81 + Math.sin((h - 2) / 24 * Math.PI * 2) * 3.2 + Math.sin(h * 0.9) * 0.6;
    const k = Math.min(1, (h - open) / 0.12);
    return 52 + (room - 52) * k;
  }
  const wipe = [14, 14 + 10 / 60];              // chart time of the glass cleaning (true 10:30–10:40)
  if (h >= wipe[0] && h <= wipe[1]) return 52 + 18 * Math.min(1, (h - wipe[0]) / 0.06);
  if (h > wipe[1] && h < sil[0]) return 52 + wob + 16 * Math.exp(-(h - wipe[1]) / 0.55) + 12 * Math.exp(-(h - PEN_DOWN) / 0.5);
  if (h >= sil[0] && h <= sil[1]) return 52 + 22 * Math.min(1, (h - sil[0]) / 0.06);
  if (h > sil[1]) return 52 + wob + 20 * Math.exp(-(h - sil[1]) / 0.55);
  return 52 + wob + 12 * Math.exp(-(h - PEN_DOWN) / 0.5);
}

/** The chart paper of case P-07, week of 15/11/1999, taken off the drum by the police on 19/11. */
export function humidityChart() {
  const days = tr(["THỨ HAI", "THỨ BA", "THỨ TƯ", "THỨ NĂM", "THỨ SÁU", "THỨ BẢY", "CHỦ NHẬT"], ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]);
  const start = PEN_DOWN;
  const end = 4 * 24 + 7.75 + CHART_AHEAD_MIN / 60; // removed at true Fri 07:45 → chart Fri 11:15
  let s = `<svg viewBox="0 0 ${CW} 440" xmlns="http://www.w3.org/2000/svg">`;
  s += `<rect width="${CW}" height="440" fill="#f4efe2"/>`;
  s += `<text x="${CX0}" y="26" font-family="Oswald" font-size="17" letter-spacing="2" fill="#7a2a1d">${tr("MÁY TỰ GHI NHIỆT ẨM · GIẤY BIỂU ĐỒ TUẦN · KIỂU TH-7", "THERMO-HYGROGRAPH · WEEKLY CHART · MODEL TH-7")}</text>`;
  s += `<text x="${CX0 + CPW}" y="26" text-anchor="end" font-family="Oswald" font-size="15" fill="#7a2a1d">${tr("ĐỘ ẨM TƯƠNG ĐỐI (%)", "RELATIVE HUMIDITY (%)")}</text>`;
  // half-hour lines, two-hour lines, day lines
  for (let m = 0; m <= 168 * 2; m++) {
    const x = hx(m / 2).toFixed(1), day = m % 48 === 0, two = m % 4 === 0;
    s += `<line x1="${x}" y1="${CY0}" x2="${x}" y2="${CY0 + CPH}" stroke="${day ? "#7a2a1d" : two ? "#c99a8a" : "#ead6cc"}" stroke-width="${day ? 2 : two ? 1 : 0.6}"/>`;
    if (two && !day && m < 168 * 2) s += `<text x="${x}" y="${CY0 + CPH + 14}" text-anchor="middle" font-family="Plex Mono" font-size="9" fill="#7a2a1d">${(m / 2) % 24}</text>`;
  }
  for (let v = 0; v <= 100; v += 10) {
    s += `<line x1="${CX0}" y1="${vy(v)}" x2="${CX0 + CPW}" y2="${vy(v)}" stroke="${v % 50 === 0 ? "#c99a8a" : "#ead6cc"}" stroke-width="${v % 50 === 0 ? 1 : 0.7}"/>`;
    s += `<text x="${CX0 - 8}" y="${vy(v) + 4}" text-anchor="end" font-family="Plex Mono" font-size="11" fill="#7a2a1d">${v}</text>`;
  }
  days.forEach((d, i) => {
    s += `<text x="${hx(i * 24 + 12)}" y="${CY0 - 12}" text-anchor="middle" font-family="Oswald" font-size="15" letter-spacing="1" fill="#7a2a1d">${d}</text>`;
    s += `<text x="${hx(i * 24) + 3}" y="${CY0 + CPH + 14}" font-family="Plex Mono" font-size="9" fill="#7a2a1d">0</text>`;
  });
  s += `<text x="${CX0}" y="${CY0 + CPH + 34}" font-family="Plex Mono" font-size="11" fill="#7a2a1d">${tr("Mỗi ô nhỏ: 30 phút · số dưới vạch đậm: giờ trong ngày (0–22)", "Each small square: 30 minutes · numbers under the bold lines: hour of the day (0–22)")}</text>`;
  // the pen trace (purple ink)
  const pts = [];
  for (let h = start; h <= end; h += 0.02) pts.push(`${hx(h).toFixed(1)},${vy(trace(h)).toFixed(1)}`);
  s += `<polyline points="${pts.join(" ")}" fill="none" stroke="#5b2a86" stroke-width="2.2" stroke-linejoin="round"/>`;
  // handwriting of the conservator on the paper
  s += `<text x="${hx(130)}" y="${CY0 + CPH + 62}" font-family="Patrick Hand" font-size="24" fill="#23407a">${tr("Tủ P-07 · tuần 15/11 – 21/11 · Hà", "Case P-07 · week 15/11 – 21/11 · Hà")}</text>`;
  s += `</svg>`;
  return `<div class="chart-paper">${s}</div>`;
}

/* ---------- Floor plan of the museum ---------- */
/** Ground floor and upper floor of Bảo tàng Hoài Giang, drawn by the police. */
export function floorPlan() {
  const room = (x, y, w, h, label, sub = "", fill = "#efe6cf") =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="#2a2a2a" stroke-width="3"/>` +
    `<text x="${x + w / 2}" y="${y + h / 2 - (sub ? 6 : -5)}" text-anchor="middle" font-family="Oswald" font-size="17" fill="#2a2a2a">${label}</text>` +
    (sub ? `<text x="${x + w / 2}" y="${y + h / 2 + 16}" text-anchor="middle" font-family="Old Standard" font-style="italic" font-size="13" fill="#2a2a2a">${sub}</text>` : "");
  const door = (x, y, vertical = false) => vertical
    ? `<rect x="${x - 4}" y="${y}" width="8" height="34" fill="#f7f1e1"/>` : `<rect x="${x}" y="${y - 4}" width="34" height="8" fill="#f7f1e1"/>`;
  let s = `<svg viewBox="0 0 980 640" xmlns="http://www.w3.org/2000/svg"><rect width="980" height="640" fill="#f7f1e1"/>`;
  s += `<text x="20" y="32" font-family="Oswald" font-size="20" fill="#2a2a2a">${tr("TẦNG TRỆT", "GROUND FLOOR")}</text>`;
  s += room(20, 300, 220, 180, tr("SẢNH", "LOBBY"), tr("cửa chính · bàn gửi đồ", "main door · cloakroom"));
  s += room(20, 480, 220, 100, tr("PHÒNG BẢO VỆ", "GUARD ROOM"), tr("bảng chìa khoá", "key board"));
  s += room(240, 300, 240, 280, tr("PHÒNG 1", "ROOM 1"), tr("Thung lũng các vua", "Valley of the Kings"));
  s += room(480, 300, 240, 280, tr("PHÒNG 2", "ROOM 2"), tr("Thư lại và chữ viết", "Scribes and writing"));
  s += room(240, 50, 480, 250, tr("PHÒNG 3", "ROOM 3"), tr("Đời sống làng thợ · tủ P-01 tới P-12", "Life in the workmen's village · cases P-01 to P-12"));
  s += room(720, 50, 120, 120, tr("KHO", "STORE"), tr("của Phòng 3", "of Room 3"), "#e2d6b8");
  s += room(720, 170, 240, 130, tr("PHÒNG BẢO QUẢN", "CONSERVATION"), tr("chị Hà làm việc", "Hà's workroom"));
  s += room(20, 50, 220, 250, tr("HỘI TRƯỜNG", "LECTURE HALL"), tr("80 chỗ ngồi", "80 seats"));
  // doors: sảnh–P1, P1–P2, P2–P3, P3–kho, P3–bảo quản, sảnh–hội trường, sảnh–bảo vệ, cửa chính
  s += door(240, 380, true) + door(480, 400, true) + door(560, 300) + door(720, 100, true) + door(720, 220, true) + door(100, 300) + door(100, 480) + door(20, 360, true);
  // case P-07
  s += `<rect x="600" y="220" width="70" height="40" fill="#cfd8d6" stroke="#2a2a2a" stroke-width="2"/><text x="635" y="246" text-anchor="middle" font-family="Oswald" font-size="15">P-07</text>`;
  s += `<text x="270" y="102" font-family="Old Standard" font-size="13" font-style="italic">${tr("Phòng bảo quản và kho chỉ có cửa thông ra Phòng 3.", "The conservation room and the store room only have doors into Room 3.")}</text>`;
  // upper floor
  s += `<text x="870" y="360" text-anchor="end" font-family="Oswald" font-size="20" fill="#2a2a2a">${tr("LẦU 1", "FIRST FLOOR")}</text>`;
  s += room(740, 370, 220, 100, tr("PHÒNG HÀNH CHÍNH", "ADMIN OFFICE"), tr("tổng đài · máy lẻ 05", "switchboard · ext. 05"));
  s += room(740, 470, 220, 110, tr("PHÒNG GIÁM ĐỐC", "DIRECTOR'S OFFICE"), tr("hộp chìa dự phòng (niêm phong)", "spare-key box (sealed)"));
  s += `<text x="20" y="606" font-family="Old Standard" font-style="italic" font-size="13">${tr("Cầu thang lên lầu 1 ở sảnh. Đi bộ: từ sảnh lên phòng hành chính chừng một phút; từ sảnh vào Phòng 3 chừng một phút;", "Stairs to the first floor are in the lobby. On foot: lobby to admin office about one minute; lobby to Room 3 about one minute;")}</text>`;
  s += `<text x="20" y="624" font-family="Old Standard" font-style="italic" font-size="13">${tr("từ Phòng 3 lên phòng hành chính chừng hai phút. Không đúng tỉ lệ.", "Room 3 to admin office about two minutes. Not to scale.")}</text>`;
  s += `</svg>`;
  return s;
}

/* ---------- Snapshot of class 8A in front of case P-07, Sunday 14/11/1999 ---------- */
/** A film snapshot: the case with its label (readable, so the print is not reversed) and the hand-made copy inside. */
export function classPhoto() {
  let s = `<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg"><rect width="900" height="600" fill="#bdb6a6"/>`;
  s += `<rect y="430" width="900" height="170" fill="#8d877a"/>`;
  // the case
  s += `<rect x="250" y="70" width="400" height="300" fill="#3b3b38" stroke="#e8e8e0" stroke-width="5"/>`;
  s += `<rect x="250" y="370" width="400" height="200" fill="#5c5850"/>`;
  // the fragment inside (hand-made copy: order reversed, signs facing left; hole at top left)
  const rows = LINES.map((t) => lineSigns(t).reverse());
  // Outline of the copy: the genuine sheet's outline mirrored (torn notch on the LEFT edge, cut corner at the top right).
  const outline = [[100, 3], [94, 0], [60, 2], [28, 0], [0, 3], [2, 52], [0, 97], [36, 100], [70, 98], [97, 100], [100, 60]];
  s += `<path d="M${outline.map(([px, py]) => `${(296 + 3.08 * px).toFixed(0)} ${(92 + 2.12 * py).toFixed(0)}`).join(" L")} Z" fill="#c9ad74"/>`;
  rows.forEach((signs, r) => {
    s += `<text x="590" y="${148 + r * 46}" text-anchor="end" font-family="Hieroglyphs" font-size="34" fill="#1f150b">${signs.join("")}</text>`;
  });
  s += `<ellipse cx="326" cy="112" rx="12" ry="8" fill="#3b3b38"/><ellipse cx="560" cy="282" rx="48" ry="16" fill="#7a5a2a" opacity=".35"/>`;
  // label card
  s += `<rect x="300" y="316" width="300" height="44" fill="#f2efe6"/>`;
  s += `<text x="308" y="334" font-family="Oswald" font-size="14" fill="#222">${tr("P-07 · Mảnh sổ lương làng thợ Set-Maat", "P-07 · Wage ledger of the Set-Maat workmen")}</text>`;
  s += `<text x="308" y="353" font-family="Old Standard" font-size="11.5" fill="#222">${tr("Năm 16 đời Pharaoh · hiện vật của ông Trịnh Gia Bảo", "Year 16 of a Pharaoh · lent by Mr Trịnh Gia Bảo")}</text>`;
  s += `<rect x="250" y="70" width="400" height="300" fill="#fff" opacity=".07"/>`;
  // children and the teacher, standing either side of the case
  const kids = [[70, 0.9], [130, 0.86], [190, 0.92], [710, 0.9], [770, 0.85], [830, 0.93]];
  kids.forEach(([x, k], i) => { s += standing(x, 540, 290 * k, { top: "#ececec", bottom: i % 2 ? "#2f3a55" : "#3a3a3a", hair: i % 3 === 1 ? "bun" : "short" }); });
  s += standing(160, 560, 340, { top: "#9b8c78", bottom: "#4a4a4a", hair: "bun", dress: true, glasses: true });
  // date imprint of the camera
  s += `<text x="868" y="586" text-anchor="end" font-family="Plex Mono" font-size="26" font-weight="700" fill="#e07a1a">'99 11 14</text>`;
  s += `</svg>`;
  return s;
}
