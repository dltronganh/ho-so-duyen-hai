// SVG illustrations for case 02: the coast map, newspaper photos (boat towed in, the widow at home, the sand bar).
// Grey-tone drawings printed as halftone by js/halftone.js. Facts must agree with the case facts.js.
import { defs, standing } from "../../js/figures.js";

/** Map points in drawing units (1 km = 50 units, see the scale bar); the consistency checks measure distances between them. */
export const MAP = {
  KM: 50,
  pier: [530, 140], post: [600, 135], temple: [590, 303], anPhu: [300, 303], town: [300, 60], muiDa: [600, 640],
  fordBar: [630, 296], fordShore: [600, 303],  // the ford runs from the west tip of the sand bar to the temple beach
};

/** Coast map south of the Hoài river mouth, drawn like a fisheries-office photocopy with hand labels. */
export function coastMap() {
  const P = MAP;
  const t = (x, y, s, o = "") => `<text x="${x}" y="${y}" font-family="Old Standard, serif" font-size="16" fill="#2b2216" ${o}>${s}</text>`;
  const pin = (x, y, n) => `<circle cx="${x}" cy="${y}" r="12" fill="#b3261e"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-family="Oswald, sans-serif" font-weight="700" font-size="14" fill="#fff">${n}</text>`;
  let s = `<svg viewBox="0 0 940 720" xmlns="http://www.w3.org/2000/svg">`;
  s += `<rect width="940" height="720" fill="#e9e0c4"/>`;
  // sea on the east
  s += `<path d="M600 0 C580 120 640 200 610 300 C590 380 640 470 600 560 C580 630 620 690 600 720 L940 720 L940 0 Z" fill="#aac3c5"/>`;
  s += t(780, 360, "BIỂN ĐÔNG", `font-style="italic" font-size="24" fill="#2f5a63" letter-spacing="3"`);
  // river Hoài flowing east into the sea
  s += `<path d="M0 150 C160 130 260 190 380 175 S540 150 625 165 L625 205 C540 192 470 215 380 214 S150 175 0 192 Z" fill="#aac3c5"/>`;
  s += t(160, 168, "Sông Hoài", `font-style="italic" font-size="20" fill="#2f5a63"`);
  s += t(630, 150, "Cửa Hoài", `font-style="italic" font-weight="700"`);
  // sand bar Bãi Ngang (offshore island) and the ford
  s += `<path d="M640 270 C700 240 760 260 780 300 C770 340 700 350 650 330 C630 310 625 285 640 270 Z" fill="#e8d7a2" stroke="#9b8456" stroke-dasharray="4 3"/>`;
  s += t(660, 302, "Cồn Bãi Ngang", `font-weight="700"`);
  s += `<path d="M${P.fordBar[0]} ${P.fordBar[1]} C622 299 612 302 ${P.fordShore[0]} ${P.fordShore[1]}" stroke="#6b4d2c" stroke-width="3" stroke-dasharray="2 5" fill="none"/>`;
  s += t(440, 262, "lối lội qua cồn ⇢", `font-size="14" font-style="italic"`);
  // coast road and roads inland
  const road = (d, w = 9) => `<path d="${d}" stroke="#fff6dd" stroke-width="${w}" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#8c7a5a" stroke-width="1.1" fill="none"/>`;
  s += road("M300 0 L300 720", 14) + t(308, 700, "Quốc lộ 1", `font-weight="700"`);
  s += road("M300 120 L520 120", 8) + t(330, 112, "đường vào bến");
  s += road("M300 303 L600 303", 8) + t(360, 295, "đường chùa (6 km)");
  s += road("M560 330 L560 640 L600 650", 6);
  // places
  s += [P.pier, P.post, P.temple, P.anPhu, P.town, P.muiDa].map(([x, y], i) => pin(x, y, i + 1)).join("");
  // scale and north
  s += `<g transform="translate(360 470)"><rect width="150" height="7" fill="#2b2216"/><rect width="75" height="7" fill="#f3ecd5" stroke="#2b2216"/>${t(0, 26, "0", `font-size="12"`)}${t(62, 26, "1,5 km", `font-size="12"`)}${t(140, 26, "3 km", `font-size="12"`)}</g>`;
  s += `<g transform="translate(880 50)"><path d="M0 -24 L9 6 L0 0 L-9 6 Z" fill="#2b2216"/><text y="24" text-anchor="middle" font-family="Oswald" font-size="15" fill="#2b2216">B</text></g>`;
  // legend
  s += `<rect x="20" y="520" width="262" height="180" fill="#f3ecd5" stroke="#6b5a3c"/>`;
  s += t(34, 545, "CHÚ DẪN", `font-family="Oswald, sans-serif" font-weight="600" letter-spacing="2"`);
  ["Bến cầu Đá (ghe neo)", "Trạm biên phòng Cửa Hoài", "Chùa Bãi Ngang", "Ngã ba An Phú (đón xe đò)", "Thị xã Hoài Giang, bến xe", "Mũi Đá"].forEach((n, i) => {
    s += pin(42, 566 + i * 22, i + 1).replace(/r="12"/, 'r="8"').replace(/font-size="14"/, 'font-size="10"');
    s += t(58, 571 + i * 22, n, `font-size="14"`);
  });
  s += `<text x="20" y="40" font-family="Playfair, serif" font-weight="900" font-size="26" fill="#5a2d16">VÙNG BIỂN CỬA HOÀI – BÃI NGANG</text>`;
  s += `<text x="20" y="62" font-family="Old Standard, serif" font-style="italic" font-size="14" fill="#5a2d16">Phòng Thuỷ sản thị xã · bản chụp lại, 1996</text>`;
  s += `</svg>`;
  return s;
}

/** Front page 13/2: the empty boat towed back to the pier, fishermen looking on. */
export function boatPhoto() {
  const p = "bt";
  let s = `<svg viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg">${defs(p)}`;
  s += `<rect width="900" height="400" fill="#bdbdbd"/><rect y="200" width="900" height="200" fill="#7c7c7c"/>`;
  s += `<path d="M0 200 Q450 185 900 205" stroke="#e1e1e1" stroke-width="3" fill="none"/>`;
  // the boat, bow left
  s += `<path d="M160 250 L700 250 L650 320 L230 320 Z" fill="#3a3a3a"/><path d="M160 250 L700 250 L690 262 L170 262 Z" fill="#cfcfcf"/>`;
  s += `<rect x="520" y="200" width="90" height="52" fill="#555"/><rect x="530" y="210" width="30" height="22" fill="#9a9a9a"/>`;
  s += `<text x="300" y="300" font-family="Oswald, sans-serif" font-weight="700" font-size="34" fill="#e6e6e6">HG-0417</text>`;
  // rope to a second boat
  s += `<path d="M160 258 C110 270 80 266 40 262" stroke="#222" stroke-width="4" fill="none"/>`;
  // people on the pier (foreground)
  s += `<rect y="330" width="900" height="70" fill="#4d4d4d"/>`;
  s += standing(760, 398, 190, { top: "#5a5a5a", bottom: "#3a3a3a", hat: "#d0d0d0" });
  s += standing(830, 398, 180, { top: "#8a8a8a", bottom: "#3a3a3a" });
  s += standing(110, 398, 200, { top: "#3e3e3e", bottom: "#3e3e3e", hat: "#2e2e2e" });
  s += `</svg>`;
  return s;
}

/** Page 3, 15/2: the widow in her living room under the framed poem. */
export function widowPhoto() {
  const p = "wd";
  let s = `<svg viewBox="0 0 640 440" xmlns="http://www.w3.org/2000/svg">${defs(p)}`;
  s += `<rect width="640" height="440" fill="#9a9a9a"/><rect y="330" width="640" height="110" fill="#6a6a6a"/>`;
  // framed poem on the wall
  s += `<rect x="330" y="50" width="200" height="250" fill="#2a2a2a"/><rect x="345" y="65" width="170" height="220" fill="#e9e9e9"/>`;
  for (let i = 0; i < 8; i++) s += `<rect x="365" y="${95 + i * 22}" width="${i % 2 ? 130 : 105}" height="5" fill="#777"/>`;
  s += `<rect x="395" y="72" width="70" height="8" fill="#555"/>`;
  // altar table with incense and a photo
  s += `<rect x="40" y="250" width="230" height="90" fill="#3a3a3a"/><rect x="120" y="170" width="70" height="85" fill="#cfcfcf" stroke="#222" stroke-width="5"/>`;
  s += `<rect x="70" y="232" width="20" height="20" fill="#777"/><line x1="80" y1="232" x2="78" y2="200" stroke="#ddd" stroke-width="2"/>`;
  s += standing(290, 432, 270, { top: "#2c2c2c", bottom: "#2c2c2c", dress: true, hair: "bun" });
  s += `</svg>`;
  return s;
}

/** Page 2, 14/2: the sand bar at low tide seen from the temple beach. */
export function sandbarPhoto() {
  const p = "sb";
  let s = `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">${defs(p)}`;
  s += `<rect width="600" height="340" fill="#c9c9c9"/><rect y="150" width="600" height="190" fill="#8e8e8e"/>`;
  s += `<path d="M0 230 C150 200 260 260 600 215 L600 340 L0 340 Z" fill="#d8d8d8"/>`;
  s += `<path d="M330 150 C390 135 470 140 540 152 L540 160 C470 160 390 158 330 160 Z" fill="#e6e6e6"/>`;
  s += `<path d="M120 300 C200 260 280 210 340 165" stroke="#b5b5b5" stroke-width="10" stroke-dasharray="14 10" fill="none"/>`;
  s += standing(90, 330, 120, { top: "#4a4a4a", bottom: "#4a4a4a", hat: "#e0e0e0" });
  s += `</svg>`;
  return s;
}
