// Case 04, second folder (after question 1): the photographs of fragment P-07 over the two weeks of the exhibition
// (registration photo, both catalogue printings, the newspaper, a class snapshot), Prof. Lâm's essay, the visitors' sign chart.
// Facts must agree with the case facts.js. papyrus() modes: genuine, mirror (flipped print), fake (hand-made copy).
import { wd, age, dt, photo, stamp } from "../../../js/kit.js";
import { officeHead, dailyMast, goldBox } from "../../../js/docparts.js";
import { SIGNS, NUM } from "../../03/facts.js";
import { papyrus, classPhoto } from "../art.js";

const tinhTrang = {
  id: "tinh_trang", stage: 1, kind: "Biên bản", label: "Biên bản tình trạng hiện vật P-07 lúc nhận vào bảo tàng",
  html: () => `
  <div class="doc doc--typed">
    ${officeHead("SỞ VĂN HOÁ – THÔNG TIN", "Bảo tàng Hoài Giang")}
    <div class="typed-title">BIÊN BẢN TÌNH TRẠNG HIỆN VẬT</div>
    <div class="typed-sub">Lập tại phòng bảo quản, ${wd("1999-11-04", "thứ Năm")} ngày ${dt("1999-11-04", "4-11-1999")}</div>
    <p>Hiện vật: <b>P-07</b>, mảnh giấy cói có chữ tượng hình, của ông Trịnh Gia Bảo cho mượn trưng bày từ ${dt("1999-11-06", "6-11")} tới ${dt("1999-11-21", "21-11-1999")}.</p>
    <p>Kích thước: 24 × 19 cm. Màu vàng nâu, mực đen. Bốn dòng chữ.</p>
    <p>Hư hại: một lỗ mọt nhỏ hình bầu dục ở góc trên bên phải; một vết ố nâu ở góc dưới bên trái; mép phải rách không đều. Không có vết gãy mới.</p>
    <p class="center" style="margin:12px 0 4px">${papyrus({ mode: "genuine", width: 320 })}</p>
    <p class="center small">Ảnh đăng ký, chụp tại phòng bảo quản ngày ${dt("1999-11-04", "4-11-1999")}. Phim âm bản lưu ở kho lưu trữ của bảo tàng.</p>
    <p>Giáo sư Lâm Quang Tịnh xác nhận: <i>"Đúng là mảnh tôi đã xem và chụp ở nhà ông Bảo tại Marseille năm 1971, không thiếu một dòng, không thêm một nét."</i></p>
    <div class="typed-sign"><div>CÁN BỘ BẢO QUẢN<div class="sign">Hà</div>Lê Thu Hà</div><div>CHỦ HIỆN VẬT<div class="sign">G. Bảo</div>Trịnh Gia Bảo</div></div>
    <div class="typed-sign" style="margin-top:6px"><div></div><div>NGƯỜI GIÁM ĐỊNH<div class="sign">Lâm</div>GS Lâm Quang Tịnh</div></div>
  </div>`,
};

/** One page of the exhibition catalogue (page 12, fragment P-07). */
const cataloguePage = (mode, tone, colophon, extraCaption = "") => `
    <div class="brochure-num">Giấy cói và chữ thần · Ai Cập cổ đại · Catalogue triển lãm · trang 12</div>
    <p class="center" style="margin:14px 0 8px">${papyrus({ mode, width: 320, tone })}</p>
    <p class="small"><b>P-07.</b> Mảnh sổ phát lương lúa của làng thợ Set-Maat. Giấy cói, chữ tượng hình, năm 16 đời Pharaoh (khoảng 1100 năm trước Công nguyên).
      24 × 19 cm. Sưu tập Trịnh Gia Bảo, Marseille.${extraCaption || " Ảnh: GS Lâm Quang Tịnh chụp ở Marseille năm 1971."}</p>
    <p class="small muted" style="margin-top:18px;border-top:1px solid #999;padding-top:6px">${colophon}</p>`;

const catalogue1 = {
  id: "catalogue1", stage: 1, kind: "Catalogue", label: "Catalogue triển lãm, trang 12 (cuốn phát tối khai mạc)",
  html: () => `
  <div class="doc doc--brochure">
    ${cataloguePage("mirror", "", `Ban tổ chức triển lãm giữ bản quyền. In 50 cuốn tại Xí nghiệp in Hoài Giang, in xong ngày ${dt("1999-11-04", "4-11-1999")}. Không bán.`)}
  </div>`,
};

const catalogue2 = {
  id: "catalogue2", stage: 1, kind: "Catalogue", label: "Catalogue triển lãm, trang 12 (cuốn bán ở quầy vé)",
  html: () => `
  <div class="doc doc--brochure">
    ${cataloguePage("genuine", "case", `Ban tổ chức triển lãm giữ bản quyền. In lần thứ hai, 300 cuốn, tại Xí nghiệp in Hoài Giang, in xong ngày ${dt("1999-11-10", "10-11-1999")}. Giá 15.000 đồng.`,
      ` Ảnh chụp lại tại tủ trưng bày sáng ${dt("1999-11-09", "9-11-1999")}.`)}
    <div style="margin-top:16px;padding:10px 14px;background:#fffbe8;border:1px solid #b9a66a;transform:rotate(-1.2deg);font-size:14px">
      <b>ĐÍNH CHÍNH</b> (tờ rời kẹp ở trang 12). Ảnh mảnh P-07 ở trang 12 của bản in ngày ${dt("1999-11-04", "4-11-1999")} bị lỗi khi làm phim.
      Bản in này dùng ảnh chụp lại. Ban tổ chức xin lỗi bạn đọc.</div>
  </div>`,
};

const bao7 = {
  id: "bao_7", stage: 1, kind: "Báo", label: "Báo Hoài Giang, Chủ nhật 7/11 – trang nhất",
  html: () => `
  <div class="doc doc--news">
    ${dailyMast("1999-11-07", "Chủ nhật", "Năm Kỷ Mão", "2.157", "XXIV")}
    <div class="news-grid" style="grid-template-columns: 2.05fr 1fr">
      <div>
        <div class="news-kicker">Triển lãm "Giấy cói và chữ thần: Ai Cập cổ đại"</div>
        <h1 class="news-head">Ba nghìn năm chữ viết bên sông Nile về Hoài Giang</h1>
        <div class="news-deck">Bốn mươi hiện vật của một Việt kiều · Mảnh giấy cói ghi tên ba người thợ</div>
        <figure class="photo" style="text-align:center">${papyrus({ mode: "mirror", width: 300, tone: "news", hole: false, cropLeft: 80 })}
          <figcaption>Mảnh giấy cói P-07, hiện vật quý nhất của triển lãm. Ảnh: <b>trích catalogue triển lãm</b></figcaption></figure>
        <div class="news-by">Võ Thị Kiều</div>
        <div class="news-cols" style="columns:2">
          <p class="dropcap">Tối ${wd("1999-11-06", "thứ Bảy")} ${dt("1999-11-06", "6-11")}, bảo tàng Hoài Giang khai mạc triển lãm "Giấy cói và chữ thần: Ai Cập cổ đại" với bốn mươi hiện vật
            do ông <b>Trịnh Gia Bảo</b> (${age("bao", "1999-11-06", 71)} tuổi), Việt kiều ở Marseille, cho mượn. Ông nội ông Bảo, cụ Trịnh Văn Lộc, sang Ai Cập làm lính thợ
            năm 1919 và mua các hiện vật ở Luxor.</p>
          <p>Bà <b>Phan Thị Nguyệt</b>, giám đốc bảo tàng, cho biết đây là lần đầu tiên ở tỉnh có hiện vật Ai Cập thật. Bốn mươi hai khách mời được tặng catalogue in màu.</p>
          <p>Quý nhất là mảnh giấy cói P-07, một trang sổ phát lương lúa của làng thợ xây lăng vua. Theo Giáo sư <b>Lâm Quang Tịnh</b>, người đã nghiên cứu mảnh này từ năm 1971,
            ba dòng tên trên đó là của một thợ đá, một thợ vẽ và một thư lại. "Ba nghìn năm trước họ lĩnh lúa, hôm nay họ về Hoài Giang", giáo sư nói.</p>
          <p>Triển lãm mở cửa tới ${dt("1999-11-21", "21-11")}, từ 8 giờ tới 17 giờ, nghỉ thứ Hai. Vé 2.000 đồng, học sinh được miễn.</p>
        </div>
      </div>
      <div>
        ${goldBox("4.230.000", "4.260.000")}
        <div class="news-box"><h4>Tin ngắn</h4>
          <p class="small"><b>Mưa lớn.</b> Đài khí tượng dự báo tuần tới miền Trung còn mưa to, bà con vùng trũng đề phòng lũ.</p>
          <p class="small"><b>Cầu Hoài Giang.</b> Cầu mới sẽ thông xe trước Tết Canh Thìn.</p>
        </div>
        <div class="news-ad"><div class="big">Ảnh – Phục chế Minh Quân</div><p class="small" style="margin:4px 0 0">Phục chế ảnh cũ · In ảnh màu lấy liền · Nhận làm tranh, thiệp theo mẫu<br>52 Lê Lợi · ĐT 82 318</p></div>
      </div>
    </div>
  </div>`,
};

const anhLop = {
  id: "anh_lop", stage: 1, kind: "Ảnh", label: "Ảnh lớp 8A trước tủ P-07 (cô giáo nộp cho công an)",
  html: () => `
  <div class="doc doc--brochure" style="width:820px;background:#fbfaf5">
    ${photo(classPhoto(), "", "print")}
    <div style="margin-top:10px;padding:10px 14px;background:#ece8dc;font-family:'Patrick Hand';font-size:21px;color:#23407a">
      Mặt sau ảnh: <i>Lớp 8A trường cấp 2 Nguyễn Du đi tham quan bảo tàng, chiều ${wd("1999-11-14", "chủ nhật")} ${dt("1999-11-14", "14/11/99")}. Cô Ngân.</i></div>
    <p class="small muted" style="margin-top:6px">Mặt sau còn một dấu mực tím: "Ảnh Minh Quân · 52 Lê Lợi".</p>
  </div>`,
};

const baiLam = {
  id: "bai_lam", stage: 1, kind: "Catalogue", label: "Bài của GS Lâm Quang Tịnh trong catalogue (trang 10–11)",
  html: () => `
  <div class="doc doc--brochure">
    <div class="brochure-num">Catalogue triển lãm · trang 10–11</div>
    <div class="brochure-title">Một trang sổ lương ba nghìn năm</div>
    <p class="small muted">Giáo sư Lâm Quang Tịnh, nguyên giảng viên Ai Cập học</p>
    <p style="margin-top:10px">Năm 1971, khi đang làm việc ở Paris, tôi xuống Marseille xem mấy hiện vật cụ Trịnh Văn Lộc mang từ Luxor về năm 1919. Trong đó có một mảnh giấy cói nhỏ
      mà gia đình gọi là "tờ bùa". Đó không phải bùa, mà là một trang sổ phát lương của làng thợ Set-Maat, những người đục và vẽ lăng vua ở Thung lũng phía tây Thebes. Theo chỗ tôi biết, đây là trang sổ lương duy nhất của làng thợ ấy còn ở ngoài Ai Cập.</p>
    <p>Mảnh có bốn dòng chữ tượng hình. Dòng đầu là con số mười sáu: năm thứ 16 đời một Pharaoh. Ba dòng dưới là tên ba người lĩnh lúa: thợ đá <b>Khonsu</b>,
      thợ vẽ <b>Iuy</b>, thư lại <b>Hori</b>. Phần ghi số bao lúa của từng người đã mất theo mép rách.</p>
    <p>Người Ai Cập không viết nguyên âm. Tên Khonsu trên giấy chỉ có bốn phụ âm; hai tên kia, mỗi tên ba phụ âm. Khách tham quan có thể tự đọc với bảng chữ phát ở cửa.</p>
    <p>Hai mươi tám năm sau, mảnh giấy cói vẫn y như ngày tôi chụp nó trong căn bếp ở Marseille. Tôi mong các em học sinh Hoài Giang tới xem ba người thợ ấy.</p>
  </div>`,
};

/** The visitors' sign chart: a subset of the uniliteral signs of case 03, plus numerals and the reading rules. */
const CHART = [["A", "chim kền kền"], ["I", "lá sậy"], ["Y", "hai lá sậy"], ["W", "chim cút con"], ["B", "bàn chân"], ["P", "ghế đẩu"],
  ["M", "con cú"], ["N", "mặt nước"], ["R", "cái miệng"], ["H", "mái lều"], ["KH", "nhau thai"], ["S", "nếp vải"],
  ["SH", "cái ao"], ["K", "cái giỏ"], ["T", "ổ bánh"], ["D", "bàn tay"]];

const bangChu = {
  id: "bang_chu", stage: 1, kind: "Tờ rơi", label: "Bảng chữ tượng hình phát cho khách ở cửa",
  html: () => {
    const cells = CHART.map(([k, name]) => `<td><span class="glyphs">${SIGNS[k]}</span><b>${k}</b><br><span class="small">${name}</span></td>`);
    const rows = [];
    for (let i = 0; i < cells.length; i += 4) rows.push(`<tr>${cells.slice(i, i + 4).join("")}</tr>`);
    return `
  <div class="doc doc--brochure" style="width:640px">
    <div class="brochure-num">Tờ rơi cho khách tham quan</div>
    <div class="brochure-title" style="font-size:26px">Tự đọc chữ tượng hình</div>
    <p class="small" style="margin-top:8px">Mỗi ký hiệu dưới đây đọc thành một phụ âm. Người Ai Cập không viết nguyên âm: tên Ptah viết P – T – Ḥ.</p>
    <table class="glyph-table">${rows.join("")}</table>
    <p class="small" style="margin-top:10px"><b>Chiều đọc.</b> Chữ tượng hình viết được cả từ trái sang phải lẫn từ phải sang trái.
      Hình người, chim, thú luôn quay mặt về phía đầu dòng. Muốn biết đọc từ phía nào, hãy nhìn xem con vật quay mặt về phía nào: đó là quy tắc chắc nhất, mọi thứ khác trong dòng phải theo nó.</p>
    <p class="small"><b>Số.</b> <span class="glyphs" style="font-size:24px">${NUM[10]}</span> = 10, <span class="glyphs" style="font-size:24px">${NUM[1]}</span> = 1.
      Trong một con số, hàng chục luôn đứng trước hàng đơn vị theo chiều đọc: <span class="glyphs" style="font-size:24px">${NUM[10]}${NUM[10]}${NUM[1]}${NUM[1]}${NUM[1]}</span> = 23.</p>
  </div>`;
  },
};

export default [tinhTrang, catalogue1, bao7, catalogue2, anhLop, baiLam, bangChu];
