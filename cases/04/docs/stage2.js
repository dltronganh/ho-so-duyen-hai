// Case 04, third folder (after question 2): who received the first catalogue printing, the photo shop's order book,
// statements of the nephew Quân and the reporter Kiều. Mr. Bảo's letter is defined here but appears in the fifth folder.
// Facts must agree with the case facts.js.
import { wd, age, dt, line } from "../../../js/kit.js";
import { policeHead, statementSign } from "../../../js/docparts.js";
import { papyrus } from "../art.js";

/** Opening-night register: [name, title, signature]. 42 copies were handed out; the page shows the first 18 rows. */
const GUESTS = [
  ["Trịnh Gia Bảo", "chủ hiện vật", "G. Bảo"], ["Lâm Quang Tịnh", "giáo sư, viết bài catalogue", "Lâm"], ["Nguyễn Hữu Tài", "Sở Văn hoá – Thông tin", "Tài"],
  ["Trịnh Minh Quân", "cháu ông Bảo", "Quân"], ["Võ Thị Kiều", "phóng viên báo Hoài Giang", "Kiều"], ["Đỗ Văn Khoa", "người dịch nhãn", "Khoa"],
  ["Lê Văn Hoà", "Trường cấp 3 Hoài Giang", "Hoà"], ["Phạm Thị Duyên", "Hội Mỹ thuật tỉnh", "Duyên"], ["Huỳnh Văn Mến", "Xí nghiệp in Hoài Giang", "Mến"],
  ["Trần Thị Ngân", "Trường cấp 2 Nguyễn Du", "Ngân"], ["Đặng Minh Trí", "Đài PT-TH tỉnh", "Trí"], ["Lý Quốc Thịnh", "Bảo hiểm Phương Nam", "Thịnh"],
  ["Tôn Nữ Mai Anh", "Hội Khoa học Lịch sử", "M. Anh"], ["Ngô Văn Lợi", "Công ty Du lịch Hoài Giang", "Lợi"], ["Châu Thị Bích", "Thư viện tỉnh", "Bích"],
  ["Võ Đình Khải", "Phòng Văn hoá thị xã", "Khải"], ["Hồ Văn Sang", "nhà sưu tập tem", "Sang"], ["Lương Thị Hạnh", "Hội Phụ nữ thị xã", "Hạnh"],
];

const kyNhan = {
  id: "ky_nhan", stage: 2, kind: "Sổ sách", label: "Sổ ký nhận catalogue tối khai mạc",
  html: () => `
  <div class="doc doc--ledger">
    <div class="ledger-head"><div class="small caps">Bảo tàng Hoài Giang · Bàn đón khách</div>
      <h3>Sổ ký nhận catalogue</h3>
      <div>Tối ${wd("1999-11-06", "thứ Bảy")} ${dt("1999-11-06", "6/11/1999")} · lễ khai mạc triển lãm · trang 1</div></div>
    <table class="ledger">
      <tr><th style="width:40px">Số</th><th>Họ tên</th><th>Đơn vị / quan hệ</th><th>Ký nhận</th></tr>
      ${GUESTS.map((g, i) => `<tr><td class="p">${i + 1}</td><td>${g[0]}</td><td style="font-size:16px">${g[1]}</td><td style="font-family:'Dancing Script'">${g[2]}</td></tr>`).join("")}
    </table>
    <p style="font-family:'Patrick Hand';font-size:20px;color:#23407a;margin-top:10px">Trang 2–3: thêm 24 người, cộng 42. In 50 cuốn, còn 8 cuốn: đã huỷ sáng ${dt("1999-11-07", "7/11")} (ảnh trang 12 in lỗi, theo GS Lâm). — Hà</p>
    <p class="copy-note">Bản chụp, bảo tàng cho mượn. Nhân viên bảo tàng không ký nhận.</p>
  </div>`,
};

/** Order book rows: [ISO date, customer, work, deposit, delivered]. */
const ORDERS = [
  ["1999-11-02", "bà Tư Lành (bán xôi chợ Đông), 26 Trưng Trắc", "Phục chế 1 ảnh cưới cũ, rách góc, in lại 20×30", "30.000", "6/11"],
  ["1999-11-03", "Bảo tàng Hoài Giang", "In 120 thiệp mời khai mạc triển lãm, in ảnh P-07 theo phim nhà in gửi, có sửa ảnh", "đã trả", "5/11"],
  ["1999-11-06", "anh Hậu (xe khách)", "Vẽ tay lại 1 chân dung theo ảnh thẻ khách đưa, khổ 30×40", "50.000", "10/11"],
  ["1999-11-07", "thầy giáo, không để tên (làm đồ dạy học)", "Vẽ tay 1 tranh theo hình khách đưa, nét vẽ theo tờ mẫu khách kèm. Giấy: của tiệm (giấy cói). Khách lấy 21 giờ, chê &quot;chim quay sai chiều&quot; nhưng gấp nên vẫn lấy.", "150.000", "11/11 tối"],
  ["1999-11-08", "anh Sang (nhà sưu tập tem)", "Chụp 40 con tem, in 9×12", "20.000", "10/11"],
  ["1999-11-09", "chị Duyên (Hội Mỹ thuật)", "Vẽ tay 2 tranh trang trí theo mẫu khách đưa, khổ 40×60", "80.000", "16/11"],
  ["1999-11-13", "khách vãng lai", "Rửa 1 cuộn phim, in 36 ảnh", "—", "14/11"],
  ["1999-11-15", "cô Ngân (trường Nguyễn Du)", "In 1 cuộn phim, 24 ảnh 9×12", "—", "16/11"],
];

const soDatHang = {
  id: "so_dat_hang", stage: 2, kind: "Sổ sách", label: "Sổ nhận đơn của tiệm Ảnh – Phục chế Minh Quân",
  html: () => `
  <div class="doc doc--ledger">
    <div class="ledger-head"><div class="small caps">Ảnh – Phục chế Minh Quân · 52 Lê Lợi</div>
      <h3>Sổ nhận đơn</h3>
      <div>Tháng 11 năm 1999 · trang 14 · công an thu ngày ${dt("1999-11-20", "20/11")}</div></div>
    <table class="ledger">
      <tr><th style="width:70px">Ngày</th><th>Khách</th><th>Việc</th><th>Cọc</th><th>Giao</th></tr>
      ${ORDERS.map((o) => `<tr><td>${dt(o[0], o[0].slice(8).replace(/^0/, "") + "/11")}</td><td style="font-size:17px">${o[1]}</td><td style="font-size:17px">${o[2]}</td><td>${o[3]}</td><td>${o[4]}</td></tr>`).join("")}
    </table>
    <p class="copy-note">Chữ trong sổ là của anh Quân (đơn ngày 7/11 vợ anh nhận ở quầy, tối anh ghi lại).</p>
  </div>`,
};

export const thuBao = {
  id: "thu_bao", stage: 4, kind: "Thư", label: "Thư của ông Trịnh Gia Bảo gửi cháu (thu ở tiệm ảnh)",
  html: () => `
  <div class="doc doc--hand" style="width:640px">
    <p class="right">Marseille, ${dt("1998-03-12", "12-3-1998")}</p>
    <p>Quân cháu,</p>
    <p>Chú gửi theo thư này mười tờ giấy cói mua ở chợ Cairo hồi chú đi chơi năm ngoái, loại người ta vẽ sẵn bán cho khách du lịch, chú chọn mấy tờ còn trơn.
      Cháu làm nghề phục chế, thử in ảnh hay vẽ lên đó xem có ăn mực không.</p>
    <p>Tờ giấy cói của ông nội vẫn cất trong tủ sắt. Bên bảo tàng Hoài Giang có ý hỏi mượn trưng bày năm sau, chú còn đang nghĩ. Ông Lâm nói nó là một trang sổ lương lúa, không phải bùa.</p>
    <p>Nhà hàng bên này dạo ế lắm, nợ ngân hàng chưa biết lấy gì trả; chú đang tính bán bớt mấy món đồ cũ. Giữ sức khoẻ, làm ăn cẩn thận.</p>
    <p class="hand-sign">chú Bảo</p>
  </div>`,
};

const khaiQuan = {
  id: "khai_quan", stage: 2, kind: "Lời khai", label: "Lời khai Trịnh Minh Quân (tiệm ảnh)",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">BIÊN BẢN GHI LỜI KHAI</div>
    <div class="typed-sub">Hồi 9 giờ, ${wd("1999-11-20", "thứ Bảy")} ngày ${dt("1999-11-20", "20-11-1999")}</div>
    <p>Người khai: <b>Trịnh Minh Quân</b>, ${age("quan", "1999-11-20", 34)} tuổi, chủ tiệm Ảnh – Phục chế Minh Quân, 52 Lê Lợi; cháu ruột ông Trịnh Gia Bảo.</p>
    <div class="qa">
      ${line("qu-1", "Đ: Tôi làm ảnh, phục chế ảnh cũ, in thiệp. Tôi chưa bao giờ làm thứ gì trên giấy cói.")}
      ${line("qu-6", "Đ: Tiệm chỉ có hai vợ chồng. Vợ tôi trông quầy, thu tiền, không biết vẽ.")}
      ${line("qu-2", "Đ: Tiệm tôi bán giấy ảnh, giấy vẽ. Khách đặt vẽ thì tiệm lo giấy, khách khỏi mang.")}
      ${line("qu-7", "Đ: Đơn vẽ tay ngày 7/11 là vợ tôi nhận. Vợ tôi kể khách là một thanh niên đeo kính, giọng Bắc, xưng là thầy giáo, trả tiền mặt.")}
      ${line("qu-8", "Đ: Khách kèm một tờ in mười mấy ký hiệu, con chim, cái miệng, bên cạnh có chữ cái Tây. Tôi vẽ nét theo tờ đó.")}
      ${line("qu-3", "Đ: Tối khai mạc tôi nhận một cuốn catalogue. Tôi để ở tiệm, ai vào cũng lật xem được.")}
      ${line("qu-4", "Đ: Tôi không biết đọc chữ Ai Cập. Nhìn thì chỉ thấy hình con chim, cái miệng, mấy vạch số.")}
      ${line("qu-5", "Đ: Tối 18/11 tôi đi nghe giáo sư Lâm nói chuyện, về trước 8 giờ, ra quán cà phê đầu đường ngồi tới 10 giờ.")}
    </div>
    ${statementSign("Quân", "Trịnh Minh Quân")}
  </div>`,
};

const khaiKieu = {
  id: "khai_kieu", stage: 2, kind: "Lời khai", label: "Lời khai Võ Thị Kiều (phóng viên)",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">BIÊN BẢN GHI LỜI KHAI</div>
    <div class="typed-sub">Hồi 14 giờ, ${wd("1999-11-20", "thứ Bảy")} ngày ${dt("1999-11-20", "20-11-1999")}</div>
    <p>Người khai: <b>Võ Thị Kiều</b>, ${age("kieu", "1999-11-20", 28)} tuổi, phóng viên báo Hoài Giang.</p>
    <div class="qa">
      ${line("ki-1", "Đ: Tối khai mạc tủ kính bị loá đèn, chụp không được. Ảnh mảnh P-07 trên báo Chủ nhật là tôi chụp lại từ cuốn catalogue được tặng.")}
      ${line("ki-2", "Đ: Cột báo hẹp, ảnh lại phải in to cho rõ chữ. Tôi đưa cả trang catalogue cho bên dàn trang, họ làm sao thì tôi không rõ.")}
      ${line("ki-3", "Đ: Tôi không biết ảnh trong catalogue có lỗi gì cho tới khi bảo tàng đính chính. Nhìn tôi không thấy khác.")}
      ${line("ki-4", "Đ: Tối 18/11 tôi về thẳng toà soạn viết tin buổi nói chuyện, tới 11 giờ đêm.")}
    </div>
    ${statementSign("Kiều", "Võ Thị Kiều")}
  </div>`,
};

const thiepMoi = {
  id: "thiep_moi", stage: 2, kind: "Thiệp", label: "Thiệp mời dự khai mạc triển lãm (thu ở tiệm ảnh)",
  html: () => `
  <div class="doc doc--brochure" style="width:620px;background:#f7f2e6;border:6px double #7a2a1d">
    <div class="brochure-num center">Bảo tàng Hoài Giang trân trọng kính mời</div>
    <p class="center" style="font-family:'Dancing Script';font-size:30px;margin:6px 0">Ông / Bà ............................</p>
    <p class="center">tới dự lễ khai mạc triển lãm</p>
    <div class="brochure-title center" style="font-size:26px">Giấy cói và chữ thần: Ai Cập cổ đại</div>
    <p class="center" style="margin:12px 0 6px">${papyrus({ mode: "mirror", width: 260, stain: false })}</p>
    <p class="center small">Vào lúc 18 giờ, ${wd("1999-11-06", "thứ Bảy")} ngày ${dt("1999-11-06", "6-11-1999")}, tại bảo tàng, 4 Lê Thánh Tôn.</p>
    <p class="center small muted">In tại Ảnh – Phục chế Minh Quân. Tiệm còn giữ 6 thiệp in thừa.</p>
  </div>`,
};

export default [kyNhan, soDatHang, thiepMoi, khaiQuan, khaiKieu];
