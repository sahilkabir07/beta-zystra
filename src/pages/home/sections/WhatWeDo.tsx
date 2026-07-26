import React from "react";
import { motion } from "framer-motion";
import { Cpu, Award, Layers, Gift, Shield, MessageCircle } from "lucide-react";

export default function WhatWeDo() {
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [animatedCards, setAnimatedCards] = React.useState<Record<number, boolean>>({});

  React.useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    setIsDesktop(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const differentiators = [
    {
      title: "AI-Powered Strategy",
      value: "24/7 AI-Powered Campaign Optimization",
      icon: Cpu,
      desc: "We use artificial intelligence tools to analyse your market, track competitor moves, and optimise campaigns in real time — so every rupee you spend works harder.",
      logoText: "zystra ai",
      badges: ["AI ENGINE", "REAL-TIME"],
      bannerText: "OPTIMIZED 24/7",
      bgColor: "#ffffff",
      titleColor: "text-slate-900",
      valueColor: "text-slate-500",
      textColor: "text-slate-800",
      iconBg: "bg-slate-50 border-slate-100",
      iconColor: "text-brand-vibrant",
      badgeBg: "bg-brand-vibrant/10 text-brand-vibrant border-brand-vibrant/20",
      footerColor: "text-brand-vibrant",
      rotate: -2,
      positionClass: "md:absolute md:top-[70px] md:left-[4%] md:w-[160px] md:h-[250px] z-10"
    },
    {
      title: "Local Insight, National Quality",
      value: "100% Eastern India Direct Market Insight",
      icon: Award,
      desc: "We understand the Bihar and Eastern India market like no metro agency can. We combine that local insight with national-grade creative and technical execution.",
      logoText: "zystra east",
      badges: ["LOCAL MARKET", "EAST INDIA"],
      bannerText: "EAST INDIA REACH",
      bgColor: "#33015a",
      titleColor: "text-white",
      valueColor: "text-white/80",
      textColor: "text-white/90",
      iconBg: "bg-white/10 border-white/10",
      iconColor: "text-white",
      badgeBg: "bg-white/10 text-white border-white/10",
      footerColor: "text-white/90",
      rotate: 1.5,
      positionClass: "md:absolute md:top-[85px] md:left-[19.8%] md:w-[160px] md:h-[250px] z-10"
    },
    {
      title: "Full-Stack, One Roof",
      value: "Unified SEO, PPC, Web & Video Dev",
      icon: Layers,
      desc: "SEO, Meta Ads, Google PPC, Web Design, Video Production, Branding, App Development — everything under one agency. No juggling multiple vendors. No miscommunication.",
      logoText: "zystra dev",
      badges: ["SEO & ADS", "WEB & APPS"],
      bannerText: "100% UNIFIED",
      bgColor: "#6e019c",
      titleColor: "text-white",
      valueColor: "text-white/80",
      textColor: "text-white/90",
      iconBg: "bg-white/10 border-white/10",
      iconColor: "text-white",
      badgeBg: "bg-white/10 text-white border-white/10",
      footerColor: "text-white/90",
      rotate: -1,
      positionClass: "md:absolute md:top-[94px] md:left-[35.6%] md:w-[160px] md:h-[250px] z-10"
    },
    {
      title: "Experience Before You Pay",
      value: "Free Initial Audit & Digital Review",
      icon: Gift,
      desc: "We believe in earning your trust first. That's why we offer a review of your current digital presence before you commit — completely free.",
      logoText: "zystra trust",
      badges: ["FREE AUDIT", "ZERO RISK"],
      bannerText: "TRUST FIRST",
      bgColor: "#ffffff",
      titleColor: "text-slate-900",
      valueColor: "text-slate-500",
      textColor: "text-slate-800",
      iconBg: "bg-slate-50 border-slate-100",
      iconColor: "text-brand-medium",
      badgeBg: "bg-brand-medium/10 text-brand-medium border-brand-medium/20",
      footerColor: "text-brand-medium",
      rotate: 2,
      positionClass: "md:absolute md:top-[97px] md:left-[51.4%] md:w-[160px] md:h-[250px] z-10"
    },
    {
      title: "Flexible Partnerships",
      value: "No Long-Term Contracts. Cancel Anytime.",
      icon: Shield,
      desc: "We align with your business goals instead of locking you down. Enjoy flexibility with our simple month-to-month contracts and transparent performance reports.",
      logoText: "zystra flex",
      badges: ["NO LOCK-INS", "MONTHLY"],
      bannerText: "CLIENT-FIRST SYSTEM",
      bgColor: "#561d9a",
      titleColor: "text-white",
      valueColor: "text-white/80",
      textColor: "text-white/90",
      iconBg: "bg-white/10 border-white/10",
      iconColor: "text-white",
      badgeBg: "bg-white/10 text-white border-white/10",
      footerColor: "text-white/90",
      rotate: -1.5,
      positionClass: "md:absolute md:top-[94px] md:left-[67.2%] md:w-[160px] md:h-[250px] z-10"
    },
    {
      title: "Direct Expert Access",
      value: "Zero Middlemen. Talk to Creators Directly.",
      icon: MessageCircle,
      desc: "No sales representatives or account managers getting in the way. Work directly with the developers, marketers, and designers executing your vision.",
      logoText: "zystra core",
      badges: ["DIRECT TALK", "EXPERT ONLY"],
      bannerText: "ZERO FRUSTRATION",
      bgColor: "#000000",
      titleColor: "text-white",
      valueColor: "text-white/80",
      textColor: "text-white/90",
      iconBg: "bg-white/10 border-white/10",
      iconColor: "text-white",
      badgeBg: "bg-white/10 text-white border-white/10",
      footerColor: "text-white/90",
      rotate: 1,
      positionClass: "md:absolute md:top-[85px] md:left-[83%] md:w-[160px] md:h-[250px] z-10"
    }
  ];

  const renderCardGraphic = (idx: number, IconComponent: any, iconColor: string) => {
    const iconClass = "w-5 h-5 " + iconColor;
    switch (idx) {
      case 0:
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-white to-purple-50/50">
            {/* Elegant grid background overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#d8b4fe_1px,transparent_1px)] [background-size:8px_8px] opacity-35" />
            
            {/* Rising Trend Line (SEO/Ads growth) */}
            <svg className="w-20 h-10 stroke-brand-vibrant fill-none z-10" viewBox="0 0 100 40">
              <path d="M 5 35 Q 25 15 45 22 T 85 8 T 100 0" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="85" cy="8" r="4" fill="#be5eff" className="animate-ping" />
              <circle cx="85" cy="8" r="2.5" fill="#be5eff" />
            </svg>
            
            {/* Small floating search magnifier badge */}
            <div className="absolute top-3 left-3 w-6 h-6 rounded-lg bg-white shadow-sm flex items-center justify-center border border-purple-100 z-10">
              <svg className="w-3.5 h-3.5 text-brand-vibrant" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            
            <span className="absolute bottom-3 text-[7px] font-mono font-bold tracking-[0.25em] text-brand-vibrant/60 uppercase z-10">AI SEO TREND</span>
          </div>
        );
      case 1:
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-[#33015a]">
            {/* Location map pin with radar waves representing Local SEO target */}
            <div className="absolute w-20 h-20 rounded-full border border-white/5 flex items-center justify-center">
              <div className="absolute w-12 h-12 rounded-full border border-white/10 flex items-center justify-center animate-ping" style={{ animationDuration: '3s' }} />
              {/* Map pin */}
              <svg className="w-7 h-7 text-[#ff7b54] z-10 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <span className="absolute bottom-3 text-[7px] font-mono font-bold tracking-[0.25em] text-white/40 uppercase z-10">LOCAL GEO-SEO</span>
          </div>
        );
      case 2:
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-[#6e019c]">
            {/* Search bar mockup */}
            <div className="w-24 bg-white rounded-md p-1 shadow-md border border-white/20 flex items-center gap-1.5 mb-2 transform -rotate-[4deg] z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-vibrant" />
              <div className="w-10 h-1 bg-slate-200 rounded" />
              <div className="ml-auto w-3.5 h-3.5 rounded bg-amber-400 flex items-center justify-center shadow-3xs">
                <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
            
            {/* Floating Social Media Icons */}
            <div className="flex gap-2.5 mt-1 z-10">
              {/* Instagram camera style icon */}
              <div className="w-6 h-6 rounded bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              {/* YouTube play style icon */}
              <div className="w-6 h-6 rounded bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </div>
            </div>
            <span className="absolute bottom-3 text-[7px] font-mono font-bold tracking-[0.25em] text-white/40 uppercase z-10">SEO & SOCIAL</span>
          </div>
        );
      case 3:
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-white to-emerald-50/40">
            <div className="absolute inset-0 bg-[radial-gradient(#a7f3d0_1px,transparent_1px)] [background-size:8px_8px] opacity-40" />
            
            {/* Audit Checklist Mockup representing Free SEO Audit */}
            <div className="w-20 bg-white rounded-lg p-2 shadow-md border border-emerald-100 flex flex-col gap-1.5 transform rotate-[2deg] z-10">
              <div className="flex items-center gap-1.5">
                <svg className="w-2.5 h-2.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <div className="w-10 h-1 bg-slate-200 rounded" />
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-2.5 h-2.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <div className="w-8 h-1 bg-slate-200 rounded" />
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-2.5 h-2.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <div className="w-12 h-1 bg-slate-200 rounded" />
              </div>
            </div>
            <span className="absolute bottom-3 text-[7px] font-mono font-bold tracking-[0.25em] text-emerald-600/60 uppercase z-10">SEO AUDIT REPORT</span>
          </div>
        );
      case 4:
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-[#561d9a]">
            {/* Mini Social Media Feed/Engagement card */}
            <div className="w-[105px] bg-white rounded-lg p-1.5 shadow-lg border border-white/10 flex flex-col gap-1 transform -rotate-[3deg] z-10">
              {/* User header */}
              <div className="flex items-center gap-1">
                <div className="w-3.5 h-3.5 rounded-full bg-purple-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-brand-vibrant" />
                </div>
                <div className="w-10 h-1 bg-slate-100 rounded" />
              </div>
              {/* Image box with pulsing pink heart representing social love */}
              <div className="w-full h-11 bg-slate-50 rounded flex items-center justify-center relative border border-slate-100">
                <svg className="w-4.5 h-4.5 text-rose-500 fill-rose-500 animate-pulse" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
              </div>
              {/* Engagement line indicators */}
              <div className="flex gap-2 items-center">
                <div className="w-5 h-1 bg-slate-100 rounded" />
                <div className="w-3 h-1 bg-slate-150 rounded ml-auto" />
              </div>
            </div>
            <span className="absolute bottom-3 text-[7px] font-mono font-bold tracking-[0.25em] text-white/40 uppercase z-10">SOCIAL FEED</span>
          </div>
        );
      case 5:
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-black">
            {/* Overlapping chat/speech bubbles representing direct DM client communication */}
            <div className="relative w-24 h-14 flex items-center justify-center z-10">
              {/* Client Bubble */}
              <div className="absolute left-1 top-1 w-14 bg-white/10 border border-white/20 rounded-xl rounded-bl-none p-1.5 flex flex-col gap-1 shadow-md">
                <div className="w-8 h-1 bg-white/40 rounded" />
                <div className="w-6 h-1 bg-white/20 rounded" />
              </div>
              {/* Expert Bubble */}
              <div className="absolute right-1 bottom-1 w-14 bg-brand-vibrant border border-brand-vibrant/50 rounded-xl rounded-br-none p-1.5 flex flex-col gap-1 shadow-md">
                <div className="w-8 h-1 bg-white rounded" />
                <div className="w-5 h-1 bg-white/70 rounded" />
              </div>
            </div>
            <span className="absolute bottom-3 text-[7px] font-mono font-bold tracking-[0.25em] text-white/40 uppercase z-10">DIRECT CHAT</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="why-choose" className="pt-28 pb-12 sm:pt-36 sm:pb-16 bg-white text-slate-900 relative overflow-hidden">
      {/* Background Gradients & Glows (Optimized, no filter blurs) */}
      <div 
        className="absolute top-0 left-1/4 w-[600px] h-[600px] pointer-events-none opacity-80" 
        style={{ background: "radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0) 70%)" }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-[700px] h-[700px] pointer-events-none opacity-80" 
        style={{ background: "radial-gradient(circle, rgba(236, 72, 153, 0.07) 0%, rgba(236, 72, 153, 0) 70%)" }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(110,1,156,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(110,1,156,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Floating 3D/Geometric elements */}
      {/* 3D Glassmorphic CSS Cube */}
      <motion.div
        className="cube-wrap absolute left-8 top-1/4 pointer-events-none hidden xl:block z-0"
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="cube">
          <div className="cube-face face-front" />
          <div className="cube-face face-back" />
          <div className="cube-face face-right" />
          <div className="cube-face face-left" />
          <div className="cube-face face-top" />
          <div className="cube-face face-bottom" />
        </div>
      </motion.div>

      {/* Floating 3D-Like Torus */}
      <motion.div
        className="absolute left-[38%] bottom-[6%] pointer-events-none hidden xl:block z-0 opacity-30"
        animate={{
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-56 h-56 rounded-full border border-dashed border-purple-300 relative flex items-center justify-center" style={{ transform: "rotateX(70deg) rotateY(15deg)" }}>
          <div className="absolute w-3.5 h-3.5 rounded-full bg-[#ff007f] shadow-[0_0_12px_rgba(255,0,127,0.4)]" style={{ top: 0 }} />
        </div>
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Split Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 lg:items-stretch items-start mb-28 lg:pt-8">
          
          {/* Left Side: Headline, Body Paragraph, and Core Pillars checklist */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center select-text lg:pt-8 h-full">
            <div>
              {/* Bold, eye-catching Headline with larger font */}
              <h2 className="text-4xl sm:text-5xl lg:text-[84px] lg:leading-[0.98] font-serif font-black text-slate-900 tracking-tight">
                We Are Not <br />
                Your Typical <br />
                <span className="bg-gradient-to-r from-brand-vibrant via-brand-medium to-brand-dark bg-clip-text text-transparent drop-shadow-xs">
                  Digital Marketing Agency
                </span>
              </h2>
            </div>
          </div>

          {/* Right Side: Creative Geometric Tilted Overlapping Cards (Adjusted Clean Overlap) */}
          <div className="lg:col-span-6 flex flex-col items-center sm:items-start lg:items-end relative select-none pt-2 sm:pt-0 pb-4">
            {/* Ambient glows behind cards */}
            <div 
              className="absolute inset-0 pointer-events-none -z-10 opacity-60" 
              style={{ background: "radial-gradient(circle, rgba(110, 1, 156, 0.08) 0%, rgba(86, 29, 154, 0.08) 50%, rgba(0,0,0,0) 70%)" }}
            />

            {/* Card 1: Front / Identity (Tilted Right) */}
            <motion.div
              whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full max-w-[560px] lg:max-w-[580px] min-h-[240px] sm:min-h-[260px] lg:min-h-[275px] rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-[0_20px_45px_rgba(0,0,0,0.07)] overflow-hidden flex z-0 self-start sm:self-auto rotate-[2deg] sm:rotate-[2.5deg] origin-bottom-right mb-2 sm:mb-4 transition-transform duration-300"
            >
              {/* Left Geometric graphic column */}
              <div className="relative w-[34%] sm:w-[38%] bg-slate-50 flex items-center justify-center overflow-hidden border-r border-slate-100 shrink-0 self-stretch">
                {/* Diagonal Purple/Vibrant background polygon */}
                <div 
                  className="absolute top-0 left-0 w-full h-[65%] bg-gradient-to-br from-brand-medium to-brand-vibrant origin-top-left"
                  style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 75%)" }}
                />
                {/* Diagonal Accent Purple polygon */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-[60%] bg-brand-medium origin-bottom-left"
                  style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)" }}
                />
                
                {/* Concentric targets circles */}
                <div className="absolute bottom-6 left-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>
                </div>
                
                {/* Floating yellow accent dot */}
                <div className="absolute top-[42%] right-[22%] w-3.5 h-3.5 rounded-full bg-amber-400 shadow-md" />
                
                {/* Abstract lines */}
                <div className="absolute top-6 left-6 flex flex-col gap-1.5 opacity-25">
                  <div className="w-6 h-[1.5px] bg-white" />
                  <div className="w-8 h-[1.5px] bg-white" />
                  <div className="w-5 h-[1.5px] bg-white" />
                </div>
              </div>
              
              {/* Right text box - Paragraph 1 content */}
              <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 lg:p-9 bg-white text-slate-800 select-text">
                <div className="mb-3">
                  <span className="text-[10.5px] sm:text-[11.5px] font-mono font-bold tracking-[0.22em] text-brand-vibrant uppercase select-none">SYSTEMS VS PACKAGES</span>
                </div>
                <p className="text-xs sm:text-sm lg:text-[14.5px] leading-relaxed text-slate-600 font-medium">
                  Most agencies sell you packages. <strong className="text-slate-950 font-black bg-gradient-to-r from-brand-vibrant to-brand-medium bg-clip-text text-transparent">We build you systems.</strong> At Zystra, every strategy is custom-crafted using AI-driven insights, real-time data, and deep market understanding.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Overlapping Back Card (Tilted Left) */}
            <motion.div
              whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full max-w-[560px] lg:max-w-[580px] min-h-[240px] sm:min-h-[260px] lg:min-h-[275px] rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-[0_25px_50px_rgba(110,1,156,0.15)] overflow-hidden flex self-end -mt-10 sm:-mt-16 lg:-mt-20 z-10 -rotate-[2deg] sm:-rotate-[2.5deg] origin-top-left hover:z-20 transition-transform duration-300"
            >
              {/* Left Geometric graphic column */}
              <div className="relative w-[34%] sm:w-[38%] bg-slate-50 flex flex-col justify-end p-6 overflow-hidden border-r border-slate-100 shrink-0 self-stretch">
                {/* Diagonal Purple/Vibrant background polygon */}
                <div 
                  className="absolute top-0 left-0 w-full h-[55%] bg-gradient-to-br from-brand-medium to-brand-vibrant origin-top-left"
                  style={{ clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)" }}
                />
                {/* Diagonal Accent Dark Purple polygon */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-[50%] bg-brand-dark origin-bottom-left"
                  style={{ clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 100%)" }}
                />
                <div className="relative z-10 select-none">
                  <span className="text-xs sm:text-sm font-sans font-black tracking-widest text-white uppercase leading-none block">ZYSTRA</span>
                </div>
              </div>
              
              {/* Right side contact details - Paragraph 3 content */}
              <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 lg:p-9 bg-white text-slate-800 select-text">
                <div className="mb-3">
                  <span className="text-[10.5px] sm:text-[11.5px] font-mono font-bold tracking-[0.22em] text-brand-medium uppercase select-none">FULL-STACK SOLUTIONS</span>
                </div>
                <p className="text-xs sm:text-sm lg:text-[14.5px] leading-relaxed text-slate-600 font-medium">
                  We are a full-stack digital growth agency based in Bihar — offering SEO, ads, web design, branding, and apps. <span className="text-slate-900 font-semibold underline decoration-wavy decoration-brand-medium/60 decoration-1 underline-offset-4">One team. Every solution. Zero guesswork.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Graphic Designer Styled Centered Card */}
        <div className="flex justify-center mb-24 mt-8 w-full relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.015 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="relative w-full max-w-[620px] bg-[#33015a] border border-brand-medium/20 rounded-2xl p-8 sm:p-10 shadow-[0_25px_50px_rgba(51,1,90,0.3)] overflow-visible select-text"
          >
            {/* 3D and Abstract graphic elements mimicking the uploaded UI */}
            {/* Wavy decorative lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-45 z-0" viewBox="0 0 620 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* White wave line flowing across */}
              <path d="M -20 120 Q 90 140 180 90 T 360 160 T 540 115 T 640 145" stroke="white" strokeWidth="2" strokeLinecap="round" />
              
              {/* Brand-vibrant wave line on left */}
              <path d="M 40 155 Q 65 145 90 155 T 140 155" stroke="#6e019c" strokeWidth="2" strokeLinecap="round" />
              
              {/* Left arrowhead elements */}
              <path d="M 160 100 L 175 100 M 175 100 L 175 115" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 175 100 L 150 125" stroke="white" strokeWidth="2" strokeLinecap="round" />
              
              {/* Right arrowhead elements */}
              <path d="M 520 135 L 535 135 M 535 135 L 535 150" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 535 135 L 510 160" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
 
            {/* Left side purple/grey circle */}
            <div className="absolute left-[15%] bottom-[18%] w-11 h-11 rounded-full bg-slate-500/20 backdrop-blur-xs border border-white/10 z-0" />
            {/* Small brand-vibrant dot near it */}
            <div className="absolute left-[11%] bottom-[24%] w-3 h-3 rounded-full bg-[#6e019c] z-10" />
 
            {/* Right side thick brand-vibrant accent capsule */}
            <div className="absolute right-[12%] top-1/2 -translate-y-1/2 translate-x-1/2 w-[14px] h-[72px] bg-brand-vibrant rounded-full rotate-[12deg] z-20 shadow-md shadow-brand-vibrant/20" />
 
            {/* Bottom right overlapping purple circle */}
            <div className="absolute right-[18%] bottom-[8%] translate-x-1/2 translate-y-1/2 w-14 h-14 rounded-full bg-[#6e019c] border-2 border-white/30 z-20" />

            {/* Inner square box framing the text (no background fill) */}
            <div className="border-2 border-white/90 p-8 sm:p-10 rounded-none relative z-10 flex items-center justify-center min-h-[140px]">
              <p className="font-sans font-black text-white text-center tracking-wider text-base sm:text-[19px] uppercase leading-relaxed max-w-lg">
                Whether you're a local business in Patna or a startup with national ambitions, we speak your language and we know your audience.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Differentiators (Mockup Stack Style) */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-[40px] bg-white border border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)] mt-24 relative overflow-hidden">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h3 className="text-3xl sm:text-5xl font-sans font-black text-slate-950 tracking-tight mb-4">What Makes Zystra Different</h3>
            <p className="text-slate-800/90 text-sm sm:text-base font-semibold">We combine modern automation with hyper-local insight to deliver national-grade results.</p>
          </div>

          <div className="relative w-full max-w-[1100px] mx-auto flex flex-col md:block gap-10 md:gap-0 min-h-0 md:h-[440px] md:min-h-[440px] mt-12 md:mt-16 pt-4 md:pt-0">
            {/* SVG Ropes/Strings behind cards */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none block z-0 opacity-80 md:opacity-100" viewBox="0 0 1100 440" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Single Drooping Rope - Shadow */}
              <path d="M 0,74 Q 550,129 1100,74" stroke="rgba(0,0,0,0.12)" strokeWidth="4" strokeLinecap="round" />
              {/* Single Drooping Rope - Tan Braided Base */}
              <path d="M 0,70 Q 550,125 1100,70" stroke="#dfbc90" strokeWidth="4" strokeLinecap="round" />
              {/* Single Drooping Rope - Dark Brown Braid Pattern Overlay */}
              <path d="M 0,70 Q 550,125 1100,70" stroke="#8c642c" strokeWidth="4" strokeDasharray="6,6" strokeLinecap="round" />
              {/* Single Drooping Rope - Light Gold Accent Fiber */}
              <path d="M 0,70 Q 550,125 1100,70" stroke="#fcf3e8" strokeWidth="1.5" strokeDasharray="3,9" strokeLinecap="round" />
            </svg>

            {differentiators.map((diff, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35, rotate: 0 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  rotate: diff.rotate
                }}
                viewport={{ once: true, margin: "-80px" }}
                onAnimationComplete={() => setAnimatedCards(prev => ({ ...prev, [idx]: true }))}
                transition={
                  animatedCards[idx]
                    ? {
                        type: "spring",
                        stiffness: 450,
                        damping: 30,
                        mass: 0.35
                      }
                    : {
                        type: "spring",
                        stiffness: 400,
                        damping: 28,
                        mass: 0.4,
                        delay: idx * 0.03
                      }
                }
                whileHover={isDesktop ? { 
                  rotate: 0,
                  scale: 1.06, 
                  y: -10, 
                  zIndex: 50,
                  transition: {
                    type: "spring",
                    stiffness: 450,
                    damping: 28,
                    mass: 0.3
                  }
                } : {
                  scale: 1.02,
                  transition: { 
                    type: "spring",
                    stiffness: 350,
                    damping: 24
                  }
                }}
                style={{ 
                  backgroundColor: "#ffffff",
                  padding: "5px",
                  borderRadius: "14px",
                  transformOrigin: "top center",
                  willChange: "transform"
                }}
                className={"flex flex-col justify-between w-full max-w-[300px] mx-auto md:max-w-none md:mx-0 relative border border-slate-200/60 shadow-[0_12px_28px_-6px_rgba(0,0,0,0.08),0_4px_6px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_35px_-8px_rgba(0,0,0,0.12),0_10px_20px_-8px_rgba(0,0,0,0.08)] transition-shadow duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] " + diff.positionClass}
              >
                {/* Wooden Clothespin clip for all screens */}
                <div className="absolute -top-[23px] left-1/2 -translate-x-1/2 flex flex-col items-center z-50 pointer-events-none select-none filter drop-shadow-[0_3px_3px_rgba(0,0,0,0.22)]">
                  {/* Wood top peg handle */}
                  <div className="w-[10px] h-[16px] bg-gradient-to-b from-[#e5c49f] to-[#cc9d6a] border border-[#9c754c] rounded-t-[4px]" />
                  {/* Metal spring hoop */}
                  <div className="w-[13px] h-[3px] bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 border border-slate-600 z-10 -my-[1px] rounded-3xs shadow-3xs" />
                  {/* Wood bottom peg clamp */}
                  <div className="w-[10px] h-[22px] bg-gradient-to-b from-[#cc9d6a] to-[#b28250] border border-[#855e37] rounded-b-[3px] relative">
                    {/* Metal spring wire clamp loop */}
                    <div className="absolute left-[3px] top-[4px] w-[4px] h-[10px] border border-slate-500 rounded-xs pointer-events-none" />
                  </div>
                  {/* Vertical slit texture shadow */}
                  <div className="absolute left-[4.5px] top-0 w-[1px] h-full bg-black/10" />
                </div>

                {/* Main card area (Poster Style) */}
                <div className="flex flex-col h-full w-full justify-between">
                  {/* Graphic Poster Area */}
                  <div 
                    style={{ 
                      backgroundColor: diff.bgColor,
                      height: "155px",
                      position: "relative"
                    }}
                    className="w-full rounded-lg overflow-hidden shadow-inner border border-black/5"
                  >
                    {renderCardGraphic(idx, diff.icon, diff.iconColor)}
                  </div>

                  {/* Caption Area */}
                  <div className="p-2 pt-2.5 flex-1 flex flex-col justify-between bg-white rounded-b-lg select-text">
                    <div>
                      <span className={`text-[7.5px] font-mono font-extrabold tracking-widest uppercase mb-1 block ${idx === 0 || idx === 3 ? 'text-brand-vibrant' : 'text-slate-400'}`}>
                        {diff.bannerText}
                      </span>
                      <h4 className="text-[11.5px] font-sans font-black text-slate-900 leading-tight mb-0.5">
                        {diff.title}
                      </h4>
                    </div>
                    <p className="text-[8.5px] leading-tight text-slate-500 font-semibold line-clamp-2 mt-auto">
                      {diff.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: ".cube-wrap { perspective: 1000px; transform-style: preserve-3d; } .cube { width: 80px; height: 80px; position: relative; transform-style: preserve-3d; animation: rotateCube 15s infinite linear; } .cube-face { position: absolute; width: 80px; height: 80px; border: 1.5px solid rgba(110, 1, 156, 0.22); background: linear-gradient(135deg, rgba(110, 1, 156, 0.05), rgba(86, 29, 154, 0.02)); backdrop-filter: blur(5px); box-shadow: inset 0 0 10px rgba(110, 1, 156, 0.05); } .face-front { transform: translateZ(40px); } .face-back { transform: rotateY(180deg) translateZ(40px); } .face-right { transform: rotateY(90deg) translateZ(40px); } .face-left { transform: rotateY(-90deg) translateZ(40px); } .face-top { transform: rotateX(90deg) translateZ(40px); } .face-bottom { transform: rotateX(-90deg) translateZ(40px); } @keyframes rotateCube { 0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); } 100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(180deg); } }" }} />
    </section>
  );
}
