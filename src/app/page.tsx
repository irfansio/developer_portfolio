import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { SkillsGrid } from '@/components/SkillsGrid';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { TelemetryStreamSimulator } from '@/components/TelemetryStreamSimulator';
import { ArchitectureSection } from '@/components/ArchitectureSection';
import { ContactSection } from '@/components/ContactSection';
import { QuickContactDock } from '@/components/QuickContactDock';
import { Footer } from '@/components/Footer';
import { Activity, Sparkles, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col overflow-x-hidden">
      {/* Background Grid Pattern & Ambient Gradients */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-radial-gradient opacity-80 pointer-events-none z-0" />
      <div className="fixed bottom-0 right-10 w-[500px] h-[500px] bg-radial-emerald opacity-60 pointer-events-none z-0" />

      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 space-y-8 sm:space-y-12">
        {/* 1. Hero Section with 3D Canvas */}
        <HeroSection />

        {/* 2. Technical Core Competencies (Domains) */}
        <SkillsGrid />

        {/* 3. Featured Projects & Case Studies (With Real Screen Previews) */}
        <FeaturedProjects />

        {/* 4. Live Interactive Industrial Telemetry Simulation Widget */}
        <section id="telemetry-demo" className="py-16 lg:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                <Activity className="w-3.5 h-3.5" />
                <span>Interactive Live Engine Demo</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Live Sensor Telemetry &amp; Verification Terminal
              </h2>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Interact with a live prototype of the streaming telemetry architecture engineered for industrial pollution compliance and Safetik cryptographic QR label validation.
              </p>
            </div>

            <TelemetryStreamSimulator />
          </div>
        </section>

        {/* 5. System Design & Architectural Blueprints */}
        <ArchitectureSection />

        {/* 6. Contact & Direct Engineering Line */}
        <ContactSection />
      </main>

      {/* Quick Contact Dock */}
      <QuickContactDock />

      {/* Footer */}
      <Footer />
    </div>
  );
}
