"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRightIcon, ShieldCheckIcon, PlayIcon, NovionLogo } from "@/components/Icons";
import { COMPANY_INFO } from "@/data/novionData";

export default function Hero({ onOpenVideoModal }: { onOpenVideoModal: (title: string) => void }) {
  const router = useRouter();

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-tech-grid">
      {/* Background ambient radial cyan light spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

      {/* Giant Background Typography Statement Backdrop */}
      <div
        aria-hidden="true"
        className="hero-backdrop-text absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 whitespace-nowrap text-center uppercase pl-[0.18em]"
        style={{
          fontFamily: "var(--font-orbitron), sans-serif",
          fontWeight: 900,
          letterSpacing: "0.18em",
          fontSize: "clamp(5rem, 16vw, 18rem)",
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(0, 210, 255, 0.02) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          WebkitTextStroke: "1px rgba(0, 210, 255, 0.12)",
        }}
      >
        NOVION
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Scaled-Up Centered Logo Showcase Emblem */}
          <div className="inline-block relative mb-8 group">
            {/* Ambient soft glow beneath logo */}
            <div className="absolute -inset-4 bg-cyan-400/20 rounded-[2.5rem] blur-2xl -z-10 group-hover:bg-cyan-400/35 transition-all duration-500" />

            {/* Scaled-up 1.5x-2x container (~130px to 150px) with rounded glassmorphism & 1px cyan border */}
            <div
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto rounded-[2rem] p-3.5 flex items-center justify-center relative overflow-hidden backdrop-blur-2xl transition-all duration-500 group-hover:scale-105"
              style={{
                background: "rgba(10, 14, 23, 0.8)",
                border: "1px solid rgba(0, 210, 255, 0.35)",
                boxShadow: "0 0 35px rgba(0, 210, 255, 0.3), inset 0 0 20px rgba(0, 210, 255, 0.08)",
              }}
            >
              <NovionLogo className="w-full h-full" showBackdrop={false} />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-cyan-400/40 pointer-events-none" />
            </div>
          </div>

          {/* Top Pill Badge: Elegant Glass Badge with Pulsing Electric Cyan Border */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-glass-cyan text-cyan-300 text-xs sm:text-sm font-semibold mb-4 transition-smooth">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00d2ff]"></span>
              <span>Next-Generation Battery Intelligence &amp; Predictive BMS</span>
            </div>
          </div>

          {/* Slogan */}
          <div className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-cyan-400 mb-2">
            {COMPANY_INFO.slogan}
          </div>

          {/* Main Headline with Crisp Metallic Gradient */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="metallic-heading">Predictive AI for</span>{" "}
            <span className="block mt-1 bg-gradient-to-r from-white via-slate-100 to-[#B0C4DE] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
              Lithium-ion Batteries
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Novion operates at the critical intersection of advanced hardware engineering and Artificial Intelligence.
            We analyze cell behavior, predict thermal stress, and anticipate catastrophic failures before they occur—transforming
            reactive hardware into proactive, intelligent energy systems.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => router.push("/solutions")}
              className="px-8 py-3.5 text-base font-bold font-orbitron btn-luxury-gradient rounded-full flex items-center gap-2 group cursor-pointer active:scale-95"
            >
              <span>Explore Solutions</span>
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onOpenVideoModal("Next-Gen AI BMS Cell Balancing in Action")}
              className="px-6 py-3.5 text-base font-medium text-slate-200 hover:text-white glass-panel hover:border-cyan-400/40 rounded-full transition-all duration-300 flex items-center gap-2.5 active:scale-95 cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <PlayIcon className="w-3 h-3 ml-0.5" />
              </div>
              Watch AI BMS Demo
            </button>

            <Link
              href="/contact"
              className="px-6 py-3.5 text-base font-medium text-slate-400 hover:text-white rounded-full transition-colors"
            >
              Contact Engineering
            </Link>
          </div>

          {/* Live Telemetry KPI Strip in Frosted Glass */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 glass-panel rounded-2xl shadow-2xl">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="p-3 text-center border-r last:border-r-0 border-white/10">
                <div className="text-2xl sm:text-3xl font-extrabold metallic-heading">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Safety Certification Seal */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheckIcon className="w-4 h-4 text-cyan-400" />
            <span>Built for EV Mobility, Heavy Machinery &amp; Utility Grid Storage Standards</span>
          </div>
        </div>
      </div>
    </section>
  );
}
