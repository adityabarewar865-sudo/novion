"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO, CORE_FOCUS_AREAS } from "@/data/novionData";
import { CpuIcon, FlameIcon, BatteryIcon, ShieldCheckIcon, CheckCircleIcon, ArrowRightIcon, MailIcon, LinkedInIcon, NovionLogo } from "@/components/Icons";
import { JATIN_PHOTO_BASE64 } from "@/data/jatinPhotoData";

export default function CompanySection() {
  const [activeFocusIdx, setActiveFocusIdx] = useState(0);
  const [photoError, setPhotoError] = useState(false);

  const getFocusIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <CpuIcon className="w-6 h-6 text-cyan-400" />;
      case "Flame":
        return <FlameIcon className="w-6 h-6 text-sky-400" />;
      case "BatteryCharging":
      default:
        return <BatteryIcon className="w-6 h-6 text-cyan-300" />;
    }
  };

  return (
    <section id="company" className="py-16 relative overflow-hidden bg-tech-grid">
      {/* Decorative gradient blur spot */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold font-orbitron tracking-widest text-cyan-400 uppercase badge-glass-cyan px-3.5 py-1.5 rounded-full inline-block">
            About Novion
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-orbitron metallic-heading mt-4 tracking-tight">
            Pioneering Intelligence at the Cell Level
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-light">
            Operating at the critical convergence of electrochemical hardware engineering and modern Artificial Intelligence.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DEDICATED OWNER / FOUNDER PROFILE SECTION */}
        {/* ========================================================================= */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-white/10 shadow-[0_12px_40px_0_rgba(0,0,0,0.6)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Owner Photo Container */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.7)] bg-black/60 group">
                {!photoError ? (
                  <Image
                    src={JATIN_PHOTO_BASE64}
                    alt={COMPANY_INFO.owner}
                    fill
                    priority
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-black p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-cyan-950/80 border-2 border-cyan-400/50 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(0,210,255,0.3)]">
                      <span className="text-3xl font-black font-orbitron metallic-text">JB</span>
                    </div>
                    <span className="text-base font-bold font-orbitron text-white">{COMPANY_INFO.owner}</span>
                    <span className="text-xs font-mono text-cyan-400 mt-1">{COMPANY_INFO.role}</span>
                  </div>
                )}
                {/* Gradient overlays for cinematic effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 pointer-events-none" />
                
                {/* Badges on Photo */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 border border-cyan-400/40 text-[11px] font-mono font-bold text-cyan-300 backdrop-blur-md mb-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00d2ff]" />
                    EXECUTIVE LEADERSHIP
                  </div>
                  <div className="text-xl font-bold font-orbitron text-white drop-shadow-md">
                    {COMPANY_INFO.owner}
                  </div>
                  <div className="text-xs font-mono text-cyan-400 font-semibold">
                    {COMPANY_INFO.title}
                  </div>
                </div>
              </div>
            </div>

            {/* Owner Credentials & Bio Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold font-orbitron uppercase tracking-widest text-cyan-400">
                  <ShieldCheckIcon className="w-4 h-4 text-cyan-400" />
                  Owner &amp; Visionary Profile
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold font-orbitron metallic-heading tracking-tight">
                  {COMPANY_INFO.owner}
                </h3>
                <div className="text-sm sm:text-base font-semibold font-mono text-cyan-300 flex items-center gap-2">
                  <span>{COMPANY_INFO.title}</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-slate-400">Novion Energy Technology</span>
                </div>
              </div>

              {/* Biography / Description */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                <p className="border-l-2 border-cyan-400 pl-4 py-1 italic bg-white/[0.02] rounded-r-xl">
                  &ldquo;{COMPANY_INFO.bio}&rdquo;
                </p>
                <p className="text-slate-400 text-sm">
                  Under Jatin&apos;s technical stewardship, Novion has pioneered physics-informed neural network architectures designed to evaluate electrochemical impedance spectroscopy in real-time, anticipating micro-hotspot migrations and preventing thermal runaway up to 96 hours ahead of standard safety cut-offs.
                </p>
              </div>

              {/* Leadership Focus Areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/10 flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">Neural Edge BMS Architecture</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/10 flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">Thermal Runaway Early Warning</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/10 flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">Commercial EV Fleet Strategy</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/10 flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">Grid Storage (BESS) Integration</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href={COMPANY_INFO.personalLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold font-orbitron btn-luxury-gradient active:scale-95 group cursor-pointer"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.contactEmail}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-slate-200 hover:text-white glass-panel hover:border-cyan-400/40 transition-colors font-mono"
                >
                  <MailIcon className="w-4 h-4 text-cyan-400" />
                  <span>{COMPANY_INFO.contactEmail}</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 font-orbitron transition-colors"
                >
                  <span>Book Executive Consultation</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative & Corporate Metadata Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Company Narrative */}
          <div className="lg:col-span-8 glass-panel rounded-3xl p-6 sm:p-10 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold font-orbitron metallic-heading flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00d2ff]" />
              The Novion Paradigm
            </h3>

            {COMPANY_INFO.detailedOverview.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300 text-base leading-relaxed font-light">
                {paragraph}
              </p>
            ))}

            {/* Mission Statement Callout Box */}
            <div className="mt-8 p-6 glass-panel border border-cyan-400/30 rounded-2xl relative overflow-hidden shadow-lg">
              <div className="text-xs uppercase font-bold font-orbitron tracking-widest text-cyan-400 mb-2 flex items-center gap-2">
                <ShieldCheckIcon className="w-4 h-4 text-cyan-400" />
                Our Mission
              </div>
              <blockquote className="text-lg sm:text-xl font-semibold font-orbitron metallic-text italic">
                &ldquo;{COMPANY_INFO.mission}&rdquo;
              </blockquote>
              <div className="mt-4 text-sm font-bold font-mono text-cyan-300 uppercase tracking-widest flex items-center gap-2">
                <span>{COMPANY_INFO.slogan}</span>
              </div>
            </div>
          </div>

          {/* Corporate Metadata & Logo Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel rounded-3xl p-6 flex items-center gap-4">
              <NovionLogo className="w-16 h-16" />
              <div>
                <div className="text-base font-bold font-orbitron metallic-text">NOVION ENERGY</div>
                <div className="text-xs text-cyan-400 font-semibold font-mono">{COMPANY_INFO.slogan}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Proprietary AI-BMS Engine</div>
              </div>
            </div>

            {/* Operating Principles */}
            <div className="glass-panel rounded-3xl p-6">
              <h5 className="text-sm font-semibold font-orbitron metallic-text mb-3">Core Operating Principles</h5>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Sub-millivolt precision hardware telemetry</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Physics-informed AI predictive models</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Proactive failure preemption before thermal stress</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Focus Areas Section */}
        <div id="focus-areas" className="pt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold font-orbitron tracking-widest text-cyan-400 uppercase badge-glass-cyan px-3 py-1 rounded-full inline-block">
                Strategic Competence
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-orbitron metallic-heading mt-2">
                Core Focus Areas
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 md:mt-0 max-w-md font-light">
              Targeted research and hardware-software synergy designed to solve the three largest bottlenecks in modern energy storage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_FOCUS_AREAS.map((focus, idx) => (
              <div
                key={idx}
                onClick={() => setActiveFocusIdx(idx)}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  activeFocusIdx === idx
                    ? "glass-panel border-cyan-400/50 shadow-[0_16px_40px_-10px_rgba(0,210,255,0.25)] -translate-y-1"
                    : "glass-panel-card"
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5 shadow-inner">
                    {getFocusIcon(focus.icon)}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold font-orbitron text-white mb-1.5">
                    {focus.title}
                  </h4>
                  <div className="text-xs font-semibold font-mono text-cyan-400 mb-3">
                    {focus.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                    {focus.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 space-y-2">
                  <div className="text-[11px] uppercase tracking-wider font-semibold font-orbitron text-slate-400">
                    Key Deliverables:
                  </div>
                  {focus.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
