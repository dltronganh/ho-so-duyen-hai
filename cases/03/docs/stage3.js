// Case 03, fourth folder (after question 3): the ox sale, the scribe Hori's confession, the offering list of Sennefer's chapel,
// the Medjay captain's statement. Fifth folder (after question 4): Pakhar's confession. Ending documents.
// Facts must agree with the case facts.js.
import { ed, eday, g, n, tr } from "./parts.js";
import { MIRROR_DEBEN } from "../facts.js";

const bienLaiBo = {
  id: "bien_lai_bo", stage: 3, kind: "Mảnh đá vôi", label: "Biên nhận bán bò ở chợ Tây Thebes",
  html: () => `
  <div class="doc doc--ostracon" style="width:600px">
    <p class="center"><b>Biên nhận</b></p>
    <p>${ed("ox")}.</p>
    <p>Người chăn bò Ahmose bán cho <b>Userhat</b>, đốc công của Thung lũng, một con bò đực đen, khoẻ, sừng dài.</p>
    <p>Giá: <b>một deben bạc</b>, trả bằng một thỏi bạc nhỏ, cân tại chỗ trước hai người làm chứng.</p>
    <p>Làm chứng: thợ đá Kenna, người chăn dê Seti.</p>
    <p class="tr-note">Bản dịch · mảnh đá vôi, mực đen.</p>
  </div>`,
};

const khaiHori = {
  id: "khai_hori", stage: 3, kind: "Lời khai", label: "Lời khai của thư lại Hori",
  html: () => `
  <div class="doc doc--papyrus">
    <h3>Lời khai trước tể tướng</h3>
    <p class="center"><i>Tháng III mùa Peret, ngày 12</i></p>
    <p>Người khai: <b>Hori</b>, thư lại của lăng, người ghi sổ công và nhật ký lăng số 9; làm việc với đội bên phải.</p>
    <p class="line" data-line="ho-1">Ngày 16 tôi nghe tiếng rỗng ở vách cuối hành lang C và báo đốc công. Sáng hôm sau tôi định đo lại thì dây đo bị chuột cắn đứt.</p>
    <p class="line" data-line="ho-2">Sáng 21, đốc công của tôi lên Thung lũng trước đội thợ. Khi tôi tới, cuối hành lang C đã chất kín đá vụn; ông đứng chặn ở đó, nói đá nứt sụt xuống, cho đội trát vữa lên và bảo tôi ghi: "trát vữa vì đá nứt".</p>
    <p class="line" data-line="ho-3">Ông cũng bảo tôi ghi Khonsu vắng vì bọ cạp cắn ba ngày. Tôi không thấy vết cắn nào. Thầy chữa bọ cạp của làng cũng không được gọi.</p>
    <p class="line" data-line="ho-4">Tôi sợ đốc công. Ông nói "người trên" sẽ lo hết, ai hé răng thì mất việc. Ngày đoàn kiểm tra đi, tôi ký theo mọi người, không dám nói.</p>
    ${tr("giấy cói, chữ thầy tu.")}
  </div>`,
};

const leVat = {
  id: "le_vat", stage: 3, kind: "Giấy cói", label: "Danh sách lễ vật của một miếu thờ riêng ở bờ tây",
  html: () => `
  <div class="doc doc--papyrus">
    <h3>Lễ vật dâng nữ thần Hathor ở miếu thờ riêng</h3>
    <p class="center"><i>Tháng III mùa Peret, ngày 6 · người ghi: thầy tế của miếu</i></p>
    <p>– Mười ổ bánh trắng, hai vò bia, một bó sen: do gia nhân dâng.</p>
    <p>– Một cặp vịt quay, một vò dầu thơm: do vợ chủ nhà dâng.</p>
    <p>– <b>Một gương bạc, cán chạm hình nữ thần Hathor</b>, mặt sau khắc một bông sen và con mắt Udjat, mặt gương hơi mờ, nặng ${n(MIRROR_DEBEN)} deben: do chính chủ nhà dâng, "để tạ ơn nữ thần".</p>
    <p>– Một tấm vải lanh mịn: do thư lại riêng của chủ nhà dâng.</p>
    ${tr("giấy cói của miếu, thu được khi khám nhà ngày 11 tháng III; mép giấy có tên chủ nhà đã bị xé mất.")}
  </div>`,
};

const khaiBakenmut = {
  id: "khai_bakenmut", stage: 3, kind: "Lời khai", label: "Lời khai của đội trưởng Medjay Bakenmut",
  html: () => `
  <div class="doc doc--papyrus">
    <h3>Lời khai trước tể tướng</h3>
    <p class="center"><i>Tháng III mùa Peret, ngày 12</i></p>
    <p>Người khai: <b>Bakenmut</b>, đội trưởng lính gác Medjay của Thung lũng.</p>
    <p class="line" data-line="bk-1">Đêm 19 cả đội theo hầu thuyền thần như lệ mọi năm. Thư điều lính của thị trưởng Sennefer tới từ ngày 15, như mọi năm.</p>
    <p class="line" data-line="bk-2">Trưa 20 tôi gặp Pakhar dắt lừa xám chở bình xuống làng. Hắn nói vừa mang nước lên cho lính gác. Lính gác có bể nước riêng, đầy từ đầu tuần, tôi tưởng hắn lẫn.</p>
    <p class="line" data-line="bk-3">Hôm đoàn kiểm tra ngày 4, tôi đi sau cùng, cầm đuốc. Tới lăng nào đoàn cũng chỉ đứng trước cửa một lúc, thị trưởng cúi xem dấu đất sét rồi đi tiếp. Lăng nào cũng vậy, trừ lăng số 9 vì cửa đang mở.</p>
    <p class="line" data-line="bk-4">Đốc công Userhat là người đề nghị đoàn đi lăng phu nhân Nebettawy sau cùng, khi trời đã tối.</p>
    <p class="line" data-line="bk-5">Ngày 11 tôi dẫn lính khám nhà theo lệnh tể tướng: nhà các thợ trong làng, nhà đốc công, và dinh thị trưởng Tây Thebes. Chỉ dinh thị trưởng có miếu thờ riêng, có thầy tế và thư lại riêng.</p>
    ${tr("giấy cói, chữ thầy tu.")}
  </div>`,
};

const khaiPakhar = {
  id: "khai_pakhar", stage: 4, kind: "Lời khai", label: "Lời khai của người gánh nước Pakhar",
  html: () => `
  <div class="doc doc--papyrus">
    <h3>Lời khai trước tể tướng</h3>
    <p class="center"><i>Tháng III mùa Peret, ngày 13 · khai sau khi bị hỏi bằng gậy</i></p>
    <p>Người khai: <b>Pakhar</b>, người gánh nước của làng Set-Maat.</p>
    <p class="line" data-line="pk-1">Ngày ${eday("near_break")}, Khonsu kể với tôi vách hành lang C kêu rỗng; thợ già trong làng ai cũng biết lăng phu nhân nằm sát bên, nên bên kia chắc là phòng mộ. Ngày ${eday("beer")} vợ tôi là Iset ủ bia; hôm sau tôi mang một vò lên Thung lũng cho anh em, vò để ở lăng số 9, chưa ai uống. Cũng ngày ${eday("beer")}, Khonsu cắt đứt dây đo của thư lại để không ai đo ra chỗ vách mỏng.</p>
    <p class="line" data-line="pk-2">Đêm ${eday("robbery")}, lúc cả bờ tây đi xem thuyền thần, chúng tôi nhấc then cửa lăng số 9, vào đục nốt chỗ vách mỏng. Khonsu khắc tên mình lên tảng đá để thề chia đều. Chúng tôi uống vò bia cho đỡ sợ, rồi bỏ quên nó cùng ngọn đèn. Ra về, chúng tôi cài then cửa lăng lại như cũ.</p>
    <p class="line" data-line="pk-3">Trời vừa hửng, thuyền thần về bờ đông, lính Medjay lên lại trạm gác bằng đường mòn của làng, nên chúng tôi không dám mang đồ xuống: giấu trong đống đá vụn ở cửa lăng số 9.
      Trưa ${eday("carry_out")} tôi lên lấy, chở vàng và gương ra trong bình nước. Ngày ${eday("sale")} tôi bán vòng cho người Byblos.</p>
    <p class="line" data-line="pk-4">Sáng ${eday("plaster")} đốc công Userhat thấy lỗ thủng, sai người gọi hai chúng tôi lên. Ông bắt chia phần rồi cho trát vữa, và bắt Khonsu nằm nhà ba ngày "vì bọ cạp cắn" để khỏi đứng trước mặt thợ khác, tiện mang phần đi giấu. Tối hôm đó ông tới nhà tôi lấy cái gương, nói để "biếu người trên"; phần của ông trong số vàng thì tôi trả bằng bạc, sau khi bán cho người Byblos.</p>
    <p class="line" data-line="pk-5">Hôm ${eday("ox")} tháng III, đốc công mua bò. Tôi biết bạc đó từ đâu ra.</p>
    ${tr("giấy cói, chữ thầy tu; ngày viết bằng chữ số tượng hình. Các ngày trên đều thuộc năm 16 mùa Peret, tháng II nếu không ghi khác.")}
  </div>`,
};

const phanQuyet = {
  id: "phan_quyet", stage: 5, kind: "Giấy cói", label: "Phán quyết của toà án tể tướng",
  html: () => `
  <div class="doc doc--papyrus">
    <h3>Phán quyết của toà án lớn do tể tướng Ptahmose chủ toạ</h3>
    <p class="center"><i>Năm 16, tháng III mùa Peret, ngày 20</i></p>
    <p>Đêm 19 tháng II mùa Peret, lúc lính gác theo hầu thuyền thần, thợ đá Khonsu và người gánh nước Pakhar đục nốt hai bàn tay đá cuối hành lang C lăng số 9,
      chui vào phòng mộ phu nhân Nebettawy, lấy bốn vòng tay vàng (một trăm kite, tức mười deben) và chiếc gương bạc. Ngày 20, ngày nghỉ, Pakhar chở đồ ra trong bình nước.</p>
    <p>Đốc công Userhat thấy lỗ thủng sáng 21, ép chia phần, cho trát vữa và bắt thư lại ghi sổ sai. Thị trưởng Sennefer nhận chiếc gương, dẫn đoàn kiểm tra chỉ xem niêm cửa,
      rồi tâu rằng không lăng nào bị mở.</p>
    <p>Toà xử: Khonsu, Pakhar, Userhat bị đày đi mỏ đá ở Nubia; Sennefer bị cách chức, tài sản sung vào đền Amun. Thư lại Hori được tha vì đã khai thật.
      Vàng thu lại từ thuyền của người Byblos và chiếc gương thu ở miếu nhà Sennefer được đặt lại vào lăng; lăng được niêm phong lần nữa, vách tây được xây kín bằng đá.</p>
    ${tr("giấy cói của toà án, chữ thầy tu.")}
  </div>`,
};

const hauTruyen = {
  id: "hau_truyen", stage: 5, kind: "Mảnh đá vôi", label: "Hậu truyện: một mảnh đá vôi trong làng Set-Maat",
  html: () => `
  <div class="doc doc--ostracon" style="width:600px">
    <p>Gửi thư lại của tể tướng,</p>
    <p>Đội bên phải nay có đốc công mới. Lăng số 9 được đục tiếp theo hướng khác, xa lăng phu nhân hai mươi cubit.</p>
    <p>Thị trưởng Nebamun cho dựng một tấm bia nhỏ ở bến đông, ghi tên những người giữ lời thề với người chết.</p>
    <p>Bà Tiy chủ quán bia nói từ nay ai trả bằng bạc, bà sẽ hỏi bạc ở đâu ra.</p>
    <p class="right">Hori, thư lại của lăng</p>
    <p class="tr-note">Bản dịch · mảnh đá vôi, mực đen.</p>
  </div>`,
};

export const stage3 = [bienLaiBo, khaiHori, leVat, khaiBakenmut];
export const stage4 = [khaiPakhar];
export const ending = [phanQuyet, hauTruyen];
