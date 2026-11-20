// Case 03 (ancient Egypt), first folder: the vizier's order, the scribe's reference chart, the accusation, the West mayor's
// inspection, the opening of the tomb, the jar docket, the Medjay patrol log, the festival calendar, the crew roster.
// Facts must agree with the case facts.js. All names are fictional.
import { stamp } from "../../../js/kit.js";
import { SIGNS, NUM, PRICES, WAGES } from "../facts.js";
import { ed, eday, g, n, tr } from "./parts.js";

const SIGN_NAMES = {
  A: "chim kền kền", I: "lá sậy", Y: "hai lá sậy", "Ơ": "cánh tay (âm họng)", W: "chim cút con", B: "bàn chân", P: "cái ghế đẩu", F: "rắn sừng",
  M: "con cú", N: "mặt nước", R: "cái miệng", H: "mái lều sậy", "Ḥ": "sợi lanh xoắn", KH: "cái nhau thai", S: "nếp vải gấp", SH: "cái ao",
  Q: "sườn đồi", K: "cái giỏ", G: "giá đỡ vò", T: "ổ bánh mì", TJ: "dây buộc gia súc", D: "bàn tay", DJ: "rắn hổ mang",
};

/** A count of grain sacks in words: 1.5 → "1 bao rưỡi". */
const sacks = (v) => (Number.isInteger(v) ? `${v} bao` : `${Math.floor(v)} bao rưỡi`);

const lenh = {
  id: "lenh", stage: 0, kind: "Giấy cói", label: "Lệnh của tể tướng Ptahmose",
  html: () => `
  <div class="doc doc--papyrus">
    <h3>Tể tướng Ptahmose gửi thư lại của mình</h3>
    <p class="center"><i>Viết tại Thebes, ${ed("accusation")}</i></p>
    <p>Người thư lại thân tín của ta,</p>
    <p>Sáng nay, thị trưởng Đông Thebes là <b>Nebamun</b> dâng lên ta một đơn tố cáo: lăng của <b>phu nhân Nebettawy</b> ở Thung lũng phía tây đã bị kẻ trộm mở.
      Thị trưởng Tây Thebes là <b>Sennefer</b>, người coi việc giữ nghĩa địa, sẽ dẫn một đoàn đi kiểm tra.</p>
    <p>Hai người này vốn ghét nhau. Ta không tin lời ai cả. Ta giao cho ngươi xem xét mọi giấy tờ và trả lời ta từng điều.
      Ta sẽ cho mở lăng trước mặt ta khi cần. Đừng kết luận điều gì mà không có giấy tờ làm chứng.</p>
    <p>Những người làm việc trong Thung lũng đều là thợ của làng Set-Maat, chia làm <b>bên phải</b> và <b>bên trái</b>, mỗi bên có một đốc công.
      Thư lại của lăng ghi sổ công hằng ngày. Lính gác Medjay tuần đêm trong Thung lũng.</p>
    <p class="right"><span class="red">Đóng ấn của tể tướng</span></p>
    ${tr("chữ thầy tu (hieratic) trên giấy cói, mực đen, tên người viết bằng mực đỏ.")}
  </div>`,
};

const bangTra = {
  id: "bang_tra", stage: 0, kind: "Bảng tra", label: "Bảng tra của học trò thư lại",
  html: () => `
  <div class="doc doc--papyrus" style="width:900px">
    <h3>Bảng tra của học trò trường thư lại</h3>
    <p class="center"><i>chép lại để học thuộc · ghi chú bằng tiếng Việt cho người đọc bản dịch</i></p>
    <p><b>1. Chữ đơn âm.</b> Mỗi ký hiệu dưới đây đọc thành một phụ âm. <b>Chữ Ai Cập không viết nguyên âm</b>: người đọc tự thêm vào.
      Ví dụ tên thần Ptah viết ${g("P T Ḥ")} (P – T – Ḥ). Chữ viết có thể đi từ phải sang trái hay trái sang phải: đọc từ phía các con vật quay mặt về.</p>
    <table class="glyph-table">${[0, 8, 16].map((s) => `<tr>${Object.keys(SIGNS).slice(s, s + 8).map((k) => `<td><span class="glyphs">${SIGNS[k]}</span><b>${k}</b><br><span style="font-size:11.5px">${SIGN_NAMES[k]}</span></td>`).join("")}</tr>`).join("")}</table>
    <p style="margin-top:14px"><b>2. Chữ số.</b> <span class="glyphs" style="font-size:28px">${NUM[1]}</span> = 1 · <span class="glyphs" style="font-size:28px">${NUM[10]}</span> = 10 ·
      <span class="glyphs" style="font-size:28px">${NUM[100]}</span> = 100 · <span class="glyphs" style="font-size:28px">${NUM[1000]}</span> = 1000. Cộng dồn: ${n(23)} = 23.</p>
    <p><b>3. Lịch.</b> Một năm có ba mùa, theo thứ tự: <b>Akhet</b> (mùa nước lên) → <b>Peret</b> (mùa gieo) → <b>Shemu</b> (mùa gặt). Mỗi mùa 4 tháng (I, II, III, IV),
      mỗi tháng 30 ngày; cuối năm thêm 5 ngày lễ. Năm tính theo đời Pharaoh: "năm 16" là năm thứ mười sáu của Pharaoh đang trị vì. Ví dụ: năm 15, tháng IV mùa Akhet, ngày ${n(23)}.</p>
    <p><b>4. Tuần mười ngày.</b> Đội thợ làng Set-Maat làm tám ngày, <b>nghỉ ngày 9, 10, 19, 20, 29, 30</b> mỗi tháng. Ngày nghỉ, cửa các lăng đang đục được cài then, thợ ở làng.</p>
    <p><b>5. Đo lường.</b> 1 cubit hoàng gia = 7 bàn tay = 28 ngón (một cubit dài chừng từ khuỷu tay tới đầu ngón giữa). Cân: <b>1 deben = 10 kite</b>.</p>
    <p><b>6. Giá ở chợ Thebes.</b> 1 deben vàng = ${PRICES.goldInSilver} deben bạc; 1 deben bạc = ${PRICES.silverInCopper} deben đồng. Một con bò: ${PRICES.oxCopper[0]} tới ${PRICES.oxCopper[1]} deben đồng. Một bao lúa: chừng ${PRICES.sackCopper} deben đồng.</p>
    <p><b>7. Lương tháng (trả bằng lúa).</b> Thợ: ${sacks(WAGES.worker[0])} lúa mì, ${sacks(WAGES.worker[1])} lúa mạch. Đốc công và thư lại: ${sacks(WAGES.chief[0])} lúa mì, ${sacks(WAGES.chief[1])} lúa mạch.</p>
    ${tr("bảng học trò viết trên một tấm giấy cói đã dùng lại; ký hiệu vẽ bằng mực đen.")}
  </div>`,
};

const toCao = {
  id: "to_cao", stage: 0, kind: "Giấy cói", label: "Đơn tố cáo của thị trưởng Đông Thebes",
  html: () => `
  <div class="doc doc--papyrus">
    <h3>Nebamun, thị trưởng Đông Thebes, kính dâng tể tướng</h3>
    <p class="center"><i>${ed("accusation")}</i></p>
    <p>Kính thưa tể tướng, ba đêm trước, ở quán bia gần bến đò bờ đông, chủ quán là bà Tiy nghe một gã đàn ông say khoe:
      "Ta đã ngồi trên vàng của phu nhân Nebettawy. Thung lũng không còn gì là kín nữa."</p>
    <p>Bà Tiy kể gã mặc khố của người làm công bờ tây, vai chai vì đòn gánh. Bà không biết tên gã, chỉ nhớ gã trả tiền bia bằng một mẩu bạc nhỏ,
      thứ mà người làm công không bao giờ có.</p>
    <p>Thị trưởng Tây Thebes là Sennefer coi việc giữ Thung lũng. Tôi xin tể tướng cho người khám lăng phu nhân, đừng chỉ nhìn bên ngoài.</p>
    <p class="right">Nebamun</p>
    ${tr("giấy cói, chữ thầy tu.")}
  </div>`,
};

const baoCao = {
  id: "bao_cao", stage: 0, kind: "Giấy cói", label: "Báo cáo của đoàn kiểm tra Tây Thebes",
  html: () => `
  <div class="doc doc--papyrus">
    <h3>Báo cáo của đoàn kiểm tra nghĩa địa phía tây</h3>
    <p class="center"><i>${ed("inspection")}</i></p>
    <p>Đoàn gồm: thị trưởng Tây Thebes <b>Sennefer</b>; đội trưởng Medjay <b>Bakenmut</b>; đốc công bên phải <b>Userhat</b>; đốc công bên trái <b>Nakhtmin</b>; thư lại của lăng <b>Hori</b>.</p>
    <p>Đoàn đi khắp Thung lũng và xem xét các lăng sau:</p>
    <p>– Lăng của vua tổ tiên, ở khe phía bắc: dấu niêm phong cửa nguyên vẹn. <b>Nguyên vẹn.</b><br>
       – Lăng của hoàng hậu Tiaa: dấu niêm phong cửa nguyên vẹn. <b>Nguyên vẹn.</b><br>
       – Lăng số 9 của hoàng tử, đang đục, ở khe phía nam: đội thợ đang làm việc bên trong. Không có gì lạ.<br>
       – Lăng của phu nhân <b>Nebettawy</b>, ở khe phía nam: dấu niêm phong cửa nguyên vẹn, dấu đất sét còn in ấn của nghĩa địa. <b>Nguyên vẹn.</b></p>
    <p>Kết luận: lời tố cáo của thị trưởng Đông Thebes là sai. Không lăng nào trong Thung lũng bị mở.</p>
    <p class="right">Sennefer · Bakenmut · Userhat · Nakhtmin · Hori</p>
    ${tr("giấy cói, chữ thầy tu; năm tên ký bằng mực đỏ.")}
  </div>`,
};

const bienBanMo = {
  id: "bien_ban_mo", stage: 0, kind: "Giấy cói", label: "Biên bản mở lăng phu nhân Nebettawy",
  html: () => `
  <div class="doc doc--papyrus">
    <h3>Mở lăng phu nhân Nebettawy trước mặt tể tướng</h3>
    <p class="center"><i>${ed("opening")}</i></p>
    <p>Có mặt: tể tướng Ptahmose; thư lại của tể tướng; thị trưởng Nebamun; thị trưởng Sennefer; đội trưởng Bakenmut.</p>
    <p>1. Dấu niêm phong cửa còn nguyên. Phá niêm, mở cửa, đi xuống theo các bậc.</p>
    <p>2. Phòng mộ: nắp quan tài ngoài bị đẩy lệch. Hộp trang sức gỗ mun mở nắp, <b>trống</b>. Hai vòng tay vàng rơi dưới chân quan tài; chuỗi hạt đá xanh và khuyên tai đá đỏ vương trên sàn. Không thấy cái gương.</p>
    <p>3. Trên sàn: một ngọn đèn đất nung, bấc đã cháy hết; một vò bia nhỏ còn cặn, cổ vò có nhãn mực (chép ở tờ riêng); một cái đục đồng.</p>
    <p>4. Ở chân <b>vách tây</b> phòng mộ có một lỗ thủng, cao chừng một cubit, rộng vừa một người bò chui qua. Phía sau lỗ là đá vụn, rồi một <b>lớp vữa mới</b> bịt kín. Chưa phá lớp vữa.</p>
    <p>5. Các phòng khác, tranh tường, tượng gỗ, bình hoa còn nguyên.</p>
    <p class="right">Thư lại của tể tướng ghi</p>
    ${tr("giấy cói, chữ thầy tu.")}
  </div>`,
};

const nhanVo = {
  id: "nhan_vo", stage: 0, kind: "Nhãn vò", label: "Nhãn mực trên cổ vò bia tìm thấy trong phòng mộ",
  html: () => `
  <div class="doc doc--ostracon clay" style="width:520px">
    <p class="center" style="font-size:14px;letter-spacing:.1em">CHÉP LẠI NHÃN MỰC TRÊN CỔ VÒ</p>
    <p class="center glyphs big">${g("I S T")}</p>
    <p class="center">năm 16 · tháng II mùa Peret · ngày ${eday("beer")}</p>
    <p class="center">bia lúa mạch · loại ngọt</p>
    <p class="small" style="margin-top:14px">Ghi chú của thư lại chép nhãn: dòng trên cùng là tên người ủ bia, viết bằng chữ đơn âm; ngày viết bằng chữ số tượng hình.</p>
  </div>`,
};

const tuanTra = {
  id: "tuan_tra", stage: 0, kind: "Sổ sách", label: "Sổ tuần đêm của lính gác Medjay",
  html: () => {
    // Each morning the scribe writes up the night just ended, under that morning's date.
    const rows = {
      12: "Đêm qua tuần cả Thung lũng. Các dấu niêm nguyên.", 13: "Đêm qua tuần cả Thung lũng. Các dấu niêm nguyên.", 14: "Đêm qua tuần khe phía bắc và phía nam. Không có gì lạ.",
      15: "Đêm qua tuần cả Thung lũng. Các dấu niêm nguyên.", 16: "Đêm qua tuần cả Thung lũng. Gió cát, về sớm.", 17: "Đêm qua tuần cả Thung lũng. Các dấu niêm nguyên.",
      18: "Đêm qua tuần cả Thung lũng. Các dấu niêm nguyên.", 19: "Đêm qua tuần cả Thung lũng. Các dấu niêm nguyên. Cửa lăng số 9 cài then gỗ bên ngoài.",
      20: "Đêm qua không tuần.", 21: "Đêm qua tuần cả Thung lũng. Trưa hôm qua có tuần thêm ban ngày: gặp một người gánh nước dắt lừa chở bình đi xuống làng, nói vừa mang nước lên cho lính gác.",
      22: "Đêm qua tuần cả Thung lũng. Các dấu niêm nguyên.", 23: "Đêm qua tuần cả Thung lũng. Các dấu niêm nguyên.",
      24: "Đêm qua tuần cả Thung lũng. Các dấu niêm nguyên.", 25: "Đêm qua tuần khe phía nam. Không có gì lạ.", 26: "Đêm qua tuần cả Thung lũng. Các dấu niêm nguyên.",
      27: "Đêm qua tuần cả Thung lũng. Các dấu niêm nguyên.", 28: "Đêm qua tuần cả Thung lũng. Gió lạnh.", 29: "Đêm qua tuần cả Thung lũng. Các dấu niêm nguyên.",
      30: "Đêm qua tuần cả Thung lũng. Các dấu niêm nguyên.",
    };
    return `
  <div class="doc doc--papyrus" style="width:820px">
    <h3>Sổ tuần đêm của lính gác Medjay · Thung lũng phía tây</h3>
    <p class="center"><i>Năm 16, tháng II mùa Peret · người ghi: thư lại của đội Medjay</i></p>
    <table class="glyph-table" style="text-align:left">
      ${Object.entries(rows).map(([d, t]) => `<tr><td style="width:110px"><span class="glyphs" style="font-size:24px">${NUM[10].repeat(Math.floor(d / 10))}${NUM[1].repeat(d % 10)}</span></td><td style="text-align:left;font-size:15px">${t}</td></tr>`).join("")}
    </table>
    ${tr("cột đầu là ngày trong tháng, viết bằng chữ số tượng hình. Mỗi buổi sáng, thư lại ghi việc của đêm vừa qua dưới ngày của buổi sáng đó.")}
  </div>`;
  },
};

const lichLe = {
  id: "lich_le", stage: 0, kind: "Giấy cói", label: "Lịch lễ của đền Amun, tháng II mùa Peret",
  html: () => `
  <div class="doc doc--papyrus">
    <h3>Lịch lễ của đền Amun ở Karnak · tháng II mùa Peret</h3>
    <p>Ngày ${n(1)}: dâng bánh đầu tháng. Mọi đền thờ dâng bánh trắng.</p>
    <p>Ngày ${n(6)}: lễ của nữ thần Mut. Rước tượng quanh hồ thiêng.</p>
    <p>Ngày ${n(12)}: ngày xấu. Không lên đường đi xa, không ăn cá.</p>
    <p>Ngày ${n(19)}: <b>lễ Amun thăm bờ tây: rước thuyền thần Amun qua sông.</b> Thuyền thần rời Karnak lúc mặt trời lặn, sang bờ tây thăm đền tưởng niệm của các vua tổ tiên,
      trở về lúc bình minh hôm sau. <b>Mọi lính Medjay của bờ tây theo hầu thuyền thần suốt đêm.</b></p>
    <p>Ngày ${n(25)}: dâng nước thánh. Ngày ${n(28)}: ngày tốt cho cưới hỏi.</p>
    ${tr("giấy cói của đền, chữ thầy tu; các ngày viết bằng chữ số.")}
  </div>`,
};

/** Crew roster rows: [name, side, job, note]. */
const CREW = [
  ["Userhat", "phải", "đốc công", ""],
  ["Hori", "—", "thư lại của lăng", "ghi sổ công, nhật ký lăng"],
  ["Khonsu", "phải", "thợ đá", "vai u, tay khoẻ"],
  ["Khaemopet", "phải", "thợ đá", ""],
  ["Kenna", "phải", "thợ đá", ""],
  ["Iuy", "phải", "thợ vẽ", "già, mù mắt trái từ năm 10"],
  ["Nakhtmin", "trái", "đốc công", ""],
  ["Khnummose", "trái", "thợ đá", ""],
  ["Huynefer", "trái", "thợ đá", ""],
  ["Wesankh", "trái", "thợ đá", "mới vào đội năm 15"],
  ["Pakhar", "phục dịch", "người gánh nước", "sẹo bỏng trên má trái, có lừa xám"],
  ["Penbuy", "phục dịch", "người gánh nước", "sẹo dao trên má phải, có lừa nâu"],
];

const danhSach = {
  id: "danh_sach", stage: 0, kind: "Mảnh đá vôi", label: "Danh sách đội thợ làng Set-Maat",
  html: () => `
  <div class="doc doc--ostracon" style="width:640px">
    <p class="center"><b>Đội thợ của Thung lũng, năm 16</b></p>
    <table class="glyph-table" style="text-align:left">
      <tr><td><b>Tên</b></td><td><b>Bên</b></td><td><b>Việc</b></td><td><b>Ghi chú</b></td></tr>
      ${CREW.map((r) => `<tr><td style="text-align:left">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td style="text-align:left;font-size:13px">${r[3]}</td></tr>`).join("")}
    </table>
    <p class="small" style="margin-top:10px">Lăng số 9 của hoàng tử: bên phải đục hành lang A, phòng B và hành lang C; bên trái đục hành lang B và phòng D.</p>
    <p class="tr-note">Bản dịch · mảnh đá vôi, mực đen. Tên người được phiên âm có nguyên âm cho dễ đọc.</p>
  </div>`,
};

export default [lenh, bangTra, toCao, baoCao, bienBanMo, nhanVo, tuanTra, lichLe, danhSach];
