'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Project, ScreenshotItem } from '@/types/portfolio';
import {
  X,
  Shield,
  Layers,
  Database,
  Lock,
  ExternalLink,
  ChevronRight,
  Maximize2,
  CheckCircle2,
  Radio,
  FileCode,
  Image as ImageIcon,
} from 'lucide-react';

interface DashboardModalProps {
  project: Project | null;
  onClose: () => void;
}

export const DashboardModal: React.FC<DashboardModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'screenshots' | 'architecture' | 'schema' | 'highlights'>(
    'screenshots'
  );
  const [selectedScreenshot, setSelectedScreenshot] = useState<ScreenshotItem | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedScreenshot) {
          setSelectedScreenshot(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedScreenshot, onClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
      {/* Dark backdrop blur */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 animate-fade-in">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-slate-950/60 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 text-xs font-mono rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {project.type}
              </span>
              {project.isProtected && (
                <span className="px-2.5 py-0.5 text-xs font-mono rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Enterprise Protected
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
              {project.summary}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-800/80 bg-slate-950/30 overflow-x-auto">
          <button
            onClick={() => setActiveTab('screenshots')}
            className={`flex items-center gap-2 py-3 px-3.5 text-xs sm:text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'screenshots'
                ? 'border-cyan-400 text-cyan-300 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            Screenshots &amp; Screen Previews ({project.screenshots.length})
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center gap-2 py-3 px-3.5 text-xs sm:text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-cyan-400 text-cyan-300 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            System Architecture
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`flex items-center gap-2 py-3 px-3.5 text-xs sm:text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'schema'
                ? 'border-cyan-400 text-cyan-300 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Database className="w-4 h-4" />
            Database &amp; RBAC Security
          </button>
          <button
            onClick={() => setActiveTab('highlights')}
            className={`flex items-center gap-2 py-3 px-3.5 text-xs sm:text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'highlights'
                ? 'border-cyan-400 text-cyan-300 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileCode className="w-4 h-4" />
            Key Engineering Metrics
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: Screenshots & Previews Gallery */}
          {activeTab === 'screenshots' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-cyan-300 flex items-center justify-between">
                <span>
                  Authentic production application screenshots captured directly from deployed environments and staging inspection logs.
                </span>
                <span className="font-mono text-[11px] text-cyan-400 shrink-0">Click image to enlarge</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {project.screenshots.map((shot, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedScreenshot(shot)}
                    className="group cursor-pointer rounded-xl overflow-hidden border border-slate-800 bg-slate-950 hover:border-cyan-500/40 transition-all hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col"
                  >
                    <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                      <Image
                        src={shot.url}
                        alt={shot.title}
                        fill
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                      <div className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                      {shot.tag && (
                        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-slate-900/90 backdrop-blur-md text-[10px] font-mono text-cyan-300 border border-cyan-500/30">
                          {shot.tag}
                        </div>
                      )}
                    </div>
                    <div className="p-3.5 bg-slate-900/90 border-t border-slate-800/80 flex-1 flex flex-col justify-between">
                      <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {shot.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {shot.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: System Architecture */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono text-red-400 uppercase tracking-wider font-semibold">
                    The Engineering Challenge
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.architecture.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                    Architectural Solution
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.architecture.solution}
                  </p>
                </div>
              </div>

              {/* Data Flow Diagram Card */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800/90 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    Pipeline Data Flow &amp; State Synchronization
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">Live Architecture</span>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-900 font-mono text-xs text-slate-200 border border-slate-800/80 leading-relaxed overflow-x-auto">
                  {project.architecture.dataFlowSummary}
                </div>
              </div>

              {/* Key Components List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Core Structural Sub-Systems
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.architecture.keyComponents.map((comp, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Database & RBAC Security */}
          {activeTab === 'schema' && (
            <div className="space-y-6">
              {/* Database Entities */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" />
                    Data Models &amp; Schema Collections
                  </h4>
                  <span className="text-[11px] font-mono text-slate-500">Multi-Model Design</span>
                </div>
                <div className="space-y-2">
                  {project.architecture.databaseModel.map((model, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto"
                    >
                      <span className="text-cyan-400">$ </span>
                      {model}
                    </div>
                  ))}
                </div>
              </div>

              {/* Security & Access Controls */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  Security Controls &amp; Cryptographic Guardrails
                </h4>
                <div className="space-y-2">
                  {project.architecture.securityPatterns.map((sec, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-900/70 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2.5"
                    >
                      <Shield className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Key Highlights & Metrics */}
          {activeTab === 'highlights' && (
            <div className="space-y-6">
              {/* Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.stats.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center"
                  >
                    <div className="text-lg sm:text-xl font-bold font-mono text-cyan-400">
                      {s.value}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Detailed Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Engineering Contributions &amp; Deliverables
                </h4>
                <div className="space-y-2.5">
                  {project.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3 text-xs sm:text-sm text-slate-300"
                    >
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-700 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Architected &amp; Deployed by Mohammed Irfan</span>
          </div>

          <div className="flex items-center gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              Close Inspector
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Screenshot Lightbox Overlay */}
      {selectedScreenshot && (
        <div
          className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedScreenshot(null)}
        >
          <button
            onClick={() => setSelectedScreenshot(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors"
            aria-label="Close enlarged preview"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative w-full max-w-5xl max-h-[80vh] aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedScreenshot.url}
              alt={selectedScreenshot.title}
              fill
              className="object-contain"
            />
          </div>

          <div
            className="mt-4 text-center max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-base font-semibold text-white">
              {selectedScreenshot.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {selectedScreenshot.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
