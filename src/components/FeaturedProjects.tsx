'use client';

import React, { useState } from 'react';
import { featuredProjects } from '@/data/portfolioData';
import { Project } from '@/types/portfolio';
import { ProjectCard } from './ProjectCard';
import { DashboardModal } from './DashboardModal';
import { Layers, Shield, Sparkles, Terminal } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              <Layers className="w-3.5 h-3.5" />
              <span>Production Systems &amp; Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Real-world systems engineered for regulatory compliance, enterprise asset management, real-time industrial telemetry, and modern 3D web applications.
            </p>
          </div>

          {/* Compliance Notice Banner */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/20 flex items-start gap-2.5 max-w-md">
            <Shield className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-[11px] text-slate-400 leading-relaxed">
              <strong className="text-amber-300 font-semibold">Enterprise &amp; Compliance Notice:</strong> Protected portals feature verified UI captures and architectural schematics. Click any project to open the interactive case study inspector.
            </p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Interactive Lightbox / Modal */}
      <DashboardModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
