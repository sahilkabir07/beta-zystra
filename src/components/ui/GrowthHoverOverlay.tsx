import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";

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
   Main Doodle Growth Overlay (Zystra Brand Neon Theme)
──────────────────────────────────────── */
interface GrowthHoverOverlayProps {
  visible: boolean;
}

export default function GrowthHoverOverlay({ visible }: GrowthHoverOverlayProps) {
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
          className="fixed inset-0 z-[999] w-screen h-screen max-h-screen bg-black text-white flex flex-col items-center justify-between p-4 sm:p-6 lg:p-8 overflow-hidden select-none pointer-events-none transform-gpu will-change-transform"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Ambient Zystra Purple Glows (Soft & Elegant, Not Blinding) */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#6e019c]/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#a855f7]/15 rounded-full blur-[150px] pointer-events-none" />

          {/* Minimalist Professional Stardust Background Dot Grid */}
          <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#c084fc_1px,transparent_1px)] [background-size:28px_28px]" />

          <div className="relative z-10 max-w-6xl mx-auto w-full h-full flex flex-col justify-between items-center text-center my-auto">
            
            {/* Minimal Zystra Brand Header */}
            <motion.div
              className="flex items-center gap-2.5 bg-purple-950/40 border border-purple-500/30 px-4 py-1.5 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-purple-400"
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
              <span className="text-purple-300 font-mono text-xs tracking-widest uppercase font-bold">
                GROWTH TELEMETRY
              </span>
            </motion.div>

            {/* ── CENTER DOODLE ARTWORK: BARS + PIE CHART (ZYSTRA BRAND THEME) ── */}
            <div className="relative w-full max-w-5xl h-[260px] sm:h-[320px] lg:h-[360px] my-auto flex items-center justify-center gap-4">
              
              <svg
                viewBox="0 0 700 320"
                className="w-full h-full overflow-visible drop-shadow-[0_0_18px_rgba(168,85,247,0.3)]"
              >
                <defs>
                  {/* Zystra Purple Hatching Pattern */}
                  <pattern
                    id="purpleDoodleHatch"
                    width="12"
                    height="12"
                    patternTransform="rotate(45 0 0)"
                    patternUnits="userSpaceOnUse"
                  >
                    <line x1="0" y1="0" x2="0" y2="12" stroke="#a855f7" strokeWidth="1.8" opacity="0.6" />
                  </pattern>

                  {/* Zystra Fuchsia Hatching Pattern */}
                  <pattern
                    id="fuchsiaDoodleHatch"
                    width="12"
                    height="12"
                    patternTransform="rotate(-45 0 0)"
                    patternUnits="userSpaceOnUse"
                  >
                    <line x1="0" y1="0" x2="0" y2="12" stroke="#d946ef" strokeWidth="1.8" opacity="0.6" />
                  </pattern>
                </defs>

                {/* ── LEFT SECTION: DOODLE NEON PIE CHART (EXPLODED 3D NEON WEDGES) ── */}
                <g transform="translate(130, 160)">
                  {/* Outer Concentric Neon Orbit Ring */}
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="82"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="2"
                    strokeDasharray="8 6"
                    opacity="0.45"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Neon Pie Slice 1 (Main Sector: 0° to 162°) */}
                  <motion.path
                    d="M 0 0 L 65 0 A 65 65 0 0 1 -61.8 20.1 Z"
                    fill="url(#purpleDoodleHatch)"
                    stroke="#c084fc"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  />

                  {/* Neon Pie Slice 2 (Exploded Pop-out Sector: 162° to 270°) */}
                  <motion.path
                    d="M -8 -8 L -69.8 12.1 A 65 65 0 0 1 -8 -73 Z"
                    fill="url(#fuchsiaDoodleHatch)"
                    stroke="#f472b6"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1.06 }}
                    transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  />

                  {/* Neon Pie Slice 3 (Top-Right Sector: 270° to 360°) */}
                  <motion.path
                    d="M 0 0 L 0 -65 A 65 65 0 0 1 65 0 Z"
                    fill="rgba(110, 1, 156, 0.4)"
                    stroke="#a855f7"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />

                  {/* Glowing Center Badge */}
                  <circle cx="0" cy="0" r="28" fill="#070212" stroke="#d946ef" strokeWidth="2.5" />
                  <text textAnchor="middle" y="2" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="sans-serif">
                    +2.8x
                  </text>
                  <text textAnchor="middle" y="15" fill="#c084fc" fontSize="9" fontWeight="700" fontFamily="monospace">
                    SCALE
                  </text>
                </g>

                {/* ── RIGHT SECTION: DOODLE SKETCH BARS & ASCENDING ARROW ── */}
                <g transform="translate(250, 0)">
                  {/* Bar 1 */}
                  <motion.g
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "bottom" }}
                  >
                    <rect x="30" y="200" width="50" height="90" rx="4" fill="url(#purpleDoodleHatch)" stroke="#a855f7" strokeWidth="2.5" />
                    <path d="M 30 200 L 80 200 M 30 290 L 80 290" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" />
                  </motion.g>

                  {/* Bar 2 */}
                  <motion.g
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "bottom" }}
                  >
                    <rect x="110" y="150" width="50" height="140" rx="4" fill="url(#fuchsiaDoodleHatch)" stroke="#d946ef" strokeWidth="2.5" />
                    <path d="M 110 150 L 160 150 M 110 290 L 160 290" stroke="#d946ef" strokeWidth="3" strokeLinecap="round" />
                  </motion.g>

                  {/* Bar 3 */}
                  <motion.g
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "bottom" }}
                  >
                    <rect x="190" y="110" width="50" height="180" rx="4" fill="url(#purpleDoodleHatch)" stroke="#a855f7" strokeWidth="2.5" />
                    <path d="M 190 110 L 240 110 M 190 290 L 240 290" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" />
                  </motion.g>

                  {/* Bar 4 */}
                  <motion.g
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "bottom" }}
                  >
                    <rect x="270" y="70" width="50" height="220" rx="4" fill="url(#fuchsiaDoodleHatch)" stroke="#d946ef" strokeWidth="2.5" />
                    <path d="M 270 70 L 320 70 M 270 290 L 320 290" stroke="#d946ef" strokeWidth="3" strokeLinecap="round" />
                  </motion.g>

                  {/* Bar 5 */}
                  <motion.g
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "bottom" }}
                  >
                    <rect x="350" y="30" width="50" height="260" rx="4" fill="url(#purpleDoodleHatch)" stroke="#a855f7" strokeWidth="2.5" />
                    <path d="M 350 30 L 400 30 M 350 290 L 400 290" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" />
                  </motion.g>

                  {/* Baseline */}
                  <line x1="10" y1="290" x2="420" y2="290" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" opacity="0.8" />

                  {/* DOODLE DOUBLE-OUTLINE ASCENDING ARROW */}
                  <motion.path
                    d="M 35 130 L 130 170 L 250 50 L 390 15"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />

                  <motion.path
                    d="M 35 130 L 130 170 L 250 50 L 390 15"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />

                  {/* Arrow Head Accent */}
                  <motion.path
                    d="M 365 15 L 390 15 L 390 40"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.1 }}
                  />
                </g>
              </svg>
            </div>

            {/* ── 3. GIANT DOODLE NUMBERS & METRICS ROW (ZYSTRA BRAND PALETTE) ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full">
              
              {/* Metric 1 */}
              <motion.div
                className="flex flex-col items-center bg-purple-950/25 border border-purple-500/30 rounded-2xl p-3 sm:p-4 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.12)]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-purple-300 font-mono tracking-tight">
                  <Counter prefix="+" to={324} suffix="%" />
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-slate-300 uppercase mt-1">
                  ROI GROWTH
                </span>
              </motion.div>

              {/* Metric 2 */}
              <motion.div
                className="flex flex-col items-center bg-fuchsia-950/25 border border-fuchsia-500/30 rounded-2xl p-3 sm:p-4 backdrop-blur-md shadow-[0_0_15px_rgba(217,70,239,0.12)]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-fuchsia-300 font-mono tracking-tight">
                  <Counter to={12} suffix="x" />
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-slate-300 uppercase mt-1">
                  LEADS MULTIPLIER
                </span>
              </motion.div>

              {/* Metric 3 */}
              <motion.div
                className="flex flex-col items-center bg-purple-950/25 border border-purple-500/30 rounded-2xl p-3 sm:p-4 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.12)]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-purple-300 font-mono tracking-tight">
                  <Counter to={150} suffix="+" />
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-slate-300 uppercase mt-1">
                  CLIENTS SCALED
                </span>
              </motion.div>

              {/* Metric 4 */}
              <motion.div
                className="flex flex-col items-center bg-fuchsia-950/25 border border-fuchsia-500/30 rounded-2xl p-3 sm:p-4 backdrop-blur-md shadow-[0_0_15px_rgba(217,70,239,0.12)]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-fuchsia-300 font-mono tracking-tight">
                  <Counter to={98} suffix="%" />
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-slate-300 uppercase mt-1">
                  RETENTION RATE
                </span>
              </motion.div>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
