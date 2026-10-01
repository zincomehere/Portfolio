/**
 * Portfolio Data Configuration
 * Lê Phong Vinh | AI Video Producer / Video Creator
 * 
 * You can easily bind this file to a Firebase Realtime Database listener in App.jsx
 * or within each individual component to fetch data dynamically.
 */

export const personalInfo = {
  name: "LÊ PHONG VINH",
  title: "AI Video Producer / Video Creator",
  subtitle: "Video Creator",
  headline: "AI Content Producer. Workflow Automation. Conversion Optimization.",
  subHeadline: "Leveraging generative AI ecosystems (Midjourney, Kling AI) and data-driven insights to produce high-performing Affiliate Performance Videos at scale.",
  heroVideoUrl: "/video/0603(1).mp4", // Cinematic 60fps AI video
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
    subtitle: "Scene-by-Scene Scripting",
    iconName: "Code",
    description: "Architecting a unified single prompt combining seeds and grid layout structures so Midjourney renders all 9 storyboard panels simultaneously.",
    content: {
      type: "terminal",
      language: "midjourney",
      code: `Create a professional 3x3 visual storyboard grid for a high-end turmeric health beverage commercial. The image is a single composite arranged in 3 columns and 3 rows, with clean white borders separating the 9 panels.

GRID LAYOUT:
Row 1: Panels 1-3. Row 2: Panels 4-6. Row 3: Panels 7-9.

VISUAL AESTHETIC:
Warm golden hour sunlight, lush green forest (matching reference style 3), mossy textures, organic premium vegan lifestyle. Cinematic lighting, photorealistic, 35mm lens depth of field, 8k resolution.

PANEL DESCRIPTIONS:
Panel 1: Extreme macro of a raw turmeric root snapping in half, vibrant orange dust and juice mist caught in a sunbeam on dark slate.
Panel 2: Macro of brown rice grains falling onto rustic dark slate in a cascading motion.
Panel 3: Top-down view of a wooden spoon stirring golden turmeric powder and rice grains on slate.
Panel 4: Hero product shot of the golden tin sitting on a sunlit mossy stone in a forest.
Panel 5: Close-up tracking shot of the golden tin, highlighting premium texture and gold lettering.
Panel 6: The golden tin in dappled forest light with soft ferns and a dewdrop on moss nearby.
Panel 7: Close-up of steaming milk being poured into a glass cup, creating a vibrant yellow swirl.
Panel 8: Eye-level close-up of a steaming glass cup of golden turmeric milk on a wooden table, warm ethereal glow.
Panel 9: Profile shot of a woman in a cream linen robe taking a blissful sip of the golden milk during magic hour sunset.`,
      explanation: "Optimization Technique: Clearly defining the 3x3 GRID LAYOUT, maintaining a unified VISUAL AESTHETIC, and specifying detailed PANEL DESCRIPTIONS in a single prompt to maximize visual cohesion."
    }
  },
  {
    id: 2,
    title: "Storyboard Generation",
    subtitle: "AI Visual Grid Rendering",
    iconName: "Image",
    description: "Utilizing Midjourney v6 to render a complete, unified 9-panel (3x3 grid) storyboard sheet with consistent lighting, character design, and environment.",
    content: {
      type: "single_image",
      url: "/image/Create_a_professional_3x3_visual_202606031345.jpeg",
      caption: "Complete 9-panel (3x3 grid) storyboard sheet rendered seamlessly from a single master prompt."
    }
  },
  {
    id: 3,
    title: "Motion Prompting",
    subtitle: "Cinematic Camera Scripting",
    iconName: "Code",
    description: "Designing motion prompt suites for each scene, directing precise camera angles (pan, zoom, static lock-off) to preserve product branding while evoking emotion.",
    content: {
      type: "terminal",
      language: "motion-prompt",
      code: `GROUP 1: INGREDIENTS (Fast-paced, curiosity-driven)
Scene 1:
Prompt: Extreme macro shot. A dramatic, slow-motion burst of fine, golden turmeric powder erupts around fresh turmeric roots on dark slate. Intense, warm morning sunlight catches floating particles. Subtle dolly-in camera movement. Cinematic, 4k.

Scene 2:
Prompt: Close-up macro shot. A continuous, elegant slow-motion stream of brown rice grains falls gently onto the pile on dark slate, scattering slightly upon impact. Shallow depth of field. High-speed 120fps feel, sharp textures.

Scene 3:
Prompt: Top-down flatlay. Camera executes a slow, smooth motorized clockwise rotation over a wooden spoon filled with golden turmeric powder, scattered rice, and roots. Dust motes dance softly in warm light beams. High-end food commercial videography.

GROUP 2: PRODUCT (Static lock-off camera to protect branding)
Scene 4:
Prompt: Slow, grand drone push-in shot. Glowing yellow product tin rests perfectly still on a mossy rock. Majestic sunbeams filter actively through forest canopy. Background leaves rustle gently. Product is the clear focal point.

Scene 5:
Prompt: STATIC lock-off macro shot. Camera DOES NOT MOVE to preserve text integrity. Product branding is pristine and undistorted. Smooth, warm cinematic light dapples move slowly across the curved surface of the tin. Soft background bokeh.

Scene 6:
Prompt: Medium lock-off shot. Product tin stands static in background. In sharp foreground, a vibrant green fern leaf bounces gently. A crystal-clear water drop trembles at the tip of the leaf and falls in graceful slow motion. Nature purity aesthetic.

GROUP 3: EXPERIENCE (Smooth cinematic motion & emotion)
Scene 7:
Prompt: Close-up shot, 60fps. Golden turmeric powder falls from wooden spoon into transparent glass cup of warm water, swirling into a beautiful golden amber liquid. Motion is smooth and fluid. Warm, cozy studio lighting.

Scene 8:
Prompt: Medium close-up. Smooth slider shot moving slowly from left to right. Delicate, graceful white steam rises continuously from warm, creamy golden turmeric milk in glass mug. Background is a beautifully blurred serene morning forest.

Scene 9:
Prompt: Wide cinematic shot. Slow motorized pan right across clean wooden kitchen countertop, revealing yellow product tin standing elegantly next to fresh glass of golden milk. Bright, aspirational morning sunlight. Perfect, stable commercial ending shot.`,
      explanation: "Optimization Technique: Categorizing camera motion into 3 distinct behavior groups to balance engaging visual rhythm, brand integrity (zero label distortion), and emotional product resonance."
    }
  },
  {
    id: 4,
    title: "Motion Generation",
    subtitle: "Bringing Frames to Life",
    iconName: "Video",
    description: "Deploying Kling AI & Runway Gen-3 to transform static frames into ultra-smooth 60fps videos featuring cinematic camera motion.",
    content: {
      type: "video",
      videoUrl: "/video/0603(1).mp4",
      aspectRatio: "aspect-video",
      caption: "Final commercial video clip rendered via Kling AI (native 16:9 aspect ratio)."
    }
  },
  {
    id: 5,
    title: "CapCut & Hook Design",
    subtitle: "Video Editing & CTR Optimization",
    iconName: "Rocket",
    description: "Packaging the final asset using CapCut Pro. Designing high-impact 3-second visual hooks paired with AI voiceovers to maximize user engagement metrics.",
    content: {
      type: "metrics",
      hookRate: 68, // %
      retentionRate: 42, // %
      ctrIncrease: 20, // %
      productionCostReduction: 80, // %
      explanation: "Empirical Data: Measured across hundreds of affiliate performance campaigns. Drastic CTR boosts driven by high-retention 3-second golden hooks."
    }
  }
];

export const caseStudies = [
  {
    id: 1,
    title: "3D Mascot Drama Shorts",
    client: "BerryYo Yogurt",
    description: "Produced a viral drama short series featuring a lively 3D Strawberry Mascot. Achieved 1.2M+ TikTok views, boosted CTR by 24%, and hit a 70% 3-second hook retention rate.",
    techStack: ["Midjourney", "Kling AI", "CapCut", "TikTok", "Flow"],
    videoUrl: "/video/P2.mp4",
    imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Herbal Tea Affiliate Review",
    client: "Nam Duoc Herbal",
    description: "Created an authentic product review campaign for Sam Mat Luc Vi herbal tea on TikTok Shop. Drove a 45% increase in affiliate sales and a 28% boost in conversion rate within 2 weeks.",
    techStack: ["CapCut Pro", "Voice AI", "TikTok"],
    videoUrl: "/video/aff.mp4",
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "3D Digestive Care Animation",
    client: "Hoang Gia Pharma",
    description: "Animated 3D workers cleansing stomach inflammation under CEO Carrot's guidance. Attained a 73% viewer retention rate and a 21% lift in purchase conversion.",
    techStack: ["ChatGPT", "Midjourney", "Kling AI", "TikTok", "Flow"],
    videoUrl: "/video/0224(4).mp4",
    imageUrl: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Spicy Food Health Impacts",
    client: "Nano Curcumin",
    description: "Rendered vivid 3D metaphors illustrating how spicy foods damage stomach walls. Generated 500K+ organic views, boosted ad CTR by 20%, and slashed production costs by 80%.",
    techStack: ["Midjourney", "Kling AI", "CapCut", "TikTok"],
    videoUrl: "/video/0224(12).mp4",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Stomach Anti-Inflammatory Mechanism",
    client: "Nano Curcumin Extract",
    description: "3D anatomical visualization illustrating how Nano Curcumin protects the stomach lining and liver. Increased affiliate revenue by 35% through clear scientific storytelling.",
    techStack: ["ChatGPT", "Midjourney", "Luma Dream", "TikTok", "Flow"],
    videoUrl: "/video/0224(3).mp4",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "HP Bacteria Elimination",
    client: "Bio-Stomach Probiotics",
    description: "3D energy-beam animation showcasing probiotic action destroying HP bacteria clusters. Raised 3s retention to 72% and cut ad production time by 90%.",
    techStack: ["Midjourney", "HeyGen", "CapCut", "TikTok"],
    videoUrl: "/video/0224(9).mp4",
    imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Consequences of Skipping Meals",
    client: "Healthy Stomach Brand",
    description: "Utilized emotional 3D stomach character animation to warn against unhealthy extreme dieting. Achieved 35% affiliate revenue growth and 22% ad CTR.",
    techStack: ["Midjourney", "Kling AI", "CapCut", "TikTok", "Flow"],
    videoUrl: "/video/tra-mam-xoi.mp4",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Stomach Wall Protection Shield",
    client: "Honey Turmeric Gel",
    description: "Dynamic 3D action sequence depicting cellular warriors defending the stomach wall against stomach acid. Gained 150K+ Reels views and boosted order conversions by 25%.",
    techStack: ["Midjourney", "Kling AI", "CapCut", "TikTok"],
    videoUrl: "/video/0224(13).mp4",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Cyber Defense Spider Robot",
    client: "CyberGuard Security",
    description: "3D sci-fi commercial depicting a robotic spider eradicating malware inside a server room. Reached a 75% 3s hook rate and boosted overall CTR by 19%.",
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
