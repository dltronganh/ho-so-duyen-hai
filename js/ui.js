// Small UI helpers shared by the panels: toast messages, memo-style dialogs, HTML escaping.
import { t } from "./i18n.js";

let toastTimer = 0;
/** Shows a short message at the bottom of the screen. */
export function toast(text) {
  const t = document.getElementById("toast");
  t.textContent = text;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

/**
 * Shows a memo dialog. buttons: [{ label, value, cls }]. Resolves with the clicked button's value
 * (or null when closed with Escape / a click outside).
 */
export function dialog(innerHtml, buttons = [{ label: t("close"), value: true, cls: "btn--paper" }]) {
  const m = document.getElementById("modal");
  m.innerHTML = `<div class="memo" role="dialog" aria-modal="true">${innerHtml}<div class="actions">${
    buttons.map((b, i) => `<button class="btn ${b.cls || "btn--paper"}" data-i="${i}">${b.label}</button>`).join("")}</div></div>`;
  m.hidden = false;
  const first = m.querySelector(".actions .btn:last-child");
  first?.focus();
  return new Promise((resolve) => {
    const done = (v) => { m.hidden = true; m.innerHTML = ""; document.removeEventListener("keydown", onKey, true); resolve(v); };
    const onKey = (e) => { if (e.key === "Escape") { e.stopPropagation(); done(null); } };
    document.addEventListener("keydown", onKey, true);
    m.onclick = (e) => {
      const b = e.target.closest("[data-i]");
      if (b) done(buttons[Number(b.dataset.i)].value);
      else if (e.target === m) done(null);
    };
  });
}

/** Escapes text for safe insertion into HTML. */
export const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
