import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { Lightbulb, Brain, Rocket, FileCheck, CheckSquare, BookOpen, Handshake, Search } from "lucide-react";

/* ────────────────────────────────────────
   Animated Number Counter
──────────────────────────────────────── */
function Counter({ to, prefix = "", suffix = "", duration = 1.2 }: { to: number; prefix?: string; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    setVal(0);
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [to, duration]);
  return <>{prefix}{val.toLocaleString()}{suffix}</>;
}

/* ────────────────────────────────────────
   Problems Hover Overlay (High-Precision Zystra Brand Mind-Map UI)
──────────────────────────────────────── */
interface ProblemsHoverOverlayProps {
  visible: boolean;
}

export default function ProblemsHoverOverlay({ visible }: ProblemsHoverOverlayProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] w-screen h-screen max-h-screen bg-[#07040d] text-white flex flex-col items-center justify-between p-4 sm:p-6 lg:p-8 overflow-hidden select-none pointer-events-none transform-gpu will-change-transform"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Ambient Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#6e019c]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#a855f7]/20 rounded-full blur-[150px] pointer-events-none" />

          {/* Stardust Background Dot Grid */}
          <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#c084fc_1px,transparent_1px)] [background-size:28px_28px]" />

          <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col justify-between items-center text-center my-auto">
            
            {/* Header Tag */}
            <motion.div
              className="flex items-center gap-2.5 bg-purple-950/80 border border-purple-500/40 px-5 py-1.5 rounded-full backdrop-blur-md"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-purple-400"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              <span className="text-purple-300 font-mono text-xs tracking-widest uppercase font-bold">
                8-STEP RADIAL PROBLEM SOLVING ENGINE
              </span>
            </motion.div>

            {/* ── CENTER ARTWORK: ZERO-OVERLAP BRAND WINGS + CENTER HUB ── */}
            <div className="relative w-full max-w-6xl mx-auto h-[400px] sm:h-[440px] my-auto flex items-center justify-between px-2 sm:px-6 pointer-events-none transform-gpu">
              
              {/* ── LEFT WING (4 NODES: DEFINING, PLANNING, METHODS, SOLUTION — ZYSTRA PURPLE PALETTE) ── */}
              <div className="w-[280px] sm:w-[360px] h-full flex flex-col justify-between py-2 relative z-20">
                
                {/* 1. DEFINING */}
                <motion.div
                  className="flex items-center gap-3.5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                >
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-[#c084fc]/15 border-2 border-[#c084fc] flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 sm:w-6 sm:h-6 text-[#c084fc]" />
                  </div>
                  <span className="text-sm sm:text-lg font-black font-mono tracking-widest text-[#c084fc] uppercase">
                    DEFINING
                  </span>
                </motion.div>

                {/* 2. PLANNING */}
                <motion.div
                  className="flex items-center gap-3.5 pl-6 sm:pl-10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-[#a855f7]/15 border-2 border-[#a855f7] flex items-center justify-center shrink-0">
                    <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-[#a855f7]" />
                  </div>
                  <span className="text-sm sm:text-lg font-black font-mono tracking-widest text-[#a855f7] uppercase">
                    PLANNING
                  </span>
                </motion.div>

                {/* 3. METHODS */}
                <motion.div
                  className="flex items-center gap-3.5 pl-6 sm:pl-10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                >
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-[#d8b4fe]/15 border-2 border-[#d8b4fe] flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-[#d8b4fe]" />
                  </div>
                  <span className="text-sm sm:text-lg font-black font-mono tracking-widest text-[#d8b4fe] uppercase">
                    METHODS
                  </span>
                </motion.div>

                {/* 4. SOLUTION */}
                <motion.div
                  className="flex items-center gap-3.5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-[#e879f9]/15 border-2 border-[#e879f9] flex items-center justify-center shrink-0">
                    <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-[#e879f9]" />
                  </div>
                  <span className="text-sm sm:text-lg font-black font-mono tracking-widest text-[#e879f9] uppercase">
                    SOLUTION
                  </span>
                </motion.div>

              </div>

              {/* ── CENTER HUB: ZYSTRA BRAND "PROBLEM SOLVING" CORE BADGE WITH HAND-DRAWN DOODLE BOUNDARY ── */}
              <motion.div
                className="relative z-30 w-60 h-32 sm:w-80 sm:h-40 flex flex-col items-center justify-center text-center shrink-0 transform-gpu"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {/* Hand-Drawn Organic SVG Doodle Boundary (NO NEON GLOW FILTERS) */}
                <svg
                  className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] pointer-events-none z-20 overflow-visible"
                  viewBox="0 0 340 180"
                  fill="none"
                >
                  {/* Outer Organic Doodle Path */}
                  <motion.path
                    d="M 22 22 C 90 10, 250 12, 318 24 C 332 40, 330 140, 314 158 C 240 172, 95 170, 20 156 C 8 132, 10 44, 22 22 Z"
                    stroke="#c084fc"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="10 8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1, strokeDashoffset: [0, -36] }}
                    transition={{
                      pathLength: { duration: 0.8, ease: "easeInOut" },
                      strokeDashoffset: { duration: 12, repeat: Infinity, ease: "linear" }
                    }}
                  />
                  {/* Inner Offset Sketch Line */}
                  <path
                    d="M 26 26 C 94 16, 246 16, 312 28 C 326 44, 324 136, 308 152 C 235 166, 99 164, 24 150 C 14 128, 14 48, 26 26 Z"
                    stroke="#a855f7"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.75"
                    strokeDasharray="5 5"
                  />
                  {/* Playful Hand-Drawn Corner Sparkles / Doodles */}
                  <g stroke="#d8b4fe" strokeWidth="2" strokeLinecap="round">
                    <line x1="8" y1="12" x2="8" y2="24" />
                    <line x1="2" y1="18" x2="14" y2="18" />
                    <line x1="330" y1="156" x2="330" y2="168" />
                    <line x1="324" y1="162" x2="336" y2="162" />
                  </g>
                </svg>

                {/* Inner Card Solid Backdrop (Clean Matte Finish) */}
                <div className="w-full h-full rounded-[28px] bg-[#120324] border border-purple-500/40 p-4 flex flex-col items-center justify-center shadow-lg relative z-10">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-serif tracking-widest text-white uppercase">
                    PROBLEM
                  </span>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black font-mono tracking-widest text-[#d8b4fe] uppercase mt-0.5">
                    SOLVING
                  </span>
                </div>
              </motion.div>

              {/* ── RIGHT WING (4 NODES: CREATIVITY, INNOVATION, CAUSE, GOAL — ZYSTRA PURPLE PALETTE) ── */}
              <div className="w-[280px] sm:w-[360px] h-full flex flex-col justify-between py-2 relative z-20">
                
                {/* 5. CREATIVITY */}
                <motion.div
                  className="flex items-center justify-end gap-3.5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                >
                  <span className="text-sm sm:text-lg font-black font-mono tracking-widest text-[#c084fc] uppercase">
                    CREATIVITY
                  </span>
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-[#c084fc]/15 border-2 border-[#c084fc] flex items-center justify-center shrink-0">
                    <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-[#c084fc]" />
                  </div>
                </motion.div>

                {/* 6. INNOVATION */}
                <motion.div
                  className="flex items-center justify-end gap-3.5 pr-6 sm:pr-10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <span className="text-sm sm:text-lg font-black font-mono tracking-widest text-[#a855f7] uppercase">
                    INNOVATION
                  </span>
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-[#a855f7]/15 border-2 border-[#a855f7] flex items-center justify-center shrink-0">
                    <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-[#a855f7]" />
                  </div>
                </motion.div>

                {/* 7. CAUSE */}
                <motion.div
                  className="flex items-center justify-end gap-3.5 pr-6 sm:pr-10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                >
                  <span className="text-sm sm:text-lg font-black font-mono tracking-widest text-[#d8b4fe] uppercase">
                    CAUSE
                  </span>
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-[#d8b4fe]/15 border-2 border-[#d8b4fe] flex items-center justify-center shrink-0">
                    <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#d8b4fe]" />
                  </div>
                </motion.div>

                {/* 8. GOAL */}
                <motion.div
                  className="flex items-center justify-end gap-3.5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <span className="text-sm sm:text-lg font-black font-mono tracking-widest text-white uppercase">
                    GOAL
                  </span>
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-white/15 border-2 border-white flex items-center justify-center shrink-0">
                    <CheckSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </motion.div>

              </div>

            </div>

            {/* ── 4. GIANT NUMBERS & MINIMAL TEXT METRICS ROW (CLEAN MATTE ZYSTRA BRAND STYLING) ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full">
              
              {/* Metric 1 */}
              <motion.div
                className="flex flex-col items-center bg-[#18002a]/80 border border-purple-500/30 rounded-2xl p-3 sm:p-4 backdrop-blur-md shadow-md"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono tracking-tight">
                  <Counter to={85} suffix="%" />
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-purple-200 uppercase mt-1">
                  AD WASTE ELIMINATED
                </span>
              </motion.div>

              {/* Metric 2 */}
              <motion.div
                className="flex flex-col items-center bg-[#1e0a2f]/80 border border-purple-500/30 rounded-2xl p-3 sm:p-4 backdrop-blur-md shadow-md"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.28 }}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-purple-200 font-mono tracking-tight">
                  <Counter prefix="+" to={5} suffix="x" />
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-purple-200 uppercase mt-1">
                  CONVERSION SURGE
                </span>
              </motion.div>

              {/* Metric 3 */}
              <motion.div
                className="flex flex-col items-center bg-[#240b36]/80 border border-purple-500/30 rounded-2xl p-3 sm:p-4 backdrop-blur-md shadow-md"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.36 }}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-fuchsia-200 font-mono tracking-tight">
                  <Counter prefix="-" to={65} suffix="%" />
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-fuchsia-200 uppercase mt-1">
                  CAC REDUCTION
                </span>
              </motion.div>

              {/* Metric 4 */}
              <motion.div
                className="flex flex-col items-center bg-[#150024]/80 border border-purple-500/30 rounded-2xl p-3 sm:p-4 backdrop-blur-md shadow-md"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.44 }}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-purple-100 font-mono tracking-tight">
                  <Counter to={100} suffix="%" />
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-purple-100 uppercase mt-1">
                  FUNNEL EFFICIENCY
                </span>
              </motion.div>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
