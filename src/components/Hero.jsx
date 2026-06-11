import React, { useRef, useState, useEffect } from 'react';
import { Play, ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Attempt to play video when loaded
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play was prevented. Waiting for user interaction.", error);
      });
    }
  }, [videoLoaded]);

  const handleVideoCanPlay = () => {
    setVideoLoaded(true);
  };

  // Split headline for beautiful segmented animation
  const headlineWords = personalInfo.headline.split(". ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-[90svh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video with Lazy Loading Optimization */}
      <div className="absolute inset-0 z-0 bg-neutral-950">
        {/* Placeholder image that shows before video loads, or as fallback */}
        <img
          src={personalInfo.heroVideoPlaceholder}
          alt="Hero Background Fallback"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-10' : 'opacity-30'
          }`}
          loading="eager"
        />

        {/* Cinematic Video Tag */}
        <video
          ref={videoRef}
          onCanPlayThrough={handleVideoCanPlay}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-25' : 'opacity-0'
          }`}
          loop
          muted
          playsInline
          autoPlay
          preload="auto"
        >
          <source src={personalInfo.heroVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Ambient Dark Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950"></div>
        
        {/* Cinematic Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Status Chip */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-300 backdrop-blur-md"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse"></span>
          <span className="font-mono text-xs uppercase tracking-widest">{personalInfo.title}</span>
        </motion.div>

        {/* Animations Wrapper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Animated Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 max-w-4xl"
          >
            {headlineWords.map((phrase, i) => {
              if (!phrase) return null;
              // Clean phrasing and display
              const isHighlight = i === 1; // "Xây dựng quy trình" gets cyan gradient
              const isAccent = i === 2; // "Tối ưu chuyển đổi" gets purple/pink gradient
              
              let textClass = "block";
              if (isHighlight) {
                textClass = "block text-gradient-cyan drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]";
              } else if (isAccent) {
                textClass = "block text-gradient-purple drop-shadow-[0_0_15px_rgba(168,85,247,0.15)]";
              }

              return (
                <span key={i} className={textClass}>
                  {phrase.trim()}{i < headlineWords.length - 1 ? '.' : ''}
                </span>
              );
            })}
          </motion.h1>

          {/* Animated Sub-headline */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed mb-10 px-2"
          >
            {personalInfo.subHeadline}
          </motion.p>

          {/* Interactive CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4"
          >
            <a
              href="#workflow"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm transition-all duration-300 hover:bg-neutral-200 hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(255,255,255,0.1)] group"
            >
              Khám Phá Workflow
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="#case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-neutral-800 bg-neutral-950/40 text-neutral-300 font-semibold text-sm transition-all duration-300 hover:border-neutral-700 hover:text-white hover:bg-neutral-900/60 backdrop-blur-sm"
            >
              Xem Dự Án Thực Tế
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 cursor-pointer text-neutral-500 hover:text-neutral-300 transition-colors"
          onClick={() => {
            const el = document.getElementById('workflow');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
