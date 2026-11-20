// Case 04, first folder (ENGLISH version): what the insurance assessor receives on Friday 19/11/1999.
// Facts must agree with the case facts.js. Times on the humidity chart are 3 h 30 min ahead of true time (facts.CHART_AHEAD_MIN).
// Translation of ../../docs/stage0.js.
import { wd, at, dt, stamp } from "../../../../js/kit.js";
import { policeHead, officeHead } from "../../../../js/docparts.js";
import { humidityChart, floorPlan } from "../../art.js";

const giaoViec = {
  id: "giao_viec", stage: 0, kind: "Letter", label: "Assignment letter from the head of loss assessment",
  html: () => `
  <div class="doc doc--weekly">
    <div class="weekly-head">
      <div class="weekly-logo">PN</div>
      <div class="weekly-name">Phương Nam Insurance<small>Hoài Giang Branch · 18 Trần Phú · Tel. 82 660</small></div>
    </div>
    <p class="right"><i>Hoài Giang, ${wd("1999-11-19", "Friday")} ${dt("1999-11-19", "19/11/1999")}</i></p>
    <p>To the loss assessor,</p>
    <p>This morning the Hoài Giang Museum reported the loss of exhibit <b>P-07</b> from the exhibition "Papyrus and Sacred Signs: Ancient Egypt": a papyrus fragment about the size of two hands,
      lent by Mr <b>Trịnh Gia Bảo</b> (an overseas Vietnamese living in Marseille). We insure this fragment for <b>US$30,000</b> until the day it is returned to its owner.
      At noon today Mr Bảo filed a claim for compensation.</p>
    <p>The original contract states clearly (the file also contains a contract amendment, which I will send you later) that the company pays only if <b>the very papyrus fragment that was appraised when it was received into the museum</b> has been lost. If what was lost is not that fragment, or if the genuine
      fragment is still somewhere, the company does not pay and must report to the police.</p>
    <p>The display case lock was not forced and none of the museum doors had been broken into. Officer Phát of the town police has let us copy the report and the records (<u>not to be handed to anyone</u>).
      The museum has lent us the case log, a copy of the chart paper from the humidity recorder placed in the case, the notice posted in the lobby, and the instruction page for the machine.</p>
    <p>I need an answer, backed by documents, to each question.</p>
    <p class="right" style="margin-top:18px">Head of Loss Assessment<br><span class="sign">Thịnh</span><br><b>Lý Quốc Thịnh</b></p>
    ${stamp("Phương Nam<br>Insurance<br>★<br>Hoài Giang", "left:60px;bottom:40px", "blue")}
  </div>`,
};

const bienBan = {
  id: "bien_ban", stage: 0, kind: "Report", label: "Scene examination report",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">SCENE EXAMINATION REPORT</div>
    <div class="typed-sub">From ${at("police_in", "7:30")} to 8:40, ${wd("1999-11-19", "Friday")} ${dt("1999-11-19", "19-11-1999")}</div>
    <p>Location: Hoài Giang Museum, Room 3 (the "Life in the Workmen's Village" area), display case no. P-07.</p>
    <p>Present: Mrs Phan Thị Nguyệt, museum director; Mr Tạ Văn Lực, night guard of 18/11; Mrs Út Mai, cleaner.</p>
    <p>1. At ${at("case_found", "7:05")}, Mrs Út Mai switched on the lights of the cases in Room 3 and found the mount in case P-07 empty, and informed the guard.
      The museum states that at night the lights inside the display cases are off; the guard patrols by torch, standing at the doors of the rooms.</p>
    <p>2. Case P-07: the glass door is pulled to but not closed, leaving a gap about a finger wide; the lock bolt is not engaged. The lock, hinges and glass show no marks of forcing. Still in the case: cloth-covered mount, caption label, two silica gel packs,
      and a thermo-hygrograph, model TH-7, still running. The papyrus fragment is gone.</p>
    <p>3. The recorder drum was removed and the chart paper taken as an exhibit. No new paper was fitted. Spare chart paper is kept in the conservation room next to Room 3 (a room with no window); the wall clock of the conservation room has stopped, hands at 12:40.</p>
    <p>4. According to Mrs Nguyệt: case P-07 has two keys. One is held by Ms Lê Thu Hà, the conservator. The other is a spare, kept by the museum.</p>
    <p>5. The entrances and windows of the museum show no marks of forcing. The night guard states that he locked the main door at 20:26 and did not open it until 6:50.</p>
    <div class="typed-sign"><div>FOR THE MUSEUM<div class="sign">Nguyệt</div>Phan Thị Nguyệt</div>
      <div>EXAMINING OFFICER<div class="sign">Phát</div>Huỳnh Tấn Phát</div></div>
  </div>`,
};

const bieuDo = {
  id: "bieu_do", stage: 0, kind: "Chart", label: "Humidity chart paper from case P-07 (exhibit)",
  html: () => `
  <div class="doc doc--map" style="width:1400px">
    ${humidityChart()}
    <p class="copy-note">Exhibit taken on the morning of 19-11-1999. Pen trace in violet ink. The sheet has been photographed at full size.</p>
  </div>`,
};

const huongDan = {
  id: "huong_dan", stage: 0, kind: "Document", label: "Instruction page for the TH-7 thermo-hygrograph",
  html: () => `
  <div class="doc doc--brochure">
    <div class="brochure-num">Operating instructions · Vietnamese translation · page 3</div>
    <div class="brochure-title">TH-7 Thermo-Hygrograph</div>
    <p style="margin-top:12px"><b>Rotating drum.</b> The paper drum, turned by a wound clockwork movement, makes one revolution per week. The weekly chart paper is pre-printed with seven day columns, from Monday at 0:00 to Sunday at 24:00.
      Each small square stands for 30 minutes. The drum clock gains or loses no more than 15 minutes per week.</p>
    <p><b>Changing the paper.</b> Lift the pen arm off the paper. Remove the drum, wrap on the new sheet, clip the edge. Refit the drum and turn it by hand until the pen tip points to the correct day and time at that moment. Lower the pen arm.</p>
    <p><b>Placing in a sealed case.</b> In a closed display case, the humidity changes very slowly and stays almost still. When the case door is opened, the humidity inside the case changes quickly to follow the humidity of the room.
      When the case is closed again, the humidity slowly returns to its former level over a few hours, thanks to the silica gel packs.</p>
    <p><b>Keeping the case stable.</b> Papyrus should be kept at 45–55% humidity. Replace the silica gel packs when the humidity inside the case rises above 55%.</p>
    <p class="small muted" style="margin-top:14px">Translation supplied with the machine, provided to the museum by the equipment company in 1996.</p>
  </div>`,
};

/** Case log rows: [ISO date, weekday, open, close, opened by, work, notes]. */
const OPENINGS = [
  ["1999-11-05", "Friday", ["install_start", "14:00"], ["install_end", "16:10"], "Hà", "Fitted fragment P-07 on the mount, placed the humidity recorder, fitted weekly paper", "Mr Bảo and the label translator present"],
  ["1999-11-08", "Monday", [null, "morning"], [null, ""], "Hà", "Changed the weekly chart paper", "museum closed"],
  ["1999-11-09", "Tuesday", ["reshoot_open", "08:40"], ["reshoot_close", "09:20"], "Hà", "Re-photographed fragment P-07 for the second printing of the catalogue", "photographer Bùi Văn Tín"],
  ["1999-11-10", "Wednesday", [null, "09:00"], [null, "09:15"], "Hà", "Checked the mount (fragment sagging slightly)", "label translator dropped by to look"],
  ["1999-11-12", "Friday", ["label_open", "15:05"], ["label_close", "15:40"], "Hà", "Replaced the caption label according to the new translation", "label translator worked alongside"],
  ["1999-11-15", "Monday", [null, "morning"], [null, ""], "Hà", "Changed the weekly chart paper", "museum closed"],
  ["1999-11-15", "Monday", ["wipe_open", "10:30"], ["wipe_close", "10:40"], "Hà", "Wiped the inside of the case glass (dust)", ""],
  ["1999-11-15", "Monday", ["silica_open", "14:00"], ["silica_close", "14:20"], "Hà", "Replaced the two silica gel packs (routine)", ""],
];

const soTu = {
  id: "so_tu", stage: 0, kind: "Ledger", label: "Case log for display case P-07",
  html: () => {
    const t = ([ev, text]) => ev ? at(ev, text) : text;
    return `
  <div class="doc doc--ledger">
    <div class="ledger-head"><div class="small caps">Hoài Giang Museum · Conservation room</div>
      <h3>Case log, display case P-07</h3>
      <div>Exhibit: papyrus fragment P-07 (lent by Mr Trịnh Gia Bảo) · Whoever opens the case must write it in this book</div></div>
    <table class="ledger">
      <tr><th>Date</th><th>Opened</th><th>Closed</th><th>Opened by</th><th>Work</th><th>Notes</th></tr>
      ${OPENINGS.map((r) => `<tr><td>${wd(r[0], r[1])} ${dt(r[0], r[0].slice(8).replace(/^0/, "") + "/11")}</td><td>${t(r[2])}</td><td>${t(r[3])}</td><td>${r[4]}</td><td style="font-size:16px">${r[5]}</td><td style="font-size:16px">${r[6]}</td></tr>`).join("")}
      <tr class="blank"><td>.</td><td></td><td></td><td></td><td></td><td></td></tr>
    </table>
    <p class="copy-note">Copy of the original book, lent by the museum. Times are as read from the wristwatch of the person opening the case.</p>
  </div>`;
  },
};

/** Night log rows: [event key or null, time text, entry]. */
const NIGHT = [
  [null, "17:00", "Took over from Bình (day shift). All room key rings handed over."],
  [null, "17:05", "Closed the exhibition, switched off the case lights in the rooms."],
  [null, "18:10", "Opened the lecture hall for the talk. Visitors came in by the main door, going only to the lobby and the lecture hall."],
  [null, "18:15", "Watered the pot plants out in the yard."],
  ["talk_start", "18:30", "Prof. Lâm's talk began. About 40 visitors."],
  ["talk_end", "19:45", "Talk ended."],
  ["quan_out", "19:50", "Quân (Mr Bảo's nephew) went home."],
  ["kieu_out", "19:51", "Ms Kiều (Hoài Giang paper) went home."],
  ["ha_out", "19:52", "Ms Hà (conservation) went home."],
  ["lam_out", "19:53", "Prof. Lâm went home, his son collecting him by motorbike (the professor has poor eyesight, does not ride at night)."],
  ["lan_out", "19:54", "Ms Lan (admin) went home."],
  ["guests_out", "19:56", "Last visitors out. Locked the lecture hall."],
  ["ring_out", "19:58", "Khoa (the translator) borrowed the Room 3 key ring to put the projector away in the Room 3 store room."],
  ["ha_back", "20:02", "A female staff member came back, said she had left her raincoat in the office. Went inside."],
  ["ring_back", "20:21", "Khoa returned the Room 3 key ring, went home."],
  ["ha_leaves", "20:26", "The female staff member went home. Locked the main door."],
  ["round_1", "21:00", "Round of the rooms. Khoa had only pulled the Room 3 door to; I locked it again. Normal."],
  ["round_2", "23:30", "Round of Room 3 and the conservation room. Normal."],
  ["round_3", "02:00", "Round of the rooms. Normal."],
  ["round_4", "05:00", "Round of the rooms. Normal."],
  ["cleaner_in", "06:50", "Opened the door for Mrs Út Mai (cleaner)."],
  ["case_found", "07:05", "Mrs Mai reported case P-07 empty. Called the police, called the director."],
];

const soTruc = {
  id: "so_truc", stage: 0, kind: "Ledger", label: "Guard's log, night of 18/11",
  html: () => `
  <div class="doc doc--ledger">
    <div class="ledger-head"><div class="small caps">Hoài Giang Museum · Security office</div>
      <h3>Night shift guard's log</h3>
      <div>Night of ${wd("1999-11-18", "Thursday")} ${dt("1999-11-18", "18/11")} into ${wd("1999-11-19", "Friday")} ${dt("1999-11-19", "19/11/1999")} · On duty: Tạ Văn Lực</div></div>
    <table class="ledger">
      <tr><th style="width:90px">Time</th><th>Entry</th></tr>
      ${NIGHT.map(([ev, time, text]) => `<tr><td>${ev ? at(ev, time) : time}</td><td style="font-size:18px">${text}</td></tr>`).join("")}
    </table>
    <p class="copy-note">Transcribed by the police from the original book. Times are as read from the wall clock of the security office, which the police checked: correct to the radio time signal.</p>
  </div>`,
};

const thongBao = {
  id: "thong_bao", stage: 0, kind: "Notice", label: "Notice posted in the museum lobby",
  html: () => `
  <div class="doc doc--typed">
    ${officeHead("DEPARTMENT OF CULTURE AND INFORMATION", "Hoài Giang Museum")}
    <div class="typed-title">NOTICE</div>
    <div class="typed-sub">Hoài Giang, ${wd("1999-11-17", "Wednesday")} ${dt("1999-11-17", "17-11-1999")}</div>
    <p>1. At ${at("talk_start", "18:30")} on ${wd("1999-11-18", "Thursday")} ${dt("1999-11-18", "18-11")}, in the lecture hall: a talk
      "Reading the Writing of the Workmen of the Valley" by Professor <b>Lâm Quang Tịnh</b>. Admission free.</p>
    <p>2. At ${at("tv_reading", "9:00")} on ${wd("1999-11-19", "Friday")} ${dt("1999-11-19", "19-11")}, the Provincial Radio and Television Station will film
      Professor Lâm <b>reading papyrus fragment P-07 directly</b> with a magnifying glass. Case P-07 will be opened; Ms Hà (conservation room) will make the preparations. Room 3 will be temporarily closed until 10:00. Mr Bảo, the owner of the exhibit, invited the station; the station accepted only this afternoon.</p>
    <p>3. The exhibition is open from 8:00 to 17:00, closed on Mondays, until the end of ${wd("1999-11-21", "Sunday")} ${dt("1999-11-21", "21-11-1999")}.</p>
    <div class="typed-sign"><div></div><div>DIRECTOR<div class="sign">Nguyệt</div>Phan Thị Nguyệt</div></div>
  </div>`,
};

const soDo = {
  id: "so_do", stage: 0, kind: "Plan", label: "Plan of the Hoài Giang Museum (drawn by the police)",
  html: () => `
  <div class="doc doc--map">
    ${floorPlan()}
  </div>`,
};

export default [giaoViec, bienBan, bieuDo, huongDan, soTu, soTruc, thongBao, soDo];
