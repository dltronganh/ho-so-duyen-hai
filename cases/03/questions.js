// The five staged questions of case 03 (public text and form layout). Answers, hints and solutions are in
// cases/03/answers.js (encoded). Question N uses documents of stages 0..N-1.

export const QUESTIONS = [
  {
    id: "q1", stage: 0, title: "Đêm nào",
    ask: "Thị trưởng Tây Thebes nói lăng không hề bị mở, nhưng biên bản mở lăng cho thấy điều ngược lại. Lăng phu nhân Nebettawy đã bị đột nhập vào đêm ngày mấy của tháng II mùa Peret?",
    parts: [
      { id: "day", type: "number", label: "Đêm ngày (số ngày trong tháng)" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    unlockNote: `Ngươi đã chỉ ra đêm nào. Ta cho thư lại của lăng nộp nhật ký công việc, cho người chép các dấu khắc trong lăng phu nhân,
      lấy bản vẽ khảo sát ở nhà thư lại của nghĩa địa, và hỏi cung hai người thợ.`,
  },
  {
    id: "q2", stage: 1, title: "Lối vào",
    ask: "Kẻ đột nhập vào phòng mộ bằng lối nào? Tới hết ngày 16, hành lang C của lăng số 9 dài bao nhiêu cubit tính từ cửa lăng? Dấu khắc vội ở mép lỗ thủng là tên ai?",
    parts: [
      { id: "route", type: "choice", label: "Lối vào", options: [
        "Qua cửa chính, rồi niêm phong lại bằng ấn giả",
        "Qua đường hầm từ hành lang C của lăng số 9",
        "Qua một giếng thông gió đục từ đỉnh đồi",
        "Qua đường hầm từ một lăng cũ bỏ hoang phía nam",
      ] },
      { id: "len", type: "number", label: "Hành lang C dài (số cubit trọn, bỏ phần bàn tay lẻ)", unit: "cubit" },
      { id: "name", type: "text", label: "Tên khắc ở mép lỗ thủng (viết như trong danh sách đội thợ)" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    unlockNote: `Ta đã cho phá lớp vữa: đường hầm thông ra hành lang C, đúng như ngươi nói. Giờ ta muốn biết vàng đi đâu.
      Ngươi có danh mục đồ tuỳ táng trong kho nghĩa địa, sổ phát nước của làng, lời khai của một lái buôn bị giữ ở bến và của một người gánh nước.`,
  },
  {
    id: "q3", stage: 2, title: "Vàng đi đâu",
    ask: "Ai đã mang đồ trong lăng ra khỏi Thung lũng, bằng cách nào? Số vàng bị bán nặng bao nhiêu deben?",
    parts: [
      { id: "who", type: "choice", label: "Người mang đồ ra", options: ["Khonsu", "Pakhar", "Penbuy", "Userhat", "Iuy"] },
      { id: "how", type: "choice", label: "Bằng cách", options: [
        "Giấu trong giỏ đá vụn của đội thợ",
        "Giấu trong bình nước chở trên lưng lừa, vào ngày nghỉ",
        "Ném qua vách núi xuống làng",
        "Giấu trong quan tài của một đám tang khác",
      ] },
      { id: "deben", type: "number", label: "Vàng bị bán nặng (deben)", unit: "deben" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    unlockNote: `Vàng đã lên thuyền người Byblos. Còn chiếc gương bạc? Và vì sao đoàn kiểm tra không thấy gì?
      Ta cho khám nhà vài người. Ngươi có biên nhận ở chợ, lời khai của thư lại Hori và đội trưởng Medjay, và một danh sách lễ vật.`,
  },
  {
    id: "q4", stage: 3, title: "Người che giấu",
    ask: "Ai đã cho bịt đường hầm? Vì sao đoàn kiểm tra ngày 4 không thấy lăng bị mở? Ai đã nhận chiếc gương bạc?",
    parts: [
      { id: "sealer", type: "choice", label: "Người cho bịt đường hầm", options: ["Hori", "Khonsu", "Userhat", "Nakhtmin", "Bakenmut"] },
      { id: "why", type: "choice", label: "Đoàn kiểm tra không thấy vì", options: [
        "Kẻ trộm đã niêm phong lại cửa lăng bằng ấn giả",
        "Đoàn chỉ xem dấu niêm ngoài cửa, không vào trong lăng",
        "Cát lấp lối vào nên không vào được",
        "Đoàn kiểm tra nhầm sang lăng khác",
      ] },
      { id: "mirror", type: "choice", label: "Người cuối cùng nhận chiếc gương bạc", options: ["Tjekerbaal", "Pakhar", "Userhat", "Sennefer", "Nebamun"] },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    unlockNote: `Pakhar đã khai hết. Viết cho ta bản tổng kết để đọc trước toà: các việc theo đúng thứ tự, và kẻ trộm đã có bao nhiêu ngày trước khi lăng được mở.`,
  },
  {
    id: "q5", stage: 4, title: "Trước toà",
    ask: "Xếp 7 sự việc theo đúng thứ tự thời gian. Từ đêm đột nhập tới ngày tể tướng mở lăng là bao nhiêu ngày?",
    parts: [
      { id: "order", type: "order", label: "Xếp theo thứ tự thời gian (sớm nhất ở trên)", items: [
        "Vữa được trát kín vách cuối hành lang C",
        "Chôn cất phu nhân Nebettawy",
        "Đoàn của thị trưởng Sennefer đi kiểm tra",
        "Thợ vẽ Iuy vẽ tranh tường lăng phu nhân",
        "Đốc công mua bò",
        "Vách cuối hành lang C gõ nghe tiếng rỗng",
        "Bản vẽ khảo sát lăng số 9 được đo",
      ] },
      { id: "days", type: "number", label: "Số ngày (đêm đột nhập tính là ngày 0)", unit: "ngày" },
      { id: "pins", type: "pins", count: 2, label: "Ghim 2 tài liệu làm bằng chứng" },
    ],
    unlockNote: "",
  },
];

/** Documents shown when the case is closed, in order. */
export const ENDING_DOCS = ["phan_quyet", "hau_truyen"];
