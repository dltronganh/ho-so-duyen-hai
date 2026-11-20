// The five staged questions of case 02 (public text and form layout). Answers, hints and solutions are in
// cases/02/answers.js (encoded). Question N uses documents of stages 0..N-1.

const PEOPLE = ["Hồ Thị Ngọc Lan", "Lê Văn Tư", "Võ Đình Cường", "Huỳnh Kim Long", "Đặng Quang Huy"];

export const QUESTIONS = [
  {
    id: "q1", stage: 0, title: "Giờ ghe ra khơi",
    ask: "Công an giữ Tư vì giờ trong sổ trạm biên phòng không khớp lời khai. Ghe HG-0417 thật sự đi qua trạm lúc mấy giờ?",
    parts: [
      { id: "t", type: "time", label: "Giờ thật ghe đi qua trạm (giờ:phút)" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    unlockNote: `Vậy là sổ trạm sai, không phải Tư. Nhưng ông Thành đi đâu?
      Mình xin được bảng thuỷ triều của trạm khí tượng, phiếu kiểm tra máy của thợ Long, kết quả xét nghiệm máu, và báo hôm nay.
      Có một bà ở xóm Bãi Ngang vừa báo công an một chuyện lạ.`,
  },
  {
    id: "q2", stage: 1, title: "Người lái ghe",
    ask: "Đêm rằm, người lái ghe HG-0417 có vào bờ không? Nếu có thì ở đâu? Tính cho chính xác khung giờ người đó có thể vào bờ: từ mấy giờ tới mấy giờ?",
    parts: [
      { id: "where", type: "choice", label: "Người lái ghe", options: [
        "Không vào bờ: rơi xuống biển rồi trôi về phía Mũi Đá",
        "Lên một chiếc ghe khác chờ sẵn ngoài khơi",
        "Lội qua cồn, lên bãi trước chùa Bãi Ngang",
        "Cho ghe quay về, lên bờ ở bến cầu Đá",
      ] },
      { id: "from", type: "time", label: "Khung giờ có thể vào bờ: từ (giờ:phút)" },
      { id: "until", type: "time", label: "Khung giờ có thể vào bờ: đến (giờ:phút)" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    unlockNote: `Một người đi chân trần lên bờ đêm rằm, còn đôi dép thì để lại ngay ngắn trên ghe…
      Anh Phát vừa gửi mình bản lưu một bức điện toàn con số mà bà Lan nhận sáng thứ Bảy, cùng phiếu gửi điện fax từ Phan Thiết và ghi chép nói chuyện với cô nhân viên bưu cục.
      Kèm theo là trang báo Chủ Nhật viết về bà Lan. Đọc cho kỹ.`,
  },
  {
    id: "q3", stage: 2, title: "Bức điện",
    ask: "Bức điện gửi bà Lan nói gì? Người đàn ông đứng trước quầy bưu cục Phan Thiết sáng 14/2 là ai?",
    parts: [
      { id: "text", type: "text", label: "Nội dung bức điện sau khi giải (gõ có dấu hay không dấu đều được)" },
      { id: "who", type: "choice", label: "Người gửi điện", options: ["Mạc Văn Thọ", "Mạc Văn Thành", "Võ Đình Cường", "Huỳnh Kim Long", "Lê Văn Tư", "Một người lạ được thuê gửi hộ"] },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    unlockNote: `Ông Thành còn sống! Vậy từ bãi chùa Bãi Ngang lúc nửa đêm, ông ấy đi Phan Thiết bằng cách nào?
      Công an đã khám nhà 21 Trần Phú và thu được một cuốn sổ tay. Mình cũng có danh sách hành khách xe đò đêm hôm đó và lời khai của sư cô chùa Bãi Ngang.`,
  },
  {
    id: "q4", stage: 3, title: "Rời thị xã",
    ask: "Người lên bờ ở Bãi Ngang đêm rằm đã rời Hoài Giang thế nào? Ai giúp, đi bằng gì, lên xe lúc mấy giờ?",
    parts: [
      { id: "helper", type: "choice", label: "Người giúp", options: [...PEOPLE, "Không ai giúp: ông tự đi bộ"] },
      { id: "how", type: "choice", label: "Phương tiện", options: [
        "Tàu hoả từ ga Hoài Giang", "Xe đò đêm, đón ở ngã ba An Phú", "Một ghe khác chạy vào Phan Thiết", "Xe máy chạy thẳng vào Phan Thiết",
      ] },
      { id: "t", type: "time", label: "Giờ lên xe (giờ:phút)" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    unlockNote: `Bà Lan nói dối về đêm ở chùa. Còn câu hỏi cuối: vì sao?
      Mình có thêm hồ sơ bảo hiểm, thông báo của ngân hàng, lời khai cô đại lý bảo hiểm, và một trang sổ khám bệnh từ Phan Thiết.
      Viết bản kết luận đi. Lần này phải chắc từng chữ.`,
  },
  {
    id: "q5", stage: 4, title: "Bản kết luận",
    ask: "Viết bản kết luận: xếp 7 sự việc theo đúng thứ tự thời gian, giải thích vết máu, động cơ, và nơi ông Thành đang ở.",
    parts: [
      { id: "order", type: "order", label: "Xếp 7 sự việc theo thứ tự thời gian (sớm nhất ở trên)", items: [
        "Ghe HG-0417 đi qua trạm biên phòng",
        "Ông Thành ký hợp đồng bảo hiểm nhân thọ",
        "Bà Lan ra cổng chùa \"lấy áo lạnh\"",
        "Ngân hàng gửi thông báo nợ quá hạn lần đầu",
        "Khách ghế 7 lên xe đò",
        "Đặt chỗ ghế số 7 trên xe đò Thanh Bình",
        "Ông Thành đi khám sức khoẻ tổng quát",
      ] },
      { id: "blood", type: "choice", label: "Vết máu nhóm O trên ghe là", options: [
        "Máu cá dính từ lưới", "Máu của Tư khi xô xát với ông Thành", "Máu của chính ông Thành", "Máu của ông Cường",
      ] },
      { id: "why", type: "choice", label: "Động cơ", options: [
        "Bị ông Cường doạ giết nên bỏ trốn", "Trốn nợ, để vợ nhận tiền bảo hiểm", "Bỏ nhà theo người khác", "Trốn tội đã hại người",
      ] },
      { id: "where", type: "choice", label: "Ông Thành đang ở", options: ["Dưới biển gần Mũi Đá", "Trong chùa Bãi Ngang", "Nhà trọ Hải Âu, Phan Thiết", "Nhà ông Cường"] },
      { id: "pins", type: "pins", count: 2, label: "Ghim 2 tài liệu làm bằng chứng" },
    ],
    unlockNote: "",
  },
];

/** Documents shown when the case is closed, in order. */
export const ENDING_DOCS = ["bai_ket", "hau_truyen"];
