// Case 02, first folder: what the reporter receives on Saturday 14/2/1998.
// Facts must agree with the case facts.js. Times read off the border post's fast clock use clock(event, 25, …).
import { wd, age, id, at, clock, dt, lunar, line, photo, stamp } from "../../../js/kit.js";
import { policeHead, officeHead, statementSign, dailyMast } from "../../../js/docparts.js";
import { coastMap, boatPhoto } from "../art.js";

const giaoViec = {
  id: "giao_viec", stage: 0, kind: "Thư", label: "Thư giao việc của Tổng biên tập",
  html: () => `
  <div class="doc doc--weekly">
    <div class="weekly-head">
      <div class="weekly-logo">DH</div>
      <div class="weekly-name">Tuần báo Duyên Hải<small>Toà soạn: 41 Lý Thường Kiệt, Hoài Giang · Điện thoại 82 417</small></div>
    </div>
    <p class="right"><i>Hoài Giang, ${wd("1998-02-14", "thứ Bảy")} ${dt("1998-02-14", "14 tháng 2 năm 1998")}</i></p>
    <p>Gửi phóng viên mảng điều tra,</p>
    <p>Lại là bạn. Sau vụ kim ấn năm ngoái, giờ ai có chuyện oan ức cũng tìm tới toà soạn mình.</p>
    <p>Sáng nay bà <b>Lê Thị Bông</b>, bán cá ở chợ Hoài Giang, tới gặp tôi. Con bà là <b>Lê Văn Tư</b>, 19 tuổi, thợ ghe của ông <b>Mạc Văn Thành</b>,
      chủ hãng nước mắm Thành Hưng. Đêm rằm tháng Giêng, ông Thành chạy ghe ra biển một mình rồi không về; sáng ra người ta thấy ghe trôi gần Mũi Đá, không người,
      có vết máu. Công an đã tạm giữ Tư, vì Tư khai một giờ, sổ trạm biên phòng ghi một giờ khác, và hai thầy trò vừa cãi nhau chuyện tiền công.</p>
    <p>Trong tập hồ sơ có: báo Hoài Giang thứ Sáu; bản chép sổ trạm biên phòng Cửa Hoài và các lời khai (anh Phát bên công an thị xã cho chép, <u>không đăng nguyên văn</u>);
      biên bản kiểm tra ghe; bản đồ vùng biển của phòng Thuỷ sản; và tờ giấy nhận nợ ông Cường đưa cho tôi, nói "để nhà báo thấy tôi mới là người bị hại".</p>
    <p>Vụ này không dễ như vụ trước. Đừng tin con số nào chỉ vì nó được ghi trong sổ. Mỗi trọng điểm, tôi chỉ chấp nhận câu trả lời có giấy tờ chứng minh.</p>
    <p class="right" style="margin-top:18px">Tổng biên tập<br><span class="sign">Khiêm</span><br><b>Võ Văn Khiêm</b></p>
    ${stamp("Tuần báo<br>Duyên Hải<br>★<br>Toà soạn", "left:60px;bottom:40px", "blue")}
  </div>`,
};

const bao13 = {
  id: "bao_13", stage: 0, kind: "Báo", label: "Báo Hoài Giang, thứ Sáu 13/2 – trang nhất",
  html: () => `
  <div class="doc doc--news">
    ${dailyMast("1998-02-13", "Thứ Sáu", `Nhằm ngày ${lunar("1998-02-13", "17 tháng Giêng")} năm Mậu Dần`, "1.546", "XXIII")}
    <div class="news-grid" style="grid-template-columns: 2.05fr 1fr">
      <div>
        <div class="news-kicker">Đêm rằm tháng Giêng trên biển Cửa Hoài</div>
        <h1 class="news-head">Ông chủ hãng nước mắm mất tích, ghe trôi về Mũi Đá</h1>
        <div class="news-deck">Vết máu trên mạn ghe · Thợ ghe 19 tuổi bị tạm giữ vì khai sai giờ</div>
        ${photo(boatPhoto(), "Ghe HG-0417 được kéo về bến cầu Đá sáng thứ Năm. Ảnh: <b>Minh Đức</b>")}
        <div class="news-by">Quang Huy</div>
        <div class="news-cols" style="columns:2">
          <p class="dropcap">Đêm ${wd("1998-02-11", "thứ Tư")} (${lunar("1998-02-11", "rằm tháng Giêng")}), ông <b>Mạc Văn Thành</b> (${age("thanh", "1998-02-13", 50)} tuổi), chủ hãng nước mắm Thành Hưng,
            một mình chạy ghe máy HG-0417 rời bến cầu Đá dù đài đã báo gió mùa đông bắc mạnh. Sáng hôm sau, ngư dân phát hiện chiếc ghe trôi gần Mũi Đá, không người,
            máy đã tắt; trên ghe còn áo khoác và đôi dép của ông Thành.</p>
          <p>Trên mạn ghe có vết máu. Từ sáng qua, ghe của bà con Cửa Hoài và bộ đội biên phòng đã rà soát dọc bờ từ cửa sông tới Mũi Đá nhưng chưa tìm thấy ông Thành.</p>
          <p>Chiều qua, công an thị xã tạm giữ <b>Lê Văn Tư</b>, thợ ghe của ông Thành. Theo nguồn tin của phóng viên, Tư khai ông chủ chạy ghe ra khỏi bến lúc 22 giờ 40,
            trong khi sổ của trạm biên phòng Cửa Hoài ghi ghe HG-0417 qua trạm lúc 23 giờ 12. Từ khi ghe rời bến tới lúc Tư có mặt ở quán nhậu của ông Tám, hơn 11 giờ đêm,
            không ai thấy Tư ở đâu. Áo Tư mặc đêm đó cũng dính máu. Mấy hôm trước, nhiều người nghe hai thầy trò cãi nhau to chuyện ba tháng tiền công.
            Công an nghi hai thầy trò đã xô xát ở bến trước khi ghe chạy, ông Thành bị thương rồi mới ra khơi, và Tư khai sớm giờ để che khoảng thời gian đó.</p>
          <p>Bà Hồ Thị Ngọc Lan, vợ ông Thành, ngất xỉu khi nghe tin. Gia đình đã lập bàn thờ vọng.</p>
          <p class="noindent"><b>Cảnh báo:</b> gió mùa đông bắc còn kéo dài tới hết tuần, ghe nhỏ không nên ra khơi.</p>
        </div>
      </div>
      <div>
        <div class="news-box">
          <h4>Đài Tiếng nói Việt Nam · Hệ 1</h4>
          <p class="small muted" style="margin:0 0 4px">Chương trình phát hằng ngày trong tuần (giờ Hà Nội)</p>
          <table class="news-table">
            <tr><td class="n">${at("radio_open", "5:30")}</td><td>Mở đầu chương trình, Quốc ca</td></tr>
            <tr><td class="n">6:00</td><td>Thời sự buổi sáng</td></tr>
            <tr><td class="n">11:30</td><td>Nông nghiệp – nông thôn</td></tr>
            <tr><td class="n">12:00</td><td>Thời sự buổi trưa</td></tr>
            <tr><td class="n">17:00</td><td>Thời sự buổi chiều</td></tr>
            <tr><td class="n">19:00</td><td>Thời sự tổng hợp</td></tr>
            <tr><td class="n">20:15</td><td>Sân khấu truyền thanh</td></tr>
            <tr><td class="n">21:15</td><td>Âm nhạc theo yêu cầu</td></tr>
            <tr><td class="n">${at("sea_forecast", "21:45")}</td><td>Dự báo thời tiết biển</td></tr>
            <tr><td class="n">22:00</td><td>Thời sự cuối ngày</td></tr>
            <tr><td class="n">22:30</td><td>Nhạc đêm</td></tr>
            <tr><td class="n">23:30</td><td>Hết chương trình</td></tr>
          </table>
        </div>
        <div class="news-box"><h4>Tin ngắn</h4>
          <p class="small"><b>Hội chợ Xuân.</b> Hội chợ Xuân Mậu Dần ở sân vận động thị xã kéo dài tới hết rằm.</p>
          <p class="small"><b>Giá cá cơm.</b> Sau Tết, giá cá cơm nguyên liệu lên 3.200đ/ký, các hãng nước mắm thiếu hàng.</p>
          <p class="small"><b>Lễ rằm.</b> Đêm rằm tháng Giêng, chùa Bãi Ngang đông phật tử tới dự lễ cầu an tới khuya.</p>
        </div>
        <div class="news-ad"><div class="big">Bảo hiểm nhân thọ</div><p class="small" style="margin:4px 0 0">An tâm cho gia đình bạn · Đại lý Trần Thị Mỹ<br>33 Nguyễn Huệ · ĐT 82 905</p></div>
        <div class="news-ad inverse"><div class="big">Nước mắm Thành Hưng</div><p class="small" style="margin:4px 0 0">Đậm đà vị biển Cửa Hoài</p></div>
      </div>
    </div>
  </div>`,
};

/** Logbook rows: [time cell, boat, owner, people, direction, note]. */
const soTram = {
  id: "so_tram", stage: 0, kind: "Sổ sách", label: "Sổ trạm biên phòng Cửa Hoài, đêm 11/2 (bản chép)",
  html: () => {
    const rows = [
      ["19:50", "HG-0233", "Trần Văn Bảy", "3", "Vào", "về tránh gió"],
      ["20:35", "HG-0128", "Phạm Văn Út", "2", "Vào", ""],
      [clock("sea_forecast", 25, "22:10"), "—", "—", "—", "—", "Nghe đài: bắt đầu bản tin dự báo thời tiết biển. Gió đông bắc cấp 5, cấp 6, biển động. Cảnh báo tàu thuyền nhỏ."],
      ["22:31", "—", "—", "—", "—", "Đài đang đọc thời sự cuối ngày: tin gió mùa tăng cường."],
      ["22:40", "HG-0302", "Lê Văn Hai", "2", "Vào", "về tránh gió"],
      [clock("departure", 25, "23:12"), "HG-0417", "Mạc Văn Thành", "1", "Ra", "Đã nhắc gió lớn. Chủ ghe nói đi thăm lưới gần bờ."],
      ["00:30", "—", "—", "—", "—", "Tuần tra bờ bắc cửa sông, không có gì lạ."],
      [clock("radio_open", 25, "05:55"), "—", "—", "—", "—", "Đài mở đầu chương trình buổi sáng."],
      [clock("clock_fixed", 25, "06:25"), "—", "—", "—", "—", "Giao ca (Huy → Toàn). Chỉnh đồng hồ trạm theo giờ đài."],
      [at("lan_reports", "06:20"), "—", "—", "—", "—", "Bà Hồ Thị Ngọc Lan ra trạm báo ghe HG-0417 chưa về."],
      ["06:40", "HG-0233", "Trần Văn Bảy", "3", "Ra", "đi thăm lưới phía nam"],
      [at("boat_report", "09:05"), "HG-0233", "Trần Văn Bảy", "3", "Vào", `Kéo HG-0417 về. Báo: lúc ${at("boat_found", "7 giờ 35")} thấy HG-0417 trôi cách Mũi Đá chừng 1 hải lý, không người. Đã báo đồn.`],
    ];
    return `
  <div class="doc doc--ledger">
    <div class="ledger-head"><div class="small caps">Đồn Biên phòng Cửa Hoài · Trạm kiểm soát</div>
      <h3>Sổ theo dõi tàu thuyền ra vào</h3>
      <div>Ca đêm ${wd("1998-02-11", "thứ Tư")} ${dt("1998-02-11", "11/2/1998")} (${lunar("1998-02-11", "rằm tháng Giêng")}) · Trực: Đặng Quang Huy</div></div>
    <table class="ledger">
      <tr><th>Giờ</th><th>Số hiệu</th><th>Chủ ghe</th><th>Số người</th><th>Ra/Vào</th><th>Ghi chú</th></tr>
      ${rows.map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td style="font-size:16px">${r[5]}</td></tr>`).join("")}
    </table>
    <p class="copy-note">Bản chép tay của toà soạn từ bản chụp sổ gốc. Giờ ghi theo đồng hồ treo tường của trạm.</p>
  </div>`;
  },
};

const khaiTu = {
  id: "khai_tu", stage: 0, kind: "Lời khai", label: "Lời khai Lê Văn Tư (thợ ghe)",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">BIÊN BẢN GHI LỜI KHAI</div>
    <div class="typed-sub">Hồi 14 giờ, ${wd("1998-02-12", "thứ Năm")} ngày ${dt("1998-02-12", "12-2-1998")}</div>
    <p>Người khai: <b>Lê Văn Tư</b>, ${age("tu", "1998-02-12", 19)} tuổi, thợ ghe, ngụ xóm Chài, phường 2.</p>
    <div class="qa">
      ${line("tu-1", "Đ: Tôi làm cho ông Thành hai năm. Ông còn nợ tôi ba tháng tiền công. Hôm mồng 9 tôi có cãi nhau với ông ở bến, nói nặng lời, nhưng tôi không bao giờ hại ông.")}
      ${line("tu-2", "Đ: Tối rằm, khoảng mười giờ rưỡi, ông Thành ra bến một mình, mặc áo khoác gió màu xanh, mang dép tổ ong, xách theo một cái giỏ nhựa nhỏ có nắp.")}
      ${line("tu-3", "Đ: Ông nói đi thăm lưới gần cồn, biển động, mày khỏi đi. Ông dặn sáng mai mày ra sớm, nếu tao chưa về thì báo bà chủ.")}
      ${line("tu-4", "Đ: Tôi gỡ dây giùm ông. Ghe nổ máy chạy ra lúc mười giờ bốn mươi, tôi nhìn đồng hồ đeo tay. Đồng hồ tôi chạy đúng, tối nào cũng so với đài.")}
      ${line("tu-5", "Đ: Tôi ngồi lại ở bến hút thuốc, nhìn đèn ghe chạy ra cửa sông cho tới khi khuất. Rồi tôi đi bộ ra quán ông Tám, chắc chừng hơn mười một giờ thì tới.")}
      ${line("tu-6", "Đ: Áo tôi dính máu là máu cá. Chiều đó tôi làm cá cho bà chủ, chưa kịp thay áo.")}
      ${line("tu-7", "Đ: Lưới của ông Thành giăng ở rạn Hòn Mỏ, phía bắc cửa sông. Tôi không hiểu sao ông lại nói đi thăm lưới gần cồn.")}
    </div>
    ${statementSign("Tư", "Lê Văn Tư")}
  </div>`,
};

const khaiHuy = {
  id: "khai_huy", stage: 0, kind: "Lời khai", label: "Lời khai Thượng sĩ Đặng Quang Huy (trực trạm)",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">BIÊN BẢN GHI LỜI KHAI</div>
    <div class="typed-sub">Hồi 9 giờ, ${wd("1998-02-13", "thứ Sáu")} ngày ${dt("1998-02-13", "13-2-1998")}</div>
    <p>Người khai: <b>Đặng Quang Huy</b>, ${age("huy", "1998-02-13", 27)} tuổi, thượng sĩ, Đồn Biên phòng Cửa Hoài, trực trạm kiểm soát ca đêm ${dt("1998-02-11", "11-2")}.</p>
    <div class="qa">
      ${line("huy-1", "Đ: Ca đêm tôi trực một mình từ 18 giờ tới 6 giờ sáng. Ghe nào qua trạm tôi rọi đèn kiểm tra rồi ghi vào sổ ngay.")}
      ${line("huy-2", "Đ: Giờ trong sổ tôi ghi theo đồng hồ treo tường của trạm. Đồng hồ đó anh em để nhanh cho khỏi trễ giờ giao ca. Sáng 12 lúc giao ca, anh Toàn chỉnh lại cho đúng giờ đài vì đồn mới có lệnh. Để nhanh bao nhiêu thì tôi không để ý.")}
      ${line("huy-3", "Đ: Đài thì tôi mở suốt ca cho đỡ buồn ngủ. Bản tin về biển thì tôi ghi vào sổ ngay lúc đài bắt đầu đọc; mấy chương trình khác thì nghe tới đâu ghi tới đó.")}
      ${line("huy-4", "Đ: Ghe HG-0417 qua trạm chỉ có một người. Tôi rọi đèn thấy rõ ông Thành, áo khoác xanh. Tôi có nhắc gió lớn, ông nói đi thăm lưới gần bờ.")}
      ${line("huy-5", "Đ: Ra khỏi cửa sông ghe quẹo về phía nam, chạy sát bờ. Đêm rằm trăng sáng, tôi nhìn theo được một đoạn.")}
      ${line("huy-6", "Đ: Từ lúc đó tới sáng không có ghe nào ra nữa, không ghe nào đi theo ông.")}
    </div>
    ${statementSign("Huy", "Đặng Quang Huy")}
  </div>`,
};

const khaiLan = {
  id: "khai_lan", stage: 0, kind: "Lời khai", label: "Lời khai bà Hồ Thị Ngọc Lan",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">BIÊN BẢN GHI LỜI KHAI</div>
    <div class="typed-sub">Hồi 16 giờ, ${wd("1998-02-12", "thứ Năm")} ngày ${dt("1998-02-12", "12-2-1998")}</div>
    <p>Người khai: <b>Hồ Thị Ngọc Lan</b>, ${age("lan", "1998-02-12", 46)} tuổi, vợ ông Mạc Văn Thành, ngụ 21 Trần Phú.</p>
    <div class="qa">
      ${line("lan-1", "Đ: Tối rằm khoảng chín giờ tôi đi chùa Bãi Ngang dự lễ cầu an. Nhà tôi ở nhà một mình, nói chừng mười giờ thì ra bến thăm lưới.")}
      ${line("lan-2", "Đ: Tôi ở chùa suốt đêm, tụng kinh với các phật tử tới gần sáng. Sư cô Diệu Hạnh biết.")}
      ${line("lan-3", "Đ: Sáng ra về nhà không thấy ảnh, tôi chạy ra trạm biên phòng báo lúc sáu giờ hai mươi.")}
      <p class="q">H: Gia đình có khó khăn gì không?</p>
      ${line("lan-4", "Đ: Làm ăn sau Tết có chật vật, nợ nần thì nhà ai buôn bán mà không có, nhưng không tới nỗi.")}
      <p class="q">H: Ông Thành có mua bảo hiểm gì không?</p>
      ${line("lan-5", "Đ: Hình như nhà tôi có mua một cái hồi năm ngoái, bao nhiêu tôi không rõ. Chuyện tiền bạc ngoài hãng là nhà tôi lo hết, giấy tờ ảnh giữ.")}
      <p class="q">H: Bên chồng còn ai thân thích?</p>
      ${line("lan-6", "Đ: Bên chồng tôi không còn ai thân. Có chú Thọ, em họ ảnh, nhỏ hơn ảnh mười tuổi, mất ở Sài Gòn hồi tháng 6 năm 95. Chú quê ở đây, vô Sài Gòn làm ăn rồi bệnh mất. Chính nhà tôi vô lo đám, mang tro cốt với đồ đạc của chú về.")}
      ${line("lan-7", "Đ: Tôi xin công an tìm xác nhà tôi. Thằng Tư thì tôi không tin nó dám làm chuyện đó.")}
    </div>
    ${statementSign("Lan", "Hồ Thị Ngọc Lan")}
  </div>`,
};

const khaiCuong = {
  id: "khai_cuong", stage: 0, kind: "Lời khai", label: "Lời khai ông Võ Đình Cường",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">BIÊN BẢN GHI LỜI KHAI</div>
    <div class="typed-sub">Hồi 8 giờ, ${wd("1998-02-13", "thứ Sáu")} ngày ${dt("1998-02-13", "13-2-1998")}</div>
    <p>Người khai: <b>Võ Đình Cường</b>, ${age("cuong", "1998-02-13", 49)} tuổi, chủ vựa cá Cường Phát, bạn hùn của ông Thành.</p>
    <div class="qa">
      ${line("cuong-1", "Đ: Thành nợ tôi 300 triệu, có giấy nhận nợ, hẹn trả trước Tết. Tết qua rồi, nó chưa trả đồng nào.")}
      ${line("cuong-2", "Đ: Bữa tất niên tôi có nói \"không trả thì tao cho mày xuống biển nằm\". Nói lúc say, ai nghe cũng biết là nói chơi.")}
      ${line("cuong-3", "Đ: Đêm rằm tôi hát karaoke ở quán Ánh Trăng với bạn hàng từ tám giờ tối tới một giờ sáng, có cả thằng Long thợ máy, cả chục người biết.")}
      ${line("cuong-4", "Đ: Mấy tháng nay Thành lạ lắm. Hồi tháng tám năm ngoái nó hỏi tôi mua bảo hiểm nhân thọ có lợi không, tôi cười nói tiền đâu mà mua.")}
      ${line("cuong-5", "Đ: Ghe tôi đêm đó nằm bờ hết vì gió lớn. Tôi không có lý do gì hại Thành: nó chết thì ai trả nợ tôi?")}
    </div>
    ${statementSign("Cường", "Võ Đình Cường")}
  </div>`,
};

const bienBanGhe = {
  id: "bien_ban_ghe", stage: 0, kind: "Biên bản", label: "Biên bản kiểm tra ghe HG-0417",
  html: () => `
  <div class="doc doc--typed">
    ${policeHead()}
    <div class="typed-title">BIÊN BẢN KIỂM TRA PHƯƠNG TIỆN</div>
    <div class="typed-sub">Hồi ${at("boat_checked", "10 giờ")}, ${wd("1998-02-12", "thứ Năm")} ngày ${dt("1998-02-12", "12-2-1998")}, tại bến cầu Đá</div>
    <p>Người lập: Thượng úy Huỳnh Tấn Phát. Chứng kiến: bà Hồ Thị Ngọc Lan; ông Huỳnh Kim Long (thợ máy).</p>
    <p><b>1. Phương tiện:</b> ghe máy gỗ HG-0417, dài 7,2 m, máy dầu nhỏ đã thay bằng máy xăng 9 mã lực, bình xăng 10 lít đặt dưới băng ghế lái.</p>
    <p><b>2. Hiện trạng:</b> máy tắt; công tắc máy ở vị trí TẮT, chìa khoá còn cắm. Neo không thả. Không có lưới trên ghe.</p>
    <p><b>3. Đồ vật:</b> 01 áo khoác gió màu xanh (vắt trên băng ghế), 01 đôi dép tổ ong (dưới sàn, đặt ngay ngắn), 01 đèn pin. Không thấy giỏ nhựa.</p>
    <p><b>4. Nhiên liệu:</b> mở nắp đo: còn khoảng 9 lít xăng.</p>
    <p><b>5. Vết máu:</b> máu khô ở mạn trái gần chỗ ngồi lái và trên cán con dao cắt lưới gài ở mạn. Đã lấy mẫu gửi xét nghiệm.</p>
    <p><b>6.</b> Ghe được ghe HG-0233 kéo về từ vùng biển cách Mũi Đá khoảng 1 hải lý, phát hiện lúc ${at("boat_found", "7 giờ 35")}.</p>
    <div class="typed-sign"><div>NGƯỜI CHỨNG KIẾN<div class="sign">Lan</div><div class="sign" style="font-size:22px">Long</div></div><div>NGƯỜI LẬP BIÊN BẢN<div class="sign">Phát</div>Huỳnh Tấn Phát</div></div>
    ${stamp("Công an<br>thị xã<br>Hoài Giang", "right:70px;bottom:48px")}
  </div>`,
};

const banDo = {
  id: "ban_do", stage: 0, kind: "Bản đồ", label: "Bản đồ vùng biển Cửa Hoài – Bãi Ngang",
  html: () => `
  <div class="doc doc--map">
    ${coastMap()}
    <div class="news-grid" style="grid-template-columns:1fr 1fr;margin-top:10px;font-size:15px">
      <div class="news-box"><h4>Ghi chú của phòng Thuỷ sản</h4>
        <p>Lối lội qua cồn Bãi Ngang: bãi cát ngầm nối cồn với bãi trước chùa Bãi Ngang. <b>Chỉ đi được khi mực nước dưới 0,6 m</b> (xem lịch thuỷ triều trạm Cửa Hoài). Nước lớn thì ngập quá đầu người. Giữa cồn và bờ là bãi cạn, ghe máy không vào được; bãi trước chùa sóng vỡ dồn dập trên nền cạn, ghe vào là lật.</p></div>
      <div class="news-box"><h4>Đi lại</h4>
        <p>Ghe máy nhỏ chạy ven bờ khoảng 12 km/giờ. Đường từ chùa Bãi Ngang ra Quốc lộ 1 (ngã ba An Phú) dài 6 km. Xe đò Bắc – Nam đón khách dọc Quốc lộ 1.</p></div>
    </div>
  </div>`,
};

const giayNo = {
  id: "giay_no", stage: 0, kind: "Giấy tờ", label: "Giấy nhận nợ (ông Cường đưa toà soạn)",
  html: () => `
  <div class="doc doc--hand" style="width:600px">
    <p class="center" style="font-weight:700">GIẤY NHẬN NỢ</p>
    <div class="gap"></div>
    <p>Tôi tên Mạc Văn Thành, chủ hãng nước mắm Thành Hưng, CMND số ${id("thanh", "205 031 776")}.</p>
    <p>Nay nhận có nợ anh Võ Đình Cường số tiền 300.000.000 đ (ba trăm triệu đồng) tiền hùn mua cá cơm vụ Bắc.</p>
    <p>Tôi hứa trả đủ trước Tết Mậu Dần. Nếu sai hẹn xin chịu mọi trách nhiệm.</p>
    <div class="gap"></div>
    <p class="right">Hoài Giang, ngày ${dt("1997-12-05", "5/XII/1997")}</p>
    <p class="right">Người nhận nợ</p>
    <p class="hand-sign">Thành</p>
    <p class="right">Mạc Văn Thành</p>
  </div>`,
};

export default [giaoViec, bao13, soTram, khaiTu, khaiHuy, khaiLan, khaiCuong, bienBanGhe, banDo, giayNo];
