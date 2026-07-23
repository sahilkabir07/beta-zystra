import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  Sparkles,
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
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function UnifiedEcosystem() {
  const [activeKeyId, setActiveKeyId] = useState<string>("COMMAND_ZYSTRA");

  const serviceKeys = [
    {
      id: "SEO",
      keyLegend: "F1",
      title: "Search Engine Optimisation (SEO)",
      shortLabel: "SEO & Search",
      category: "ORGANIC GROWTH",
      icon: Search,
      description: "Rank at the top of Google for high-intent buyer keywords. We combine technical SEO audits, keyword mapping, and authority link building for compounding organic revenue.",
      deliverables: ["Technical On-Page SEO", "Keyword Intent Mapping", "Authority Link Building", "Monthly Rank Reports"],
      metric: "+340% Organic Traffic",
      href: "/services/seo"
    },
    {
      id: "META_ADS",
      keyLegend: "F2",
      title: "Meta Ads (Facebook & Instagram)",
      shortLabel: "Meta Ads",
      category: "PAID SOCIAL",
      icon: Megaphone,
      description: "High-converting paid social campaigns targeting high-LTV customer segments with dynamic creative production and ROAS-driven budget scaling.",
      deliverables: ["Ad Creative & Copywriting", "Audience Targeting", "A/B Funnel Testing", "Retargeting Sequences"],
      metric: "4.5x Average ROAS",
      href: "/services/meta-ads"
    },
    {
      id: "GOOGLE_ADS",
      keyLegend: "F3",
      title: "Google Ads (PPC & YouTube)",
      shortLabel: "Google Ads",
      category: "SEARCH INTENT",
      icon: Cpu,
      description: "Capture buyers at the exact moment of search intent across Search, Display, and YouTube PPC ads with tracked attribution.",
      deliverables: ["High-Intent Search Ads", "Conversion Bid Tuning", "YouTube Campaigns", "Negative Keyword Shield"],
      metric: "-60% Acquisition Cost",
      href: "/services/google-ads"
    },
    {
      id: "LOCAL_SEO",
      keyLegend: "F4",
      title: "Google Business Profile & Local SEO",
      shortLabel: "Local Maps SEO",
      category: "LOCAL DOMINANCE",
      icon: MapPin,
      description: "Dominate 'near me' local search queries and rank in Google 3-Pack Map results so nearby customers call you first.",
      deliverables: ["Google Profile Optimization", "Citation Syndication", "Map 3-Pack Strategy", "Review Generation"],
      metric: "+180% Local Enquiries",
      href: "/services/gbp-local-seo"
    },
    {
      id: "VIDEO_PROD",
      keyLegend: "F5",
      title: "Video Production & Shoot",
      shortLabel: "Video Production",
      category: "BRAND MEDIA",
      icon: Video,
      description: "Story-driven video content, high-impact ad reels, and cinematic brand films engineered to capture attention and drive sales.",
      deliverables: ["Concept & Scriptwriting", "4K On-Site Filming", "Motion Graphics & Edit", "Multi-Ratio Ad Formats"],
      metric: "10x Video Engagement",
      href: "/services/video-shoot-production"
    },
    {
      id: "WEB_DEV",
      keyLegend: "TAB",
      title: "Website Design & Development",
      shortLabel: "Web Design & Dev",
      category: "CONVERSION ENGINE",
      icon: Code2,
      description: "Fast, mobile-first, high-converting websites engineered on modern React/Vite architecture — built to turn visitors into paying clients.",
      deliverables: ["UI/UX Custom Design", "Sub-1s Load Architecture", "SEO-Ready Code", "High-Converting Funnels"],
      metric: "Sub-1s Load Speed",
      href: "/services/website-designing"
    },
    {
      id: "BRANDING",
      keyLegend: "CAPS",
      title: "Logo Design & Branding",
      shortLabel: "Logo & Branding",
      category: "VISUAL IDENTITY",
      icon: Palette,
      description: "Premium, memorable brand identities — from logo design and color palettes to typography rules and full brand design guidelines.",
      deliverables: ["Primary & Secondary Logos", "Color & Typography Kits", "Brand Guidelines Book", "Vector Source Files"],
      metric: "100% Unified Identity",
      href: "/services/logo-designing"
    },
    {
      id: "SOCIAL_MEDIA",
      keyLegend: "SHIFT",
      title: "Social Media Management",
      shortLabel: "Social Management",
      category: "COMMUNITY GROWTH",
      icon: Users,
      description: "Consistent, high-quality content calendars that keep your brand top-of-mind across Instagram, LinkedIn, and Facebook.",
      deliverables: ["Monthly Content Calendar", "Graphic Design & Reels", "Persuasive Copywriting", "Community Management"],
      metric: "100k+ Organic Reach",
      href: "/services/social-media-management"
    },
    {
      id: "PERF_MKTG",
      keyLegend: "CTRL",
      title: "Performance Marketing",
      shortLabel: "Performance Mktg",
      category: "CROSS-CHANNEL",
      icon: Layers,
      description: "We connect paid ads, organic search, social media, and retention data into one unified growth engine driven by real-time ROI analytics.",
      deliverables: ["Cross-Channel Strategy", "Attribution Modeling", "Conversion Optimization", "Growth Scaling Roadmap"],
      metric: "Unified Cross-Channel ROAS",
      href: "/services/performance-marketing"
    },
    {
      id: "APP_DEV",
      keyLegend: "ALT",
      title: "Custom App Development",
      shortLabel: "Custom App Dev",
      category: "MOBILE & WEB APPS",
      icon: Smartphone,
      description: "Custom iOS, Android, and Web applications built for real users, speed, and backend scalability.",
      deliverables: ["Cross-Platform Mobile Apps", "API & Cloud Backends", "UI/UX App Wireframes", "Post-Launch Support"],
      metric: "Native App Performance",
      href: "/services/custom-app-development"
    },
    {
      id: "REVOPS",
      keyLegend: "FN",
      title: "RevOps & AI Automation",
      shortLabel: "RevOps & AI",
      category: "REVENUE ENGINE",
      icon: Workflow,
      description: "Align sales, marketing, and CRM workflows into one automated revenue generation pipeline.",
      deliverables: ["CRM Integration", "Sales Pipeline Automation", "AI Lead Scoring", "Cross-Team Dashboard"],
      metric: "Zero-Friction Sales Funnel",
      href: "/services/rev-ops-solutions"
    }
  ];

  const activeKey = serviceKeys.find((k) => k.id === activeKeyId) || {
    id: "COMMAND_ZYSTRA",
    keyLegend: "⌘",
    title: "Zystra Unified Full-Stack Ecosystem",
    shortLabel: "Zystra Unified",
    category: "FULL-STACK AGENCY",
    icon: Sparkles,
    description: "Why juggle five different vendors when Zystra brings every digital service under one roof? Every service works from the same strategy, the same brand voice, and the same real-time data — so your marketing compounds instead of competing with itself.",
    deliverables: ["Single Account Manager", "100% Unified Data & Messaging", "Zero Vendor Friction", "Compounding Marketing ROI"],
    metric: "1 Unified Growth Partner",
    href: "/#contact"
  };

  return (
    <section className="container mx-auto px-4 sm:px-8 max-w-6xl mb-24 select-none">
      
      {/* MAIN SECTION TITLE OUTSIDE ABOVE KEYBOARD */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
          Why a Full-Stack Agency Beats a Patchwork of Vendors
        </h2>
      </div>

      {/* SINGLE UNIFIED MECHANICAL KEYBOARD HOUSING */}
      <div className="rounded-3xl border-2 border-slate-800 bg-[#0d0e14] p-4 sm:p-7 shadow-[0_25px_70px_rgba(0,0,0,0.85)] flex flex-col gap-5">
        
        {/* 1. KEYBOARD INTEGRATED DISPLAY SCREEN */}
        <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#180933] via-[#0d041c] to-[#070210] p-4 sm:p-6 shadow-inner relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#6e019c]/15 rounded-full blur-[100px] pointer-events-none" />

          <AnimatePresence mode="wait">

            <motion.div
              key={activeKey.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center relative z-10"
            >
              {/* STRATEGY CONTENT */}
              <div className="lg:col-span-8 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#6e019c] border border-purple-400/40 flex items-center justify-center text-white shadow shrink-0">
                    <activeKey.icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-serif font-black text-white">
                    {activeKey.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed max-w-2xl">
                  {activeKey.description}
                </p>

                {/* DELIVERABLES micro-pills */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {activeKey.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] font-mono text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* IMPACT METRIC & ACTION */}
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-4 border-t lg:border-t-0 lg:border-l border-purple-500/20 pt-4 lg:pt-0 lg:pl-6">
                <div className="flex flex-col items-start lg:items-end">
                  <span className="text-[9px] font-mono text-purple-300 uppercase tracking-widest">ESTIMATED IMPACT</span>
                  <span className="text-xl sm:text-2xl font-black font-sans text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300 mt-1">
                    {activeKey.metric}
                  </span>
                </div>

                <Link href={activeKey.href} className="w-full lg:w-auto">
                  <span className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#6e019c] hover:bg-[#561d9a] text-white font-mono text-[11px] font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer border border-purple-400/40">
                    EXPLORE {activeKey.shortLabel}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 2. COMPACT 3D MECHANICAL KEYCAPS GRID (FIT IN ONE FRAME) */}
        <div className="flex flex-col gap-3 max-w-5xl mx-auto w-full">
          
          {/* ROW 1: F1 - F5 KEYS */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {serviceKeys.slice(0, 5).map((service) => {
              const isActive = activeKeyId === service.id;
              const IconComp = service.icon;
              return (
                <div key={service.id} className="p-[2px] bg-[#07080b] rounded-xl shadow-inner">
                  <button
                    onClick={() => setActiveKeyId(service.id)}
                    className={`w-full group relative rounded-lg p-2.5 transition-all duration-75 flex flex-col justify-between text-left cursor-pointer outline-none select-none ${
                      isActive
                        ? "translate-y-[3px] bg-gradient-to-b from-[#6e019c] to-[#4c016c] text-white border-t border-t-purple-300 border-b border-b-[#2a013d] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                        : "bg-gradient-to-b from-[#242738] via-[#1d1f2d] to-[#151722] hover:from-[#2a2e42] text-slate-200 border-t border-t-slate-400/30 border-b-[4px] border-b-[#08090c] border-x border-x-slate-700/30 shadow-sm active:translate-y-[3px] active:border-b"
                    }`}
                    style={{ minHeight: "72px" }}
                  >
                    <div className="flex items-center justify-between w-full mb-0.5">
                      <span className={`text-[9px] font-mono font-black px-1.5 py-0.5 rounded ${
                        isActive ? "bg-white/20 text-white" : "bg-black/50 text-purple-300 border border-white/5"
                      }`}>
                        {service.keyLegend}
                      </span>
                      <IconComp className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-400 group-hover:text-purple-300"}`} />
                    </div>

                    <span className="text-[11px] font-mono font-bold uppercase tracking-tight leading-tight truncate">
                      {service.shortLabel}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* ROW 2: TAB - FN KEYS */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2.5">
            {serviceKeys.slice(5, 11).map((service) => {
              const isActive = activeKeyId === service.id;
              const IconComp = service.icon;
              return (
                <div key={service.id} className="p-[2px] bg-[#07080b] rounded-xl shadow-inner">
                  <button
                    onClick={() => setActiveKeyId(service.id)}
                    className={`w-full group relative rounded-lg p-2.5 transition-all duration-75 flex flex-col justify-between text-left cursor-pointer outline-none select-none ${
                      isActive
                        ? "translate-y-[3px] bg-gradient-to-b from-[#6e019c] to-[#4c016c] text-white border-t border-t-purple-300 border-b border-b-[#2a013d] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                        : "bg-gradient-to-b from-[#242738] via-[#1d1f2d] to-[#151722] hover:from-[#2a2e42] text-slate-200 border-t border-t-slate-400/30 border-b-[4px] border-b-[#08090c] border-x border-x-slate-700/30 shadow-sm active:translate-y-[3px] active:border-b"
                    }`}
                    style={{ minHeight: "72px" }}
                  >
                    <div className="flex items-center justify-between w-full mb-0.5">
                      <span className={`text-[9px] font-mono font-black px-1.5 py-0.5 rounded ${
                        isActive ? "bg-white/20 text-white" : "bg-black/50 text-purple-300 border border-white/5"
                      }`}>
                        {service.keyLegend}
                      </span>
                      <IconComp className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-400 group-hover:text-purple-300"}`} />
                    </div>

                    <span className="text-[11px] font-mono font-bold uppercase tracking-tight leading-tight truncate">
                      {service.shortLabel}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* ROW 3: COMPACT MECHANICAL SPACEBAR KEYCAP */}
          <div className="pt-1">
            <div className="p-[2px] bg-[#07080b] rounded-xl shadow-inner">
              <button
                onClick={() => setActiveKeyId("COMMAND_ZYSTRA")}
                className={`w-full group relative rounded-lg h-12 sm:h-13 px-5 sm:px-8 transition-all duration-75 flex items-center justify-between cursor-pointer outline-none select-none ${
                  activeKeyId === "COMMAND_ZYSTRA"
                    ? "translate-y-[3px] bg-gradient-to-r from-[#6e019c] via-[#561d9a] to-[#450163] text-white border-t border-t-purple-300 border-b border-b-[#240134] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                    : "bg-gradient-to-r from-[#2c134d] via-[#210c3d] to-[#17072c] hover:from-[#36185f] text-white border-t border-t-purple-400/40 border-b-[4px] border-b-[#0b0317] border-x border-x-purple-500/20 shadow-sm active:translate-y-[3px] active:border-b"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-1 bg-purple-400/50 rounded-sm" />
                  <span className="text-[10px] font-mono font-black tracking-widest px-2 py-0.5 rounded bg-black/50 border border-white/10 text-purple-300">
                    ⌘ SPACEBAR
                  </span>
                </div>

                <span className="hidden md:block font-mono text-[11px] font-black uppercase tracking-[0.2em] text-white text-center">
                  ZYSTRA UNIFIED FULL-STACK ECOSYSTEM
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold text-purple-200 hidden sm:inline uppercase">
                    FULL ECOSYSTEM
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-300 group-hover:translate-x-1 transition-transform" />
                  <span className="w-2 h-1 bg-purple-400/50 rounded-sm" />
                </div>
              </button>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
