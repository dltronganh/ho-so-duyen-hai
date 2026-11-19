// Case 02 "Đêm rằm tháng Giêng" (very hard): entry point gathering documents, questions, metadata.
import stage0 from "./docs/stage0.js";
import stage1 from "./docs/stage1.js";
import stage2 from "./docs/stage2.js";
import stage3 from "./docs/stage3.js";
import stage4 from "./docs/stage4.js";
import ending from "./docs/ending.js";

/** Every document of the case, in folder order. stage = questions solved before it appears (5 = ending). */
export const DOCS = [...stage0, ...stage1, ...stage2, ...stage3, ...stage4, ...ending];

export { QUESTIONS, ENDING_DOCS } from "./questions.js";
export { SECRET, SECRET_KEY } from "./answers.js";

/** Cover text and options. hard: never tell how many parts of a wrong answer are right. */
export const META = {
  series: "Hồ sơ Duyên Hải",
  number: "Hồ sơ số 02",
  short: "Số 02",
  title: "Đêm rằm tháng Giêng",
  place: "Thị xã Hoài Giang · tháng 2 năm 1998",
  blurb: "Đêm rằm, ông chủ hãng nước mắm chạy ghe ra biển một mình. Sáng ra, chiếc ghe trôi dạt không người, trên mạn có vết máu. Cậu thợ ghe 19 tuổi bị tạm giữ vì khai sai giờ. Mẹ cậu tìm tới toà soạn của bạn.",
  players: "1–4 người",
  time: "2–4 giờ",
  level: "Khó",
  hard: true,
  firstDoc: "giao_viec",
  ending: {
    title: "Người \"chết đuối\" còn sống",
    text: "Bạn đã chứng minh Lê Văn Tư vô tội và lật tẩy một màn giả chết. Bài điều tra của bạn lên trang nhất Tuần báo Duyên Hải số thứ Sáu.",
  },
};
