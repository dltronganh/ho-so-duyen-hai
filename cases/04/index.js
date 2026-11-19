// Case 04 "Tủ kính số 7" (Hoài Giang 1999, very hard; the exhibit comes from the village of case 03): entry point
// gathering documents, questions, metadata.
import stage0 from "./docs/stage0.js";
import stage1 from "./docs/stage1.js";
import stage2 from "./docs/stage2.js";
import { stage3, stage4, ending } from "./docs/stage3.js";

/** Every document of the case, in folder order. stage = questions solved before it appears (5 = ending). */
export const DOCS = [...stage0, ...stage1, ...stage2, ...stage3, ...stage4, ...ending];

export { QUESTIONS, ENDING_DOCS } from "./questions.js";
export { SECRET, SECRET_KEY } from "./answers.js";

/** Cover text and options. hard: never tell how many parts of a wrong answer are right. */
export const META = {
  series: "Hồ sơ Duyên Hải",
  number: "Hồ sơ số 04",
  short: "Số 04",
  title: "Tủ kính số 7",
  place: "Thị xã Hoài Giang · tháng 11 năm 1999",
  blurb: "Triển lãm Ai Cập cổ đại ở bảo tàng Hoài Giang còn ba ngày nữa là đóng cửa. Một sáng thứ Sáu, tủ kính số 7 trống trơn, ổ khoá không một vết xước. Công ty bảo hiểm cử bạn đi xem có phải trả 30.000 đô la hay không.",
  players: "1–4 người",
  time: "3–5 giờ",
  level: "Siêu khó",
  hard: true,
  boss: { role: "trưởng phòng giám định", sign: "Thịnh" },
  firstDoc: "giao_viec",
  ending: {
    title: "Mảnh giấy cói trở về",
    text: "Bạn đã chỉ ra mảnh giấy cói thật bị tráo từ chiều 12/11, ai làm bản giả, ai tráo nó, ai lấy nó đi đêm thứ Năm, và mảnh thật đang nằm ở đâu. Công ty bảo hiểm không phải trả một đồng nào.",
  },
};
