import React from "react";

export function NovionLogo({
  className = "w-10 h-10",
  showBackdrop = true
}: {
  className?: string;
  showBackdrop?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Novion Logo"
    >
      <defs>
        <linearGradient id="novionCyanBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D2FF" />
          <stop offset="100%" stopColor="#0066FF" />
        </linearGradient>
        <linearGradient id="novionDiagGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7DD3FC" />
          <stop offset="40%" stopColor="#00D2FF" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="novionSpark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#00D2FF" />
        </linearGradient>
        <filter id="novionGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {showBackdrop && (
        <>
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="20"
            fill="#070A10"
            fillOpacity="0.85"
            stroke="rgba(0, 210, 255, 0.35)"
            strokeWidth="1.5"
          />
          {/* Subtle cyber corner tech notches */}
          <path d="M12 22 V14 H20" stroke="#00D2FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
          <path d="M80 14 H88 V22" stroke="#00D2FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
          <path d="M12 78 V86 H20" stroke="#00D2FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
          <path d="M80 86 H88 V78" stroke="#00D2FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        </>
      )}

      {/* Electric High-Tech 'N' Vector Icon */}
      <g filter="url(#novionGlowFilter)">
        {/* Left Vertical Pillar */}
        <path
          d="M24 24 C24 22.9 24.9 22 26 22 H34 C35.1 22 36 22.9 36 24 V76 C36 77.1 35.1 78 34 78 H26 C24.9 78 24 77.1 24 76 Z"
          fill="url(#novionCyanBlue)"
        />

        {/* Dynamic Velocity Diagonal Slash */}
        <path
          d="M34 22 H46 L76 78 H64 Z"
          fill="url(#novionDiagGlow)"
        />

        {/* Right Vertical Pillar */}
        <path
          d="M64 24 C64 22.9 64.9 22 66 22 H74 C75.1 22 76 22.9 76 24 V76 C76 77.1 75.1 78 74 78 H66 C64.9 78 64 77.1 64 76 Z"
          fill="url(#novionCyanBlue)"
        />

        {/* Core Electric Diamond Spark */}
        <path
          d="M50 44 L56 50 L50 56 L44 50 Z"
          fill="url(#novionSpark)"
        />
        <circle cx="50" cy="50" r="1.5" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

export function SearchIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

export function CloseIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function MenuIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function BatteryIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="7" width="16" height="10" rx="2" strokeWidth="2" />
      <path d="M22 11v2" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 11v2M10 11v2M14 11v2" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CpuIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
      <rect x="9" y="9" width="6" height="6" strokeWidth="2" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function FlameIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.879 16.121A3 3 0 1012.001 11c-.001 1-1 2-2.122 5.121z"
      />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

export function MailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

export function PlayIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

export function CheckCircleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
