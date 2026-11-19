// Case 02, third folder (after question 2): the widow article with the poem, the telegram, the sender's form
// from Phan Thiết, and the Phan Thiết clerk's account. Facts must agree with the case facts.js.
import { wd, id, at, dt, lunar, line, photo, stamp } from "../../../js/kit.js";
import { policeHead, officeHead, statementSign, dailyMast } from "../../../js/docparts.js";
import { widowPhoto } from "../art.js";
import { POEM, TELEGRAM_CODE } from "../facts.js";

const bao15 = {
  id: "bao_15", stage: 2, kind: "Báo", label: "Báo Hoài Giang, Chủ Nhật 15/2 – trang 3",
  html: () => `
  <div class="doc doc--news">
    ${dailyMast("1998-02-15", "Chủ Nhật", `Nhằm ngày ${lunar("1998-02-15", "19 tháng Giêng")} năm Mậu Dần`, "1.548", "XXIII")}
    <div class="news-grid" style="grid-template-columns: 1fr 1.1fr">
      <div>
        ${photo(widowPhoto(), "Bà Lan bên bàn thờ vọng, trên vách là bài thơ chồng chép tặng năm cưới. Ảnh: <b>Minh Đức</b>")}
        <div class="news-box" style="text-align:center">
          <h4>Gửi Lan</h4>
          ${POEM.map((l) => `<p style="margin:0;font-family:'Dancing Script',cursive;font-size:21px">${l}</p>`).join("")}
          <p style="margin:6px 0 0;font-family:'Dancing Script',cursive;font-size:19px">Hai · mồng 2 Tết Bính Thìn</p>
        </div>
      </div>
      <div>
        <div class="news-kicker">Phóng sự</div>
        <h2 class="news-head sm">Nước mắt bên bài thơ cũ</h2>
        <div class="news-by">Thu Hằng</div>
        <p class="dropcap">Căn nhà số 21 Trần Phú lặng ngắt. Trên bàn thờ vọng, nén nhang cháy dở. Bà Hồ Thị Ngọc Lan ngồi lặng dưới khung kính treo bài thơ lục bát chép tay đã ngả vàng.</p>
        <p>"Năm cưới, mồng 2 Tết, ảnh chép tặng tôi. Hai mươi hai năm rồi, đi đâu ảnh cũng thuộc", bà nói. Ông Thành là con trưởng trong nhà.</p>
        <p>Hàng xóm cho biết mấy ngày nay bà Lan gần như không ra khỏi nhà. Sáng thứ Bảy, hàng xóm thấy bưu tá mang tới một bức điện; bà nhận rồi đóng cửa.</p>
        <p>Vụ việc vẫn đang được công an thị xã điều tra. Lê Văn Tư, thợ ghe của ông Thành, vẫn bị tạm giữ.</p>
      </div>
    </div>
  </div>`,
};

const dienTin = {
  id: "dien_tin", stage: 2, kind: "Điện tín", label: "Bản lưu một bức điện tại bưu điện thị xã",
  html: () => `
  <div class="doc doc--receipt" style="width:640px;background-color:#f1ecd8">
    <div class="receipt-head"><div class="small caps">Tổng cục Bưu điện · Bưu điện thị xã Hoài Giang</div><h3>ĐIỆN TÍN</h3><div class="small">Bản lưu tại bưu cục nhận</div></div>
    <div class="receipt-line"><span>Số:</span><span class="v" style="font-family:'Plex Mono';font-size:16px">PT 0214/37</span></div>
    <div class="receipt-line"><span>Nơi gửi:</span><span class="v" style="font-family:'Plex Mono';font-size:16px">PHAN THIET · 14/2 · 08G30</span></div>
    <div class="receipt-line"><span>Nhận lúc:</span><span class="v" style="font-family:'Plex Mono';font-size:16px">${at("telegram_received", "09G20")} ${dt("1998-02-14", "14/2/98")}</span></div>
    <div class="receipt-line"><span>Gửi:</span><span class="v" style="font-family:'Plex Mono';font-size:16px">HO THI NGOC LAN · 21 TRAN PHU · HOAI GIANG</span></div>
    <div style="border:1.5px solid #555;padding:14px;margin:14px 0;background:#fff;font-family:'Plex Mono';font-size:21px;letter-spacing:.06em;line-height:1.6">
      LAN THUONG<br>${TELEGRAM_CODE}<br>HAI
    </div>
    <p class="small">Người nhận ký: <span class="sign" style="font-size:22px">Lan</span> · Phát tại nhà lúc 9g40.</p>
    <p class="copy-note">Bản lưu do Bưu điện thị xã cung cấp cho Công an thị xã ngày ${dt("1998-02-16", "16-2-1998")}.</p>
    ${stamp("Bưu điện<br>Hoài Giang<br>14-2-98", "right:30px;top:90px", "blue")}
  </div>`,
};

const phieuDien = {
  id: "phieu_dien", stage: 2, kind: "Phiếu", label: "Phiếu gửi điện tín ở Phan Thiết (bản fax)",
  html: () => `
  <div class="doc doc--receipt" style="width:640px;background-color:#ececec;filter:contrast(1.05)">
    <div class="receipt-head"><div class="small caps">Bưu điện tỉnh Bình Thuận · Bưu cục Phan Thiết</div><h3>Phiếu gửi điện tín</h3><div class="small">Bản fax gửi Công an thị xã Hoài Giang</div></div>
    <div class="receipt-line"><span>Người gửi:</span><span class="v">Mạc Văn Thọ</span></div>
    <div class="receipt-line"><span>CMND:</span><span class="v">${id("tho", "205 388 412")}</span></div>
    <div class="receipt-line"><span>Địa chỉ:</span><span class="v">nhà trọ Hải Âu, 12 Ngư Ông, Phan Thiết</span></div>
    <div class="receipt-line"><span>Người nhận:</span><span class="v">Hồ Thị Ngọc Lan, 21 Trần Phú, Hoài Giang</span></div>
    <div class="receipt-line"><span>Nội dung:</span><span class="v">LAN THUONG ${TELEGRAM_CODE} HAI</span></div>
    <div class="receipt-line"><span>Ngày gửi:</span><span class="v">${dt("1998-02-14", "14/II/98")} – ${at("telegram_sent", "8g30")}</span></div>
    <div class="receipt-line"><span>Số chữ:</span><span class="v">14 · Cước: 7.000 đ</span></div>
    <p class="small" style="margin-top:10px">Người gửi ký: <span class="sign" style="font-size:24px">Thọ</span></p>
    <p class="copy-note">Phần chữ viết tay là của người gửi. Phần đánh số, đóng dấu là của bưu cục.</p>
  </div>`,
};

const khaiBuuDien = {
  id: "khai_buu_dien", stage: 2, kind: "Ghi chép", label: "Ghi chép điện thoại với bưu cục Phan Thiết",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">BIÊN BẢN GHI NHẬN THÔNG TIN</div>
    <div class="typed-sub">Qua điện thoại, hồi 15 giờ, ${wd("1998-02-16", "thứ Hai")} ngày ${dt("1998-02-16", "16-2-1998")}</div>
    <p>Người cung cấp: chị Nguyễn Thị Hoà, nhân viên giao dịch Bưu cục Phan Thiết, người nhận bức điện số PT 0214/37.</p>
    <div class="qa">
      ${line("hoa-1", "Đ: Sáng thứ Bảy, có một ông chừng năm mươi tuổi, tóc hoa râm, nói giọng miền Trung, chắc là người ở quê bức điện gửi về, gửi bức điện toàn số.")}
      ${line("hoa-2", "Đ: Ông tự điền phiếu, đưa chứng minh nhân dân cho tôi chép số. Tôi không để ý kỹ ảnh trên chứng minh, ảnh cũ mờ lắm.")}
      ${line("hoa-3", "Đ: Tay trái ông quấn khăn tay, ông viết bằng tay phải. Ông viết chậm, nắn nót từng con số, đếm chữ hai lần rồi mới trả tiền.")}
      ${line("hoa-4", "Đ: Gửi xong ông hỏi đường tới trạm y tế phường Đức Thắng.")}
    </div>
    <div class="typed-sign"><div></div><div>CÁN BỘ GHI NHẬN<div class="sign">Phát</div>Huỳnh Tấn Phát</div></div>
  </div>`,
};

export default [bao15, dienTin, phieuDien, khaiBuuDien];
