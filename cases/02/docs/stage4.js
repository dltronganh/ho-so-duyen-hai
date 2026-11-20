// Case 02, fifth folder (after question 4): the insurance file, the bank's notice, the Phan Thiết clinic register,
// and the insurance agent's statement. Facts must agree with the case facts.js.
import { wd, age, id, dt, line, stamp } from "../../../js/kit.js";
import { policeHead, officeHead, statementSign } from "../../../js/docparts.js";

const baoHiem = {
  id: "bao_hiem", stage: 4, kind: "Hợp đồng", label: "Hồ sơ bảo hiểm nhân thọ (trích)",
  html: () => `
  <div class="doc doc--typed">
    ${officeHead("CÔNG TY BẢO HIỂM NHÂN THỌ", "Đại lý Hoài Giang")}
    <div class="typed-title">TRÍCH HỒ SƠ HỢP ĐỒNG SỐ 97/HG-0412</div>
    <p><b>Người được bảo hiểm:</b> Mạc Văn Thành, sinh năm 1947, CMND ${id("thanh", "205 031 776")}. Khám sức khoẻ ngày ${dt("1997-08-28", "28-8-1997")}: đạt.</p>
    <p><b>Ngày ký hợp đồng:</b> ${wd("1997-09-03", "thứ Tư")} ${dt("1997-09-03", "3-9-1997")}. Loại: Nhân thọ có thời hạn (tử kỳ). <b>Số tiền bảo hiểm: 600.000.000 đồng.</b></p>
    <p><b>Người thụ hưởng:</b> Hồ Thị Ngọc Lan (vợ). Chữ ký xác nhận của người thụ hưởng: <span class="sign" style="font-size:22px">Lan</span></p>
    <p><b>Điều 14:</b> trường hợp người được bảo hiểm mất tích, công ty chi trả khi có quyết định tuyên bố chết của toà án.</p>
    <hr class="news-rule">
    <p class="center"><b>ĐƠN YÊU CẦU GIẢI QUYẾT QUYỀN LỢI BẢO HIỂM</b></p>
    <p>Ngày ${dt("1998-02-16", "16-2-1998")}. Người yêu cầu: Hồ Thị Ngọc Lan. Sự kiện: chồng tôi mất tích trên biển đêm ${dt("1998-02-11", "11-2-1998")}.
      Đề nghị công ty tạm ứng trước một phần quyền lợi để lo việc tìm kiếm.</p>
    <p class="ink" style="transform:rotate(-1deg)">Đã nhận hồ sơ. Chưa đủ điều kiện tạm ứng (Đ.14). – Mỹ</p>
    ${stamp("Đại lý<br>Hoài Giang<br>Đã nhận<br>16-2-98", "right:40px;top:40px")}
  </div>`,
};

const thongBaoNo = {
  id: "thong_bao_no", stage: 4, kind: "Công văn", label: "Thông báo của ngân hàng gửi hãng Thành Hưng",
  html: () => `
  <div class="doc doc--typed">
    ${officeHead("NGÂN HÀNG NÔNG NGHIỆP", "Chi nhánh thị xã Hoài Giang")}
    <p class="right"><i>Hoài Giang, ngày ${dt("1997-08-20", "20 tháng 8 năm 1997")}</i></p>
    <p class="center"><b>THÔNG BÁO NỢ QUÁ HẠN (LẦN THỨ NHẤT)</b></p>
    <p>Kính gửi: Ông Mạc Văn Thành, chủ cơ sở nước mắm Thành Hưng.</p>
    <p>Khoản vay 900.000.000 đồng theo hợp đồng tín dụng số 112/95, thế chấp bằng quyền sử dụng đất và nhà xưởng tại 8 Bạch Đằng, đã quá hạn trả lãi hai kỳ.</p>
    <p>Đề nghị ông thanh toán ngay lãi quá hạn. Toàn bộ gốc vay đáo hạn ngày <b>${dt("1998-02-28", "28-2-1998")}</b>. Quá hạn trên, ngân hàng sẽ làm thủ tục phát mãi tài sản thế chấp.</p>
    <div class="typed-sign"><div></div><div>GIÁM ĐỐC CHI NHÁNH<div class="sign">Quang</div>Trần Minh Quang</div></div>
    <p class="ink" style="margin-top:8px">Lần 2: 15/11/97 · Lần 3: 20/1/98 — đã gửi bảo đảm.</p>
    ${stamp("Ngân hàng<br>Nông nghiệp<br>Hoài Giang", "right:90px;bottom:40px")}
  </div>`,
};

const soKham = {
  id: "so_kham", stage: 4, kind: "Sổ sách", label: "Sổ khám bệnh trạm y tế phường Đức Thắng, Phan Thiết",
  html: () => `
  <div class="doc doc--ledger" style="width:900px">
    <div class="ledger-head"><div class="small caps">Trạm y tế phường Đức Thắng · Thị xã Phan Thiết</div><h3>Sổ khám bệnh</h3>
      <div>${wd("1998-02-14", "Thứ Bảy")} ${dt("1998-02-14", "14/2/1998")} · trang 31 (bản sao theo yêu cầu của Công an Bình Thuận)</div></div>
    <table class="ledger">
      <tr><th>STT</th><th>Họ tên</th><th>Tuổi (khai)</th><th>Địa chỉ</th><th>Chẩn đoán, xử trí</th></tr>
      <tr><td class="p">12</td><td>Nguyễn Thị Hạnh</td><td>6</td><td>Đức Thắng</td><td style="font-size:16px">Sốt, ho. Cho thuốc.</td></tr>
      <tr><td class="p">13</td><td>Mạc Văn Thọ</td><td>50</td><td>Nhà trọ Hải Âu, Ngư Ông</td><td style="font-size:16px">Vết cắt lòng bàn tay trái do dao, khoảng 3 ngày, sưng, chớm nhiễm trùng. Rửa, khâu 4 mũi, tiêm phòng uốn ván.</td></tr>
      <tr><td class="p">14</td><td>Trần Văn Lộc</td><td>34</td><td>Đức Thắng</td><td style="font-size:16px">Trật cổ chân. Băng ép.</td></tr>
    </table>
    <p class="copy-note">Ghi chú của y sĩ: "BN 13 nói bị đứt tay khi làm cá. Nói để quên giấy tờ ở nhà trọ, hẹn hôm sau mang tới, nhưng không quay lại."</p>
  </div>`,
};

const khaiMy = {
  id: "khai_my", stage: 4, kind: "Lời khai", label: "Lời khai chị Trần Thị Mỹ (đại lý bảo hiểm)",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">BIÊN BẢN GHI LỜI KHAI</div>
    <div class="typed-sub">Hồi 14 giờ, ${wd("1998-02-18", "thứ Tư")} ngày ${dt("1998-02-18", "18-2-1998")}</div>
    <p>Người khai: <b>Trần Thị Mỹ</b>, đại lý bảo hiểm nhân thọ tại Hoài Giang.</p>
    <div class="qa">
      ${line("my-1", "Đ: Cuối tháng 8 năm ngoái ông Thành tự tới hỏi mua bảo hiểm, chọn mức cao nhất mà ông đóng nổi. Ngày 3 tháng 9 ký hợp đồng, chị Lan đi cùng, ký phần người thụ hưởng ngay tại quầy.")}
      ${line("my-2", "Đ: Ông hỏi kỹ hai lần: nếu chết ngoài biển mà không tìm được xác thì gia đình có được nhận tiền không. Tôi nói phải chờ toà tuyên bố chết.")}
      ${line("my-3", "Đ: Sáng thứ Hai 16/2, chị Lan tới nộp đơn, hỏi có cách nào nhận trước một phần không. Tôi nói theo điều 14 thì chưa.")}
      ${line("my-4", "Đ: Chị Lan nghe xong hỏi tôi: \"vậy phải chờ bao lâu?\" Tôi nói ít nhất cũng hơn một năm, có khi lâu hơn. Chị không khóc, chỉ ngồi im.")}
    </div>
    ${statementSign("Mỹ", "Trần Thị Mỹ")}
  </div>`,
};

export default [baoHiem, thongBaoNo, soKham, khaiMy];
