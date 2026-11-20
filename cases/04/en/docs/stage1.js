// Case 04, second folder (ENGLISH version, after question 1): the photographs of fragment P-07 over the two weeks of the exhibition
// (registration photo, both catalogue printings, the newspaper, a class snapshot), Prof. Lâm's essay, the visitors' sign chart.
// Facts must agree with the case facts.js. papyrus() modes: genuine, mirror (flipped print), fake (hand-made copy).
// Translation of ../../docs/stage1.js.
import { wd, age, dt, photo, stamp } from "../../../../js/kit.js";
import { officeHead, dailyMast, goldBox } from "../../../../js/docparts.js";
import { SIGNS, NUM } from "../../../03/facts.js";
import { papyrus, classPhoto } from "../../art.js";

const tinhTrang = {
  id: "tinh_trang", stage: 1, kind: "Report", label: "Condition report on exhibit P-07 on receipt at the museum",
  html: () => `
  <div class="doc doc--typed">
    ${officeHead("DEPARTMENT OF CULTURE AND INFORMATION", "Hoài Giang Museum")}
    <div class="typed-title">EXHIBIT CONDITION REPORT</div>
    <div class="typed-sub">Drawn up in the conservation room, ${wd("1999-11-04", "Thursday")} ${dt("1999-11-04", "4-11-1999")}</div>
    <p>Exhibit: <b>P-07</b>, a papyrus fragment with hieroglyphs, lent by Mr Trịnh Gia Bảo for display from ${dt("1999-11-06", "6-11")} to ${dt("1999-11-21", "21-11-1999")}.</p>
    <p>Size: 24 × 19 cm. Yellowish brown, black ink. Four lines of writing.</p>
    <p>Damage: a small oval wormhole in the upper right corner; a brown stain in the lower left corner; the right edge torn unevenly. No fresh breaks.</p>
    <p class="center" style="margin:12px 0 4px">${papyrus({ mode: "genuine", width: 320 })}</p>
    <p class="center small">Registration photograph, taken in the conservation room on ${dt("1999-11-04", "4-11-1999")}. The negative is kept in the museum's archive store.</p>
    <p>Professor Lâm Quang Tịnh confirms: <i>"This is indeed the fragment I examined and photographed at Mr Bảo's house in Marseille in 1971, not a line missing, not a stroke added."</i></p>
    <div class="typed-sign"><div>CONSERVATOR<div class="sign">Hà</div>Lê Thu Hà</div><div>OWNER OF THE EXHIBIT<div class="sign">G. Bảo</div>Trịnh Gia Bảo</div></div>
    <div class="typed-sign" style="margin-top:6px"><div></div><div>AUTHENTICATING EXPERT<div class="sign">Lâm</div>Prof. Lâm Quang Tịnh</div></div>
  </div>`,
};

/** One page of the exhibition catalogue (page 12, fragment P-07). */
const cataloguePage = (mode, tone, colophon, extraCaption = "") => `
    <div class="brochure-num">Papyrus and Sacred Signs · Ancient Egypt · Exhibition catalogue · page 12</div>
    <p class="center" style="margin:14px 0 8px">${papyrus({ mode, width: 320, tone })}</p>
    <p class="small"><b>P-07.</b> Fragment of the grain-wage ledger of the workmen's village of Set-Maat. Papyrus, hieroglyphs, year 16 of a Pharaoh's reign (about 1100 BC).
      24 × 19 cm. Trịnh Gia Bảo collection, Marseille.${extraCaption || " Photo: Prof. Lâm Quang Tịnh, taken in Marseille in 1971."}</p>
    <p class="small muted" style="margin-top:18px;border-top:1px solid #999;padding-top:6px">${colophon}</p>`;

const catalogue1 = {
  id: "catalogue1", stage: 1, kind: "Catalogue", label: "Exhibition catalogue, page 12 (copy handed out on opening night)",
  html: () => `
  <div class="doc doc--brochure">
    ${cataloguePage("mirror", "", `Copyright held by the exhibition organisers. 50 copies printed at the Hoài Giang Printing Works, printing finished on ${dt("1999-11-04", "4-11-1999")}. Not for sale.`)}
  </div>`,
};

const catalogue2 = {
  id: "catalogue2", stage: 1, kind: "Catalogue", label: "Exhibition catalogue, page 12 (copy sold at the ticket desk)",
  html: () => `
  <div class="doc doc--brochure">
    ${cataloguePage("genuine", "case", `Copyright held by the exhibition organisers. Second printing, 300 copies, at the Hoài Giang Printing Works, printing finished on ${dt("1999-11-10", "10-11-1999")}. Price 15,000 dong.`,
      ` Photo re-taken at the display case on the morning of ${dt("1999-11-09", "9-11-1999")}.`)}
    <div style="margin-top:16px;padding:10px 14px;background:#fffbe8;border:1px solid #b9a66a;transform:rotate(-1.2deg);font-size:14px">
      <b>ERRATUM</b> (loose slip inserted at page 12). The photograph of fragment P-07 on page 12 of the printing dated ${dt("1999-11-04", "4-11-1999")} was spoiled by a fault in making the film.
      This printing uses a re-taken photograph. The organisers apologise to readers.</div>
  </div>`,
};

const bao7 = {
  id: "bao_7", stage: 1, kind: "Newspaper", label: "Hoài Giang newspaper, Sunday 7/11 – front page",
  html: () => `
  <div class="doc doc--news">
    ${dailyMast("1999-11-07", "Sunday", "Year of the Cat", "2.157", "XXIV")}
    <div class="news-grid" style="grid-template-columns: 2.05fr 1fr">
      <div>
        <div class="news-kicker">Exhibition "Papyrus and Sacred Signs: Ancient Egypt"</div>
        <h1 class="news-head">Three thousand years of Nile writing come to Hoài Giang</h1>
        <div class="news-deck">Forty objects from an overseas Vietnamese · A papyrus fragment bearing the names of three workmen</div>
        <figure class="photo" style="text-align:center">${papyrus({ mode: "mirror", width: 300, tone: "news", hole: false, cropLeft: 80 })}
          <figcaption>Papyrus fragment P-07, the most precious object in the exhibition. Photo: <b>from the exhibition catalogue</b></figcaption></figure>
        <div class="news-by">Võ Thị Kiều</div>
        <div class="news-cols" style="columns:2">
          <p class="dropcap">On the evening of ${wd("1999-11-06", "Saturday")} ${dt("1999-11-06", "6-11")}, the Hoài Giang Museum opened the exhibition "Papyrus and Sacred Signs: Ancient Egypt" with forty objects
            lent by Mr <b>Trịnh Gia Bảo</b> (${age("bao", "1999-11-06", 71)} years old), an overseas Vietnamese in Marseille. Mr Bảo's grandfather, Trịnh Văn Lộc, went to Egypt with the labour corps
            in 1919 and bought the objects in Luxor.</p>
          <p>Mrs <b>Phan Thị Nguyệt</b>, director of the museum, said this is the first time the province has had genuine Egyptian objects. Forty-two invited guests were given a colour catalogue.</p>
          <p>Most precious of all is papyrus fragment P-07, a page from the grain-wage ledger of the village of the workmen who built the royal tombs. According to Professor <b>Lâm Quang Tịnh</b>, who has studied this fragment since 1971,
            the three lines of names on it belong to a stonecutter, a painter and a scribe. "Three thousand years ago they drew their grain; today they have come to Hoài Giang," the professor said.</p>
          <p>The exhibition is open until ${dt("1999-11-21", "21-11")}, from 8:00 to 17:00, closed on Mondays. Tickets 2,000 dong, schoolchildren admitted free.</p>
        </div>
      </div>
      <div>
        ${goldBox("4.230.000", "4.260.000")}
        <div class="news-box"><h4>News in brief</h4>
          <p class="small"><b>Heavy rain.</b> The weather station forecasts more heavy rain across the Central region next week; residents of low-lying areas should guard against floods.</p>
          <p class="small"><b>Hoài Giang Bridge.</b> The new bridge will open to traffic before Tết Canh Thìn.</p>
        </div>
        <div class="news-ad"><div class="big">Minh Quân Photo &amp; Restoration</div><p class="small" style="margin:4px 0 0">Restoration of old photographs · Colour prints while you wait · Paintings and cards made to your design<br>52 Lê Lợi · Tel. 82 318</p></div>
      </div>
    </div>
  </div>`,
};

const anhLop = {
  id: "anh_lop", stage: 1, kind: "Photograph", label: "Photograph of Class 8A in front of case P-07 (handed to the police by the teacher)",
  html: () => `
  <div class="doc doc--brochure" style="width:820px;background:#fbfaf5">
    ${photo(classPhoto(), "", "print")}
    <div style="margin-top:10px;padding:10px 14px;background:#ece8dc;font-family:'Patrick Hand';font-size:21px;color:#23407a">
      On the back of the photograph: <i>Class 8A of Nguyễn Du Lower Secondary School on a museum visit, ${wd("1999-11-14", "Sunday")} afternoon ${dt("1999-11-14", "14/11/99")}. Ms Ngân.</i></div>
    <p class="small muted" style="margin-top:6px">The back also bears a violet ink stamp: "Minh Quân Photo · 52 Lê Lợi".</p>
  </div>`,
};

const baiLam = {
  id: "bai_lam", stage: 1, kind: "Catalogue", label: "Essay by Prof. Lâm Quang Tịnh in the catalogue (pages 10–11)",
  html: () => `
  <div class="doc doc--brochure">
    <div class="brochure-num">Exhibition catalogue · pages 10–11</div>
    <div class="brochure-title">A Three-Thousand-Year-Old Page of Wages</div>
    <p class="small muted">Professor Lâm Quang Tịnh, formerly lecturer in Egyptology</p>
    <p style="margin-top:10px">In 1971, while working in Paris, I went down to Marseille to see a few objects that old Mr Trịnh Văn Lộc had brought back from Luxor in 1919. Among them was a small papyrus fragment
      which the family called "the charm sheet". It is no charm, but a page of the wage ledger of the village of Set-Maat, the men who carved and painted the royal tombs in the Valley west of Thebes. As far as I know, this is the only page of that village's wage ledger still outside Egypt.</p>
    <p>The fragment has four lines of hieroglyphs. The first line is the number sixteen: year 16 of a Pharaoh's reign. The three lines below are the names of three men drawing grain: the stonecutter <b>Khonsu</b>,
      the painter <b>Iuy</b>, the scribe <b>Hori</b>. The part recording each man's number of sacks of grain has been lost along the torn edge.</p>
    <p>The Egyptians did not write vowels. The name Khonsu on the paper has only four consonants; the other two names, three consonants each. Visitors can read them for themselves with the sign chart handed out at the door.</p>
    <p>Twenty-eight years later, the papyrus is just as it was the day I photographed it in the kitchen in Marseille. I hope the schoolchildren of Hoài Giang will come to see those three workmen.</p>
  </div>`,
};

/** The visitors' sign chart: a subset of the uniliteral signs of case 03, plus numerals and the reading rules. */
const CHART = [["A", "vulture"], ["I", "reed leaf"], ["Y", "double reed leaf"], ["W", "quail chick"], ["B", "foot"], ["P", "stool"],
  ["M", "owl"], ["N", "water"], ["R", "mouth"], ["H", "reed shelter"], ["KH", "placenta"], ["S", "folded cloth"],
  ["SH", "pool"], ["K", "basket"], ["T", "loaf"], ["D", "hand"]];

const bangChu = {
  id: "bang_chu", stage: 1, kind: "Leaflet", label: "Hieroglyph sign chart handed to visitors at the door",
  html: () => {
    const cells = CHART.map(([k, name]) => `<td><span class="glyphs">${SIGNS[k]}</span><b>${k}</b><br><span class="small">${name}</span></td>`);
    const rows = [];
    for (let i = 0; i < cells.length; i += 4) rows.push(`<tr>${cells.slice(i, i + 4).join("")}</tr>`);
    return `
  <div class="doc doc--brochure" style="width:640px">
    <div class="brochure-num">Leaflet for visitors</div>
    <div class="brochure-title" style="font-size:26px">Read Hieroglyphs for Yourself</div>
    <p class="small" style="margin-top:8px">Each sign below is read as one consonant. The Egyptians did not write vowels: the name Ptah is written P – T – Ḥ.</p>
    <table class="glyph-table">${rows.join("")}</table>
    <p class="small" style="margin-top:10px"><b>Direction of reading.</b> Hieroglyphs can be written both left to right and right to left.
      Figures of people, birds and animals always face towards the beginning of the line. To know which way to read, look at which way the creature faces: that is the surest rule, and everything else in the line must follow it.</p>
    <p class="small"><b>Numbers.</b> <span class="glyphs" style="font-size:24px">${NUM[10]}</span> = 10, <span class="glyphs" style="font-size:24px">${NUM[1]}</span> = 1.
      In a number, the tens always stand before the units in the direction of reading: <span class="glyphs" style="font-size:24px">${NUM[10]}${NUM[10]}${NUM[1]}${NUM[1]}${NUM[1]}</span> = 23.</p>
  </div>`;
  },
};

export default [tinhTrang, catalogue1, bao7, catalogue2, anhLop, baiLam, bangChu];
