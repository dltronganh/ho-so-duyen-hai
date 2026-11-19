# Hồ sơ Duyên Hải

Game **hồ sơ điều tra** chạy trên trình duyệt. Bạn nhận một hộp hồ sơ vụ án: báo cũ, biên bản, lời khai,
ảnh, sổ sách. Đọc kỹ, ghim bằng chứng lên bàn, nối chỉ đỏ, rồi trả lời từng **trọng điểm** để mở thêm
tài liệu cho tới khi tìm ra sự thật.

**Chơi ngay:** https://dltronganh.github.io/ho-so-duyen-hai/

Chơi được trên máy tính và điện thoại, từ 1 đến 4 người ngồi cùng màn hình. Tiến độ được lưu
trong trình duyệt của bạn.

**English:** case 04 *Display Case No. 7* is also playable in English:
https://dltronganh.github.io/ho-so-duyen-hai/?lang=en

## Các hồ sơ

| Hồ sơ | Bối cảnh | Độ khó |
|---|---|---|
| 01 · Kim ấn đêm khai mạc | thị xã Hoài Giang, 1997 | Vừa (60–120 phút) |
| 02 · Đêm rằm tháng Giêng | thị xã Hoài Giang, 1998 | Khó (2–4 giờ) |
| 03 · Đường hầm dưới Thung lũng | Thebes, Ai Cập cổ đại | Khó (3–5 giờ) |
| 04 · Tủ kính số 7 | thị xã Hoài Giang, 1999 | Siêu khó (3–5 giờ), nên chơi sau 03 |

## Chạy trên máy

Game là HTML/CSS/JavaScript thuần, không cần cài đặt hay build. Vì trình duyệt không chạy ES modules
khi mở thẳng file (`file://`), hãy phục vụ thư mục này bằng một máy chủ tĩnh bất kỳ, ví dụ:

```
python -m http.server 8000
```

hoặc `npx serve`, hoặc tiện ích Live Server của VS Code. Sau đó mở `http://localhost:8000/`.

## Cấu trúc thư mục

- `index.html`, `css/`, `js/`: bàn điều tra (bảng ghim kéo thả, chỉ đỏ, trình đọc tài liệu, bút dạ, sổ tay, trọng điểm).
- `cases/<số>/`: dữ liệu từng hồ sơ: tài liệu (`docs/`), câu hỏi, đáp án đã mã hoá nhẹ, minh hoạ SVG.
  Danh sách hồ sơ nằm ở `cases/list.js`; bản tiếng Anh của hồ sơ 04 ở `cases/04/en/`.
- `fonts/`: phông chữ kèm giấy phép.

## Giấy phép

Mã nguồn: MIT (`LICENSE`). Nội dung vụ án và minh hoạ: CC BY 4.0. Phông chữ: SIL OFL (xem `CREDITS.md`).
Mọi nhân vật, địa danh, tờ báo trong game đều hư cấu.
