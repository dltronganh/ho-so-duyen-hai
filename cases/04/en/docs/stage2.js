// Case 04 (English), third folder (after question 2): who received the first catalogue printing, the photo shop's order book,
// statements of the nephew Quân and the reporter Kiều. Mr Bảo's letter is defined here but appears in the fifth folder.
// Facts must agree with the case facts.js.
import { wd, age, dt, line } from "../../../../js/kit.js";
import { policeHead, statementSign } from "../../../../js/docparts.js";
import { papyrus } from "../../art.js";

/** Opening-night register: [name, title, signature]. 42 copies were handed out; the page shows the first 18 rows. */
const GUESTS = [
  ["Trịnh Gia Bảo", "owner of the exhibit", "G. Bảo"], ["Lâm Quang Tịnh", "professor, wrote the catalogue essay", "Lâm"], ["Nguyễn Hữu Tài", "Dept. of Culture and Information", "Tài"],
  ["Trịnh Minh Quân", "Mr Bảo's nephew", "Quân"], ["Võ Thị Kiều", "reporter, Hoài Giang newspaper", "Kiều"], ["Đỗ Văn Khoa", "label translator", "Khoa"],
  ["Lê Văn Hoà", "Hoài Giang High School", "Hoà"], ["Phạm Thị Duyên", "Provincial Fine Arts Association", "Duyên"], ["Huỳnh Văn Mến", "Hoài Giang Printing Works", "Mến"],
  ["Trần Thị Ngân", "Nguyễn Du Lower Secondary School", "Ngân"], ["Đặng Minh Trí", "Provincial Radio & TV Station", "Trí"], ["Lý Quốc Thịnh", "Phương Nam Insurance", "Thịnh"],
  ["Tôn Nữ Mai Anh", "Historical Science Association", "M. Anh"], ["Ngô Văn Lợi", "Hoài Giang Tourism Company", "Lợi"], ["Châu Thị Bích", "Provincial Library", "Bích"],
  ["Võ Đình Khải", "Town Culture Office", "Khải"], ["Hồ Văn Sang", "stamp collector", "Sang"], ["Lương Thị Hạnh", "Town Women's Union", "Hạnh"],
];

const kyNhan = {
  id: "ky_nhan", stage: 2, kind: "Ledger", label: "Catalogue receipt book, opening night",
  html: () => `
  <div class="doc doc--ledger">
    <div class="ledger-head"><div class="small caps">Hoài Giang Museum · Reception Desk</div>
      <h3>Catalogue Receipt Book</h3>
      <div>Evening of ${wd("1999-11-06", "Saturday")} ${dt("1999-11-06", "6/11/1999")} · exhibition opening ceremony · page 1</div></div>
    <table class="ledger">
      <tr><th style="width:40px">No.</th><th>Full name</th><th>Organisation / relation</th><th>Signature</th></tr>
      ${GUESTS.map((g, i) => `<tr><td class="p">${i + 1}</td><td>${g[0]}</td><td style="font-size:16px">${g[1]}</td><td style="font-family:'Dancing Script'">${g[2]}</td></tr>`).join("")}
    </table>
    <p style="font-family:'Patrick Hand';font-size:20px;color:#23407a;margin-top:10px">Pages 2–3: 24 more people, total 42. 50 copies printed, 8 left: destroyed on the morning of ${dt("1999-11-07", "7/11")} (photo on page 12 misprinted, per Prof. Lâm). — Hà</p>
    <p class="copy-note">Photocopy, lent by the museum. Museum staff did not sign.</p>
  </div>`,
};

/** Order book rows: [ISO date, customer, work, deposit, delivered]. */
const ORDERS = [
  ["1999-11-02", "Mrs Tư Lành (sells sticky rice at Đông Market), 26 Trưng Trắc", "Restore 1 old wedding photo, torn corner, reprint 20×30", "30,000", "6/11"],
  ["1999-11-03", "Hoài Giang Museum", "Print 120 exhibition opening invitations, photo P-07 printed from the film sent by the printing works, with retouching", "paid", "5/11"],
  ["1999-11-06", "Mr Hậu (coach line)", "Hand-paint 1 portrait from the ID photo the customer supplied, size 30×40", "50,000", "10/11"],
  ["1999-11-07", "a teacher, no name given (making teaching aids)", "Hand-paint 1 picture from the image the customer supplied, strokes drawn from the sample sheet the customer enclosed. Paper: the shop's own (papyrus). Customer collected at 21:00, complained &quot;the birds face the wrong way&quot; but took it anyway as he was in a hurry.", "150,000", "11/11 evening"],
  ["1999-11-08", "Mr Sang (stamp collector)", "Photograph 40 stamps, print 9×12", "20,000", "10/11"],
  ["1999-11-09", "Ms Duyên (Fine Arts Association)", "Hand-paint 2 decorative pictures from the sample the customer supplied, size 40×60", "80,000", "16/11"],
  ["1999-11-13", "walk-in customer", "Develop 1 roll of film, print 36 photos", "—", "14/11"],
  ["1999-11-15", "Ms Ngân (Nguyễn Du school)", "Print 1 roll of film, 24 photos 9×12", "—", "16/11"],
];

const soDatHang = {
  id: "so_dat_hang", stage: 2, kind: "Ledger", label: "Order book of Minh Quân Photo & Restoration",
  html: () => `
  <div class="doc doc--ledger">
    <div class="ledger-head"><div class="small caps">Minh Quân Photo & Restoration · 52 Lê Lợi</div>
      <h3>Order Book</h3>
      <div>November 1999 · page 14 · taken by the police on ${dt("1999-11-20", "20/11")}</div></div>
    <table class="ledger">
      <tr><th style="width:70px">Date</th><th>Customer</th><th>Job</th><th>Deposit</th><th>Delivered</th></tr>
      ${ORDERS.map((o) => `<tr><td>${dt(o[0], o[0].slice(8).replace(/^0/, "") + "/11")}</td><td style="font-size:17px">${o[1]}</td><td style="font-size:17px">${o[2]}</td><td>${o[3]}</td><td>${o[4]}</td></tr>`).join("")}
    </table>
    <p class="copy-note">The handwriting in the book is Quân's (the order of 7/11 was taken at the counter by his wife; he wrote it up that evening).</p>
  </div>`,
};

export const thuBao = {
  id: "thu_bao", stage: 4, kind: "Letter", label: "Letter from Mr Trịnh Gia Bảo to his nephew (taken from the photo shop)",
  html: () => `
  <div class="doc doc--hand" style="width:640px">
    <p class="right">Marseille, ${dt("1998-03-12", "12-3-1998")}</p>
    <p>My dear Quân,</p>
    <p>With this letter I am sending you ten sheets of papyrus that I bought at a market in Cairo on my holiday last year, the kind they paint in advance to sell to tourists; I picked out the ones that were still blank.
      You are in the restoration trade, so try printing a photograph or painting on them and see whether the ink takes.</p>
    <p>Grandfather's papyrus is still locked away in the safe. The Hoài Giang Museum has hinted that it would like to borrow it for display next year; I am still thinking it over. Professor Lâm says it is a page from a grain-wage ledger, not a charm.</p>
    <p>Business at the restaurant here has been very poor lately, and I do not know how I shall pay off the bank; I am thinking of selling off some of the old things. Look after your health, and be careful in your business.</p>
    <p class="hand-sign">Uncle Bảo</p>
  </div>`,
};

const khaiQuan = {
  id: "khai_quan", stage: 2, kind: "Statement", label: "Statement of Trịnh Minh Quân (photo shop)",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">RECORD OF STATEMENT</div>
    <div class="typed-sub">At 09:00, ${wd("1999-11-20", "Saturday")} ${dt("1999-11-20", "20-11-1999")}</div>
    <p>Person making the statement: <b>Trịnh Minh Quân</b>, aged ${age("quan", "1999-11-20", 34)}, owner of Minh Quân Photo & Restoration, 52 Lê Lợi; nephew of Mr Trịnh Gia Bảo.</p>
    <div class="qa">
      ${line("qu-1", "A: I do photography, restore old photographs, print invitation cards. I have never made anything on papyrus.")}
      ${line("qu-6", "A: There are only the two of us in the shop, my wife and me. My wife minds the counter and takes the money; she cannot draw.")}
      ${line("qu-2", "A: My shop sells photographic paper and drawing paper. If a customer orders a hand-painted piece, the shop supplies the paper, so the customer need not bring any.")}
      ${line("qu-7", "A: The hand-painting order of 7/11 was taken by my wife. She says the customer was a young man in glasses with a Northern accent, who called himself a teacher and paid cash.")}
      ${line("qu-8", "A: The customer enclosed a printed sheet with a dozen or so signs, a bird, a mouth, with Western letters beside them. I copied the strokes from that sheet.")}
      ${line("qu-3", "A: On opening night I received one catalogue. I left it at the shop, where anyone who came in could leaf through it.")}
      ${line("qu-4", "A: I cannot read Egyptian writing. Looking at it, all I see is a bird, a mouth, a few tally strokes.")}
      ${line("qu-5", "A: On the evening of 18/11 I went to hear Professor Lâm's talk, left before 8 o'clock and went to the café at the end of my street, where I sat until 10 o'clock.")}
    </div>
    ${statementSign("Quân", "Trịnh Minh Quân")}
  </div>`,
};

const khaiKieu = {
  id: "khai_kieu", stage: 2, kind: "Statement", label: "Statement of Võ Thị Kiều (reporter)",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">RECORD OF STATEMENT</div>
    <div class="typed-sub">At 14:00, ${wd("1999-11-20", "Saturday")} ${dt("1999-11-20", "20-11-1999")}</div>
    <p>Person making the statement: <b>Võ Thị Kiều</b>, aged ${age("kieu", "1999-11-20", 28)}, reporter, <i>Hoài Giang</i> newspaper.</p>
    <div class="qa">
      ${line("ki-1", "A: On opening night the lights glared on the glass of the case and I could not get a photograph. The photo of fragment P-07 in the Sunday paper is one I took of the catalogue I was given.")}
      ${line("ki-2", "A: The newspaper column is narrow and the picture had to be printed large for the signs to be legible. I handed the whole catalogue page to the layout desk; what they did with it I do not know.")}
      ${line("ki-3", "A: I did not know there was anything wrong with the photo in the catalogue until the museum issued its correction. Looking at it, I saw no difference.")}
      ${line("ki-4", "A: On the evening of 18/11 I went straight back to the newsroom to write up the talk, until 11 o'clock at night.")}
    </div>
    ${statementSign("Kiều", "Võ Thị Kiều")}
  </div>`,
};

const thiepMoi = {
  id: "thiep_moi", stage: 2, kind: "Invitation", label: "Invitation to the exhibition opening (taken from the photo shop)",
  html: () => `
  <div class="doc doc--brochure" style="width:620px;background:#f7f2e6;border:6px double #7a2a1d">
    <div class="brochure-num center">Hoài Giang Museum requests the pleasure of the company of</div>
    <p class="center" style="font-family:'Dancing Script';font-size:30px;margin:6px 0">Mr / Mrs ............................</p>
    <p class="center">at the opening ceremony of the exhibition</p>
    <div class="brochure-title center" style="font-size:26px">Papyrus and Sacred Signs: Ancient Egypt</div>
    <p class="center" style="margin:12px 0 6px">${papyrus({ mode: "mirror", width: 260, stain: false })}</p>
    <p class="center small">At 18:00, ${wd("1999-11-06", "Saturday")} ${dt("1999-11-06", "6-11-1999")}, at the museum, 4 Lê Thánh Tôn.</p>
    <p class="center small muted">Printed at Minh Quân Photo & Restoration. The shop still holds 6 spare cards.</p>
  </div>`,
};

export default [kyNhan, soDatHang, thiepMoi, khaiQuan, khaiKieu];
