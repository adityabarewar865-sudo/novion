import React from "react";
import type { Metadata } from "next";
import SolutionsSection from "@/components/SolutionsSection";

export const metadata: Metadata = {
  title: "Solutions | EV Consultancy, AI Smart BMS & Software | Novion",
  description:
    "Explore Novion's three core solutions: EV Battery Consultancy, AI Integrated Smart BMS, and Grid Telematics Software Solutions with an interactive live telemetry simulator.",
};

export default function SolutionsPage() {
  return (
    <div className="py-6">
      {/* Top Breadcrumb & Page Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/80">
          <span>HOME</span>
          <span>/</span>
          <span className="text-white font-bold">SOLUTIONS &amp; SIMULATOR</span>
        </div>
      </div>

      <SolutionsSection />
    </div>
  );
}
