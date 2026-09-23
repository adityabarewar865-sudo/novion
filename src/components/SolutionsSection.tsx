"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SOLUTIONS, SolutionItem } from "@/data/novionData";
import { CheckCircleIcon, ArrowRightIcon, BatteryIcon, ShieldCheckIcon } from "@/components/Icons";

export default function SolutionsSection() {
  const [selectedSolution, setSelectedSolution] = useState<string>(SOLUTIONS[0].id);
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  // Live Interactive BMS Simulator state
  const [isBalancingActive, setIsBalancingActive] = useState<boolean>(true);
  const [stressSimulated, setStressSimulated] = useState<boolean>(false);
  const [packCells, setPackCells] = useState([
    { id: 1, voltage: 3.642, temp: 24.5, soh: 99.8, status: "Normal" },
    { id: 2, voltage: 3.639, temp: 24.6, soh: 99.7, status: "Normal" },
    { id: 3, voltage: 3.645, temp: 24.8, soh: 99.9, status: "Normal" },
    { id: 4, voltage: 3.640, temp: 24.5, soh: 99.8, status: "Normal" },
    { id: 5, voltage: 3.643, temp: 24.7, soh: 99.6, status: "Normal" },
    { id: 6, voltage: 3.641, temp: 24.6, soh: 99.8, status: "Normal" }
  ]);

  // Periodic simulation tick for realistic telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setPackCells((prev) =>
        prev.map((cell) => {
          let deltaV = (Math.random() - 0.5) * 0.002;
          let newV = cell.voltage + deltaV;

          // If balancing active, pull back toward 3.642
          if (isBalancingActive) {
            newV += (3.642 - newV) * 0.35;
          }

          let newTemp = cell.temp + (Math.random() - 0.5) * 0.1;
          if (stressSimulated && cell.id === 3) {
            newTemp = 36.8 + Math.random() * 0.4;
          } else if (!stressSimulated && cell.temp > 25.5) {
            newTemp -= 0.3;
          }

          return {
            ...cell,
            voltage: Number(newV.toFixed(3)),
            temp: Number(newTemp.toFixed(1)),
            status: stressSimulated && cell.id === 3 ? "Thermal Warning (AI Flagged)" : "Equilibrated"
          };
        })
      );
    }, 1200);

    return () => clearInterval(interval);
  }, [isBalancingActive, stressSimulated]);

  const activeSolutionData: SolutionItem =
    SOLUTIONS.find((s) => s.id === selectedSolution) || SOLUTIONS[0];

  const currentImage = imageErrors[activeSolutionData.id]
    ? activeSolutionData.fallbackImage
    : activeSolutionData.image;

  return (
    <section id="solutions" className="py-16 relative bg-tech-grid">
      {/* Decorative ambient radial spot */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold font-orbitron tracking-widest text-cyan-400 uppercase badge-glass-cyan px-3.5 py-1.5 rounded-full inline-block">
            Engineered Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-orbitron metallic-heading mt-4 tracking-tight">
            Our Core Solutions
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-light">
            Complete technological solutions spanning strategic consulting, embedded neural BMS hardware, and cloud-scale fleet software.
          </p>
        </div>

        {/* Solution Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SOLUTIONS.map((sol) => (
            <button
              key={sol.id}
              onClick={() => setSelectedSolution(sol.id)}
              className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold font-orbitron transition-all duration-300 flex items-center gap-2.5 cursor-pointer active:scale-95 ${
                selectedSolution === sol.id
                  ? "bg-white/[0.08] text-white border border-cyan-400/50 shadow-[0_0_20px_rgba(0,210,255,0.25)]"
                  : "bg-white/[0.02] text-slate-400 hover:text-slate-200 border border-white/10 hover:border-white/20"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  selectedSolution === sol.id ? "bg-cyan-400 animate-pulse shadow-[0_0_8px_#00d2ff]" : "bg-slate-600"
                }`}
              />
              {sol.shortTitle}
            </button>
          ))}
        </div>

        {/* Selected Solution Showcase Card */}
        <div
          id={activeSolutionData.id}
          className="glass-panel rounded-3xl p-6 sm:p-10 shadow-[0_12px_40px_0_rgba(0,0,0,0.6)] relative overflow-hidden transition-all duration-300 border border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
                {activeSolutionData.category}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-orbitron metallic-heading tracking-tight">
                {activeSolutionData.title}
              </h3>

              <div className="text-sm font-semibold text-cyan-400 font-mono">
                {activeSolutionData.tagline}
              </div>

              <p className="text-slate-300 text-base leading-relaxed font-light">
                {activeSolutionData.description}
              </p>

              <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-cyan-400/70 pl-4 italic">
                {activeSolutionData.longDescription}
              </p>

              {/* Key Features Bullet Points */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold font-orbitron uppercase tracking-wider text-slate-200">
                  Technical Specifications &amp; Deliverables:
                </div>
                {activeSolutionData.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircleIcon className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Metrics Strip */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                {activeSolutionData.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="bg-white/[0.025] p-3 rounded-xl border border-white/10 text-center">
                    <div className="text-lg sm:text-xl font-black font-orbitron text-cyan-400">{m.value}</div>
                    <div className="text-[11px] text-slate-400 leading-tight mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold font-orbitron btn-luxury-gradient px-6 py-3 rounded-full transition-all active:scale-95 group cursor-pointer"
                >
                  <span>Request Consultation on {activeSolutionData.shortTitle}</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Media Graphic Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black/60 group">
                <div className="aspect-[16/10] w-full relative">
                  <Image
                    src={currentImage}
                    alt={activeSolutionData.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={() => {
                      setImageErrors((prev) => ({ ...prev, [activeSolutionData.id]: true }));
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-black/80 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-mono text-cyan-300">
                    <ShieldCheckIcon className="w-3.5 h-3.5 text-cyan-400" />
                    High-Res Telemetry Architecture
                  </span>
                  <span className="font-mono text-[10px] text-cyan-400 uppercase">
                    Rev 2.4 / Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deep Dive: Interactive Live AI BMS Simulator Widget */}
        <div className="mt-16 glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold font-orbitron text-cyan-400 uppercase tracking-widest">
                <BatteryIcon className="w-4 h-4" />
                Interactive Telemetry Simulator
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-orbitron metallic-heading mt-1">
                Novion AI-BMS Real-Time Cell Balancing &amp; Thermal Preemption
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 font-light">
                Simulate how Novion neural models continuously equilibrate sub-millivolt voltages and proactively detect thermal stress before hardware damage.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsBalancingActive(!isBalancingActive)}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-orbitron transition-all duration-300 border cursor-pointer active:scale-95 ${
                  isBalancingActive
                    ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-[0_0_15px_rgba(0,210,255,0.2)]"
                    : "bg-white/[0.04] text-slate-400 border-white/10"
                }`}
              >
                Active AI Balancing: {isBalancingActive ? "ENABLED" : "OFF"}
              </button>

              <button
                onClick={() => setStressSimulated(!stressSimulated)}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-orbitron transition-all duration-300 border cursor-pointer active:scale-95 ${
                  stressSimulated
                    ? "bg-rose-500/20 text-rose-300 border-rose-500/50 animate-pulse"
                    : "bg-white/[0.04] text-slate-300 hover:text-white border-white/10 hover:border-cyan-400/40"
                }`}
              >
                {stressSimulated ? "Reset Thermal Stress" : "Simulate Thermal Stress (Cell 3)"}
              </button>
            </div>
          </div>

          {/* Cell Grid Telemetry Display */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {packCells.map((cell) => {
              const isWarning = cell.status.includes("Warning");
              return (
                <div
                  key={cell.id}
                  className={`p-3.5 rounded-2xl border transition-all duration-300 ${
                    isWarning
                      ? "bg-rose-950/40 border-rose-500/80 shadow-lg shadow-rose-950/50"
                      : "bg-white/[0.025] border-white/10 hover:border-cyan-400/40 hover:-translate-y-1 shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-slate-400">Cell #{cell.id}</span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isWarning ? "bg-rose-500 animate-ping" : "bg-cyan-400 shadow-[0_0_8px_#00d2ff]"
                      }`}
                    />
                  </div>

                  <div className="text-lg font-black font-mono text-white">
                    {cell.voltage.toFixed(3)} <span className="text-xs font-normal text-slate-400">V</span>
                  </div>

                  <div className="mt-2 text-xs space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>Temp:</span>
                      <span className={isWarning ? "text-rose-400 font-bold" : "text-cyan-300 font-mono"}>
                        {cell.temp}°C
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>SOH:</span>
                      <span className="text-cyan-400 font-mono">{cell.soh}%</span>
                    </div>
                  </div>

                  <div
                    className={`mt-2.5 text-[10px] py-1 px-1.5 rounded text-center font-semibold truncate font-mono ${
                      isWarning
                        ? "bg-rose-500/30 text-rose-300"
                        : "bg-white/[0.05] text-slate-300"
                    }`}
                  >
                    {cell.status}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Anomaly Notification Bar in Simulator */}
          <div className="mt-4 p-3.5 bg-black/60 border border-white/10 rounded-xl flex flex-col sm:flex-row items-center justify-between text-xs gap-2">
            <div className="flex items-center gap-2 text-slate-300">
              <span className={`w-2 h-2 rounded-full ${stressSimulated ? "bg-amber-400" : "bg-cyan-400 shadow-[0_0_8px_#00d2ff]"}`} />
              <span>
                {stressSimulated
                  ? "AI Neural Engine flagged micro-thermal gradient on Cell #3. Preemptive cooling loop engaged 96 hrs before standard threshold."
                  : "All cell parameters within optimal tolerance. Sub-millivolt equilibrium maintained across the pack."}
              </span>
            </div>
            <span className="text-[11px] font-mono text-cyan-400 font-semibold">
              Micro-Impedance: 14.2 mΩ · Sampling: 100 kHz
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
