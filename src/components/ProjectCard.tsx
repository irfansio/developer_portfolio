'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '@/types/portfolio';
import {
  Shield,
  Layers,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Lock,
  ChevronRight,
  Activity,
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const primaryScreenshot = project.screenshots[0];

  return (
    <div className="glass-card rounded-2xl border border-slate-800/90 overflow-hidden flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300">
      <div>
        {/* Project Thumbnail Image with Overlay */}
        <div
          onClick={() => onOpenModal(project)}
          className="relative aspect-video w-full bg-slate-950 overflow-hidden cursor-pointer"
        >
          {primaryScreenshot && (
            <Image
              src={primaryScreenshot.url}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          )}

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Badges on Top */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
            <span
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium backdrop-blur-md border ${
                project.badgeColor === 'amber'
                  ? 'bg-amber-950/80 text-amber-300 border-amber-500/30'
                  : project.badgeColor === 'emerald'
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30'
                  : project.badgeColor === 'purple'
                  ? 'bg-purple-950/80 text-purple-300 border-purple-500/30'
                  : 'bg-cyan-950/80 text-cyan-300 border-cyan-500/30'
              }`}
            >
              {project.badge}
            </span>

            {project.isProtected && (
              <span className="p-1.5 rounded-md bg-slate-900/90 text-amber-400 border border-amber-500/30 backdrop-blur-md">
                <Lock className="w-3.5 h-3.5" />
              </span>
            )}
          </div>

          {/* Click to inspect prompt on hover */}
          <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md text-xs font-mono text-cyan-300 border border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Open Case Study Modal</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
              {project.type}
            </div>
            <h3
              onClick={() => onOpenModal(project)}
              className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer tracking-tight"
            >
              {project.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {project.summary}
          </p>

          {/* Key Engineering Bullets */}
          <div className="space-y-2 pt-1">
            {project.highlights.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="line-clamp-2">{item}</span>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            {project.stats.slice(0, 2).map((s, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-900 text-center"
              >
                <div className="text-xs font-mono font-bold text-cyan-400">{s.value}</div>
                <div className="text-[10px] text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenModal(project)}
          className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
        >
          <span>Inspect Architecture &amp; Screenshots</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
        </button>

        {project.liveDemoUrl && (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono transition-all"
          >
            <span>Live Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};
