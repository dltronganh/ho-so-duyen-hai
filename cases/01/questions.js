// The four staged questions ("trọng điểm") of case 01: public text and form layout only.
// Answers, hints and solutions are encoded separately in cases/01/answers.js.
// stage: the documents of stages 0..stage are available while this question is open;
// solving it unlocks the documents of stage + 1 and shows the editor's memo (unlockNote).

const PEOPLE = ["Phan Thị Nguyệt", "Nguyễn Văn Sáu", "Tôn Thất Khải", "Tôn Thất Vũ", "Hồ Minh Tâm", "Lê Văn Định"];

export const QUESTIONS = [
  {
    id: "q1", stage: 0, title: "Người mất tích",
    ask: "Báo Hoài Giang ám chỉ Lê Văn Định đã lấy kim ấn rồi bỏ trốn. Định có thể là người lấy kim ấn khỏi tủ kính trong lúc mất điện không?",
    parts: [
      { id: "a", type: "choice", label: "Kết luận của bạn", options: ["Có thể", "Không thể"] },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    unlockNote: `Giỏi lắm. Vậy là Định đã đi trước khi đèn tắt, báo Hoài Giang viết ẩu rồi.
      Anh Phát bên công an cho mình chép thêm: lời khai của anh Vũ con cụ Khải, lời khai chủ quán cà phê Hoa Sứ, biên bản bàn giao hiện vật,
      biên bản kiểm tra của bên điện, và bản chép băng ghi âm của đài truyền thanh.
      À, báo Hoài Giang sáng nay đăng một tấm ảnh chụp trong bóng tối. Nhìn thật kỹ nó.`,
  },
  {
    id: "q2", stage: 1, title: "Bàn tay trong bóng tối",
    ask: "Vậy ai đã mở tủ kính trong lúc mất điện? Chỉ ra câu nói dối của người đó về chỗ mình ở lúc mất điện.",
    parts: [
      { id: "a", type: "choice", label: "Người mở tủ kính", options: PEOPLE.filter((p) => p !== "Lê Văn Định") },
      { id: "lie", type: "line", label: "Câu nói dối (bấm vào câu đó trong một lời khai)" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    unlockNote: `Anh Vũ?! Con trai chủ ấn lại lén lấy ấn của chính nhà mình? Mình chưa hiểu anh ta được gì.
      Chị Hoa vừa chạy tới toà soạn với lá thư Định gửi từ Huế. Mình cũng xin được bản sao sổ kê khai đồ thờ nhà họ Tôn Thất,
      trang sách giới thiệu kim ấn, và công văn bảo tàng gửi gia đình cụ Khải hồi đầu tháng.`,
  },
  {
    id: "q3", stage: 2, title: "Vàng thật, vàng giả",
    ask: "Theo sổ sách của gia đình, kim ấn nặng bao nhiêu gam? Chiếc ấn nằm trong tủ kính đêm khai mạc là thật hay giả? Chiều thứ Sáu, Định đã báo chuyện bất thường cho ai?",
    parts: [
      { id: "n", type: "number", label: "Kim ấn theo sổ kê khai của gia đình nặng (gam)", unit: "gam" },
      { id: "a", type: "choice", label: "Chiếc ấn trong tủ kính", options: ["Thật", "Giả"] },
      { id: "b", type: "choice", label: "Định đã báo cho", options: PEOPLE.filter((p) => p !== "Lê Văn Định") },
      { id: "pins", type: "pins", count: 2, label: "Ghim 2 tài liệu chứng minh chiếc ấn trong tủ kính là thật hay giả" },
    ],
    unlockNote: `Ấn giả! Vậy ấn thật đi đâu, và từ bao giờ?
      Sáng nay công an khám phòng anh Vũ, thu được một mảnh giấy đòi nợ và một trang sổ tay; một tổ khác đi dò các xưởng đúc ở làng Phú Kiều, mang về một tờ phiếu đặt hàng. Anh Phát cho mình xem cả ba.
      Thêm bản sao sổ khách sạn Sông Hoài và lời khai ông Tâm. Còn nữa: báo Hoài Giang hôm nay có tin một ngư dân vớt được "vật lạ".`,
  },
  {
    id: "q4", stage: 3, title: "Bản kết luận",
    ask: "Viết bản kết luận cuối cùng cho bài báo: chọn đúng từng chỗ trống, rồi ghim 2 tài liệu quan trọng nhất.",
    parts: [
      { id: "who", type: "choice", label: "Người đã tráo kim ấn thật bằng ấn giả", options: PEOPLE },
      { id: "buyer", type: "choice", label: "Kim ấn thật đã được bán cho", options: PEOPLE },
      { id: "when", type: "choice", label: "Thời điểm tráo và bán", options: ["Tháng 10/1996", "Tháng 12/1996", "Tối thứ Sáu 14/3/1997", "Đêm khai mạc 15/3/1997"] },
      { id: "why", type: "choice", label: "Đêm khai mạc, chiếc ấn trong tủ kính bị lấy đi", options: [
        "Để lấy tiền bảo hiểm 1,5 tỷ đồng",
        "Để đổ tội cho Lê Văn Định",
        "Để phi tang chiếc ấn giả trước buổi giám định sáng thứ Hai",
        "Để giao cho ông Tâm",
      ] },
      { id: "where", type: "choice", label: "Chiếc ấn bị lấy đêm đó giờ ở đâu", options: [
        "Trong hộp gỗ trên bàn thờ nhà cụ Khải",
        "Trong tay ông Tâm ở Sài Gòn",
        "Bị ném xuống sông Hoài, đã được một ngư dân vớt lên",
        "Trong túi Định mang ra Huế",
      ] },
      { id: "pins", type: "pins", count: 2, label: "Ghim 2 tài liệu làm bằng chứng" },
    ],
    unlockNote: "",
  },
];

/** Documents shown when the case is closed, in order. */
export const ENDING_DOCS = ["bai_ket", "hau_truyen"];
