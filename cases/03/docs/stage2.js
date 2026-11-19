// Case 03, third folder (after question 2): the burial inventory, the water carriers' tally, the Byblos merchant,
// and the other water carrier. Facts must agree with the case facts.js.
import { BRACELET_KITE, MIRROR_DEBEN } from "../facts.js";
import { ed, eday, g, n, tr } from "./parts.js";

const danhMuc = {
  id: "danh_muc", stage: 2, kind: "Giấy cói", label: "Danh mục đồ tuỳ táng của phu nhân Nebettawy",
  html: () => `
  <div class="doc doc--papyrus">
    <h3>Danh mục đồ đặt trong lăng phu nhân Nebettawy</h3>
    <p class="center"><i>Lập ngày chôn cất, ${ed("burial")}, lưu ở kho của nghĩa địa</i></p>
    <p>– Quan tài trong và quan tài ngoài bằng gỗ tuyết tùng, thếp vàng.</p>
    <p>– Bốn bình đựng nội tạng bằng đá thạch cao, nắp đầu người.</p>
    <p>– Hộp trang sức gỗ mun, trong đó: <b>sáu vòng tay vàng</b> chạm hình hoa sen, mỗi vòng nặng ${n(BRACELET_KITE)} kite;
      một chuỗi hạt đá xanh; hai đôi khuyên tai bằng đá đỏ.</p>
    <p>– <b>Một gương bạc</b>, cán chạm hình nữ thần Hathor, nặng ${n(MIRROR_DEBEN)} deben.</p>
    <p>– Mười hai tượng người hầu bằng gỗ; hai ghế; một giường gỗ.</p>
    <p>– Vò rượu nho, vò dầu thơm, giỏ bánh.</p>
    <p class="right">Thư lại của nghĩa địa kiểm đếm, thị trưởng Tây Thebes đóng ấn.</p>
    ${tr("giấy cói lưu trữ, chữ thầy tu; số lượng và cân nặng viết bằng chữ số tượng hình.")}
  </div>`,
};

const soNuoc = {
  id: "so_nuoc", stage: 2, kind: "Mảnh gốm", label: "Sổ phát nước của những người gánh nước",
  html: () => {
    const rows = [
      [17, "Pakhar: 2 chuyến lên làng · Penbuy: 2 chuyến lên làng"],
      [18, "Pakhar: 1 chuyến lên làng, 1 chuyến lên Thung lũng (cho đội thợ) · Penbuy: 2 chuyến lên làng"],
      [19, "Pakhar: 2 chuyến lên làng · Penbuy: nghỉ, sang bờ đông xem lễ"],
      [20, "Pakhar: 1 chuyến lên làng, 1 chuyến lên Thung lũng, 4 bình · Penbuy: nghỉ"],
      [21, "Pakhar: 1 chuyến lên làng · Penbuy: 2 chuyến lên làng, 1 chuyến lên Thung lũng"],
      [22, "Pakhar: nghỉ, sang bờ đông mua lúa · Penbuy: 2 chuyến lên làng"],
    ];
    return `
  <div class="doc doc--ostracon clay" style="width:720px">
    <p class="center"><b>Nước phát cho làng Set-Maat · tháng II mùa Peret</b></p>
    <table class="glyph-table" style="text-align:left">
      ${rows.map(([d, t]) => `<tr><td style="width:90px">${eday(d === 20 ? "carry_out" : d === 22 ? "sale" : d === 17 ? "beer" : d === 19 ? "robbery" : d === 18 ? "patrol_ok" : "plaster")}</td><td style="text-align:left;font-size:15px">${t}</td></tr>`).join("")}
    </table>
    <p class="small" style="margin-top:10px">Lệ: ngày thợ nghỉ thì không có chuyến lên Thung lũng; lính gác Medjay có giếng riêng ở trạm gác.</p>
    <p class="tr-note">Bản dịch · mảnh vò đất nung, mực đen. Cột đầu là ngày trong tháng.</p>
  </div>`;
  },
};

const khaiLaiBuon = {
  id: "khai_lai_buon", stage: 2, kind: "Lời khai", label: "Lời khai của lái buôn Tjekerbaal",
  html: () => `
  <div class="doc doc--papyrus">
    <h3>Lời khai của lái buôn người Byblos</h3>
    <p class="center"><i>Bị giữ ở bến Thebes với hàng chưa khai thuế, tháng III mùa Peret, ngày 10</i></p>
    <p>Người khai: <b>Tjekerbaal</b>, lái buôn gỗ tuyết tùng từ Byblos, nói tiếng Ai Cập qua người phiên dịch.</p>
    <p class="line" data-line="tj-1">Vàng trong thuyền tôi là tôi mua ở chợ bến đông, ${ed("sale")}, của một người đàn ông bờ tây.</p>
    <p class="line" data-line="tj-2">Hắn dắt một con lừa xám, trên lưng là hai bình nước bịt kín nắp. Hắn mở một bình, trong đó không có nước.</p>
    <p class="line" data-line="tj-3">Hắn có một vết sẹo bỏng trên má, phía tay trái của hắn. Hắn nói hắn gánh nước cho thợ làm lăng.</p>
    <p class="line" data-line="tj-4">Vàng là bốn cái vòng tay chạm hoa sen. Tôi trả hắn hai mươi deben bạc, hắn không mặc cả.</p>
    <p class="line" data-line="tj-5">Hắn không bán cái gì bằng bạc. Hắn nói có một cái gương nhưng "đã có chủ rồi".</p>
    ${tr("giấy cói, chữ thầy tu; ghi qua người phiên dịch.")}
  </div>`,
};

const khaiPenbuy = {
  id: "khai_penbuy", stage: 2, kind: "Lời khai", label: "Lời khai của người gánh nước Penbuy",
  html: () => `
  <div class="doc doc--papyrus">
    <h3>Lời khai trước thư lại của tể tướng</h3>
    <p class="center"><i>Tháng III mùa Peret, ngày 11</i></p>
    <p>Người khai: <b>Penbuy</b>, người gánh nước của làng Set-Maat.</p>
    <p class="line" data-line="pb-1">Vết sẹo trên má phải tôi là do dao, hồi trai trẻ đánh nhau ở bến đò.</p>
    <p class="line" data-line="pb-2">Ngày 19 và 20 tôi nghỉ, sang bờ đông xem thuyền thần rồi ở lại nhà chị tôi. Ngày 21 tôi mới về làng.</p>
    <p class="line" data-line="pb-3">Con lừa của tôi lông nâu. Lừa xám là của Pakhar.</p>
    <p class="line" data-line="pb-4">Ngày 21 tôi gánh nước lên Thung lũng, thấy đội bên phải đang trát vữa cuối hành lang C lăng số 9, đốc công của họ đứng coi tận nơi, không cho ai lại gần.</p>
    ${tr("giấy cói, chữ thầy tu.")}
  </div>`,
};

export default [danhMuc, soNuoc, khaiLaiBuon, khaiPenbuy];
