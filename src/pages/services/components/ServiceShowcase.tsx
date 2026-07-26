import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  Search,
  Megaphone,
  Cpu,
  MapPin,
  Video,
  Code2,
  Palette,
  Users,
  Layers,
  Smartphone,
  Workflow,
  ChevronRight,
  ChevronLeft,
  ShoppingBag,
  Heart,
  Instagram,
  Facebook,
  Globe,
  Linkedin,
  ArrowUpRight,
  Sparkles,
  Zap,
  CheckCircle2,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────
   SERVICE DATA (All 11 Core Services tailored for luxury UI)
───────────────────────────────────────────────────────────────────── */
export const services = [
  {
    id: "seo",
    number: "01",
    label: "SEO",
    navLabel: "SEO & SEARCH",
    headline: "Rank #1 On Google\nWithout Spending Millions",
    title: "Search Engine Optimisation (SEO)",
    tagline: "Compounding authority, wrapped in Organic Traffic",
    description:
      "It's not just about keywords. It's about owning top-of-funnel and bottom-of-funnel search real estate so high-intent buyers find your brand first. Data-backed technical SEO, content velocity, and authority backlink engines.",
    metric: "+340%",
    benchmark: "1.2×",
    metricLabel: "Organic Traffic Lift",
    href: "/services/seo",
    Icon: Search,
    accent: "#a855f7",
    accentHex: "168,85,247",
    glow: "rgba(168,85,247,0.35)",
    scopes: ["Technical", "Content", "Authority"],
    image: "/heroBgImg/SEO.webp",
  },
  {
    id: "meta-ads",
    number: "02",
    label: "META ADS",
    navLabel: "META ADS",
    headline: "Stop The Scroll\nWithout Effort",
    title: "Meta Ads — Facebook & Instagram",
    tagline: "Attention, wrapped in conversion",
    description:
      "It's not just about running social ads. It's about capturing feed attention and instantly building desire among your ideal customers. High-converting creative systems engineered to scale your returns on every ad rupee.",
    metric: "420%",
    benchmark: "140%",
    metricLabel: "Average ROAS",
    href: "/services/meta-ads",
    Icon: Megaphone,
    accent: "#3b82f6",
    accentHex: "59,130,246",
    glow: "rgba(59,130,246,0.35)",
    scopes: ["Creative", "Targeting", "Retargeting"],
    image: "/heroBgImg/meta.webp",
  },
  {
    id: "google-ads",
    number: "03",
    label: "GOOGLE ADS",
    navLabel: "GOOGLE ADS",
    headline: "Capture Buyer Intent\nWithout Wasted Spend",
    title: "Google Ads (PPC Intent)",
    tagline: "Precision, wrapped in high ROI",
    description:
      "It's not just about pay-per-click traffic. It's about intercepting active buyers at the exact moment of commercial purchase intent. Precision Google Search, Shopping, and Display campaigns tracked to the exact conversion.",
    metric: "3.8×",
    benchmark: "1.5×",
    metricLabel: "Ad Return on Spend",
    href: "/services/google-ads",
    Icon: Cpu,
    accent: "#ef4444",
    accentHex: "239,68,68",
    glow: "rgba(239,68,68,0.35)",
    scopes: ["Search", "Display", "YouTube"],
    image: "/heroBgImg/Google.webp",
  },
  {
    id: "local-seo",
    number: "04",
    label: "LOCAL SEO",
    navLabel: "LOCAL SEO",
    headline: "Own Your Region\nWithout Guesswork",
    title: "Google Business & Local SEO",
    tagline: "Local trust, wrapped in top rankings",
    description:
      "It's not just about showing up on maps. It's about being the #1 recommended business when local clients search 'near me'. Complete Google Business Profile optimization, local citations, and review management.",
    metric: "#1",
    benchmark: "#12",
    metricLabel: "Maps Dominance Rank",
    href: "/services/gbp-local-seo",
    Icon: MapPin,
    accent: "#22c55e",
    accentHex: "34,197,94",
    glow: "rgba(34,197,94,0.35)",
    scopes: ["Maps", "Citations", "Reviews"],
    image: "/heroBgImg/local-seo.webp",
  },
  {
    id: "video",
    number: "05",
    label: "VIDEO PRODUCTION",
    navLabel: "VIDEO SHOOTS",
    headline: "Tell Your Story\nWithout Distraction",
    title: "Cinematic Video Production",
    tagline: "Cinematic quality, wrapped in emotion",
    description:
      "It's not just about publishing video clips. It's about creating brand visual spectacles that command 100% attention and communicate trust in seconds. Brand films, ad reels, product shoots, and client testimonials.",
    metric: "10×",
    benchmark: "2×",
    metricLabel: "Video Engagement Rate",
    href: "/services/video-shoot-production",
    Icon: Video,
    accent: "#f59e0b",
    accentHex: "245,158,11",
    glow: "rgba(245,158,11,0.35)",
    scopes: ["Reels", "Brand Film", "Shoots"],
    image: "/heroBgImg/video-shoot.webp",
  },
  {
    id: "web-design",
    number: "06",
    label: "WEB DESIGN",
    navLabel: "WEB DESIGN",
    headline: "Convert Visitors\nWithout Friction",
    title: "Website Design & Development",
    tagline: "High performance, wrapped in luxury UX",
    description:
      "It's not just about having a website. It's about launching a 24/7 sales platform engineered for 60 FPS smoothness, instant loads, and seamless lead conversion across mobile and desktop devices.",
    metric: "2.1s",
    benchmark: "6.8s",
    metricLabel: "Average Load Speed",
    href: "/services/website-designing",
    Icon: Code2,
    accent: "#8b5cf6",
    accentHex: "139,92,246",
    glow: "rgba(139,92,246,0.35)",
    scopes: ["UI/UX", "Next/Vite", "Speed"],
    image: "/heroBgImg/web-dev.webp",
  },
  {
    id: "branding",
    number: "07",
    label: "BRANDING",
    navLabel: "BRANDING",
    headline: "Build Your Identity\nWithout Apology",
    title: "Logo Design & Brand Identity",
    tagline: "Prestige, wrapped in timeless design",
    description:
      "It's not just about a logo symbol. It's about defining an unmistakable visual language that signals authority, trust, and premium craftsmanship across every customer touchpoint.",
    metric: "100%",
    benchmark: "25%",
    metricLabel: "Brand Recall Rate",
    href: "/services/logo-designing",
    Icon: Palette,
    accent: "#ec4899",
    accentHex: "236,72,153",
    glow: "rgba(236,72,153,0.35)",
    scopes: ["Logo", "Guidelines", "System"],
    image: "/heroBgImg/logo-design.webp",
  },
  {
    id: "social",
    number: "08",
    label: "SOCIAL MEDIA",
    navLabel: "SOCIAL MEDIA",
    headline: "Grow Your Audience\nWithout Quiet Days",
    title: "Social Media Management",
    tagline: "Loyalty, wrapped in daily engagement",
    description:
      "It's not just about posting graphics. It's about cultivating a passionate community around your brand with continuous content creation, strategy, design, and authentic interaction.",
    metric: "5×",
    benchmark: "1×",
    metricLabel: "Follower Acceleration",
    href: "/services/social-media-management",
    Icon: Users,
    accent: "#06b6d4",
    accentHex: "6,182,212",
    glow: "rgba(6,182,212,0.35)",
    scopes: ["Strategy", "Graphics", "Community"],
    image: "/heroBgImg/social-media.webp",
  },
  {
    id: "performance",
    number: "09",
    label: "PERFORMANCE",
    navLabel: "PERFORMANCE",
    headline: "Scale Revenue\nWithout Waste",
    title: "Full-Stack Performance Marketing",
    tagline: "Data precision, wrapped in profitability",
    description:
      "It's not just about impressions. It's about tying paid ads, organic channels, and retargeting funnels into one unified data model where every rupee is tracked and optimized for maximum revenue.",
    metric: "6.1×",
    benchmark: "2.0×",
    metricLabel: "Blended Revenue ROAS",
    href: "/services/performance-marketing",
    Icon: Layers,
    accent: "#f97316",
    accentHex: "249,115,22",
    glow: "rgba(249,115,22,0.35)",
    scopes: ["Omnichannel", "Funnel", "Data"],
    image: "/heroBgImg/performance.webp",
  },
  {
    id: "app-dev",
    number: "10",
    label: "APP DEV",
    navLabel: "APP DEV",
    headline: "Engineer Products\nWithout Compromise",
    title: "Custom Mobile & Web App Dev",
    tagline: "Scalability, wrapped in native code",
    description:
      "It's not just about writing code. It's about shipping robust, intuitive iOS, Android, and SaaS web applications designed to solve real business challenges and delight end users.",
    metric: "4.9★",
    benchmark: "3.2★",
    metricLabel: "User Experience Rating",
    href: "/services/custom-app-development",
    Icon: Smartphone,
    accent: "#c084fc",
    accentHex: "192,132,252",
    glow: "rgba(192,132,252,0.35)",
    scopes: ["iOS/Android", "Web SaaS", "API"],
    image: "/heroBgImg/app-dev.webp",
  },
  {
    id: "revops",
    number: "11",
    label: "REVOPS",
    navLabel: "REVOPS & CRM",
    headline: "Streamline Operations\nWithout Friction",
    title: "Revenue Operations & CRM Systems",
    tagline: "Automation, wrapped in operational speed",
    description:
      "It's not just about CRM software. It's about unifying sales, marketing, and customer success pipelines into an automated revenue engine that turns leads into closed contracts faster.",
    metric: "40%",
    benchmark: "10%",
    metricLabel: "Pipeline Growth Boost",
    href: "/services/rev-ops-solutions",
    Icon: Workflow,
    accent: "#10b981",
    accentHex: "16,185,129",
    glow: "rgba(16,185,129,0.35)",
    scopes: ["CRM Setup", "Automations", "Pipelines"],
    image: "/heroBgImg/rev-ops.webp",
  },
];

/* ─────────────────────────────────────────────────────────────────────
   MAIN COMPONENT: Luxury Service Showcase (Detto Same as Reference Image)
───────────────────────────────────────────────────────────────────── */
export default function ServiceShowcase() {
  const [active, setActive] = useState(0);
  const [activeScopeIndex, setActiveScopeIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const currentService = services[active];
  const nextService = services[(active + 1) % services.length];

  const goTo = useCallback(
    (idx: number) => {
      if (idx === active) return;
      setDirection(idx > active ? 1 : -1);
      setActive(idx);
      setActiveScopeIndex(0);
    },
    [active]
  );

  const prevService = () => {
    const nextIdx = active === 0 ? services.length - 1 : active - 1;
    goTo(nextIdx);
  };

  const nextServiceFn = () => {
    const nextIdx = (active + 1) % services.length;
    goTo(nextIdx);
  };

  const CurrentIcon = currentService.Icon;
  const NextIcon = nextService.Icon;

  return (
    <section className="w-full py-12 sm:py-20 bg-[#06040a] text-white relative overflow-hidden" id="services-showcase">
      {/* Radiant Background Glow Gradient (matching the bright ambient outer glow in reference screenshot) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[650px] rounded-full opacity-35 blur-[160px] transition-all duration-700"
          style={{
            background: `radial-gradient(circle, ${currentService.accent} 0%, rgba(110,1,156,0.3) 50%, transparent 80%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-8 max-w-6xl relative z-10">
        
        {/* MAIN LUXURY CONTAINER CARD (Detto same dark card with rounded corners in reference image) */}
        <div className="relative rounded-[36px] bg-[#111016]/95 border border-white/12 shadow-[0_30px_90px_rgba(0,0,0,0.85)] backdrop-blur-2xl overflow-hidden min-h-[580px] sm:min-h-[640px] flex flex-col justify-between p-6 sm:p-10 select-none">
          
          {/* ════════════════════════════════════════════════════════════
              TOP NAVIGATION HEADER
              Left: Brand logo | Center: Dark Pill Selector | Right: Action Icons
          ════════════════════════════════════════════════════════════ */}
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            
            {/* Left: Brand Logo / Badge */}
            <div className="flex items-center gap-2.5 shrink-0">
              <span className="w-7 h-7 rounded-md bg-white text-slate-950 font-black text-xs flex items-center justify-center font-mono">
                ZY
              </span>
              <span className="text-xs font-bold tracking-widest text-white uppercase font-sans">
                ZYSTRA SERVICES
              </span>
            </div>

            {/* Center: Dark Pill Category Navigation Bar */}
            <div className="hidden md:flex items-center gap-1 bg-[#1d1b26] border border-white/10 rounded-full px-2 py-1.5 overflow-x-auto scrollbar-none max-w-xl">
              {services.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase transition-all duration-300 shrink-0 cursor-pointer ${
                    i === active
                      ? "bg-white text-slate-950 shadow-md font-extrabold"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {s.navLabel}
                </button>
              ))}
            </div>

            {/* Right: Quick Action Icons (Cart / Heart or Direct Audit link) */}
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/contact">
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/15 transition-all cursor-pointer">
                  <ShoppingBag className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/contact">
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/15 transition-all cursor-pointer">
                  <Heart className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Category Dropdown / Pill Scrollbar */}
          <div className="flex md:hidden items-center gap-2 overflow-x-auto scrollbar-none py-3 border-b border-white/10 mb-4">
            {services.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase shrink-0 ${
                  i === active
                    ? "bg-white text-slate-950"
                    : "bg-white/5 text-slate-400 border border-white/10"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* ════════════════════════════════════════════════════════════
              MAIN SHOWCASE STAGE CONTENT (3-COL GRID LAYOUT MATCHING IMAGE)
          ════════════════════════════════════════════════════════════ */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, x: direction > 0 ? 35 : -35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -35 : 35 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6 sm:py-10 my-auto"
            >
              
              {/* ──────────────────────────────────────────────────────────
                  LEFT COLUMN: Navigation Arrows, Big Title, Subtext, Pill CTA, Socials
              ────────────────────────────────────────────────────────── */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full z-20">
                <div>
                  {/* Top Left Navigation Arrow Controls (< >) */}
                  <div className="flex items-center gap-2 mb-6">
                    <button
                      onClick={prevService}
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/12 text-slate-300 flex items-center justify-center hover:bg-white/20 hover:text-white transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextServiceFn}
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/12 text-slate-300 flex items-center justify-center hover:bg-white/20 hover:text-white transition-all cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Big Headline (detto same style: "Stand out Without trying") */}
                  <h2
                    className="text-3xl sm:text-5xl font-extrabold text-white leading-[1.12] tracking-tight mb-5 font-sans whitespace-pre-line"
                  >
                    {currentService.headline}
                  </h2>

                  {/* Subtext Paragraph */}
                  <p className="text-slate-350 text-xs sm:text-sm leading-relaxed font-normal mb-8 max-w-md">
                    {currentService.description}
                  </p>

                  {/* White Pill CTA Button (detto same: "Get the look >") */}
                  <Link href={currentService.href}>
                    <span className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3 rounded-full text-xs hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-xl cursor-pointer">
                      Explore Service <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>

                {/* Bottom Left Minimal Social Icons (Instagram, Facebook, Web, LinkedIn) */}
                <div className="flex items-center gap-4 mt-8 pt-4">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="https://zystra.in" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <Globe className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* ──────────────────────────────────────────────────────────
                  CENTER COLUMN: 3D Focal Visual (Floating orb/icon with shadow)
                  + Bottom Center Tagline Caption
              ────────────────────────────────────────────────────────── */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center relative min-h-[300px] sm:min-h-[360px]">
                
                {/* Ambient glow behind center 3D visual */}
                <div
                  className="absolute w-56 h-56 rounded-full blur-3xl opacity-50 pointer-events-none"
                  style={{ background: currentService.glow }}
                />

                {/* Center 3D Floating Orb / Icon Object */}
                <motion.div
                  initial={{ y: -10, scale: 0.95 }}
                  animate={{ y: [0, -12, 0], scale: 1 }}
                  transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.4 },
                  }}
                  className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-full flex items-center justify-center transform-gpu select-none"
                  style={{
                    background: `radial-gradient(circle at 35% 30%, rgba(255,255,255,0.28) 0%, rgba(${currentService.accentHex},0.85) 45%, rgba(12,8,25,0.9) 100%)`,
                    boxShadow: `0 20px 60px rgba(${currentService.accentHex},0.45), 0 30px 80px rgba(0,0,0,0.85), inset 0 1px 2px rgba(255,255,255,0.35)`,
                  }}
                >
                  {/* Top Specular Reflection */}
                  <div
                    className="absolute top-4 left-7 w-12 h-6 rounded-full blur-sm opacity-60"
                    style={{ background: "rgba(255,255,255,0.5)" }}
                  />

                  <CurrentIcon
                    style={{
                      color: "#ffffff",
                      width: 72,
                      height: 72,
                      filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.6))",
                    }}
                  />
                </motion.div>

                {/* 3D Object Ground Drop Shadow */}
                <div
                  className="w-36 h-4 rounded-full blur-md mt-6 opacity-60 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse, rgba(${currentService.accentHex},0.6) 0%, transparent 70%)`,
                  }}
                />

                {/* Bottom Center Caption (detto same: "Confidence, wrapped in warmth") */}
                <div className="mt-6 text-center z-10 max-w-xs">
                  <p className="text-slate-300 text-xs sm:text-sm font-serif italic tracking-wide">
                    {currentService.tagline}
                  </p>
                </div>
              </div>

              {/* ──────────────────────────────────────────────────────────
                  RIGHT COLUMN: Pricing / Metrics, Scope Selector, Next Item Thumbnail
              ────────────────────────────────────────────────────────── */}
              <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end h-full z-20">
                
                {/* Top Right Big Metric & Struck Benchmark (detto same: $149 / $199-) */}
                <div className="text-left lg:text-right mb-6">
                  <div className="flex items-baseline justify-start lg:justify-end gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight font-sans">
                      {currentService.metric}
                    </span>
                    <span className="text-slate-400 text-lg font-bold line-through">
                      {currentService.benchmark}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold block mt-1">
                    {currentService.metricLabel}
                  </span>
                </div>

                {/* Middle: Scope / Tier Selector (detto same: "Choose your size: 36 38 40") */}
                <div className="text-left lg:text-right mb-8 w-full">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                    Choose scope tier:
                  </span>
                  <div className="flex items-center justify-start lg:justify-end gap-2.5">
                    {currentService.scopes.map((scope, sIdx) => (
                      <button
                        key={scope}
                        onClick={() => setActiveScopeIndex(sIdx)}
                        className={`w-9 h-9 rounded-full text-xs font-mono font-bold flex items-center justify-center transition-all duration-200 cursor-pointer ${
                          sIdx === activeScopeIndex
                            ? "bg-white text-slate-950 shadow-lg scale-105"
                            : "bg-[#1d1b26] text-slate-300 border border-white/10 hover:border-white/30"
                        }`}
                      >
                        0{sIdx + 1}
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-purple-300 block mt-2 font-semibold">
                    Scope: {currentService.scopes[activeScopeIndex]} Delivery
                  </span>
                </div>

                {/* Bottom Right Next Service Thumbnail Preview Card (detto same as jacket thumbnail) */}
                <div
                  onClick={nextServiceFn}
                  className="group relative rounded-2xl bg-[#1d1b26] border border-white/12 p-3 flex items-center gap-3 cursor-pointer hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-xl self-start lg:self-end mt-auto max-w-[200px]"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `rgba(${nextService.accentHex},0.2)` }}
                  >
                    <NextIcon className="w-5 h-5" style={{ color: nextService.accent }} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase tracking-wider">
                      NEXT SERVICE
                    </span>
                    <span className="text-xs font-bold text-white truncate block group-hover:text-purple-300 transition-colors">
                      {nextService.label}
                    </span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform ml-auto shrink-0" />
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* Bottom Bar: Slide Counter Indicator */}
          <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[11px] font-mono text-slate-400">
            <span>ZYSTRA DIGITAL MARKETING SUITE</span>
            <span>
              {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
