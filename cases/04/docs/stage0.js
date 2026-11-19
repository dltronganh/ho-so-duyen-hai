// Case 04, first folder: what the insurance assessor receives on Friday 19/11/1999.
// Facts must agree with the case facts.js. Times on the humidity chart are 3 h 30 min ahead of true time (facts.CHART_AHEAD_MIN).
import { wd, at, dt, stamp } from "../../../js/kit.js";
import { policeHead, officeHead } from "../../../js/docparts.js";
import { humidityChart, floorPlan } from "../art.js";

const giaoViec = {
  id: "giao_viec", stage: 0, kind: "Thư", label: "Thư giao việc của trưởng phòng giám định",
  html: () => `
  <div class="doc doc--weekly">
    <div class="weekly-head">
      <div class="weekly-logo">PN</div>
      <div class="weekly-name">Bảo hiểm Phương Nam<small>Chi nhánh Hoài Giang · 18 Trần Phú · Điện thoại 82 660</small></div>
    </div>
    <p class="right"><i>Hoài Giang, ${wd("1999-11-19", "thứ Sáu")} ${dt("1999-11-19", "19 tháng 11 năm 1999")}</i></p>
    <p>Gửi giám định viên,</p>
    <p>Sáng nay bảo tàng Hoài Giang báo mất hiện vật <b>P-07</b> của triển lãm "Giấy cói và chữ thần: Ai Cập cổ đại": một mảnh giấy cói cỡ hai bàn tay,
      của ông <b>Trịnh Gia Bảo</b> (Việt kiều ở Marseille) cho mượn. Hiện công ty mình bảo hiểm mảnh này <b>30.000 đô la Mỹ</b> cho tới ngày trả lại chủ.
      Trưa nay ông Bảo đã nộp đơn đòi bồi thường.</p>
    <p>Hợp đồng gốc ghi rõ (hồ sơ còn một phụ lục, tôi gửi sau): công ty chỉ bồi thường khi <b>chính mảnh giấy cói đã được giám định lúc nhận vào bảo tàng</b> bị mất. Nếu thứ bị mất không phải mảnh đó, hay mảnh thật
      vẫn còn ở đâu đó, công ty không trả mà phải báo công an.</p>
    <p>Tủ kính không bị phá khoá, cửa bảo tàng không bị cạy. Anh Phát bên công an thị xã cho mình chép biên bản và sổ sách (<u>không được đưa cho ai</u>).
      Bảo tàng cho mượn sổ theo dõi tủ, bản chụp giấy biểu đồ của máy ghi độ ẩm đặt trong tủ, thông báo dán ở sảnh, và trang hướng dẫn của máy.</p>
    <p>Tôi cần câu trả lời có giấy tờ chứng minh cho từng câu hỏi.</p>
    <p class="right" style="margin-top:18px">Trưởng phòng giám định<br><span class="sign">Thịnh</span><br><b>Lý Quốc Thịnh</b></p>
    ${stamp("Bảo hiểm<br>Phương Nam<br>★<br>Hoài Giang", "left:60px;bottom:40px", "blue")}
  </div>`,
};

const bienBan = {
  id: "bien_ban", stage: 0, kind: "Biên bản", label: "Biên bản khám nghiệm hiện trường",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">BIÊN BẢN KHÁM NGHIỆM HIỆN TRƯỜNG</div>
    <div class="typed-sub">Từ ${at("police_in", "7 giờ 30")} tới 8 giờ 40, ${wd("1999-11-19", "thứ Sáu")} ngày ${dt("1999-11-19", "19-11-1999")}</div>
    <p>Địa điểm: Bảo tàng Hoài Giang, Phòng 3 (khu trưng bày "Đời sống làng thợ"), tủ trưng bày số P-07.</p>
    <p>Có mặt: bà Phan Thị Nguyệt, giám đốc bảo tàng; ông Tạ Văn Lực, bảo vệ ca đêm 18/11; bà Út Mai, lao công.</p>
    <p>1. Lúc ${at("case_found", "7 giờ 05")}, bà Út Mai bật đèn các tủ Phòng 3 thì thấy giá đỡ trong tủ P-07 trống, báo bảo vệ.
      Bảo tàng cho biết ban đêm đèn trong tủ trưng bày tắt; bảo vệ tuần bằng đèn pin, đứng ở cửa các phòng.</p>
    <p>2. Tủ P-07: cửa kính khép hờ, còn hở chừng một ngón tay; chốt khoá không cài. Ổ khoá, bản lề, kính không có dấu cạy phá. Trong tủ còn: giá đỡ bọc vải, nhãn chú thích, hai túi hút ẩm,
      một máy tự ghi nhiệt ẩm kiểu TH-7 đang chạy. Không còn mảnh giấy cói.</p>
    <p>3. Tháo trống máy ghi, thu tờ giấy biểu đồ làm tang vật. Không đặt giấy mới. Giấy biểu đồ dự trữ cất ở phòng bảo quản cạnh Phòng 3 (phòng không có cửa sổ); đồng hồ treo tường của phòng bảo quản đứng, kim chỉ 12 giờ 40.</p>
    <p>4. Theo bà Nguyệt: tủ P-07 có hai chìa. Một chiếc do chị Lê Thu Hà, cán bộ bảo quản, giữ. Một chiếc dự phòng do bảo tàng quản lý.</p>
    <p>5. Các cửa ra vào bảo tàng và cửa sổ không có dấu cạy phá. Bảo vệ đêm khai đã khoá cửa chính lúc 20 giờ 26 và không mở cho tới 6 giờ 50.</p>
    <div class="typed-sign"><div>ĐẠI DIỆN BẢO TÀNG<div class="sign">Nguyệt</div>Phan Thị Nguyệt</div>
      <div>CÁN BỘ KHÁM NGHIỆM<div class="sign">Phát</div>Huỳnh Tấn Phát</div></div>
  </div>`,
};

const bieuDo = {
  id: "bieu_do", stage: 0, kind: "Biểu đồ", label: "Giấy biểu đồ độ ẩm trong tủ P-07 (tang vật)",
  html: () => `
  <div class="doc doc--map" style="width:1400px">
    ${humidityChart()}
    <p class="copy-note">Tang vật thu sáng 19-11-1999. Bút ghi mực tím. Tờ giấy được chụp lại nguyên khổ.</p>
  </div>`,
};

const huongDan = {
  id: "huong_dan", stage: 0, kind: "Tài liệu", label: "Trang hướng dẫn của máy tự ghi nhiệt ẩm TH-7",
  html: () => `
  <div class="doc doc--brochure">
    <div class="brochure-num">Hướng dẫn sử dụng · bản dịch tiếng Việt · trang 3</div>
    <div class="brochure-title">Máy tự ghi nhiệt ẩm TH-7</div>
    <p style="margin-top:12px"><b>Trống quay.</b> Trống giấy do đồng hồ lên dây cót quay mỗi tuần một vòng. Giấy biểu đồ tuần in sẵn bảy cột ngày, từ Thứ Hai lúc 0 giờ tới Chủ nhật lúc 24 giờ.
      Mỗi ô nhỏ ứng với 30 phút. Đồng hồ trống chạy sai không quá 15 phút mỗi tuần.</p>
    <p><b>Thay giấy.</b> Nhấc cần bút khỏi giấy. Tháo trống, quấn tờ giấy mới, kẹp mép. Lắp trống, xoay trống bằng tay cho đầu bút chỉ đúng ngày giờ lúc đó. Hạ cần bút.</p>
    <p><b>Đặt trong tủ kín.</b> Trong tủ trưng bày đóng kín, độ ẩm thay đổi rất chậm và gần như đứng yên. Khi cửa tủ mở, độ ẩm trong tủ đổi nhanh theo độ ẩm của phòng.
      Đóng tủ lại, độ ẩm từ từ trở về mức cũ trong một vài giờ, nhờ túi hút ẩm.</p>
    <p><b>Giữ tủ ổn định.</b> Giấy cói nên giữ ở độ ẩm 45–55%. Thay túi hút ẩm khi độ ẩm trong tủ vượt 55%.</p>
    <p class="small muted" style="margin-top:14px">Bản dịch kèm máy, do công ty thiết bị cung cấp cho bảo tàng năm 1996.</p>
  </div>`,
};

/** Case log rows: [ISO date, weekday, open, close, opened by, work, notes]. */
const OPENINGS = [
  ["1999-11-05", "Thứ Sáu", ["install_start", "14:00"], ["install_end", "16:10"], "Hà", "Lắp mảnh P-07 lên giá đỡ, đặt máy ghi nhiệt ẩm, lắp giấy tuần", "có ông Bảo, người dịch nhãn"],
  ["1999-11-08", "Thứ Hai", [null, "sáng"], [null, ""], "Hà", "Thay giấy biểu đồ tuần", "bảo tàng nghỉ"],
  ["1999-11-09", "Thứ Ba", ["reshoot_open", "08:40"], ["reshoot_close", "09:20"], "Hà", "Chụp lại mảnh P-07 cho catalogue in lần 2", "thợ ảnh Bùi Văn Tín"],
  ["1999-11-10", "Thứ Tư", [null, "09:00"], [null, "09:15"], "Hà", "Kiểm tra giá đỡ (mảnh giấy hơi võng)", "người dịch nhãn ghé xem"],
  ["1999-11-12", "Thứ Sáu", ["label_open", "15:05"], ["label_close", "15:40"], "Hà", "Thay nhãn chú thích theo bản dịch mới", "người dịch nhãn cùng làm"],
  ["1999-11-15", "Thứ Hai", [null, "sáng"], [null, ""], "Hà", "Thay giấy biểu đồ tuần", "bảo tàng nghỉ"],
  ["1999-11-15", "Thứ Hai", ["wipe_open", "10:30"], ["wipe_close", "10:40"], "Hà", "Lau mặt trong kính tủ (bụi)", ""],
  ["1999-11-15", "Thứ Hai", ["silica_open", "14:00"], ["silica_close", "14:20"], "Hà", "Thay hai túi hút ẩm (định kỳ)", ""],
];

const soTu = {
  id: "so_tu", stage: 0, kind: "Sổ sách", label: "Sổ theo dõi tủ trưng bày P-07",
  html: () => {
    const t = ([ev, text]) => ev ? at(ev, text) : text;
    return `
  <div class="doc doc--ledger">
    <div class="ledger-head"><div class="small caps">Bảo tàng Hoài Giang · Phòng bảo quản</div>
      <h3>Sổ theo dõi tủ trưng bày P-07</h3>
      <div>Hiện vật: mảnh giấy cói P-07 (ông Trịnh Gia Bảo cho mượn) · Ai mở tủ phải ghi vào sổ</div></div>
    <table class="ledger">
      <tr><th>Ngày</th><th>Mở</th><th>Đóng</th><th>Người mở</th><th>Việc</th><th>Ghi chú</th></tr>
      ${OPENINGS.map((r) => `<tr><td>${wd(r[0], r[1])} ${dt(r[0], r[0].slice(8).replace(/^0/, "") + "/11")}</td><td>${t(r[2])}</td><td>${t(r[3])}</td><td>${r[4]}</td><td style="font-size:16px">${r[5]}</td><td style="font-size:16px">${r[6]}</td></tr>`).join("")}
      <tr class="blank"><td>.</td><td></td><td></td><td></td><td></td><td></td></tr>
    </table>
    <p class="copy-note">Bản chụp sổ gốc, bảo tàng cho mượn. Giờ ghi theo đồng hồ đeo tay của người mở tủ.</p>
  </div>`;
  },
};

/** Night log rows: [event key or null, time text, entry]. */
const NIGHT = [
  [null, "17:00", "Nhận ca của anh Bình (ca ngày). Nhận đủ các chùm chìa phòng."],
  [null, "17:05", "Đóng cửa trưng bày, tắt đèn tủ các phòng."],
  [null, "18:10", "Mở hội trường cho buổi nói chuyện. Khách vào cửa chính, chỉ đi sảnh và hội trường."],
  [null, "18:15", "Tưới mấy chậu kiểng ngoài sân."],
  ["talk_start", "18:30", "Buổi nói chuyện của GS Lâm bắt đầu. Chừng 40 khách."],
  ["talk_end", "19:45", "Hết buổi nói chuyện."],
  ["quan_out", "19:50", "Anh Quân (cháu ông Bảo) ra về."],
  ["kieu_out", "19:51", "Chị Kiều (báo Hoài Giang) ra về."],
  ["ha_out", "19:52", "Chị Hà (bảo quản) ra về."],
  ["lam_out", "19:53", "GS Lâm ra về, con trai đón bằng xe máy (giáo sư mắt kém, không đi xe tối)."],
  ["lan_out", "19:54", "Chị Lan (hành chính) ra về."],
  ["guests_out", "19:56", "Khách cuối cùng ra. Khoá hội trường."],
  ["ring_out", "19:58", "Anh Khoa (người dịch) mượn chùm chìa Phòng 3 để cất máy chiếu vào kho Phòng 3."],
  ["ha_back", "20:02", "Một chị nhân viên quay lại, nói bỏ quên áo mưa trong phòng làm việc. Đi vào trong."],
  ["ring_back", "20:21", "Anh Khoa trả chùm chìa Phòng 3, ra về."],
  ["ha_leaves", "20:26", "Chị nhân viên ra về. Khoá cửa chính."],
  ["round_1", "21:00", "Tuần các phòng. Cửa Phòng 3 anh Khoa chỉ khép, tôi khoá lại. Bình thường."],
  ["round_2", "23:30", "Tuần Phòng 3 và phòng bảo quản. Bình thường."],
  ["round_3", "02:00", "Tuần các phòng. Bình thường."],
  ["round_4", "05:00", "Tuần các phòng. Bình thường."],
  ["cleaner_in", "06:50", "Mở cửa cho bà Út Mai (lao công)."],
  ["case_found", "07:05", "Bà Mai báo tủ P-07 trống. Gọi công an, gọi bà giám đốc."],
];

const soTruc = {
  id: "so_truc", stage: 0, kind: "Sổ sách", label: "Sổ trực của bảo vệ đêm 18/11",
  html: () => `
  <div class="doc doc--ledger">
    <div class="ledger-head"><div class="small caps">Bảo tàng Hoài Giang · Phòng bảo vệ</div>
      <h3>Sổ trực ca đêm</h3>
      <div>Đêm ${wd("1999-11-18", "thứ Năm")} ${dt("1999-11-18", "18/11")} rạng sáng ${wd("1999-11-19", "thứ Sáu")} ${dt("1999-11-19", "19/11/1999")} · Trực: Tạ Văn Lực</div></div>
    <table class="ledger">
      <tr><th style="width:90px">Giờ</th><th>Việc</th></tr>
      ${NIGHT.map(([ev, time, text]) => `<tr><td>${ev ? at(ev, time) : time}</td><td style="font-size:18px">${text}</td></tr>`).join("")}
    </table>
    <p class="copy-note">Bản chép của công an từ sổ gốc. Giờ ghi theo đồng hồ treo tường phòng bảo vệ, công an đã so: đúng giờ đài.</p>
  </div>`,
};

const thongBao = {
  id: "thong_bao", stage: 0, kind: "Thông báo", label: "Thông báo dán ở sảnh bảo tàng",
  html: () => `
  <div class="doc doc--typed">
    ${officeHead("SỞ VĂN HOÁ – THÔNG TIN", "Bảo tàng Hoài Giang")}
    <div class="typed-title">THÔNG BÁO</div>
    <div class="typed-sub">Hoài Giang, ${wd("1999-11-17", "thứ Tư")} ngày ${dt("1999-11-17", "17-11-1999")}</div>
    <p>1. Lúc ${at("talk_start", "18 giờ 30")} ${wd("1999-11-18", "thứ Năm")} ${dt("1999-11-18", "18-11")}, tại hội trường: buổi nói chuyện
      "Đọc chữ của người thợ Thung lũng" của Giáo sư <b>Lâm Quang Tịnh</b>. Vào cửa tự do.</p>
    <p>2. Lúc ${at("tv_reading", "9 giờ")} ${wd("1999-11-19", "thứ Sáu")} ${dt("1999-11-19", "19-11")}, Đài Phát thanh – Truyền hình tỉnh ghi hình
      Giáo sư Lâm <b>đọc trực tiếp mảnh giấy cói P-07</b> bằng kính lúp. Tủ P-07 sẽ được mở; chị Hà (phòng bảo quản) chuẩn bị. Phòng 3 tạm đóng tới 10 giờ. Ông Bảo, chủ hiện vật, mời đài; đài vừa nhận lời chiều nay.</p>
    <p>3. Triển lãm mở cửa từ 8 giờ tới 17 giờ, nghỉ thứ Hai, tới hết ${wd("1999-11-21", "Chủ nhật")} ${dt("1999-11-21", "21-11-1999")}.</p>
    <div class="typed-sign"><div></div><div>GIÁM ĐỐC<div class="sign">Nguyệt</div>Phan Thị Nguyệt</div></div>
  </div>`,
};

const soDo = {
  id: "so_do", stage: 0, kind: "Sơ đồ", label: "Sơ đồ bảo tàng Hoài Giang (công an vẽ)",
  html: () => `
  <div class="doc doc--map">
    ${floorPlan()}
  </div>`,
};

export default [giaoViec, bienBan, bieuDo, huongDan, soTu, soTruc, thongBao, soDo];
