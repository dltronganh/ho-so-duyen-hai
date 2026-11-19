// Tiny synthesized desk sounds (paper, pin, stamp, bell) with the Web Audio API: no audio files to download.
// The audio context starts on the first user gesture (browser autoplay rules).
import { state } from "./store.js";

let ctx = null;

function audio() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

function noiseBuffer(ac, seconds) {
  const buf = ac.createBuffer(1, Math.ceil(ac.sampleRate * seconds), ac.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return buf;
}

function burst(ac, { dur, freq, q = 1, gain = 0.3, type = "bandpass", attack = 0.005 }) {
  const src = ac.createBufferSource();
  src.buffer = noiseBuffer(ac, dur);
  const f = ac.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = ac.createGain(); const t = ac.currentTime;
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + attack); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  src.connect(f).connect(g).connect(ac.destination); src.start(t); src.stop(t + dur);
}

function tone(ac, { freq, dur, gain = 0.2, type = "sine", delay = 0 }) {
  const o = ac.createOscillator(); o.type = type; o.frequency.value = freq;
  const g = ac.createGain(); const t = ac.currentTime + delay;
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + 0.01); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g).connect(ac.destination); o.start(t); o.stop(t + dur);
}

/** Plays a named effect: "paper", "pin", "stamp", "bell", "wrong". Silent when sound is off. */
export function play(name) {
  if (!state.sound) return;
  const ac = audio();
  if (!ac) return;
  switch (name) {
    case "paper": burst(ac, { dur: 0.22, freq: 2600, q: 0.6, gain: 0.18, attack: 0.03 }); break;
    case "pin": tone(ac, { freq: 1800, dur: 0.05, gain: 0.12, type: "square" }); burst(ac, { dur: 0.05, freq: 4000, gain: 0.1 }); break;
    case "stamp": burst(ac, { dur: 0.18, freq: 180, q: 0.8, gain: 0.7, type: "lowpass", attack: 0.002 }); tone(ac, { freq: 70, dur: 0.2, gain: 0.35 }); break;
    case "bell": tone(ac, { freq: 1318, dur: 1.1, gain: 0.12 }); tone(ac, { freq: 1976, dur: 0.8, gain: 0.05, delay: 0.01 }); break;
    case "wrong": tone(ac, { freq: 196, dur: 0.18, gain: 0.12, type: "triangle" }); tone(ac, { freq: 147, dur: 0.25, gain: 0.12, type: "triangle", delay: 0.12 }); break;
  }
}
