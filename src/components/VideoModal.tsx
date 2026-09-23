"use client";

import React, { useState, useEffect } from "react";
import { CloseIcon, PlayIcon, ShieldCheckIcon } from "@/components/Icons";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoTitle: string;
}

export default function VideoModal({ isOpen, onClose, videoTitle }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(30);

  // Auto-progress simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-4xl glass-panel border border-white/15 rounded-3xl overflow-hidden shadow-2xl shadow-black/90">
        {/* Modal Top Bar */}
        <div className="p-4 bg-black/60 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00d2ff]" />
            <span className="text-xs sm:text-sm font-bold text-white truncate max-w-xs sm:max-w-md font-orbitron">
              {videoTitle || "Novion Technology Demonstration"}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display Simulation */}
        <div
          onClick={() => setIsPlaying(!isPlaying)}
          className={`relative aspect-video bg-black flex flex-col items-center justify-center overflow-hidden cursor-pointer select-none ${
            isPlaying ? "is-playing" : ""
          }`}
        >
          {/* Animated visual telemetry layer */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/30 via-slate-950/90 to-blue-950/40 pointer-events-none" />

          {/* Dynamic oscilloscope wave in electric blue */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <svg className="w-full h-32" preserveAspectRatio="none" viewBox="0 0 100 20">
              <path
                d="M 0,10 Q 25,0 50,10 T 100,10"
                fill="none"
                stroke="#00d2ff"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <div className="relative z-10 text-center px-4 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-semibold mb-3">
              <ShieldCheckIcon className="w-3.5 h-3.5" />
              High-Frequency AI BMS Neural Telemetry Stream
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-orbitron">
              {videoTitle}
            </h4>
            <p className="text-xs text-slate-400 mt-2 font-mono">
              Sampling frequency: 100,000 cycles/sec · Status: {isPlaying ? "Synchronized (Playing)" : "Paused"} · Frame Rate: 60 FPS
            </p>
          </div>

          {/* Big Center Play/Pause button - Auto-hides when playing, visible when paused */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(!isPlaying);
            }}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="absolute z-20 w-16 h-16 rounded-full btn-luxury-gradient text-slate-950 flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
            style={{
              opacity: isPlaying ? 0 : 1,
              visibility: isPlaying ? "hidden" : "visible",
              pointerEvents: isPlaying ? "none" : "auto",
              transition: "opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease"
            }}
          >
            {isPlaying ? (
              <span className="flex gap-1.5">
                <span className="w-1.5 h-5 bg-slate-950 rounded-sm" />
                <span className="w-1.5 h-5 bg-slate-950 rounded-sm" />
              </span>
            ) : (
              <PlayIcon className="w-7 h-7 ml-1" />
            )}
          </button>

          {/* Bottom Video Controls Scrubber */}
          <div
            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent z-20 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Progress bar */}
            <div
              className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden cursor-pointer mb-3"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                setProgress(Math.floor(pos * 100));
              }}
            >
              <div
                className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 h-full transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-cyan-400 font-bold transition-colors cursor-pointer"
                >
                  {isPlaying ? "PAUSE" : "PLAY"}
                </button>
                <span>
                  0{Math.floor(progress / 30)}:
                  {String((progress * 2) % 60).padStart(2, "0")} / 03:30
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-slate-400">
                <span className="text-cyan-400 font-bold">1080p HD</span>
                <span>Novion Digital Twin Stream</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
