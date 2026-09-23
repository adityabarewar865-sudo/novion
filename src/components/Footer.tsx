import React from "react";
import Link from "next/link";
import { NovionLogo, LinkedInIcon, MailIcon, ArrowRightIcon } from "@/components/Icons";
import { COMPANY_INFO, SOLUTIONS } from "@/data/novionData";

export default function Footer() {
  return (
    <footer className="bg-[#070A10] border-t border-white/10 pt-16 pb-12 relative overflow-hidden bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3.5 group">
              <NovionLogo className="w-10 h-10 group-hover:scale-105 transition-transform duration-300" />
              <div className="flex flex-col">
                <span className="text-2xl font-black font-orbitron tracking-wider metallic-text flex items-center">
                  NOVION
                  <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 ml-1.5 shadow-[0_0_8px_#00d2ff]"></span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 -mt-0.5 font-mono">
                  Predict. Prevent. Power.
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-light">
              Revolutionizing Lithium-ion battery performance, safety, and longevity at the intersection of advanced hardware and Predictive Artificial Intelligence.
            </p>

            <div className="text-xs font-semibold font-mono text-cyan-300 uppercase tracking-widest pt-2">
              {COMPANY_INFO.slogan}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 flex items-center justify-center transition-colors shadow-sm"
                aria-label="Novion LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${COMPANY_INFO.contactEmail}`}
                className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 flex items-center justify-center transition-colors shadow-sm"
                aria-label="Email Novion"
              >
                <MailIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3 font-orbitron text-xs">
            <h4 className="font-bold uppercase tracking-wider metallic-heading">
              Solutions
            </h4>
            <ul className="space-y-2 text-slate-400 font-sans font-normal text-xs">
              {SOLUTIONS.map((sol) => (
                <li key={sol.id}>
                  <Link href={`/solutions#${sol.id}`} className="hover:text-cyan-400 transition-colors">
                    {sol.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/company#focus-areas" className="hover:text-cyan-400 transition-colors">
                  Thermal Forecasting
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-cyan-400 transition-colors">
                  Cell Telemetry Simulator
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3 font-orbitron text-xs">
            <h4 className="font-bold uppercase tracking-wider metallic-heading">
              Company
            </h4>
            <ul className="space-y-2 text-slate-400 font-sans font-normal text-xs">
              <li>
                <Link href="/company" className="hover:text-cyan-400 transition-colors">
                  About Novion
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-cyan-400 transition-colors">
                  Founder: {COMPANY_INFO.owner}
                </Link>
              </li>
              <li>
                <Link href="/company#focus-areas" className="hover:text-cyan-400 transition-colors">
                  Core Focus Areas
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-cyan-400 transition-colors">
                  Media &amp; Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3 font-orbitron text-xs">
            <h4 className="font-bold uppercase tracking-wider metallic-heading">
              Contact &amp; Connect
            </h4>
            <div className="space-y-2 text-slate-400 font-sans font-normal text-xs">
              <p>
                Founder: <span className="text-slate-200 font-semibold">{COMPANY_INFO.owner}</span>
              </p>
              <p className="break-all">
                Email:{" "}
                <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="text-cyan-400 hover:underline">
                  {COMPANY_INFO.contactEmail}
                </a>
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-orbitron"
                >
                  <span>Inquiry Portal</span>
                  <ArrowRightIcon className="w-3 h-3" />
                </Link>
              </div>
              <div>
                <a
                  href={COMPANY_INFO.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowRightIcon className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Novion Energy Technology. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Proprietary Predictive AI Architecture</span>
            <span className="text-cyan-400 font-mono text-[11px]">Predict. Prevent. Power.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
