// Case 04 "Display Case No. 7", English version: entry point gathering documents, questions, metadata.
// Translation of ../index.js; documents in ./docs/, encoded answers in ./answers.js.
// Facts (../facts.js), art (../art.js) and case checks (../checks.js) are shared with the Vietnamese version.
import stage0 from "./docs/stage0.js";
import stage1 from "./docs/stage1.js";
import stage2 from "./docs/stage2.js";
import { stage3, stage4, ending } from "./docs/stage3.js";

/** Every document of the case, in folder order. stage = questions solved before it appears (5 = ending). */
export const DOCS = [...stage0, ...stage1, ...stage2, ...stage3, ...stage4, ...ending];

export { QUESTIONS, ENDING_DOCS } from "./questions.js";
export { SECRET, SECRET_KEY } from "./answers.js";

/** Cover text and options. hard: never tell how many parts of a wrong answer are right. hideIdeas: evidence slots show no idea label and are checked in any order. */
export const META = {
  series: "The Duyên Hải Files",
  number: "Case No. 04",
  short: "No. 04",
  title: "Display Case No. 7",
  place: "The town of Hoài Giang · November 1999",
  blurb: "The ancient Egypt exhibition at the Hoài Giang Museum has three days left to run. One Friday morning, display case No. 7 is empty, its lock without a single scratch. The insurance company sends you to find out whether it has to pay out 30,000 dollars.",
  players: "1–4",
  time: "3–5 hours",
  level: "Very hard",
  hard: true,
  hideIdeas: true,
  boss: { role: "head of loss assessment", sign: "Thịnh" },
  firstDoc: "giao_viec",
  ending: {
    title: "The papyrus comes home",
    text: "You have shown that the genuine papyrus was swapped on the afternoon of 12/11, who made the forgery, who swapped it in, who took it out on Thursday night, and where the real fragment is now. The insurance company will not pay a single dong.",
  },
};
