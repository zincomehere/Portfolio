import React, { useState, useRef } from 'react';
import { Play, Cpu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies } from '../data/portfolioData';

export default function CaseStudies() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRefs = useRef({});

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
    const video = videoRefs.current[id];
    if (video) {
      video.play().catch(err => console.log("Video play prevented on hover", err));
    }
  };

  const handleMouseLeave = (id) => {
    setHoveredCard(null);
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0; // Reset to show the first frame of the video as placeholder
    }
  };

  return (
    <section id="case-studies" className="relative py-24 bg-neutral-950/80">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-900/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-cyan-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3 block">
            Dự án & Kết quả
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Performance Case Studies
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base mt-4 font-light">
            Các chiến dịch quảng cáo và thương hiệu ứng dụng công nghệ AI đạt mức chuyển đổi thực tế ấn tượng. Click để xem toàn bộ video có âm thanh.
          </p>
        </div>

        {/* Projects Grid: 1 column on mobile, 2 columns on tablet, 3 columns on desktop (9:16 layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((project, index) => {
            const isHovered = hoveredCard === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={() => handleMouseLeave(project.id)}
                onClick={() => setSelectedVideo(project)}
                className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden glass-card group cursor-pointer border border-white/5 shadow-2xl flex flex-col justify-end"
              >
                {/* Visual Glow Border Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/15 group-hover:to-cyan-500/15 rounded-3xl transition-all duration-500 pointer-events-none z-20"></div>

                {/* Video Component (Always visible, preloads metadata to show the first frame as background image) */}
                <div className="absolute inset-0 w-full h-full bg-neutral-900">
                  <video
                    ref={(el) => (videoRefs.current[project.id] = el)}
                    src={project.videoUrl}
                    className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                    loop
                    muted
                    playsInline
                    preload="metadata" // Automatically shows first frame of video as thumbnail
                  />
                  
                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/10 transition-colors duration-300"></div>
                </div>

                {/* Play Button Overlay (Appear on Hover) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                    <Play size={24} className="fill-white translate-x-0.5" />
                  </div>
                </div>

                {/* Client Tag (Always visible, top left) */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[9px] font-mono tracking-wider uppercase text-neutral-300">
                  {project.client}
                </div>

                {/* Content Overlay (At the bottom of the 9:16 layout) */}
                <div className="relative z-10 p-5 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-transparent pt-20 flex flex-col gap-3.5">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-neutral-400 font-light mt-1 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-medium text-neutral-400"
                      >
                        <Cpu size={8} className="text-purple-400" />
                        {tech}
                      </span>
                    ))}
                  </div>


                </div>

              </motion.div>
            );
          })}
        </div>
        
      </div>

      {/* Lightbox Video Modal (With full controls and audio) */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2.5 bg-white/5 rounded-full z-10 hover:scale-105 active:scale-95"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={24} />
            </button>

            {/* Video Player Modal Container */}
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on clicking inside the modal
              className="relative w-full max-w-sm aspect-[9/16] bg-neutral-950 rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-end"
            >
              <video
                src={selectedVideo.videoUrl}
                className="absolute inset-0 w-full h-full object-contain"
                autoPlay
                controls
                playsInline
              />
              
              {/* Bottom text display inside modal */}
              <div className="relative z-10 p-5 bg-gradient-to-t from-black via-black/45 to-transparent pointer-events-none">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/10 px-2 py-0.5 rounded">
                  {selectedVideo.client}
                </span>
                <h4 className="text-lg font-bold text-white mt-1.5">{selectedVideo.title}</h4>
                <p className="text-xs text-neutral-400 mt-1 font-light">{selectedVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
