import React from "react";
import { motion } from "framer-motion";
import { Cpu, Award, Layers, Gift, Shield, MessageCircle } from "lucide-react";

export default function WhatWeDo() {
  const differentiators = [
    {
      title: "AI-Powered Strategy",
      value: "24/7 AI-Powered Campaign Optimization",
      icon: <Cpu className="w-5 h-5 text-rose-600" />,
      desc: "We use artificial intelligence tools to analyse your market, track competitor moves, and optimise campaigns in real time — so every rupee you spend works harder.",
      logoText: "zystra ai",
      badges: ["AI ENGINE", "REAL-TIME"],
      bannerText: "OPTIMIZED 24/7",
      bannerClass: "bg-rose-50 text-rose-600 border-t border-rose-100/50",
      borderClass: "border-rose-100 hover:border-rose-300",
      badgeClasses: "bg-rose-50/60 text-rose-600 border-rose-100",
      rotation: "md:rotate-[-6deg]",
      positionClass: "md:absolute md:top-[2%] md:left-[16%] md:w-[350px] z-30"
    },
    {
      title: "Local Insight, National Quality",
      value: "100% Eastern India Direct Market Insight",
      icon: <Award className="w-5 h-5 text-amber-600" />,
      desc: "We understand the Bihar and Eastern India market like no metro agency can. We combine that local insight with national-grade creative and technical execution.",
      logoText: "zystra east",
      badges: ["LOCAL MARKET", "EAST INDIA"],
      bannerText: "EAST INDIA REACH",
      bannerClass: "bg-amber-50/70 text-amber-700 border-t border-amber-100/50",
      borderClass: "border-amber-100 hover:border-amber-300",
      badgeClasses: "bg-amber-50/60 text-amber-700 border-amber-100",
      rotation: "md:rotate-[5deg]",
      positionClass: "md:absolute md:top-[0%] md:left-[38%] md:w-[350px] z-10"
    },
    {
      title: "Full-Stack, One Roof",
      value: "Unified SEO, PPC, Web & Video Dev",
      icon: <Layers className="w-5 h-5 text-purple-600" />,
      desc: "SEO, Meta Ads, Google PPC, Web Design, Video Production, Branding, App Development — everything under one agency. No juggling multiple vendors. No miscommunication.",
      logoText: "zystra dev",
      badges: ["SEO & ADS", "WEB & APPS"],
      bannerText: "100% UNIFIED",
      bannerClass: "bg-purple-50 text-purple-600 border-t border-purple-100/50",
      borderClass: "border-purple-100 hover:border-purple-300",
      badgeClasses: "bg-purple-50/60 text-purple-600 border-purple-100",
      rotation: "md:rotate-[-3deg]",
      positionClass: "md:absolute md:top-[14%] md:left-[45%] md:w-[350px] z-20"
    },
    {
      title: "Experience Before You Pay",
      value: "Free Initial Audit & Digital Review",
      icon: <Gift className="w-5 h-5 text-sky-600" />,
      desc: "We believe in earning your trust first. That's why we offer a review of your current digital presence before you commit — completely free.",
      logoText: "zystra trust",
      badges: ["FREE AUDIT", "ZERO RISK"],
      bannerText: "TRUST FIRST",
      bannerClass: "bg-sky-50 text-sky-600 border-t border-sky-100/50",
      borderClass: "border-sky-100 hover:border-sky-300",
      badgeClasses: "bg-sky-50/60 text-sky-600 border-sky-100",
      rotation: "md:rotate-[4deg]",
      positionClass: "md:absolute md:top-[28%] md:left-[24%] md:w-[350px] z-45"
    },
    {
      title: "Flexible Partnerships",
      value: "No Long-Term Contracts. Cancel Anytime.",
      icon: <Shield className="w-5 h-5 text-emerald-600" />,
      desc: "We align with your business goals instead of locking you down. Enjoy flexibility with our simple month-to-month contracts and transparent performance reports.",
      logoText: "zystra flex",
      badges: ["NO LOCK-INS", "MONTHLY"],
      bannerText: "CLIENT-FIRST SYSTEM",
      bannerClass: "bg-emerald-50 text-emerald-600 border-t border-emerald-100/50",
      borderClass: "border-emerald-100 hover:border-emerald-300",
      badgeClasses: "bg-emerald-50/60 text-emerald-655 border-emerald-100",
      rotation: "md:rotate-[-5deg]",
      positionClass: "md:absolute md:top-[42%] md:left-[10%] md:w-[350px] z-15"
    },
    {
      title: "Direct Expert Access",
      value: "Zero Middlemen. Talk to Creators Directly.",
      icon: <MessageCircle className="w-5 h-5 text-indigo-600" />,
      desc: "No sales representatives or account managers getting in the way. Work directly with the developers, marketers, and designers executing your vision.",
      logoText: "zystra core",
      badges: ["DIRECT TALK", "EXPERT ONLY"],
      bannerText: "ZERO FRUSTRATION",
      bannerClass: "bg-indigo-50 text-indigo-600 border-t border-indigo-100/50",
      borderClass: "border-indigo-100 hover:border-indigo-300",
      badgeClasses: "bg-indigo-50/60 text-indigo-600 border-indigo-100",
      rotation: "md:rotate-[3deg]",
      positionClass: "md:absolute md:top-[38%] md:left-[39%] md:w-[350px] z-25"
    }
  ];

  return (
    <section id="why-choose" className="py-28 sm:py-36 bg-white text-slate-900 relative overflow-hidden">
      {/* Background Gradients & Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-50/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-pink-50/35 rounded-full blur-[160px] pointer-events-none" />

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
                <span className="bg-gradient-to-r from-brand-vibrant via-[#8d00cb] to-brand-medium bg-clip-text text-transparent drop-shadow-xs">
                  Digital Marketing Agency
                </span>
              </h2>
            </div>
          </div>

          {/* Right Side: Creative Geometric Overlapping Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6 relative select-none">
            {/* Ambient glows behind cards */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-vibrant/5 to-brand-medium/5 blur-3xl rounded-full pointer-events-none -z-10" />

            {/* Card 1: Front / Identity - Housed with Paragraph 1 */}
            <motion.div
              whileHover={{ y: -6, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full max-w-[460px] aspect-[1.75/1] rounded-2xl bg-white border border-slate-200/80 shadow-[0_15px_35px_rgba(0,0,0,0.03)] overflow-hidden flex"
            >
              {/* Left Geometric graphic column */}
              <div className="relative w-[42%] h-full bg-slate-50 flex items-center justify-center overflow-hidden border-r border-slate-100">
                {/* Diagonal Purple/Vibrant background polygon */}
                <div 
                  className="absolute top-0 left-0 w-full h-[65%] bg-gradient-to-br from-[#8d00cb] to-brand-vibrant origin-top-left"
                  style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 75%)" }}
                />
                {/* Diagonal Accent Purple polygon */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-[60%] bg-brand-medium origin-bottom-left"
                  style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)" }}
                />
                
                {/* Concentric targets circles */}
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full border border-white/40 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>
                </div>
                
                {/* Floating yellow accent dot */}
                <div className="absolute top-[40%] right-[20%] w-3 h-3 rounded-full bg-amber-400 shadow-md" />
                
                {/* Abstract lines */}
                <div className="absolute top-4 left-4 flex flex-col gap-1 opacity-25">
                  <div className="w-4 h-[1.5px] bg-white" />
                  <div className="w-6 h-[1.5px] bg-white" />
                  <div className="w-3 h-[1.5px] bg-white" />
                </div>
              </div>
              
              {/* Right text box - Paragraph 1 content */}
              <div className="flex-1 h-full flex flex-col justify-center p-5 sm:p-6 bg-white text-slate-800 select-text">
                <div className="mb-2">
                  <span className="text-[10px] font-mono font-bold tracking-[0.22em] text-brand-vibrant uppercase select-none">SYSTEMS VS PACKAGES</span>
                </div>
                <p className="text-[11px] sm:text-xs leading-relaxed text-slate-600 font-medium">
                  Most agencies sell you packages. <strong className="text-slate-950 font-black bg-gradient-to-r from-brand-vibrant to-brand-medium bg-clip-text text-transparent">We build you systems.</strong> At Zystra, every strategy is custom-crafted using AI-driven insights, real-time data, and deep market understanding.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Back / Details - Housed with Paragraph 3 */}
            <motion.div
              whileHover={{ y: -6, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full max-w-[460px] aspect-[1.75/1] rounded-2xl bg-white border border-slate-200/80 shadow-[0_15px_35px_rgba(0,0,0,0.03)] overflow-hidden flex self-end lg:mt-[-80px] z-10"
            >
              {/* Left Geometric graphic column */}
              <div className="relative w-[42%] h-full bg-slate-50 flex flex-col justify-end p-5 overflow-hidden border-r border-slate-100">
                {/* Diagonal Purple/Vibrant background polygon */}
                <div 
                  className="absolute top-0 left-0 w-full h-[55%] bg-gradient-to-br from-[#8d00cb] to-brand-vibrant origin-top-left"
                  style={{ clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)" }}
                />
                {/* Diagonal Accent Dark Purple polygon */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-[50%] bg-brand-dark origin-bottom-left"
                  style={{ clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 100%)" }}
                />
                <div className="relative z-10 select-none">
                  <span className="text-[11px] font-sans font-black tracking-widest text-white uppercase leading-none block">ZYSTRA</span>
                </div>
              </div>
              
              {/* Right side contact details - Paragraph 3 content */}
              <div className="flex-1 h-full flex flex-col justify-center p-5 sm:p-6 bg-white text-slate-800 select-text">
                <div className="mb-2">
                  <span className="text-[10px] font-mono font-bold tracking-[0.22em] text-brand-medium uppercase select-none">FULL-STACK SOLUTIONS</span>
                </div>
                <p className="text-[11px] sm:text-xs leading-relaxed text-slate-600 font-medium">
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
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="relative w-full max-w-[620px] bg-[#33015a] border border-brand-medium/20 rounded-2xl p-8 sm:p-10 shadow-[0_25px_50px_rgba(51,1,90,0.3)] overflow-visible select-text"
          >
            {/* 3D and Abstract graphic elements mimicking the uploaded UI */}
            {/* Wavy decorative lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-45 z-0" viewBox="0 0 620 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* White wave line flowing across */}
              <path d="M -20 120 Q 90 140 180 90 T 360 160 T 540 115 T 640 145" stroke="white" strokeWidth="2" strokeLinecap="round" />
              
              {/* Brand-vibrant wave line on left */}
              <path d="M 40 155 Q 65 145 90 155 T 140 155" stroke="#8d00cb" strokeWidth="2" strokeLinecap="round" />
              
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
            <div className="absolute left-[11%] bottom-[24%] w-3 h-3 rounded-full bg-[#8d00cb] z-10" />

            {/* Right side thick brand-vibrant accent capsule */}
            <div className="absolute right-[12%] top-1/2 -translate-y-1/2 translate-x-1/2 w-[14px] h-[72px] bg-brand-vibrant rounded-full rotate-[12deg] z-20 shadow-md shadow-brand-vibrant/20" />

            {/* Bottom right overlapping purple circle */}
            <div className="absolute right-[18%] bottom-[8%] translate-x-1/2 translate-y-1/2 w-14 h-14 rounded-full bg-[#8d00cb] border-2 border-white/30 z-20" />

            {/* Inner square box framing the text (no background fill) */}
            <div className="border-2 border-white/90 p-8 sm:p-10 rounded-none relative z-10 flex items-center justify-center min-h-[140px]">
              <p className="font-sans font-black text-white text-center tracking-wider text-base sm:text-[19px] uppercase leading-relaxed max-w-lg">
                Whether you're a local business in Patna or a startup with national ambitions, we speak your language and we know your audience.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Differentiators (Mockup Stack Style) */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-[40px] bg-gradient-to-tr from-[#f0ebff] via-[#f5f3ff] to-[#eef2ff] border border-indigo-150/40 shadow-inner mt-24">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h3 className="text-3xl sm:text-5xl font-sans font-black text-[#1e1b4b] tracking-tight mb-4">What Makes Zystra Different</h3>
            <p className="text-slate-650 text-sm sm:text-base font-medium">We combine modern automation with hyper-local insight to deliver national-grade results.</p>
          </div>

          <div className="relative w-full max-w-[800px] mx-auto flex flex-col md:block gap-6 md:gap-0 min-h-0 md:min-h-[740px] mt-16">
            {differentiators.map((diff, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ rotate: 0, scale: 1.03, y: -6, zIndex: 50 }}
                className={"bg-white rounded-[24px] border shadow-[0_12px_28px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col justify-between transition-all duration-300 w-full " + diff.borderClass + " " + diff.rotation + " " + diff.positionClass + " hover:shadow-2xl"}
              >
                {/* White main card area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  {/* Card Header (Logo and category) */}
                  <div className="flex items-center gap-2 mb-4">
                    {/* Circle icon representing company logo */}
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100/80 shadow-3xs shrink-0">
                      {diff.icon}
                    </div>
                    {/* Logo text */}
                    <span className="text-xs font-sans font-bold tracking-tight text-slate-900 lowercase">{diff.logoText}</span>
                  </div>

                  {/* Title */}
                  <h4 className="text-base sm:text-[17px] font-sans font-extrabold text-[#1e1b4b] tracking-tight leading-snug">
                    {diff.title}
                  </h4>

                  {/* Value */}
                  <p className="text-[11px] font-semibold text-slate-500 mt-1 mb-4">
                    {diff.value}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {diff.badges.map((badge, bIdx) => (
                      <span key={bIdx} className={"text-[9px] font-mono font-bold tracking-wider rounded-full px-2.5 py-0.5 uppercase border " + diff.badgeClasses}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom colored banner strip */}
                <div className={"py-3 px-6 sm:px-7 text-center text-[10px] font-mono font-bold tracking-wider uppercase " + diff.bannerClass}>
                  {diff.bannerText}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: ".cube-wrap { perspective: 1000px; transform-style: preserve-3d; } .cube { width: 80px; height: 80px; position: relative; transform-style: preserve-3d; animation: rotateCube 15s infinite linear; } .cube-face { position: absolute; width: 80px; height: 80px; border: 1.5px solid rgba(110, 1, 156, 0.22); background: linear-gradient(135deg, rgba(110, 1, 156, 0.05), rgba(217, 70, 239, 0.02)); backdrop-filter: blur(5px); box-shadow: inset 0 0 10px rgba(110, 1, 156, 0.05); } .face-front { transform: translateZ(40px); } .face-back { transform: rotateY(180deg) translateZ(40px); } .face-right { transform: rotateY(90deg) translateZ(40px); } .face-left { transform: rotateY(-90deg) translateZ(40px); } .face-top { transform: rotateX(90deg) translateZ(40px); } .face-bottom { transform: rotateX(-90deg) translateZ(40px); } @keyframes rotateCube { 0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); } 100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(180deg); } }" }} />
    </section>
  );
}
