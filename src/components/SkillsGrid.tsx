'use client';

import React, { useState } from 'react';
import { competencyDomains } from '@/data/portfolioData';
import {
  Layout,
  Cpu,
  Cloud,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Terminal,
  ExternalLink,
} from 'lucide-react';

const domainIcons: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5 text-cyan-400" />,
  Cpu: <Cpu className="w-5 h-5 text-emerald-400" />,
  Cloud: <Cloud className="w-5 h-5 text-amber-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-purple-400" />,
};

export const SkillsGrid: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('all');

  const filteredDomains =
    selectedDomain === 'all'
      ? competencyDomains
      : competencyDomains.filter((d) => d.id === selectedDomain);

  return (
    <section id="competencies" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Mastery &amp; Architectural Domains</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production-Grade Engineering Competencies
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Organized across four foundational pillars of modern software engineering. Each skill has been battle-tested in live enterprise platforms, telemetry engines, and high-traffic web environments.
          </p>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-800/80">
          <button
            onClick={() => setSelectedDomain('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              selectedDomain === 'all'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/15'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Architectural Domains ({competencyDomains.length})
          </button>

          {competencyDomains.map((domain) => (
            <button
              key={domain.id}
              onClick={() => setSelectedDomain(domain.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                selectedDomain === domain.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/15'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <span>{domain.title}</span>
            </button>
          ))}
        </div>

        {/* Domain Blocks Grid */}
        <div className="space-y-12">
          {filteredDomains.map((domain) => (
            <div key={domain.id} className="space-y-6">
              {/* Domain Header Card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-2xl bg-slate-900/90 border border-slate-800/80">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    {domainIcons[domain.iconName] || <Layout className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {domain.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {domain.description}
                    </p>
                  </div>
                </div>
                <div className="self-start sm:self-auto px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-[11px] font-mono text-cyan-300">
                  {domain.badge}
                </div>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {domain.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Card Top: Skill Name & Category */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[11px] font-mono text-slate-500">
                            {skill.category}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {skill.level}
                        </span>
                      </div>

                      {/* Highlight */}
                      <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-900 font-mono text-xs text-slate-300 mb-3">
                        {skill.highlight}
                      </div>

                      {/* Production Usage Case */}
                      <div className="text-xs text-slate-400 leading-relaxed space-y-1">
                        <span className="font-semibold text-slate-300 block text-[11px] font-mono text-emerald-400">
                          Production Implementation:
                        </span>
                        <p>{skill.productionUsage}</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-900/90 flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span className="flex items-center gap-1 text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Verified Experience
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
