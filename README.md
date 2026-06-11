# 📘 Hướng Dẫn Quản Lý Dữ Liệu & Cấu Hình Portfolio

Dự án này sử dụng cấu trúc **Modular React**, trong đó toàn bộ dữ liệu nội dung, link video, ảnh, prompt và liên kết mạng xã hội được tách riêng vào một file cấu hình tập trung để dễ dàng chỉnh sửa hoặc kết nối cơ sở dữ liệu sau này.

Tất cả các nội dung hiển thị nằm tại file:
👉 **[src/data/portfolioData.js](file:///c:/Users/HP/Desktop/Portfolio/src/data/portfolioData.js)**

---

## 1. Cách Thay Đổi Prompt & Ảnh Storyboard (Workflow Bước 1 & 2)

Mở file `src/data/portfolioData.js` và tìm tới biến `workflowSteps`.

### 🔹 Bước 1: Thay đổi Prompt tạo Storyboard
Tại phần tử đầu tiên của `workflowSteps` (có `id: 1` và `title: "Storyboard Scripting"`), tìm trường `code` bên trong thuộc tính `content`. 
* Sửa trường `code` để đổi câu lệnh duy nhất (single prompt) gửi cho Midjourney.
* Sửa trường `explanation` để viết kỹ thuật tối ưu hóa của bạn.

**Ví dụ sửa:**
```javascript
content: {
  type: "terminal",
  language: "midjourney",
  code: `/imagine prompt: a 3x3 storyboard grid sheet showing your custom scenes... --ar 16:9 --v 6.0`,
  explanation: "Kỹ thuật tối ưu của bạn..."
}
```

### 🔹 Bước 2: Thay đổi Ảnh Storyboard (Gồm 9 phân cảnh dạng lưới)
Tại phần tử thứ hai của `workflowSteps` (có `id: 2` và `title: "Storyboard Generation"`), tìm các trường trong thuộc tính `content`:
* Sửa trường `url` để cập nhật đường dẫn ảnh chứa storyboard hoàn chỉnh (gồm 9 ảnh nhỏ xếp lưới 3x3).
* Sửa trường `caption` để mô tả tóm tắt kết quả phân cảnh.

**Ví dụ sửa:**
```javascript
content: {
  type: "single_image",
  url: "https://your-domain.com/your-9-grid-storyboard-image.jpg",
  caption: "Mô tả kết quả phân cảnh của bạn..."
}
```

---

## 2. Cách Thay Đổi Video & Ảnh Minh Họa

### 🔹 Thay video nền tại Hero Section (Đầu trang)
Tìm biến `personalInfo` ở đầu file `src/data/portfolioData.js`:
* `heroVideoUrl`: Thay bằng link video mp4 trực tiếp của bạn (hỗ trợ lưu trên các dịch vụ lưu trữ video hoặc CDN).
* `heroVideoPlaceholder`: Link ảnh nền tối hiển thị trong lúc chờ video tải xong hoặc làm ảnh fallback trên thiết bị di động không hỗ trợ tự phát video.

### 🔹 Thay video & ảnh trong Workflow Bước 3 (Motion)
Tại phần tử thứ ba của `workflowSteps` (có `id: 3` và `title: "Motion"`):
* Thay `videoUrl` trong `content` bằng link video Kling AI/Runway mp4 của bạn.
* Thay `caption` để mô tả kỹ thuật chuyển động.

### 🔹 Thay đổi & Thêm mới dự án trong Case Studies (Dự án thực tế)
Tìm biến `caseStudies` (mảng chứa các thẻ dự án). Để chỉnh sửa hoặc thêm các video mới (ví dụ: `0224(13).mp4`, `0224(8).mp4`), bạn làm theo các bước chi tiết sau:

**Bước A: Chuẩn bị tệp tin Video**
1. Sao chép tệp video định dạng `.mp4` của bạn vào thư mục **`public/video/`** (đây là nơi Vite lưu trữ tài nguyên để tải trực tiếp lên web). Ví dụ: `public/video/my_new_ad.mp4`.

**Bước B: Cấu hình mã nguồn**
Mở tệp `src/data/portfolioData.js` và thêm/sửa một đối tượng trong mảng `caseStudies` có định dạng mẫu như sau:
```javascript
{
  id: 5,                                       // ID tăng dần (không được trùng lặp)
  title: "Tên Chiến Dịch Quảng Cáo",             // Tiêu đề hiển thị dưới thẻ video
  client: "Tên Thương Hiệu / Đối Tác",            // Nhãn hiển thị góc trên bên trái
  description: "Mô tả ngắn gọn về quy trình sản xuất và hiệu quả video ngắn.",
  techStack: ["Midjourney", "Kling AI", "CapCut"], // Các nhãn công nghệ (badges) sử dụng
  metrics: [                                   // 2 chỉ số hiệu năng (CTR, Doanh thu, Chi phí,...)
    { label: "Chỉ số 1 (Ví dụ: Lượt xem)", value: "+150K" },
    { label: "Chỉ số 2 (Ví dụ: Tăng CTR)", value: "25%" }
  ],
  videoUrl: "/video/my_new_ad.mp4",            // Đường dẫn tuyệt đối từ public (BẮT BUỘC)
  imageUrl: "https://images.unsplash.com/..."  // Link ảnh Unsplash dự phòng (nếu cần)
}
```

* **Để THÊM dự án mới:** Sao chép nguyên khối `{ ... }` ở trên, đổi `id` thành số tiếp theo (ví dụ: `7`, `8`,...) rồi dán vào cuối mảng trước dấu đóng `]`.
* **Để XÓA dự án:** Xóa bỏ khối `{ ... }` chứa dự án tương ứng.
* **Để THAY ĐỔI Video:** Chỉ cần cập nhật trường `videoUrl` trỏ tới tệp video mới của bạn trong thư mục `public/video/`.

---

## 3. Cách Kết Nối Email và Kích Hoạt Form Liên Hệ

Form liên hệ đã được cấu hình để gửi tin nhắn trực tiếp về Email của bạn thông qua dịch vụ **Web3Forms** (miễn phí 250 tin/tháng, không cần backend).

### 🔹 Hướng dẫn kích hoạt:
1. Truy cập trang web [web3forms.com](https://web3forms.com).
2. Nhập Email của bạn (`vinhlephongg@gmail.com`) để nhận mã **Access Key** miễn phí gửi qua hòm thư ngay lập tức.
3. Mở file `src/data/portfolioData.js` tìm biến `personalInfo`.
4. Thay thế giá trị của `web3FormsKey` bằng mã Key bạn vừa nhận:
   ```javascript
   export const personalInfo = {
     // ...
     email: "vinhlephongg@gmail.com",
     facebookUrl: "https://www.facebook.com/zinle.2901",
     zaloUrl: "https://zalo.me/your_number",
     web3FormsKey: "MÃ_ACCESS_KEY_WEB3FORMS_CỦA_BẠN", // Thay tại đây
     // ...
   };
   ```
5. Khi người dùng gửi form, email chứa thông tin chi tiết sẽ được tự động gửi thẳng vào hòm thư Gmail của bạn. Trong môi trường phát triển (khi chưa điền key), form sẽ tự động chạy chế độ demo thành công để bạn kiểm tra giao diện hoạt hình.

---

## 4. Cách Khởi Chạy Local Dev Server

1. Cài đặt các thư viện (nếu có cập nhật):
   ```bash
   npm install
   ```
2. Chạy môi trường local:
   ```bash
   npm run dev
   ```
3. Đóng gói mã nguồn tối ưu cho production:
   ```bash
   npm run build
   ```
