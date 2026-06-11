import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand Information */}
        <div className="text-center sm:text-left space-y-1">
          <p className="text-sm font-extrabold tracking-wider text-white">
            {personalInfo.name}
          </p>
          <p className="text-xs text-neutral-500 font-light">
            AI Video Producer & Creative Technologist
          </p>
        </div>

        {/* Center Links/Copyright */}
        <div className="text-center text-xs text-neutral-600 font-mono">
          &copy; {currentYear} {personalInfo.name}. All rights reserved. Custom crafted for High Performance.
        </div>

        {/* Back To Top Action */}
        <button
          onClick={handleScrollToTop}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-neutral-900 bg-neutral-900/40 text-neutral-400 hover:text-white hover:border-neutral-800 transition-all text-xs font-mono"
        >
          <span>Back to Top</span>
          <ArrowUp size={12} />
        </button>

      </div>
    </footer>
  );
}
