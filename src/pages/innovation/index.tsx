import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Sparkles,
  Zap,
  TrendingUp,
  Cpu,
  GraduationCap,
  Car,
  ShoppingBag,
  Megaphone,
  MessageSquareCode,
  ArrowRight,
  Phone,
  ArrowUpRight,
  Activity,
  Lightbulb,
  Compass,
  Database,
  ChevronRight,
  Check
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/shared/SEO";
import { Button } from "@/components/ui/button";
import FluidGlass from "@/components/ui/FluidGlass";

export default function InnovationPage() {
  // Page initialization
  useEffect(() => {
    document.documentElement.classList.add("dark");
    const isTouch = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.15,
      touchMultiplier: isTouch ? 0 : 1.0,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    window.scrollTo(0, 0);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Zystra Innovation",
    "url": "https://zystra.in/innovation",
    "description": "Explore Zystra's approach to AI-powered technology and product development, including ventures like Cursor SEO Academy, ZyRide, Trendora, and Awaaz Portal.",
    "about": {
      "@type": "Organization",
      "name": "Zystra",
      "url": "https://zystra.in"
    },
    "hasPart": [
      {
        "@type": "CreativeWork",
        "name": "Cursor SEO Academy",
        "url": "https://cursorseo.com",
        "description": "A digital marketing education platform with a Learn to Internship to Job Assistance model."
      },
      {
        "@type": "Thing",
        "name": "ZyRide",
        "description": "A mobility-tech concept in early development focused on smarter ride-hailing and transport solutions."
      },
      {
        "@type": "Thing",
        "name": "Trendora",
        "description": "A digital commerce and trend-discovery concept in early-stage development."
      },
      {
        "@type": "Thing",
        "name": "Awaaz Portal",
        "description": "A social-impact anonymous reporting platform built around privacy and trust."
      }
    ]
  };

  const [activeVenture, setActiveVenture] = useState(0);

  const ventures = [
    {
      title: "Cursor SEO Academy",
      category: "EdTech & AI Skills",
      watermark: "CURSOR",
      status: "Live",
      statusColor: "bg-emerald-500/20 border-emerald-500/30 text-emerald-300",
      themeBg: "bg-gradient-to-br from-[#0c1435] via-[#151d4f] to-[#0a0f28]",
      borderBg: "border-indigo-500/40 hover:border-indigo-400/80",
      accentColor: "text-indigo-300",
      badgeBg: "bg-indigo-950/80 border-indigo-500/40 text-indigo-200",
      description: "A digital marketing education platform offering a structured Learn → Internship → Job Assistance model — helping learners move from foundational skills to real industry experience in SEO, performance marketing, and growth.",
      icon: GraduationCap,
      linkText: "Visit Cursor SEO Academy",
      href: "https://cursorseo.com",
      isExternal: true
    },
    {
      title: "ZyRide",
      category: "Mobility Tech",
      watermark: "ZYRIDE",
      status: "In Development",
      statusColor: "bg-amber-500/20 border-amber-500/30 text-amber-300",
      themeBg: "bg-gradient-to-br from-[#07241c] via-[#0e3b2e] to-[#051a14]",
      borderBg: "border-emerald-500/40 hover:border-emerald-400/80",
      accentColor: "text-emerald-300",
      badgeBg: "bg-emerald-950/80 border-emerald-500/40 text-emerald-200",
      description: "A mobility-tech concept exploring smarter, more reliable ride-hailing and transport solutions. ZyRide is in early development, with a focus on building a dependable, user-first riding experience.",
      icon: Car,
      linkText: "Explore Concept",
      href: "#",
      isExternal: false
    },
    {
      title: "Trendora",
      category: "Commerce AI",
      watermark: "TRENDORA",
      status: "In Development",
      statusColor: "bg-amber-500/20 border-amber-500/30 text-amber-300",
      themeBg: "bg-gradient-to-br from-[#3b0928] via-[#5c103e] to-[#28061a]",
      borderBg: "border-rose-500/40 hover:border-rose-400/80",
      accentColor: "text-rose-300",
      badgeBg: "bg-rose-950/80 border-rose-500/40 text-rose-200",
      description: "A digital commerce and trend-discovery concept currently in early-stage development, built around helping users discover and engage with what's trending using predictive analytics.",
      icon: ShoppingBag,
      linkText: "Explore Concept",
      href: "#",
      isExternal: false
    },
    {
      title: "Awaaz Portal",
      category: "Civic Tech",
      watermark: "AWAAZ",
      status: "In Development",
      statusColor: "bg-amber-500/20 border-amber-500/30 text-amber-300",
      themeBg: "bg-gradient-to-br from-[#2a0b45] via-[#411466] to-[#1c0730]",
      borderBg: "border-purple-500/40 hover:border-purple-400/80",
      accentColor: "text-purple-300",
      badgeBg: "bg-purple-950/80 border-purple-500/40 text-purple-200",
      description: "A social-impact technology platform designed to give people a safe, anonymous way to voice concerns within local ecosystems — built with privacy, trust, and transparency.",
      icon: MessageSquareCode,
      linkText: "Explore Concept",
      href: "#",
      isExternal: false
    }
  ];

  const buildSteps = [
    {
      step: "PHASE 01",
      title: "Identify a Real Gap",
      subtitle: "Uncovering unsolved opportunities, not chasing temporary hype.",
      features: [
        "In-depth market gap analysis",
        "Audience pain-point mapping",
        "Strategic feasibility study",
        "Zero artificial feature bloat"
      ],
      pillText: "Discover Gap"
    },
    {
      step: "PHASE 02",
      title: "Validate Before Building",
      subtitle: "Rigorously validating logic before writing a single line of code.",
      features: [
        "Rapid prototype wireframing",
        "User intent & demand testing",
        "Technical architecture review",
        "Data-backed roadmap plan"
      ],
      pillText: "Validate Intent"
    },
    {
      step: "PHASE 03",
      title: "Build Lean, Launch Fast",
      subtitle: "Deploying high-impact MVPs to gather real user feedback early.",
      features: [
        "Agile sprint development",
        "Clean scalable codebases",
        "Continuous CI/CD pipeline",
        "Immediate user feedback loops"
      ],
      pillText: "Ship MVP"
    },
    {
      step: "PHASE 04",
      title: "Iterate With Data",
      subtitle: "Refining every product continuously using real analytics.",
      features: [
        "Real-time usage telemetry",
        "Conversion funnel optimization",
        "A/B feature performance tests",
        "Scalable cloud infrastructure"
      ],
      pillText: "Scale Platform"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans selection:bg-brand-vibrant/30 selection:text-white">
      <SEO
        title="Innovation | What We're Building Next — Zystra"
        description="Zystra isn't just an agency — we build technology. Explore our ventures including Cursor SEO Academy, ZyRide, Trendora, and Awaaz Portal."
        canonicalUrl="https://zystra.in/innovation"
        schema={seoSchema}
      />

      <Navbar />

      {/* Decorative Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute -top-[15%] left-[5%] w-[800px] h-[800px] bg-brand-dark/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-[25%] -right-[10%] w-[700px] h-[700px] bg-brand-vibrant/10 rounded-full blur-[160px]" />
      </div>

      {/* HERO SECTION — 100% ORIGINAL ON DESKTOP, CUSTOM RESPONSIVE ON MOBILE */}
      <section className="w-full bg-white text-slate-900 pt-20 md:pt-20 pb-8 md:pb-4 px-4 sm:px-12 lg:px-16 relative overflow-hidden min-h-[92vh] md:h-screen md:max-h-screen flex flex-col justify-between z-10 select-none">
        
        {/* DESKTOP-ONLY TOP-RIGHT FLOATING LAPTOP MOCKUP (100% ORIGINAL) */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="hidden md:block absolute top-[8%] right-[3%] z-20 w-[24vw] max-w-[420px] min-w-[220px] pointer-events-none transform-gpu drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
        >
          <img
            src="/innovations/laptop.webp"
            alt="Zystra Innovation Laptop"
            style={{ animation: "heroFloat1 6s ease-in-out infinite" }}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* GIANT VERTICAL TYPOGRAPHY */}
        <div className="relative z-20 max-w-full w-full select-none pt-2 md:pt-1 my-auto">
          
          {/* FLOATING SMARTPHONE MOCKUP (MOBILE: RIGHT SIDE / DESKTOP: 100% ORIGINAL CENTER-LEFT POSITION) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: -10 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="absolute top-[18%] right-[5%] sm:right-[8%] md:top-[34%] sm:md:top-[36%] lg:md:top-[38%] md:left-[36%] sm:md:left-[41%] lg:md:left-[45%] md:right-auto z-40 w-[22vw] sm:w-[16vw] md:w-[13.5vw] max-w-[115px] md:max-w-[205px] min-w-[75px] md:min-w-[105px] transform-gpu pointer-events-auto cursor-pointer drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] md:drop-shadow-[0_25px_50px_rgba(0,0,0,0.22)]"
          >
            <img
              src="/innovations/mobile.webp"
              alt="Zystra Innovation Mobile App"
              style={{ animation: "heroFloat1 5s ease-in-out infinite reverse" }}
              className="w-full h-auto object-contain opacity-95 md:opacity-100"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-sans font-black tracking-[-0.06em] md:tracking-tighter text-[#6e019c] uppercase text-[clamp(3.85rem,16.8vw,26vh)] md:text-[clamp(2.5rem,11.5vw,20vh)] leading-[0.74] sm:leading-[0.80] md:leading-[0.88] text-left w-full max-w-full pr-1 md:pr-0 overflow-hidden"
          >
            <span className="block">We don't</span>
            <span className="block">just market.</span>
            <span className="block">We build</span>
            <span className="block text-[clamp(2.8rem,12.5vw,20vh)] md:text-inherit tracking-[-0.07em] md:tracking-inherit">technology.</span>
          </motion.h1>
        </div>

        {/* MOBILE-ONLY SLEEK COMPACT LAPTOP MOCKUP POSITIONED DIRECTLY BELOW THE TITLE */}
        <div className="block md:hidden relative w-full my-2 z-30 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative w-full max-w-[240px] mx-auto flex justify-center"
          >
            <img
              src="/innovations/laptop.webp"
              alt="Zystra Innovation Laptop"
              style={{ animation: "heroFloat1 5s ease-in-out infinite" }}
              className="w-[56vw] max-w-[190px] h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.14)]"
            />
          </motion.div>
        </div>

        {/* SUBTITLE CAPTION & CTA BUTTON (MOBILE: FLEX FLOW / DESKTOP: 100% ORIGINAL BOTTOM-RIGHT POSITION) */}
        <div className="relative md:absolute right-0 md:right-[3%] bottom-0 md:bottom-[6%] z-40 w-full md:w-[26vw] max-w-full md:max-w-[360px] md:min-w-[240px] flex flex-col items-start md:items-end text-left md:text-right gap-3 sm:gap-3.5 mt-4 md:mt-0 pointer-events-auto pb-4 md:pb-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs sm:text-sm font-sans font-medium text-slate-700 leading-relaxed md:leading-snug max-w-lg md:max-w-none"
          >
            Beyond client campaigns, Zystra invests in technology — products, platforms, and tools built using AI and data to solve real problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button
              onClick={() => {
                const el = document.getElementById("ventures-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#6e019c] hover:bg-[#56017a] text-white font-sans font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-lg shadow-purple-950/20 hover:scale-105 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Our Ventures</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

      </section>

      <main className="relative z-10 pb-20">

        {/* SECTION 2 — WHY WE BUILD TECHNOLOGY */}
        <section className="w-full bg-[#09031a] relative overflow-hidden flex flex-col z-10">
          
          {/* Ambient Purple Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[110px] pointer-events-none" />

          {/* ===== HERO FRAME: TITLE & IMAGE INTEGRATED WITHOUT OVERLAP ===== */}
          <div className="relative w-full flex flex-col bg-white pt-20 sm:pt-24 pb-4 items-center group">
            
            {/* Connected Background Thread (matching reference image layout) */}
            <div className="absolute left-[2%] sm:left-[4%] top-[8%] bottom-[12%] w-[120px] sm:w-[150px] hidden md:flex flex-col justify-between items-start pointer-events-none select-none z-10 opacity-70">
              <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 100 800" preserveAspectRatio="none">
                <path
                  d="M10,20 Q80,240 20,480 T80,780"
                  className="stroke-purple-500/25"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Node 1: strategy */}
              <div className="relative left-[5px] flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-purple-500 relative flex items-center justify-center">
                  <span className="absolute w-4 h-4 rounded-full bg-purple-500/25 animate-ping" />
                </div>
                <span className="text-[9px] font-mono tracking-tight text-purple-600 bg-purple-50/80 border border-purple-200/50 px-2 py-0.5 rounded shadow-2xs">
                  strategy
                </span>
              </div>

              {/* Node 2: identity */}
              <div className="relative left-[28px] flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-purple-500 relative flex items-center justify-center">
                  <span className="absolute w-3 h-3 rounded-full bg-purple-500/25 animate-pulse" />
                </div>
                <span className="text-[9px] font-mono tracking-tight text-purple-600 bg-purple-50/80 border border-purple-200/50 px-2 py-0.5 rounded shadow-2xs">
                  identity
                </span>
              </div>

              {/* Node 3: connect */}
              <div className="relative left-[8px] flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-purple-500 relative flex items-center justify-center">
                  <span className="absolute w-3 h-3 rounded-full bg-purple-500/25 animate-pulse" />
                </div>
                <span className="text-[9px] font-mono tracking-tight text-purple-600 bg-purple-50/80 border border-purple-200/50 px-2 py-0.5 rounded shadow-2xs">
                  connect
                </span>
              </div>

              {/* Node 4: impact */}
              <div className="relative left-[32px] flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-purple-500 relative flex items-center justify-center">
                  <span className="absolute w-3 h-3 rounded-full bg-purple-500/25 animate-pulse" />
                </div>
                <span className="text-[9px] font-mono tracking-tight text-purple-600 bg-purple-50/80 border border-purple-200/50 px-2 py-0.5 rounded shadow-2xs">
                  impact
                </span>
              </div>
            </div>

            {/* Connected Background Thread - Right Side */}
            <div className="absolute right-[2%] sm:right-[4%] top-[8%] bottom-[12%] w-[120px] sm:w-[150px] hidden md:flex flex-col justify-between items-end pointer-events-none select-none z-10 opacity-70">
              <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 100 800" preserveAspectRatio="none">
                <path
                  d="M90,20 Q20,240 80,480 T20,780"
                  className="stroke-purple-500/25"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Node 1: research */}
              <div className="relative right-[5px] flex items-center gap-1.5">
                <span className="text-[9px] font-mono tracking-tight text-purple-600 bg-purple-50/80 border border-purple-200/50 px-2 py-0.5 rounded shadow-2xs">
                  research
                </span>
                <div className="w-2 h-2 rounded-full bg-purple-500 relative flex items-center justify-center">
                  <span className="absolute w-4 h-4 rounded-full bg-purple-500/25 animate-ping" />
                </div>
              </div>

              {/* Node 2: architecture */}
              <div className="relative right-[28px] flex items-center gap-1.5">
                <span className="text-[9px] font-mono tracking-tight text-purple-600 bg-purple-50/80 border border-purple-200/50 px-2 py-0.5 rounded shadow-2xs">
                  architecture
                </span>
                <div className="w-2 h-2 rounded-full bg-purple-500 relative flex items-center justify-center">
                  <span className="absolute w-3 h-3 rounded-full bg-purple-500/25 animate-pulse" />
                </div>
              </div>

              {/* Node 3: development */}
              <div className="relative right-[8px] flex items-center gap-1.5">
                <span className="text-[9px] font-mono tracking-tight text-purple-600 bg-purple-50/80 border border-purple-200/50 px-2 py-0.5 rounded shadow-2xs">
                  development
                </span>
                <div className="w-2 h-2 rounded-full bg-purple-500 relative flex items-center justify-center">
                  <span className="absolute w-3 h-3 rounded-full bg-purple-500/25 animate-pulse" />
                </div>
              </div>

              {/* Node 4: delivery */}
              <div className="relative right-[32px] flex items-center gap-1.5">
                <span className="text-[9px] font-mono tracking-tight text-purple-600 bg-purple-50/80 border border-purple-200/50 px-2 py-0.5 rounded shadow-2xs">
                  delivery
                </span>
                <div className="w-2 h-2 rounded-full bg-purple-500 relative flex items-center justify-center">
                  <span className="absolute w-3 h-3 rounded-full bg-purple-500/25 animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* TITLE BLOCK (inline flow, zero overlap possible) */}
            <div className="w-full flex flex-col items-center text-center select-none z-10 px-4 mb-6 sm:mb-8">
              <span className="text-[9px] sm:text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-1 bg-slate-100 px-2.5 py-0.5 rounded-full">
                R&D Commitment
              </span>
              <h2 className="font-sans font-black tracking-tighter uppercase flex flex-col items-center leading-[0.92] sm:leading-[0.95]">
                <span className="text-[#1a1a1a] text-[clamp(1.2rem,4.2vw,3.8rem)] font-extrabold tracking-tight">
                  WHY A MARKETING
                </span>
                <span className="text-[#6e019c] text-[clamp(1.4rem,4.8vw,4.2rem)] font-black tracking-tight mt-0.5 sm:mt-1">
                  AGENCY INVESTS
                </span>
                <span className="text-[#6e019c] text-[clamp(1.4rem,4.8vw,4.2rem)] font-black tracking-tight">
                  IN TECHNOLOGY.
                </span>
              </h2>
            </div>

            {/* The Banner Image */}
            <div className="relative w-full max-h-[50vh] sm:max-h-[55vh] flex justify-center items-center overflow-hidden">
              <img
                src="/innovations/innovation-banner.webp"
                alt="Zystra Innovation Branding & Technology Banner"
                className="w-auto h-full max-h-[50vh] sm:max-h-[55vh] object-contain group-hover:scale-[1.01] transition-transform duration-700"
              />
            </div>

          </div>

          {/* ===== BOTTOM CONTENT: PHILOSOPHY SHOWCASE ===== */}
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-16 pb-16 lg:pt-20 lg:pb-24 relative z-10">
            
            {/* 3D TILTED POSTER CARDS SHOWCASE (COMPACT SINGLE-FRAME CONTAINER) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center select-none">
              
              {/* LEFT COLUMN: GIANT NUMBER + PHILOSOPHY TITLE + DESCRIPTION (COMPACT FIT) */}
              <div className="lg:col-span-5 flex flex-col justify-center select-text relative z-10">
                
                {/* FAINT FLOATING BACKGROUND MINI POSTER */}
                <div className="absolute -left-10 bottom-[-20px] w-32 h-44 bg-emerald-600/25 rounded-lg transform -rotate-25 blur-[1px] opacity-20 pointer-events-none hidden md:block" />
                
                <div className="flex flex-col items-start gap-0">
                  {/* GIANT 3 NUMBER */}
                  <span className="font-sans font-black text-[110px] sm:text-[140px] lg:text-[160px] leading-[0.78] tracking-tighter text-white select-none opacity-95 drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
                    3
                  </span>
                </div>
                
                <div className="flex flex-col gap-2.5 mt-3">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-purple-400 uppercase">
                    CORE SYSTEM
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-black text-white uppercase tracking-tight leading-[0.98]">
                    OUR TECHNOLOGY PHILOSOPHY
                  </h2>
                  <p className="text-slate-400 text-xs sm:text-sm font-normal leading-relaxed mt-1 max-w-md">
                    Beyond client campaigns, Zystra invests in technology — products, platforms, and tools built using AI and data to solve real problems.
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN: EXACTLY 3 TILTED POSTER CARDS SHOWCASE (ZYSTRA BRAND THEME COLORS) */}
              <div className="lg:col-span-7 relative min-h-[400px] sm:min-h-[440px] flex items-center justify-center lg:justify-end pr-0 lg:pr-4 mt-4 lg:mt-0">
                
                {/* POSTER CARD 3 — Data-Driven Iteration (Bottom Layer: Crisp White Poster Theme) */}
                <motion.div
                  initial={{ opacity: 0, rotate: 18, y: 40 }}
                  whileInView={{ opacity: 1, rotate: 16, y: 0 }}
                  whileHover={{ rotate: 0, scale: 1.07, y: -8, zIndex: 50 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="absolute top-[32%] right-[4%] sm:right-[6%] w-[235px] sm:w-[275px] h-[295px] sm:h-[335px] bg-gradient-to-br from-white via-slate-50 to-purple-50/40 text-slate-950 rounded-[22px] p-5 sm:p-6 border border-slate-200/90 z-10 transform-gpu cursor-pointer group flex flex-col justify-between"
                  style={{
                    boxShadow: "22px 32px 65px -5px rgba(0, 0, 0, 0.8), 0 8px 18px -4px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.95)"
                  }}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-mono uppercase font-black tracking-widest text-slate-950 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full">
                      PILLAR 03 • ANALYTICS
                    </span>
                    <Database className="w-4.5 h-4.5 text-[#6e019c]" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl sm:text-[28px] font-sans font-black tracking-tighter text-slate-950 uppercase leading-none mb-2 group-hover:text-[#6e019c] transition-colors">
                      DATA-DRIVEN ITERATION
                    </h3>
                    <p className="text-[11px] text-slate-700 font-medium leading-relaxed">
                      Every product we build is refined continuously using real usage analytics, not guesswork.
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-[#6e019c] uppercase tracking-widest font-bold">Usage Insights</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6e019c] animate-pulse" />
                  </div>
                </motion.div>

                {/* POSTER CARD 2 — Build Lean, Ship Fast (Middle Layer: Zystra Deep Brand Violet Theme, NO Yellow) */}
                <motion.div
                  initial={{ opacity: 0, rotate: -10, y: 30 }}
                  whileInView={{ opacity: 1, rotate: -8, y: 0 }}
                  whileHover={{ rotate: 0, scale: 1.07, y: -8, zIndex: 50 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="absolute top-[16%] right-[18%] sm:right-[23%] w-[240px] sm:w-[280px] h-[300px] sm:h-[340px] bg-gradient-to-br from-[#6e019c] via-[#56017a] to-[#36004d] text-white rounded-[22px] p-5 sm:p-6 border border-purple-400/40 z-20 transform-gpu cursor-pointer group flex flex-col justify-between"
                  style={{
                    boxShadow: "-18px 28px 60px -5px rgba(0, 0, 0, 0.75), 0 8px 18px -4px rgba(0, 0, 0, 0.45), inset 0 1px 2px rgba(255, 255, 255, 0.25)"
                  }}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-mono uppercase font-black tracking-widest text-slate-950 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full shadow-xs">
                      PILLAR 02 • VELOCITY
                    </span>
                    <Zap className="w-4.5 h-4.5 text-white" />
                  </div>
                  
                  {/* Geometric art accent line */}
                  <div className="w-10 h-1 bg-white/40 rounded-full my-1" />

                  <div>
                    <h3 className="text-2xl sm:text-[28px] font-sans font-black tracking-tighter text-white uppercase leading-none mb-2 group-hover:text-purple-200 transition-colors">
                      BUILD LEAN, SHIP FAST
                    </h3>
                    <p className="text-[11px] text-purple-100/90 font-medium leading-relaxed">
                      We favour practical, deployable MVPs over long dev cycles. Real user feedback early — always.
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-purple-400/25 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-purple-200 uppercase tracking-widest font-semibold">Rapid Deploy</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  </div>
                </motion.div>

                {/* POSTER CARD 1 — AI-First Thinking (Top Frontmost Layer: Crisp White & Brand Purple Theme) */}
                <motion.div
                  initial={{ opacity: 0, rotate: 10, y: 20 }}
                  whileInView={{ opacity: 1, rotate: 9, y: 0 }}
                  whileHover={{ rotate: 0, scale: 1.07, y: -8, zIndex: 50 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="absolute top-[2%] right-[2%] sm:right-[5%] w-[245px] sm:w-[285px] h-[310px] sm:h-[350px] bg-gradient-to-br from-white via-slate-50 to-purple-50/50 text-slate-950 rounded-[22px] p-5 sm:p-6 border border-purple-200 z-30 transform-gpu cursor-pointer group flex flex-col justify-between"
                  style={{
                    boxShadow: "20px 30px 60px -5px rgba(0, 0, 0, 0.75), 0 8px 18px -4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.95)"
                  }}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-mono uppercase font-bold tracking-widest text-[#6e019c] bg-purple-100 border border-purple-200 px-2.5 py-0.5 rounded-full">
                      PILLAR 01 • AI CORE
                    </span>
                    <Cpu className="w-4.5 h-4.5 text-[#6e019c]" />
                  </div>

                  {/* Big Stylized Monogram artwork in Zystra Brand Purple */}
                  <div className="flex items-center justify-center my-0.5">
                    <span className="font-sans font-black text-6xl sm:text-7xl tracking-tighter text-[#6e019c] uppercase italic leading-none group-hover:scale-110 transition-transform">
                      AI
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-[28px] font-sans font-black tracking-tighter text-slate-950 uppercase leading-none mb-1.5 group-hover:text-[#6e019c] transition-colors">
                      AI-FIRST THINKING
                    </h3>
                    <p className="text-[11px] text-slate-600 font-medium leading-snug">
                      Embedded in how we work — from ad optimization to content, AI powers everything.
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-purple-100 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-[#6e019c] uppercase tracking-widest font-bold">Native AI Workflows</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6e019c] animate-pulse" />
                  </div>
                </motion.div>

              </div>

            </div>

          </div>
        </section>

        {/* SECTION 3 — OUR VENTURES */}
        <section id="ventures-section" className="container mx-auto px-6 sm:px-12 max-w-7xl mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-vibrant uppercase">
              Current Focus
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">
              Our Ventures
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-medium">
              From education to mobility to social impact, here's a glimpse into what we're building beyond client work.
            </p>
          </div>

          {/* EXPANDING HORIZONTAL ACCORDION CARDS CONTAINER (ULTRA-PREMIUM LUXURY GLASSMORPHISM) */}
          <div className="w-full flex flex-col lg:flex-row gap-4 sm:gap-5 h-auto lg:h-[500px] select-none">
            {ventures.map((venture, idx) => {
              const isExpanded = activeVenture === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveVenture(idx)}
                  onClick={() => setActiveVenture(idx)}
                  className={`relative rounded-[28px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer border backdrop-blur-2xl transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${venture.themeBg} ${venture.borderBg} ${
                    isExpanded
                      ? "lg:flex-[4] z-20 scale-[1.01]"
                      : "lg:flex-[1] opacity-80 hover:opacity-100 z-10"
                  }`}
                  style={{
                    boxShadow: isExpanded
                      ? "0 30px 70px -10px rgba(0, 0, 0, 0.9), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)"
                      : "0 10px 30px -5px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)"
                  }}
                >
                  {/* Watermark text background */}
                  <span className={`absolute -bottom-6 -right-6 font-sans font-black text-8xl sm:text-9xl tracking-tighter text-white/10 uppercase select-none pointer-events-none transition-all duration-500 ${isExpanded ? "opacity-15 scale-110" : "opacity-5"}`}>
                    {venture.watermark}
                  </span>

                  {/* Ambient Glow Light on Active Card */}
                  {isExpanded && (
                    <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
                  )}

                  {/* TOP ROW: ICON + STATUS + CATEGORY */}
                  <div className="flex items-start justify-between z-10 w-full">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border backdrop-blur-md ${venture.badgeBg} transition-transform duration-300 ${isExpanded ? "scale-110 shadow-lg" : ""}`}>
                        <venture.icon className={`w-6 h-6 ${venture.accentColor}`} />
                      </div>
                      {isExpanded && (
                        <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-3.5 py-1 rounded-full border backdrop-blur-md ${venture.badgeBg} animate-fadeIn`}>
                          {venture.category}
                        </span>
                      )}
                    </div>

                    <span className={`text-[10px] font-mono px-3 py-1 rounded-full border uppercase font-bold tracking-wider backdrop-blur-md ${venture.statusColor}`}>
                      {venture.status}
                    </span>
                  </div>

                  {/* MIDDLE CONTENT FOR COLLAPSED CARD: SLEEK VERTICAL TITLE */}
                  {!isExpanded && (
                    <div className="hidden lg:flex items-center justify-center my-auto z-10">
                      <span className="[writing-mode:vertical-rl] rotate-180 font-serif font-bold text-xl text-slate-300/90 tracking-wider uppercase transition-colors group-hover:text-white">
                        {venture.title}
                      </span>
                    </div>
                  )}

                  {/* BOTTOM CONTENT FOR EXPANDED CARD */}
                  <div className="mt-8 lg:mt-auto z-10 flex flex-col justify-end w-full">
                    {/* TITLE */}
                    <h3 className={`font-serif font-bold text-white transition-all duration-300 ${isExpanded ? "text-2xl sm:text-3xl lg:text-4xl mb-3 tracking-tight" : "text-xl mb-1 text-slate-200 lg:hidden"}`}>
                      {venture.title}
                    </h3>

                    {/* EXPANDED DETAILS */}
                    {isExpanded ? (
                      <div className="flex flex-col gap-6 animate-fadeIn duration-300">
                        <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-normal max-w-xl">
                          {venture.description}
                        </p>

                        {venture.linkText && (
                          <div className="pt-4 border-t border-white/15 flex items-center justify-between w-full">
                            {venture.isExternal ? (
                              <a
                                href={venture.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-xs font-mono font-bold ${venture.accentColor} hover:text-white flex items-center gap-2 group/link cursor-pointer bg-white/10 px-4 py-2 rounded-xl border border-white/15 hover:bg-white/20 transition-all`}
                              >
                                {venture.linkText}
                                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                              </a>
                            ) : (
                              <span className={`text-xs font-mono font-bold ${venture.accentColor} flex items-center gap-2 group/link cursor-pointer bg-white/10 px-4 py-2 rounded-xl border border-white/15 hover:bg-white/20 transition-all`}>
                                {venture.linkText}
                                <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                              </span>
                            )}

                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
                              Zystra Venture
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* COLLAPSED PREVIEW FOOTER */
                      <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/10 lg:hidden">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Tap to view</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4 — FEATURED INNOVATION RESEARCH & WORK (MATCHING REFERENCE IMAGE UI) */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-28">
          
          {/* STAT BAR HEADER (MATCHING TOP BAR IN REFERENCE IMAGE) */}
          <div className="w-full rounded-2xl border border-slate-800/80 bg-slate-950/60 backdrop-blur-xl p-6 sm:p-8 mb-12 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800/60 select-text">
            <div className="flex flex-col items-center text-center pt-2 md:pt-0">
              <Sparkles className="w-5 h-5 text-purple-400 mb-2" />
              <span className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight">4+</span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mt-1">Active R&D Labs</span>
            </div>
            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <Cpu className="w-5 h-5 text-indigo-400 mb-2" />
              <span className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight">100%</span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mt-1">Native AI Core</span>
            </div>
            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <Activity className="w-5 h-5 text-emerald-400 mb-2" />
              <span className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight">3+</span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mt-1">Shipped Products</span>
            </div>
            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <Compass className="w-5 h-5 text-rose-400 mb-2" />
              <span className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight">24/7</span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mt-1">Continuous R&D</span>
            </div>
          </div>

          {/* SECTION HEADER ROW (MATCHING REFERENCE IMAGE HEADER) */}
          <div className="flex items-end justify-between mb-8 select-text">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase block mb-1">
                FEATURED R&D WORK
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
                What We're Building Next
              </h2>
            </div>
            <a href="#contact-section" className="text-xs font-mono font-bold text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors hidden sm:flex">
              EXPLORE ALL RESEARCH
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* 3 FEATURED WORK CARDS GRID (EXACT REFERENCE IMAGE 3-COLUMN MATCH) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 select-none">
            
            {/* CARD 1 — Finance/Analytics Dashboard Mockup Card */}
            <div className="group relative rounded-3xl border border-slate-800 bg-slate-950/70 p-6 flex flex-col justify-between hover:border-purple-500/50 hover:bg-slate-900/60 transition-all duration-300 backdrop-blur-xl shadow-xl">
              <div>
                {/* Visual Image / Mockup Box */}
                <div className="relative h-48 sm:h-52 w-full rounded-2xl bg-gradient-to-br from-slate-900 via-[#100d29] to-slate-950 border border-slate-800 p-5 flex flex-col justify-between overflow-hidden mb-6 group-hover:border-purple-500/40 transition-all duration-500">
                  {/* Subtle Grid Art Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px]" />
                  
                  <div className="flex justify-between items-center z-10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[9px] font-mono text-purple-300 bg-purple-950/80 border border-purple-500/30 px-2 py-0.5 rounded">AI DASHBOARD</span>
                  </div>

                  {/* Dashboard Preview Graphic inside Card 1 */}
                  <div className="z-10 bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 shadow-2xl group-hover:translate-y-[-2px] transition-transform duration-500">
                    <span className="text-[10px] font-mono text-slate-400 block mb-0.5">Analytics Engine</span>
                    <span className="text-xl font-sans font-bold text-white tracking-tight">$24,850.00</span>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
                      <div className="w-[78%] h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-sans font-black text-white uppercase tracking-tight leading-tight group-hover:text-purple-300 transition-colors">
                  AI Analytics Dashboard
                </h3>
                <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase block mt-2">
                  UI/UX DESIGN • WEB APPLICATION
                </span>
                <p className="text-xs text-slate-400 leading-relaxed font-normal mt-2">
                  Autonomous ad performance optimization, ROI tracking, and predictive keyword engine.
                </p>
              </div>

              {/* Bottom Row with Circular Arrow Button */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-800/80">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">Active R&D</span>
                <div className="w-11 h-11 rounded-full border border-slate-700 bg-slate-900/90 text-white flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-500 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* CARD 2 — 3D Metallic Sculpture Branding Card */}
            <div className="group relative rounded-3xl border border-slate-800 bg-slate-950/70 p-6 flex flex-col justify-between hover:border-purple-500/50 hover:bg-slate-900/60 transition-all duration-300 backdrop-blur-xl shadow-xl">
              <div>
                {/* Visual Image / Graphic Box */}
                <div className="relative h-48 sm:h-52 w-full rounded-2xl bg-gradient-to-br from-slate-900 via-[#1f0a2e] to-slate-950 border border-slate-800 p-5 flex items-center justify-center overflow-hidden mb-6 group-hover:border-purple-500/40 transition-all duration-500">
                  {/* Glowing 3D Fluid Sculpture Graphic */}
                  <div className="absolute w-32 h-32 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 blur-[2px] shadow-[0_0_60px_rgba(168,85,247,0.5)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-700" />
                  
                  <div className="z-10 text-center select-none">
                    <span className="font-serif font-black text-2xl text-white tracking-tight uppercase leading-none block drop-shadow-md">
                      Elevate
                    </span>
                    <span className="font-serif font-black text-2xl text-purple-200 tracking-tight uppercase leading-none block drop-shadow-md">
                      Your Brand
                    </span>
                  </div>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-sans font-black text-white uppercase tracking-tight leading-tight group-hover:text-purple-300 transition-colors">
                  Design & Brand System
                </h3>
                <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase block mt-2">
                  WEBSITE DESIGN • BRANDING
                </span>
                <p className="text-xs text-slate-400 leading-relaxed font-normal mt-2">
                  Modern 3D web aesthetics, glassmorphic UI, and responsive digital identity systems.
                </p>
              </div>

              {/* Bottom Row with Circular Arrow Button */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-800/80">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">Active R&D</span>
                <div className="w-11 h-11 rounded-full border border-slate-700 bg-slate-900/90 text-white flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-500 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* CARD 3 — Mobile App Transit Mockup Card */}
            <div className="group relative rounded-3xl border border-slate-800 bg-slate-950/70 p-6 flex flex-col justify-between hover:border-purple-500/50 hover:bg-slate-900/60 transition-all duration-300 backdrop-blur-xl shadow-xl">
              <div>
                {/* Visual Image / Phone Mockup Box */}
                <div className="relative h-48 sm:h-52 w-full rounded-2xl bg-gradient-to-br from-slate-900 via-[#071f1a] to-slate-950 border border-slate-800 p-4 flex items-center justify-between overflow-hidden mb-6 group-hover:border-emerald-500/40 transition-all duration-500">
                  
                  <div className="z-10 pl-2">
                    <span className="font-serif font-black text-xl text-white tracking-tight uppercase leading-tight block">
                      ZyRide OS
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 block mt-1">Smart Transit</span>
                  </div>

                  {/* Phone Frame graphic standing vertically */}
                  <div className="w-28 h-40 bg-slate-950 border-2 border-slate-700 rounded-2xl p-2 shadow-2xl transform rotate-6 translate-x-3 group-hover:rotate-3 group-hover:translate-x-1 transition-transform duration-500 flex flex-col justify-between">
                    <div className="w-10 h-1 bg-slate-800 rounded-full mx-auto" />
                    <div className="bg-emerald-950/80 border border-emerald-500/30 p-1.5 rounded-lg text-center">
                      <span className="text-[8px] font-mono text-emerald-300 font-bold block">78% Optimal</span>
                      <span className="text-[7px] font-mono text-slate-400 block">Fleet Active</span>
                    </div>
                  </div>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-sans font-black text-white uppercase tracking-tight leading-tight group-hover:text-emerald-300 transition-colors">
                  ZyRide Transit OS
                </h3>
                <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase block mt-2">
                  MOBILE APPLICATION • HEALTH & TRANSIT
                </span>
                <p className="text-xs text-slate-400 leading-relaxed font-normal mt-2">
                  Next-gen mobile transit interface with intelligent dispatch routing and fleet safety.
                </p>
              </div>

              {/* Bottom Row with Circular Arrow Button */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-800/80">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">Active R&D</span>
                <div className="w-11 h-11 rounded-full border border-slate-700 bg-slate-900/90 text-white flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-500 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 5 — HOW WE BUILD (EXACT DITTO GLASSMORPHISM WITH VIBRANT ZYSTRA BRAND GRADIENT MESH MATCHING REFERENCE IMAGE) */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-28 relative overflow-visible">
          
          {/* VIBRANT ZYSTRA BRAND GRADIENT GLOWING ORB (RIGHT BEHIND CARD 2 & CARD 3 - EXACT MATCH TO REFERENCE BLUE ORB) */}
          <div className="absolute top-[32%] left-[42%] -translate-x-1/2 w-[420px] sm:w-[500px] h-[420px] sm:h-[500px] rounded-full bg-gradient-to-tr from-[#6e019c] via-[#a855f7] to-[#00aeef] blur-[55px] opacity-90 pointer-events-none z-0 shadow-[0_0_150px_rgba(168,85,247,0.9)] animate-pulse" />

          {/* VIBRANT CYAN & PURPLE SECONDARY GLOW (RIGHT SIDE) */}
          <div className="absolute top-[28%] right-[8%] w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-[#00aeef] via-[#3b82f6] to-[#6e019c] blur-[50px] opacity-80 pointer-events-none z-0 shadow-[0_0_120px_rgba(0,174,239,0.8)]" />

          {/* GIANT GLOWING BACKGROUND WORD (POSITIONED DIRECTLY BEHIND THE TOPS OF THE CARDS - DITTO REFERENCE IMAGE MATCH) */}
          <div className="absolute top-[180px] sm:top-[200px] left-1/2 -translate-x-1/2 font-sans font-black text-[110px] sm:text-[170px] lg:text-[220px] uppercase tracking-tighter pointer-events-none select-none z-0 whitespace-nowrap leading-none bg-gradient-to-b from-white/35 via-purple-300/25 to-cyan-300/10 bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            BUILDING
          </div>

          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3 relative z-10 select-text">
            <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
              Framework
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-black text-white">
              How Zystra Approaches Product Development
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed mt-1">
              Whether it's a client campaign or our own technology, the process is the same — research first, validate the problem, design with intent, and build only what's needed to deliver real value.
            </p>
          </div>

          {/* 4 FROSTED GLASS CARDS HORIZONTAL CAROUSEL ON MOBILE / GRID ON DESKTOP */}
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 sm:gap-6 pb-6 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-x-visible md:snap-none select-none relative z-10">
            {buildSteps.map((step, idx) => (
              <div
                key={idx}
                className="group relative rounded-[30px] border border-white/25 bg-[#09031a]/50 backdrop-blur-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/45 hover:bg-[#09031a]/60 transition-all duration-300 shadow-2xl overflow-hidden w-[82vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink"
                style={{
                  boxShadow: "0 30px 70px -10px rgba(0, 0, 0, 0.9), inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 0.4)"
                }}
              >
                <div>
                  {/* Step Phase Tag & Top Indicator */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-mono font-bold text-purple-300 uppercase tracking-widest">
                      {step.step}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
                  </div>
                  
                  {/* Card Title & Subtitle */}
                  <h3 className="text-2xl font-sans font-black text-white uppercase tracking-tight leading-tight mb-2 group-hover:text-purple-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-6">
                    {step.subtitle}
                  </p>

                  {/* Checklist Features Items (Matching Reference Image Checkmarks!) */}
                  <div className="flex flex-col gap-3 py-4 border-t border-white/15">
                    {step.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs text-slate-100 font-medium leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom White Pill Action Button */}
                <div className="mt-8 pt-4">
                  <div className="w-full py-3.5 rounded-full bg-white text-slate-950 font-sans font-black text-xs uppercase tracking-wider shadow-2xl flex items-center justify-center gap-2 group-hover:bg-purple-100 group-hover:scale-[1.02] transition-all duration-300">
                    {step.pillText}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE SWIPE INDICATOR BAR */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-3 text-[10px] font-mono text-purple-300 font-bold uppercase tracking-widest">
            <span>Swipe Phase Cards</span>
            <ArrowRight className="w-3.5 h-3.5 animate-pulse text-purple-400" />
          </div>
        </section>

        {/* COMBINED UI SECTION — CLIENT VALUE & CO-DEVELOPMENT WITH RETRO TV PRESENTATION & FLUID GLASS EFFECT */}
        <section id="contact-section" className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-6xl mb-20 relative z-20 select-none">
          
          <FluidGlass
            mode="lens"
            lensProps={{
              scale: 1.15,
              ior: 1.25,
              thickness: 4.5,
              chromaticAberration: 0.15,
              anisotropy: 0.05
            }}
            className="w-full"
          >
            {/* COMBINED HERO & CTA WRAPPER */}
            <div className="w-full flex flex-col items-center">
              
              {/* TOP PART — DARK CLIENT VALUE CARD */}
              <div className="w-full relative rounded-t-[28px] sm:rounded-t-[36px] border border-slate-800 border-b-0 bg-gradient-to-b from-[#0e0722] via-[#09031a] to-[#060212] p-6 sm:p-10 lg:p-12 pb-16 sm:pb-20 lg:pb-24 overflow-hidden shadow-2xl text-center flex flex-col items-center">
                
                {/* Background Repeated Solid Wallpaper Grid */}
                <div className="absolute inset-0 flex flex-col justify-start items-center opacity-25 sm:opacity-35 pointer-events-none select-none overflow-hidden pt-1 leading-none">
                  <div className="flex whitespace-nowrap gap-5 font-sans font-black text-5xl sm:text-7xl lg:text-[100px] tracking-tighter uppercase text-purple-600/35 leading-[0.82]">
                    INNOVATION INNOVATION INNOVATION INNOVATION
                  </div>
                  <div className="flex whitespace-nowrap gap-5 font-sans font-black text-5xl sm:text-7xl lg:text-[100px] tracking-tighter uppercase text-purple-600/35 leading-[0.82]">
                    INNOVATION INNOVATION INNOVATION INNOVATION
                  </div>
                  <div className="flex whitespace-nowrap gap-5 font-sans font-black text-5xl sm:text-7xl lg:text-[100px] tracking-tighter uppercase text-purple-600/35 leading-[0.82]">
                    INNOVATION INNOVATION INNOVATION INNOVATION
                  </div>
                  <div className="flex whitespace-nowrap gap-5 font-sans font-black text-5xl sm:text-7xl lg:text-[100px] tracking-tighter uppercase text-purple-600/35 leading-[0.82]">
                    INNOVATION INNOVATION INNOVATION INNOVATION
                  </div>
                </div>

                {/* Radial Glow Blob */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[220px] bg-purple-600/15 rounded-full blur-[90px] pointer-events-none" />

                {/* Section Title */}
                <h2 className="relative z-10 text-2xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight leading-[1.05] max-w-3xl mb-3 drop-shadow-md">
                  What Our Innovation Work Means for You
                </h2>

                {/* Paragraph Body Text */}
                <p className="relative z-10 text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
                  When you work with Zystra, you're not working with an agency that only knows how to execute briefs. You're working with a team that builds, tests, and ships its own technology — bringing genuine product thinking, technical fluency, and a builder's mindset to every client strategy.
                </p>
              </div>

              {/* MIDDLE OVERLAPPING RETRO TV GRAPHIC (COMPACT PROPORTIONAL SCALE) */}
              <div className="relative z-30 w-full flex justify-center -my-14 sm:-my-20 lg:-my-24 pointer-events-none px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative max-w-[260px] sm:max-w-[380px] lg:max-w-[420px] w-full pointer-events-auto transform-gpu"
                >
                  <img
                    src="/innovations/innovation-tv.webp"
                    alt="Zystra Innovation Build Test Deliver Retro TV"
                    style={{ animation: "heroFloat1 5s ease-in-out infinite" }}
                    className="w-full h-auto object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] hover:scale-[1.02] transition-transform duration-500"
                  />
                </motion.div>
              </div>

              {/* BOTTOM PART — LIGHT/PURPLE CONTRAST CO-DEVELOPMENT CARD */}
              <div className="w-full relative rounded-b-[28px] sm:rounded-b-[36px] bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-950 p-6 sm:p-10 lg:p-12 pt-16 sm:pt-20 lg:pt-24 border border-slate-200 border-t-0 shadow-2xl overflow-hidden flex flex-col items-center text-center">
                
                {/* Background Repeated Wallpaper Grid */}
                <div className="absolute inset-0 flex flex-col justify-start items-center opacity-[0.05] pointer-events-none select-none overflow-hidden pt-1 leading-none">
                  <div className="flex whitespace-nowrap gap-5 font-sans font-black text-5xl sm:text-7xl lg:text-[100px] tracking-tighter uppercase text-slate-900 leading-[0.82]">
                    IDENTITY IDENTITY IDENTITY IDENTITY
                  </div>
                  <div className="flex whitespace-nowrap gap-5 font-sans font-black text-5xl sm:text-7xl lg:text-[100px] tracking-tighter uppercase text-slate-900 leading-[0.82]">
                    IDENTITY IDENTITY IDENTITY IDENTITY
                  </div>
                  <div className="flex whitespace-nowrap gap-5 font-sans font-black text-5xl sm:text-7xl lg:text-[100px] tracking-tighter uppercase text-slate-900 leading-[0.82]">
                    IDENTITY IDENTITY IDENTITY IDENTITY
                  </div>
                </div>

                {/* Radial Soft Light Accent */}
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-200/40 rounded-full blur-[90px] pointer-events-none" />

                {/* CO-DEVELOPMENT PILL BADGE */}
                <div className="relative z-10 inline-flex items-center gap-2 bg-purple-100 border border-purple-200 px-3.5 py-1 rounded-full shadow-xs mb-4">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#6e019c] uppercase">
                    CO-DEVELOPMENT
                  </span>
                </div>

                {/* BOLD STACKED TYPOGRAPHY */}
                <div className="relative z-10 flex flex-col items-center mb-4">
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-sans font-black uppercase tracking-tighter text-slate-950 leading-[0.95] max-w-3xl">
                    <span className="block">THE SCREEN CHANGED.</span>
                    <span className="block text-[#6e019c]">YOUR BRAND SHOULD TOO.</span>
                  </h3>
                  <p className="text-base sm:text-xl font-sans font-black text-slate-800 tracking-tight uppercase mt-2">
                    Want to Build Something With Us?
                  </p>
                </div>

                {/* PARAGRAPH */}
                <p className="relative z-10 text-xs sm:text-sm lg:text-base text-slate-600 font-medium leading-relaxed max-w-xl mb-6">
                  Whether you have a product idea that needs validation, or a brand that needs the same builder's mindset applied to its marketing — let's talk.
                </p>

                {/* ACTION BUTTONS */}
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md">
                  <Link href="/#contact" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto border-2 border-dashed border-slate-900 bg-white hover:bg-[#6e019c] hover:border-[#6e019c] hover:text-white transition-all duration-300 font-sans font-bold text-xs sm:text-sm text-slate-900 px-6 py-3 rounded-xl shadow-md flex items-center justify-center gap-2 group cursor-pointer">
                      <span>Get in Touch</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>

                  <a href="tel:+916200048924" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-slate-900 hover:bg-[#56017a] text-white transition-all duration-300 font-sans font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer">
                      <Phone className="w-3.5 h-3.5 text-purple-300" />
                      <span>Call Us: +91 6200048924</span>
                    </button>
                  </a>
                </div>

                {/* MICRO RESPONSE BADGE */}
                <span className="relative z-10 text-[11px] text-slate-500 font-mono uppercase tracking-wider mt-4 block font-semibold">
                  Response within 24 hours
                </span>

              </div>

            </div>
          </FluidGlass>

        </section>

      </main>

      <Footer />
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes heroFloat1 {
            0%, 100% { transform: translateY(-5px) rotate(-1deg); }
            50% { transform: translateY(5px) rotate(1deg); }
          }
          @media (max-width: 768px) {
            .backdrop-blur-xl,
            .backdrop-blur-2xl,
            .backdrop-blur-3xl,
            .backdrop-blur-lg,
            .backdrop-blur-md,
            .backdrop-blur-sm,
            .backdrop-blur {
              backdrop-filter: none !important;
              -webkit-backdrop-filter: none !important;
            }
          }
        `
      }} />
    </div>
  );
}
