// Case 04, fourth folder (after question 3): Friday 12/11, the day the labels were changed — switchboard log,
// day guard's gate log, the label printer's receipt, statements of the conservator Hà and the translator Khoa.
// Fifth folder (after question 4): the night guard's statement, the archive loan slip, the post office receipt. Ending.
// Facts must agree with the case facts.js.
import { wd, age, at, dt, line, stamp } from "../../../js/kit.js";
import { policeHead, statementSign, dailyMast } from "../../../js/docparts.js";
import { thuBao } from "./stage2.js";

const tongDai = {
  id: "tong_dai", stage: 3, kind: "Sổ sách", label: "Sổ tổng đài của bảo tàng, 12/11",
  html: () => {
    const rows = [
      [null, "08:20", "Sở Văn hoá gọi bà giám đốc", "máy 07 (giám đốc)", "08:26"],
      [null, "09:41", "Trường cấp 2 Nguyễn Du hẹn đoàn học sinh lớp 6 chiều nay", "máy 05 (hành chính)", "09:44"],
      [null, "11:02", "Báo Hoài Giang hỏi giờ mở cửa", "máy 05", "11:03"],
      ["call_start", "15:11", "Xí nghiệp in Hoài Giang gọi chị Hà, hỏi gấp số lượng in thêm catalogue theo một đơn mới đặt sáng nay. Phòng bảo quản không có máy lẻ: hẹn gọi lại, chị Lan xuống Phòng 3 gọi chị Hà.", "—", "15:11"],
      [null, "15:16", "Xí nghiệp in gọi lại, chị Hà nghe.", "máy 05 (hành chính)", "15:29"],
      [null, "15:30", "Chị Hà gọi ra Xí nghiệp in, đọc lại số lượng in thêm.", "máy 05", at("call_end", "15:31")],
      ["bao_call_12", "16:35", "Ông Bảo gọi từ khách sạn Sông Hoài, gặp bà giám đốc, hỏi nhãn mới thay xong chưa", "máy 07", "16:41"],
    ];
    return `
  <div class="doc doc--ledger">
    <div class="ledger-head"><div class="small caps">Bảo tàng Hoài Giang · Phòng hành chính (lầu 1)</div>
      <h3>Sổ tổng đài</h3>
      <div>${wd("1999-11-12", "Thứ Sáu")} ${dt("1999-11-12", "12/11/1999")} · trực tổng đài: Nguyễn Thị Lan</div></div>
    <table class="ledger">
      <tr><th style="width:70px">Gọi tới</th><th>Ai gọi, gặp ai</th><th>Chuyển máy</th><th style="width:80px">Hết</th></tr>
      ${rows.map((r) => `<tr><td>${r[0] ? at(r[0], r[1]) : r[1]}</td><td style="font-size:17px">${r[2]}</td><td style="font-size:17px">${r[3]}</td><td>${r[4]}</td></tr>`).join("")}
    </table>
    <p style="font-family:'Patrick Hand';font-size:19px;color:#23407a">Tôi đặt máy, đi bộ xuống Phòng 3 gọi chị Hà, chị lên cùng tôi ngay. Anh Tín (thợ ảnh) lên tới đây lúc 15:21; chị đang nghe máy nên tôi ký nhận phong bì thay, ${at("tin_signed", "15:23")} anh ấy xuống. Nghe xong chị ngồi lại tính số lượng in, gọi ra xí nghiệp đọc lại số cho chắc, đặt máy xuống là đi xuống ngay. — Lan</p>
    <p class="copy-note">Bản chụp, bảo tàng cho mượn. Máy 05 đặt ở phòng hành chính, lầu 1.</p>
  </div>`;
  },
};

const soCong = {
  id: "so_cong", stage: 3, kind: "Sổ sách", label: "Sổ gửi đồ và ra vào của bảo vệ ca ngày, 12/11",
  html: () => {
    const rows = [
      [null, "08:05", "Bà Nguyệt, chị Hà, chị Lan vào làm.", ""],
      [null, "10:30", "Khách lẻ: 14 người.", "gửi 9 túi"],
      ["khoa_in_12", "14:50", "Anh Đỗ Văn Khoa (người dịch nhãn) vào.", "cộng tác viên, không gửi đồ"],
      ["school_in", "15:00", "Đoàn học sinh lớp 6 trường Nguyễn Du, 32 em, 2 cô giáo. Anh Bình (bảo vệ) dẫn tham quan Phòng 1 và Phòng 2.", "gửi 34 cặp"],
      ["tin_in", "15:20", "Anh Bùi Văn Tín (thợ ảnh) mang ảnh in thử bưu thiếp tới cho chị Hà, đi vào trong.", "1 phong bì ảnh khổ lớn, không gửi"],
      ["tin_out", "15:24", "Anh Tín xuống, ra về.", ""],
      ["school_out", "16:00", "Đoàn học sinh ra.", "trả đủ"],
      ["khoa_out_12", "16:20", "Anh Khoa ra.", ""],
      [null, "17:05", "Đóng cửa.", ""],
    ];
    return `
  <div class="doc doc--ledger">
    <div class="ledger-head"><div class="small caps">Bảo tàng Hoài Giang · Bàn gửi đồ ở sảnh</div>
      <h3>Sổ ra vào ca ngày</h3>
      <div>${wd("1999-11-12", "Thứ Sáu")} ${dt("1999-11-12", "12/11/1999")} · Trực: Lê Văn Bình</div></div>
    <table class="ledger">
      <tr><th style="width:70px">Giờ</th><th>Ai</th><th>Đồ mang theo / gửi</th></tr>
      ${rows.map((r) => `<tr><td>${r[0] ? at(r[0], r[1]) : r[1]}</td><td style="font-size:17px">${r[2]}</td><td style="font-size:17px">${r[3]}</td></tr>`).join("")}
    </table>
    <p class="copy-note">Bản chụp, bảo tàng cho mượn. Khách phải gửi túi; nhân viên và cộng tác viên được mang đồ vào. Lúc anh Bình dẫn đoàn học sinh, chị bán vé ngồi bàn gửi đồ ghi sổ thay.</p>
  </div>`;
  },
};

const phieuIn = {
  id: "phieu_in", stage: 3, kind: "Phiếu", label: "Phiếu giao hàng của tiệm in nhãn",
  html: () => `
  <div class="doc doc--receipt">
    <div class="receipt-head"><div class="small caps">Cơ sở in lụa – ép plastic</div><h3>Tân Thành</h3><div class="small">12 Nguyễn Huệ, Hoài Giang</div></div>
    <p class="center"><b>PHIẾU GIAO HÀNG</b> · số 377</p>
    <div class="receipt-line"><span>Ngày:</span><span class="v carbon">${wd("1999-11-11", "Thứ Năm")} ${dt("1999-11-11", "11/11/1999")}</span></div>
    <div class="receipt-line"><span>Khách:</span><span class="v carbon">Bảo tàng Hoài Giang (anh Khoa nhận hàng)</span></div>
    <div class="receipt-line"><span>Hàng:</span><span class="v carbon">06 nhãn chú thích, giấy bìa trắng, khổ 21 × 3,5 cm, ép plastic cứng</span></div>
    <div class="receipt-line"><span>Đóng gói:</span><span class="v carbon">1 phong bì giấy</span></div>
    <div class="receipt-line"><span>Tiền:</span><span class="v carbon">36.000 đ · bảo tàng trả sau</span></div>
    <p class="ink" style="margin-top:10px">Đã nhận đủ. — Khoa</p>
  </div>`,
};

const khaiHa = {
  id: "khai_ha", stage: 3, kind: "Lời khai", label: "Lời khai Lê Thu Hà (cán bộ bảo quản)",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">BIÊN BẢN GHI LỜI KHAI</div>
    <div class="typed-sub">Hồi 8 giờ, ${wd("1999-11-22", "thứ Hai")} ngày ${dt("1999-11-22", "22-11-1999")}</div>
    <p>Người khai: <b>Lê Thu Hà</b>, ${age("ha", "1999-11-22", 31)} tuổi, cán bộ bảo quản, bảo tàng Hoài Giang.</p>
    <div class="qa">
      ${line("ha-1", "Đ: Chiều 12/11 tôi mở tủ P-07 để anh Khoa thay nhãn; anh hẹn ba giờ. Anh báo nhãn cũ dịch sai tên một người thợ nên phải in lại.")}
      ${line("ha-2", "Đ: Giữa chừng có điện thoại của nhà in. Nhãn cũ đang gỡ dở, keo còn ướt, chưa khép tủ được; anh Khoa bảo chị cứ lên, em đứng trông. Tôi dặn anh đứng chờ ở cửa phòng. Xong việc tôi xuống ngay.")}
      ${line("ha-3", "Đ: Cả đợt triển lãm, đó là lần duy nhất tôi rời tủ khi tủ đang mở. Xí nghiệp in hỏi gấp, không thể không nghe.")}
      ${line("ha-4", "Đ: Ngày 15/11 tôi thay giấy biểu đồ và túi hút ẩm. Mảnh giấy cói vẫn bình thường.")}
      ${line("ha-5", "Đ: Chìa tủ P-07 tôi đeo trong chùm chìa riêng, lúc nào cũng mang theo người.")}
    </div>
    ${statementSign("Hà", "Lê Thu Hà")}
  </div>`,
};

const khaiKhoa = {
  id: "khai_khoa", stage: 3, kind: "Lời khai", label: "Lời khai Đỗ Văn Khoa (người dịch nhãn)",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">BIÊN BẢN GHI LỜI KHAI</div>
    <div class="typed-sub">Hồi 10 giờ, ${wd("1999-11-22", "thứ Hai")} ngày ${dt("1999-11-22", "22-11-1999")}</div>
    <p>Người khai: <b>Đỗ Văn Khoa</b>, ${age("khoa", "1999-11-22", 26)} tuổi, học viên cao học sử học ở Hà Nội, học trò GS Lâm; từ tháng 10 ở trọ nhà bà Tư bán xôi, đường Trưng Trắc, gần chợ Đông, Hoài Giang.</p>
    <div class="qa">
      ${line("kh-1", "Đ: Thầy Lâm giao tôi dịch nhãn và soạn bảng chữ phát cho khách. Tôi đọc được chữ tượng hình.")}
      ${line("kh-2", "Đ: Chiều 12/11 tôi mang nhãn mới tới trong ống nhựa cho khỏi quăn mép. Chị Hà đi nghe điện thoại, tôi đứng chờ, không đụng vào hiện vật.")}
      ${line("kh-3", "Đ: Thứ Bảy 13/11 tôi ở nhà trọ dịch bài cho thầy cả ngày, không đi đâu.")}
      ${line("kh-4", "Đ: Tối 18/11 tôi chiếu ảnh cho thầy, xong thì mượn chìa cất máy chiếu vào kho Phòng 3, khoá kho, khép cửa Phòng 3 rồi trả chìa, anh Lực bảo để anh khoá lúc đi tuần. Lúc ở trong kho tôi có nghe tiếng chân ai đi qua Phòng 3, tưởng là anh bảo vệ.")}
      ${line("kh-6", "Đ: Năm nay lẽ ra tôi sang Pháp học tiếp; học bổng bị cắt hồi tháng 9.")}
      ${line("kh-5", "Đ: Tôi chưa từng tới tiệm ảnh Minh Quân.")}
    </div>
    ${statementSign("Khoa", "Đỗ Văn Khoa")}
  </div>`,
};

const khaiTin = {
  id: "khai_tin", stage: 3, kind: "Lời khai", label: "Lời khai Bùi Văn Tín (thợ ảnh)",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">BIÊN BẢN GHI LỜI KHAI</div>
    <div class="typed-sub">Hồi 14 giờ, ${wd("1999-11-22", "thứ Hai")} ngày ${dt("1999-11-22", "22-11-1999")}</div>
    <p>Người khai: <b>Bùi Văn Tín</b>, thợ ảnh tự do, nhận chụp và in ảnh cho bảo tàng Hoài Giang.</p>
    <div class="qa">
      ${line("ti-1", "Đ: Sáng 9/11 tôi chụp lại mảnh P-07 ngay tại tủ cho catalogue in lần hai. Chị Hà mở tủ, đứng cạnh suốt.")}
      ${line("ti-2", "Đ: Chiều 12/11 tôi mang ảnh in thử bưu thiếp tới cho chị Hà, phong bì khổ 30 × 40, mười hai tấm. Người quen của bảo tàng nên không ai bắt gửi.")}
      ${line("ti-3", "Đ: Tôi lên thẳng phòng hành chính, chị Hà đang nghe điện thoại nên chị Lan ký nhận thay. Xong tôi về liền, không ghé phòng trưng bày nào.")}
      ${line("ti-4", "Đ: Tôi biết mặt anh Khoa, người Hà Nội, đeo kính cận; hôm khai mạc có gặp. Chiều đó tôi không thấy anh ấy.")}
    </div>
    ${statementSign("Tín", "Bùi Văn Tín")}
  </div>`,
};

const khaiLuc = {
  id: "khai_luc", stage: 4, kind: "Lời khai", label: "Lời khai Tạ Văn Lực (bảo vệ đêm)",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">BIÊN BẢN GHI LỜI KHAI</div>
    <div class="typed-sub">Hồi 15 giờ, ${wd("1999-11-22", "thứ Hai")} ngày ${dt("1999-11-22", "22-11-1999")}</div>
    <p>Người khai: <b>Tạ Văn Lực</b>, ${age("luc", "1999-11-22", 56)} tuổi, bảo vệ ca đêm, bảo tàng Hoài Giang.</p>
    <div class="qa">
      ${line("lu-1", "Đ: Chùm chìa Phòng 3 có ba chìa: cửa Phòng 3, cửa kho Phòng 3, tủ điện.")}
      ${line("lu-2", "Đ: Chìa dự phòng của các tủ trưng bày để trong hộp sắt niêm phong ở phòng giám đốc trên lầu. Lầu khoá từ 17 giờ. Sáng 19/11 công an mở xem: niêm phong còn nguyên, đủ chìa.")}
      ${line("lu-3", "Đ: Tối 18/11 có một chị nhân viên quay lại lấy áo mưa. Đèn sảnh đã tắt bớt, chị đội nón, tôi không nhìn rõ mặt; nghe giọng thì là chị Hà hay chị Lan, tôi không dám chắc. Lúc đó cửa Phòng 3 đang mở vì anh Khoa đang cất máy chiếu trong kho. Chị ở trong hơn hai mươi phút.")}
      ${line("lu-4", "Đ: Tôi tuần bằng đèn pin, đứng ở cửa mỗi phòng rọi vào. Đèn tủ tắt thì giá đỡ trống hay không cũng khó thấy.")}
    </div>
    ${statementSign("Lực", "Tạ Văn Lực")}
  </div>`,
};

const phieuMuon = {
  id: "phieu_muon", stage: 4, kind: "Phiếu", label: "Phiếu mượn tài liệu của kho lưu trữ bảo tàng",
  html: () => `
  <div class="doc doc--receipt">
    <div class="receipt-head"><div class="small caps">Bảo tàng Hoài Giang</div><h3>Kho lưu trữ</h3><div class="small">Phiếu mượn tài liệu · lưu tại kho</div></div>
    <div class="receipt-line"><span>Ngày:</span><span class="v carbon">${wd("1999-11-16", "Thứ Ba")} ${dt("1999-11-16", "16/11/1999")}</span></div>
    <div class="receipt-line"><span>Người mượn:</span><span class="v carbon">Lê Thu Hà (bảo quản)</span></div>
    <div class="receipt-line"><span>Tài liệu:</span><span class="v carbon">Biên bản tình trạng P-07 (4/11) · phim âm bản ảnh đăng ký P-07 · kính lúp lớn</span></div>
    <div class="receipt-line"><span>Lý do:</span><span class="v carbon">chuẩn bị cho buổi ghi hình của đài truyền hình</span></div>
    <div class="receipt-line"><span>Mượn lúc:</span><span class="v carbon">${at("archive_out", "8 giờ 10")}</span></div>
    <div class="receipt-line"><span>Trả lúc:</span><span class="v carbon">${at("archive_back", "16 giờ 30")}</span></div>
    <p class="ink" style="margin-top:10px">Hỏi ghi hình hôm nào, chị Hà nói ông Bảo có bàn chuyện mời đài từ tối khai mạc, chưa có ngày. Trả đủ. — thủ kho Châu</p>
  </div>`,
};

const buuPham = {
  id: "buu_pham", stage: 4, kind: "Phiếu", label: "Biên lai gửi bưu phẩm EMS (bưu điện Hoài Giang cung cấp)",
  html: () => `
  <div class="doc doc--receipt" style="width:600px">
    <div class="receipt-head"><div class="small caps">Bưu điện tỉnh · Bưu cục Hoài Giang</div><h3>Biên lai EMS quốc tế</h3><div class="small">Liên 2 · lưu tại bưu cục</div></div>
    <div class="receipt-line"><span>Ngày giờ gửi:</span><span class="v carbon">${at("ems_sent", "7 giờ 40")} ${wd("1999-11-13", "Thứ Bảy")} ${dt("1999-11-13", "13/11/1999")}</span></div>
    <div class="receipt-line"><span>Người gửi:</span><span class="v carbon">Lê Minh · 26 Trưng Trắc, Hoài Giang</span></div>
    <div class="receipt-line"><span>Người nhận:</span><span class="v carbon">Mr. P. Srisawat · Charoen Krung Rd., Bangkok, Thái Lan</span></div>
    <div class="receipt-line"><span>ĐT người nhận:</span><span class="v carbon">66-2-234 5170</span></div>
    <div class="receipt-line"><span>Nội dung khai:</span><span class="v carbon">tranh vẽ trên giấy, quà lưu niệm, không có giá trị thương mại</span></div>
    <div class="receipt-line"><span>Bao bì:</span><span class="v carbon">ống nhựa tròn, dài 60 cm</span></div>
    <div class="receipt-line"><span>Khối lượng:</span><span class="v carbon">0,4 kg · cước 312.000 đ</span></div>
  </div>`,
};

/** Outgoing calls booked by the Sông Hoài hotel switchboard: [ISO date, event key or null, time, room, number and place as the operator wrote it, minutes]. */
const HOTEL_CALLS = [
  ["1999-11-10", null, "08:12", "112", "Hà Nội · 04-8 254 113", "6"],
  ["1999-11-10", "bao_call_insurer", "09:30", "204", "82 660 (Bảo hiểm Phương Nam)", "12"],
  ["1999-11-11", null, "19:40", "305", "Sài Gòn · 08-8 299 041", "3"],
  ["1999-11-12", null, "08:50", "204", "82 251 (Xí nghiệp in Hoài Giang)", "5"],
  ["1999-11-12", null, "11:15", "305", "82 133 (bến xe khách)", "1"],
  ["1999-11-12", "bao_call_12", "16:35", "204", "82 417 (Bảo tàng Hoài Giang)", "6"],
  ["1999-11-12", null, "21:05", "112", "Đà Nẵng · 0511-822 960", "2"],
  ["1999-11-13", "bao_call_bkk", "08:05", "204", "Thái Lan · 66-2-234 5170", "3"],
  ["1999-11-14", null, "09:50", "112", "82 417 (Bảo tàng Hoài Giang)", "2"],
  ["1999-11-15", null, "20:30", "204", "Pháp · 33-4-91 54 22 08", "9"],
  ["1999-11-16", null, "07:45", "305", "Huế · 054-823 117", "4"],
  ["1999-11-17", "bao_call_tv", "14:10", "204", "82 345 (Đài PT-TH tỉnh)", "7"],
];

const soKhachSan = {
  id: "so_khach_san", stage: 4, kind: "Sổ sách", label: "Sổ gọi đi của tổng đài khách sạn Sông Hoài, 10–17/11",
  html: () => `
  <div class="doc doc--ledger">
    <div class="ledger-head"><div class="small caps">Khách sạn Sông Hoài · 9 Bạch Đằng · Tổng đài</div>
      <h3>Sổ gọi đi</h3>
      <div>Tháng 11 năm 1999 · trang 6 · công an thu ngày ${dt("1999-11-21", "21/11")}</div></div>
    <table class="ledger">
      <tr><th style="width:70px">Ngày</th><th style="width:60px">Giờ</th><th style="width:60px">Phòng</th><th>Số gọi, nơi gọi tới (tổng đài ghi)</th><th style="width:60px">Phút</th></tr>
      ${HOTEL_CALLS.map((c) => `<tr><td>${dt(c[0], c[0].slice(8).replace(/^0/, "") + "/11")}</td><td>${c[1] ? at(c[1], c[2]) : c[2]}</td><td>${c[3]}</td><td style="font-size:17px">${c[4]}</td><td>${c[5]}</td></tr>`).join("")}
    </table>
    <p class="copy-note">Bản chụp. Sổ chỉ ghi số phòng, không ghi tên khách; tiền gọi cộng vào hoá đơn phòng.</p>
  </div>`,
};

const phuLuc = {
  id: "phu_luc", stage: 4, kind: "Hợp đồng", label: "Phụ lục hợp đồng bảo hiểm hiện vật P-07 (hồ sơ của công ty)",
  html: () => `
  <div class="doc doc--typed">
    <div class="typed-title">PHỤ LỤC SỐ 2</div>
    <div class="typed-sub">kèm hợp đồng bảo hiểm hiện vật triển lãm số 47/99 · Bảo hiểm Phương Nam, chi nhánh Hoài Giang</div>
    <p>Theo đề nghị của ông <b>Trịnh Gia Bảo</b>, chủ hiện vật (gọi điện sáng ${wd("1999-11-10", "thứ Tư")} ${dt("1999-11-10", "10/11/1999")}, đơn nộp chiều cùng ngày),
      số tiền bảo hiểm của hiện vật <b>P-07</b> được nâng từ <b>8.000</b> lên <b>30.000 đô la Mỹ</b>, căn cứ bài của GS Lâm Quang Tịnh trong catalogue triển lãm
      ("trang sổ lương duy nhất của làng thợ ấy còn ở ngoài Ai Cập").</p>
    <p>Phí bảo hiểm thêm ông Bảo trả ngay bằng tiền mặt. Hiệu lực từ ${dt("1999-11-11", "11/11/1999")} tới hết ngày trả hiện vật cho chủ.</p>
    <p>Cũng theo đề nghị của ông Bảo, bổ sung: công ty bồi thường cả khi hiện vật <b>bị đánh tráo</b> trong thời gian bảo tàng giữ (bảo tàng chịu trách nhiệm bảo quản).</p>
    <p class="small">Điều khoản chung in sẵn của công ty: không bồi thường nếu chủ hiện vật có gian dối hoặc tham gia vào tổn thất.</p>
    <p>Các điều khác của hợp đồng giữ nguyên.</p>
    <div class="typed-sign"><div>CHỦ HIỆN VẬT<div class="sign">G. Bảo</div>Trịnh Gia Bảo</div><div>TRƯỞNG PHÒNG GIÁM ĐỊNH<div class="sign">Thịnh</div>Lý Quốc Thịnh</div></div>
  </div>`,
};

const ketLuan = {
  id: "ket_luan", stage: 5, kind: "Thư", label: "Báo cáo kết thúc giám định",
  html: () => `
  <div class="doc doc--weekly">
    <div class="weekly-head"><div class="weekly-logo">PN</div><div class="weekly-name">Bảo hiểm Phương Nam<small>Chi nhánh Hoài Giang · Phòng giám định</small></div></div>
    <p class="right"><i>Hoài Giang, ${wd("1999-12-03", "thứ Sáu")} ${dt("1999-12-03", "3 tháng 12 năm 1999")}</i></p>
    <p>Gửi giám định viên,</p>
    <p>Nhờ báo cáo của bạn, công an tìm ra ống nhựa gửi từ Hoài Giang ngày 13/11: hải quan Thái nghi là đồ cổ, giữ ở kho từ 16/11 chờ người nhận xuất trình giấy tờ nguồn gốc; giấy báo tới tay người nhận ngày 22/11, và ông ta không dám ra lấy.
      Trong ống là mảnh giấy cói P-07 thật. Giáo sư Lâm xem lại: đúng mảnh ông chụp năm 1971, lỗ mọt vẫn ở góc trên bên phải, chỉ thêm một vết gãy mới chạy ngang tên Iuy, người thợ vẽ, dấu của chuyến đi trong ống nhựa.
      Ông Bảo không nhận điều gì. Những gì dưới đây công an ghép lại từ lời khai của Khoa, của chị Hà, của anh Quân, của ông Mến bên Xí nghiệp in, và từ thư từ thu trong va li ông Bảo.</p>
    <p><b>Ông Trịnh Gia Bảo</b> bày ra tất cả. Nhà hàng ở Marseille nợ ngân hàng (tối 15/11 ông còn gọi về Marseille xin khất nợ); mảnh giấy cói ông nội mua ở Luxor không có giấy tờ, không bán công khai được. Thư Khoa gửi ông (thu trong va li ông Bảo) và thư ông trả lời (thu ở nhà trọ của Khoa) cho thấy ông nghĩ tới chuyện bán nó từ lâu; Khoa kể chuyện học bổng, và ông có được đôi tay.
      Ông muốn hai món tiền: bán mảnh thật cho một người buôn đồ cổ quen ở Bangkok, và đòi công ty 30.000 đô la. Trộm thẳng thì công an chặn cửa khẩu ngay trong ngày; một bản giả cho mảnh thật một tuần yên ổn để qua biên giới. Rồi bản giả phải lộ ra khi bảo tàng còn giữ nó, và người phát hiện không được là ông: chủ hiện vật tự kêu "đồ giả" ngay sau khi nâng tiền bảo hiểm thì ai cũng nghi. Phải là giáo sư Lâm, trước ống kính, cả tỉnh làm chứng.
      Vì thế ông nâng tiền bảo hiểm ngày 10/11, bàn chuyện mời đài từ tối khai mạc, và chỉ gọi đài thật chiều 17/11, khi bưu điện đã báo ống nhựa "tới Bangkok" ngày 16/11. Sáng 12/11 ông đặt Xí nghiệp in năm chục cuốn catalogue "mang về Pháp tặng", dặn xí nghiệp: bảo tàng lấy thêm bao nhiêu thì sau ba giờ chiều hãy gọi chị Hà chốt. Ông dặn Khoa: sau ba giờ sẽ có điện thoại gọi chị Hà lên lầu.
      Ông không đưa Khoa tấm ảnh nào, để bản giả không dính tới tay ông. Chỉ một chỗ ông không tránh được: cả Hoài Giang chỉ tiệm cháu ông có giấy cói trơn, mười tờ chính tay ông gửi năm 1998; ông đánh cược rằng thằng cháu sẽ im. Nếu Khoa bị bắt mà khai ra ông, thì đó chỉ là lời một kẻ trộm đổ cho chủ hiện vật, không một chữ trên giấy.
      Sáng 19/11 nghe tủ trống, ông gọi Khoa ra quán nước, hỏi: "Cậu lấy luôn tờ kia làm gì?" (lời Khoa). Trưa ấy ông vẫn nộp đơn đòi bồi thường. Ông không biết từ 16/11 ống nhựa đã nằm trong kho hải quan Thái; và hai chữ "đánh tráo" ông xin thêm hoá ra chỉ để lại chữ ký của ông, cùng cuốn sổ gọi đi của tổng đài khách sạn.</p>
    <p><b>Đỗ Văn Khoa</b> tráo mảnh thật chiều 12/11. Tháng 9, suất học bổng sang Pháp thầy Lâm xin cho hắn bị cắt vì quỹ đóng; thầy xin lại ba lần không được. Từ tháng 10, khi dịch nhãn, hắn viết thư hỏi ông Bảo về mảnh giấy cói và kể chuyện học bổng; hôm lắp hiện vật vào tủ, 5/11, ông Bảo ra giá: một phần ba tiền bán, một chỗ ở và giấy bảo lãnh sang Marseille.
      Sáng sớm 7/11 hắn mang trang catalogue tới tiệm Minh Quân, tự xưng thầy giáo; ảnh nhỏ, nét nhoè, nên hắn kèm tờ bảng chữ cho thợ vẽ rõ nét. Trưa đó nghe thầy kể ảnh in ngược, hắn tính lại: chép ngược trọn vẹn thì chữ vẫn đọc ra Khonsu, chỉ lỗ mọt đổi bên, mà sau kính, dưới đèn tủ vàng, chẳng ai đem biên bản ra so; thầy Lâm mắt kém, chỉ đọc chữ khi tủ mở, dưới kính lúp. Quay lại sửa đơn là thêm một lần lộ mặt; còn khách thì chỉ nhìn qua kính, chẳng ai cầm bảng chữ dò từng con chim. Hắn để nguyên đơn.</p>
    <p>Hôm lắp tủ 5/11, hắn cố ý viết sai một chữ trong tên Hori trên nhãn đầu tiên, để rồi "phát hiện" ra và có cớ mở tủ; hắn hẹn chị Hà ba giờ chiều thứ Sáu. Tối 11/11 lấy hàng, hắn thấy chim quay sai chiều; nhưng nhãn mới đã in, buổi hẹn là cái cớ duy nhất, ông Bảo không cho lùi. Sau này hắn mới hiểu vì sao: ông Bảo cần một bản giả sẽ bị nhìn ra.
      Chiều 12/11, nhãn cũ gỡ dở, keo còn ướt, hắn bảo chị Hà: "Chị cứ lên, em đứng trông." Sáng 13/11 hắn là "Lê Minh" gửi ống nhựa đi Bangkok, ghi địa chỉ nhà trọ để nếu hải quan trả lại thì ống về tay mình, rồi ghé khách sạn Sông Hoài báo ông Bảo.
      Chuyện mời đài hắn có nghe từ tối khai mạc; ông Bảo gạt đi: "Đài chỉ quay qua kính, ai cho mở tủ." Chiều 17/11 đọc thông báo ở sảnh, thấy ghi rõ tủ P-07 sẽ được mở, hắn mới hiểu mình đã bị bán.
      Tờ mẫu hắn kèm theo đơn vẽ là tờ bảng chữ do chính hắn soạn. Hắn thua bởi tờ giấy ấy: nó dạy người thợ vẽ chim quay mặt sang trái, và dạy cả một em học sinh lớp 8 cách đọc ra sự thật.</p>
    <p><b>Anh Trịnh Minh Quân</b> nhận ra ngay hình mảnh giấy cói của chú. Khách bảo là bản phục chế làm đồ dạy học; đồ của chú mình, anh tự nhủ chú đã biết. Tối 11/11 chính anh giao hàng, nhận ra người dịch nhãn ngồi cạnh mình tối khai mạc, và càng tin đây là việc của chú. Chính ông Bảo đã chỉ Khoa tới 52 Lê Lợi: "Cháu tôi có giấy cói, nó không hỏi gì đâu."
      Anh không đọc được chữ, nên chép thứ tự ký hiệu theo trang catalogue in ngược nhưng vẽ từng con chim theo tờ mẫu, quay mặt sang trái. Chiều 16/11, in cuộn phim của cô Ngân, anh thấy bức vẽ của mình nằm sau kính tủ P-07 và hiểu mình bị lợi dụng. Anh gọi cho chú; ông Bảo bảo: "Đừng dính vào, để chú lo." Anh im lặng, rồi khai dối với công an.</p>
    <p><b>Chị Lê Thu Hà</b> mở tủ lúc 20 giờ 10 tối 18/11, bằng chìa của mình. Chiều 12/11 chị vội khoá tủ, không nhìn kỹ; ngày 13 và 14/11 tủ không mở. Sáng 15/11 lau kính chị chỉ nhìn lướt; chiều thay túi hút ẩm, phải nhấc giá đỡ lên sát đèn, chị mới thấy lỗ mọt nằm bên trái.
      Hôm sau chị mượn biên bản, phim và kính lúp, lấy cớ "chuẩn bị ghi hình" vì ông Bảo đã nói chuyện mời đài từ tối khai mạc; đối chiếu xong, chị biết trong tủ là đồ giả. Chị biết chỉ có thể là anh Khoa, nhưng tố anh ta là tự tố mình: người bỏ tủ mở chiều 12/11 là chị, và cán bộ để mất hiện vật thì mất việc, có khi mất hơn thế. Chị còn mẹ già.
      Chiều 17/11 đài nhận lời. Tối 17/11 chị đạp xe tới trước cổng công an thị xã, đứng một lúc, rồi về nhà. Tối hôm sau chị làm điều ngược lại.</p>
    <p>Lời khai bổ sung của chị: "Tôi biết tủ không bị cạy thì người ta sẽ hỏi tới chìa của tôi. Nhưng tủ trống thì không ai biết nó bị tráo, càng không ai hỏi tới chiều 12/11; còn bản giả nằm đó thì chín giờ sáng cả tỉnh biết tôi đã bỏ tủ mở. Tủ trống thì người ta nghi tôi, nhưng nghi thì còn phải tìm chứng cứ; bản giả nằm đó thì chính nó là chứng cứ. Cửa Phòng 3 khoá từ năm giờ, chìa ở chỗ bảo vệ: tối ấy, có anh Khoa cầm chìa, là lần duy nhất cửa ấy mở trước chín giờ sáng mai. Tôi còn tự nhủ: mất thì bảo hiểm trả, ông chủ chẳng thiệt gì, chỉ mình tôi mất hết. Tôi biết mình để anh ấy gánh thay. Tôi không tự hào."
      Tối 18/11 ra tới cổng chị chưa về; đứng ở góc sân, chị thấy đèn Phòng 3 bật, biết anh Khoa đang cất máy chiếu, mới quay vào "lấy áo mưa". Chị vào đúng lúc anh ta vừa lùi vào kho; chị lấy bản giả, run tay khép cửa tủ không kín, rồi đứng nín trong phòng bảo quản tới khi anh ta về. Bản giả bị đốt trong bếp nhà chị.
      Còn biểu đồ chạy nhanh ba tiếng rưỡi: đêm 14/11 chị thức trông mẹ sốt; sáng 15/11, như mọi lần cầm hiện vật, chị tháo đồng hồ đeo tay, đeo găng, và trong căn phòng không cửa sổ chị liếc đồng hồ treo tường, thấy 12 giờ 40, xoay trống tới vạch ấy mà không nghĩ gì. Cái đồng hồ đã đứng từ cuối tuần.</p>
    <p>Khoa khai thêm một điều. Tối 18/11 hắn mượn chìa Phòng 3 không chỉ để cất máy chiếu: chìa tủ ở chỗ chị Hà, hắn mong cửa kính cũ cạy được bằng dao rọc giấy. Đứng trước tủ rồi hắn không dám, lùi vào kho. Ở trong đó hắn nghe tiếng chìa tra vào tủ P-07, tiếng cửa kính mở rồi khép. Hắn tưởng ông Bảo đã cho người tới. Hai người, cách nhau một bức tường, cùng nín thở vì cùng một tờ giấy giả.</p>
    <p>Khoa và ông Bảo bị khởi tố; ông Bảo bị giữ lại Hoài Giang. Ở trại tạm giam, Khoa chỉ hỏi một câu: "Nó có gãy không?" Nghe trả lời, hắn không hỏi gì thêm.
      Khi Khoa khai hết, chị Hà xin được tự tay viết nốt dòng còn trống cuối sổ theo dõi tủ P-07: "18/11 · 20:10 · Hà · không khoá". Chị bị kỷ luật vì khai dối và huỷ tang vật; bà Nguyệt vẫn giữ chị lại: "Cả thị xã đi qua cái tủ ấy gần một tuần. Người lớn duy nhất nhìn ra đồ giả là chị." Anh Quân bị phạt hành chính, rồi được cho về. Chị Lan và anh Tín không dính gì: một người chỉ đi gọi điện thoại, một người chỉ mang ảnh tới sai giờ.</p>
    <p>Xem cuốn sổ gọi đi xong, ông Bảo chỉ nói: "Ông nội tôi sang Ai Cập làm lính thợ, đổi tờ giấy ấy bằng ba tháng lương. Tôi chỉ đem đổi lại." Hỏi về người học trò, giáo sư Lâm im một lúc rồi nói: "Ba người thợ ấy làm cả đời để được ghi tên một dòng trong sổ lương. Tôi dạy nó đọc tên họ; tôi quên dạy nó rằng đó là người, không phải hàng." Còn về ông Bảo, ông chỉ nói: "Năm 1971, ông ấy mở tủ sắt cho tôi xem bằng hai tay."</p>
    <p>Mảnh thật đã về nên không có tổn thất; và dù có, điều khoản gian dối in sẵn trong phụ lục số 2 cũng loại trừ ông Bảo. Công ty không trả, và đã chuyển hồ sơ của ông Bảo cho công an.
      Phụ lục ấy là tôi ký, sau một cuộc điện thoại; tôi gửi nó cho bạn sau cùng, vì người ký nó là tôi. Hôm 10/11 tôi đã không tự hỏi vì sao một ông chủ lại xin thêm đúng hai chữ "đánh tráo". Từ nay mọi phụ lục nâng tiền bảo hiểm ở phòng này phải có chữ ký của hai người. Người thứ hai, nếu bạn đồng ý, là bạn.</p>
    <p>Bảo tàng mời bạn tới xem buổi đọc mảnh giấy cói trên truyền hình.</p>
    <p class="right" style="margin-top:18px">Trưởng phòng giám định<br><span class="sign">Thịnh</span><br><b>Lý Quốc Thịnh</b></p>
  </div>`,
};

const baoSau = {
  id: "bao_sau", stage: 5, kind: "Báo", label: "Báo Hoài Giang, 12/12 – trang văn hoá",
  html: () => `
  <div class="doc doc--news">
    ${dailyMast("1999-12-12", "Chủ nhật", "Năm Kỷ Mão", "2.192", "XXIV")}
    <div class="news-kicker">Văn hoá</div>
    <h1 class="news-head">Ba người thợ về lại Hoài Giang</h1>
    <div class="news-by">Võ Thị Kiều</div>
    <div class="news-cols" style="columns:2">
      <p class="dropcap">Sáng qua, trước ống kính Đài Phát thanh – Truyền hình tỉnh, chị Lê Thu Hà mở tủ P-07; lần này tay chị không run. Giáo sư Lâm Quang Tịnh không cầm kính lúp ngay. Ông đưa nó cho em Thảo lớp 8A trường Nguyễn Du: "Lần này em đọc trước."</p>
      <p>Hôm 14/11, em Thảo dò bảng chữ, nhìn con chim quay mặt về đâu thì đọc từ đó, ra dòng thứ hai là "W-S-N-KH"; cô giáo bảo em đọc sai. Nghe tin mất, chính em đòi cô Ngân đem tấm ảnh lớp tới công an: "Cô ơi, hôm đó em đọc ra tên khác thật mà."
        Sáng qua, em cúi xuống kính lúp: "Con chim cút quay mặt sang trái, vậy đọc từ trái: Khonsu. Rồi Iuy. Rồi Hori." "Em đọc đúng đấy", giáo sư nói. "Lần này mảnh giấy cũng đúng."</p>
      <p>Ngang tên Iuy có một vết gãy mới; giáo sư không cho dán: "Để nguyên. Nó cũng là một phần chuyện này." Tấm nhãn trong tủ vẫn là tấm thay chiều 12/11; ông đọc lại, không sửa chữ nào: "Nhãn thì nó dịch đúng."</p>
      <p>Được cơ quan điều tra đồng ý, bảo tàng kéo dài triển lãm tới hết tháng 12. Lớp 8A xin tới xem lần thứ hai; lần này các em mang theo bảng chữ và tự đọc. Tiệm ảnh 52 Lê Lợi đã treo bảng mới: "Phục chế ảnh cũ · Không nhận vẽ theo mẫu".</p>
      <p>Trong phòng bảo quản, đồng hồ treo tường đã được lên dây, kim chạy đúng giờ. Mảnh giấy cói được giữ ở bảo tàng cho tới khi toà xử vụ ông Trịnh Gia Bảo. "Ba người thợ ấy đi xa quá rồi, cho họ nghỉ ở đây một chút", giáo sư Lâm nói.</p>
      <p>Buổi ghi hình xong, chị Hà cài chốt khoá tủ P-07; lần này tiếng "tách" nghe rõ cả phòng.</p>
    </div>
  </div>`,
};

export const stage3 = [tongDai, soCong, phieuIn, khaiHa, khaiKhoa, khaiTin];
export const stage4 = [khaiLuc, phieuMuon, buuPham, soKhachSan, phuLuc, thuBao];
export const ending = [ketLuan, baoSau];
