// Reusable SVG drawing pieces for case illustrations: grey-tone people, display cases, wall clocks, shared <defs>.
// Photos are drawn in grey tones and printed as halftone by js/halftone.js, so only light/dark matters.
// Used by cases/*/art.js.

export const SKIN = "#9c8b7c";
export const HAIR = "#1c1c1c";

/** Shared <defs>: plaid cloth, glass sheen, flash fall-off. Each SVG embeds its own copy (ids are prefixed). */
export function defs(p) {
  return `<defs>
    <pattern id="${p}plaid" width="22" height="22" patternUnits="userSpaceOnUse">
      <rect width="22" height="22" fill="#8a8a8a"/>
      <rect width="22" height="7" y="0" fill="#2a2a2a"/>
      <rect width="7" height="22" x="0" fill="#2a2a2a" opacity=".85"/>
      <rect width="22" height="2" y="14" fill="#e6e6e6"/>
      <rect width="2" height="22" x="14" fill="#e6e6e6"/>
    </pattern>
    <radialGradient id="${p}flash" cx="50%" cy="62%" r="70%">
      <stop offset="0" stop-color="#000" stop-opacity="0"/>
      <stop offset=".55" stop-color="#000" stop-opacity=".12"/>
      <stop offset="1" stop-color="#000" stop-opacity=".68"/>
    </radialGradient>
    <linearGradient id="${p}glass" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fff" stop-opacity=".55"/>
      <stop offset=".4" stop-color="#fff" stop-opacity=".08"/>
      <stop offset="1" stop-color="#fff" stop-opacity=".3"/>
    </linearGradient>
    <linearGradient id="${p}gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#e8e8e8"/><stop offset=".5" stop-color="#8d8d8d"/><stop offset="1" stop-color="#4a4a4a"/>
    </linearGradient>
  </defs>`;
}

/**
 * A standing figure, front view. x = centre, y = feet, h = height in px.
 * o: { top, bottom, dress (áo dài length), hat, cane, hair: "short"|"bun"|"grey", jacketOpen, holding }
 */
export function standing(x, y, h, o = {}) {
  const r = h * 0.068, hy = y - h + r, sw = h * 0.25, neck = hy + r * 1.05;
  const hip = y - h * 0.47, top = o.top || "#555", bottom = o.bottom || "#333";
  const hem = o.dress ? y - h * 0.2 : hip + h * 0.04;
  const legW = h * 0.07;
  let s = "";
  // legs
  s += `<rect x="${x - sw * 0.38}" y="${hip}" width="${legW}" height="${y - hip}" fill="${bottom}"/>`;
  s += `<rect x="${x + sw * 0.38 - legW}" y="${hip}" width="${legW}" height="${y - hip}" fill="${bottom}"/>`;
  s += `<ellipse cx="${x - sw * 0.3}" cy="${y}" rx="${legW * 0.9}" ry="${legW * 0.35}" fill="#111"/>`;
  s += `<ellipse cx="${x + sw * 0.3}" cy="${y}" rx="${legW * 0.9}" ry="${legW * 0.35}" fill="#111"/>`;
  // torso (and áo dài flaps)
  const t = `M${x - sw / 2} ${neck + r * 0.5} Q${x - sw / 2 - 3} ${neck} ${x - sw * 0.2} ${neck} L${x + sw * 0.2} ${neck} Q${x + sw / 2 + 3} ${neck} ${x + sw / 2} ${neck + r * 0.5}
    L${x + sw * (o.dress ? 0.46 : 0.42)} ${hem} L${x - sw * (o.dress ? 0.46 : 0.42)} ${hem} Z`;
  s += `<path d="${t}" fill="${top}"/>`;
  if (o.jacketOpen) s += `<path d="M${x - sw * 0.12} ${neck} L${x} ${neck + h * 0.22} L${x + sw * 0.12} ${neck} Z" fill="#e8e8e8"/><rect x="${x - 2}" y="${neck + h * 0.05}" width="4" height="${h * 0.2}" fill="#222"/>`;
  // arms
  const armL = o.holding ? `M${x - sw / 2} ${neck + r * 0.6} L${x - sw * 0.75} ${neck + h * 0.2} L${x - sw * 0.2} ${neck + h * 0.27}` :
    `M${x - sw / 2} ${neck + r * 0.6} L${x - sw * 0.62} ${hip + h * 0.02}`;
  s += `<path d="${armL}" stroke="${top}" stroke-width="${h * 0.075}" fill="none" stroke-linecap="round"/>`;
  s += `<path d="M${x + sw / 2} ${neck + r * 0.6} L${x + sw * 0.62} ${hip + h * 0.02}" stroke="${top}" stroke-width="${h * 0.075}" fill="none" stroke-linecap="round"/>`;
  s += `<circle cx="${x + sw * 0.63}" cy="${hip + h * 0.04}" r="${h * 0.03}" fill="${SKIN}"/>`;
  if (!o.holding) s += `<circle cx="${x - sw * 0.63}" cy="${hip + h * 0.04}" r="${h * 0.03}" fill="${SKIN}"/>`;
  if (o.cane) s += `<line x1="${x + sw * 0.66}" y1="${hip + h * 0.03}" x2="${x + sw * 0.8}" y2="${y}" stroke="#151515" stroke-width="${h * 0.018}"/>`;
  // head
  s += `<rect x="${x - r * 0.35}" y="${hy + r * 0.7}" width="${r * 0.7}" height="${r * 0.6}" fill="${SKIN}"/>`;
  s += `<ellipse cx="${x}" cy="${hy}" rx="${r * 0.86}" ry="${r}" fill="${SKIN}"/>`;
  const hair = o.hair === "grey" ? "#b5b5b5" : HAIR;
  if (o.hair === "bun") s += `<path d="M${x - r * 0.9} ${hy} Q${x - r} ${hy - r * 1.3} ${x} ${hy - r * 1.1} Q${x + r} ${hy - r * 1.3} ${x + r * 0.9} ${hy} Q${x + r * 0.5} ${hy - r * 0.5} ${x} ${hy - r * 0.55} Q${x - r * 0.5} ${hy - r * 0.5} ${x - r * 0.9} ${hy} Z" fill="${hair}"/><circle cx="${x + r * 0.7}" cy="${hy - r * 0.8}" r="${r * 0.45}" fill="${hair}"/>`;
  else s += `<path d="M${x - r * 0.88} ${hy - r * 0.1} Q${x - r * 0.9} ${hy - r * 1.15} ${x} ${hy - r * 1.05} Q${x + r * 0.95} ${hy - r * 1.1} ${x + r * 0.88} ${hy - r * 0.1} Q${x + r * 0.4} ${hy - r * 0.62} ${x - r * 0.88} ${hy - r * 0.1} Z" fill="${hair}"/>`;
  if (o.glasses) s += `<path d="M${x - r * 0.62} ${hy - r * 0.05} h${r * 0.5} M${x + r * 0.12} ${hy - r * 0.05} h${r * 0.5}" stroke="#111" stroke-width="${r * 0.18}"/>`;
  if (o.hat) s += `<ellipse cx="${x}" cy="${hy - r * 0.62}" rx="${r * 1.6}" ry="${r * 0.32}" fill="${o.hat}"/><path d="M${x - r * 0.85} ${hy - r * 0.62} Q${x - r * 0.85} ${hy - r * 1.7} ${x} ${hy - r * 1.65} Q${x + r * 0.85} ${hy - r * 1.7} ${x + r * 0.85} ${hy - r * 0.62} Z" fill="${o.hat}"/><rect x="${x - r * 0.85}" y="${hy - r * 0.95}" width="${r * 1.7}" height="${r * 0.25}" fill="#333"/>`;
  return s;
}

/** A seated figure, front view, on a folding chair. x = centre, y = floor, h = standing height. */
export function seated(x, y, h, o = {}) {
  const r = h * 0.068, seat = y - h * 0.27, hy = seat - h * 0.47 + r, sw = h * 0.25, neck = hy + r * 1.05;
  const top = o.top || "#555", bottom = o.bottom || "#333";
  let s = "";
  s += `<rect x="${x - sw * 0.6}" y="${seat}" width="${sw * 1.2}" height="${h * 0.035}" fill="#3a3a3a"/>`;
  s += `<line x1="${x - sw * 0.55}" y1="${seat}" x2="${x - sw * 0.6}" y2="${y}" stroke="#2a2a2a" stroke-width="4"/><line x1="${x + sw * 0.55}" y1="${seat}" x2="${x + sw * 0.6}" y2="${y}" stroke="#2a2a2a" stroke-width="4"/>`;
  s += `<rect x="${x - sw * 0.42}" y="${seat - 2}" width="${sw * 0.84}" height="${h * 0.07}" fill="${bottom}"/>`;
  s += `<rect x="${x - sw * 0.4}" y="${seat}" width="${h * 0.07}" height="${y - seat}" fill="${bottom}"/>`;
  s += `<rect x="${x + sw * 0.4 - h * 0.07}" y="${seat}" width="${h * 0.07}" height="${y - seat}" fill="${bottom}"/>`;
  s += `<path d="M${x - sw / 2} ${neck + r * 0.5} Q${x - sw / 2} ${neck} ${x - sw * 0.2} ${neck} L${x + sw * 0.2} ${neck} Q${x + sw / 2} ${neck} ${x + sw / 2} ${neck + r * 0.5} L${x + sw * 0.44} ${seat + 4} L${x - sw * 0.44} ${seat + 4} Z" fill="${top}"/>`;
  if (o.jacketOpen) s += `<path d="M${x - sw * 0.12} ${neck} L${x} ${neck + h * 0.2} L${x + sw * 0.12} ${neck} Z" fill="#e8e8e8"/><rect x="${x - 2}" y="${neck + h * 0.04}" width="4" height="${h * 0.17}" fill="#222"/>`;
  s += `<path d="M${x - sw / 2} ${neck + r * 0.6} L${x - sw * 0.45} ${seat - 2} L${x - sw * 0.1} ${seat - 6}" stroke="${top}" stroke-width="${h * 0.075}" fill="none" stroke-linecap="round"/>`;
  s += `<path d="M${x + sw / 2} ${neck + r * 0.6} L${x + sw * 0.45} ${seat - 2} L${x + sw * 0.1} ${seat - 6}" stroke="${top}" stroke-width="${h * 0.075}" fill="none" stroke-linecap="round"/>`;
  if (o.cane) s += `<line x1="${x + sw * 0.05}" y1="${seat - 10}" x2="${x + sw * 0.35}" y2="${y}" stroke="#101010" stroke-width="${h * 0.02}"/><path d="M${x + sw * 0.05} ${seat - 10} q-12 -10 -20 2" stroke="#101010" stroke-width="${h * 0.02}" fill="none"/>`;
  s += `<rect x="${x - r * 0.35}" y="${hy + r * 0.7}" width="${r * 0.7}" height="${r * 0.6}" fill="${SKIN}"/>`;
  s += `<ellipse cx="${x}" cy="${hy}" rx="${r * 0.86}" ry="${r}" fill="${SKIN}"/>`;
  const hair = o.hair === "grey" ? "#c4c4c4" : HAIR;
  s += `<path d="M${x - r * 0.88} ${hy - r * 0.1} Q${x - r * 0.9} ${hy - r * 1.15} ${x} ${hy - r * 1.05} Q${x + r * 0.95} ${hy - r * 1.1} ${x + r * 0.88} ${hy - r * 0.1} Q${x + r * 0.4} ${hy - r * 0.62} ${x - r * 0.88} ${hy - r * 0.1} Z" fill="${hair}"/>`;
  if (o.glasses) s += `<path d="M${x - r * 0.62} ${hy - r * 0.05} h${r * 0.5} M${x + r * 0.12} ${hy - r * 0.05} h${r * 0.5}" stroke="#111" stroke-width="${r * 0.18}"/>`;
  if (o.hat) s += `<ellipse cx="${x}" cy="${hy - r * 0.62}" rx="${r * 1.6}" ry="${r * 0.32}" fill="${o.hat}"/><path d="M${x - r * 0.85} ${hy - r * 0.62} Q${x - r * 0.85} ${hy - r * 1.7} ${x} ${hy - r * 1.65} Q${x + r * 0.85} ${hy - r * 1.7} ${x + r * 0.85} ${hy - r * 0.62} Z" fill="${o.hat}"/><rect x="${x - r * 0.85}" y="${hy - r * 0.95}" width="${r * 1.7}" height="${r * 0.25}" fill="#333"/>`;
  return s;
}

/** A display case on a pedestal. open = lid lifted. */
export function displayCase(p, x, y, w, h, o = {}) {
  const gy = y - h, ph = h * 0.55, gh = h - ph;
  let s = `<rect x="${x - w / 2}" y="${y - ph}" width="${w}" height="${ph}" fill="${o.pedestal || "#5a5a5a"}"/>`;
  s += `<rect x="${x - w / 2 - 6}" y="${y - ph - 6}" width="${w + 12}" height="10" fill="#3c3c3c"/>`;
  s += `<rect x="${x - w / 2}" y="${gy}" width="${w}" height="${gh - 6}" fill="${o.inside || "#6a6a6a"}" stroke="#d0d0d0" stroke-width="3"/>`;
  s += `<rect x="${x - w / 2}" y="${gy}" width="${w}" height="${gh - 6}" fill="url(#${p}glass)"/>`;
  if (o.cushion) s += `<rect x="${x - w * 0.22}" y="${y - ph - 22}" width="${w * 0.44}" height="16" rx="4" fill="#3a3a3a"/>`;
  if (o.seal) s += `<rect x="${x - 12}" y="${y - ph - 38}" width="24" height="16" fill="#cfcfcf"/><circle cx="${x}" cy="${y - ph - 44}" r="9" fill="#bdbdbd"/>`;
  if (o.open) s += `<path d="M${x - w / 2} ${gy} L${x - w / 2 + 18} ${gy - 46} L${x + w / 2 + 18} ${gy - 46} L${x + w / 2} ${gy} Z" fill="#9a9a9a" fill-opacity=".45" stroke="#e2e2e2" stroke-width="3"/>`;
  return s;
}

/** Wall clock with hour/minute hands at the given time (12-hour face). */
export function clock(cx, cy, r, hh, mm, face = "#d9d9d9") {
  const hourA = ((hh % 12) + mm / 60) * 30, minA = mm * 6;
  const hand = (a, len, w) => {
    const rad = (a - 90) * Math.PI / 180;
    return `<line x1="${cx}" y1="${cy}" x2="${(cx + Math.cos(rad) * len).toFixed(1)}" y2="${(cy + Math.sin(rad) * len).toFixed(1)}" stroke="#0d0d0d" stroke-width="${w}" stroke-linecap="round"/>`;
  };
  let s = `<circle cx="${cx}" cy="${cy}" r="${r + 5}" fill="#1a1a1a"/><circle cx="${cx}" cy="${cy}" r="${r}" fill="${face}"/>`;
  for (let i = 0; i < 12; i++) {
    const a = i * 30 * Math.PI / 180, big = i % 3 === 0;
    s += `<line x1="${(cx + Math.sin(a) * r * (big ? 0.7 : 0.8)).toFixed(1)}" y1="${(cy - Math.cos(a) * r * (big ? 0.7 : 0.8)).toFixed(1)}" x2="${(cx + Math.sin(a) * r * 0.93).toFixed(1)}" y2="${(cy - Math.cos(a) * r * 0.93).toFixed(1)}" stroke="#111" stroke-width="${big ? 5 : 3}"/>`;
  }
  s += hand(hourA, r * 0.52, 7) + hand(minA, r * 0.82, 5) + `<circle cx="${cx}" cy="${cy}" r="4" fill="#111"/>`;
  return s;
}

