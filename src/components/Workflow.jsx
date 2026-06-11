import React, { useState } from 'react';
import { 
  Code, 
  Image as ImageIcon, 
  Video as VideoIcon, 
  Rocket, 
  Terminal, 
  Copy, 
  Check, 
  Sparkles,
  TrendingUp,
  Percent,
  X,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { workflowSteps } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Code: Code,
  Image: ImageIcon,
  Video: VideoIcon,
  Rocket: Rocket
};

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(1);
  const [copied, setCopied] = useState(false);
  const [activePanelIndex, setActivePanelIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentStepData = workflowSteps.find(s => s.id === activeStep) || workflowSteps[0];

  // Helper to render interactive contents
  const renderStepContent = (step) => {
    switch (step.content.type) {
      case "terminal": // Scripting/Prompting steps (Step 1 and Step 3)
        return (
          <div className="flex flex-col h-full justify-between space-y-4">
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-900 border-b border-white/5 font-mono text-xs text-neutral-400 rounded-t-xl">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-purple-400" />
                <span>{step.content.language === 'midjourney' ? 'midjourney_prompter.sh' : 'motion_prompter.sh'}</span>
              </div>
              <button 
                onClick={() => handleCopy(step.content.code)}
                className="flex items-center gap-1 hover:text-white transition-colors duration-200"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            
            <div className="p-4 bg-neutral-950/80 font-mono text-[11px] sm:text-xs text-purple-300 leading-relaxed rounded-b-xl flex-grow overflow-y-auto max-h-[220px] lg:max-h-[300px] whitespace-pre-wrap text-left no-scrollbar">
              <span className="text-neutral-500 select-none">$ </span>
              {step.content.code}
            </div>
            
            <div className="p-4 rounded-xl bg-purple-950/10 border border-purple-500/10 text-xs text-purple-300/80 leading-relaxed text-left shrink-0">
              <strong className="text-purple-400 font-semibold block mb-1">💡 Kỹ thuật tối ưu:</strong>
              {step.content.explanation}
            </div>
          </div>
        );
      
      case "single_image": // Storyboard output (Step 2)
        return (
          <div className="flex flex-col justify-between h-full space-y-4">
            <div 
              onClick={() => setIsLightboxOpen(true)}
              className="relative group rounded-xl overflow-hidden aspect-video w-full bg-neutral-900 border border-white/5 flex flex-col justify-end cursor-zoom-in"
            >
              <img 
                src={step.content.url} 
                alt={step.content.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>
              
              {/* Content overlay */}
              <div className="relative z-10 p-4">
                <span className="inline-block px-2.5 py-1 rounded bg-purple-600 text-white font-mono text-[10px] uppercase tracking-wider mb-1.5 border border-purple-500/30 shadow-md">
                  3x3 Storyboard Sheet
                </span>
                <p className="text-xs text-neutral-300 font-light flex items-center gap-1.5">
                  Midjourney v6 Unified Output • Click to zoom
                </p>
              </div>
            </div>
            
            <div className="p-4 rounded-xl bg-neutral-900 border border-white/5 text-xs text-neutral-400 leading-relaxed text-left">
              <strong className="text-white font-semibold block mb-1">📊 Kết quả phân cảnh:</strong>
              {step.content.caption}
            </div>
          </div>
        );
      
      case "video": // Motion video (Step 4)
        return (
          <div 
            onClick={() => setActiveVideoUrl(step.content.videoUrl)}
            className={`relative rounded-xl overflow-hidden ${step.content.aspectRatio || 'aspect-[9/16]'} bg-neutral-900 border border-white/5 flex flex-col justify-end cursor-zoom-in group/vid`}
          >
            <video 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/vid:scale-102"
              src={step.content.videoUrl}
              autoPlay 
              loop 
              muted 
              playsInline
              preload="metadata"
            />
            
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent"></div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/vid:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-90 group-hover/vid:scale-100 transition-all duration-300 shadow-lg">
                <Play size={20} className="fill-white translate-x-0.5" />
              </div>
            </div>

            <div className="relative z-10 p-4 text-left">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-400 font-mono text-[9px] uppercase tracking-wider border border-pink-500/20">Kling AI Motion</span>
                <span className="text-[10px] text-neutral-400">60 FPS • Click to expand</span>
              </div>
              <p className="text-xs text-neutral-300">{step.content.caption}</p>
            </div>
          </div>
        );

      case "metrics": // CapCut & metrics (Step 5)
        return (
          <div className="flex flex-col justify-between h-full space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {/* Stat 1 */}
              <div className="p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/5 hover:border-emerald-500/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-emerald-400/70 font-medium">Hook Rate (3s)</span>
                  <TrendingUp size={14} className="text-emerald-400" />
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-3xl font-extrabold text-emerald-400 tracking-tight">{step.content.hookRate}</span>
                  <span className="text-xs text-emerald-400/80 font-mono">%</span>
                </div>
                <p className="text-[10px] text-neutral-500 mt-1">Giữ chân người xem</p>
              </div>

              {/* Stat 2 */}
              <div className="p-4 rounded-xl border border-cyan-500/10 bg-cyan-500/5 hover:border-cyan-500/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-cyan-400/70 font-medium">Avg. Retention</span>
                  <Percent size={14} className="text-cyan-400" />
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-3xl font-extrabold text-cyan-400 tracking-tight">{step.content.retentionRate}</span>
                  <span className="text-xs text-cyan-400/80 font-mono">%</span>
                </div>
                <p className="text-[10px] text-neutral-500 mt-1">Tỷ lệ xem hết video</p>
              </div>

              {/* Stat 3 */}
              <div className="p-4 rounded-xl border border-yellow-500/10 bg-yellow-500/5 hover:border-yellow-500/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-yellow-400/70 font-medium">CTR Tăng Trưởng</span>
                  <Sparkles size={14} className="text-yellow-400" />
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-3xl font-extrabold text-yellow-400 tracking-tight">+{step.content.ctrIncrease}</span>
                  <span className="text-xs text-yellow-400/80 font-mono">%</span>
                </div>
                <p className="text-[10px] text-neutral-500 mt-1">Tối ưu chuyển đổi</p>
              </div>

              {/* Stat 4 */}
              <div className="p-4 rounded-xl border border-purple-500/10 bg-purple-500/5 hover:border-purple-500/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-purple-400/70 font-medium">Chi Phí Sản Xuất</span>
                  <TrendingUp size={14} className="text-purple-400 rotate-180" />
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-3xl font-extrabold text-purple-400 tracking-tight">-{step.content.productionCostReduction}</span>
                  <span className="text-xs text-purple-400/80 font-mono">%</span>
                </div>
                <p className="text-[10px] text-neutral-500 mt-1">Tiết kiệm nhân lực</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900 border border-white/5 text-xs text-neutral-400 leading-relaxed text-left">
              <strong className="text-white font-semibold block mb-1">📊 Kết quả đo lường:</strong>
              {step.content.explanation}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="workflow" className="relative py-24 bg-neutral-950 overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-3 block">
            Quy trình sản xuất
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            The AI Video Workflow
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full"></div>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base mt-4 font-light">
            Quy trình khép kín tối ưu hiệu suất, từ nghiên cứu câu lệnh đến chỉ số chuyển đổi bán hàng thực tế.
          </p>
        </div>

        {/* Layout: Sidebar Stepper + Interactive Preview Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Stepper Timeline (Left Column: Occupies 5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative pl-6 sm:pl-8 border-l border-neutral-800 space-y-6">
              {workflowSteps.map((step) => {
                const StepIcon = iconMap[step.iconName] || Code;
                const isActive = step.id === activeStep;

                return (
                  <div 
                    key={step.id} 
                    className="relative group cursor-pointer"
                    onClick={() => setActiveStep(step.id)}
                  >
                    {/* Node Dot with Indicator */}
                    <div className={`absolute -left-[35px] sm:-left-[43px] top-1.5 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border transition-all duration-300 ${
                      isActive 
                        ? 'bg-purple-600 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]' 
                        : 'bg-neutral-900 border-neutral-800 text-neutral-500 group-hover:border-neutral-700 group-hover:text-neutral-300'
                    }`}>
                      <StepIcon size={isActive ? 18 : 16} />
                    </div>

                    {/* Step Brief Description */}
                    <div className={`p-5 rounded-2xl transition-all duration-300 border ${
                      isActive 
                        ? 'bg-neutral-900/60 border-purple-500/20 shadow-xl shadow-purple-500/5' 
                        : 'bg-transparent border-transparent hover:bg-neutral-900/30'
                    }`}>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-purple-400 mb-1 block">
                        Bước {step.id}: {step.subtitle}
                      </span>
                      <h3 className={`text-lg sm:text-xl font-bold transition-colors ${
                        isActive ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 mt-2 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Accordion Detail (Mobile ONLY) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="lg:hidden mt-4 overflow-hidden"
                        >
                          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-900">
                            {renderStepContent(step)}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stepper Content Panel (Right Column: Occupies 7 cols on lg - Hidden on mobile screen size since Accordion expands inline) */}
          <div className="hidden lg:block lg:col-span-7 h-[580px]">
            <div className="w-full h-full glass-card p-6 rounded-2xl shadow-2xl flex flex-col justify-between border border-white/5 relative group">
              {/* Outer decorative ambient glows */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-1000 -z-10"></div>
              
              <div className="flex items-center gap-2 mb-4 text-xs font-mono text-neutral-500 border-b border-white/5 pb-3">
                <span className="flex h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                <span>Active Preview: Step {currentStepData.id} - {currentStepData.title}</span>
              </div>

              {/* Dynamic Content Frame with AnimatePresence for transitions */}
              <div className="flex-grow overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="w-full h-full"
                  >
                    {renderStepContent(currentStepData)}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Storyboard Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2.5 bg-white/5 rounded-full z-10 hover:scale-105 active:scale-95"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src="/image/Create_a_professional_3x3_visual_202606031345.jpeg"
              alt="Turmeric Commercial Storyboard 3x3 Grid"
              className="max-w-full max-h-[90vh] object-contain rounded-lg border border-white/10 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Video Modal (With controls and audio) */}
      <AnimatePresence>
        {activeVideoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setActiveVideoUrl(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2.5 bg-white/5 rounded-full z-10 hover:scale-105 active:scale-95"
              onClick={() => setActiveVideoUrl(null)}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video bg-neutral-950 rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
            >
              <video
                src={activeVideoUrl}
                className="w-full h-full object-contain"
                autoPlay
                controls
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
