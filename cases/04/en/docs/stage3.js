// Case 04, fourth folder (after question 3): Friday 12/11, the day the labels were changed — switchboard log,
// day guard's gate log, the label printer's receipt, statements of the conservator Hà and the translator Khoa.
// Fifth folder (after question 4): the night guard's statement, the archive loan slip, the post office receipt. Ending.
// Facts must agree with the case facts.js.
// ENGLISH VERSION of cases/04/docs/stage3.js (same ids, stages, CSS and helper calls; prose translated).
import { wd, age, at, dt, line, stamp } from "../../../../js/kit.js";
import { policeHead, statementSign, dailyMast } from "../../../../js/docparts.js";
import { thuBao } from "./stage2.js";

const tongDai = {
  id: "tong_dai", stage: 3, kind: "Ledger", label: "Museum switchboard log, 12/11",
  html: () => {
    const rows = [
      [null, "08:20", "Department of Culture calls the director", "ext. 07 (director)", "08:26"],
      [null, "09:41", "Nguyễn Du Lower Secondary School books a Class 6 group visit for this afternoon", "ext. 05 (admin)", "09:44"],
      [null, "11:02", "The Hoài Giang newspaper asks about opening hours", "ext. 05", "11:03"],
      ["call_start", "15:11", "Hoài Giang Printing Works for Ms Hà, urgently asking how many extra catalogues to print under a new order placed this morning. No extension in the conservation room: caller to ring back, Ms Lan goes down to Room 3 to fetch Ms Hà.", "—", "15:11"],
      [null, "15:16", "Printing Works rings back, Ms Hà takes the call.", "ext. 05 (admin)", "15:29"],
      [null, "15:30", "Ms Hà rings out to the Printing Works, reads back the print quantity.", "ext. 05", at("call_end", "15:31")],
      ["bao_call_12", "16:35", "Mr Bảo rings from the Sông Hoài Hotel, gets the director, asks whether the new labels have been changed yet", "ext. 07", "16:41"],
    ];
    return `
  <div class="doc doc--ledger">
    <div class="ledger-head"><div class="small caps">Hoài Giang Museum · Admin office (first floor)</div>
      <h3>Switchboard log</h3>
      <div>${wd("1999-11-12", "Friday")} ${dt("1999-11-12", "12/11/1999")} · switchboard on duty: Nguyễn Thị Lan</div></div>
    <table class="ledger">
      <tr><th style="width:70px">In</th><th>Caller, and for whom</th><th>Put through to</th><th style="width:80px">Ended</th></tr>
      ${rows.map((r) => `<tr><td>${r[0] ? at(r[0], r[1]) : r[1]}</td><td style="font-size:17px">${r[2]}</td><td style="font-size:17px">${r[3]}</td><td>${r[4]}</td></tr>`).join("")}
    </table>
    <p style="font-family:'Patrick Hand';font-size:19px;color:#23407a">I put the receiver down and walked down to Room 3 to fetch Ms Hà; she came up with me at once. Mr Tín (the photographer) came up at 15:21; she was on the telephone, so I signed for the envelope in her place, and at ${at("tin_signed", "15:23")} he went back down. When the call was over she stayed to work out the print quantity, rang the Printing Works to read the figure back to be sure, and went straight down the moment she put the receiver down. — Lan</p>
    <p class="copy-note">Photocopy, lent by the museum. Ext. 05 is in the admin office, first floor.</p>
  </div>`;
  },
};

const soCong = {
  id: "so_cong", stage: 3, kind: "Ledger", label: "Day guard's cloakroom and sign-in book, 12/11",
  html: () => {
    const rows = [
      [null, "08:05", "Mrs Nguyệt, Ms Hà, Ms Lan in for work.", ""],
      [null, "10:30", "Individual visitors: 14 people.", "9 bags left"],
      ["khoa_in_12", "14:50", "Mr Đỗ Văn Khoa (label translator) in.", "contributor, left nothing"],
      ["school_in", "15:00", "Nguyễn Du school group, Class 6, 32 pupils, 2 teachers. Mr Bình (guard) takes them round Room 1 and Room 2.", "34 satchels left"],
      ["tin_in", "15:20", "Mr Bùi Văn Tín (photographer) brings test prints of postcard photographs for Ms Hà, goes inside.", "1 large-format photo envelope, not left"],
      ["tin_out", "15:24", "Mr Tín comes down, leaves.", ""],
      ["school_out", "16:00", "School group out.", "all returned"],
      ["khoa_out_12", "16:20", "Mr Khoa out.", ""],
      [null, "17:05", "Doors closed.", ""],
    ];
    return `
  <div class="doc doc--ledger">
    <div class="ledger-head"><div class="small caps">Hoài Giang Museum · Cloakroom desk in the lobby</div>
      <h3>Day-shift sign-in book</h3>
      <div>${wd("1999-11-12", "Friday")} ${dt("1999-11-12", "12/11/1999")} · On duty: Lê Văn Bình</div></div>
    <table class="ledger">
      <tr><th style="width:70px">Time</th><th>Who</th><th>Items brought in / left</th></tr>
      ${rows.map((r) => `<tr><td>${r[0] ? at(r[0], r[1]) : r[1]}</td><td style="font-size:17px">${r[2]}</td><td style="font-size:17px">${r[3]}</td></tr>`).join("")}
    </table>
    <p class="copy-note">Photocopy, lent by the museum. Visitors must leave their bags; staff and contributors may carry theirs in. While Mr Bình was guiding the student group, the woman selling tickets, seated at the cloakroom desk, kept the book in his place.</p>
  </div>`;
  },
};

const phieuIn = {
  id: "phieu_in", stage: 3, kind: "Receipt", label: "Delivery note from the label printer",
  html: () => `
  <div class="doc doc--receipt">
    <div class="receipt-head"><div class="small caps">Silk-screen printing and plastic lamination workshop</div><h3>Tân Thành</h3><div class="small">12 Nguyễn Huệ, Hoài Giang</div></div>
    <p class="center"><b>DELIVERY NOTE</b> · No. 377</p>
    <div class="receipt-line"><span>Date:</span><span class="v carbon">${wd("1999-11-11", "Thursday")} ${dt("1999-11-11", "11/11/1999")}</span></div>
    <div class="receipt-line"><span>Customer:</span><span class="v carbon">Hoài Giang Museum (goods received by Mr Khoa)</span></div>
    <div class="receipt-line"><span>Goods:</span><span class="v carbon">06 caption labels, white card stock, 21 × 3.5 cm, laminated in rigid plastic</span></div>
    <div class="receipt-line"><span>Packing:</span><span class="v carbon">1 paper envelope</span></div>
    <div class="receipt-line"><span>Amount:</span><span class="v carbon">36,000 dong · museum to pay later</span></div>
    <p class="ink" style="margin-top:10px">Received in full. — Khoa</p>
  </div>`,
};

const khaiHa = {
  id: "khai_ha", stage: 3, kind: "Statement", label: "Statement of Lê Thu Hà (conservator)",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">RECORD OF STATEMENT</div>
    <div class="typed-sub">At 08:00 on ${wd("1999-11-22", "Monday")} ${dt("1999-11-22", "22-11-1999")}</div>
    <p>Person making the statement: <b>Lê Thu Hà</b>, aged ${age("ha", "1999-11-22", 31)}, conservator, Hoài Giang Museum.</p>
    <div class="qa">
      ${line("ha-1", "A: On the afternoon of 12/11 I opened case P-07 so that Khoa could change the labels; he had asked for three o’clock. He told me the old label had got the name of one of the workmen wrong and had to be reprinted.")}
      ${line("ha-2", "A: Midway there was a telephone call from the printing works. The old label was half removed, the glue still wet, and I could not close the case; Khoa said, “You go up, I’ll keep watch.” I told him to stand and wait at the door of the room. As soon as I had finished I came straight back down.")}
      ${line("ha-3", "A: In the whole run of the exhibition, that was the only time I left the case while it was open. The Printing Works wanted an answer urgently; I could not refuse to take the call.")}
      ${line("ha-4", "A: On 15/11 I changed the chart paper and the silica gel packs. The papyrus fragment was still as it should be.")}
      ${line("ha-5", "A: I keep the key to case P-07 on my own key ring, and I carry it on me at all times.")}
    </div>
    ${statementSign("Hà", "Lê Thu Hà")}
  </div>`,
};

const khaiKhoa = {
  id: "khai_khoa", stage: 3, kind: "Statement", label: "Statement of Đỗ Văn Khoa (label translator)",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">RECORD OF STATEMENT</div>
    <div class="typed-sub">At 10:00 on ${wd("1999-11-22", "Monday")} ${dt("1999-11-22", "22-11-1999")}</div>
    <p>Person making the statement: <b>Đỗ Văn Khoa</b>, aged ${age("khoa", "1999-11-22", 26)}, postgraduate student of history in Hà Nội, pupil of Prof. Lâm; since October lodging with Mrs Tư, the sticky-rice seller, on Trưng Trắc Street, near Đông Market, Hoài Giang.</p>
    <div class="qa">
      ${line("kh-1", "A: Professor Lâm assigned me to translate the labels and to compile the sign chart handed out to visitors. I can read hieroglyphs.")}
      ${line("kh-2", "A: On the afternoon of 12/11 I brought the new labels in a plastic tube so the edges would not curl. Ms Hà went to answer the telephone; I stood and waited, and did not touch the exhibit.")}
      ${line("kh-3", "A: On Saturday 13/11 I stayed in my lodgings translating a paper for the professor all day, and did not go anywhere.")}
      ${line("kh-4", "A: On the evening of 18/11 I projected the slides for the professor’s talk; afterwards I borrowed the key to put the projector away in the Room 3 store room, locked the store room, pulled the door of Room 3 to and returned the key; Mr Lực said to leave it and he would lock it when he went on his round. While I was in the store room I heard someone’s footsteps pass through Room 3; I took it to be the guard.")}
      ${line("kh-6", "A: This year I was meant to go to France to study further; the scholarship was cut in September.")}
      ${line("kh-5", "A: I have never been to the Minh Quân photo shop.")}
    </div>
    ${statementSign("Khoa", "Đỗ Văn Khoa")}
  </div>`,
};

const khaiTin = {
  id: "khai_tin", stage: 3, kind: "Statement", label: "Statement of Bùi Văn Tín (photographer)",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">RECORD OF STATEMENT</div>
    <div class="typed-sub">At 14:00 on ${wd("1999-11-22", "Monday")} ${dt("1999-11-22", "22-11-1999")}</div>
    <p>Person making the statement: <b>Bùi Văn Tín</b>, freelance photographer, takes and prints photographs for the Hoài Giang Museum.</p>
    <div class="qa">
      ${line("ti-1", "A: On the morning of 9/11 I re-photographed fragment P-07 right at the case, for the second printing of the catalogue. Ms Hà opened the case and stood beside me the whole time.")}
      ${line("ti-2", "A: On the afternoon of 12/11 I brought test prints of the postcard photographs to Ms Hà, in a 30 × 40 envelope, twelve prints. I am a familiar face at the museum, so nobody made me leave it at the desk.")}
      ${line("ti-3", "A: I went straight up to the admin office; Ms Hà was on the telephone, so Ms Lan signed for it in her place. Then I went straight back, without stopping at any exhibition room.")}
      ${line("ti-4", "A: I know Mr Khoa by sight: a Hà Nội man, short-sighted, wears glasses; we met on opening day. I did not see him that afternoon.")}
    </div>
    ${statementSign("Tín", "Bùi Văn Tín")}
  </div>`,
};

const khaiLuc = {
  id: "khai_luc", stage: 4, kind: "Statement", label: "Statement of Tạ Văn Lực (night guard)",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">RECORD OF STATEMENT</div>
    <div class="typed-sub">At 15:00 on ${wd("1999-11-22", "Monday")} ${dt("1999-11-22", "22-11-1999")}</div>
    <p>Person making the statement: <b>Tạ Văn Lực</b>, aged ${age("luc", "1999-11-22", 56)}, night-shift guard, Hoài Giang Museum.</p>
    <div class="qa">
      ${line("lu-1", "A: The Room 3 key ring has three keys: the door of Room 3, the door of the Room 3 store room, the electrical cabinet.")}
      ${line("lu-2", "A: The spare keys to the display cases are kept in a sealed iron box in the director’s office upstairs. The upper floor is locked from 17:00. On the morning of 19/11 the police opened it to look: the seal was intact, the keys all there.")}
      ${line("lu-3", "A: On the evening of 18/11 a woman member of staff came back for her raincoat. The lobby lights had been partly switched off, she had her hat on, and I could not see her face clearly; by the voice it was Ms Hà or Ms Lan, I could not say for certain which. At that moment the door of Room 3 was open because Mr Khoa was putting the projector away in the store room. She was inside for over twenty minutes.")}
      ${line("lu-4", "A: I patrol with a torch, standing at the door of each room and shining it in. With the case lights off, it is hard to see even whether the stand is empty or not.")}
    </div>
    ${statementSign("Lực", "Tạ Văn Lực")}
  </div>`,
};

const phieuMuon = {
  id: "phieu_muon", stage: 4, kind: "Receipt", label: "Museum archive document loan slip",
  html: () => `
  <div class="doc doc--receipt">
    <div class="receipt-head"><div class="small caps">Hoài Giang Museum</div><h3>Archive</h3><div class="small">Document loan slip · kept at the archive</div></div>
    <div class="receipt-line"><span>Date:</span><span class="v carbon">${wd("1999-11-16", "Tuesday")} ${dt("1999-11-16", "16/11/1999")}</span></div>
    <div class="receipt-line"><span>Borrower:</span><span class="v carbon">Lê Thu Hà (conservation)</span></div>
    <div class="receipt-line"><span>Documents:</span><span class="v carbon">Condition report on P-07 (4/11) · negatives of the P-07 registration photograph · large magnifying glass</span></div>
    <div class="receipt-line"><span>Reason:</span><span class="v carbon">preparation for the television station’s recording session</span></div>
    <div class="receipt-line"><span>Taken out at:</span><span class="v carbon">${at("archive_out", "08:10")}</span></div>
    <div class="receipt-line"><span>Returned at:</span><span class="v carbon">${at("archive_back", "16:30")}</span></div>
    <p class="ink" style="margin-top:10px">Asked which day the recording was, Ms Hà said Mr Bảo had talked of inviting the station since opening night, no date yet. All returned. — Châu, archive keeper</p>
  </div>`,
};

const buuPham = {
  id: "buu_pham", stage: 4, kind: "Receipt", label: "EMS parcel receipt (supplied by Hoài Giang post office)",
  html: () => `
  <div class="doc doc--receipt" style="width:600px">
    <div class="receipt-head"><div class="small caps">Provincial Post Office · Hoài Giang Branch</div><h3>International EMS receipt</h3><div class="small">Copy 2 · kept at the post office branch</div></div>
    <div class="receipt-line"><span>Date and time sent:</span><span class="v carbon">${at("ems_sent", "07:40")} ${wd("1999-11-13", "Saturday")} ${dt("1999-11-13", "13/11/1999")}</span></div>
    <div class="receipt-line"><span>Sender:</span><span class="v carbon">Lê Minh · 26 Trưng Trắc, Hoài Giang</span></div>
    <div class="receipt-line"><span>Recipient:</span><span class="v carbon">Mr. P. Srisawat · Charoen Krung Rd., Bangkok, Thailand</span></div>
    <div class="receipt-line"><span>Recipient’s tel.:</span><span class="v carbon">66-2-234 5170</span></div>
    <div class="receipt-line"><span>Contents declared:</span><span class="v carbon">painting on paper, souvenir gift, no commercial value</span></div>
    <div class="receipt-line"><span>Packaging:</span><span class="v carbon">round plastic tube, 60 cm long</span></div>
    <div class="receipt-line"><span>Weight:</span><span class="v carbon">0.4 kg · postage 312,000 dong</span></div>
  </div>`,
};

/** Outgoing calls booked by the Sông Hoài hotel switchboard: [ISO date, event key or null, time, room, number and place as the operator wrote it, minutes]. */
const HOTEL_CALLS = [
  ["1999-11-10", null, "08:12", "112", "Hà Nội · 04-8 254 113", "6"],
  ["1999-11-10", "bao_call_insurer", "09:30", "204", "82 660 (Phương Nam Insurance)", "12"],
  ["1999-11-11", null, "19:40", "305", "Sài Gòn · 08-8 299 041", "3"],
  ["1999-11-12", null, "08:50", "204", "82 251 (Hoài Giang Printing Works)", "5"],
  ["1999-11-12", null, "11:15", "305", "82 133 (coach station)", "1"],
  ["1999-11-12", "bao_call_12", "16:35", "204", "82 417 (Hoài Giang Museum)", "6"],
  ["1999-11-12", null, "21:05", "112", "Đà Nẵng · 0511-822 960", "2"],
  ["1999-11-13", "bao_call_bkk", "08:05", "204", "Thailand · 66-2-234 5170", "3"],
  ["1999-11-14", null, "09:50", "112", "82 417 (Hoài Giang Museum)", "2"],
  ["1999-11-15", null, "20:30", "204", "France · 33-4-91 54 22 08", "9"],
  ["1999-11-16", null, "07:45", "305", "Huế · 054-823 117", "4"],
  ["1999-11-17", "bao_call_tv", "14:10", "204", "82 345 (Provincial Radio and TV Station)", "7"],
];

const soKhachSan = {
  id: "so_khach_san", stage: 4, kind: "Ledger", label: "Sông Hoài Hotel switchboard outgoing call log, 10–17/11",
  html: () => `
  <div class="doc doc--ledger">
    <div class="ledger-head"><div class="small caps">Sông Hoài Hotel · 9 Bạch Đằng · Switchboard</div>
      <h3>Outgoing call log</h3>
      <div>November 1999 · page 6 · collected by the police on ${dt("1999-11-21", "21/11")}</div></div>
    <table class="ledger">
      <tr><th style="width:70px">Date</th><th style="width:60px">Time</th><th style="width:60px">Room</th><th>Number called, destination (as written by the switchboard)</th><th style="width:60px">Min.</th></tr>
      ${HOTEL_CALLS.map((c) => `<tr><td>${dt(c[0], c[0].slice(8).replace(/^0/, "") + "/11")}</td><td>${c[1] ? at(c[1], c[2]) : c[2]}</td><td>${c[3]}</td><td style="font-size:17px">${c[4]}</td><td>${c[5]}</td></tr>`).join("")}
    </table>
    <p class="copy-note">Photocopy. The log records room numbers only, not guests’ names; call charges are added to the room bill.</p>
  </div>`,
};

const phuLuc = {
  id: "phu_luc", stage: 4, kind: "Contract", label: "Contract amendment, insurance of exhibit P-07 (company file)",
  html: () => `
  <div class="doc doc--typed">
    <div class="typed-title">AMENDMENT No. 2</div>
    <div class="typed-sub">to exhibition-object insurance contract No. 47/99 · Phương Nam Insurance, Hoài Giang branch</div>
    <p>At the request of Mr <b>Trịnh Gia Bảo</b>, owner of the exhibit (telephoned on the morning of ${wd("1999-11-10", "Wednesday")} ${dt("1999-11-10", "10/11/1999")}, application submitted that afternoon),
      the sum insured on exhibit <b>P-07</b> is raised from <b>8,000</b> to <b>30,000 US dollars</b>, on the strength of the essay by Prof. Lâm Quang Tịnh in the exhibition catalogue
      (“the only page of that village’s wage ledger still outside Egypt”).</p>
    <p>The additional premium was paid by Mr Bảo at once, in cash. Effective from ${dt("1999-11-11", "11/11/1999")} until the end of the day the exhibit is returned to its owner.</p>
    <p>Also at Mr Bảo’s request, it is added: the company shall also pay compensation if the exhibit is <b>swapped</b> while in the museum’s keeping (the museum being responsible for its safekeeping).</p>
    <p class="small">The company’s standard pre-printed clause: no compensation is payable if the owner of the exhibit has acted fraudulently or taken part in the loss.</p>
    <p>All other terms of the contract remain unchanged.</p>
    <div class="typed-sign"><div>OWNER OF THE EXHIBIT<div class="sign">G. Bảo</div>Trịnh Gia Bảo</div><div>HEAD OF LOSS ASSESSMENT<div class="sign">Thịnh</div>Lý Quốc Thịnh</div></div>
  </div>`,
};

const ketLuan = {
  id: "ket_luan", stage: 5, kind: "Letter", label: "Final assessment report",
  html: () => `
  <div class="doc doc--weekly">
    <div class="weekly-head"><div class="weekly-logo">PN</div><div class="weekly-name">Phương Nam Insurance<small>Hoài Giang Branch · Loss Assessment Department</small></div></div>
    <p class="right"><i>Hoài Giang, ${wd("1999-12-03", "Friday")} ${dt("1999-12-03", "3/12/1999")}</i></p>
    <p>To the loss assessor,</p>
    <p>Thanks to your report, the police have traced the plastic tube posted from Hoài Giang on 13/11. Thai customs suspected it held an antiquity and have kept it in their warehouse since 16/11, pending papers of provenance from the addressee; the notice reached him on 22/11, and he did not dare come forward to collect it.
      Inside the tube was the genuine papyrus fragment P-07. Professor Lâm has examined it again: it is the fragment he photographed in 1971, the wormhole still in the upper right corner, with a single new break running across the name of Iuy, the painter: the mark of its journey in the plastic tube.
      Mr Bảo admits nothing. What follows the police have pieced together from the statements of Khoa, Ms Hà and Quân, of Mr Mến at the Printing Works, and from the letters found in Mr Bảo’s suitcase.</p>
    <p><b>Mr Trịnh Gia Bảo</b> set the whole thing up. His restaurant in Marseille owed money to the bank (on the evening of 15/11 he was still telephoning Marseille to beg for more time), and the papyrus his grandfather had bought in Luxor had no papers and could not be sold openly. The letter Khoa wrote to him (found in Mr Bảo’s suitcase) and his reply (found at Khoa’s lodgings) show that he had been thinking of selling it for a long time; Khoa told him about the scholarship, and Mr Bảo had found his pair of hands.
      He meant to be paid twice: once by an antiques dealer he knew in Bangkok, for the genuine fragment, and once by us, 30,000 dollars. Steal it outright, and the police would be watching the border crossings that same day; a forgery bought the genuine fragment a quiet week in which to leave the country. Then the forgery had to come to light while the museum still held it, and he could not be the one to find it: an owner who cries “fake” the moment after raising his insurance draws everyone’s suspicion. It had to be Professor Lâm, in front of the cameras, with the whole province as witness.
      That is why he raised the insurance on 10/11, talked of inviting the television station from opening night onwards, and only actually rang the station on the afternoon of 17/11, once the post office had reported the tube “arrived in Bangkok” on 16/11. On the morning of 12/11 he ordered fifty catalogues from the Printing Works “to take back to France as gifts”, and told the works that if the museum wanted extra copies, they should ring Ms Hà after three in the afternoon to settle the number. He told Khoa: after three, a telephone call will take Ms Hà upstairs.
      He gave Khoa no photograph, so that the forgery would never pass through his own hands. Only one thing he could not avoid: in all Hoài Giang, the only shop with blank papyrus was his nephew’s, ten sheets he had sent himself in 1998; he gambled that the boy would keep quiet. If Khoa were caught and named him, it would be no more than a thief’s word against the owner of the exhibit, with not one line on paper.
      On the morning of 19/11, hearing that the case was empty, he called Khoa out to a tea stall and asked him: “Why on earth did you take the other sheet as well?” (Khoa’s words). At noon he filed his claim all the same. He did not know that since 16/11 the tube had been lying in a Thai customs warehouse; and the one word he had asked to add, “swapped”, turned out to have left behind nothing but his own signature, together with the hotel switchboard’s outgoing call log.</p>
    <p><b>Đỗ Văn Khoa</b> swapped the genuine fragment on the afternoon of 12/11. In September the scholarship to France that Professor Lâm had obtained for him was cut when the fund closed; the professor appealed three times, without success. From October, while translating the labels, Khoa wrote to Mr Bảo asking about the papyrus and telling him about the scholarship; on 5/11, the day the exhibit went into its case, Mr Bảo made his offer: a third of the sale, a place to live, and sponsorship papers to come to Marseille.
      Early on the morning of 7/11 Khoa took the catalogue page to the Minh Quân shop, calling himself a teacher; the picture was small and blurred, so he enclosed a sign chart to make the painter draw each stroke clearly. At noon that day, hearing his professor say the photograph had been printed in reverse, he thought it through again: copied as a complete mirror image, the writing would still read Khonsu, and only the wormhole would change sides; behind glass, under the yellow case lamp, nobody would bring out the condition report to compare, and Professor Lâm, whose eyesight was poor, read the signs only with the case open and a magnifying glass in his hand. Going back to change the order meant showing his face once more; and visitors only looked through the glass, none of them checking bird by bird against a sign chart. He let the order stand.</p>
    <p>On installation day, 5/11, he deliberately wrote one letter wrong in the name Hori on the first label, so that he could later “discover” the mistake and have a pretext for opening the case; he arranged with Ms Hà to come at three o’clock on the Friday afternoon. On the evening of 11/11, collecting the order, he saw that the birds faced the wrong way; but the new labels were already printed, the appointment was his only pretext, and Mr Bảo would not let him put it off. Only later did he understand why: Mr Bảo needed a forgery that would be seen through.
      On the afternoon of 12/11, with the old label half off and the glue still wet, he said to Ms Hà: “You go up, I’ll keep watch.” On the morning of 13/11, as “Lê Minh”, he posted the plastic tube to Bangkok, giving his lodgings as the return address so that if customs sent it back it would come into his own hands, and then called in at the Sông Hoài Hotel to tell Mr Bảo.
      He had heard the talk of inviting the station since opening night; Mr Bảo brushed it aside: “The station will only film through the glass. Who would let them open the case?” On the afternoon of 17/11, reading the notice in the lobby and seeing in black and white that case P-07 would be opened, he understood that he had been sold.
      The sample sheet he enclosed with the order was the sign chart he had compiled himself. It was that sheet of paper that beat him: it taught the painter to turn the birds to face left, and it taught a pupil in Class 8 how to read out the truth.</p>
    <p><b>Trịnh Minh Quân</b> recognised his uncle’s papyrus at once. The customer said it was a replica for teaching; it was his uncle’s piece, and he told himself that his uncle must already know. On the evening of 11/11 he delivered the order himself, recognised the label translator who had sat beside him on opening night, and was all the more sure that this was his uncle’s business. It was Mr Bảo himself who had sent Khoa to 52 Lê Lợi: “My nephew has papyrus. He won’t ask questions.”
      Unable to read the signs, he copied the order of the symbols from the reversed catalogue page but drew each bird from the sample sheet, facing left. On the afternoon of 16/11, printing Ms Ngân’s film, he saw his own painting lying behind the glass of case P-07 and understood he had been used. He rang his uncle; Mr Bảo said: “Stay out of it. Your uncle will see to it.” He kept quiet, and then lied to the police.</p>
    <p><b>Ms Lê Thu Hà</b> opened the case at 20:10 on the evening of 18/11, with her own key. On the afternoon of 12/11 she had locked the case in a hurry without looking closely; on 13 and 14/11 the case was not opened. On the morning of 15/11, wiping the glass, she gave it only a glance; that afternoon, changing the silica gel packs, she had to lift the mount up close to the lamp, and only then did she see that the wormhole was on the left.
      The next day she borrowed the condition report, the negatives and the magnifying glass, giving “preparing for the recording” as her pretext, since Mr Bảo had been talking of inviting the station since opening night; once she had compared them, she knew that what lay in the case was a forgery. She knew it could only be Khoa, but to accuse him was to accuse herself: it was she who had left the case open on the afternoon of 12/11, and a museum officer who loses an exhibit loses her job, perhaps more. She had an elderly mother to care for.
      On the afternoon of 17/11 the station accepted. That evening she cycled to the gate of the town police station, stood there for a while, and went home. The following evening she did the opposite.</p>
    <p>Her supplementary statement: “I knew that if the case had not been forced, they would ask about my key. But with the case empty, nobody would know it had been swapped, still less ask about the afternoon of 12/11; whereas with the forgery lying there, by nine in the morning the whole province would know I had left the case open. With the case empty they would suspect me, but suspicion still has to find its proof; with the forgery lying there, the forgery is the proof. The door of Room 3 is locked from five o’clock and the key is with the guard: that evening, with Khoa holding the key, was the only time that door would be open before nine the next morning. I also told myself: if it was lost the insurance would pay, the owner would lose nothing, and only I would lose everything. I knew I was letting him carry it for me. I am not proud of it.”
      On the evening of 18/11 she had gone as far as the gate but not home; standing in the corner of the yard, she saw the light on in Room 3, knew that Khoa was putting the projector away, and only then went back in “for her raincoat”. She came in just as he had stepped back into the store room; she took the forgery, her hands shaking so that she failed to close the case door properly, then stood without a sound in the conservation room until he had gone. She burned the forgery in her kitchen stove.
      As for the chart running three and a half hours fast: on the night of 14/11 she had sat up with her mother, who had a fever; on the morning of 15/11, as she always did before handling an exhibit, she took off her wristwatch and put on gloves, and in that windowless room she glanced at the wall clock, saw 12:40, and turned the drum to that mark without a second thought. The clock had stopped over the weekend.</p>
    <p>Khoa stated one thing more. On the evening of 18/11 he had borrowed the Room 3 key not only to put the projector away: the key to the case was with Ms Hà, and he hoped the old glass door might be prised open with a craft knife. Standing in front of the case, he lost his nerve and withdrew into the store room. From there he heard a key go into case P-07, and the glass door open and close. He thought Mr Bảo had sent someone. Two people, a single wall between them, both holding their breath over the same false sheet of paper.</p>
    <p>Khoa and Mr Bảo have been charged; Mr Bảo is being held in Hoài Giang. In the remand centre Khoa asked only one question: “Is it broken?” When he had heard the answer, he asked nothing more.
      When Khoa had confessed everything, Ms Hà asked to fill in, in her own hand, the last empty line of the P-07 case log: “18/11 · 20:10 · Hà · not locked”. She has been disciplined for her false statement and for destroying evidence; Mrs Nguyệt has kept her on all the same: “The whole town walked past that case for nearly a week. The only grown-up who saw it was a forgery was you.” Quân was given an administrative fine and then allowed to go home. Ms Lan and Mr Tín had no part in it: one had only gone to fetch someone to the telephone, the other had only brought his photographs at the wrong moment.</p>
    <p>After seeing the outgoing call log, Mr Bảo said only: “My grandfather went to Egypt in the labour corps and gave three months’ pay for that sheet of paper. I only traded it back.” Asked about his pupil, Professor Lâm was silent for a while, then said: “Those three workmen laboured all their lives to have their names written on one line of a wage ledger. I taught him to read their names; I forgot to teach him that they were people, not merchandise.” And of Mr Bảo he said only: “In 1971 he opened the safe and showed it to me with both hands.”</p>
    <p>The genuine fragment has been recovered, so there is no loss; and even if there were, the pre-printed fraud clause in Amendment No. 2 would exclude Mr Bảo. The company will not pay, and has passed Mr Bảo’s file to the police.
      I signed that amendment myself, after a single telephone call; I am sending it to you last of all, because the man who signed it was me. On 10/11 I did not stop to ask why an owner should want that one word, “swapped”, written in. From now on, every amendment in this department that raises a sum insured must carry two signatures. The second, if you agree, will be yours.</p>
    <p>The museum invites you to watch the reading of the papyrus fragment on television.</p>
    <p class="right" style="margin-top:18px">Head of Loss Assessment<br><span class="sign">Thịnh</span><br><b>Lý Quốc Thịnh</b></p>
  </div>`,
};

const baoSau = {
  id: "bao_sau", stage: 5, kind: "Newspaper", label: "Hoài Giang newspaper, 12/12 – culture page",
  html: () => `
  <div class="doc doc--news">
    ${dailyMast("1999-12-12", "Sunday", "Year of the Cat", "2.192", "XXIV")}
    <div class="news-kicker">Culture</div>
    <h1 class="news-head">Three Workmen Return to Hoài Giang</h1>
    <div class="news-by">Võ Thị Kiều</div>
    <div class="news-cols" style="columns:2">
      <p class="dropcap">Yesterday morning, before the cameras of the Provincial Radio and Television Station, Ms Lê Thu Hà opened case P-07; this time her hands did not tremble. Professor Lâm Quang Tịnh did not take up the magnifying glass at once. He handed it to Thảo of Class 8A at Nguyễn Du school: “This time, you read first.”</p>
      <p>On 14/11, following the sign chart, Thảo read each line from the side the bird faced; the second line came out as “W-S-N-KH”, and her teacher told her she had read it wrong. Hearing of the loss, Thảo insisted that Ms Ngân take the class photograph to the police: “Miss, I really did read a different name that day.”
        Yesterday, Thảo bent over the magnifying glass: “The quail chick faces left, so you read from the left: Khonsu. Then Iuy. Then Hori.” “You have read it correctly,” the professor said. “This time the fragment is correct too.”</p>
      <p>Across the name Iuy there is a new break; the professor would not let it be glued: “Leave it as it is. It is part of this story too.” The label in the case is still the one replaced on the afternoon of 12/11; he read it again and altered not a word: “The label, at least, he translated correctly.”</p>
      <p>With the investigating authority’s consent, the museum has extended the exhibition until the end of December. Class 8A asked to visit a second time; this time the pupils are bringing their sign charts and will read for themselves. The photo shop at 52 Lê Lợi has hung a new sign: “Restoration of old photographs · No drawing from samples”.</p>
      <p>In the conservation room the wall clock has been wound, and its hands keep the right time. The papyrus fragment will stay at the museum until the court tries the case of Mr Trịnh Gia Bảo. “Those three workmen have travelled too far; let them rest here a while,” Professor Lâm said.</p>
      <p>When the recording was over, Ms Hà fastened the lock on case P-07; this time the click could be heard across the whole room.</p>
    </div>
  </div>`,
};

export const stage3 = [tongDai, soCong, phieuIn, khaiHa, khaiKhoa, khaiTin];
export const stage4 = [khaiLuc, phieuMuon, buuPham, soKhachSan, phuLuc, thuBao];
export const ending = [ketLuan, baoSau];
