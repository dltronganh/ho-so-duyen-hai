// Case 01 "Kim ấn đêm khai mạc": entry point that gathers the documents and the questions.
// The app and the tests import from here only.
import stage0 from "./docs/stage0.js";
import stage1 from "./docs/stage1.js";
import stage2 from "./docs/stage2.js";
import stage3 from "./docs/stage3.js";
import ending from "./docs/ending.js";

/** Every document of the case, in folder order. stage = the question that must be solved before it appears (4 = ending). */
export const DOCS = [...stage0, ...stage1, ...stage2, ...stage3, ...ending];

export { QUESTIONS, ENDING_DOCS } from "./questions.js";
export { SECRET, SECRET_KEY } from "./answers.js";

/** Case title and blurb shown on the cover. */
export const META = {
  series: "Hồ sơ Duyên Hải",
  number: "Hồ sơ số 01",
  title: "Kim ấn đêm khai mạc",
  short: "Số 01",
  firstDoc: "giao_viec",
  ending: {
    title: "Sự thật về kim ấn Hoài Giang",
    text: "Bạn đã minh oan cho Lê Văn Định và tìm ra người tráo kim ấn. Bài điều tra của bạn lên trang nhất Tuần báo Duyên Hải số thứ Sáu.",
  },
  place: "Thị xã Hoài Giang · tháng 3 năm 1997",
  blurb: "Đêm khai mạc triển lãm, đèn bảo tàng bỗng tắt. Hai mươi phút sau, chiếc kim ấn trăm tuổi biến mất khỏi tủ kính, và người trợ lý trẻ cũng biến mất theo. Báo địa phương đã kết tội anh. Chị gái anh tìm tới toà soạn của bạn.",
  players: "1–4 người",
  time: "60–120 phút",
  level: "Vừa",
};
