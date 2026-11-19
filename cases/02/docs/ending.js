// Case 02, closing documents: the player's article in Tuần báo Duyên Hải and the epilogue.
// Facts must agree with the case facts.js.
import { wd, dt } from "../../../js/kit.js";
import { dailyMast } from "../../../js/docparts.js";

const baiKet = {
  id: "bai_ket", stage: 5, kind: "Báo", label: "Tuần báo Duyên Hải, thứ Sáu 27/2 – bài của bạn",
  html: () => `
  <div class="doc doc--news" style="background-color:#ece6d3">
    <div class="news-top"><span>Số 9 · Năm thứ 4</span><span>Giá 2.500 đồng</span></div>
    <div class="news-mast" style="font-style:italic;color:#27467e">Duyên Hải<small style="color:#1d1a16">Tuần báo của miền biển · Ra thứ Sáu hằng tuần</small></div>
    <div class="news-bar"><span>${wd("1998-02-27", "Thứ Sáu")} ${dt("1998-02-27", "27-2-1998")}</span><span>Phóng sự điều tra</span><span>16 trang</span></div>
    <div class="news-kicker">Điều tra độc quyền</div>
    <h1 class="news-head">Người "chết đuối" đêm rằm gửi điện từ Phan Thiết</h1>
    <div class="news-deck">Không có án mạng nào ở Cửa Hoài. Chỉ có một màn giả chết để trốn nợ, và một cậu thợ ghe suýt phải gánh tội thay.</div>
    <div class="news-by">Phóng viên điều tra của Duyên Hải</div>
    <div class="news-cols" style="columns:3">
      <p class="dropcap">Tư bị tạm giữ vì sổ trạm biên phòng ghi ghe HG-0417 qua trạm lúc 23 giờ 12, trễ gần nửa tiếng so với lời khai. Nhưng chính cuốn sổ ấy ghi bản tin
        thời tiết biển lúc 22 giờ 10 và tiếng đài mở đầu buổi sáng lúc 5 giờ 55, trong khi đài phát hai chương trình đó lúc 21 giờ 45 và 5 giờ 30. Đồng hồ trạm chạy nhanh
        đúng 25 phút. Ghe rời bến lúc 22 giờ 47, một người trên ghe, đúng như lời Tư.</p>
      <p>Ghe không ra khơi. Bình xăng đổ đầy 10 lít buổi chiều, sáng ra còn 9 lít: máy chỉ chạy chừng 20 phút, vừa đủ từ bến tới cồn Bãi Ngang. Đêm rằm là kỳ nước cường, nước ròng
        sâu nhất lúc 23 giờ 41; lối cát ngầm qua cồn lộ ra từ khoảng 22 giờ tới gần 1 giờ sáng. Rạng sáng, bà cào nghêu thấy một hàng dấu chân trần từ mép nước đi lên cổng chùa,
        không quay xuống. Đôi dép thì nằm ngay ngắn trên ghe.</p>
      <p>Vết máu nhóm O trên mạn ghe là máu của chính ông Thành: ba ngày sau, một người khai tên "Mạc Văn Thọ", 50 tuổi, tới trạm y tế ở Phan Thiết khâu vết cắt lòng bàn tay trái.
        Ông Thọ thật, em họ ông Thành, đã mất năm 1995, lẽ ra năm nay mới 40.</p>
      <p>Sáng 14/2, "Mạc Văn Thọ" gửi cho bà Lan một bức điện toàn số. Chìa khoá là bài thơ lục bát ông Thành chép tặng vợ năm cưới, ký "Hai": mỗi cặp số là chữ thứ mấy của câu thứ mấy trong bài.
        Giải ra: "Anh vẫn sống. Đừng báo ai. Gửi thư về Hải Âu." Chữ trên phiếu gửi điện ghi tháng bằng số La Mã, như mọi giấy tờ ông Thành từng viết.</p>
      <p>Đêm đó bà Lan không ở chùa suốt như đã khai: 23 giờ 40 bà ra cổng "lấy áo lạnh", 0 giờ 55 mới vào, ống quần ướt tới gối. Xe đò đêm Thanh Bình đón khách
        "Mạc Văn Thọ" ở ngã ba An Phú lúc 0 giờ 45, chỗ đã đặt từ mồng 10 tháng Giêng.</p>
      <p>Động cơ nằm trong hai tờ giấy: thông báo nợ quá hạn 900 triệu của ngân hàng từ tháng 8, và hợp đồng bảo hiểm nhân thọ 600 triệu ký hai tuần sau, người thụ hưởng là bà Lan.</p>
      <p>Bài báo này được gửi tới Công an thị xã cùng toàn bộ tài liệu trước khi lên khuôn.</p>
    </div>
  </div>`,
};

const hauTruyen = {
  id: "hau_truyen", stage: 5, kind: "Báo", label: "Báo Hoài Giang, thứ Hai 2/3 – Hậu truyện",
  html: () => `
  <div class="doc doc--news">
    ${dailyMast("1998-03-02", "Thứ Hai", "Nhằm ngày 4 tháng Hai năm Mậu Dần", "1.561", "XXIII")}
    <div class="news-kicker">Tin tiếp vụ ghe HG-0417</div>
    <h2 class="news-head">"Người chết đuối" trở về Hoài Giang</h2>
    <div class="news-cols" style="columns:2">
      <p class="dropcap">Chiều 20-2, Công an Bình Thuận mời một người đàn ông ở nhà trọ Hải Âu, phường Đức Thắng, Phan Thiết về làm việc. Người này mang chứng minh nhân dân
        của ông Mạc Văn Thọ, nhưng thực ra là ông Mạc Văn Thành, chủ hãng nước mắm Thành Hưng, người được cho là mất tích trên biển đêm rằm tháng Giêng.</p>
      <p>Ông Thành khai đã bàn với vợ giả chết để vợ nhận tiền bảo hiểm trả nợ ngân hàng, "đợi vài năm yên chuyện thì về". Hồ sơ bảo hiểm đã bị huỷ.
        Hai vợ chồng bị khởi tố về hành vi lừa đảo, chưa chiếm đoạt được tài sản.</p>
      <p>Lê Văn Tư được trả tự do ngày 18-2. Hôm Tư về, bà Bông bày mâm cơm cúng, mời cả xóm Chài. Ông Võ Đình Cường đang thương lượng với ngân hàng để mua lại hãng nước mắm,
        trừ vào số nợ 300 triệu, và nhận Tư về làm thợ chính.</p>
      <p>Ở trạm biên phòng Cửa Hoài, chiếc đồng hồ treo tường cũ đã được thay bằng đồng hồ mới. Từ nay, mỗi sáng trạm chỉnh giờ theo đài trước khi giao ca.</p>
    </div>
  </div>`,
};

export default [baiKet, hauTruyen];
