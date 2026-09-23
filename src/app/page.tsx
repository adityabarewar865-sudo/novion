"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import VideoModal from "@/components/VideoModal";
import { COMPANY_INFO, SOLUTIONS, CORE_FOCUS_AREAS } from "@/data/novionData";
import { ArrowRightIcon, ShieldCheckIcon, CpuIcon, CheckCircleIcon, PlayIcon, NovionLogo } from "@/components/Icons";

export default function HomePage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideoTitle, setActiveVideoTitle] = useState("");
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleOpenVideo = (title: string) => {
    setActiveVideoTitle(title);
    setVideoModalOpen(true);
  };

  return (
    <div className="flex flex-col">
      {/* 1. Hero Gateway */}
      <Hero onOpenVideoModal={handleOpenVideo} />

      {/* 2. Executive Navigation & Pillars Showcase */}
      <section className="py-20 bg-slate-950/70 border-t border-cyan-500/20 bg-circuit-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold font-orbitron tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
              Architecture &amp; Portals
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-orbitron text-white mt-4 tracking-tight">
              Enterprise Battery Intelligence
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base font-light">
              Explore dedicated sections covering Novion corporate leadership, engineering solutions, and interactive telematics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Company */}
            <div className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-950/50 border border-cyan-500/40 flex items-center justify-center mb-5 shadow-inner">
                  <ShieldCheckIcon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider mb-1">
                  About Novion
                </div>
                <h3 className="text-xl font-bold font-orbitron text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  Company &amp; Leadership
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                  Founded by <strong className="text-white">{COMPANY_INFO.owner}</strong>. Operating at the critical intersection of advanced hardware and Predictive AI.
                </p>
              </div>
              <Link
                href="/company"
                className="inline-flex items-center gap-2 text-xs font-bold font-orbitron text-cyan-400 hover:text-cyan-300 pt-3 border-t border-slate-800"
              >
                <span>Read Full Company Story</span>
                <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 2: Solutions */}
            <div className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-950/50 border border-cyan-500/40 flex items-center justify-center mb-5 shadow-inner">
                  <CpuIcon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider mb-1">
                  Pillars
                </div>
                <h3 className="text-xl font-bold font-orbitron text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  3 Core Solutions
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                  Deep engineering across EV Battery Consultancy, AI Integrated Smart BMS, and Grid Software Ecosystems.
                </p>
              </div>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 text-xs font-bold font-orbitron text-cyan-400 hover:text-cyan-300 pt-3 border-t border-slate-800"
              >
                <span>Explore Solutions &amp; Specs</span>
                <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 3: Interactive Simulator */}
            <div className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-950/50 border border-cyan-500/40 flex items-center justify-center mb-5 shadow-inner">
                  <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00d2ff]" />
                </div>
                <div className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider mb-1">
                  Live Engine
                </div>
                <h3 className="text-xl font-bold font-orbitron text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  AI BMS Simulator
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                  Interactive real-time cell balancing, voltage equilibrium testing, and thermal stress anomaly detection.
                </p>
              </div>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 text-xs font-bold font-orbitron text-cyan-400 hover:text-cyan-300 pt-3 border-t border-slate-800"
              >
                <span>Launch Interactive Demo</span>
                <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 4: Media & Field Demos */}
            <div className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-950/50 border border-cyan-500/40 flex items-center justify-center mb-5 shadow-inner">
                  <PlayIcon className="w-5 h-5 text-cyan-400 ml-0.5" />
                </div>
                <div className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider mb-1">
                  Showcase
                </div>
                <h3 className="text-xl font-bold font-orbitron text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  Media &amp; Technology
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                  High-definition field videos, thermal imaging comparisons, liquid-cooled battery module schematics, and grid BESS photos.
                </p>
              </div>
              <Link
                href="/media"
                className="inline-flex items-center gap-2 text-xs font-bold font-orbitron text-cyan-400 hover:text-cyan-300 pt-3 border-t border-slate-800"
              >
                <span>View Media Gallery</span>
                <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solutions Highlight Strip with Real Stock Photography */}
      <section className="py-20 bg-slate-950/90 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold font-orbitron tracking-widest text-cyan-400 uppercase">
                Product Ecosystem
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-orbitron text-white mt-1">
                Cutting-Edge Solutions
              </h2>
            </div>
            <Link
              href="/solutions"
              className="text-xs font-bold font-orbitron text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 mt-2 md:mt-0"
            >
              <span>View Detailed Solutions Page</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SOLUTIONS.map((sol) => (
              <div
                key={sol.id}
                className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  {!imageErrors[sol.id] ? (
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={() => setImageErrors((prev) => ({ ...prev, [sol.id]: true }))}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-cyan-950/40 via-slate-900 to-blue-950/40 p-4 text-center">
                      <NovionLogo className="w-12 h-12 mb-2 opacity-80" />
                      <span className="text-xs font-bold font-orbitron text-cyan-300">{sol.title}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                      {sol.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold font-orbitron text-white group-hover:text-cyan-300 transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-light mt-2 line-clamp-3 leading-relaxed">
                      {sol.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 font-bold">
                      {sol.metrics[0].value} {sol.metrics[0].label}
                    </span>
                    <Link
                      href={`/solutions#${sol.id}`}
                      className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1"
                    >
                      <span>Specifications</span>
                      <ArrowRightIcon className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Motive & Founder Teaser */}
      <section className="py-20 bg-slate-950 border-t border-slate-900 bg-circuit-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-cyan-500/30 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold font-orbitron tracking-widest text-cyan-400 uppercase">
                  Our Mission &amp; Purpose
                </span>
                <blockquote className="text-xl sm:text-2xl font-bold font-orbitron text-white leading-snug">
                  &ldquo;{COMPANY_INFO.mission}&rdquo;
                </blockquote>
                <p className="text-sm text-slate-300 font-light max-w-2xl leading-relaxed">
                  Led by <strong className="text-white">{COMPANY_INFO.owner}</strong>, Novion is transforming reactive hardware into proactive, intelligent energy systems across the world.
                </p>
                <div className="pt-2">
                  <Link
                    href="/company"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold font-orbitron text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-sky-300 shadow-md shadow-cyan-500/25 border border-cyan-300/40"
                  >
                    <span>Explore Leadership &amp; Philosophy</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center">
                <NovionLogo className="w-28 h-28 mb-3" />
                <span className="text-sm font-bold font-orbitron metallic-text">NOVION</span>
                <span className="text-xs font-mono text-cyan-400">{COMPANY_INFO.slogan}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoTitle={activeVideoTitle}
      />
    </div>
  );
}
