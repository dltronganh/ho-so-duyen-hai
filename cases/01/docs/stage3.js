// Case 01, fourth folder (unlocked after question 3): the casting workshop's order slip, the hotel register,
// Tâm's statement, the debt letter, a page of Vũ's notebook, and the fisherman's find.
// Facts must agree with the case facts.js.
import { wd, age, id, dt, line, photo, stamp } from "../../../js/kit.js";
import { fisherPhoto } from "../art.js";
import { policeHead, statementSign, dailyMast, goldBox } from "../../../js/docparts.js";

const phieuDuc = {
  id: "phieu_duc", stage: 3, kind: "Phiếu", label: "Một tờ phiếu (thu tại làng đúc Phú Kiều)",
  html: () => `
  <div class="doc doc--receipt">
    <div class="receipt-head"><div class="small caps">Làng nghề đúc đồng Phú Kiều</div><h3>Xưởng đúc Ba Thành</h3>
      <div class="small">Chuông · lư · tượng · đồ thờ · phục chế đồ cổ</div></div>
    <p class="center"><b>PHIẾU NHẬN ĐẶT HÀNG</b> · số 0412 · <i>liên 1 (lưu xưởng)</i></p>
    <div class="receipt-line"><span>Ngày:</span><span class="v carbon">${wd("1996-12-02", "Thứ Hai")} ${dt("1996-12-02", "2/12/1996")}</span></div>
    <div class="receipt-line"><span>Khách hàng:</span><span class="v carbon">anh Vũ (Hoài Giang)</span></div>
    <div class="receipt-line"><span>Liên lạc:</span><span class="v carbon">nhắn tin 107 – 552 031</span></div>
    <div class="receipt-line"><span>Hàng đặt:</span><span class="v carbon">01 ấn núm lân, đế vuông 5 cm, cao 6,5 cm, làm theo ảnh mẫu khách đưa</span></div>
    <div class="receipt-line"><span>Chất liệu:</span><span class="v carbon">đồng thau, mạ vàng 24K, làm cũ</span></div>
    <div class="receipt-line"><span>Yêu cầu riêng:</span><span class="v carbon">tai lân làm lành lặn cả hai bên (ảnh mẫu bị sứt 1 tai, khách nói "để thờ cho đẹp"). Không khắc tên xưởng.</span></div>
    <div class="receipt-line"><span>Giá:</span><span class="v carbon">1.800.000 đ · Đặt cọc: 500.000 đ</span></div>
    <div class="receipt-line"><span>Hẹn giao:</span><span class="v carbon">${wd("1996-12-20", "Thứ Sáu")} ${dt("1996-12-20", "20/12")}</span></div>
    <p class="ink" style="margin-top:12px;transform:rotate(-2deg)">Đã giao hàng ${dt("1996-12-20", "20/12")}, nhận đủ tiền. – Thành</p>
    ${stamp("Đã thanh toán", "right:30px;top:120px", "rect")}
    <p class="small" style="font-size:15px;color:#555;margin-top:14px">Công an thị xã thu tại xưởng Ba Thành ngày ${dt("1997-03-19", "19-3-1997")}, khi đi hỏi các xưởng đúc Phú Kiều có ai từng đúc ấn núm lân.</p>
  </div>`,
};

/** Hotel register rows: [arrival, departure, name, ID number, from, room, purpose]. */
const GUESTS_DEC = [
  ["19/12", "20/12", "Lê Hoàng Phúc", "201 220 418", "Đà Nẵng", "102", "công tác"],
  ["20/12", "22/12", "Bùi Thị Lan", "211 090 377", "Quy Nhơn", "201", "thăm người nhà"],
  ["21/12", "23/12", "Hồ Minh Tâm", "022 615 390", "TP. Hồ Chí Minh", "204", "buôn bán"],
  ["22/12", "24/12", "Kiều Văn Sơn", "205 664 012", "Hội An", "103", "du lịch"],
];

const khachSan = {
  id: "khach_san", stage: 3, kind: "Sổ sách", label: "Sổ đăng ký khách trọ – Khách sạn Sông Hoài",
  html: () => {
    const row = (r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3] === "022 615 390" ? id("tam", r[3]) : r[3]}</td><td>${r[4]}</td><td>${r[5]}</td><td>${r[6]}</td></tr>`;
    return `
  <div class="doc doc--ledger">
    <div class="ledger-head"><div class="small caps">Khách sạn Sông Hoài · 18 Bạch Đằng · Hoài Giang</div><h3>Sổ đăng ký khách trọ</h3>
      <div>Bản sao trích các trang tháng 12-1996 và tháng 3-1997, theo yêu cầu của Công an thị xã</div></div>
    <table class="ledger">
      <tr><th>Ngày đến</th><th>Ngày đi</th><th>Họ tên khách</th><th>Số CMND</th><th>Từ đâu tới</th><th>Phòng</th><th>Mục đích</th></tr>
      <tr><td class="p" colspan="7"><b>Tháng 12 năm 1996</b></td></tr>
      ${GUESTS_DEC.map(row).join("")}
      <tr><td class="p" colspan="7"><b>Tháng 3 năm 1997</b></td></tr>
      ${row(["13/3", "17/3", "Nguyễn Văn Bình", "201 115 908", "Đà Nẵng", "101", "công tác"])}
      ${row(["14/3", "18/3", "Hồ Minh Tâm", "022 615 390", "TP. Hồ Chí Minh", "204", "dự triển lãm"])}
    </table>
    ${stamp("Công an<br>thị xã<br>Hoài Giang<br>Bản sao", "right:40px;bottom:20px")}
  </div>`;
  },
};

const khaiTam = {
  id: "khai_tam", stage: 3, kind: "Lời khai", label: "Lời khai ông Hồ Minh Tâm",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">BIÊN BẢN GHI LỜI KHAI</div>
    <div class="typed-sub">Hồi 15 giờ, ${wd("1997-03-17", "thứ Hai")} ngày ${dt("1997-03-17", "17-3-1997")}</div>
    <p>Người khai: <b>Hồ Minh Tâm</b>, ${age("tam", "1997-03-17", 45)} tuổi, CMND số ${id("tam", "022 615 390")}, chủ cửa hàng đồ cổ Minh Tâm, quận 1, TP. Hồ Chí Minh.</p>
    <div class="qa">
      ${line("tam-1", "Đ: Tôi được bà Nguyệt mời dự khai mạc vì tôi tài trợ tiền in sách giới thiệu triển lãm.")}
      ${line("tam-2", "Đ: Đây là lần đầu tôi tới Hoài Giang. Tôi xuống sân bay Đà Nẵng rồi đi xe vô, ở khách sạn Sông Hoài.")}
      ${line("tam-3", "Đ: Trước buổi khai mạc tôi không quen biết ai trong gia đình cụ Khải.")}
      ${line("tam-4", "Đ: Lúc mất điện tôi ngồi hàng ghế đầu, cạnh cụ Khải, không rời ghế. Cụ còn nắm tay tôi hỏi chuyện suốt.")}
      ${line("tam-5", "Đ: Tôi có đăng quảng cáo thu mua đồ cổ trên báo địa phương. Ai có đồ thì nhắn tin cho tôi, chuyện đó bình thường trong nghề.")}
      ${line("tam-6", "Đ: Tôi chưa từng mua bán gì với gia đình cụ Khải. Kim ấn thì tôi chỉ thấy qua tủ kính.")}
    </div>
    ${statementSign("Tâm", "Hồ Minh Tâm")}
  </div>`,
};

const doiNo = {
  id: "doi_no", stage: 3, kind: "Thư tay", label: "Mảnh giấy gửi anh Vũ (thu tại nhà)",
  html: () => `
  <div class="doc doc--hand red-ink" style="width:560px">
    <p class="right">${dt("1996-10-12", "12/10/96")}</p>
    <p>Vũ,</p>
    <p>Tính tới nay em thiếu chị 85 triệu, cả gốc lẫn lời. Chị nể ông già em nên cho em tới trước Tết.
      Qua Tết mà chưa đủ thì đừng trách chị tới tận nhà nói chuyện với ông già em.</p>
    <p class="hand-sign" style="color:#5a1f1a">Tư Lựu</p>
    <div class="gap"></div>
    <p style="color:#22355f;transform:rotate(-3deg)">Đã nhận đủ 85.000.000 đ. Ngày ${dt("1996-12-28", "28/12/1996")}. — Lựu</p>
    <p class="small" style="font-size:15px;color:#555;margin-top:18px">Thu giữ tại phòng riêng của Tôn Thất Vũ, 9 Lê Lợi, ngày ${dt("1997-03-19", "19-3-1997")}.</p>
  </div>`,
};

const soTayVu = {
  id: "so_tay_vu", stage: 3, kind: "Sổ tay", label: "Một trang sổ tay (thu tại nhà anh Vũ)",
  html: () => `
  <div class="doc doc--grid">
    <p>2/12 – P.K. – cọc 500 – dặn: tai làm lành</p>
    <p>18/12 – nhắn 107-889 412. Hẹn 21/12.</p>
    <p>20/12 – lấy hàng. Đủ 1tr8.</p>
    <p>21/12 – P.204, 9h tối. Mang hộp.</p>
    <p>28/12 – TL: XONG!!!</p>
    <p>&nbsp;</p>
    <p>5/3 – BT mượn??!! Ông già gật rồi.</p>
    <p>14/3 – Đ. cân. Nó nghi?</p>
    <p>17/3 – 8h – Huế: CÂN + đối ảnh!!!</p>
    <p class="small" style="font-size:15px;color:#555;margin-top:14px;font-family:'Plex Mono'">Thu giữ tại phòng riêng của Tôn Thất Vũ, ${dt("1997-03-19", "19-3-1997")}. Chữ viết tay, bút bi xanh.</p>
  </div>`,
};

const bao19 = {
  id: "bao_19", stage: 3, kind: "Báo", label: "Báo Hoài Giang, thứ Tư 19/3 – trang 2",
  html: () => `
  <div class="doc doc--news">
    ${dailyMast("1997-03-19", "Thứ Tư", "Nhằm ngày 11 tháng 2 năm Đinh Sửu", "1.287")}
    <div class="news-grid" style="grid-template-columns: 2.05fr 1fr">
      <div>
        <div class="news-kicker">Đời sống – Bạn đọc</div>
        <h2 class="news-head sm">Ngư dân vớt được "vật lạ" dưới chân cầu Đá</h2>
        ${photo(fisherPhoto(), "Ông Trương Văn Bảy bên bến cầu Đá, nơi ông kéo lưới sáng thứ Ba. Ảnh: <b>Minh Đức</b>")}
        <div class="news-cols" style="columns:2">
          <p class="dropcap">Sáng ${wd("1997-03-18", "thứ Ba")} ${dt("1997-03-18", "18-3")}, ông Trương Văn Bảy (${age("bay", "1997-03-18", 61)} tuổi, phường 2) thả lưới dưới chân cầu Đá
            như mọi ngày. Kéo lên, ông thấy lưới vướng một vật kim loại màu vàng, hình con thú ngồi trên đế vuông, bám đầy bùn.</p>
          <p>"Tôi tưởng vớ được vàng, mừng run", ông Bảy cười. Ông mang tới tiệm vàng Kim Thành nhờ cân bằng cân tiểu ly: <b>gần tròn 5 lượng</b>.
            Nhưng khi chủ tiệm thử bằng axit thì lớp vàng bên ngoài bong ra, lộ màu đồng: vật này không phải vàng.</p>
          <p>Ông Bảy đã giao vật lạ cho Công an phường 2 ngay trong buổi sáng. "Của người ta đánh rơi thì trả người ta", ông nói.</p>
          <p>Được biết bãi bồi dưới chân cầu Đá nằm ngay cuối hẻm 12, cạnh Bảo tàng thị xã: từ cửa sau bảo tàng đi bộ ra chỉ vài phút.</p>
        </div>
      </div>
      <div>
        ${goldBox("4.180.000", "4.205.000")}
        <div class="news-box"><h4>Tin ngắn</h4>
          <p class="small"><b>Vụ kim ấn.</b> Công an thị xã cho biết đã thu thập thêm nhiều tài liệu quan trọng và đề nghị người dân không tung tin đồn.</p>
          <p class="small"><b>Lịch cắt điện.</b> Sáng Chủ Nhật 23-3, cắt điện khu vực chợ để sửa trạm biến áp.</p>
        </div>
        <div class="news-ad"><div class="big">Thu mua đồ cổ</div><div class="script">Hồ Minh Tâm</div><p class="small" style="margin:0">Nhắn tin: <b>107 – 889 412</b></p></div>
      </div>
    </div>
  </div>`,
};

export default [phieuDuc, khachSan, khaiTam, doiNo, soTayVu, bao19];
