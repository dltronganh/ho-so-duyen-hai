// The cases shown on the picker screen, in order. Each id has a folder cases/<id>/ with an index.js.
// Kept separate from the cases themselves so the picker loads without loading every case.

/** Picker cards: id, number, title, place, level, time, teaser (no spoilers). en: the same fields when the case has an English version in cases/<id>/en/. */
export const CASES = [
  {
    id: "01", number: "Hồ sơ số 01", title: "Kim ấn đêm khai mạc", place: "Thị xã Hoài Giang · tháng 3 năm 1997",
    level: "Vừa", time: "60–120 phút",
    teaser: "Đèn bảo tàng tắt trong đêm khai mạc, chiếc kim ấn trăm tuổi biến mất cùng người trợ lý trẻ. Hợp để bắt đầu.",
  },
  {
    id: "02", number: "Hồ sơ số 02", title: "Đêm rằm tháng Giêng", place: "Thị xã Hoài Giang · tháng 2 năm 1998",
    level: "Khó", time: "2–4 giờ",
    teaser: "Ghe của ông chủ hãng nước mắm trôi dạt không người sau đêm rằm. Cậu thợ ghe bị bắt. Dành cho người đã quen phá án.",
  },
  {
    id: "03", number: "Hồ sơ số 03", title: "Đường hầm dưới Thung lũng", place: "Thebes, Ai Cập · khoảng 1100 năm trước Công nguyên",
    level: "Khó", time: "3–5 giờ", fonts: "egypt",
    teaser: "Một lăng mộ ở Thung lũng bị tố là đã bị trộm, dù mọi dấu niêm phong còn nguyên. Đọc giấy cói, mảnh gốm, chữ tượng hình và lịch Ai Cập để tìm sự thật.",
  },
  {
    id: "04", number: "Hồ sơ số 04", title: "Tủ kính số 7", place: "Thị xã Hoài Giang · tháng 11 năm 1999",
    level: "Siêu khó", time: "3–5 giờ", fonts: "egypt",
    teaser: "Triển lãm Ai Cập cổ đại sắp đóng cửa thì một tủ kính trống trơn, ổ khoá không một vết xước. Bạn là người của công ty bảo hiểm. Nên chơi sau hồ sơ 03.",
    en: {
      number: "Case No. 04", title: "Display Case No. 7", place: "The town of Hoài Giang · November 1999", level: "Very hard", time: "3–5 hours",
      teaser: "An ancient Egypt exhibition is about to close when a display case is found empty, its lock without a scratch. You work for the insurance company.",
    },
  },
];
