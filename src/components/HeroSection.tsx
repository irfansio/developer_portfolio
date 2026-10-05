'use client';

import React from 'react';
import { developerProfile, systemStats } from '@/data/portfolioData';
import { Hero3D } from './Hero3D';
import {
  Code2,
  Activity,
  Server,
  Zap,
  ArrowRight,
  Mail,
  Phone,
  Layers,
  Terminal,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-4 h-4 text-cyan-400" />,
  Activity: <Activity className="w-4 h-4 text-emerald-400" />,
  Server: <Server className="w-4 h-4 text-amber-400" />,
  Zap: <Zap className="w-4 h-4 text-purple-400" />,
};

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-emerald-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="text-[11px] font-mono tracking-wider text-cyan-300 font-semibold uppercase">
                {developerProfile.name} • {developerProfile.title}
              </span>
            </div>

            {/* High-Impact Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.12]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Scalable Full-Stack Systems</span> &amp; Real-Time Web Experiences.
            </h1>

            {/* Summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {developerProfile.summary}
            </p>

            {/* Primary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:opacity-95 shadow-lg shadow-cyan-500/15 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#telemetry-demo"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/40 transition-all"
              >
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>Live Telemetry Demo</span>
              </a>

              <a
                href="#architecture"
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Inspect Architecture</span>
              </a>
            </div>

            {/* Quick Contact & Verified Profile Links */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <a
                href={developerProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>github.com/irfansio</span>
              </a>

              <a
                href={`mailto:${developerProfile.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{developerProfile.email}</span>
              </a>

              <a
                href={`tel:${developerProfile.phone}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{developerProfile.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive 3D Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full relative">
              {/* Decorative Card Framing */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-emerald-500/10 to-amber-500/10 blur-xl opacity-60" />
              <div className="relative rounded-2xl bg-slate-950/40 border border-slate-800/80 backdrop-blur-sm overflow-hidden">
                <Hero3D />
              </div>
            </div>
          </div>
        </div>

        {/* Live Metrics KPI Grid */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {systemStats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-5 rounded-2xl border border-slate-800/80 space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded-xl bg-slate-900 border border-slate-800/80 group-hover:border-cyan-500/30 transition-colors">
                    {iconMap[stat.iconName] || <Zap className="w-4 h-4 text-cyan-400" />}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    System Metric
                  </span>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-300 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
