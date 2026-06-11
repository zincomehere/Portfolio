import React from 'react';
import { 
  Compass, 
  GitBranch, 
  Sparkles, 
  Zap, 
  BrainCircuit, 
  Database, 
  Gauge, 
  Film, 
  Video, 
  Scissors 
} from 'lucide-react';
import { marqueeTools } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Compass: Compass,
  GitBranch: GitBranch,
  Sparkles: Sparkles,
  Zap: Zap,
  BrainCircuit: BrainCircuit,
  Database: Database,
  Gauge: Gauge,
  Film: Film,
  Video: Video,
  Scissors: Scissors
};

export default function Marquee() {
  // Triple the tools array to ensure seamless infinite looping scroll
  const toolsRepeated = [...marqueeTools, ...marqueeTools, ...marqueeTools];

  return (
    <section className="relative py-20 bg-neutral-950/60 overflow-hidden border-t border-b border-white/5">
      {/* Absolute Overlay Gradients to Fade Edges */}
      <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <span className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-2 block">Công nghệ tích hợp</span>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
          Hệ Sinh Thái & Công Cụ Tối Ưu
        </h3>
      </div>

      {/* Marquee Container Wrapper */}
      <div className="space-y-6 flex flex-col justify-center">
        
        {/* Row 1: Moving Left */}
        <div className="flex overflow-x-hidden no-scrollbar w-full py-1">
          <div className="flex gap-4 animate-marquee whitespace-nowrap min-w-full">
            {toolsRepeated.map((tool, idx) => {
              const ToolIcon = iconMap[tool.icon] || Compass;
              
              return (
                <div
                  key={`r1-${tool.name}-${idx}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl glass-card text-sm font-semibold text-white tracking-wide border border-white/5 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300"
                  style={{ '--hover-color': tool.color }}
                >
                  <ToolIcon size={16} className="transition-transform duration-300 group-hover:scale-110" style={{ color: tool.color }} />
                  <span>{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Moving Right */}
        <div className="flex overflow-x-hidden no-scrollbar w-full py-1">
          <div className="flex gap-4 animate-marquee-reverse whitespace-nowrap min-w-full">
            {toolsRepeated.map((tool, idx) => {
              const ToolIcon = iconMap[tool.icon] || Compass;
              
              return (
                <div
                  key={`r2-${tool.name}-${idx}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl glass-card text-sm font-semibold text-white tracking-wide border border-white/5 hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300"
                >
                  <ToolIcon size={16} className="transition-transform duration-300 group-hover:scale-110" style={{ color: tool.color }} />
                  <span>{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
