'use client';

import React from 'react';
import { developerProfile } from '@/data/portfolioData';
import { Terminal, Mail, Phone, Heart, Code2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 pt-16 pb-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/60">
          {/* Identity & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm">
                MI
              </div>
              <div>
                <span className="font-bold text-white text-base tracking-tight">
                  {developerProfile.name}
                </span>
                <div className="text-[11px] font-mono text-slate-400">
                  {developerProfile.title}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Engineering secure REST APIs, real-time telemetry dashboards, interactive 3D web experiences, and scalable cloud architectures.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Status: {developerProfile.status}</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Platform Sections
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">
                  Overview &amp; Core Bio
                </a>
              </li>
              <li>
                <a href="#competencies" className="hover:text-cyan-400 transition-colors">
                  Domain Competencies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  Featured Case Studies
                </a>
              </li>
              <li>
                <a href="#telemetry-demo" className="hover:text-cyan-400 transition-colors">
                  Live Telemetry Simulator
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-cyan-400 transition-colors">
                  System Architecture
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Communications */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Direct Engineering Line
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a
                  href={`mailto:${developerProfile.email}`}
                  className="hover:text-white transition-colors"
                >
                  {developerProfile.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a
                  href={`tel:${developerProfile.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {developerProfile.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                <a
                  href={developerProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>github.com/irfansio</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-2 text-[11px] font-mono text-slate-500">
              Stack: Next.js 16 (App Router) • Three.js • TypeScript • Tailwind CSS • Framer Motion
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Mohammed Irfan. Built for production scale and resilience.
          </div>
          <div className="flex items-center gap-3">
            <span>Latency Target: &lt;120ms</span>
            <span>•</span>
            <span className="text-emerald-400">Uptime: 99.98%</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
