"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MEDIA_GALLERY, MediaItem } from "@/data/novionData";
import { PlayIcon } from "@/components/Icons";

interface MediaShowcaseProps {
  onOpenVideoModal: (title: string, videoUrl?: string) => void;
}

export default function MediaShowcase({ onOpenVideoModal }: MediaShowcaseProps) {
  const [filter, setFilter] = useState<string>("All");
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const categories = ["All", "EV Solutions", "AI Technology", "Battery Systems"];

  const filteredMedia =
    filter === "All"
      ? MEDIA_GALLERY
      : MEDIA_GALLERY.filter((item) => item.category === filter);

  return (
    <section id="media" className="py-16 relative bg-tech-grid">
      {/* Background ambient light spot */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-orbitron tracking-widest text-cyan-400 uppercase badge-glass-cyan px-3.5 py-1.5 rounded-full inline-block">
            Technology In Motion
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-orbitron metallic-heading mt-4 tracking-tight">
            Media &amp; Technology Showcase
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-light">
            Explore our visual schematics, thermal simulations, and live deployment videos showcasing Novion in the field.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold font-orbitron transition-all duration-300 cursor-pointer active:scale-95 ${
                filter === cat
                  ? "btn-luxury-gradient"
                  : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedia.map((item: MediaItem) => {
            const currentThumb = imageErrors[item.id] ? item.fallbackImage : item.thumbnail;
            return (
              <div
                key={item.id}
                id={item.id}
                className="glass-panel-card rounded-3xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border border-white/10 flex flex-col justify-between group"
              >
                {/* Media Thumbnail Container */}
                <div
                  className="relative aspect-video w-full cursor-pointer bg-black/60 overflow-hidden"
                  onClick={() => {
                    if (item.type === "video") {
                      onOpenVideoModal(item.title);
                    }
                  }}
                >
                  <Image
                    src={currentThumb}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={() => {
                      setImageErrors((prev) => ({ ...prev, [item.id]: true }));
                    }}
                  />

                  {/* Video Play Button Overlay */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                      <div className="w-14 h-14 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-950/80 group-hover:scale-110 transition-transform">
                        <PlayIcon className="w-6 h-6 ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Duration / Tag Overlay */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/70 text-slate-200 border border-white/10 backdrop-blur-md">
                      {item.type.toUpperCase()}
                    </span>
                    {item.duration && (
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                        {item.duration}
                      </span>
                    )}
                  </div>
                </div>

                {/* Information Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-1.5">
                      {item.category}
                    </div>
                    <h3 className="text-lg font-bold font-orbitron text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
