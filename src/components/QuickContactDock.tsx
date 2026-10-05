'use client';

import React, { useState, useEffect } from 'react';
import { developerProfile } from '@/data/portfolioData';
import { Mail, Phone, ArrowUp, X, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';

export const QuickContactDock: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling past the hero section (approx 350px)
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
        <button
          onClick={() => setIsMinimized(false)}
          className="p-3 rounded-full bg-slate-900/90 text-cyan-400 border border-cyan-500/30 shadow-2xl backdrop-blur-md hover:scale-105 transition-all"
          title="Open Quick Contact Dock"
        >
          <Sparkles className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <aside
      aria-label="Quick Connect Dock"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-[94vw] animate-fade-in"
    >
      <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-2xl bg-slate-950/90 border border-slate-700/80 shadow-2xl shadow-black/60 backdrop-blur-xl">
        {/* Status dot */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Mohammed Irfan</span>
        </div>

        {/* Email button */}
        <a
          href={`mailto:${developerProfile.email}`}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-medium text-slate-200 border border-slate-800 hover:border-cyan-500/40 transition-all"
          title={developerProfile.email}
        >
          <Mail className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden md:inline">Email</span>
        </a>

        {/* Phone button */}
        <a
          href={`tel:${developerProfile.phone}`}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-medium text-slate-200 border border-slate-800 hover:border-emerald-500/40 transition-all"
          title={developerProfile.phone}
        >
          <Phone className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden md:inline">Call</span>
        </a>

        {/* GitHub link */}
        <a
          href={developerProfile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all"
          title="GitHub Profile"
        >
          <GithubIcon className="w-3.5 h-3.5" />
        </a>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-all"
          title="Back to Top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

        {/* Minimize Button */}
        <button
          onClick={() => setIsMinimized(true)}
          className="p-1.5 rounded-lg text-slate-500 hover:text-slate-300 transition-colors ml-0.5"
          title="Minimize Dock"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
