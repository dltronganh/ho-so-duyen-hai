// Case 03 "Đường hầm dưới Thung lũng" (ancient Egypt, very hard): entry point gathering documents, questions, metadata.
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
  series: "Hồ sơ đặc biệt",
  number: "Hồ sơ số 03",
  short: "Số 03",
  title: "Đường hầm dưới Thung lũng",
  place: "Thebes, Ai Cập · năm 16 đời Pharaoh (khoảng 1100 năm trước Công nguyên)",
  blurb: "Thị trưởng bờ đông tố cáo: lăng của một phu nhân quyền quý ở Thung lũng đã bị trộm. Thị trưởng bờ tây dẫn đoàn đi xem, thề rằng mọi dấu niêm phong còn nguyên. Tể tướng giao cho bạn, người thư lại thân tín, đọc hết giấy cói, mảnh gốm, sổ sách, và tìm ra sự thật.",
  players: "1–4 người",
  time: "3–5 giờ",
  level: "Khó",
  hard: true,
  boss: { role: "tể tướng", sign: "Ptahmose" },
  firstDoc: "lenh",
  ending: {
    title: "Toà án của tể tướng",
    text: "Bạn đã chứng minh lăng phu nhân Nebettawy bị mở qua một đường hầm, tìm ra kẻ đục hầm, người mang vàng, kẻ bịt hầm và kẻ nhận quà. Tể tướng đọc bản tổng kết của bạn trước toà.",
  },
};
