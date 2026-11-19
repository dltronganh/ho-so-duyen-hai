// Case 03, second folder (after question 1): the work journal of tomb 9, the survey plan, copies of the marks in the tomb,
// statements of Khonsu and Iuy. Facts must agree with the case facts.js.
import { PROGRESS, CORRIDOR_START, WALL_DISTANCE, NUM, numeral } from "../facts.js";
import { ed, g, n, tr } from "./parts.js";

const dayNum = (d) => `<span class="glyphs" style="font-size:24px">${numeral(d)}</span>`;

const nhatKy = {
  id: "nhat_ky", stage: 1, kind: "Giấy cói", label: "Nhật ký công việc lăng số 9 (thư lại Hori)",
  html: () => {
    const p = (d) => `${n(PROGRESS[d][0], 22)} cubit ${n(PROGRESS[d][1], 22)} bàn tay`;
    const rows = [
      [11, `Đầu tuần. Sáng nay, trước khi đục, hành lang C tính từ cửa lăng dài ${n(CORRIDOR_START, 22)} cubit. Bên phải đục hành lang C thêm ${p(11)}. Bên trái đục phòng D.`],
      [12, `Bên phải: hành lang C thêm ${p(12)}. Bên trái: phòng D.`],
      [13, `Bên phải: hành lang C thêm ${p(13)}. Đá cứng, Khonsu đổi đục hai lần.`],
      [14, `Bên phải: hành lang C thêm ${p(14)}. Phát lúa tháng.`],
      [15, `Bên phải: hành lang C thêm ${p(15)}. Bên trái: phòng D xong phần thô.`],
      [16, `Bên phải: hành lang C thêm ${p(16)}. Vách cuối hành lang C gõ nghe tiếng rỗng. Đốc công cho dừng hành lang C, chờ thư lại đo lại theo bản vẽ.`],
      [17, "Bên phải: trát vữa, vẽ phác phòng B. Không đo được hành lang C: dây đo bị chuột cắn đứt. Kenna vắng, ủ bia."],
      [18, "Bên phải: chở đá vụn ra cửa lăng. Đốc công khoá then cửa lăng trước khi về."],
      [21, "Theo lệnh đốc công, trát vữa kín vách cuối hành lang C. Đốc công nói đá ở đó nứt, sợ sập. Khonsu vắng: bị bọ cạp cắn."],
      [22, "Bên phải: phòng B. Bên trái: hành lang B. Khonsu vắng: bọ cạp cắn."],
      [23, "Bên phải: phòng B. Khonsu vắng: bọ cạp cắn."],
    ];
    return `
  <div class="doc doc--papyrus" style="width:860px">
    <h3>Nhật ký công việc lăng số 9 của hoàng tử</h3>
    <p class="center"><i>Năm 16, tháng II mùa Peret · thư lại Hori ghi các ngày làm việc</i></p>
    <table class="glyph-table" style="text-align:left">
      ${rows.map(([d, t]) => `<tr><td style="width:100px">${dayNum(d)}</td><td style="text-align:left;font-size:15px">${t}</td></tr>`).join("")}
    </table>
    ${tr("cột đầu là ngày trong tháng. Số đo viết bằng chữ số tượng hình.")}
  </div>`;
  },
};

/** Survey plan of tomb 9 and Nebettawy's tomb, drawn on a limestone flake (copied). */
function plan() {
  const t = (x, y, s, o = "") => `<text x="${x}" y="${y}" font-family="Old Standard, serif" font-size="16" fill="#2a1c0e" ${o}>${s}</text>`;
  const gl = (x, y, s, size = 22) => `<text x="${x}" y="${y}" font-family="Hieroglyphs" font-size="${size}" fill="#2a1c0e">${s}</text>`;
  let s = `<svg viewBox="0 0 820 520" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%">`;
  s += `<rect width="820" height="520" fill="#e6d9c0"/>`;
  // Tomb 9: entrance at left, corridor A down, room B, corridor C heading right (east), towards Nebettawy.
  s += `<g fill="none" stroke="#7a1f10" stroke-width="3">`;
  s += `<rect x="60" y="120" width="40" height="40"/><path d="M100 130 L240 130 L240 150 L100 150"/>`;
  s += `<rect x="240" y="100" width="90" height="80"/>`;
  s += `<path d="M330 132 L560 132 M330 148 L560 148"/><path d="M560 132 L560 148" stroke-dasharray="4 4"/>`;
  s += `<path d="M285 180 L285 300 M300 180 L300 300"/><rect x="250" y="300" width="90" height="70"/>`;
  s += `</g>`;
  s += t(48, 110, "cửa lăng 9") + t(150, 122, "hành lang A") + t(250, 95, "phòng B") + t(380, 124, "hành lang C") + t(310, 240, "hành lang B", `transform="rotate(90 310 240)"`) + t(262, 392, "phòng D");
  // Nebettawy's tomb (older) further right, slightly lower: burial chamber with north wall facing corridor C's end.
  s += `<g fill="none" stroke="#2a1c0e" stroke-width="3"><rect x="580" y="100" width="160" height="110"/><path d="M660 210 L660 430 M680 210 L680 430"/><rect x="640" y="430" width="60" height="40"/></g>`;
  s += t(592, 150, "phòng mộ") + t(592, 170, "phu nhân Nebettawy") + t(690, 370, "đường xuống") + t(612, 492, "cửa lăng phu nhân");
  s += t(566, 235, "vách tây", `font-style="italic" font-size="14" transform="rotate(-90 566 235)"`);
  // measurement along corridor C
  s += `<path d="M80 76 L580 76" stroke="#2a1c0e" stroke-width="1.5"/><path d="M80 68 L80 84 M580 68 L580 84" stroke="#2a1c0e" stroke-width="1.5"/>`;
  s += t(90, 30, "từ cửa lăng 9, theo trục hành lang C, tới vách phòng mộ phu nhân:");
  s += gl(230, 60, numeral(WALL_DISTANCE[0]), 40) + t(420, 56, "cubit", `font-size="20"`);
  s += t(40, 505, "Thư lại của nghĩa địa đo năm 15, khi bắt đầu đục lăng 9: trục hành lang C là trục thiết kế. Hình không đúng tỉ lệ, chỉ số đo là đúng.", `font-size="13" font-style="italic"`);
  s += `</svg>`;
  return s;
}

const banVe = {
  id: "ban_ve", stage: 1, kind: "Bản vẽ", label: "Bản vẽ khảo sát lăng số 9 và lăng phu nhân",
  html: () => `
  <div class="doc doc--ostracon" style="width:900px;border-radius:12% 8% 10% 14% / 10% 14% 8% 12%">
    ${plan()}
    <p class="tr-note">Bản dịch · bản vẽ mực đỏ và đen trên một phiến đá vôi lớn, lưu ở nhà thư lại của nghĩa địa. Chữ số tượng hình giữ nguyên.</p>
  </div>`,
};

const hinhKhac = {
  id: "hinh_khac", stage: 1, kind: "Bản chép", label: "Bản chép các dấu khắc tìm thấy trong lăng phu nhân",
  html: () => `
  <div class="doc doc--papyrus">
    <h3>Các dấu khắc trong lăng phu nhân Nebettawy</h3>
    <p class="center"><i>Thư lại của tể tướng chép ngày mở lăng</i></p>
    <p><b>Dấu thứ nhất.</b> Khắc vội bằng mũi đục trên một tảng đá ở mép lỗ thủng vách tây, phía trong phòng mộ. Vết khắc còn trắng, bụi đá chưa bám:</p>
    <p class="center">${["W", "S", "N", "KH"].map((k) => `<span class="glyphs big" style="display:inline-block;transform:scaleX(-1)">${g(k)}</span>`).join("")}</p>
    <p><b>Dấu thứ hai.</b> Vẽ bằng mực đỏ, nhỏ, ở góc dưới tranh tường phía đông, bên cạnh hình nữ thần Hathor. Màu đã phai như tranh:</p>
    <p class="center glyphs big red">${g("I W Y")} <span style="font-family:'Old Standard';font-size:22px;color:#2a1c0e">năm</span> ${numeral(3)}</p>
    <p><b>Dấu thứ ba.</b> Ở bậc thang thứ hai, một dấu ấn đất sét của nghĩa địa (con chó rừng nằm trên chín tù binh), là dấu niêm từ ngày chôn cất.</p>
    ${tr("các ký hiệu chép đúng như trên đá, không đổi chiều.")}
  </div>`,
};

const khaiKhonsu = {
  id: "khai_khonsu", stage: 1, kind: "Lời khai", label: "Lời khai của thợ đá Khonsu",
  html: () => `
  <div class="doc doc--papyrus">
    <h3>Lời khai trước tể tướng</h3>
    <p class="center"><i>${ed("opening")}, buổi chiều</i></p>
    <p>Người khai: <b>Khonsu</b>, thợ đá bên phải, làng Set-Maat. Được hỏi bằng gậy theo lệ.</p>
    <p class="line" data-line="kh-1">Tôi đục hành lang C lăng số 9 từ tháng trước. Ngày 16 vách cuối nghe tiếng rỗng, đốc công cho dừng. Tôi không biết bên kia là gì.</p>
    <p class="line" data-line="kh-2">Ngày nghỉ 19 và 20 tôi ở nhà trong làng, ngủ và sửa mái nhà. Đêm 19 làng đốt đèn xem thuyền thần bên sông.</p>
    <p class="line" data-line="kh-3">Sáng 21 tôi bị bọ cạp cắn ở chân trên đường lên Thung lũng, phải nằm ba ngày. Thư lại Hori đã ghi.</p>
    <p class="line" data-line="kh-4">Tôi không biết chữ, nhưng thợ đá nào cũng biết vẽ tên mình để đánh dấu đá đã đục.</p>
    <p class="line" data-line="kh-5">Lăng phu nhân Nebettawy tôi chưa từng vào. Nó được đục từ trước khi tôi vào đội.</p>
    ${tr("giấy cói, chữ thầy tu; thư lại của tể tướng ghi.")}
  </div>`,
};

const khaiIuy = {
  id: "khai_iuy", stage: 1, kind: "Lời khai", label: "Lời khai của thợ vẽ Iuy",
  html: () => `
  <div class="doc doc--papyrus">
    <h3>Lời khai trước tể tướng</h3>
    <p class="center"><i>${ed("opening")}, buổi chiều</i></p>
    <p>Người khai: <b>Iuy</b>, thợ vẽ già bên phải.</p>
    <p class="line" data-line="iu-1">Tranh tường lăng phu nhân Nebettawy là tôi vẽ, từ năm thứ 3 đời Pharaoh, khi phu nhân còn sống và lăng mới đục xong.</p>
    <p class="line" data-line="iu-2">Thợ vẽ nào cũng ký tên nhỏ ở góc tranh, cầu thần ghi công. Tôi ký bằng mực đỏ như mọi lần.</p>
    <p class="line" data-line="iu-3">Từ năm thứ 10 mắt trái tôi mù. Nay tôi chỉ tô màu ở chỗ sáng gần cửa lăng, không xuống chỗ tối được nữa.</p>
    <p class="line" data-line="iu-4">Đêm 19 tôi đi xem thuyền thần với cháu ở bến đò, cả làng thấy.</p>
    ${tr("giấy cói, chữ thầy tu.")}
  </div>`,
};

export default [nhatKy, banVe, hinhKhac, khaiKhonsu, khaiIuy];
