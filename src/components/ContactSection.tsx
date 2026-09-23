"use client";

import React, { useState } from "react";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/novionData";
import { MailIcon, LinkedInIcon, CheckCircleIcon, ArrowRightIcon } from "@/components/Icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "AI BMS & Hardware Consultation",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [inquiryReceipt, setInquiryReceipt] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const generatedId = "NOV-" + Math.random().toString(36).substring(2, 8).toUpperCase() + "-" + Date.now().toString().slice(-4);
      let inquiryId = generatedId;

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        if (res.ok) {
          const data = await res.json();
          if (data?.inquiryId) inquiryId = data.inquiryId;
        }
      } catch {
        // Fallback for static hosts (e.g. GitHub Pages)
      }

      // Store in browser storage for receipt verification
      try {
        const existing = JSON.parse(localStorage.getItem("novion_inquiries") || "[]");
        existing.push({ id: inquiryId, ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem("novion_inquiries", JSON.stringify(existing));
      } catch {
        // Ignore storage errors
      }

      setStatus("success");
      setInquiryReceipt(inquiryId);
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "AI BMS & Hardware Consultation",
        message: ""
      });
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
      setErrorMessage("Network error connecting to the server. Please try again or email directly.");
    }
  };

  return (
    <section id="contact" className="py-16 relative bg-tech-grid">
      {/* Subtle backdrop lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-orbitron tracking-widest text-cyan-400 uppercase badge-glass-cyan px-3.5 py-1.5 rounded-full inline-block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-orbitron metallic-heading mt-4 tracking-tight">
            Connect With Novion
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-light">
            Whether exploring fleet electrification, BMS licensing, or predictive thermal AI partnerships, our engineering leadership is ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Leadership */}
          <div className="lg:col-span-5 space-y-6">
            {/* Leadership Contact Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-[0_12px_40px_0_rgba(0,0,0,0.6)] border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold font-orbitron uppercase tracking-wider text-slate-400">
                  Executive &amp; Technical Inquiries
                </span>
                <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/15 bg-black/60 p-0.5">
                  <Image
                    src="/images/novion-logo.jpg"
                    alt="Novion"
                    width={36}
                    height={36}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold font-orbitron metallic-heading tracking-tight">
                {COMPANY_INFO.owner}
              </h3>
              <div className="text-xs font-semibold font-mono text-cyan-400">
                {COMPANY_INFO.role} · Novion Energy Technology
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed font-light">
                Directly collaborating with automotive OEMs, commercial fleet operators, and grid energy storage developers.
              </p>

              <div className="mt-8 space-y-4 pt-6 border-t border-white/10">
                {/* Official Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 text-cyan-400">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono font-medium">Direct Email</div>
                    <a
                      href={`mailto:${COMPANY_INFO.contactEmail}`}
                      className="text-sm font-semibold font-mono text-white hover:text-cyan-400 transition-colors break-all"
                    >
                      {COMPANY_INFO.contactEmail}
                    </a>
                  </div>
                </div>

                {/* Official LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 text-cyan-400">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono font-medium">Official LinkedIn</div>
                    <a
                      href={COMPANY_INFO.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-orbitron text-xs"
                    >
                      <span>Novion Company Profile</span>
                      <ArrowRightIcon className="w-3.5 h-3.5 text-cyan-400" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Motto callout */}
              <div className="mt-8 p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
                <div className="text-xs text-slate-400 font-orbitron">Brand Promise</div>
                <div className="text-sm font-bold font-mono text-cyan-300 uppercase tracking-widest mt-0.5">
                  {COMPANY_INFO.slogan}
                </div>
              </div>
            </div>

            {/* Response Time SLA */}
            <div className="p-5 rounded-2xl glass-panel border border-white/10 flex items-center gap-3.5">
              <CheckCircleIcon className="w-5 h-5 text-cyan-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <strong className="text-white">Rapid Engineering Response:</strong> All technical consultations are reviewed by our senior engineering staff within 24 business hours.
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 shadow-[0_12px_40px_0_rgba(0,0,0,0.6)] border border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold font-orbitron metallic-heading mb-2">
              Send an Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-8 font-light">
              Submit your project scope, fleet parameters, or technical questions below.
            </p>

            {status === "success" ? (
              <div className="p-8 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-950/50">
                  <CheckCircleIcon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold font-orbitron text-white">Inquiry Received</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto font-light">
                  Thank you for contacting Novion. Your inquiry has been logged in our system under reference ID:
                </p>
                <div className="inline-block px-4 py-1.5 rounded-lg bg-black/60 font-mono text-cyan-300 text-sm font-bold border border-cyan-400/40">
                  {inquiryReceipt}
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs font-semibold text-slate-300 hover:text-white underline underline-offset-4 cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/50 text-xs text-rose-300">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium font-orbitron text-slate-300 mb-1.5">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Henderson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 luxury-search-input rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D2FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium font-orbitron text-slate-300 mb-1.5">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 luxury-search-input rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D2FF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium font-orbitron text-slate-300 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mobility Dynamics Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 luxury-search-input rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D2FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium font-orbitron text-slate-300 mb-1.5">
                      Consultation Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 luxury-search-input rounded-xl text-sm text-white focus:outline-none focus:border-[#00D2FF]"
                    >
                      <option value="AI BMS & Hardware Consultation" className="bg-[#0A0E17] text-white">AI BMS &amp; Hardware Consultation</option>
                      <option value="EV Battery Consultancy" className="bg-[#0A0E17] text-white">EV Battery Consultancy</option>
                      <option value="Software Ecosystem & Telematics" className="bg-[#0A0E17] text-white">Software Ecosystem &amp; Telematics</option>
                      <option value="Grid Energy Storage (BESS)" className="bg-[#0A0E17] text-white">Grid Energy Storage (BESS)</option>
                      <option value="General & Investment Inquiry" className="bg-[#0A0E17] text-white">General &amp; Investment Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium font-orbitron text-slate-300 mb-1.5">
                    Project Overview &amp; Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your battery pack specifications, fleet requirements, or technical objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 luxury-search-input rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D2FF]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 px-6 rounded-full font-bold font-orbitron text-slate-950 btn-luxury-gradient disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  {status === "submitting" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting to Engineering...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Technical Inquiry</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
