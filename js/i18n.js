// Interface language: Vietnamese (default) or English. Holds every UI string of the desk; case texts live in
// cases/<id>/ (English versions in cases/<id>/en/). The language comes from ?lang= in the address, then the last
// choice saved in the browser. Used by every panel through t(); documents read LANG for shared pieces (docparts.js, art).

export const LANGS = ["vi", "en"];
const LANG_KEY = "hsdh.lang";

/** Current language ("vi" or "en"). A live binding: setLang() changes it for every importer. */
export let LANG = "vi";

/** Sets the language and the <html lang> attribute. Unknown codes fall back to Vietnamese. */
export function setLang(code) {
  LANG = LANGS.includes(code) ? code : "vi";
  if (typeof document !== "undefined") document.documentElement.lang = LANG;
}

/** Picks the language from the address (?lang=en), else the saved choice, else Vietnamese, and remembers it. */
export function pickLang() {
  let code = new URLSearchParams(location.search).get("lang");
  try { if (!code) code = localStorage.getItem(LANG_KEY); } catch { /* storage blocked */ }
  setLang(code || "vi");
  try { localStorage.setItem(LANG_KEY, LANG); } catch { /* memory only */ }
  return LANG;
}

/**
 * The language a case opens in: the wanted language when the case has that version, else Vietnamese
 * (every case exists in Vietnamese). caseEntry is a picker card from cases/list.js. Pure: unit tested.
 */
export function caseLang(caseEntry, wanted) {
  return wanted === "vi" || caseEntry?.[wanted] ? wanted : "vi";
}

const DICT = {
  vi: {
    loading: "Đang mở hồ sơ…",
    siteTitle: "Hồ sơ Duyên Hải · game hồ sơ điều tra",
    progress: "Tiến độ", help: "Hướng dẫn", sound: "Âm thanh", soundTip: "Bật/tắt âm thanh", soundOn: "Âm thanh: bật", soundOff: "Âm thanh: tắt",
    cover: "Bìa", coverTip: "Bìa hồ sơ", reset: "Làm lại", resetTip: "Làm lại từ đầu",
    folderTab: "Tập hồ sơ", notesTab: "Sổ tay", notesIntro: "Ghi chép của bạn (tự lưu trong trình duyệt).",
    notesPlaceholder: "Ví dụ: 20:41 mất điện. Ai ở đâu?", sidesLabel: "Tập hồ sơ và sổ tay", boardLabel: "Bàn điều tra", inquiryLabel: "Trọng điểm",
    zoomOut: "Thu nhỏ", zoomIn: "Phóng to", fit: "Xem cả bàn", tidy: "Xếp lại", link: "Nối chỉ đỏ",
    mBoard: "Bàn", mFolder: "Hồ sơ", mInquiry: "Trọng điểm", mNotes: "Sổ tay",
    rClose: "✕ Đóng", rCloseTip: "Đóng (Esc)", rFit: "Vừa", rFitTip: "Vừa khung", rHl: "Bút dạ", rPin: "Ghim làm bằng chứng",
    rPrev: "Tài liệu trước (←)", rNext: "Tài liệu sau (→)", noscript: "Trò chơi cần bật JavaScript.",
    folderFirst: "Tập 1 · Hồ sơ ban đầu", folderEnd: "Hồ sơ khép lại", folderN: (n) => `Tập ${n}`,
    backLink: "‹ Các hồ sơ khác", secret: "Mật", players: "Người chơi", time: "Thời gian", level: "Độ khó",
    resume: "Tiếp tục điều tra", review: "Xem lại hồ sơ", open: "Mở hồ sơ", startOver: "Làm lại từ đầu",
    howtoTitle: "Cách chơi",
    howto: (boss) => [
      "Đọc giấy tờ trên bàn: báo, biên bản, lời khai, thư từ. Kéo thả, phóng to, tô bút dạ, nối chỉ đỏ tuỳ ý.",
      "Trả lời từng <b>trọng điểm</b> (cột phải; trên điện thoại là thẻ \"Trọng điểm\"). Mỗi câu trả lời cần <b>ghim tài liệu làm bằng chứng</b>.",
      `Trả lời đúng thì ${boss} gửi thêm giấy tờ mới. Bí thì mở gợi ý (3 mức), rồi mới tới lời giải.`,
    ],
    howtoNote: "Mọi tiến trình được lưu trong trình duyệt này. Không cần tra mạng: mọi thứ cần biết đều nằm trong hồ sơ.",
    credit: "Truyện, nhân vật, địa danh đều hư cấu. Mã nguồn mở",
    defaultBoss: "tổng biên tập", defaultSign: "Khiêm",
    resetH3: "Làm lại", resetH2: "Xoá toàn bộ tiến trình?", resetP: "Mọi câu trả lời, ghi chú, bút dạ và vị trí giấy tờ sẽ bị xoá. Không thể hoàn tác.",
    cancel: "Thôi", resetGo: "Xoá và làm lại", close: "Đóng", done: "Xong",
    newBadge: "MỚI", pinnedTip: "Đang ghim", pinnedEvidenceTip: "Đang ghim làm bằng chứng", noDocs: "Chưa có hồ sơ.",
    qN: (n) => `Trọng điểm ${n}`,
    helpBody: `<h3>Hướng dẫn</h3><h2>Bàn điều tra</h2><ul>
    <li><b>Bàn:</b> kéo nền để di chuyển, cuộn chuột (hoặc chụm hai ngón) để phóng to. Kéo giấy tờ để sắp xếp. Bấm vào giấy để đọc.</li>
    <li><b>Nối chỉ đỏ:</b> bật nút "Nối chỉ đỏ", bấm lần lượt hai giấy tờ. Muốn gỡ: bấm vào sợi chỉ rồi bấm nút ✕ hiện ra, hoặc khi đang nối chỉ thì bấm lại đúng hai giấy tờ đó.</li>
    <li><b>Đọc giấy tờ:</b> phóng to, thu nhỏ; phím ← → để lật; <b>Bút dạ</b> để tô các đoạn quan trọng.</li>
    <li><b>Ghim làm bằng chứng:</b> mỗi ô ghim một tài liệu (có hồ sơ ghi trên ô ý cần chứng minh). Bấm "＋ Ghim tài liệu" ở ô đó, hoặc nút "Ghim" trên thanh đọc (tài liệu vào ô trống đầu tiên). Khi nộp, thứ tự các ô không quan trọng.</li>
    <li><b>Kiểm tra ô:</b> nút "Kiểm tra ô này" cho biết tài liệu trong ô đã đủ chứng minh chưa (tốn 1 gợi ý). Phần kết luận không kiểm tra được.</li>
    <li><b>Câu nói dối:</b> bấm "Chọn câu trong lời khai", mở lời khai, rồi bấm vào câu đó.</li>
    <li><b>Sổ tay:</b> ghi chép tự do, tự lưu.</li>
    <li>Mọi thứ cần để phá án đều nằm trong giấy tờ. Có thể cần tính toán đơn giản.</li></ul>`,
    correct: "Chính xác!", peekedSol: "Đã xem lời giải", letterFrom: (boss) => `Thư của ${boss}`,
    newDocs: (n) => `<b>${n} giấy tờ mới</b> đã được đặt lên bàn:`, toDesk: "Lên bàn xem",
    endH3: "Hồ sơ khép lại", minutes: "phút", hintsUsed: "gợi ý đã dùng", wrongTries: "lần nộp sai",
    checksLine: (n) => `Trong số gợi ý có ${n} lần kiểm tra ô ghim.`, peeksLine: (n) => `Đã xem lời giải ${n} trọng điểm.`, noPeeks: (boss) => `Không cần xem lời giải lần nào. ${cap(boss)} hài lòng lắm.`,
    endDocs: "Hai giấy tờ cuối đã được đặt lên bàn.", stay: "Ở lại bàn", readEnd: "Đọc giấy tờ cuối",
    solvedMark: "✓ Đã phá án", inProgress: "Đang điều tra", notOpened: "Chưa mở",
    pickTitle: "Chọn một hồ sơ", pickSub: "Mỗi hồ sơ là một vụ án riêng, chơi độc lập. Tiến trình lưu trong trình duyệt này.",
    progressLbl: "Tiến trình", langSwitch: "English", langNote: "",
    // inquiry
    wrong: (boss) => [`${cap(boss)} gạch đỏ bản nháp: "Chưa thuyết phục. Đọc lại giấy tờ đi."`,
      "Chưa đúng. Có ít nhất một chỗ trong kết luận chưa khớp với giấy tờ.",
      "Vẫn chưa ổn. Thử đối chiếu giờ giấc, con số và tên người giữa các tài liệu."],
    locked: "🔒 Chưa mở", notebookTitle: "Sổ công tác · Trọng điểm", peekStamp: "Đã xem giải", solvedStamp: "Đã giải",
    solutionOf: (boss) => `Lời giải của ${boss}`, hintN: (n) => `Gợi ý ${n}`, showHint: (n, m) => `Xem gợi ý ${n}/${m}`,
    showSolution: "Xem lời giải", submit: "Nộp kết luận", up: "Lên", down: "Xuống", noLine: "Chưa chọn câu nào", unpick: "Bỏ chọn",
    waitingLine: "Đang chờ bạn bấm vào một câu…", pickLine: "Chọn câu trong lời khai", unpin: "Bỏ ghim",
    slotEmpty: "Chưa ghim", pinFromList: "＋ Ghim tài liệu", ideaN: (n) => `Ý ${n}`, ideaFallback: (n) => `Bằng chứng ${n}`,
    changePin: "Đổi tài liệu khác", pinSlotHelp: "Bấm một tài liệu để ghim vào ô này.",
    missingIdeas: (list) => `bằng chứng cho ý ${list}`,
    checkSlot: "Kiểm tra ô này", checkCost: "1 gợi ý", slotOk: "đủ", slotLacking: "chưa đủ",
    checkedToast: (k, ok) => ok ? `Ý ${k}: tài liệu này đủ chứng minh.` : `Ý ${k}: tài liệu này chưa đủ chứng minh.`,
    checkTip: "Bạn có thể kiểm tra từng ô ghim (tốn 1 lượt gợi ý).",
    missingSlots: (list) => `bằng chứng ${list}`, anyOrder: "Ghim mỗi ô một tài liệu; thứ tự các ô không quan trọng.",
    checkedToastAny: (k, ok) => ok ? `Bằng chứng ${k}: tài liệu này đủ chứng minh một ý của câu hỏi.` : `Bằng chứng ${k}: tài liệu này chưa chứng minh thêm được ý nào mà các ô khác chưa có.`,
    otherSlot: "Tài liệu này hợp với ô khác; khi nộp, thứ tự ô không quan trọng.",
    pickLineToast: "Mở một lời khai, rồi bấm vào câu bạn cho là nói dối.", pinTitle: "Ghim bằng chứng", pinListHelp: "Bấm để ghim hoặc bỏ ghim.",
    hintH3: "Gợi ý", hintH2: (n) => `Mở gợi ý ${n}?`, hintP: "Gợi ý giúp bạn đi đúng hướng mà không nói thẳng đáp án. Số gợi ý đã dùng sẽ được ghi ở cuối hồ sơ.",
    openHint: "Mở gợi ý", solH3: "Lời giải", solH2: (t) => `Xem lời giải: ${t}?`, solP: "Bạn sẽ thấy toàn bộ đáp án của trọng điểm này.",
    gotIt: "Hiểu rồi, đi tiếp", missing: (list) => `Còn thiếu: ${list}.`,
    stuck: " Bí quá thì mở gợi ý bên dưới nhé.",
    // game
    noOpenQ: "Không có trọng điểm nào đang mở.", unpinned: "Đã bỏ ghim.", full: (n) => `Đã đủ ${n} tài liệu. Bỏ bớt một ghim trước.`, pinnedTo: (n) => `Đã ghim làm bằng chứng cho ý ${n}.`,
    pinnedToSlot: (n) => `Đã ghim vào ô bằng chứng ${n}.`, pinnedBannerSlot: (n, k) => `Tài liệu này đang được ghim làm bằng chứng ${k} cho Trọng điểm ${n}.`,
    // reader
    hlOn: "Bút dạ: bấm vào một đoạn để tô hoặc bỏ tô.", hlOff: "Đã cất bút dạ.", clickLine: "Hãy bấm vào một câu trả lời trong lời khai.",
    lineChosen: "Đã chọn câu này.", pinPlain: "Ghim bằng chứng", unpinN: (a, b) => `Bỏ ghim (${a}/${b})`, pinN: (a, b) => `Ghim làm bằng chứng (${a}/${b})`,
    pickBanner: "Bấm vào câu bạn cho là nói dối (trong một lời khai).", cancelPick: "Huỷ", pinnedBanner: (n, k) => `Tài liệu này đang được ghim làm bằng chứng cho Trọng điểm ${n}, ý ${k}.`,
    // board
    tidied: "Đã xếp lại các tài liệu theo từng tập.", stringRemoved: "Đã gỡ sợi chỉ.",
    linkHint: "Nối chỉ đỏ: bấm vào hai tài liệu liên quan tới nhau. Bấm lại đúng hai tài liệu đó để gỡ.",
    removeString: "Gỡ sợi chỉ",
  },
  en: {
    loading: "Opening the file…",
    siteTitle: "The Duyên Hải Files · a case-file detective game",
    progress: "Progress", help: "How to play", sound: "Sound", soundTip: "Sound on/off", soundOn: "Sound: on", soundOff: "Sound: off",
    cover: "Cover", coverTip: "Case cover", reset: "Restart", resetTip: "Start over",
    folderTab: "Case file", notesTab: "Notebook", notesIntro: "Your notes (saved in this browser).",
    notesPlaceholder: "e.g. 20:10 case opened. Who was where?", sidesLabel: "Case file and notebook", boardLabel: "Investigation board", inquiryLabel: "Questions",
    zoomOut: "Zoom out", zoomIn: "Zoom in", fit: "Whole board", tidy: "Tidy up", link: "Red string",
    mBoard: "Board", mFolder: "File", mInquiry: "Questions", mNotes: "Notes",
    rClose: "✕ Close", rCloseTip: "Close (Esc)", rFit: "Fit", rFitTip: "Fit to screen", rHl: "Highlighter", rPin: "Pin as evidence",
    rPrev: "Previous document (←)", rNext: "Next document (→)", noscript: "This game needs JavaScript.",
    folderFirst: "Folder 1 · Initial file", folderEnd: "Case closed", folderN: (n) => `Folder ${n}`,
    backLink: "‹ Other cases", secret: "Confidential", players: "Players", time: "Time", level: "Difficulty",
    resume: "Continue investigating", review: "Review the file", open: "Open the file", startOver: "Start over",
    howtoTitle: "How to play",
    howto: (boss) => [
      "Read the papers on the desk: newspapers, reports, statements, letters. Drag them around, zoom, highlight, tie red string as you like.",
      "Answer each <b>question</b> (right-hand column; on a phone, the \"Questions\" tab). Every answer needs <b>documents pinned as evidence</b>.",
      `Answer correctly and the ${boss} sends you new papers. Stuck? Open a hint (3 levels) before the solution.`,
    ],
    howtoNote: "Progress is saved in this browser. No web searching needed: everything you need is in the file. Dates are written day/month, as in Vietnam. Vietnamese names put the family name first; people are called by the last part (Đỗ Văn Khoa → Khoa).",
    credit: "Story, characters and places are fictional. Open source",
    defaultBoss: "editor", defaultSign: "Khiêm",
    resetH3: "Restart", resetH2: "Erase all progress?", resetP: "All answers, notes, highlights and document positions will be erased. This cannot be undone.",
    cancel: "Cancel", resetGo: "Erase and restart", close: "Close", done: "Done",
    newBadge: "NEW", pinnedTip: "Pinned", pinnedEvidenceTip: "Pinned as evidence", noDocs: "No documents yet.",
    qN: (n) => `Question ${n}`,
    helpBody: `<h3>How to play</h3><h2>The investigation board</h2><ul>
    <li><b>Board:</b> drag the background to move, scroll (or pinch) to zoom. Drag papers to arrange them. Tap a paper to read it.</li>
    <li><b>Red string:</b> switch on "Red string", then tap two papers. To remove one: tap the string, then the ✕ that appears; or, in string mode, tap the same two papers again.</li>
    <li><b>Reading:</b> zoom in and out; ← → keys turn pages; the <b>Highlighter</b> marks important passages.</li>
    <li><b>Pin as evidence:</b> one document per evidence slot (in some cases the slot names the point to prove). Tap "＋ Pin a document" in a slot, or "Pin" on the reading bar (the document goes into the first empty slot). When you submit, the order of the slots does not matter.</li>
    <li><b>Check a slot:</b> "Check this slot" tells you whether the document in that slot is enough proof (costs 1 hint). Conclusions cannot be checked.</li>
    <li><b>The false statement:</b> tap "Pick a line in a statement", open the statement, then tap that line.</li>
    <li><b>Notebook:</b> free notes, saved automatically.</li>
    <li>Everything needed to solve the case is in the papers. Some simple arithmetic may be needed.</li></ul>`,
    correct: "Correct!", peekedSol: "Solution viewed", letterFrom: (boss) => `A note from the ${boss}`,
    newDocs: (n) => `<b>${n} new ${n === 1 ? "paper has" : "papers have"}</b> been put on your desk:`, toDesk: "To the desk",
    endH3: "Case closed", minutes: "minutes", hintsUsed: "hints used", wrongTries: "wrong submissions",
    checksLine: (n) => `Including ${n} evidence slot ${n === 1 ? "check" : "checks"}.`, peeksLine: (n) => `Solution viewed for ${n} question${n === 1 ? "" : "s"}.`, noPeeks: (boss) => `Not a single solution viewed. The ${boss} is very pleased.`,
    endDocs: "The last two papers have been put on your desk.", stay: "Stay at the desk", readEnd: "Read the last papers",
    solvedMark: "✓ Solved", inProgress: "In progress", notOpened: "Not opened",
    pickTitle: "Choose a case", pickSub: "Each case is a separate mystery, played on its own. Progress is saved in this browser.",
    progressLbl: "Progress", langSwitch: "Tiếng Việt", langNote: "Cases 01–03 are available in Vietnamese only for now.",
    viOnly: "This case is available in Vietnamese only for now, so it opens in Vietnamese.",
    wrong: (boss) => [`The ${boss} has put a red line through your draft: "Not convincing. Read the papers again."`,
      "Not right. At least one point of your conclusion does not match the papers.",
      "Still not right. Cross-check times, numbers and names between the documents."],
    locked: "🔒 Locked", notebookTitle: "Case notebook · Questions", peekStamp: "Solution viewed", solvedStamp: "Solved",
    solutionOf: (boss) => `The ${boss}'s solution`, hintN: (n) => `Hint ${n}`, showHint: (n, m) => `Show hint ${n}/${m}`,
    showSolution: "Show the solution", submit: "Submit conclusion", up: "Up", down: "Down", noLine: "No line chosen", unpick: "Clear",
    waitingLine: "Waiting for you to tap a line…", pickLine: "Pick a line in a statement", unpin: "Unpin",
    slotEmpty: "Nothing pinned", pinFromList: "＋ Pin a document", ideaN: (n) => `Point ${n}`, ideaFallback: (n) => `Evidence ${n}`,
    changePin: "Choose another document", pinSlotHelp: "Tap a document to pin it in this slot.",
    missingIdeas: (list) => `evidence for point ${list}`,
    checkSlot: "Check this slot", checkCost: "1 hint", slotOk: "enough", slotLacking: "not enough",
    checkedToast: (k, ok) => ok ? `Point ${k}: this document is enough proof.` : `Point ${k}: this document is not enough proof.`,
    checkTip: "You can check each evidence slot (costs 1 hint).",
    missingSlots: (list) => `evidence ${list}`, anyOrder: "Pin one document per slot; the order of the slots does not matter.",
    checkedToastAny: (k, ok) => ok ? `Evidence ${k}: this document is enough to prove a point of the question.` : `Evidence ${k}: this document proves no point the other slots do not already cover.`,
    otherSlot: "This document fits another slot; when you submit, the order of the slots does not matter.",
    pickLineToast: "Open a statement, then tap the line you think is false.", pinTitle: "Pin evidence", pinListHelp: "Tap to pin or unpin.",
    hintH3: "Hint", hintH2: (n) => `Open hint ${n}?`, hintP: "Hints point you the right way without giving the answer. The number of hints used is shown when the case is closed.",
    openHint: "Open hint", solH3: "Solution", solH2: (t) => `View the solution: ${t}?`, solP: "You will see the full answer to this question.",
    gotIt: "Got it, move on", missing: (list) => `Still missing: ${list}.`,
    stuck: " Stuck? Open a hint below.",
    noOpenQ: "No question is open.", unpinned: "Unpinned.", full: (n) => `Already ${n} documents. Remove a pin first.`, pinnedTo: (n) => `Pinned as evidence for point ${n}.`,
    pinnedToSlot: (n) => `Pinned in evidence slot ${n}.`, pinnedBannerSlot: (n, k) => `This document is pinned as evidence ${k} for Question ${n}.`,
    hlOn: "Highlighter: tap a passage to mark or unmark it.", hlOff: "Highlighter put away.", clickLine: "Tap a line of a statement.",
    lineChosen: "Line chosen.", pinPlain: "Pin as evidence", unpinN: (a, b) => `Unpin (${a}/${b})`, pinN: (a, b) => `Pin as evidence (${a}/${b})`,
    pickBanner: "Tap the line you think is false (in a statement).", cancelPick: "Cancel", pinnedBanner: (n, k) => `This document is pinned as evidence for Question ${n}, point ${k}.`,
    tidied: "Documents tidied up by folder.", stringRemoved: "String removed.",
    linkHint: "Red string: tap two related documents. Tap the same two again to remove the string.",
    removeString: "Remove string",
  },
};

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

/** UI string for the current language. Function entries are called with the given arguments. */
export function t(key, ...args) {
  const v = DICT[LANG][key] ?? DICT.vi[key];
  if (v === undefined) return key;
  return typeof v === "function" ? v(...args) : v;
}

/** Fills the static page chrome (index.html) from data-i18n / data-i18n-title / data-i18n-aria attributes. */
export function translatePage(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  root.querySelectorAll("[data-i18n-title]").forEach((el) => { el.title = t(el.dataset.i18nTitle); });
  root.querySelectorAll("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  root.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
}
