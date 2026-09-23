export interface SolutionItem {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  metrics: { label: string; value: string }[];
  image: string;
  fallbackImage: string;
  category: "Consultancy" | "Hardware & AI" | "Software";
}

export interface FocusArea {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface MediaItem {
  id: string;
  title: string;
  type: "video" | "photo";
  category: "EV Solutions" | "AI Technology" | "Battery Systems";
  description: string;
  duration?: string;
  thumbnail: string;
  fallbackImage: string;
  tags: string[];
  videoUrl?: string;
}

export const COMPANY_INFO = {
  name: "Novion",
  owner: "Jatin Barewar",
  role: "Founder & CEO / Owner, Novion",
  title: "Founder & CEO / Owner, Novion",
  photo: "/images/jatin-barewar.jpg",
  personalLinkedIn: "https://www.linkedin.com/in/jatin-barewar-8661181a1/",
  linkedInUrl: "https://www.linkedin.com/company/novion-co-in/about/",
  bio: "Jatin Barewar is a technology entrepreneur and the founder of Novion, driving innovations in next-generation battery technology and energy management. Under his leadership, Novion is engineering AI-integrated Smart Battery Management Systems (BMS), intelligent software monitoring platforms, and strategic EV consultancy services to accelerate the transition to sustainable mobility. Jatin combines technical vision with strategic execution to build safer, smarter, and longer-lasting battery systems for electric vehicles and energy storage infrastructure.",
  slogan: "Predict. Prevent. Power.",
  mission: "To empower the EV and Energy Storage sectors with data-driven confidence and uncompromising safety.",
  contactEmail: "barewar.cooljatin@gmail.com",
  summary:
    "Novion is an emerging Energy Technology startup revolutionizing Lithium-ion battery performance, safety, and longevity. We operate at the critical intersection of advanced hardware engineering and Artificial Intelligence.",
  detailedOverview: [
    "Novion is an emerging Energy Technology startup revolutionizing Lithium-ion battery performance, safety, and longevity. We operate at the critical intersection of advanced hardware engineering and Artificial Intelligence.",
    "As electric mobility and energy storage systems scale globally, the need for reliable and optimized battery packs is more urgent than ever. Novion addresses this by developing state-of-the-art Predictive AI algorithms and smart Battery Management Systems (BMS).",
    "Our technology goes beyond traditional monitoring. We analyze cell behavior, predict thermal stress, and anticipate catastrophic failures before they occur—transforming reactive hardware into proactive, intelligent energy systems."
  ],
  stats: [
    { label: "Thermal Stress Prediction Lead Time", value: "up to 96 hrs" },
    { label: "Battery Pack Lifespan Extension", value: "+35%" },
    { label: "Anomaly Detection Accuracy", value: "99.4%" },
    { label: "Microsecond Cell Level Monitoring", value: "100 kHz" }
  ]
};

export const CORE_FOCUS_AREAS: FocusArea[] = [
  {
    title: "AI-Integrated BMS Solutions",
    subtitle: "Intelligence directly at the cell level",
    description:
      "Combining embedded micro-controllers with edge-AI neural models to continuously calibrate state-of-charge (SOC) and state-of-health (SOH) across millions of duty cycles.",
    icon: "Cpu",
    highlights: [
      "Ultra-low latency edge inferencing",
      "Dynamic adaptive cell balancing",
      "Electrochemical impedance spectrum simulation",
      "Custom multi-chemistry firmware support"
    ]
  },
  {
    title: "Predictive Maintenance & Thermal Forecasting",
    subtitle: "Anticipating failure before it begins",
    description:
      "Proprietary deep-learning thermal dispersion engines that forecast dendrite formation, hotspot migrations, and runaway risks hours ahead of standard temperature sensor thresholds.",
    icon: "Flame",
    highlights: [
      "Thermal runaway early warning detection",
      "Continuous internal degradation mapping",
      "Early warning alarms to telematics & cloud",
      "Reduced catastrophic warranty claims"
    ]
  },
  {
    title: "Li-ion Battery Lifecycle & Performance Optimization",
    subtitle: "Maximizing energy density & second-life utilization",
    description:
      "Continuous closed-loop battery modeling that optimizes charging curves dynamically, minimizing degradation stress while delivering maximum peak power output.",
    icon: "BatteryCharging",
    highlights: [
      "AI-governed fast-charging algorithms",
      "Second-life energy storage repurposing assessment",
      "Degradation mitigation protocols",
      "Comprehensive carbon footprint analytics"
    ]
  }
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: "ev-battery-consultancy",
    title: "EV Battery Consultancy",
    shortTitle: "Consultancy",
    tagline: "End-to-End Transition & Architecture for Commercial and Passenger Fleets",
    description:
      "Helping businesses, automotive OEMs, and fleet operators navigate the complex transition to electric vehicles with robust battery engineering, chemistry benchmarking, and regulatory compliance.",
    longDescription:
      "Transitioning to electric vehicles demands deep expertise in battery pack mechanics, cell chemistry selection (NMC, LFP, Solid-State), modular BMS integration, and international safety protocols. Novion's consultancy team partners with engineering and fleet departments to design high-efficiency battery systems tailored precisely to duty cycles, climate conditions, and commercial cost targets.",
    category: "Consultancy",
    features: [
      "Cell chemistry selection & vendor audit (LFP, NMC, High-Nickel)",
      "Pack thermal & structural design verification",
      "ISO 26262, UN 38.3, and AIS 156 regulatory compliance roadmapping",
      "Fleet duty-cycle simulation & range optimization",
      "Second-life battery repurposing & recycling economic models"
    ],
    metrics: [
      { label: "Client TCO Reduction", value: "22%" },
      { label: "Deployment Acceleration", value: "3x Faster" },
      { label: "Safety Standard Compliance", value: "100%" }
    ],
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/solutions-consultancy.svg"
  },
  {
    id: "ai-integrated-smart-bms",
    title: "AI Integrated Smart BMS (Battery Management System)",
    shortTitle: "Smart BMS",
    tagline: "Proactive, Neural-Driven Battery Management & Thermal Protection",
    description:
      "A next-generation BMS that transforms passive safety into active intelligence, utilizing neural networks to maximize cell longevity, prevent thermal runaway, and ensure ultra-safe operation.",
    longDescription:
      "Traditional BMS solutions are merely threshold-based cut-offs that trigger when damage has already occurred. Novion's AI-Integrated Smart BMS utilizes embedded neural networks that continuously analyze micro-voltage deviations, internal resistance transients, and localized thermal signatures. By projecting thermal behavior up to 96 hours ahead, Novion actively protects against catastrophic failures while maintaining ideal cell equilibrium.",
    category: "Hardware & AI",
    features: [
      "Sub-millivolt precision real-time cell voltage acquisition",
      "Edge-AI predictive thermal stress & runaway forecasting",
      "Active high-efficiency bi-directional cell balancing",
      "Online electrochemical model-based State of Health (SOH) tracking",
      "Automated micro-isolation of compromised cells"
    ],
    metrics: [
      { label: "Thermal Warning Lead Time", value: "Up to 96h" },
      { label: "Cell Imbalance Minimization", value: "< 2mV" },
      { label: "Cycle Life Extension", value: "+35%" }
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/solutions-bms.svg"
  },
  {
    id: "software-solutions",
    title: "Software Solutions",
    shortTitle: "Software Ecosystem",
    tagline: "Full-Stack Fleet Telematics, Digital Twins & Grid Energy Management",
    description:
      "A scalable cloud software ecosystem designed to monitor, simulate, and orchestrate distributed battery packs across fleets, stationary energy storage (BESS), and renewable grids.",
    longDescription:
      "Novion's cloud software suite bridges physical batteries with intelligent operations. By synchronizing live high-frequency telemetry with a cloud-based Digital Twin, operators gain complete visibility into every cell in every pack across the globe. The platform features automated health diagnostics, OTA algorithm deployments, warranty tracking, and smart grid peak-shaving dispatch.",
    category: "Software",
    features: [
      "Real-time cloud telemetry hub with microsecond resolution",
      "High-fidelity Digital Twin simulation per battery pack",
      "Stationary Battery Energy Storage Systems (BESS) grid orchestration",
      "Over-the-Air (OTA) firmware and AI model updating",
      "Automated compliance, degradation, and insurance reporting"
    ],
    metrics: [
      { label: "Telematics Data Ingestion", value: "1M+ datapoints/sec" },
      { label: "Uptime Reliability", value: "99.99%" },
      { label: "Remote Diagnosis Rate", value: "94%" }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/solutions-software.svg"
  }
];

export const MEDIA_GALLERY: MediaItem[] = [
  {
    id: "media-1",
    title: "Next-Gen AI BMS Cell Balancing in Action",
    type: "video",
    category: "AI Technology",
    description: "Watch how Novion's neural algorithms dynamically balance multi-cell lithium packs under extreme load conditions.",
    duration: "2:45",
    thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/media-bms-video.svg",
    tags: ["Smart BMS", "Edge AI", "Active Balancing"]
  },
  {
    id: "media-2",
    title: "Thermal Stress Forecasting & Runaway Prevention",
    type: "video",
    category: "Battery Systems",
    description: "A thermal camera comparison demonstrating how predictive modeling identifies micro-hotspots before thermal runaway begins.",
    duration: "3:15",
    thumbnail: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/media-thermal-video.svg",
    tags: ["Safety", "Thermal Modeling", "Early Warning"]
  },
  {
    id: "media-3",
    title: "Commercial EV Fleet Electrification & Telemetry Hub",
    type: "video",
    category: "EV Solutions",
    description: "Field deployment demonstration showing how fleet operators monitor real-time SOH and range analytics across commercial vehicles.",
    duration: "4:10",
    thumbnail: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/media-fleet-video.svg",
    tags: ["EV Fleets", "Digital Twin", "Consultancy"]
  },
  {
    id: "media-4",
    title: "High-Density Lithium-ion Battery Module Architecture",
    type: "photo",
    category: "Battery Systems",
    description: "Detailed exploded view of Novion-engineered liquid-cooled battery module designed for heavy-duty EV mobility.",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/media-module-photo.svg",
    tags: ["Hardware", "Liquid Cooling", "Pack Architecture"]
  },
  {
    id: "media-5",
    title: "Novion Neural Core Telematics Dashboard",
    type: "photo",
    category: "AI Technology",
    description: "Screenshot of the cloud software interface displaying multi-pack impedance curves and predictive degradation trajectories.",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/media-dashboard-photo.svg",
    tags: ["Cloud SaaS", "Analytics", "Telematics"]
  },
  {
    id: "media-6",
    title: "Smart Grid Battery Energy Storage (BESS) Container",
    type: "photo",
    category: "EV Solutions",
    description: "Turnkey megawatt-hour energy storage installation integrated with Novion automated grid dispatch intelligence.",
    thumbnail: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/media-grid-photo.svg",
    tags: ["Grid Storage", "BESS", "Renewables"]
  }
];
