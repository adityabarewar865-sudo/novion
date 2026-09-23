"use client";

import React, { useState } from "react";
import MediaShowcase from "@/components/MediaShowcase";
import VideoModal from "@/components/VideoModal";

export default function MediaPage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideoTitle, setActiveVideoTitle] = useState("");

  const handleOpenVideo = (title: string) => {
    setActiveVideoTitle(title);
    setVideoModalOpen(true);
  };

  return (
    <div className="py-6">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/80">
          <span>HOME</span>
          <span>/</span>
          <span className="text-white font-bold">MEDIA &amp; TECHNOLOGY SHOWCASE</span>
        </div>
      </div>

      <MediaShowcase onOpenVideoModal={handleOpenVideo} />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoTitle={activeVideoTitle}
      />
    </div>
  );
}
