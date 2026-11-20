// Shared pieces of case documents: police form headers, signature blocks, the daily paper masthead, gold box.
// Kept here so every police record and every issue of Báo Hoài Giang looks the same. Each piece follows the
// interface language (js/i18n.js LANG) so translated cases (cases/<id>/en/) reuse them.
import { wd, dt } from "./kit.js";
import { LANG } from "./i18n.js";

const TXT = {
  vi: {
    police: "CÔNG AN THỊ XÃ HOÀI GIANG", policeUnit: "Đội Cảnh sát hình sự",
    state: "CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM", motto: "Độc lập – Tự do – Hạnh phúc",
    witness: "NGƯỜI KHAI", officer: "CÁN BỘ GHI LỜI KHAI",
    issue: (no, vol) => `Số ${no} · Năm thứ ${vol}`, price: "Giá 1.200 đồng", tagline: "Báo của nhân dân thị xã Hoài Giang · Ra hằng ngày", pages: "8 trang",
    gold: "Giá vàng hôm qua", buy: "Mua", sell: "Bán", goldRow: "Vàng 99,99 (lượng)", tael: "1 lượng = 10 chỉ = 37,5 gam.",
  },
  en: {
    police: "HOÀI GIANG TOWN POLICE", policeUnit: "Criminal Investigation Team",
    state: "SOCIALIST REPUBLIC OF VIETNAM", motto: "Independence – Freedom – Happiness",
    witness: "STATEMENT GIVEN BY", officer: "OFFICER TAKING THE STATEMENT",
    issue: (no, vol) => `No. ${no} · Year ${vol}`, price: "Price 1,200 dong", tagline: "The people's paper of Hoài Giang town · Daily", pages: "8 pages",
    gold: "Gold yesterday", buy: "Buy", sell: "Sell", goldRow: "Gold 99.99 (per lượng)", tael: "1 lượng (tael) = 10 chỉ = 37.5 grams.",
  },
};
const L = () => TXT[LANG] || TXT.vi;
/** Vietnamese thousands dots ("4.230.000") become commas in English. */
const num = (s) => LANG === "vi" ? s : String(s).replace(/\./g, ",");

/** Two-column header of a police record (issuing office | national motto). */
export const policeHead = () => `
  <div class="typed-head"><div><b>${L().police}</b><span class="u">${L().policeUnit}</span></div>
    <div><b>${L().state}</b><span class="u">${L().motto}</span></div></div>`;

/** Generic two-column official header with a custom issuing office. */
export const officeHead = (office, unit) => `
  <div class="typed-head"><div><b>${office}</b><span class="u">${unit}</span></div>
    <div><b>${L().state}</b><span class="u">${L().motto}</span></div></div>`;

/** Signature block of a statement: the witness on the left, officer Phát on the right. */
export const statementSign = (shortName, fullName) => `
  <div class="typed-sign"><div>${L().witness}<div class="sign">${shortName}</div>${fullName}</div>
    <div>${L().officer}<div class="sign">Phát</div>Huỳnh Tấn Phát</div></div>`;

/**
 * Masthead block of Báo Hoài Giang for a given issue.
 * iso: issue date; weekday: weekday text in the document's language; lunar: lunar date line; no: issue number.
 */
export const dailyMast = (iso, weekday, lunar, no, volume = "XXII") => {
  const [y, m, d] = iso.split("-").map(Number);
  return `
    <div class="news-top"><span>${L().issue(num(no), volume)}</span><span>${L().price}</span></div>
    <div class="news-mast">Hoài Giang<small>${L().tagline}</small></div>
    <div class="news-bar"><span>${wd(iso, weekday)} ${dt(iso, `${d}-${m}-${y}`)}</span><span>${lunar}</span><span>${L().pages}</span></div>`;
};

/** Small gold-price box, repeated in every issue. */
export const goldBox = (buy, sell) => `
  <div class="news-box">
    <h4>${L().gold}</h4>
    <table class="news-table">
      <tr><th></th><th>${L().buy}</th><th>${L().sell}</th></tr>
      <tr><td>${L().goldRow}</td><td class="n">${num(buy)}</td><td class="n">${num(sell)}</td></tr>
    </table>
    <p class="small muted" style="margin-top:4px">${L().tael}</p>
  </div>`;
