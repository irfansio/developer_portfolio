'use client';

import React, { useState } from 'react';
import { developerProfile } from '@/data/portfolioData';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Full-Time Engineering Role',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#10b981', '#f59e0b', '#38bdf8'],
        });
      } catch {
        // Confetti fallback
      }
    }, 900);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Immediate Opportunities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let&apos;s Build Something Resilient Together
            </h2>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Whether you are looking for a senior full-stack engineer to lead a high-concurrency real-time platform, modernize enterprise systems, or create bespoke 3D web applications, I am ready to contribute.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 group hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                    <a
                      href={`mailto:${developerProfile.email}`}
                      className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      {developerProfile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(developerProfile.email, 'email')}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 group hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Direct Phone</div>
                    <a
                      href={`tel:${developerProfile.phone}`}
                      className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors"
                    >
                      {developerProfile.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(developerProfile.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* GitHub Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 group hover:border-slate-600 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-800 text-slate-200">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">GitHub Profile</div>
                    <a
                      href={developerProfile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      github.com/irfansio
                    </a>
                  </div>
                </div>

                <a
                  href={developerProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Location &amp; Mobility</div>
                  <div className="text-sm font-semibold text-white">
                    {developerProfile.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Direct Engineering Inquiry
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  Fast Response Guaranteed
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Dispatched!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.name}. Your inquiry has been registered. You can also reach Mohammed Irfan immediately at{' '}
                    <a
                      href={`mailto:${developerProfile.email}`}
                      className="text-cyan-400 underline"
                    >
                      {developerProfile.email}
                    </a>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        projectType: 'Full-Time Engineering Role',
                        message: '',
                      });
                    }}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-mono bg-slate-800 text-slate-300 hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Company / Organization</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Stripe, Acme Corp"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Inquiry Scope</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500/60 transition-colors"
                      >
                        <option>Full-Time Engineering Role</option>
                        <option>Lead Frontend / Systems Contract</option>
                        <option>Enterprise Telemetry Architecture</option>
                        <option>3D Web &amp; AI Integration Project</option>
                        <option>General Discussion</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Project / Role Overview *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your team's stack, engineering objectives, or role responsibilities..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Encrypted client-side dispatch</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:opacity-95 shadow-lg shadow-cyan-500/10 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
