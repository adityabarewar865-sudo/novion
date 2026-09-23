import React from "react";
import type { Metadata } from "next";
import CompanySection from "@/components/CompanySection";

export const metadata: Metadata = {
  title: "Company & Leadership | Novion Energy Technology",
  description:
    "Learn about Novion, founded by Jatin K. Barewar. Revolutionizing Lithium-ion battery performance, safety, and longevity at the intersection of hardware and Predictive AI.",
};

export default function CompanyPage() {
  return (
    <div className="py-6">
      {/* Top Breadcrumb & Page Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/80">
          <span>HOME</span>
          <span>/</span>
          <span className="text-white font-bold">COMPANY &amp; LEADERSHIP</span>
        </div>
      </div>

      <CompanySection />
    </div>
  );
}
