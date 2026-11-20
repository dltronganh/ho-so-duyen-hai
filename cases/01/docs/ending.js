// Case 01, closing documents (shown after the final question): the player's own article in Tuần báo Duyên Hải
// and the epilogue issue of Báo Hoài Giang. Facts must agree with the case facts.js.
import { wd, dt, photo } from "../../../js/kit.js";
import { sealPhoto } from "../art.js";
import { dailyMast } from "../../../js/docparts.js";

const baiKet = {
  id: "bai_ket", stage: 4, kind: "Báo", label: "Tuần báo Duyên Hải, thứ Sáu 28/3 – bài của bạn",
  html: () => `
  <div class="doc doc--news" style="background-color:#ece6d3">
    <div class="news-top"><span>Số 12 · Năm thứ 3</span><span>Giá 2.500 đồng</span></div>
    <div class="news-mast" style="font-style:italic;color:#27467e">Duyên Hải<small style="color:#1d1a16">Tuần báo của miền biển · Ra thứ Sáu hằng tuần</small></div>
    <div class="news-bar"><span>${wd("1997-03-28", "Thứ Sáu")} ${dt("1997-03-28", "28-3-1997")}</span><span>Phóng sự điều tra</span><span>16 trang</span></div>
    <div class="news-kicker">Điều tra độc quyền</div>
    <h1 class="news-head">Kim ấn Hoài Giang: kẻ trộm không phải người mất tích</h1>
    <div class="news-deck">Chiếc ấn trong tủ kính đêm khai mạc chỉ là đồ giả. Kim ấn thật đã rời bàn thờ họ Tôn Thất từ ba tháng trước.</div>
    <div class="news-by">Phóng viên điều tra của Duyên Hải</div>
    <div class="news-cols" style="columns:3">
      <p class="dropcap">Khi báo địa phương viết như thể trợ lý bảo tàng Lê Văn Định đã ôm kim ấn bỏ trốn, anh đang ngồi trên chuyến tàu S6 ra Huế.
        Sổ bán vé ga Hoài Giang ghi rõ: lúc 20 giờ 52 tối thứ Bảy 15-3, người mang chứng minh nhân dân số 205 118 437, đúng số của Định,
        mua vé đi Huế. Ga nằm cách trung tâm 12 km, xe ôm mất 25–30 phút; muốn có mặt ở quầy vé lúc đó, Định phải rời bảo tàng chậm nhất khoảng 20 giờ 30,
        tức là trước khi đèn tắt lúc 20 giờ 41. Còn "bóng người chạy vội ra phía cổng" lúc tối đèn chỉ là bác bảo vệ Sáu chạy ra đường xem cả khu có cúp điện không.</p>
      <p>Người cúi trên tủ kính trong bức ảnh flash lúc 20 giờ 50 mặc chiếc áo khoác ca-rô của anh Tôn Thất Vũ, con trai cụ Khải.
        Anh nói đã ngồi yên ở quán Hoa Sứ suốt lúc mất điện, nhưng chủ quán nhớ rõ anh bỏ đi khoảng hai mươi phút, về phía cửa sau bảo tàng,
        rồi trở lại với ống quần lấm bùn. Cửa sau chỉ có chốt trong, và chốt đã bị kéo từ bên trong; cầu dao ngay hành lang sau bị gạt bằng tay;
        tủ kính được mở bằng chìa, và chính anh Vũ đã ký nhận chìa số 2.</p>
      <p>Nhưng thứ anh Vũ lấy đi đêm đó không phải vàng. Sổ kê khai đồ thờ năm 1985 của cụ Khải ghi kim ấn nặng 11 lượng 2 chỉ, tức 420 gam,
        và con lân trên núm ấn bị sứt tai trái từ năm 1947. Chiếc ấn bàn giao cho bảo tàng chỉ nặng 186 gam, tai lân lành lặn.
        Theo thư Định gửi chị, anh đã phát hiện điều đó ngay chiều thứ Sáu và báo với Giám đốc bảo tàng, nhưng bị gạt đi.</p>
      <p>Liên phiếu lưu ở một xưởng đúc đồng tại Phú Kiều cho thấy ngày 2-12-1996, "anh Vũ (Hoài Giang)" đặt đúc một chiếc ấn núm lân
        bằng đồng mạ vàng, dặn "tai lân làm lành lặn cả hai bên". Ngày 21-12, ông Hồ Minh Tâm, tay buôn đồ cổ Sài Gòn, nhận phòng 204 khách sạn Sông Hoài;
        sổ tay của anh Vũ ghi đúng số máy nhắn tin trong mẩu quảng cáo "thu mua đồ cổ" của ông Tâm, kèm "P.204, 9h tối, mang hộp". Một tuần sau, món nợ 85 triệu của anh được trả đủ.</p>
      <p>Tháng 3, khi bảo tàng mượn kim ấn và hẹn đoàn Huế tới cân, đối chiếu ảnh vào sáng thứ Hai, chiếc ấn giả trở thành bằng chứng.
        Đêm khai mạc, nó biến khỏi tủ kính và nằm dưới bùn chân cầu Đá, cho tới khi lưới của ông Trương Văn Bảy kéo nó lên:
        "kim ấn" ấy chỉ nặng 5 lượng, và không phải vàng.</p>
      <p>Bài báo này được gửi tới Công an thị xã cùng toàn bộ tài liệu trước khi lên khuôn. Theo nguồn tin của Duyên Hải,
        anh Tôn Thất Vũ đã khai nhận, ông Hồ Minh Tâm đã được mời làm việc. Anh Lê Văn Định đã trở về Hoài Giang hôm thứ Năm 20-3.</p>
    </div>
  </div>`,
};

const hauTruyen = {
  id: "hau_truyen", stage: 4, kind: "Báo", label: "Báo Hoài Giang, thứ Năm 1/5 – Hậu truyện",
  html: () => `
  <div class="doc doc--news">
    ${dailyMast("1997-05-01", "Thứ Năm", "Nhằm ngày 25 tháng 3 năm Đinh Sửu", "1.330")}
    <div class="news-grid" style="grid-template-columns: 1.1fr 1fr">
      <div>
        ${photo(sealPhoto(true), "Kim ấn thật, tai trái con lân vẫn sứt như trong sổ kê khai năm 1985. Ảnh: <b>Minh Đức</b>", "print")}
      </div>
      <div>
        <div class="news-kicker">Văn hoá</div>
        <h2 class="news-head sm">Kim ấn trở về</h2>
        <p class="dropcap">Sáng ${wd("1997-04-30", "thứ Tư")} ${dt("1997-04-30", "30-4")}, kim ấn "Hoài Giang trấn thủ" thật đã được trưng bày lại tại Bảo tàng thị xã,
          sau khi ông Hồ Minh Tâm tự nguyện giao nộp cho cơ quan công an.</p>
        <p>Đoàn giám định Trường Đại học Khoa học Huế do PGS. Trần Đình Lâm dẫn đầu xác nhận: ấn nặng 420 gam, vàng ròng, tai trái con lân sứt đúng như ghi chép của gia đình.
          Người đi cùng đoàn, và đứng ra thuyết minh trước khách tham quan, là anh Lê Văn Định, nay là cán bộ biên chế của bảo tàng.</p>
        <p>Cụ Tôn Thất Khải quyết định tặng hẳn kim ấn cho bảo tàng. "Để ở nhà, con cháu lại khổ vì nó. Để ở đây, cả thị xã giữ giùm", cụ nói, tay chống gậy,
          đứng lâu trước tủ kính.</p>
        <p>Bà Phan Thị Nguyệt đã thôi giữ chức Giám đốc vì gạt đi phát hiện của nhân viên cho khỏi phải hoãn khai mạc. Bà thừa nhận vẫn cho in lời giới thiệu "còn nguyên vẹn" theo tấm ảnh chụp chiều thứ Sáu dù đã nghe Định báo, vì cho rằng chiếc cân đĩa cũ của bảo tàng cân sai.</p>
        <p>Anh Tôn Thất Vũ khai: hồi tháng 12 năm ngoái anh dặn thợ làm lành tai lân, nói là "để thờ cho đẹp" cho thợ khỏi nghi mình làm đồ giả, và tin rằng cha mắt kém sẽ không nhận ra.
          Tối 21-12 anh bán kim ấn thật cho ông Tâm giá 120 triệu đồng. Khi bảo tàng hẹn đoàn Huế tới cân và thử vàng, anh tính: ấn mất ở nhà thì công an chỉ soi người trong nhà, mất giữa đêm khai mạc đông người thì ai cũng có thể bị nghi, nhất là cậu trợ lý cứ cân đo chiếc ấn mãi mà cả bảo tàng đều thấy.
          Lúc "ra ngoài hút thuốc" anh vòng qua hành lang sau kéo sẵn chốt cửa, sang quán ngồi một lát cho chủ quán thấy mặt, rồi quay lại gạt cầu dao, nép trong hành lang chờ khách thôi nhốn nháo mới lần theo tường tới tủ kính. Đèn flash nổ làm anh hoảng, chộp chiếc ấn, đậy vội nắp kính rồi chạy ra cửa sau, băng qua đường xuống chân cầu Đá ném chiếc ấn đồng xuống sông.</p>
        <p>Ông Hồ Minh Tâm khai đã nhận lời tài trợ in sách giới thiệu triển lãm từ tháng Giêng, để lấy tiếng với bảo tàng và giới chơi đồ cổ miền Trung; tới khi nhận thiệp mời mới biết kim ấn được đem ra trưng bày, và ông tới dự để xem chiếc ấn giả có qua được mắt mọi người không.
          Vụ án của anh Tôn Thất Vũ sẽ được đưa ra xét xử trong tháng 6.</p>
        <p class="small muted">Tủ kính mới có khoá hai lớp, và cầu dao giờ nằm trong một hộp có khoá riêng.</p>
      </div>
    </div>
  </div>`,
};

export default [baiKet, hauTruyen];
