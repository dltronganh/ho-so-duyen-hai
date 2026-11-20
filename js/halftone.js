// Turns grey-tone SVG drawings into newspaper halftone images (real dots on a 45° screen).
// Why not CSS: a CSS contrast-filter halftone breaks as soon as the document is scaled (thumbnails, zoom),
// because the dot screen gets resampled. A rendered bitmap scales like a photo scan.
// Usage: kit.photo() registers the SVG and emits <img data-ht="key">; call develop(root) after inserting HTML.

const ART = new Map();      // key -> svg string
const CACHE = new Map();    // key -> Promise<string> (data URL)
const INK = "rgba(24, 20, 16, 0.93)";
const SCALE = 2;            // render at 2x the viewBox for crisp dots when zoomed in
const CELL = 7;             // dot pitch in rendered px (3.5 px at 1x): coarse enough to read as print
const ANGLE = Math.PI / 4;  // classic 45° screen angle for black ink

/** Remembers an SVG drawing under a stable key and returns the key. */
export function register(svg) {
  const key = "ht" + hash(svg);
  ART.set(key, svg);
  return key;
}

/** Fills every <img data-ht> inside root with its halftone rendering. Safe to call repeatedly. */
export async function develop(root) {
  const imgs = [...root.querySelectorAll("img[data-ht]:not([src])")];
  await Promise.all(imgs.map(async (img) => {
    try { img.src = await render(img.dataset.ht); } catch (e) { console.warn("halftone failed", e); }
  }));
}

/** Renders (once, cached) the halftone data URL for a registered key. */
export function render(key) {
  if (!CACHE.has(key)) CACHE.set(key, make(ART.get(key)));
  return CACHE.get(key);
}

async function make(svg) {
  const vb = /viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/.exec(svg);
  const w = Math.round(+vb[1] * SCALE), h = Math.round(+vb[2] * SCALE);
  const src = await loadImage("data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg));
  // Read the drawing's brightness from a slightly blurred copy, like a camera lens would.
  const probe = document.createElement("canvas");
  probe.width = w; probe.height = h;
  const pc = probe.getContext("2d", { willReadFrequently: true });
  pc.fillStyle = "#fff"; pc.fillRect(0, 0, w, h);
  pc.filter = "blur(1.6px)";
  pc.drawImage(src, 0, 0, w, h);
  const px = pc.getImageData(0, 0, w, h).data;
  const out = document.createElement("canvas");
  out.width = w; out.height = h;
  const oc = out.getContext("2d");
  oc.fillStyle = INK;
  const cos = Math.cos(ANGLE), sin = Math.sin(ANGLE), reach = Math.hypot(w, h);
  // Walk a rotated lattice; each lattice point becomes one dot whose area follows the local darkness.
  for (let u = -reach; u < reach; u += CELL) {
    for (let v = -reach; v < reach; v += CELL) {
      const x = u * cos - v * sin + w / 2, y = u * sin + v * cos + h / 2;
      if (x < -CELL || y < -CELL || x > w + CELL || y > h + CELL) continue;
      const cx = Math.min(w - 1, Math.max(0, x | 0)), cy = Math.min(h - 1, Math.max(0, y | 0));
      const i = (cy * w + cx) * 4;
      const lum = (px[i] * 0.299 + px[i + 1] * 0.587 + px[i + 2] * 0.114) / 255;
      const dark = Math.min(1, Math.max(0, (1 - lum) * 1.08));
      if (dark < 0.04) continue;
      const r = CELL * 0.71 * Math.sqrt(dark);
      oc.beginPath(); oc.arc(x, y, r, 0, Math.PI * 2); oc.fill();
    }
  }
  return out.toDataURL("image/png");
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0).toString(36);
}
