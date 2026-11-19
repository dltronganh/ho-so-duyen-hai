// Case 01, third folder (unlocked after question 2): the family's 1985 ledger, the exhibition catalogue page,
// Định's letter from Huế, and the museum's request letter announcing Monday's appraisal.
// Facts must agree with the case facts.js.
import { wd, dt, photo, stamp } from "../../../js/kit.js";
import { sealPhoto, ledgerSketch } from "../art.js";
import { officeHead } from "../../../js/docparts.js";

const keKhai = {
  id: "ke_khai", stage: 2, kind: "Sổ sách", label: "Sổ kê khai đồ thờ họ Tôn Thất (bản chép)",
  html: () => `
  <div class="doc doc--old">
    <div class="old-title">Sổ kê khai đồ thờ tự</div>
    <p class="center" style="margin:0">họ Tôn Thất, chi cụ Tổng đốc Tôn Thất Hoài<br>lập năm Ất Sửu (1985), con cháu đời thứ tư là Tôn Thất Khải kính ghi</p>
    <hr class="old-rule">
    <table class="old-table">
      <tr><th style="width:44px">Số</th><th style="width:170px">Tên đồ</th><th>Mô tả</th></tr>
      <tr><td>1</td><td>Kim ấn "Hoài Giang trấn thủ"</td>
        <td>Vàng ròng. Núm đúc hình con lân, đế vuông.<br>Nặng <b>11 lượng 2 chỉ</b> (nhờ tiệm vàng Kim Thành cân năm 1985).<br>
          Tai trái con lân bị sứt, do năm 1947 chạy giặc làm rơi xuống nền gạch.<br>${ledgerSketch()}</td></tr>
      <tr><td>2</td><td>Lư hương đồng</td><td>Ba chân, nắp hình lân, cao 1 thước ta.</td></tr>
      <tr><td>3</td><td>Bộ đồ trà men lam</td><td>Một ấm, bốn chén, một dĩa. Một chén mẻ miệng.</td></tr>
      <tr><td>4</td><td>Sắc phong</td><td>Hai đạo, giấy dó, đựng ống tre sơn son.</td></tr>
    </table>
    <p style="margin-top:12px;font-size:20px">Đồ thờ để trong hộp gỗ trên bàn thờ chính. Con cháu không được cầm cố, mua bán.</p>
    ${stamp("Bảo tàng thị xã<br>Hoài Giang<br>Đã nhận bản chép<br>10-3-1997", "right:24px;top:18px")}
  </div>`,
};

const catalogue = {
  id: "catalogue", stage: 2, kind: "Ấn phẩm", label: "Trang rời giới thiệu hiện vật số 01",
  html: () => `
  <div class="doc doc--brochure">
    <div class="brochure-num">Triển lãm "Hoài Giang 100 năm" · Hiện vật số 01 · trang rời</div>
    <h2 class="brochure-title">Kim ấn "Hoài Giang trấn thủ"</h2>
    <p class="muted" style="margin:4px 0 14px"><i>Vàng · thế kỷ XIX · hiện vật của gia đình ông Tôn Thất Khải</i></p>
    ${photo(sealPhoto(false), "Ảnh chụp tại bảo tàng chiều thứ Sáu 14-3-1997, ngay sau khi nhận hiện vật.", "print")}
    <p>Kim ấn được cụ Tổng đốc Tôn Thất Hoài dùng đóng trên công văn từ năm 1886, khi Hoài Giang còn là một trấn nhỏ bên sông.
      Sau khi cụ mất, ấn được con cháu thờ phụng hơn một trăm năm.</p>
    <p>Núm ấn đúc hình con lân ngồi, bờm xoắn, đường nét tinh xảo. Điều đáng quý là hiện vật <b>còn nguyên vẹn</b> sau hơn một thế kỷ,
      qua bao lần loạn lạc của vùng đất này.</p>
    <p class="small muted">Biên soạn: Phan Thị Nguyệt. Trang rời in gấp tối 14-3-1997 tại Xí nghiệp in Hoài Giang, kẹp vào sách giới thiệu triển lãm (sách in từ trước, do ông Hồ Minh Tâm tài trợ).</p>
  </div>`,
};

const thuDinh = {
  id: "thu_dinh", stage: 2, kind: "Thư tay", label: "Thư anh Định gửi chị Hoa",
  html: () => `
  <div class="doc doc--hand" style="color:#2a2a2a">
    <p class="right">Huế, ${wd("1997-03-16", "Chủ Nhật")} ${dt("1997-03-16", "16/3/97")}</p>
    <div class="gap"></div>
    <p>Chị Hoa thương,</p>
    <p>Em xin lỗi vì đi gấp không kịp nói với chị. Em không sao hết, chị đừng lo.</p>
    <p>Chiều thứ Sáu, lúc nhận hiện vật cho triển lãm, em thấy có chuyện không ổn với một hiện vật quan trọng. Em báo ngay chị Nguyệt,
      nhưng chị Nguyệt gạt đi, dặn em đừng làm rùm beng trước đêm khai mạc, chuyện gì thì để thứ Hai đoàn giám định coi.</p>
    <p>Em sợ tới thứ Hai thì muộn. Nên tối thứ Bảy, lúc chị Nguyệt đang phát biểu, khoảng tám giờ hai mươi, em lẳng lặng ra cổng trước (anh Sáu đang lo dắt xe cho khách nên không để ý),
      ôm theo tập ảnh tư liệu của bảo tàng, bắt xe ôm ra ga cho kịp chuyến tàu tối đi Huế, để nhờ thầy Lâm coi trước.</p>
    <p>Sáng nay em tới nhà thầy thì cô nói bảo tàng vừa đánh điện báo hoãn buổi giám định sáng thứ Hai, nên thầy đi luôn Quảng Trị với đoàn khảo cổ, thứ Năm mới về. Em ở nhà trọ gần trường chờ thầy. Thứ Năm em về cùng thầy.</p>
    <p>Chuyện này chưa chắc chắn nên chị đừng nói với ai nghen. Cụ Khải già yếu, mắt kém, em không muốn cụ lo.</p>
    <div class="gap"></div>
    <p>Em của chị,</p>
    <p class="hand-sign" style="color:#2a2a2a">Định</p>
    <p class="small" style="font-size:16px">Dấu bưu điện: Huế 16-3-97 · Hoài Giang 18-3-97</p>
  </div>`,
};

const congVan = {
  id: "cong_van", stage: 2, kind: "Công văn", label: "Công văn của bảo tàng gửi gia đình cụ Khải",
  html: () => `
  <div class="doc doc--typed">
    ${officeHead("BẢO TÀNG THỊ XÃ HOÀI GIANG", "Số: 12/BT")}
    <p class="right"><i>Hoài Giang, ngày ${dt("1997-03-05", "05 tháng 3 năm 1997")}</i></p>
    <p class="center"><b>V/v mượn hiện vật trưng bày và giám định</b></p>
    <p>Kính gửi: <b>Ông Tôn Thất Khải</b>, 9 Lê Lợi, thị xã Hoài Giang.<br>Đồng gửi: anh Tôn Thất Vũ.</p>
    <p>Bảo tàng thị xã trân trọng cảm ơn gia đình đã nhận lời cho mượn kim ấn "Hoài Giang trấn thủ" trưng bày tại triển lãm "Hoài Giang 100 năm",
      khai mạc lúc 19 giờ 30 ${wd("1997-03-15", "thứ Bảy")} ngày ${dt("1997-03-15", "15-3-1997")}.</p>
    <p>Đề nghị gia đình:</p>
    <p>1. Mang hiện vật tới bảo tàng bàn giao lúc 15 giờ ${wd("1997-03-14", "thứ Sáu")} ngày ${dt("1997-03-14", "14-3-1997")}.</p>
    <p>2. Cung cấp bản chép sổ kê khai đồ thờ và ảnh tư liệu cũ (nếu có) trước ngày ${dt("1997-03-10", "10-3-1997")} để làm sách giới thiệu.</p>
    <p>3. Cử đại diện dự buổi <b>giám định khoa học</b> do đoàn chuyên gia Trường Đại học Khoa học Huế (PGS. Trần Đình Lâm, trưởng đoàn) thực hiện
      lúc <b>8 giờ ${wd("1997-03-17", "thứ Hai")} ngày ${dt("1997-03-17", "17-3-1997")}</b> tại bảo tàng. Nội dung giám định: cân, đo kích thước,
      thử tuổi vàng bằng axit, đối chiếu với sổ sách và ảnh tư liệu của gia đình.</p>
    <p>Kết quả giám định sẽ được công bố trên báo Hoài Giang và dùng để lập hồ sơ hiện vật quý cấp tỉnh.</p>
    <div class="typed-sign"><div></div><div>GIÁM ĐỐC<div class="sign">Nguyệt</div>Phan Thị Nguyệt</div></div>
    ${stamp("Bảo tàng<br>thị xã<br>Hoài Giang", "right:90px;bottom:36px")}
  </div>`,
};

export default [keKhai, catalogue, thuDinh, congVan];
