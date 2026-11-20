// Tiny synthesized desk sounds (paper, pin, stamp, bell, wrong, aha) with the Web Audio API: no audio files to download.
// The audio context starts on the first user gesture (browser autoplay rules).
// Every sound goes through a per-sound trim (a level table), a master gain and a safety limiter.
import { state } from "./store.js";

let ctx = null;
let out = null;        // master input: all sounds connect here
let noise = null;      // one shared noise buffer, played from a random offset each time

function audio() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    const master = ctx.createGain();
    master.gain.value = 1;
    const lim = ctx.createDynamicsCompressor();   // safety limiter: stacked sounds never clip
    lim.threshold.value = -3; lim.knee.value = 0; lim.ratio.value = 20; lim.attack.value = 0.001; lim.release.value = 0.1;
    out = ctx.createGain();
    out.connect(master); master.connect(lim); lim.connect(ctx.destination);
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

function noiseBuffer(ac) {
  if (!noise) {
    noise = ac.createBuffer(1, Math.ceil(ac.sampleRate * 1), ac.sampleRate);
    const d = noise.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  return noise;
}

/** Nudges x by a small random factor (+-spread) so repeated sounds are never identical. */
const vary = (x, spread) => x * (1 + (Math.random() * 2 - 1) * spread);

function burst(ac, dest, { dur, freq, q = 1, gain = 0.3, type = "bandpass", attack = 0.005, delay = 0 }) {
  const src = ac.createBufferSource();
  src.buffer = noiseBuffer(ac);
  const f = ac.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = ac.createGain(); const t = ac.currentTime + delay;
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + attack); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  src.connect(f).connect(g).connect(dest);
  src.start(t, Math.random() * (src.buffer.duration - dur - 0.01), dur);
}

function tone(ac, dest, { freq, to = null, dur, gain = 0.2, type = "sine", delay = 0, attack = 0.01 }) {
  const o = ac.createOscillator(); o.type = type;
  const g = ac.createGain(); const t = ac.currentTime + delay;
  o.frequency.setValueAtTime(freq, t);
  if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur * 0.8);
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + attack); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g).connect(dest); o.start(t); o.stop(t + dur);
}

// Level table: loudness trim per sound, so no sound sticks out (measured offline, about -28 LUFS while sounding).
const TRIM = { paper: 1.7, pin: 1, stamp: 0.71, bell: 1.29, wrong: 1.6, aha: 1.27 };

const RECIPES = {
  // A light wooden stamp: a mid "thud" with a full low body and almost no top.
  stamp(ac, o) {
    burst(ac, o, { dur: 0.13, freq: vary(400, 0.03), q: 0.6, gain: 0.6, attack: 0.002 });
    tone(ac, o, { freq: vary(125, 0.03), to: 85, dur: 0.2, gain: 0.26, attack: 0.002 });
    tone(ac, o, { freq: 70, dur: 0.2, gain: 0.17, attack: 0.002 });
    burst(ac, o, { dur: 0.03, freq: 1000, q: 0.8, gain: 0.08, attack: 0.001 });
  },
  // A short wooden "tick".
  pin(ac, o) {
    tone(ac, o, { freq: vary(900, 0.04), to: 550, dur: 0.05, gain: 0.18, attack: 0.002 });
    burst(ac, o, { dur: 0.025, freq: 2200, q: 2, gain: 0.06, attack: 0.001 });
  },
  // Paper with some body: a low rustle plus a short bright layer.
  paper(ac, o) {
    burst(ac, o, { dur: 0.25, freq: vary(1400, 0.08), q: 0.5, gain: 0.2, attack: 0.03 });
    burst(ac, o, { dur: 0.12, freq: vary(3200, 0.08), q: 0.7, gain: 0.08, attack: 0.01, delay: 0.06 });
  },
  // Warm bell: fifth (E6 + B6) with a soft E5 underneath.
  bell(ac, o) {
    tone(ac, o, { freq: vary(1318, 0.02), dur: 1.1, gain: 0.11 });
    tone(ac, o, { freq: vary(1976, 0.02), dur: 0.8, gain: 0.045, delay: 0.01 });
    tone(ac, o, { freq: vary(659, 0.02), dur: 0.7, gain: 0.05, delay: 0.005 });
  },
  // A gentle "hm?": two close sine notes going down, no buzzer.
  wrong(ac, o) {
    tone(ac, o, { freq: vary(392, 0.02), dur: 0.16, gain: 0.1 });
    tone(ac, o, { freq: vary(784, 0.02), dur: 0.16, gain: 0.03 });
    tone(ac, o, { freq: vary(330, 0.02), dur: 0.22, gain: 0.1, delay: 0.11 });
  },
  // "Aha": three quick notes going up (E5, G#5, B5).
  aha(ac, o) {
    [659.3, 830.6, 987.8].forEach((f, i) => {
      tone(ac, o, { freq: vary(f, 0.01), dur: 0.5, gain: 0.09, delay: i * 0.09 });
      tone(ac, o, { freq: vary(f * 2, 0.01), dur: 0.3, gain: 0.02, delay: i * 0.09 });
    });
  },
};

/** Plays a named effect: "paper", "pin", "stamp", "bell", "wrong", "aha". Silent when sound is off. */
export function play(name) {
  if (!state.sound) return;
  const recipe = RECIPES[name];
  if (!recipe) return;
  const ac = audio();
  if (!ac) return;
  const g = ac.createGain();
  g.gain.value = TRIM[name] ?? 1;
  g.connect(out);
  recipe(ac, g);
}
