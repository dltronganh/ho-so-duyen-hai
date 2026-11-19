// Case 01, second folder (unlocked after question 1): Vũ and the café owner, the flash photo,
// the handover record, the power company's check, and the radio station's tape transcript.
// Facts must agree with the case facts.js.
import { wd, age, at, dt, line, photo, stamp, tape } from "../../../js/kit.js";
import { flashPhoto } from "../art.js";
import { policeHead, officeHead, statementSign, dailyMast, goldBox } from "../../../js/docparts.js";

const khaiVu = {
  id: "khai_vu", stage: 1, kind: "Lời khai", label: "Lời khai anh Tôn Thất Vũ",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">BIÊN BẢN GHI LỜI KHAI</div>
    <div class="typed-sub">Hồi 9 giờ 30, ${wd("1997-03-16", "Chủ Nhật")} ngày ${dt("1997-03-16", "16-3-1997")}</div>
    <p>Người khai: <b>Tôn Thất Vũ</b>, ${age("vu", "1997-03-16", 31)} tuổi, buôn bán tự do, ngụ tại nhà thờ họ Tôn Thất, 9 Lê Lợi.
      Liên lạc: máy nhắn tin 107 – 552 031.</p>
    <div class="qa">
      <p class="q">H: Anh liên quan thế nào tới hiện vật bị mất?</p>
      ${line("vu-1", "Đ: Kim ấn là của gia đình tôi. Cha tôi già yếu, mắt kém, nên tôi thay cha lo mọi việc với bảo tàng.")}
      ${line("vu-2", "Đ: Chiều thứ Sáu tôi có mặt lúc bàn giao, ký biên bản. Tôi thấy cậu Định cân cái ấn rồi ghi ghi chép chép, mặt mày căng thẳng lắm.")}
      <p class="q">H: Chìa khoá số 2 của tủ kính hiện ở đâu?</p>
      ${line("vu-3", "Đ: Tôi nhận chìa theo biên bản, mang về để ở nhà. Tối thứ Bảy tôi không mang theo.")}
      <p class="q">H: Anh ở đâu lúc mất điện?</p>
      ${line("vu-4", "Đ: Khoảng 8 giờ 25 tôi thấy trong sảnh ngột ngạt nên ra quán cà phê Hoa Sứ ở đầu hẻm 12 ngồi cho thoáng.")}
      ${line("vu-5", "Đ: Tôi ngồi ở quán từ khoảng 8 rưỡi tới hơn 9 giờ, không đi đâu cả.")}
      ${line("vu-6", "Đ: Lúc bảo tàng cúp điện tôi chỉ thấy bên đó tối om, tưởng sự cố bình thường.")}
      ${line("vu-7", "Đ: Tôi không vào lại bảo tàng cho tới khoảng 9 giờ 15, khi nghe bên đó ồn ào.")}
      <p class="q">H: Anh có quen ông Hồ Minh Tâm không?</p>
      ${line("vu-8", "Đ: Không. Tôi mới gặp ông ấy lần đầu ở buổi khai mạc, bà Nguyệt giới thiệu.")}
      <p class="q">H: Anh nghĩ ai có thể lấy kim ấn?</p>
      ${line("vu-9", "Đ: Tôi không dám nói bừa. Nhưng người biết rõ hiện vật nhất, rồi bỏ đi ngay trong đêm, thì cả thị xã đều biết là ai.")}
    </div>
    ${statementSign("Vũ", "Tôn Thất Vũ")}
  </div>`,
};

const khaiThu = {
  id: "khai_thu", stage: 1, kind: "Lời khai", label: "Lời khai chị Đỗ Thị Thu (chủ quán Hoa Sứ)",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">BIÊN BẢN GHI LỜI KHAI</div>
    <div class="typed-sub">Hồi 14 giờ, ${wd("1997-03-17", "thứ Hai")} ngày ${dt("1997-03-17", "17-3-1997")}, tại quán cà phê Hoa Sứ</div>
    <p>Người khai: <b>Đỗ Thị Thu</b>, ${age("thu", "1997-03-17", 38)} tuổi, chủ quán cà phê Hoa Sứ, đầu hẻm 12 Trần Phú.</p>
    <div class="qa">
      ${line("thu-1", "Đ: Anh Vũ là khách quen, tuần nào cũng ghé. Tối thứ Bảy anh tới khoảng 8 rưỡi, gọi một ly bạc xỉu, vắt áo khoác lên ghế.")}
      ${line("thu-2", "Đ: Bàn anh ngồi nhìn qua được hông bảo tàng. Ngồi chưa được mười phút, anh đứng dậy nói bỏ quên cái bật lửa, mặc áo khoác đi về phía cuối hẻm chứ không ra đường lớn.")}
      ${line("thu-3", "Đ: Quán tôi vẫn có điện, cả dãy đèn ngoài hẻm cũng vẫn sáng, chỉ có bảo tàng là tối.")}
      ${line("thu-4", "Đ: Anh đi chừng hai, ba phút thì đèn bên bảo tàng tắt phụt. Ly bạc xỉu của anh còn nguyên trên bàn.")}
      ${line("thu-5", "Đ: Chừng hai mươi phút sau, đúng lúc bên bảo tàng sáng đèn lại, anh quay về, không thấy cầm bật lửa gì hết. Thở dốc, ống quần lấm bùn đất, giày ướt.")}
      ${line("thu-6", "Đ: Anh ngồi uống cạn ly, trả tiền rồi mới đi qua bảo tàng coi người ta xôn xao chuyện gì.")}
      <p class="q">H: Cuối hẻm 12 dẫn ra đâu?</p>
      ${line("thu-7", "Đ: Đi dọc hông bảo tàng, ngang cửa sau của bảo tàng, rồi xuống bờ sông chỗ chân cầu Đá. Mùa này bờ sông lầy lắm.")}
    </div>
    ${statementSign("Thu", "Đỗ Thị Thu")}
  </div>`,
};

const bao18 = {
  id: "bao_18", stage: 1, kind: "Báo", label: "Báo Hoài Giang, thứ Ba 18/3 – trang nhất",
  html: () => `
  <div class="doc doc--news">
    ${dailyMast("1997-03-18", "Thứ Ba", "Nhằm ngày 10 tháng 2 năm Đinh Sửu", "1.286")}
    <div class="news-kicker">Vụ mất kim ấn tại Bảo tàng thị xã</div>
    <h1 class="news-head">Ảnh độc quyền: trong bóng tối đêm khai mạc</h1>
    ${photo(flashPhoto(), "Ảnh chụp bằng đèn flash giữa lúc sảnh mất điện. Hàng ghế đầu: cụ <b>Tôn Thất Khải</b> (giữa) và ông <b>Hồ Minh Tâm</b>. Bên trái ảnh, một vị khách tranh thủ cúi xem tủ kính. Ảnh: <b>Minh Đức</b>")}
    <div class="news-grid" style="grid-template-columns: 2.05fr 1fr">
      <div>
        <div class="news-by">Quang Huy – Minh Đức</div>
        <div class="news-cols" style="columns:2">
          <p class="dropcap">Bức ảnh trên được phóng viên ảnh Minh Đức của báo Hoài Giang chụp trong lúc sảnh Bảo tàng thị xã chìm trong bóng tối đêm thứ Bảy.
            "Khách nhốn nháo, tôi bấm thử một kiểu đèn flash cho mọi người thấy đường, ai cũng kêu chói mắt nên tôi thôi", anh Đức kể.</p>
          <p>Cuộn phim được tráng chiều thứ Hai. Ảnh cho thấy khi mất điện, khách mời ở hàng ghế đầu vẫn ngồi yên tại chỗ theo lời đề nghị của bà Giám đốc bảo tàng.</p>
          <p><b>Cầu dao bị gạt bằng tay?</b> Theo nguồn tin của phóng viên, Chi nhánh điện thị xã đã kiểm tra tủ điện của bảo tàng và cho rằng
            sự cố không phải do quá tải. Công an thị xã chưa đưa ra kết luận.</p>
          <p><b>Vẫn chưa tìm thấy anh Định.</b> Tới chiều thứ Hai, trợ lý bảo tàng Lê Văn Định vẫn chưa trở về. Gia đình cho biết đã gửi thư nhờ báo chí giúp đỡ.</p>
          <p>Buổi giám định kim ấn của đoàn chuyên gia Trường Đại học Khoa học Huế, dự kiến sáng thứ Hai, đã bị huỷ.</p>
        </div>
      </div>
      <div>
        ${goldBox("4.175.000", "4.200.000")}
        <div class="news-box"><h4>Tin ngắn</h4>
          <p class="small"><b>Học bổng.</b> 40 học sinh nghèo vượt khó của thị xã nhận học bổng 200.000 đồng mỗi em.</p>
          <p class="small"><b>Bến cầu Đá.</b> Nước sông lên, bãi bồi dưới chân cầu lầy lội, người dân đi lại cẩn thận.</p>
        </div>
        <div class="news-ad"><div class="big">Tiệm vàng Kim Thành</div><p class="small" style="margin:4px 0 0">Mua bán vàng, kiểm định tuổi vàng, cân tiểu ly chính xác<br>15 Trần Phú</p></div>
      </div>
    </div>
  </div>`,
};

const banGiao = {
  id: "ban_giao", stage: 1, kind: "Biên bản", label: "Biên bản bàn giao hiện vật (thứ Sáu 14/3)",
  html: () => `
  <div class="doc doc--typed">
    ${officeHead("BẢO TÀNG THỊ XÃ HOÀI GIANG", "3 Bạch Đằng")}
    <div class="typed-title">BIÊN BẢN BÀN GIAO HIỆN VẬT</div>
    <div class="typed-sub">Hồi ${at("handover", "15 giờ 00")}, ${wd("1997-03-14", "thứ Sáu")} ngày ${dt("1997-03-14", "14-3-1997")}, tại Bảo tàng thị xã</div>
    <p><b>Bên cho mượn:</b> gia đình ông Tôn Thất Khải, 9 Lê Lợi. Đại diện: ông Tôn Thất Khải và anh Tôn Thất Vũ.</p>
    <p><b>Bên mượn:</b> Bảo tàng thị xã Hoài Giang. Đại diện: bà Phan Thị Nguyệt (Giám đốc); anh Lê Văn Định (trợ lý, ghi biên bản).</p>
    <p><b>1. Hiện vật:</b> Kim ấn "Hoài Giang trấn thủ", núm hình con lân, đế vuông 5 × 5 cm, cao 6,5 cm.</p>
    <p><b>2. Chất liệu:</b> vàng (theo gia đình cung cấp).</p>
    <p><b>3. Trọng lượng:</b> 186 g (cân đĩa của bảo tàng, cân tại chỗ).</p>
    <p><b>4. Tình trạng:</b> còn tốt, bề mặt sáng, không sứt mẻ, không trầy xước.</p>
    <p><b>5. Thời hạn mượn:</b> từ ${dt("1997-03-15", "15-3-1997")} đến ${dt("1997-04-15", "15-4-1997")}. Bảo hiểm: hợp đồng bảo hiểm 1.500.000.000 đồng chỉ ký sau khi có kết quả giám định khoa học (dự kiến ngày ${dt("1997-03-17", "17-3-1997")}); trước đó chưa có hiệu lực.</p>
    <p><b>6. Chìa khoá tủ kính số 1:</b> gồm 02 chìa.<br>
      &nbsp;&nbsp;– Chìa số 1: Bảo tàng giữ (bà Phan Thị Nguyệt).<br>
      &nbsp;&nbsp;– Chìa số 2: gia đình người cho mượn giữ, để kiểm tra hiện vật khi cần. Người nhận: anh Tôn Thất Vũ.</p>
    <p><b>7.</b> Ông Khải đã tự tay chép và gửi kèm bản chép sổ kê khai đồ thờ (đã nộp ngày ${dt("1997-03-10", "10-3")}) để làm sách giới thiệu.</p>
    <div class="typed-sign" style="grid-template-columns:1fr 1fr 1fr">
      <div>BÊN CHO MƯỢN<div class="sign">Khải</div><div class="sign" style="font-size:24px">Vũ</div></div>
      <div>NGƯỜI NHẬN CHÌA SỐ 2<div class="sign">Vũ</div>Tôn Thất Vũ</div>
      <div>BÊN MƯỢN<div class="sign">Nguyệt</div><span class="small">Ghi biên bản: <span class="sign" style="font-size:22px">Định</span></span></div>
    </div>
    ${stamp("Bảo tàng<br>thị xã<br>Hoài Giang", "right:60px;bottom:120px")}
  </div>`,
};

const dienLuc = {
  id: "dien_luc", stage: 1, kind: "Biên bản", label: "Biên bản kiểm tra của Chi nhánh điện",
  html: () => `
  <div class="doc doc--typed">
    ${officeHead("CHI NHÁNH ĐIỆN HOÀI GIANG", "Tổ kỹ thuật")}
    <div class="typed-title">BIÊN BẢN KIỂM TRA SỰ CỐ ĐIỆN</div>
    <div class="typed-sub">Hồi 8 giờ, ${wd("1997-03-17", "thứ Hai")} ngày ${dt("1997-03-17", "17-3-1997")}, tại Bảo tàng thị xã, 3 Bạch Đằng</div>
    <p>Theo đề nghị của Công an thị xã. Người kiểm tra: kỹ thuật viên Phạm Văn Hùng. Chứng kiến: Thượng úy Huỳnh Tấn Phát, ông Nguyễn Văn Sáu.</p>
    <p><b>1. Thiết bị:</b> cầu dao tổng loại hộp, 1 pha, 60A, đặt ở hành lang sau. Cần gạt có 2 vị trí: BẬT (lên) và TẮT (xuống).</p>
    <p><b>2. Cầu chì:</b> 03 dây chì còn nguyên, không đứt, không cháy.</p>
    <p><b>3. Dấu hiệu quá tải, chập:</b> không có. Dây dẫn không nóng chảy, không mùi khét. Tổng công suất đêm khai mạc (đèn, dàn âm thanh) ước khoảng 9 kW, dưới mức chịu của cầu dao.</p>
    <p><b>4. Nhận xét:</b> cầu dao loại này không có cơ cấu tự nhảy. Cần gạt chỉ chuyển xuống vị trí TẮT khi có người gạt bằng tay.</p>
    <p><b>5. Lưới điện khu vực:</b> theo sổ trực của Chi nhánh, tối ${dt("1997-03-15", "15-3")} không có sự cố. Các hộ trên đường Bạch Đằng và trong hẻm 12 vẫn có điện bình thường.</p>
    <p><b>Kết luận:</b> mất điện tại bảo tàng tối ${dt("1997-03-15", "15-3-1997")} là do cầu dao tổng bị gạt tắt bằng tay.</p>
    <div class="typed-sign"><div>CHỨNG KIẾN<div class="sign">Phát</div><div class="sign" style="font-size:22px">Sáu</div></div><div>NGƯỜI KIỂM TRA<div class="sign">Hùng</div>Phạm Văn Hùng</div></div>
  </div>`,
};

const ghiAm = {
  id: "ghi_am", stage: 1, kind: "Bản chép", label: "Bản chép băng ghi âm của Đài truyền thanh",
  html: () => `
  <div class="doc doc--typed">
    ${officeHead("ĐÀI TRUYỀN THANH THỊ XÃ", "Phòng biên tập")}
    <div class="typed-title">BẢN CHÉP BĂNG GHI ÂM (TRÍCH)</div>
    <div class="typed-sub">Lễ khai mạc triển lãm "Hoài Giang 100 năm", tối ${wd("1997-03-15", "thứ Bảy")} ${dt("1997-03-15", "15-3-1997")}</div>
    <p class="small">Băng cát-sét số 2. Theo sổ của đài, máy bắt đầu ghi lúc <b>20 giờ 01</b>; số trong ngoặc vuông là số phút:giây trên bộ đếm của máy, tính từ lúc bắt đầu ghi.
      Chép theo đề nghị của Công an thị xã. Người nói: bà Phan Thị Nguyệt, trừ khi có ghi khác.</p>
    <div class="qa">
      ${line("tape-1", `${tape("seal_seen", "38:10")} "…và hiện vật quý nhất đêm nay, kim ấn 'Hoài Giang trấn thủ', đang nằm ngay trong tủ kính bên tay phải tôi đây. Mời bà con lát nữa lại gần xem."`)}
      ${line("tape-2", "[38:40] (vỗ tay)")}
      ${line("tape-3", `${tape("outage", "40:12")} (tiếng "tách", tiếng ồn ào, có tiếng ghế xô)`)}
      ${line("tape-4", `[40:20] (giọng qua loa cầm tay, hơi rè) "Bà con bình tĩnh, ngồi yên tại chỗ, chắc nhảy cầu dao thôi. Anh Sáu ơi, anh coi giùm em cái cầu dao!"`)}
      ${line("tape-5", `[41:05] "Trong lúc chờ, tôi kể tiếp chuyện bến sông Hoài thời Pháp. Hồi đó…"`)}
      ${line("tape-6", `[43:30] Một giọng ông cụ, rất gần: "Cô Nguyệt cứ nói tiếp, tôi ngồi đây nghe rõ lắm."`)}
      ${line("tape-7", `[44:50] Giọng đàn ông giọng Nam, gần: "Tối thui mà nghe chị Nguyệt kể như nghe chuyện đêm vậy đó." (có tiếng cười)`)}
      ${line("tape-8", `${tape("flash_photo", "49:05")} (tiếng đèn flash nổ "bụp"; tiếng người: "Ai chụp vậy?")`)}
      ${line("tape-9", `[49:12] "Anh Đức báo Hoài Giang đó bà con. Trời đất, chói mắt quá anh Đức ơi! Thôi bà con ngồi yên, nghe tôi kể tiếp nghen."`)}
      ${line("tape-10", `[50:00 – 58:50] Bà Nguyệt kể liền mạch về chợ cá, ghe bầu, trận lụt năm 1964 (lược bớt, xem băng gốc).`)}
      ${line("tape-11", `${tape("power_back", "59:02")} (đèn sáng, vỗ tay, có tiếng huýt sáo)`)}
      ${line("tape-12", `[59:20] "Cảm ơn anh Sáu! Mời bà con mình tiếp tục…"`)}
      ${line("tape-13", `${tape("case_found_empty", "61:05")} "Ủa… cái tủ… Kim ấn đâu rồi? Anh Sáu! Anh Sáu ơi!"`)}
    </div>
    <p class="small muted" style="margin-top:12px">Ghi chú của kỹ thuật viên: từ ${tape("outage", "40:12")} tới ${tape("power_back", "59:02")} giọng bà Nguyệt phát qua loa cầm tay, âm lượng đều, không ngắt quãng quá 20 giây.</p>
  </div>`,
};

export default [khaiVu, khaiThu, bao18, banGiao, dienLuc, ghiAm];
