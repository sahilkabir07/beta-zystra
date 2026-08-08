import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GeminiPreloader() {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("zystra_intro_shown");
    }
    return true;
  });
  const [phase, setPhase] = useState<"ignite" | "morph" | "reveal" | "exit">("ignite");

  useEffect(() => {
    if (!isLoading) return;
    // Fast, ultra-smooth luxury timeline (~1.5s total)
    const t1 = setTimeout(() => setPhase("morph"), 300);    // 0.30s: Fluid organic Star rotation
    const t2 = setTimeout(() => setPhase("reveal"), 800);   // 0.80s: Titanium ZYSTRA wordmark emerges
    const t3 = setTimeout(() => setPhase("exit"), 1350);    // 1.35s: Elegant dissolution into site
    const t4 = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("zystra_intro_shown", "true");
    }, 1650);                                               // 1.65s: Complete & unmount

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isLoading]);

  const handleQuickSkip = () => {
    setPhase("exit");
    setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("zystra_intro_shown", "true");
    }, 150);
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="gemini-luxury-preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(6px)",
            transition: { duration: 0.4, ease: [0.65, 0, 0.35, 1] }
          }}
          onClick={handleQuickSkip}
          className="fixed inset-0 z-[999999] bg-[#030106] flex items-center justify-center overflow-hidden cursor-pointer select-none"
        >
          {/* ── LUXURY OBSIDIAN VOID WITH SUBTLE DEEP AMETHYST AMBIENCE ── */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,#0e0417_0%,#040107_75%,#000000_100%)] pointer-events-none" />

          {/* Soft Frosted Ambient Core Light (Subtle & Non-Neon) */}
          <motion.div
            animate={{
              scale: [0.95, 1.1, 0.95],
              opacity: [0.25, 0.45, 0.25]
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-purple-900/20 via-fuchsia-950/20 to-slate-900/30 blur-[90px] pointer-events-none"
          />

          {/* ── CENTRAL GEMINI LIQUID STAR COMPOSITION ── */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
              
              {/* Primary Gemini 4-Pointed Star SVG */}
              <motion.svg
                viewBox="0 0 100 100"
                className="w-20 h-20 sm:w-24 sm:h-24 overflow-visible relative z-10"
                animate={
                  phase === "ignite"
                    ? { scale: [0.2, 1.05, 1], rotate: [0, 45, 90] }
                    : phase === "morph"
                    ? { scale: [1, 1.12, 0.98, 1.08], rotate: [90, 180, 270, 360] }
                    : phase === "reveal"
                    ? { scale: [1.08, 1], rotate: [360, 405] }
                    : { scale: [1, 2.2], opacity: [1, 0], rotate: [405, 500] }
                }
                transition={{
                  duration: phase === "morph" ? 0.85 : 0.4,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <defs>
                  {/* Luxury Polished Platinum Chrome & Amethyst Gradient */}
                  <linearGradient id="luxuryPlatinum" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="25%" stopColor="#e2e8f0" />
                    <stop offset="60%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#4c1d95" />
                  </linearGradient>

                  {/* Inner Pure Titanium Shimmer */}
                  <linearGradient id="titaniumCore" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#cbd5e1" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>

                  <filter id="softSubtleGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Gemini 4-Point Hypocycloid Star Geometry */}
                <motion.path
                  d="M 50,3 C 50,28 28,50 3,50 C 28,50 50,72 50,97 C 50,72 72,50 97,50 C 72,50 50,28 50,3 Z"
                  fill="url(#luxuryPlatinum)"
                  stroke="#ffffff"
                  strokeWidth="0.8"
                  strokeOpacity="0.7"
                  filter="url(#softSubtleGlow)"
                  initial={{ pathLength: 0, scale: 0.85 }}
                  animate={{ pathLength: 1, scale: 1 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                />

                {/* Inner Polished Core Diamond Star */}
                <motion.path
                  d="M 50,22 C 50,36 36,50 22,50 C 36,50 50,64 50,78 C 50,64 64,50 78,50 C 64,50 50,36 50,22 Z"
                  fill="url(#titaniumCore)"
                  animate={{
                    scale: [0.9, 1.1, 0.9],
                    opacity: [0.85, 1, 0.85]
                  }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: "50% 50%" }}
                />

                {/* Pure White Diamond Pin-Point Core */}
                <circle cx="50" cy="50" r="3.2" fill="#ffffff" />
              </motion.svg>

              {/* Secondary Offset Rotating Platinum Spark */}
              <motion.svg
                viewBox="0 0 100 100"
                className="w-14 h-14 sm:w-16 sm:h-16 absolute z-5 opacity-40"
                animate={
                  phase === "ignite"
                    ? { scale: [0, 1], rotate: [45, 90] }
                    : phase === "morph"
                    ? { scale: [1, 0.85, 1.1, 0.95], rotate: [90, 0, -90, -180] }
                    : phase === "reveal"
                    ? { scale: 1, rotate: -180 }
                    : { scale: [1, 2], opacity: 0 }
                }
                transition={{ duration: 0.85, ease: "easeInOut" }}
              >
                <path
                  d="M 50,12 C 50,31 31,50 12,50 C 31,50 50,69 50,88 C 50,69 69,50 88,50 C 69,50 50,31 50,12 Z"
                  fill="url(#luxuryPlatinum)"
                  stroke="#ffffff"
                  strokeWidth="0.5"
                  strokeOpacity="0.4"
                />
              </motion.svg>

              {/* Subtle Cosmic Micro-Star Dust (Refined & Minimalist) */}
              {[0, 90, 180, 270].map((deg, i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: [deg, deg + 360],
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute w-24 h-24 sm:w-28 sm:h-28 pointer-events-none"
                  style={{ transformOrigin: "50% 50%" }}
                >
                  <div className="w-1 h-1 rounded-full bg-white/90 absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_4px_#ffffff]" />
                </motion.div>
              ))}
            </div>

            {/* ── REFINED LUXURY TYPOGRAPHY REVEAL ── */}
            <div className="mt-3 flex flex-col items-center justify-center overflow-hidden px-6 py-1 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 12, letterSpacing: "0.5em" }}
                animate={
                  phase === "reveal" || phase === "exit"
                    ? { opacity: 1, y: 0, letterSpacing: "0.4em" }
                    : { opacity: 0.2, y: 6, letterSpacing: "0.45em" }
                }
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl sm:text-2xl md:text-3xl font-black font-sans uppercase tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-purple-300"
                style={{ fontFamily: "'Bricolage Grotesque', 'Inter', sans-serif" }}
              >
                ZYSTRA
              </motion.h1>

              {/* Subtle Luxury Monospace Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={
                  phase === "reveal" || phase === "exit"
                    ? { opacity: 0.65, y: 0 }
                    : { opacity: 0 }
                }
                transition={{ delay: 0.12, duration: 0.35 }}
                className="text-[9px] sm:text-[10px] font-mono tracking-[0.35em] text-slate-300 uppercase mt-1.5"
              >
                INTELLIGENCE • TECHNOLOGY • DESIGN
              </motion.p>
            </div>

          </div>

          {/* Minimalist Skip Prompt in Corner */}
          <div className="absolute bottom-6 right-6 text-[9px] font-mono tracking-widest text-white/20 uppercase hover:text-white/60 transition-colors">
            TAP TO ENTER →
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
