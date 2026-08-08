import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Globe,
  Search,
  Target,
  Video,
  BarChart3,
} from "lucide-react";

/* ─── Service data matching reference layout ─── */
const SPIRAL_LEVELS = [
  {
    left: { id: "branding", title: "Logo &\nBrand Identity", icon: Palette },
    ribbon: { label: "Web Development", angle: -14 },
    right: { id: "web", title: "High-Converting\nWebsite", icon: Globe },
  },
  {
    left: { id: "seo", title: "SEO &\nLocal SEO", icon: Search },
    ribbon: { label: "Organic Search", angle: -14 },
    right: { id: "ads", title: "Meta &\nGoogle Ads", icon: Target },
  },
  {
    left: { id: "video", title: "Studio\nVideo Shoot", icon: Video },
    ribbon: { label: "Content Velocity", angle: -14 },
    right: { id: "performance", title: "Performance\n& RevOps", icon: BarChart3 },
  },
];

export default function GrowthSystemSpiral() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="container mx-auto px-4 sm:px-8 max-w-7xl mb-28 select-none">

      {/* ── Section Header ── */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight mb-4">
          How We Combine Services Into{" "}
          <span className="bg-gradient-to-r from-[#7059f6] via-[#c084fc] to-white bg-clip-text text-transparent">
            One Growth System
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          A website without traffic is invisible. Traffic without conversion is wasted. That's why Zystra never sells services in isolation — we build them to work together.
        </p>
      </div>

      {/* ── Main Pencil Infographic Container ── */}
      <div className="relative flex flex-col items-center">

        {/* ── Zystra Branding (Top) ── */}
        <div className="text-center mb-8 z-10">
          <div
            className="text-2xl sm:text-3xl font-black tracking-widest text-white uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.15em" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7059f6] to-[#c084fc]">ZY</span>STRA
          </div>
          <div className="text-xs font-mono tracking-[0.35em] text-slate-400 uppercase mt-1">Digital Growth Agency</div>
        </div>

        {/* ── Pencil + Continuous 3D Spiral Ribbon Layout ── */}
        <div className="relative w-full max-w-[900px] flex items-center justify-center min-h-[620px] py-4">

          {/* 1. CENTER REAL 3D PENCIL IMAGE CUTOUT */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-10 h-full flex items-center justify-center">
            <img
              src="/real_3d_pencil.webp"
              alt="3D Zystra Growth Pencil"
              className="h-[600px] w-auto max-w-none object-contain drop-shadow-[0_25px_60px_rgba(112,89,246,0.45)] filter transform-gpu"
            />
          </div>

          {/* 2. CONTINUOUS 3D HELICAL RIBBON WRAPPERS & CARDS LAYER */}
          <div className="relative w-full z-20 flex flex-col gap-14 sm:gap-16 py-8">
            {SPIRAL_LEVELS.map((level, idx) => {
              const LeftIcon = level.left.icon;
              const RightIcon = level.right.icon;
              const isLeftActive = active === level.left.id;
              const isRightActive = active === level.right.id;
              const isRibbonActive = isLeftActive || isRightActive;

              return (
                <div key={idx} className="relative w-full flex items-center justify-between">
                  
                  {/* LEFT SERVICE BANNER */}
                  <div className="w-[38%] flex justify-end pr-3">
                    <motion.div
                      onMouseEnter={() => setActive(level.left.id)}
                      onMouseLeave={() => setActive(null)}
                      whileHover={{ x: -6, scale: 1.03 }}
                      className={`relative w-full max-w-[270px] p-3.5 sm:p-4 rounded-xl border transition-all duration-300 shadow-2xl flex items-center justify-between gap-3 ${
                        isLeftActive
                          ? "bg-gradient-to-r from-[#7059f6] via-[#6e019c] to-[#40006d] border-purple-300 text-white shadow-[0_10px_30px_rgba(112,89,246,0.55)]"
                          : "bg-gradient-to-r from-[#0d0722] to-[#1a0c3b] border-purple-500/30 text-slate-200 hover:border-purple-400/60"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${isLeftActive ? "bg-white/20 text-white" : "bg-purple-900/60 border border-purple-500/40 text-purple-300"}`}>
                          <LeftIcon className="w-5 h-5" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold leading-tight whitespace-pre-line">
                          {level.left.title}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* CENTER DIAGONAL RIBBON BAND (Precisely spans across 3D pencil image without overflowing onto cards) */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-[200px] sm:w-[220px] z-30 pointer-events-none flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: isRibbonActive ? 1.06 : 1,
                        y: isRibbonActive ? -2 : 0,
                        boxShadow: isRibbonActive
                          ? "0 12px 35px rgba(168,85,247,0.85), 0 -2px 12px rgba(255,255,255,0.5)"
                          : "0 8px 25px rgba(0,0,0,0.75), 0 2px 10px rgba(112,89,246,0.3)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-full py-2.5 px-3 rounded-lg border flex items-center justify-center transform shadow-2xl relative overflow-hidden backdrop-blur-sm"
                      style={{
                        transform: `rotate(${level.ribbon.angle}deg)`,
                        background: isRibbonActive
                          ? "linear-gradient(135deg, #c084fc 0%, #7059f6 45%, #4c1d95 85%, #2e1065 100%)"
                          : "linear-gradient(135deg, #5b21b6 0%, #6d28d9 35%, #4c1d95 70%, #2e1065 100%)",
                        borderColor: isRibbonActive ? "rgba(255,255,255,0.95)" : "rgba(196,168,255,0.4)",
                      }}
                    >
                      {/* 3D Glossy Specular Glare Highlight */}
                      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-black/60 to-transparent" />

                      {/* Moving Shiny Beam (GPU CSS) */}
                      <div
                        style={{ animation: "shinyBeam 4s linear infinite" }}
                        className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12"
                      />

                      <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-mono z-10 truncate">
                        {level.ribbon.label}
                      </span>
                    </motion.div>
                  </div>

                  {/* RIGHT SERVICE BANNER */}
                  <div className="w-[38%] flex justify-start pl-3">
                    <motion.div
                      onMouseEnter={() => setActive(level.right.id)}
                      onMouseLeave={() => setActive(null)}
                      whileHover={{ x: 6, scale: 1.03 }}
                      className={`relative w-full max-w-[270px] p-3.5 sm:p-4 rounded-xl border transition-all duration-300 shadow-2xl flex items-center justify-between gap-3 ${
                        isRightActive
                          ? "bg-gradient-to-r from-[#40006d] via-[#6e019c] to-[#7059f6] border-purple-300 text-white shadow-[0_10px_30px_rgba(112,89,246,0.55)]"
                          : "bg-gradient-to-r from-[#1a0c3b] to-[#0d0722] border-purple-500/30 text-slate-200 hover:border-purple-400/60"
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-bold leading-tight whitespace-pre-line flex-1 text-right">
                        {level.right.title}
                      </span>
                      <div className={`p-2.5 rounded-xl ${isRightActive ? "bg-white/20 text-white" : "bg-purple-900/60 border border-purple-500/40 text-purple-300"}`}>
                        <RightIcon className="w-5 h-5" />
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* ── Bottom Hashtag ── */}
        <div className="mt-12 text-center">
          <span
            className="text-lg sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7059f6] via-[#c084fc] to-white tracking-wide"
            style={{ fontFamily: "'Bricolage Grotesque', serif" }}
          >
            #Let'sGrowTogether
          </span>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes shinyBeam {
            0% { transform: translateX(-100%) skewX(-12deg); }
            100% { transform: translateX(300%) skewX(-12deg); }
          }
        `
      }} />
    </section>
  );
}
