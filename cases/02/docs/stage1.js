// Case 02, second folder (after question 1): tide almanac, the clam digger, the mechanic's check,
// Saturday's paper, and the blood tests. Facts must agree with the case facts.js.
import { wd, age, at, dt, lunar, line, photo, stamp } from "../../../js/kit.js";
import { policeHead, officeHead, statementSign, dailyMast } from "../../../js/docparts.js";
import { sandbarPhoto } from "../art.js";
import { TIDE } from "../facts.js";

const thuyTrieu = {
  id: "thuy_trieu", stage: 1, kind: "Bảng", label: "Lịch thuỷ triều trạm Cửa Hoài, tháng 2/1998",
  html: () => {
    const days = [
      ["1998-02-09", "Thứ Hai", "03:22 · 1,7", "08:40 · 0,7", "15:40 · 1,5", "21:59 · 0,45"],
      ["1998-02-10", "Thứ Ba", "04:12 · 1,8", "09:30 · 0,6", "16:30 · 1,6", "22:50 · 0,38"],
      ["1998-02-11", "Thứ Tư", "05:02 · 1,85", "10:20 · 0,5", "17:20 · 1,7", "23:41 · 0,3"],
      ["1998-02-12", "Thứ Năm", "05:52 · 1,9", "11:10 · 0,5", "18:10 · 1,7", "—"],
      ["1998-02-13", "Thứ Sáu", "00:32 · 0,32", "06:42 · 1,9", "12:00 · 0,55", "19:00 · 1,6"],
      ["1998-02-14", "Thứ Bảy", "01:23 · 0,38", "07:32 · 1,8", "12:50 · 0,6", "19:50 · 1,5"],
    ];
    const hours = Object.entries(TIDE);
    return `
  <div class="doc doc--ledger" style="width:900px">
    <div class="ledger-head"><div class="small caps">Đài Khí tượng Thuỷ văn khu vực · Trạm Cửa Hoài</div>
      <h3>Bảng thuỷ triều tháng 2 năm 1998</h3><div>Giờ địa phương · độ cao mực nước tính bằng mét so với số 0 trạm</div></div>
    <table class="ledger">
      <tr><th>Ngày</th><th>Thứ</th><th colspan="4">Nước lớn / nước ròng trong ngày (giờ · m)</th></tr>
      ${days.map((d) => `<tr><td class="p">${dt(d[0], d[0].slice(8) + "/2")}</td><td class="p">${wd(d[0], d[1])}</td>${d.slice(2).map((c) => `<td class="p">${c}</td>`).join("")}</tr>`).join("")}
    </table>
    <p style="margin:14px 0 6px"><b>Mực nước từng giờ, đêm ${dt("1998-02-11", "11/2")} rạng sáng ${dt("1998-02-12", "12/2/1998")}</b> (trích bảng giờ):</p>
    <table class="ledger"><tr>${hours.map(([h]) => `<th>${h} giờ</th>`).join("")}</tr>
      <tr>${hours.map(([, v]) => `<td class="p" style="text-align:center">${String(v).replace(".", ",")}</td>`).join("")}</tr></table>
    <p class="copy-note">Đêm rằm và mồng một là kỳ nước cường: nước lên xuống mạnh nhất trong tháng. Giữa hai mốc giờ, mực nước thay đổi gần như đều.</p>
  </div>`;
  },
};

const khaiNam = {
  id: "khai_nam", stage: 1, kind: "Lời khai", label: "Lời khai bà Trần Thị Năm (xóm Bãi Ngang)",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">BIÊN BẢN GHI LỜI KHAI</div>
    <div class="typed-sub">Hồi 10 giờ, ${wd("1998-02-14", "thứ Bảy")} ngày ${dt("1998-02-14", "14-2-1998")}, tại xóm Bãi Ngang</div>
    <p>Người khai: <b>Trần Thị Năm</b>, ${age("nam", "1998-02-14", 58)} tuổi, nhặt ốc, lượm củi dạt, ngụ xóm Bãi Ngang. Bà tự tới trình báo sau khi nghe tin trên đài.</p>
    <div class="qa">
      ${line("nam-1", `Đ: Sáng ${lunar("1998-02-12", "16 tháng Giêng")}, tôi ra bãi trước chùa lúc ${at("footprints_seen", "5 giờ 10")} như mọi bữa, lượm củi với ốc sóng đánh vô đêm qua. Trăng còn sáng lắm.`)}
      ${line("nam-2", "Đ: Lúc đó nước lên cao rồi, lối lội ra cồn ngập hết, chỉ còn bãi cát khô phía trên.")}
      ${line("nam-3", "Đ: Tôi thấy hai hàng dấu. Một hàng chân trần, bàn chân to, của đàn ông, từ mép nước đi thẳng lên phía cổng chùa, chỉ có đi lên. Một hàng dấu dép nhỏ, của đàn bà, đi xuống mép nước rồi đi lên song song với hàng chân trần.")}
      ${line("nam-4", "Đ: Dưới thấp chỗ nước đã ngập thì không còn thấy gì. Ở trên, gần gốc dương trước cổng chùa, có vết bánh xe máy đậu rồi quay đầu ra đường chùa.")}
      ${line("nam-5", "Đ: Đêm rằm thì phật tử đi lễ đông, xe đậu đầy cổng chùa. Tôi tưởng ai đi chùa đi tắm biển khuya, không để ý.")}
      ${line("nam-6", "Đ: Bữa sau nghe đài nói ông Thành mất tích, tôi mới nhớ ra nên tới khai.")}
    </div>
    ${statementSign("Năm", "Trần Thị Năm (điểm chỉ)")}
  </div>`,
};

const kyThuat = {
  id: "ky_thuat", stage: 1, kind: "Biên bản", label: "Phiếu kiểm tra máy ghe của thợ máy",
  html: () => `
  <div class="doc doc--receipt" style="width:600px">
    <div class="receipt-head"><div class="small caps">Sửa máy ghe · Bến cầu Đá</div><h3>Tiệm máy Kim Long</h3>
      <div class="small">Sửa máy dầu, máy xăng, chân vịt · Huỳnh Kim Long</div></div>
    <p class="center"><b>PHIẾU KIỂM TRA MÁY</b> · lập theo đề nghị của công an thị xã</p>
    <div class="receipt-line"><span>Ngày:</span><span class="v">${wd("1998-02-12", "Thứ Năm")} ${dt("1998-02-12", "12/2/98")}, 11 giờ</span></div>
    <div class="receipt-line"><span>Ghe:</span><span class="v">HG-0417 · máy xăng 9 mã lực (tôi lắp cho ông Thành tháng 10 năm ngoái)</span></div>
    <div class="receipt-line"><span>Máy:</span><span class="v">nổ tốt ngay lần giật đầu. Không nghẹt xăng, không chết máy giữa chừng. Công tắc bị tắt bằng tay.</span></div>
    <div class="receipt-line"><span>Xăng:</span><span class="v">chiều ${dt("1998-02-11", "11/2")} khoảng 3 giờ chính tôi đổ đầy bình 10 lít cho ông Thành. Nay đo còn 9 lít.</span></div>
    <div class="receipt-line"><span>Hao xăng:</span><span class="v">chạy ga vừa ăn khoảng 3 lít một giờ; chạy hết ga khoảng 5 lít một giờ.</span></div>
    <div class="receipt-line"><span>Ghi chú:</span><span class="v">Ông Thành dặn tôi đổ đầy bình. Ghe không có hư hỏng gì. Đêm rằm tôi đi hát với anh Cường tới khuya, sáng ra mới hay chuyện.</span></div>
    <p class="right" style="margin-top:10px">Thợ máy <span class="sign">Long</span></p>
  </div>`,
};

const bao14 = {
  id: "bao_14", stage: 1, kind: "Báo", label: "Báo Hoài Giang, thứ Bảy 14/2 – trang 2",
  html: () => `
  <div class="doc doc--news">
    ${dailyMast("1998-02-14", "Thứ Bảy", `Nhằm ngày ${lunar("1998-02-14", "18 tháng Giêng")} năm Mậu Dần`, "1.547", "XXIII")}
    <div class="news-grid" style="grid-template-columns: 1fr 1fr">
      <div>
        <div class="news-kicker">Vụ ghe HG-0417</div>
        <h2 class="news-head sm">Biển trả ghe về Mũi Đá, còn người thì chưa</h2>
        <div class="news-by">Quang Huy</div>
        <p>Ông Phạm Văn Út, 40 năm đi biển ở Cửa Hoài, cho biết: "Mùa gió bấc, dòng nước sát bờ ở đây chảy xuống nam suốt đêm, nước lớn hay ròng gì cũng vậy. Một chiếc ghe không người
          trôi từ quãng cửa sông tới Mũi Đá phải mất chừng tám, chín tiếng; từ quãng cồn Bãi Ngang thì chừng bảy, tám tiếng."</p>
        <p>Theo ông Út, người rơi xuống biển đêm đó thì "trôi theo ghe, tấp vào bờ quanh Mũi Đá trong vài ngày". Bộ đội biên phòng vẫn đang tìm dọc bờ từ Bãi Ngang tới Mũi Đá.</p>
        <p>Kết quả xét nghiệm ban đầu cho thấy vết máu trên ghe là máu người. Công an thị xã chưa công bố thêm.</p>
        <p><b>Người nhà xin tìm:</b> gia đình ông Mạc Văn Thành hứa hậu tạ ai tìm được ông. Liên hệ bà Lan, 21 Trần Phú.</p>
      </div>
      <div>
        ${photo(sandbarPhoto(), "Cồn Bãi Ngang lúc nước ròng, nhìn từ bãi trước chùa. Bà con cào nghêu đi bộ ra cồn theo lối cát ngầm. Ảnh: <b>Minh Đức</b>")}
        <div class="news-box"><h4>Ghi nhận</h4>
          <p class="small">Lễ cầu an đêm rằm tại chùa Bãi Ngang có hơn 300 phật tử. Chùa phát cháo tới 2 giờ sáng.</p>
          <p class="small">Đài truyền thanh thị xã sẽ phát lại lời nhắn tìm người vào 6 giờ và 18 giờ hằng ngày.</p>
        </div>
      </div>
    </div>
  </div>`,
};

const xetNghiem = {
  id: "xet_nghiem", stage: 1, kind: "Kết quả", label: "Kết quả xét nghiệm mẫu máu",
  html: () => `
  <div class="doc doc--typed">
    ${officeHead("TRUNG TÂM Y TẾ THỊ XÃ HOÀI GIANG", "Khoa Xét nghiệm")}
    <div class="typed-title">PHIẾU TRẢ LỜI KẾT QUẢ</div>
    <div class="typed-sub">Theo yêu cầu của Công an thị xã · ${wd("1998-02-13", "thứ Sáu")} ${dt("1998-02-13", "13-2-1998")}</div>
    <p><b>Mẫu 1:</b> máu khô lấy ở mạn trái ghe HG-0417. Kết quả: <b>máu người, nhóm O</b>. Lượng máu ít, nhiều vệt quệt.</p>
    <p><b>Mẫu 2:</b> máu khô trên cán dao cắt lưới gài ở mạn ghe. Kết quả: <b>máu người, nhóm O</b>.</p>
    <p><b>Mẫu 3:</b> vết máu trên áo của Lê Văn Tư. Kết quả: <b>không phải máu người</b> (máu cá).</p>
    <p><b>Mẫu 4:</b> máu tĩnh mạch của Lê Văn Tư. Kết quả: nhóm B.</p>
    <p><b>Mẫu 5:</b> máu tĩnh mạch của Võ Đình Cường (theo đề nghị của công an). Kết quả: nhóm O.</p>
    <p><b>Đối chiếu hồ sơ:</b> ông Mạc Văn Thành khám sức khoẻ tổng quát tại Trung tâm ngày ${dt("1997-08-28", "28-8-1997")}, nhóm máu O.</p>
    <p><b>Nhận xét:</b> vệt máu dạng quệt, không có vệt văng; lượng máu ít, tương ứng một vết thương ngoài da không lớn.</p>
    <div class="typed-sign"><div></div><div>TRƯỞNG KHOA<div class="sign">Hạnh</div>BS. Lê Ngọc Hạnh</div></div>
    ${stamp("Trung tâm<br>Y tế<br>Hoài Giang", "right:90px;bottom:40px")}
  </div>`,
};

export default [thuyTrieu, khaiNam, kyThuat, bao14, xetNghiem];
