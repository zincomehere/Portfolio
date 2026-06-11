/**
 * Portfolio Data Configuration
 * Lê Phong Vinh | AI Video Producer & Creative Technologist
 * 
 * You can easily bind this file to a Firebase Realtime Database listener in App.jsx
 * or within each individual component to fetch data dynamically.
 */

export const personalInfo = {
  name: "LÊ PHONG VINH",
  title: "AI Video Producer",
  subtitle: "Creative Technologist",
  headline: "AI Content Producer. Xây dựng quy trình. Tối ưu chuyển đổi.",
  subHeadline: "Ứng dụng hệ sinh thái AI tạo sinh (Midjourney, Kling AI) và tư duy dữ liệu để sản xuất hàng loạt video Affiliate Performance.",
  heroVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-32111-large.mp4", // Cinematic fallback video
  heroVideoPlaceholder: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920&auto=format&fit=crop", // Elegant dark gradient image
  email: "vinhlephongg@gmail.com",
  facebookUrl: "https://www.facebook.com/zinle.2901",
  zaloUrl: "https://zalo.me/your_number",
  web3FormsKey: "YOUR_WEB3FORMS_ACCESS_KEY", // Get a free access key from https://web3forms.com to make form active directly
  location: "Ho Chi Minh City, Vietnam",
  status: "Available for Projects"
};

export const workflowSteps = [
  {
    id: 1,
    title: "Storyboard Scripting",
    subtitle: "Kịch bản Phân cảnh",
    iconName: "Code",
    description: "Thiết kế một câu lệnh duy nhất (single prompt) kết hợp Seed và cấu trúc phân cảnh để Midjourney vẽ đồng thời toàn bộ 9 khung hình của storyboard.",
    content: {
      type: "terminal",
      language: "midjourney",
      code: `Create a professional 3x3 visual storyboard grid for a high-end turmeric health beverage commercial. The image is a single composite arranged in 3 columns and 3 rows, with clean white borders separating the 9 panels.

GRID LAYOUT:
Row 1: Panels 1-3. Row 2: Panels 4-6. Row 3: Panels 7-9.

VISUAL AESTHETIC:
Warm golden hour sunlight, lush green forest (matching the style of reference 3), mossy textures, organic premium vegan lifestyle. Cinematic lighting, photorealistic, 35mm lens depth of field, 8k resolution.

PANEL DESCRIPTIONS:
Panel 1: Extreme macro of a raw turmeric root snapping in half, vibrant orange dust and juice mist caught in a sunbeam on dark slate.
Panel 2: Macro of brown rice grains falling onto rustic dark slate in a cascading motion.
Panel 3: Top-down view of a wooden spoon stirring golden turmeric powder and rice grains on slate.
Panel 4: Hero product shot of the golden tin (matching reference 1) sitting on a sunlit mossy stone in a forest.
Panel 5: Close-up tracking shot of the golden tin (reference 1), highlighting premium texture and gold lettering.
Panel 6: The golden tin (reference 1) in a dappled forest light with soft ferns and a dewdrop on moss nearby.
Panel 7: Close-up of steaming milk being poured into a glass cup, creating a vibrant yellow swirl.
Panel 8: Eye-level close-up of a steaming glass cup of golden turmeric milk on a wooden table, warm ethereal glow.
Panel 9: Profile shot of the woman Saffron (matching reference 2) in a cream linen robe taking a blissful sip of the golden milk during magic hour sunset.`,
      explanation: "Kỹ thuật tối ưu: Thiết lập rõ ràng cấu trúc lưới GRID LAYOUT, phong cách VISUAL AESTHETIC đồng nhất và định nghĩa chi tiết PANEL DESCRIPTIONS cho từng cảnh trong một câu lệnh duy nhất để tối đa hóa tính đồng bộ."
    }
  },
  {
    id: 2,
    title: "Storyboard Generation",
    subtitle: "Dựng Khung Ảnh AI",
    iconName: "Image",
    description: "Sử dụng Midjourney v6 render ra duy nhất một bức ảnh storyboard hoàn chỉnh gồm 9 khung hình (3x3 grid) thống nhất về phong cách và bối cảnh.",
    content: {
      type: "single_image",
      url: "/image/Create_a_professional_3x3_visual_202606031345.jpeg",
      caption: "Bảng phân cảnh storyboard hoàn chỉnh chứa 9 khung hình (3x3 grid) được dựng thành công từ một câu lệnh duy nhất."
    }
  },
  {
    id: 3,
    title: "Motion Prompting",
    subtitle: "Kịch bản Chuyển động",
    iconName: "Code",
    description: "Thiết kế bộ prompt chuyển động cho từng cảnh, kiểm soát góc quay (pan, zoom, static lock-off) để giữ nguyên nhãn mác sản phẩm và tạo cảm xúc.",
    content: {
      type: "terminal",
      language: "motion-prompt",
      code: `CỤM 1: NGUYÊN LIỆU (Tạo nhịp điệu nhanh, tò mò)
Scene 1:
Prompt: Extreme macro shot. A dramatic, slow-motion burst of fine, golden turmeric powder erupts around the fresh turmeric roots on the dark slate. Intense, warm morning sunlight catches the floating particles. Subtle dolly-in camera movement. Cinematic, 4k.

Scene 2:
Prompt: Close-up macro shot. A continuous, elegant slow-motion stream of brown rice grains falls gently onto the pile on the dark slate, scattering slightly upon impact. Shallow depth of field. High-speed 120fps feel, sharp textures.

Scene 3:
Prompt: Top-down flatlay. The camera executes a very slow, smooth motorized clockwise rotation over the wooden spoon filled with golden turmeric powder, scattered rice, and roots. Dust motes dance softly in the warm light beams. High-end food commercial videography.

CỤM 2: SẢN PHẨM (Khóa tĩnh camera để bảo vệ nhãn mác)
Scene 4:
Prompt: Slow, grand drone push-in shot. The glowing yellow product tin rests perfectly still on the mossy rock. Majestic divine sunbeams filter actively through the forest canopy, moving across the scene. Background leaves rustle gently. The product is the clear focal point.

Scene 5:
Prompt: STATIC lock-off macro shot. The camera DOES NOT MOVE to preserve text integrity. The text "NGHỆ GẠO LỨT" is pristine and undistorted. Smooth, warm cinematic light dapples move slowly across the curved surface of the tin. Soft background bokeh.

Scene 6:
Prompt: Medium lock-off shot. The product tin stands static in the background. In the extreme sharp foreground, a vibrant green fern leaf bounces gently. A crystal-clear water drop trembles at the tip of the leaf and falls in graceful slow motion. Nature purity aesthetic.

CỤM 3: TRẢI NGHIỆM (Chuyển động mượt mà, cảm xúc)
Scene 7:
Prompt: Close-up shot, 60fps. Golden turmeric powder falls from the wooden spoon into the transparent glass cup of warm water, swirling into a beautiful golden amber liquid. The motion is smooth and fluid. Warm, cozy studio lighting.

Scene 8:
Prompt: Medium close-up. Smooth slider shot moving slowly from left to right. Delicate, graceful white steam rises continuously from the warm, creamy golden turmeric milk in the glass mug. The background is a beautifully blurred serene morning forest.

Scene 9:
Prompt: Wide cinematic shot. Slow motorized pan to the right across the clean wooden kitchen countertop, revealing the yellow product tin standing elegantly next to the fresh glass of golden milk. Bright, aspirational morning sunlight. Perfect, stable commercial ending shot.`,
      explanation: "Kỹ thuật tối ưu: Phân cấp kịch bản chuyển động thành 3 cụm hành vi máy quay để cân bằng giữa nhịp điệu kích thích, sự toàn vẹn thương hiệu (không biến dạng chữ nhãn mác) và cảm xúc trải nghiệm sản phẩm."
    }
  },
  {
    id: 4,
    title: "Motion Generation",
    subtitle: "Thổi hồn vào Khung hình",
    iconName: "Video",
    description: "Ứng dụng Kling AI & Runway Gen-3 để chuyển độnh ảnh tĩnh thành video chuyển động 60fps mượt mà, chân thực với camera movement đậm chất điện ảnh.",
    content: {
      type: "video",
      videoUrl: "/video/0603(1).mp4",
      aspectRatio: "aspect-video",
      caption: "Trích đoạn video quảng cáo hoàn chỉnh được render từ Kling AI (Tỷ lệ 16:9 gốc)."
    }
  },
  {
    id: 5,
    title: "CapCut & Hook",
    subtitle: "Dựng video & Đo lường CTR",
    iconName: "Rocket",
    description: "Đóng gói sản phẩm bằng CapCut Pro. Thiết kế Hook 3 giây đầu tiên gây kích thích thị giác mạnh kết hợp giọng đọc AI, tối ưu hóa các chỉ số tương tác.",
    content: {
      type: "metrics",
      hookRate: 68, // %
      retentionRate: 42, // %
      ctrIncrease: 20, // %
      productionCostReduction: 80, // %
      explanation: "Số liệu thực tế đo lường qua hàng trăm chiến dịch Affiliate Performance. CTR tăng vượt trội nhờ Hook giữ chân người dùng trong 3s vàng."
    }
  }
];

export const caseStudies = [
  {
    id: 1,
    title: "Drama Hoa Quả 3D",
    client: "Sữa Chua BerryYo",
    description: "Sản xuất chuỗi phim ngắn drama hài hước với tạo hình nhân vật Mascot Dâu Tây 3D sinh động. Đạt hơn 1.2M lượt xem trên TikTok, tăng tỷ lệ nhấp CTR lên 24% và tỷ lệ giữ chân 3s đầu đạt 70%.",
    techStack: ["Midjourney", "Kling AI", "CapCut", "TikTok", "Flow"],
    videoUrl: "/video/P2.mp4",
    imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Video Affiliate Sâm Mát Lục Vị",
    client: "Thảo Mộc Nam Dược",
    description: "Video review thực tế kết hợp giới thiệu sản phẩm trà thảo mộc Sâm Mát Lục Vị trên TikTok Shop. Giúp doanh số bán hàng Affiliate tăng 45% và tỷ lệ chuyển đổi đơn hàng tăng 28% sau 2 tuần.",
    techStack: ["CapCut Pro", "Voice AI", "TikTok"],
    videoUrl: "/video/aff.mp4",
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Quảng Cáo Hoạt Cảnh Dạ Dày",
    client: "Dược Phẩm Hoàng Gia",
    description: "Sản xuất hoạt cảnh 3D mô phỏng đội ngũ công nhân làm sạch ổ viêm dạ dày dưới sự chỉ đạo của CEO Cà Rốt. Đạt tỷ lệ giữ chân người xem 73% và tăng 21% hiệu quả mua hàng.",
    techStack: ["ChatGPT", "Midjourney", "Kling AI", "TikTok", "Flow"],
    videoUrl: "/video/0224(4).mp4",
    imageUrl: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Tác Hại Đồ Ăn Cay Nóng",
    client: "Nghệ Nano Curcumin",
    description: "Hoạt cảnh 3D minh họa tác hại của đồ ăn cay nóng tàn phá dạ dày bằng hình ảnh ẩn dụ sinh động. Đạt hơn 500k lượt xem tự nhiên, tăng CTR quảng cáo thêm 20% và tối ưu chi phí 80%.",
    techStack: ["Midjourney", "Kling AI", "CapCut", "TikTok"],
    videoUrl: "/video/0224(12).mp4",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Cơ Chế Kháng Viêm Dạ Dày",
    client: "Tinh Chất Nghệ Nano",
    description: "Video giải phẫu học 3D mô phỏng cơ chế kháng viêm dạ dày và bảo vệ gan của nghệ Nano Curcumin. Giúp tăng doanh số bán hàng Affiliate lên 35% nhờ nội dung khoa học trực quan.",
    techStack: ["ChatGPT", "Midjourney", "Luma Dream", "TikTok", "Flow"],
    videoUrl: "/video/0224(3).mp4",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Tiêu Diệt Vi Khuẩn HP",
    client: "Men Vi Sinh Bio-Stomach",
    description: "Mô phỏng 3D hiệu ứng tia sét năng lượng tiêu diệt ổ vi khuẩn HP trong dạ dày của men vi sinh. Tăng tỷ lệ giữ chân 3s đầu lên 72% và giảm thời gian sản xuất video quảng cáo 90%.",
    techStack: ["Midjourney", "HeyGen", "CapCut", "TikTok"],
    videoUrl: "/video/0224(9).mp4",
    imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Hậu Quả Của Việc Nhịn Ăn",
    client: "Dạ Dày Khỏe Đẹp",
    description: "Sử dụng nhân vật hoạt hình dạ dày 3D biểu cảm đáng thương cảnh báo tác hại của việc nhịn ăn giảm cân tiêu cực. Giúp tăng doanh thu Affiliate 35% và CTR quảng cáo đạt 22%.",
    techStack: ["Midjourney", "Kling AI", "CapCut", "TikTok", "Flow"],
    videoUrl: "/video/trà mâm xôi.mp4",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Bảo Vệ Lớp Vách Dạ Dày",
    client: "Gel Nghệ Mật Ong",
    description: "Hoạt cảnh 3D sinh động về chiến binh tế bào bảo vệ lớp vách dạ dày khỏi sự tấn công của axit. Đạt hơn 150K lượt xem trên Reels, tăng tỷ lệ chuyển đổi đơn hàng lên 25%.",
    techStack: ["Midjourney", "Kling AI", "CapCut", "TikTok"],
    videoUrl: "/video/0224(13).mp4",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Robot Bảo Mật Hệ Thống",
    client: "An Ninh Mạng CyberGuard",
    description: "Phim quảng cáo 3D giới thiệu giải pháp bảo mật bằng hình ảnh robot nhện diệt mã độc trong phòng máy chủ. Đạt tỷ lệ giữ chân 3s đầu 75% và tăng CTR lên 19%.",
    techStack: ["Stable Diffusion", "Runway Gen-3", "CapCut", "TikTok", "Flow"],
    videoUrl: "/video/0224(8).mp4",
    imageUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop"
  }
];

export const marqueeTools = [
  { name: "Midjourney", icon: "Compass", color: "#a855f7" },
  { name: "Flow", icon: "GitBranch", color: "#3b82f6" },
  { name: "Whisk", icon: "Sparkles", color: "#eab308" },
  { name: "Nano Banana", icon: "Zap", color: "#f43f5e" },
  { name: "MetaAI", icon: "BrainCircuit", color: "#10b981" },
  { name: "Firebase", icon: "Database", color: "#f97316" },
  { name: "CatBoost", icon: "Gauge", color: "#06b6d4" },
  { name: "Kling AI", icon: "Film", color: "#ec4899" },
  { name: "Runway", icon: "Video", color: "#8b5cf6" },
  { name: "CapCut Pro", icon: "Scissors", color: "#14b8a6" }
];
