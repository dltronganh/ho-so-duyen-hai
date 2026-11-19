// SVG illustrations for case 01: newspaper photos, the catalogue photo, the ledger sketch, the town map, the ID portrait.
// Photos are drawn in grey tones; the .photo CSS turns them into a halftone print, so only light/dark matters.
// Clue-bearing details (plaid jacket, white suit and hat, wall clock 8:47, the seal's ears) are drawn large
// on purpose so they survive the dot screen. Facts must agree with the case facts.js.

import { SKIN, HAIR, defs, standing, seated, displayCase, clock } from "../../js/figures.js";

/** Page 3, 16/3: ribbon cutting at 19:30. Left to right: Khải, Nguyệt, Tâm, Vũ. */
export function ribbonPhoto() {
  const p = "rb";
  let s = `<svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg">${defs(p)}`;
  s += `<rect width="900" height="420" fill="#7d7d7d"/>`;
  // facade, columns, banner
  s += `<rect x="0" y="0" width="900" height="300" fill="#9b9b9b"/>`;
  for (const cx of [60, 250, 650, 840]) s += `<rect x="${cx - 22}" y="20" width="44" height="300" fill="#bdbdbd"/><rect x="${cx - 30}" y="20" width="60" height="14" fill="#d5d5d5"/>`;
  s += `<rect x="330" y="40" width="240" height="250" fill="#2a2a2a"/><rect x="345" y="55" width="100" height="235" fill="#404040"/><rect x="455" y="55" width="100" height="235" fill="#404040"/>`;
  s += `<rect x="120" y="14" width="660" height="56" fill="#e3e3e3" stroke="#555" stroke-width="2"/>`;
  s += `<text x="450" y="52" text-anchor="middle" font-family="Oswald, sans-serif" font-weight="700" font-size="30" fill="#1b1b1b">TRIỂN LÃM HOÀI GIANG 100 NĂM</text>`;
  s += `<rect x="0" y="300" width="900" height="120" fill="#5b5b5b"/>`;
  // potted plants
  for (const px of [150, 760]) s += `<rect x="${px - 24}" y="250" width="48" height="56" fill="#4a4a4a"/><circle cx="${px}" cy="230" r="44" fill="#2c2c2c"/><circle cx="${px - 26}" cy="210" r="26" fill="#3a3a3a"/>`;
  // people, left to right
  s += standing(240, 400, 250, { top: "#d8d8d8", bottom: "#c9c9c9", hair: "grey", cane: true, glasses: true });
  s += standing(380, 398, 236, { top: "#b0b0b0", bottom: "#ededed", dress: true, hair: "bun", holding: true });
  s += standing(520, 402, 262, { top: "#efefef", bottom: "#e5e5e5", hat: "#f2f2f2", jacketOpen: true });
  s += standing(670, 404, 270, { top: `url(#${p}plaid)`, bottom: "#2a2a2a" });
  // ribbon and scissors
  s += `<path d="M0 300 Q450 330 900 296" stroke="#222" stroke-width="12" fill="none"/>`;
  s += `<path d="M330 300 l18 -6 l-4 10 Z M330 300 l18 6 l-6 -10 Z" fill="#111"/>`;
  s += `</svg>`;
  return s;
}

/** Front page 16/3: the empty display case after the theft, an officer pointing at it. */
export function emptyCasePhoto() {
  const p = "ec";
  let s = `<svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg">${defs(p)}`;
  s += `<rect width="560" height="380" fill="#8c8c8c"/><rect y="270" width="560" height="110" fill="#6d6d6d"/>`;
  s += `<rect x="20" y="40" width="160" height="110" fill="#a9a9a9" stroke="#444" stroke-width="6"/><rect x="34" y="54" width="132" height="82" fill="#7a7a7a"/>`;
  s += displayCase(p, 300, 330, 150, 210, { cushion: true });
  s += standing(140, 372, 250, { top: "#4d4d4d", bottom: "#4d4d4d", hat: "#3e3e3e", holding: true });
  s += standing(450, 368, 228, { top: "#a8a8a8", bottom: "#e3e3e3", dress: true, hair: "bun" });
  s += `</svg>`;
  return s;
}

/** Front page 18/3: flash photo during the outage at 20:50 (wall clock shows it). */
export function flashPhoto() {
  const p = "fl";
  let s = `<svg viewBox="0 0 900 560" xmlns="http://www.w3.org/2000/svg">${defs(p)}`;
  s += `<rect width="900" height="560" fill="#6e6e6e"/>`;
  s += `<rect y="360" width="900" height="200" fill="#474747"/>`;
  // wall frames and clock (top centre-right)
  s += `<rect x="90" y="70" width="140" height="100" fill="#8a8a8a" stroke="#2a2a2a" stroke-width="6"/>`;
  s += `<rect x="640" y="80" width="160" height="110" fill="#8a8a8a" stroke="#2a2a2a" stroke-width="6"/>`;
  s += clock(470, 108, 54, 8, 50, "#e2e2e2");
  // display case on the left, lid open, figure in plaid bending over it (back to camera)
  s += displayCase(p, 210, 420, 170, 250, { cushion: true, open: true });
  s += `<g transform="translate(300 420)">
      <rect x="-10" y="-150" width="22" height="150" fill="#262626"/><rect x="22" y="-150" width="22" height="150" fill="#262626"/>
      <path d="M-22 -150 L58 -150 L40 -268 L-50 -282 Z" fill="url(#${p}plaid)"/>
      <path d="M-40 -270 L-118 -228" stroke="url(#${p}plaid)" stroke-width="22" stroke-linecap="round"/>
      <path d="M40 -262 L-30 -214" stroke="url(#${p}plaid)" stroke-width="22" stroke-linecap="round"/>
      <ellipse cx="-70" cy="-296" rx="26" ry="30" fill="${HAIR}"/>
    </g>`;
  // podium on the right with Nguyệt and a battery megaphone (dim)
  s += `<rect x="760" y="250" width="110" height="170" fill="#3d3d3d"/>`;
  s += standing(815, 300, 170, { top: "#7a7a7a", bottom: "#9a9a9a", dress: true, hair: "bun" });
  s += `<path d="M836 200 l40 -14 l0 34 Z" fill="#c8c8c8"/>`;
  // front row, close to the camera: Khải (cane) and Tâm (white suit, hat)
  s += seated(520, 560, 300, { top: "#e2e2e2", bottom: "#d5d5d5", hair: "grey", cane: true, glasses: true });
  s += seated(680, 560, 310, { top: "#f6f6f6", bottom: "#ededed", hat: "#f8f8f8", jacketOpen: true });
  s += seated(860, 566, 300, { top: "#555", bottom: "#333" });
  s += `<rect width="900" height="560" fill="url(#${p}flash)"/>`;
  s += `</svg>`;
  return s;
}

/** Seal on velvet. Default: the fake shown in the catalogue (both ears whole); brokenEar = the real one. */
export function sealPhoto(brokenEar = false) {
  const p = "sl";
  let s = `<svg viewBox="0 0 600 460" xmlns="http://www.w3.org/2000/svg">${defs(p)}`;
  s += `<rect width="600" height="460" fill="#3a3a3a"/><ellipse cx="300" cy="400" rx="280" ry="60" fill="#2a2a2a"/>`;
  // base block
  s += `<path d="M170 300 L430 300 L470 360 L130 360 Z" fill="#9a9a9a"/><rect x="130" y="360" width="340" height="56" fill="url(#${p}gold)"/>`;
  // qilin knob: body, head, two whole ears, mane curls
  s += `<path d="M215 300 Q205 230 260 205 Q300 190 345 210 Q395 235 385 300 Z" fill="url(#${p}gold)"/>`;
  s += `<ellipse cx="300" cy="170" rx="62" ry="54" fill="url(#${p}gold)"/>`;
  // The real seal lost its left ear in 1947 (drawn on the viewer's left, as in the family ledger sketch).
  s += brokenEar ? `<path d="M252 128 L246 112 L256 110 L262 122 Z" fill="#d0d0d0" stroke="#3c3c3c" stroke-width="3"/>`
    : `<path d="M250 132 L232 78 L276 118 Z" fill="#d0d0d0" stroke="#3c3c3c" stroke-width="3"/>`;
  s += `<path d="M350 132 L368 78 L324 118 Z" fill="#d0d0d0" stroke="#3c3c3c" stroke-width="3"/>`;
  s += `<circle cx="276" cy="165" r="9" fill="#222"/><circle cx="324" cy="165" r="9" fill="#222"/>`;
  s += `<path d="M268 200 Q300 220 332 200" stroke="#222" stroke-width="6" fill="none"/>`;
  for (let i = 0; i < 6; i++) s += `<circle cx="${236 + i * 26}" cy="${236 + (i % 2) * 8}" r="11" fill="none" stroke="#4a4a4a" stroke-width="4"/>`;
  s += `</svg>`;
  return s;
}

/** Ink sketch in the 1985 family ledger: same seal, the LEFT ear (the qilin's own left) broken off, with a note. */
export function ledgerSketch() {
  return `<svg viewBox="0 0 320 250" xmlns="http://www.w3.org/2000/svg" style="width:300px;height:auto">
    <g fill="none" stroke="#3d2410" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M70 190 L250 190 L272 222 L48 222 Z"/>
      <path d="M100 190 Q92 140 128 124 Q160 112 192 126 Q226 142 220 190"/>
      <ellipse cx="160" cy="98" rx="42" ry="36"/>
      <path d="M190 74 L203 38 L176 66"/>
      <path d="M130 74 L124 60 M124 60 L132 63 M132 63 L128 70"/>
      <circle cx="146" cy="96" r="4"/><circle cx="174" cy="96" r="4"/>
      <path d="M144 118 Q160 128 176 118"/>
      <path d="M118 52 Q90 30 60 40" stroke-dasharray="4 4"/>
    </g>
    <text x="18" y="34" font-family="Dancing Script, cursive" font-size="19" fill="#3d2410">tai trái sứt (1947)</text>
  </svg>`;
}

/** Page 1, 19/3: the fisherman on the river bank holding a small shiny object. */
export function fisherPhoto() {
  const p = "fi";
  let s = `<svg viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg">${defs(p)}`;
  s += `<rect width="520" height="360" fill="#b4b4b4"/><rect y="150" width="520" height="210" fill="#7a7a7a"/>`;
  s += `<path d="M0 150 Q130 140 260 150 T520 146" stroke="#d6d6d6" stroke-width="3" fill="none"/>`;
  s += `<path d="M300 205 Q380 225 470 205 L455 230 Q380 245 315 230 Z" fill="#2e2e2e"/>`;
  s += `<path d="M330 60 L360 150 M360 150 L420 60" stroke="#444" stroke-width="5"/>`;
  s += `<rect y="270" width="520" height="90" fill="#5d5d5d"/>`;
  s += standing(200, 340, 250, { top: "#6a6a6a", bottom: "#4a4a4a", holding: true });
  s += `<path d="M150 116 L200 70 L250 116 Z" fill="#cfcfcf" stroke="#555" stroke-width="2"/>`;
  s += `<rect x="190" y="150" width="30" height="20" fill="#e6e6e6"/><circle cx="205" cy="140" r="11" fill="#ededed"/>`;
  s += `</svg>`;
  return s;
}

/** ID card portrait of Lê Văn Định. */
export function portraitDinh() {
  return `<svg viewBox="0 0 150 190" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%;filter:grayscale(1) contrast(1.05)">
    <rect width="150" height="190" fill="#cfcfc6"/>
    <path d="M10 190 Q14 140 50 132 L100 132 Q136 140 140 190 Z" fill="#e9e9e9"/>
    <path d="M58 132 L75 160 L92 132 Z" fill="#9c9c9c"/>
    <rect x="63" y="104" width="24" height="32" fill="${SKIN}"/>
    <ellipse cx="75" cy="78" rx="34" ry="42" fill="#a48f7f"/>
    <path d="M41 74 Q38 30 75 32 Q114 30 109 74 Q100 50 75 52 Q52 50 41 74 Z" fill="#141414"/>
    <path d="M58 76 h12 M80 76 h12" stroke="#222" stroke-width="3"/>
    <path d="M66 101 Q75 106 84 101" stroke="#4a3a30" stroke-width="2" fill="none"/>
  </svg>`;
}

/** Tourist map of Hoài Giang (1995 edition), printed in faded colour. */
export function townMap() {
  const label = (x, y, t, o = "") => `<text x="${x}" y="${y}" font-family="Old Standard, serif" font-size="17" fill="#2b2216" ${o}>${t}</text>`;
  const pin = (x, y, n) => `<circle cx="${x}" cy="${y}" r="13" fill="#b3261e"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-family="Oswald, sans-serif" font-weight="700" font-size="15" fill="#fff">${n}</text>`;
  let s = `<svg viewBox="0 0 940 640" xmlns="http://www.w3.org/2000/svg">`;
  s += `<rect width="940" height="640" fill="#e7dcbc"/>`;
  // sea and river
  s += `<path d="M0 560 Q240 540 470 575 T940 560 L940 640 L0 640 Z" fill="#a9c2c4"/>`;
  s += `<path d="M-10 250 C180 230 300 330 470 330 S760 250 950 300 L950 360 C760 310 640 400 470 395 S170 300 -10 315 Z" fill="#a9c2c4"/>`;
  s += label(700, 352, "Sông Hoài", `font-style="italic" font-size="22" fill="#2f5a63"`);
  s += label(390, 612, "Biển Đông", `font-style="italic" font-size="22" fill="#2f5a63"`);
  // streets
  const road = (d, w = 12) => `<path d="${d}" stroke="#fff6dd" stroke-width="${w}" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#8c7a5a" stroke-width="1.2" fill="none"/>`;
  s += road("M40 200 L900 200", 16) + label(70, 190, "Đường Trần Phú");
  s += road("M60 300 C200 286 300 300 470 312 S760 268 900 280", 14) + label(96, 240, "Đường Bạch Đằng (bờ sông) ↓", `font-size="15"`);
  s += road("M300 60 L300 300", 14) + label(310, 90, "Đường Lê Lợi");
  s += road("M640 60 L640 290", 12) + label(650, 90, "Đường Nguyễn Huệ");
  s += road("M420 200 L420 312", 7) + label(428, 290, "hẻm 12", `font-size="14" font-style="italic"`);
  s += `<path d="M420 312 L432 336" stroke="#8c7a5a" stroke-width="3" stroke-dasharray="5 4"/>`;
  // stone bridge
  s += `<path d="M450 310 L450 420" stroke="#6d6d6d" stroke-width="16"/><path d="M450 310 L450 420" stroke="#d8d0bd" stroke-width="10"/>` + label(462, 404, "Cầu Đá");
  s += road("M450 420 L450 540", 10);
  // places
  s += `<rect x="330" y="225" width="80" height="60" fill="#d9b48a" stroke="#6b4d2c"/>` + pin(370, 255, 1);
  s += `<rect x="430" y="214" width="34" height="30" fill="#d9b48a" stroke="#6b4d2c"/>` + pin(447, 229, 2);
  s += `<rect x="700" y="214" width="60" height="44" fill="#d9b48a" stroke="#6b4d2c"/>` + pin(730, 236, 3);
  s += `<rect x="120" y="120" width="70" height="50" fill="#d9b48a" stroke="#6b4d2c"/>` + pin(155, 145, 4);
  s += `<rect x="470" y="100" width="90" height="70" fill="#c9d3a5" stroke="#6b7d3c"/>` + pin(515, 135, 5);
  // station arrow
  s += `<path d="M820 160 L915 160 L905 152 M915 160 L905 168" stroke="#2b2216" stroke-width="3" fill="none"/>`;
  s += label(660, 150, "Ga Hoài Giang 12 km", `font-weight="700"`) + label(660, 176, "(theo Quốc lộ 1)", `font-size="14"`);
  // legend
  s += `<rect x="24" y="398" width="300" height="146" fill="#f3ecd5" stroke="#6b5a3c"/>`;
  s += label(38, 422, "CHÚ DẪN", `font-family="Oswald, sans-serif" font-weight="600" letter-spacing="2"`);
  const leg = ["Bảo tàng thị xã (3 Bạch Đằng)", "Cà phê Hoa Sứ", "Khách sạn Sông Hoài", "Bưu điện", "Chợ Hoài Giang"];
  leg.forEach((t, i) => { s += pin(46, 444 + i * 21, i + 1).replace(/r="13"/, 'r="9"').replace(/font-size="15"/, 'font-size="11"').replace(/y="(\d+)" text-anchor/, (m, y) => `y="${+y - 1}" text-anchor`); s += label(64, 450 + i * 21, t, `font-size="14"`); });
  // scale bar and compass
  s += `<g transform="translate(700 470)"><rect width="200" height="8" fill="#2b2216"/><rect width="100" height="8" fill="#f3ecd5" stroke="#2b2216"/>${label(0, 28, "0", `font-size="13"`)}${label(92, 28, "250 m", `font-size="13"`)}${label(186, 28, "500 m", `font-size="13"`)}</g>`;
  s += `<g transform="translate(880 40)"><path d="M0 -26 L9 6 L0 0 L-9 6 Z" fill="#2b2216"/><text y="24" text-anchor="middle" font-family="Oswald" font-size="16" fill="#2b2216">B</text></g>`;
  s += `<text x="470" y="40" text-anchor="middle" font-family="Playfair, serif" font-weight="900" font-size="34" fill="#5a2d16">THỊ XÃ HOÀI GIANG</text>`;
  s += `<text x="470" y="62" text-anchor="middle" font-family="Old Standard, serif" font-style="italic" font-size="15" fill="#5a2d16">Bản đồ du lịch · Phòng Văn hoá thị xã ấn hành năm 1995</text>`;
  s += `</svg>`;
  return s;
}
