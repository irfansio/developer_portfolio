'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { developerProfile } from '@/data/portfolioData';
import { Terminal, Mail, Phone, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Core Domains', href: '#competencies' },
    { name: 'Featured Projects', href: '#projects' },
    { name: 'Live Telemetry', href: '#telemetry-demo' },
    { name: 'System Architecture', href: '#architecture' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Identity */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/60 group-hover:scale-105 transition-all">
              <span className="font-mono text-sm font-bold tracking-tight">MI</span>
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-1.5">
                <span>{developerProfile.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                Full-Stack Systems Architect
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & Status Badge */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Pulsing Status indicator */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Hire</span>
            </div>

            <a
              href={`mailto:${developerProfile.email}`}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all hover:border-cyan-500/40"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Email Irfan</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:opacity-95 shadow-md shadow-cyan-500/10 transition-all"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 shadow-2xl animate-fade-in space-y-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Full-Stack Roles</span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
            <a
              href={`mailto:${developerProfile.email}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium bg-slate-900 border border-slate-800 text-white"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{developerProfile.email}</span>
            </a>
            <a
              href={`tel:${developerProfile.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium bg-slate-900 border border-slate-800 text-white"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{developerProfile.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
