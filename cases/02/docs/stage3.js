// Case 02, fourth folder (after question 3): the night bus manifest, the temple nun's statement, Thành's pocket notebook.
// Facts must agree with the case facts.js. The notebook uses lunar dates and Roman-numeral months (Thành's habit).
import { wd, id, at, dt, lunar, line, stamp } from "../../../js/kit.js";
import { policeHead, statementSign } from "../../../js/docparts.js";

/** Passenger rows: [no, name, ID, boarding point, destination, seat]. */
const PASSENGERS = [
  ["1", "Nguyễn Văn Sang", "205 410 233", "Bến xe Hoài Giang", "Sài Gòn", "1"],
  ["2", "Trần Thị Lựu", "205 512 870", "Bến xe Hoài Giang", "Sài Gòn", "2"],
  ["3", "Phan Văn Tài", "211 023 456", "Bến xe Hoài Giang", "Nha Trang", "5"],
  ["4", "Đỗ Thị Hường", "205 233 019", "Bến xe Hoài Giang", "Phan Rang", "6"],
  ["5", "Mạc Văn Thọ", "205 388 412", "Ngã ba An Phú", "Phan Thiết", "7"],
  ["6", "Lý Văn Tâm", "201 774 650", "Ngã ba An Phú", "Sài Gòn", "8"],
  ["7", "Hồ Thị Mai", "205 900 114", "Cầu Trắng", "Sài Gòn", "11"],
];

const xeDo = {
  id: "xe_do", stage: 3, kind: "Sổ sách", label: "Danh sách hành khách xe đò đêm Thanh Bình",
  html: () => `
  <div class="doc doc--ledger">
    <div class="ledger-head"><div class="small caps">Hợp tác xã vận tải Thanh Bình · Tuyến Hoài Giang – Sài Gòn</div>
      <h3>Danh sách hành khách</h3>
      <div>Chuyến đêm, xuất bến ${at("bus_depart", "0 giờ 35")} ngày ${dt("1998-02-12", "12-2-1998")} · Xe 77K-0391 · Tài xế Đinh Văn Lợi</div></div>
    <table class="ledger">
      <tr><th>STT</th><th>Họ tên</th><th>Số CMND</th><th>Lên xe tại</th><th>Xuống tại</th><th>Ghế</th></tr>
      ${PASSENGERS.map((r) => `<tr><td class="p">${r[0]}</td><td>${r[1]}</td><td>${r[2] === "205 388 412" ? id("tho", r[2]) : r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td></tr>`).join("")}
    </table>
    <p style="margin:12px 0 4px"><b>Tài xế khai thêm với công an:</b> đón khách dọc Quốc lộ 1 theo hẹn. "Tới ngã ba An Phú, khách ghế 7 đã đứng chờ sẵn bên đường, cạnh một chiếc xe máy, có người đàn bà trùm khăn đứng xa xa. Khách lên là xe chạy liền một mạch 35 phút tới Cầu Trắng; tới nơi đồng hồ xe chỉ ${at("bus_cautrang", "1 giờ 20")}." Tới Phan Thiết khoảng 13 giờ, Sài Gòn khoảng 18 giờ.</p>
    <p class="copy-note">Ghi chú của phụ xe: "Ghế 7 đặt chỗ trước bằng điện thoại hôm mồng 10 tháng Giêng, trả tiền khi lên xe. Ghế 8 đặt tại bến."</p>
    ${stamp("HTX vận tải<br>Thanh Bình<br>Bản sao", "right:40px;bottom:20px")}
  </div>`,
};

const khaiChua = {
  id: "khai_chua", stage: 3, kind: "Lời khai", label: "Lời khai sư cô Diệu Hạnh (chùa Bãi Ngang)",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">BIÊN BẢN GHI LỜI KHAI</div>
    <div class="typed-sub">Hồi 9 giờ, ${wd("1998-02-17", "thứ Ba")} ngày ${dt("1998-02-17", "17-2-1998")}, tại chùa Bãi Ngang</div>
    <p>Người khai: <b>Sư cô Thích nữ Diệu Hạnh</b>, chùa Bãi Ngang, phụ trách sổ ghi tên phật tử dự lễ cầu an.</p>
    <div class="qa">
      ${line("hanh-1", "Đ: Cô Lan tới chùa khoảng chín giờ tối rằm, ghi tên cầu an cho gia đình, rồi ngồi tụng kinh ở chánh điện.")}
      ${line("hanh-2", `Đ: Khoảng ${at("lan_leaves_temple", "11 giờ 40")}, sau thời kinh thứ hai, cô Lan nói ra xe lấy áo lạnh. Xe cô đậu dưới gốc dương trước cổng.`)}
      ${line("hanh-3", `Đ: Gần một tiếng rưỡi sau cô mới vô lại, lúc đó chùa vừa phát cháo đợt hai, đồng hồ chánh điện chỉ ${at("lan_back_temple", "1 giờ 05")}.`)}
      ${line("hanh-4", "Đ: Cô vô thì không thấy mặc thêm áo lạnh nào. Ống quần cô ướt tới gối, dép dính cát. Tôi hỏi, cô nói ra bãi rửa mặt cho tỉnh ngủ.")}
      ${line("hanh-5", "Đ: Từ lúc đó tới sáng cô ngồi ở chánh điện, không đi đâu nữa.")}
      ${line("hanh-6", "Đ: Đồng hồ chánh điện là đồng hồ quả lắc, chùa chỉnh theo đài mỗi sáng, ít khi sai quá một hai phút.")}
    </div>
    ${statementSign("Diệu Hạnh", "Thích nữ Diệu Hạnh")}
  </div>`,
};

const soTay = {
  id: "so_tay", stage: 3, kind: "Sổ tay", label: "Sổ tay bỏ túi (thu tại nhà 21 Trần Phú)",
  html: () => `
  <div class="doc doc--grid" style="width:600px">
    <p>${dt("1997-09-03", "3/IX")} – B.V.</p>
    <p class="x">bán ghe? không đủ.</p>
    <p>${dt("1998-01-20", "20/I")} – N.H. lần 3.</p>
    <p>&nbsp;</p>
    <p>${lunar("1998-02-06", "Mồng 10")} âm – TB – 7.</p>
    <p>Rằm I – cồn.</p>
    <p>&nbsp;</p>
    <p class="x">Cường 300</p>
    <p class="small" style="font-size:15px;color:#555;margin-top:14px;font-family:'Plex Mono'">Thu giữ trong túi áo mưa của ông Mạc Văn Thành treo sau cửa nhà 21 Trần Phú, ngày ${dt("1998-02-17", "17-2-1998")}. Chữ viết tay, bút chì.</p>
  </div>`,
};

export default [xeDo, khaiChua, soTay];
