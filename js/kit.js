// Small HTML helpers for writing case documents.
// Documents are template strings; these helpers wrap facts that the logic checker must verify
// (weekdays, ages, ID numbers, clock times, dates) in spans carrying data-check attributes.
// The logic checker reads those spans and compares them with case/facts.js.
// Usage: import { wd, age, id, at, dt, line, photo } from "../../js/kit.js";
import { register } from "./halftone.js";

/** Weekday name written in a document, e.g. wd("1997-03-15", "Thứ Bảy"). Checked against the calendar. */
export const wd = (iso, text) => `<span data-check="weekday" data-date="${iso}">${text}</span>`;

/** Age written in a document: age("vu", "1997-03-15", 31). Checked against the person's birth date. */
export const age = (person, onIso, n) => `<span data-check="age" data-person="${person}" data-on="${onIso}">${n}</span>`;

/** ID card number as written (spaces allowed): id("dinh", "205 118 437"). Checked against PEOPLE[person].cmnd. */
export const id = (person, text) => `<span data-check="cmnd" data-person="${person}">${text}</span>`;

/** Clock time of a known event: at("outage", "20 giờ 41"). Digits must match EVENTS[event]. */
export const at = (event, text) => `<span data-check="time" data-event="${event}">${text}</span>`;

/** A written date: dt("1997-03-15", "15-3-1997"). The day, month (and year if written) must match. */
export const dt = (iso, text) => `<span data-check="date" data-date="${iso}">${text}</span>`;

/** A selectable statement line (for "point at the lie" questions). Ids must be unique within the case. */
export const line = (lineId, text, tag = "p") => `<${tag} class="line" data-line="${lineId}">${text}</${tag}>`;

/** A newspaper photo: halftone-rendered by js/halftone.js, or a plain print (cls "print") kept as inline SVG. */
export const photo = (svg, caption = "", cls = "") => {
  const vb = /viewBox="0 0 (\S+) (\S+)"/.exec(svg);
  const body = cls.includes("print") ? `<div class="screen">${svg}</div>`
    : `<img class="ht" data-ht="${register(svg)}" width="${vb[1]}" height="${vb[2]}" alt="">`;
  return `<figure class="photo ${cls}">${body}${caption ? `<figcaption>${caption}</figcaption>` : ""}</figure>`;
};

/** Red or blue rubber stamp. Position with style, e.g. "right:40px;bottom:60px". */
export const stamp = (text, style = "", cls = "") => `<div class="stamp stamp-abs ${cls}" style="${style}">${text}</div>`;

/** Tape counter "mm:ss" of a known event on the radio station's recording: tape("outage", "40:12"). Start time in facts.TAPE_START. */
export const tape = (event, text) => `<span data-check="tape" data-event="${event}">[${text}]</span>`;

/**
 * A time read from a clock known to be off: clock("departure", 25, "23:12") means the written time is the true
 * time of EVENTS.departure plus 25 minutes. The checker verifies the arithmetic.
 */
export const clock = (event, offsetMin, text) => `<span data-check="time" data-event="${event}" data-offset="${offsetMin}">${text}</span>`;

/** A lunar date written in a document: lunar("1998-02-11", "rằm tháng Giêng"). Checked against facts.LUNAR_NEW_YEAR (month 1 only). */
export const lunar = (iso, text) => `<span data-check="lunar" data-date="${iso}">${text}</span>`;
