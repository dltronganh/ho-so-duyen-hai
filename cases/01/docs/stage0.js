// Case 01, first folder (available from the start): what the reporter receives on Monday 17/3/1997.
// Facts must agree with the case facts.js. Checkable values use the kit helpers (wd, age, id, at, dt).
import { wd, age, id, at, dt, line, photo, stamp } from "../../../js/kit.js";
import { emptyCasePhoto, ribbonPhoto, townMap, portraitDinh } from "../art.js";

const giaoViec = {
  id: "giao_viec", stage: 0, kind: "Thư", label: "Thư giao việc của Tổng biên tập",
  html: () => `
  <div class="doc doc--weekly">
    <div class="weekly-head">
      <div class="weekly-logo">DH</div>
      <div class="weekly-name">Tuần báo Duyên Hải<small>Toà soạn: 41 Lý Thường Kiệt, Hoài Giang · Điện thoại 82 417</small></div>
    </div>
    <p class="right"><i>Hoài Giang, ${wd("1997-03-17", "thứ Hai")} ${dt("1997-03-17", "17 tháng 3 năm 1997")}</i></p>
    <p>Gửi phóng viên mảng điều tra,</p>
    <p>Sáng nay chị <b>Lê Thị Hoa</b> tới toà soạn, mắt đỏ hoe. Em trai chị là <b>Lê Văn Định</b>, trợ lý Bảo tàng thị xã, đang bị báo Hoài Giang
      viết như thể đã ôm kim ấn của cụ Tôn Thất Khải bỏ trốn trong đêm khai mạc thứ Bảy. Định không về nhà từ tối hôm đó.
      Chị Hoa thề em mình không phải kẻ trộm, và nhờ báo mình tìm ra sự thật.</p>
    <p>Tôi giao vụ này cho bạn. Trong tập hồ sơ có:</p>
    <p>– hai trang báo Hoài Giang số Chủ Nhật (trang nhất và trang 3);<br>
       – thư của chị Hoa, kèm bản sao chứng minh nhân dân của Định;<br>
       – bản chép biên bản hiện trường và hai lời khai (anh Phát bên công an thị xã cho mình chép, <u>tuyệt đối không đăng nguyên văn</u>);<br>
       – bản đồ du lịch thị xã;<br>
       – trang sổ bán vé ga Hoài Giang tối thứ Bảy. Ai bỏ đi trong đêm thì hoặc ra bến xe, hoặc ra ga. Bến xe không ghi tên khách, ga thì có. Tôi đã nhờ người quen ở ga chép lại.</p>
    <p>Đừng vội viết. Làm từng bước, trả lời từng <b>trọng điểm</b> trong sổ công tác, và mỗi câu trả lời phải có <b>giấy tờ làm bằng chứng</b>.
      Trả lời đúng tới đâu, tôi gửi thêm giấy tờ tới đó.</p>
    <p>Hạn chót: số báo thứ Sáu 28/3. Chúc may mắn.</p>
    <p class="right" style="margin-top:18px">Tổng biên tập<br><span class="sign">Khiêm</span><br><b>Võ Văn Khiêm</b></p>
    ${stamp("Tuần báo<br>Duyên Hải<br>★<br>Toà soạn", "left:60px;bottom:40px", "blue")}
  </div>`,
};

const bao16 = {
  id: "bao_16", stage: 0, kind: "Báo", label: "Báo Hoài Giang, Chủ Nhật 16/3 – trang nhất",
  html: () => `
  <div class="doc doc--news">
    <div class="news-top"><span>Số 1.284 · Năm thứ XXII</span><span>Giá 1.200 đồng</span></div>
    <div class="news-mast">Hoài Giang<small>Báo của nhân dân thị xã Hoài Giang · Ra hằng ngày</small></div>
    <div class="news-bar"><span>${wd("1997-03-16", "Chủ Nhật")} ${dt("1997-03-16", "16-3-1997")}</span><span>Nhằm ngày 8 tháng 2 năm Đinh Sửu</span><span>8 trang</span></div>
    <div class="news-grid" style="grid-template-columns: 2.05fr 1fr">
      <div>
        <div class="news-kicker">Đêm khai mạc triển lãm "Hoài Giang 100 năm"</div>
        <h1 class="news-head">Kim ấn trăm tuổi biến mất giữa lúc cúp điện</h1>
        <div class="news-deck">Trợ lý bảo tàng mất tích cùng đêm · Công an thị xã vào cuộc</div>
        ${photo(emptyCasePhoto(), "Tủ kính trống trơn khi công an tới hiện trường. Ảnh: <b>Minh Đức</b>")}
        <div class="news-by">Quang Huy</div>
        <div class="news-cols" style="columns:2">
          <p class="dropcap">Tối qua, ${wd("1997-03-15", "thứ Bảy")}, đêm khai mạc triển lãm "Hoài Giang 100 năm" tại Bảo tàng thị xã (3 Bạch Đằng) đã kết thúc
            trong sững sờ: chiếc kim ấn "Hoài Giang trấn thủ", hiện vật quý nhất của triển lãm, không còn trong tủ kính.</p>
          <p>Theo ghi nhận của phóng viên, khoảng ${at("outage", "20 giờ 41")} toàn bộ toà nhà bất ngờ mất điện. Bà Phan Thị Nguyệt, Giám đốc bảo tàng,
            vẫn bình tĩnh nói chuyện với khách qua chiếc loa cầm tay, đề nghị mọi người ngồi yên. Đến ${at("power_back", "21 giờ")} điện có lại.
            Chỉ hai phút sau, chính bà Nguyệt phát hiện tủ kính đã trống.</p>
          <p>Tủ kính không bị đập vỡ, khoá không hư hại. Nguyên nhân mất điện đang được làm rõ.</p>
          <p>Kim ấn là đồ thờ gia truyền của dòng họ cụ <b>Tôn Thất Khải</b> (${age("khai", "1997-03-16", 74)} tuổi), được gia đình cho mượn trưng bày một tháng.
            Theo gia đình, ấn đúc bằng vàng ròng, nặng hơn mười lượng; bảo tàng dự định mua bảo hiểm cho hiện vật 1,5 tỷ đồng sau buổi giám định.</p>
          <p>Điều khiến dư luận chú ý: anh <b>Lê Văn Định</b> (${age("dinh", "1997-03-16", 24)} tuổi), trợ lý bảo tàng, người trực tiếp sắp đặt hiện vật,
            đã không còn có mặt từ tối qua và tới lúc báo lên khuôn vẫn chưa về nhà. Theo một nguồn tin, trong lúc tối om có người thấy
            "một bóng người chạy vội ra phía cổng". Bà Nguyệt cho biết chiều thứ Sáu Định "có biểu hiện lạ, cứ cân đo hiện vật mãi".</p>
          <p>Trao đổi với phóng viên, cụ Khải chỉ nói: "Tôi già rồi, chỉ mong ấn của ông bà về lại nhà".</p>
          <p>Công an thị xã đã lập biên bản hiện trường và đang lấy lời khai các nhân chứng. Báo Hoài Giang sẽ tiếp tục đưa tin.</p>
        </div>
      </div>
      <div>
        <div class="news-box">
          <h4>Giá vàng · ngoại tệ hôm qua</h4>
          <table class="news-table">
            <tr><th></th><th>Mua</th><th>Bán</th></tr>
            <tr><td>Vàng 99,99 (lượng)</td><td class="n">4.170.000</td><td class="n">4.195.000</td></tr>
            <tr><td>Vàng 98% (lượng)</td><td class="n">4.080.000</td><td class="n">4.110.000</td></tr>
            <tr><td>Đô-la Mỹ</td><td class="n">11.040</td><td class="n">11.060</td></tr>
          </table>
          <p class="small muted" style="margin-top:4px">1 lượng (1 cây) = 10 chỉ = 37,5 gam. Giá tại tiệm vàng Kim Thành, đường Trần Phú.</p>
        </div>
        <div class="news-box">
          <h4>Thời tiết</h4>
          <p class="small">Hoài Giang hôm nay: nắng nhẹ, 22–29°C. Biển êm, sóng cao 0,5–1 m, thuận lợi cho tàu thuyền ra khơi.</p>
        </div>
        <div class="news-box">
          <h4>Tin ngắn</h4>
          <p class="small"><b>Trải nhựa đường Trần Phú.</b> Từ thứ Hai, đoạn từ chợ tới bưu điện cấm xe tải trong 10 ngày.</p>
          <p class="small"><b>Mùa cá cơm.</b> Ghe ra khơi từ chiều qua, rạng sáng nay về bến cầu Đá đầy khoang, giá cá cơm còn 2.500đ/ký.</p>
          <p class="small"><b>Tiêm phòng.</b> Trạm y tế phường 2 tiêm chủng cho trẻ em vào sáng thứ Tư.</p>
        </div>
        <div class="news-ad">
          <div class="big">Thu mua đồ cổ<br>giá cao</div>
          <p class="small" style="margin:4px 0">Gốm sứ · đồ đồng · ấn triện · tiền xưa · sắc phong</p>
          <div class="script">Hồ Minh Tâm</div>
          <p class="small" style="margin:0">Cửa hàng Minh Tâm, Q.1, TP. Hồ Chí Minh<br>Nhắn tin: <b>107 – 889 412</b></p>
        </div>
        <div class="news-ad inverse">
          <div class="big">Máy nhắn tin</div>
          <p class="small" style="margin:4px 0 0">Nhắn tin khắp miền Trung · Đăng ký tại bưu điện thị xã</p>
        </div>
      </div>
    </div>
    <div class="news-foot"><span>Toà soạn: 12 Nguyễn Huệ, Hoài Giang</span><span>Xem tiếp ảnh đêm khai mạc ở trang 3</span></div>
  </div>`,
};

const bao16t3 = {
  id: "bao_16_t3", stage: 0, kind: "Báo", label: "Báo Hoài Giang, Chủ Nhật 16/3 – trang 3",
  html: () => `
  <div class="doc doc--news">
    <div class="news-bar" style="margin-top:0"><span>Báo Hoài Giang · Trang 3</span><span>Văn hoá – Đời sống</span><span>${wd("1997-03-16", "Chủ Nhật")} ${dt("1997-03-16", "16-3-1997")}</span></div>
    <h2 class="news-head" style="font-size:44px">Đêm khai mạc: trước khi đèn tắt</h2>
    ${photo(ribbonPhoto(), `${at("ribbon", "19 giờ 30")} tối thứ Bảy, cắt băng khai mạc. Từ trái qua: cụ <b>Tôn Thất Khải</b> (người cho mượn kim ấn), bà <b>Phan Thị Nguyệt</b> (Giám đốc bảo tàng),
      ông <b>Hồ Minh Tâm</b> (nhà sưu tầm, TP. Hồ Chí Minh), anh <b>Tôn Thất Vũ</b> (con trai cụ Khải). Ảnh: <b>Minh Đức</b>`)}
    <div class="news-grid" style="grid-template-columns: 2fr 1fr">
      <div class="news-cols" style="columns:2">
        <p class="dropcap">Hơn 200 hiện vật kể lại một trăm năm của Hoài Giang: từ tấm bản đồ bến sông thời Pháp, chiếc ghe bầu đóng bằng gỗ kiền kiền,
          cho tới bộ ảnh chợ cá những năm 1960. Nhưng khách tới tối thứ Bảy đều chen nhau trước một tủ kính nhỏ bên trái bục phát biểu:
          nơi đặt chiếc kim ấn núm hình con lân của cụ Tổng đốc Tôn Thất Hoài.</p>
        <p>"Kim ấn nhà tôi giữ hơn trăm năm, bốn đời rồi. Đây là lần đầu nó được đem ra cho bà con coi", cụ Khải xúc động. Anh Tôn Thất Vũ, con trai cụ,
          là người thay cha lo mọi thủ tục với bảo tàng.</p>
        <p>Trong số khách mời có ông Hồ Minh Tâm, nhà sưu tầm đồ cổ ở TP. Hồ Chí Minh, một trong những người góp tiền in sách giới thiệu triển lãm.
          "Đây là lần đầu tôi tới Hoài Giang. Phố biển nhỏ mà đẹp quá", ông Tâm nói.</p>
        <p>Theo bà Nguyệt, sáng thứ Hai tới, đoàn giám định của Trường Đại học Khoa học Huế sẽ tới thẩm định để lập hồ sơ khoa học cho kim ấn.
          "Đây là cơ hội để hiện vật của Hoài Giang được cả nước biết tới", bà nói.</p>
        <p>Triển lãm mở cửa từ 7 giờ đến 17 giờ hằng ngày, tới hết ngày 15-4. Vé vào cửa 2.000 đồng, học sinh miễn phí.</p>
      </div>
      <div>
        <div class="news-box">
          <h4>Chương trình đêm khai mạc</h4>
          <table class="news-table">
            <tr><td>19:00</td><td>Đón khách</td></tr>
            <tr><td>19:30</td><td>Cắt băng khai mạc</td></tr>
            <tr><td>20:00</td><td>Phát biểu, giới thiệu hiện vật (bà Phan Thị Nguyệt)</td></tr>
            <tr><td>21:30</td><td>Tiệc nhẹ, tham quan tự do</td></tr>
          </table>
          <p class="small muted" style="margin-top:4px">Đài truyền thanh thị xã ghi âm toàn bộ phần phát biểu.</p>
        </div>
        <div class="news-box">
          <h4>Bạn đọc hỏi</h4>
          <p class="small"><b>Hỏi:</b> Kim ấn là gì?<br><b>Đáp:</b> Là con dấu bằng vàng của quan lại thời phong kiến, dùng đóng lên giấy tờ. Núm ấn (phần để cầm) thường đúc hình con vật như rùa, lân, rồng.</p>
        </div>
        <div class="news-ad"><div class="big">Ảnh viện Minh Đức</div><p class="small" style="margin:4px 0 0">Chụp ảnh thẻ lấy liền · Rửa ảnh màu 24 giờ<br>8 Trần Phú</p></div>
      </div>
    </div>
  </div>`,
};

const thuHoa = {
  id: "thu_hoa", stage: 0, kind: "Thư tay", label: "Thư của chị Lê Thị Hoa",
  html: () => `
  <div class="doc doc--hand">
    <p class="right">Hoài Giang, ${dt("1997-03-17", "17/3/1997")}</p>
    <div class="gap"></div>
    <p>Kính gửi Tuần báo Duyên Hải,</p>
    <p>Tôi là Lê Thị Hoa, ${age("hoa", "1997-03-17", 28)} tuổi, chị ruột của Lê Văn Định. Ba má tôi mất sớm, hai chị em nương nhau mà sống.</p>
    <p>Em tôi học sử ở Huế ra, hiền lành, cẩn thận tới mức cái gì cũng ghi chép, cân đo.
      Em nó mê đồ cổ vì yêu lịch sử chứ chưa bao giờ tham một đồng của ai.</p>
    <p>Tối thứ Bảy em không về ăn cơm. Sáng Chủ Nhật tôi đọc báo mới biết người ta nói em ôm kim ấn bỏ trốn.
      Tôi không tin. Có khi em có việc gấp, đi Huế tìm thầy cũ như mấy lần trước.</p>
    <p>Tôi gửi kèm bản sao chứng minh nhân dân của em để quý báo tiện hỏi han.
      Xin quý báo giúp tìm em tôi và trả lại sự trong sạch cho em.</p>
    <div class="gap"></div>
    <p class="right">Kính thư,</p>
    <p class="hand-sign">Hoa</p>
    <p class="right">Lê Thị Hoa · 27 Lê Lợi</p>
  </div>`,
};

const cmnd = {
  id: "cmnd", stage: 0, kind: "Giấy tờ", label: "Bản sao chứng minh nhân dân (kèm thư chị Hoa)",
  html: () => `
  <div class="doc doc--card">
    <div class="tape" style="left:-20px;top:8px"></div><div class="tape" style="right:-24px;bottom:10px;transform:rotate(6deg)"></div>
    <div class="card-cols">
      <div><div class="card-photo">${portraitDinh()}</div><p class="small center" style="margin-top:6px">Ngón trỏ trái</p></div>
      <div>
        <div class="card-top">Cộng hoà xã hội chủ nghĩa Việt Nam<br>Độc lập – Tự do – Hạnh phúc</div>
        <div class="card-title">Giấy chứng minh nhân dân</div>
        <div class="card-no">Số ${id("dinh", "205 118 437")}</div>
        <div class="card-field">Họ tên: <span class="v">LÊ VĂN ĐỊNH</span></div>
        <div class="card-field">Sinh ngày: <span class="v">${dt("1972-06-08", "08-6-1972")}</span></div>
        <div class="card-field">Nguyên quán: <span class="v">xã Hoài An, thị xã Hoài Giang</span></div>
        <div class="card-field">Nơi thường trú: <span class="v">27 Lê Lợi, Hoài Giang</span></div>
      </div>
    </div>
    <p class="small muted right" style="margin:8px 0 0">BẢN SAO · đã đối chiếu bản chính</p>
  </div>`,
};

const hienTruong = {
  id: "hien_truong", stage: 0, kind: "Biên bản", label: "Biên bản khám nghiệm hiện trường",
  html: () => `
  <div class="doc doc--typed">
    <div class="typed-head"><div><b>CÔNG AN THỊ XÃ HOÀI GIANG</b><span class="u">Đội Cảnh sát hình sự</span></div>
      <div><b>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</b><span class="u">Độc lập – Tự do – Hạnh phúc</span></div></div>
    <div class="typed-title">BIÊN BẢN KHÁM NGHIỆM HIỆN TRƯỜNG</div>
    <div class="typed-sub">Hồi ${at("scene_report", "21 giờ 30")}, ${wd("1997-03-15", "thứ Bảy")} ngày ${dt("1997-03-15", "15-3-1997")}, tại Bảo tàng thị xã, số 3 Bạch Đằng</div>
    <p>Người lập: Thượng úy Huỳnh Tấn Phát. Người chứng kiến: bà Phan Thị Nguyệt (Giám đốc bảo tàng), ông Nguyễn Văn Sáu (bảo vệ).</p>
    <p><b>1. Tủ kính số 1</b> (sảnh chính, bên trái bục phát biểu nếu nhìn từ hàng ghế khách): nắp kính đóng nhưng không khoá. Ổ khoá nguyên vẹn, không có dấu cạy, phá.
      Bên trong còn đệm nhung, không còn hiện vật (kim ấn).</p>
    <p><b>2. Chìa khoá tủ kính:</b> theo bà Nguyệt có 02 chìa. Chìa số 1 bà Nguyệt xuất trình, vẫn nằm trong chùm chìa bà mang theo người.
      Chìa số 2 đã giao cho gia đình người cho mượn hiện vật từ hôm bàn giao. Cần xác minh.</p>
    <p><b>3. Cầu dao tổng</b> (hành lang sau): lúc kiểm tra đang ở vị trí bật. Ông Sáu khai đã gạt lên lúc ${at("power_back", "21 giờ 00")}.
      Đề nghị Chi nhánh điện kiểm tra nguyên nhân.</p>
    <p><b>4. Cửa sau</b> (ra hẻm 12): khép hờ, chốt trong đã bị kéo ra. Không có dấu phá. Hẻm 12 đất ẩm, nhiều dấu chân lẫn lộn, không lấy được dấu.</p>
    <p><b>5. Đồng hồ treo tường</b> sảnh chính (đồng hồ chạy pin): chạy đúng giờ (đối chiếu đồng hồ cán bộ lúc ${at("scene_report", "21 giờ 30")}).</p>
    <p><b>6. Theo nhân chứng:</b> mất điện lúc ${at("outage", "20 giờ 41")}, có điện lại lúc ${at("power_back", "21 giờ 00")};
      phát hiện mất hiện vật lúc ${at("case_found_empty", "21 giờ 02")}; báo công an lúc ${at("police_called", "21 giờ 10")}.
      Khoảng 60 khách có mặt; danh sách khách mời do bảo tàng cung cấp.</p>
    <p><b>7.</b> Anh Lê Văn Định, trợ lý bảo tàng, không có mặt tại hiện trường. Chưa liên lạc được gia đình.</p>
    <div class="typed-sign"><div>NGƯỜI CHỨNG KIẾN<div class="sign">Nguyệt</div><div class="sign" style="font-size:22px">Sáu</div></div>
      <div>NGƯỜI LẬP BIÊN BẢN<div class="sign">Phát</div>Huỳnh Tấn Phát</div></div>
    ${stamp("Công an<br>thị xã<br>Hoài Giang", "right:70px;bottom:48px")}
    <p class="ink" style="position:absolute;left:40px;top:14px;transform:rotate(-3deg)">Bản chép, không đăng – K.</p>
  </div>`,
};

const khaiNguyet = {
  id: "khai_nguyet", stage: 0, kind: "Lời khai", label: "Lời khai bà Phan Thị Nguyệt",
  html: () => `
  <div class="doc doc--typed">
    <div class="typed-head"><div><b>CÔNG AN THỊ XÃ HOÀI GIANG</b><span class="u">Đội Cảnh sát hình sự</span></div>
      <div><b>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</b><span class="u">Độc lập – Tự do – Hạnh phúc</span></div></div>
    <div class="typed-title">BIÊN BẢN GHI LỜI KHAI</div>
    <div class="typed-sub">Hồi 8 giờ, ${wd("1997-03-16", "Chủ Nhật")} ngày ${dt("1997-03-16", "16-3-1997")}</div>
    <p>Người khai: <b>Phan Thị Nguyệt</b>, ${age("nguyet", "1997-03-16", 47)} tuổi, Giám đốc Bảo tàng thị xã Hoài Giang.</p>
    <div class="qa">
      <p class="q">H: Bà ở đâu khi mất điện?</p>
      ${line("nguyet-1", "Đ: Tôi đang đứng ở bục phát biểu, giới thiệu hiện vật. Đèn tắt thì tôi dùng loa pin cầm tay, lúc nào tôi cũng để sẵn dưới bục, mời khách ngồi yên và nói tiếp cho mọi người đỡ hoảng. Tôi không rời bục cho tới khi có điện lại.", "p")}
      <p class="q">H: Bà phát hiện mất kim ấn thế nào?</p>
      ${line("nguyet-2", "Đ: Có điện lại, tôi quay sang tủ kính thì thấy đệm nhung trống. Nắp kính vẫn đóng, nhưng không khoá.", "p")}
      <p class="q">H: Ai giữ chìa khoá tủ kính?</p>
      ${line("nguyet-3", "Đ: Chìa số 1 tôi giữ trong chùm chìa, không rời người. Chìa số 2 thì theo biên bản bàn giao, gia đình cụ Khải giữ.", "p")}
      <p class="q">H: Bà biết gì về anh Lê Văn Định?</p>
      ${line("nguyet-4", "Đ: Định làm ở bảo tàng hơn một năm. Chiều thứ Sáu lúc nhận hiện vật, Định cứ lúi húi cân đo kim ấn, tôi phải nhắc mấy lần cho xong việc.", "p")}
      <p class="q">H: Định có báo với bà điều gì về hiện vật không?</p>
      ${line("nguyet-5", "Đ: Không. Định không hề báo cáo với tôi điều gì bất thường về hiện vật.", "p")}
      ${line("nguyet-6", "Tối thứ Bảy Định tự ý bỏ về lúc nào tôi không để ý.", "p")}
      <p class="q">H: Trước khi mất điện, có ai rời sảnh không?</p>
      ${line("nguyet-7", "Đ: Khách ra vào nhiều. Tôi nhớ khoảng 8 giờ 20 anh Vũ, con cụ Khải, có ra ngoài, nói đi hút thuốc cho đỡ ngột. Cụ Khải và ông Tâm thì ngồi hàng ghế đầu suốt buổi.", "p")}
      <p class="q">H: Bà có ý kiến gì thêm?</p>
      ${line("nguyet-8", "Đ: Sáng thứ Hai đoàn giám định Huế tới, nay đành báo hoãn. Tôi rất mong công an sớm tìm lại hiện vật.", "p")}
    </div>
    <div class="typed-sign"><div>NGƯỜI KHAI<div class="sign">Nguyệt</div>Phan Thị Nguyệt</div><div>CÁN BỘ GHI LỜI KHAI<div class="sign">Phát</div>Huỳnh Tấn Phát</div></div>
  </div>`,
};

const khaiSau = {
  id: "khai_sau", stage: 0, kind: "Lời khai", label: "Lời khai ông Nguyễn Văn Sáu (bảo vệ)",
  html: () => `
  <div class="doc doc--typed">
    <div class="typed-head"><div><b>CÔNG AN THỊ XÃ HOÀI GIANG</b><span class="u">Đội Cảnh sát hình sự</span></div>
      <div><b>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</b><span class="u">Độc lập – Tự do – Hạnh phúc</span></div></div>
    <div class="typed-title">BIÊN BẢN GHI LỜI KHAI</div>
    <div class="typed-sub">Hồi 10 giờ, ${wd("1997-03-16", "Chủ Nhật")} ngày ${dt("1997-03-16", "16-3-1997")}</div>
    <p>Người khai: <b>Nguyễn Văn Sáu</b>, ${age("sau", "1997-03-16", 56)} tuổi, bảo vệ Bảo tàng thị xã.</p>
    <div class="qa">
      ${line("sau-1", "Đ: Năm giờ chiều thứ Bảy tôi cài chốt cửa sau bên trong như mọi ngày. Cửa đó chỉ có cái chốt trong, không có ổ khoá: ai ở trong kéo chốt ra là mở được. Chìa tủ kính tôi không giữ.")}
      ${line("sau-2", "Đ: Tối đó tôi đứng ở cổng trước đón khách. Lúc khách mới vô, mấy người hỏi đường ra nhà vệ sinh ở hành lang sau, tôi chỉ.")}
      ${line("sau-3", `Đ: Lúc mất điện tôi nhìn đồng hồ đeo tay thấy ${at("outage", "8 giờ 41")}. Tôi tưởng cúp điện cả khu nên chạy vội qua cổng ra đường coi (chắc có khách thấy tôi chạy ra trong lúc tối), ngoài đường xe cộ ồn nên chị Nguyệt gọi gì qua loa tôi không nghe rõ; thấy nhà hai bên vẫn sáng mới biết tại bảo tàng. Tôi quay vô phòng bảo vệ lấy đèn pin, coi hộp cầu chì sau tấm phông sân khấu trước vì tưởng dàn âm thanh làm nhảy cầu chì, không thấy gì, rồi mới vòng ra hành lang sau.`)}
      ${line("sau-4", "Đ: Lúc tôi đang lục hộp cầu chì sau tấm phông thì nghe ngoài sảnh có tiếng đèn chụp ảnh nổ 'bụp' một cái. Rồi tôi đi cửa sau sân khấu ra hành lang sau. Hành lang chất đầy thùng gỗ đựng hiện vật, tối thui, đèn pin lại yếu, tôi còn vấp thùng gỗ làm rớt đèn, phải mò lại, nên đi mất một lúc.")}
      ${line("sau-5", `Đ: Tới tủ cầu dao thì thấy cần gạt nằm ở dưới. Tôi gạt lên, đèn sáng lại, đồng hồ tôi chỉ đúng ${at("power_back", "9 giờ")}.`)}
      ${line("sau-6", "Đ: Lúc đó cửa sau khép hờ, chốt trong bị kéo ra rồi. Ai kéo thì tôi không biết. Tôi không thấy ai ở hành lang.")}
      ${line("sau-7", "Đ: Cậu Định thì từ lúc bà Nguyệt phát biểu được một lúc, chừng hơn tám giờ, tôi không thấy nữa.")}
    </div>
    <div class="typed-sign"><div>NGƯỜI KHAI<div class="sign">Sáu</div>Nguyễn Văn Sáu</div><div>CÁN BỘ GHI LỜI KHAI<div class="sign">Phát</div>Huỳnh Tấn Phát</div></div>
  </div>`,
};

const banDo = {
  id: "ban_do", stage: 0, kind: "Bản đồ", label: "Bản đồ du lịch thị xã Hoài Giang",
  html: () => `
  <div class="doc doc--map">
    ${townMap()}
    <div class="news-grid" style="grid-template-columns:1fr 1fr;margin-top:10px;font-size:15px">
      <div class="news-box"><h4>Đi lại</h4>
        <p><b>Ga Hoài Giang</b> nằm ở xã An Phú, cách trung tâm thị xã <b>12 km</b> theo Quốc lộ 1.
        Xe ôm từ trung tâm ra ga mất khoảng <b>25–30 phút</b>; taxi hoặc xe con khoảng 20 phút. Xe lam chạy theo giờ, chuyến cuối 18 giờ.</p></div>
      <div class="news-box"><h4>Tàu Thống Nhất dừng ga Hoài Giang</h4>
        <p>S5 đi Nha Trang – Sài Gòn: 22 giờ 15 · S6 đi Huế – Hà Nội: ${at("train_hue", "21 giờ 35")}.<br>Phòng vé mở từ 18 giờ đến khi chuyến cuối rời ga.</p></div>
    </div>
  </div>`,
};

/** Ledger rows: [time, name, ID number, destination, train, car/seat, fare]. */
const TICKETS = [
  ["19:41", "Nguyễn Thị Bích", "201 336 870", "Đà Nẵng", "S6", "3/12", "21.000"],
  ["19:58", "Trần Văn Cường", "201 998 115", "Vinh", "S6", "4/31", "95.000"],
  ["20:14", "Phạm Thị Hồng", "211 404 522", "Nha Trang", "S5", "6/8", "52.000"],
  ["20:30", "Hồ Văn Thanh", "205 773 019", "Huế", "S6", "5/18", "38.000"],
  ["20:52", "Lê Văn Định", "205 118 437", "Huế", "S6", "5/20", "38.000"],
  ["21:03", "Võ Thị Mai", "201 652 380", "Đà Nẵng", "S6", "3/14", "21.000"],
  ["21:21", "Lê Văn Định", "201 447 026", "Huế", "S6", "2/7", "38.000"],
  ["21:26", "Đặng Quốc Việt", "011 870 245", "Hà Nội", "S6", "1/22", "142.000"],
  ["21:40", "Nguyễn Văn Út", "220 117 904", "Sài Gòn", "S5", "7/3", "118.000"],
];

const soVe = {
  id: "so_ve", stage: 0, kind: "Sổ sách", label: "Sổ bán vé ga Hoài Giang, tối thứ Bảy 15/3",
  html: () => {
    const rows = TICKETS.map((r, i) => {
      const time = r[0] === "20:52" ? at("ticket_dinh", r[0]) : r[0] === "21:21" ? at("ticket_dinh2", r[0]) : r[0];
      const cm = r[2] === "205 118 437" ? id("dinh", r[2]) : r[2] === "201 447 026" ? id("dinh2", r[2]) : r[2];
      return `<tr><td class="p">${i + 31}</td><td>${time}</td><td>${r[1]}</td><td>${cm}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td><td>${r[6]}</td></tr>`;
    }).join("");
    return `
  <div class="doc doc--ledger">
    <div class="ledger-head"><div class="small caps">Liên hiệp Đường sắt Việt Nam · Ga Hoài Giang</div>
      <h3>Sổ bán vé hành khách</h3><div>Ngày ${dt("1997-03-15", "15 tháng 3 năm 1997")} (${wd("1997-03-15", "thứ Bảy")}) · Ca tối · Tờ số 4</div></div>
    <table class="ledger">
      <tr><th>STT</th><th>Giờ bán</th><th>Họ tên hành khách</th><th>Số CMND</th><th>Ga đến</th><th>Tàu</th><th>Toa/Ghế</th><th>Giá vé (đ)</th></tr>
      ${rows}
    </table>
    <p class="copy-note">Bản chép tay từ sổ gốc. Người chép ghi chú: "Giờ bán ghi theo đồng hồ phòng vé, sáng nào cũng chỉnh theo giờ đài phát thanh."</p>
  </div>`;
  },
};

export default [giaoViec, bao16, bao16t3, thuHoa, cmnd, hienTruong, khaiNguyet, khaiSau, banDo, soVe];
