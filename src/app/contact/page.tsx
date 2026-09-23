import React from "react";
import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact & Engineering Inquiries | Novion",
  description:
    "Connect with Novion Energy Technology leadership. Reach founder Jatin K. Barewar via email or LinkedIn, or submit a technical battery consultation inquiry.",
};

export default function ContactPage() {
  return (
    <div className="py-6">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/80">
          <span>HOME</span>
          <span>/</span>
          <span className="text-white font-bold">CONTACT &amp; CONSULTATION</span>
        </div>
      </div>

      <ContactSection />
    </div>
  );
}
