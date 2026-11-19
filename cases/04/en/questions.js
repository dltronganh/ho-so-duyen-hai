// The five staged questions of case 04 (public text and form layout), English version. Answers, hints and solutions are in
// cases/04/en/answers.js (encoded). Question N uses documents of stages 0..N-1.

export const QUESTIONS = [
  {
    id: "q1", stage: 0, title: "Time of opening",
    ask: "On the evening of 18/11, at what time was case P-07 opened?",
    parts: [
      { id: "time", type: "time", label: "True time case P-07 was opened (hh:mm)" },
      { id: "pins", type: "pins", count: 3, label: "Pin 3 documents as evidence (each document proves one point; several ways of pinning are accepted)" },
    ],
    unlockNote: `The time the case was opened is clear. But Mr Bảo is demanding US$30,000 for the papyrus fragment, and I want to be sure about the object.
      The museum has sent more: the condition report made when the exhibit was received, two catalogues, the Sunday paper, Professor Lâm's essay, the sign chart, and a photograph the Nguyễn Du school teacher handed to the police.`,
  },
  {
    id: "q2", stage: 1, title: "What was taken",
    ask: "What was taken from the case on the evening of 18/11? Which consonants are written on the second line of it?",
    parts: [
      { id: "what", type: "choice", label: "What was taken", options: [
        "Mr Bảo's papyrus fragment",
        "Mr Bảo's papyrus fragment; the photograph of it was merely printed in reverse",
        "A different fragment, in the case since the opening day",
        "A different fragment, placed in the case after the opening day",
      ] },
      { id: "read", type: "text", label: "Second line: the consonants in reading order (write them like the example P-T-Ḥ)" },
      { id: "pins", type: "pins", count: 3, label: "Pin 3 documents as evidence (each document proves one point; several ways of pinning are accepted)" },
    ],
    unlockNote: `So there is a forgery. Who made it, and from what? The Nguyễn Du school teacher adds that on 14/11 a pupil in her class kept insisting on reading out a different name, and she told the child it had been read wrong. The police have obtained the opening-night catalogue receipt book, an order book and an invitation card from a photo shop on Lê Lợi Street,
      and statements from Quân and from Kiều of the newspaper.`,
  },
  {
    id: "q3", stage: 2, title: "Origin",
    ask: "What picture was the object taken from the case copied from? Who put it on paper? On what day was it placed in the case?",
    parts: [
      { id: "source", type: "choice", label: "Copied from", options: [
        "The registration photograph taken on 4/11 (negative kept in the museum archive)",
        "The page 12 photo of the catalogue printed on 4/11",
        "The page 12 photo of the catalogue printed on 10/11",
        "The photo in the Hoài Giang newspaper, Sunday 7/11",
        "The photo on the opening invitation card",
        "Looking directly at the real fragment through the glass of the case",
      ] },
      { id: "maker", type: "choice", label: "Copied by", options: ["Đỗ Văn Khoa", "Trịnh Minh Quân", "Võ Thị Kiều", "Lê Thu Hà", "Lâm Quang Tịnh"] },
      { id: "day", type: "number", label: "Day it was placed in the case (day of the month, November)" },
      { id: "pins", type: "pins", count: 3, label: "Pin 3 documents as evidence (each document proves one point; several ways of pinning are accepted)" },
    ],
    unlockNote: `How did the forgery get into the case? The museum has sent the switchboard log and the sign-in book for 12/11; the police have obtained a delivery note,
      and have taken statements from Ms Hà, Khoa and Tín (the photographer).`,
  },
  {
    id: "q4", stage: 3, title: "The swapper",
    ask: "Who put that object into case P-07? How many minutes did that person have to do it? Point out that person's own false statement about that day.",
    parts: [
      { id: "who", type: "choice", label: "Person who put it in the case", options: ["Lê Thu Hà", "Đỗ Văn Khoa", "Trịnh Minh Quân", "Lê Văn Bình (day guard)", "Bùi Văn Tín (photographer)"] },
      { id: "minutes", type: "number", label: "Minutes that person was alone beside the open case", unit: "minutes" },
      { id: "lie", type: "line", label: "Click that person's false statement" },
      { id: "pins", type: "pins", count: 3, label: "Pin 3 documents as evidence (each document proves one point; several ways of pinning are accepted)" },
    ],
    unlockNote: `Now the evening of 18/11: who opened the case, why, and is the real fragment still in Hoài Giang?
      The police have sent the night guard's statement, a loan slip from the archive, a post office receipt, the Sông Hoài Hotel's outgoing call log and a letter taken from the photo shop. My department is enclosing the contract amendment for the exhibit.`,
  },
  {
    id: "q5", stage: 4, title: "The night of 18/11",
    ask: "Who opened case P-07 on the evening of 18/11, and why? Who sent the real papyrus fragment away from Hoài Giang? Who set up the swap?",
    parts: [
      { id: "opener", type: "choice", label: "Person who opened the case on the evening of 18/11", options: ["Đỗ Văn Khoa", "Lê Thu Hà", "Nguyễn Thị Lan", "Tạ Văn Lực", "Trịnh Minh Quân"] },
      { id: "why", type: "choice", label: "Why", options: [
        "To sell what was in the case to a buyer abroad",
        "In league with the swapper, to take the forgery away and cover the tracks",
        "Discovered on their own that it was a fake, and feared being exposed and blamed",
        "To take what was in the case away for comparison, meaning to return it the next morning",
        "So that the owner of the exhibit could collect the insurance money",
      ] },
      { id: "sender", type: "text", label: "Person who sent the real fragment away (type the full name; if no one yet, type: nobody)" },
      { id: "behind", type: "text", label: "Person who set up the swap (type the full name; if no one, type: nobody)" },
      { id: "pins", type: "pins", count: 4, label: "Pin 4 documents as evidence (each document proves one point; several ways of pinning are accepted)" },
    ],
    unlockNote: "",
  },
];

/** Documents shown when the case is closed, in order. */
export const ENDING_DOCS = ["ket_luan", "bao_sau"];
