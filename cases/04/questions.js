// The five staged questions of case 04 (public text and form layout). Answers, hints and solutions are in
// cases/04/answers.js (encoded). Question N uses documents of stages 0..N-1.

export const QUESTIONS = [
  {
    id: "q1", stage: 0, title: "Giờ mở tủ",
    ask: "Tối 18/11, tủ P-07 bị mở vào lúc mấy giờ?",
    parts: [
      { id: "time", type: "time", label: "Giờ thật tủ P-07 bị mở (giờ:phút)" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng (mỗi tài liệu chứng minh một ý; nhiều cách ghim đều được nhận)" },
    ],
    unlockNote: `Giờ mở tủ đã rõ. Nhưng ông Bảo đòi 30.000 đô la cho mảnh giấy cói, và tôi muốn chắc về hiện vật.
      Bảo tàng gửi thêm biên bản lúc nhận hiện vật, hai cuốn catalogue, báo Chủ nhật, bài của giáo sư Lâm, tờ bảng chữ, và một tấm ảnh cô giáo trường Nguyễn Du nộp cho công an.`,
  },
  {
    id: "q2", stage: 1, title: "Thứ bị lấy",
    ask: "Thứ bị lấy khỏi tủ tối 18/11 là gì? Dòng thứ hai trên thứ đó ghi những phụ âm nào?",
    parts: [
      { id: "what", type: "choice", label: "Thứ bị lấy", options: [
        "Mảnh giấy cói của ông Bảo",
        "Mảnh giấy cói của ông Bảo; ảnh chụp nó chỉ bị in ngược",
        "Một mảnh khác, đã nằm trong tủ từ ngày khai mạc",
        "Một mảnh khác, được đặt vào tủ sau ngày khai mạc",
      ] },
      { id: "read", type: "text", label: "Dòng thứ hai: các phụ âm theo thứ tự đọc (viết như ví dụ P-T-Ḥ)" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng (mỗi tài liệu chứng minh một ý; nhiều cách ghim đều được nhận)" },
    ],
    unlockNote: `Vậy là có một bản giả. Ai đã làm ra nó, và chép theo cái gì? Cô giáo trường Nguyễn Du kể thêm: hôm 14/11 có một em trong lớp cứ khăng khăng đọc ra một cái tên khác, cô bảo em đọc sai. Công an thu được sổ ký nhận catalogue tối khai mạc, sổ đơn hàng và một tấm thiệp mời ở một tiệm ảnh trên đường Lê Lợi,
      và lời khai của anh Quân và chị Kiều bên báo.`,
  },
  {
    id: "q3", stage: 2, title: "Nguồn gốc",
    ask: "Thứ bị lấy được chép theo hình nào? Ai đã chép nó lên giấy? Nó được đặt vào tủ ngày nào?",
    parts: [
      { id: "source", type: "choice", label: "Chép theo", options: [
        "Ảnh đăng ký chụp ngày 4/11 (phim lưu ở kho bảo tàng)",
        "Ảnh trang 12 của catalogue in ngày 4/11",
        "Ảnh trang 12 của catalogue in ngày 10/11",
        "Ảnh trên báo Hoài Giang Chủ nhật 7/11",
        "Ảnh trên thiệp mời khai mạc",
        "Nhìn trực tiếp mảnh thật qua kính tủ",
      ] },
      { id: "maker", type: "choice", label: "Người chép", options: ["Đỗ Văn Khoa", "Trịnh Minh Quân", "Võ Thị Kiều", "Lê Thu Hà", "Lâm Quang Tịnh"] },
      { id: "day", type: "number", label: "Ngày nó được đặt vào tủ (ngày trong tháng 11)" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng (mỗi tài liệu chứng minh một ý; nhiều cách ghim đều được nhận)" },
    ],
    unlockNote: `Bản giả đã vào tủ bằng cách nào? Bảo tàng gửi sổ tổng đài và sổ ra vào ngày 12/11; công an thu được một phiếu giao hàng,
      và đã ghi lời khai chị Hà, anh Khoa, anh Tín (thợ ảnh).`,
  },
  {
    id: "q4", stage: 3, title: "Người tráo",
    ask: "Ai đã đặt thứ đó vào tủ P-07? Người đó có bao nhiêu phút để làm việc ấy? Chỉ ra câu khai sai của chính người đó về ngày hôm ấy.",
    parts: [
      { id: "who", type: "choice", label: "Người đặt vào tủ", options: ["Lê Thu Hà", "Đỗ Văn Khoa", "Trịnh Minh Quân", "Lê Văn Bình (bảo vệ ca ngày)", "Bùi Văn Tín (thợ ảnh)"] },
      { id: "minutes", type: "number", label: "Số phút người đó ở một mình bên tủ đang mở", unit: "phút" },
      { id: "lie", type: "line", label: "Bấm chọn câu khai sai của người đó" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng (mỗi tài liệu chứng minh một ý; nhiều cách ghim đều được nhận)" },
    ],
    unlockNote: `Còn tối 18/11: ai đã mở tủ, vì sao, và mảnh thật có còn ở Hoài Giang không?
      Công an gửi thêm lời khai bảo vệ đêm, một phiếu của kho lưu trữ, một biên lai bưu điện, sổ gọi đi của khách sạn Sông Hoài và một lá thư thu ở tiệm ảnh. Phòng tôi gửi kèm phụ lục hợp đồng của hiện vật.`,
  },
  {
    id: "q5", stage: 4, title: "Đêm 18/11",
    ask: "Ai đã mở tủ P-07 tối 18/11, và vì sao? Ai đã đưa mảnh giấy cói thật đi khỏi Hoài Giang? Ai đã bày ra vụ tráo?",
    parts: [
      { id: "opener", type: "choice", label: "Người mở tủ tối 18/11", options: ["Đỗ Văn Khoa", "Lê Thu Hà", "Nguyễn Thị Lan", "Tạ Văn Lực", "Trịnh Minh Quân"] },
      { id: "why", type: "choice", label: "Vì sao", options: [
        "Để bán thứ trong tủ cho người mua ở nước ngoài",
        "Thông đồng với người tráo, lấy bản giả đi để xoá dấu vết",
        "Tự phát hiện ra đó là đồ giả, sợ bị lộ và bị đổ lỗi",
        "Để đem thứ trong tủ đi đối chiếu, định sáng hôm sau trả lại",
        "Để chủ hiện vật nhận tiền bảo hiểm",
      ] },
      { id: "sender", type: "text", label: "Người đưa mảnh thật đi (gõ họ tên; nếu chưa ai thì gõ: chưa ai)" },
      { id: "behind", type: "text", label: "Người bày ra vụ tráo (gõ họ tên; nếu không ai thì gõ: không ai)" },
      { id: "pins", type: "pins", count: 4, label: "Ghim 4 tài liệu làm bằng chứng (mỗi tài liệu chứng minh một ý; nhiều cách ghim đều được nhận)" },
    ],
    unlockNote: "",
  },
];

/** Documents shown when the case is closed, in order. */
export const ENDING_DOCS = ["ket_luan", "bao_sau"];
