import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { Search, Lightbulb, Cog, Handshake, BarChart3, Brain, Puzzle, Rocket, Target, ShieldCheck, Zap, Activity } from "lucide-react";

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
   Solve Hover Overlay (Perfect Mathematical Circular Orbit + Sensible Business Nodes)
──────────────────────────────────────── */
interface SolveHoverOverlayProps {
  visible: boolean;
}

export default function SolveHoverOverlay({ visible }: SolveHoverOverlayProps) {
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
  // Left & Right Spread Client Logo Nodes with non-overlapping percentages (Above Bottom Metrics Cards)
  const leftNodes = [
    { label: "Aastha Solar", color: "#00b2b2", logo: "/zystraClientLogo/astha-solar.webp", style: { top: "8%", left: "4%" } },
    { label: "Jawed Habib", color: "#b82987", logo: "/zystraClientLogo/JawedHabib.webp", style: { top: "32%", left: "14%" } },
    { label: "Vedika Cure", color: "#0099db", logo: "/zystraClientLogo/VedikaCure.webp", style: { top: "58%", left: "5%" } },
    { label: "Warecare", color: "#e89218", logo: "/zystraClientLogo/warecare-logo.webp", style: { top: "20%", left: "25%" } },
    { label: "Hind Solar", color: "#a855f7", logo: "/zystraClientLogo/hindSolar.webp", style: { top: "44%", left: "26%" } },
    { label: "Anand Tours", color: "#38bdf8", logo: "/zystraClientLogo/AnandTours.webp", style: { top: "66%", left: "16%" } },
  ];

  const rightNodes = [
    { label: "Kamiko Tech", color: "#e89218", logo: "/zystraClientLogo/Kamiko.webp", style: { top: "8%", right: "4%" } },
    { label: "M-Brothers", color: "#00b2b2", logo: "/zystraClientLogo/M-Brothers.webp", style: { top: "32%", right: "14%" } },
    { label: "Home Style", color: "#b82987", logo: "/zystraClientLogo/homeStyle.webp", style: { top: "58%", right: "5%" } },
    { label: "Sanatani", color: "#e11d48", logo: "/zystraClientLogo/sanatani.webp", style: { top: "20%", right: "25%" } },
    { label: "Cursor Academy", color: "#059669", logo: "/zystraClientLogo/CursorAcademy.webp", style: { top: "44%", right: "26%" } },
    { label: "Aastha Enterprise", color: "#f4b41a", logo: "/zystraClientLogo/AASTHA _ LOGO.webp", style: { top: "66%", right: "16%" } },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] w-screen h-screen max-h-screen bg-[#080312] text-white flex flex-col items-center justify-between p-4 sm:p-6 lg:p-8 overflow-hidden select-none pointer-events-none transform-gpu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, ease: "linear" }}
        >
          {/* Stardust Background Dot Grid */}
          <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(#c084fc_1px,transparent_1px)] [background-size:28px_28px]" />

          {/* Ambient Zystra Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6e019c]/10 rounded-full blur-[170px] pointer-events-none" />

          <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col justify-between items-center text-center my-auto">
            
            {/* Minimalist Header Tag */}
            <motion.div
              className="flex items-center gap-2.5 bg-zinc-900/90 border border-zinc-800 px-5 py-2 rounded-full backdrop-blur-md shadow-xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span
                className="w-2.5 h-2.5 rounded-full bg-purple-400"
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
              <span className="text-zinc-200 font-mono text-xs sm:text-sm tracking-widest uppercase font-bold">
                CLIENT SOLUTION & BRAND ENGINE
              </span>
            </motion.div>

            {/* ── FULL-SCREEN CLEAN SIDE PANELS: LEFT WING, CENTER ZYSTRA, RIGHT WING ── */}
            <div className="relative w-full max-w-6xl mx-auto h-[420px] sm:h-[460px] my-auto flex items-center justify-between px-2 sm:px-6 pointer-events-none transform-gpu">
              
              {/* ── LEFT SIDE PANEL (6 CLIENT LOGOS) ── */}
              <div className="w-[280px] sm:w-[340px] h-full flex flex-col justify-between py-2">
                {/* Row 1 */}
                <div className="flex justify-start items-center gap-6 sm:gap-10">
                  <motion.div
                    className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#09090b] p-1.5 flex items-center justify-center shadow-xl border-[3px] border-[#00b2b2]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                  >
                    <div className="w-full h-full rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                      <img src="/zystraClientLogo/astha-solar.webp" alt="Aastha Solar" decoding="async" className="w-full h-full object-contain rounded-full" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#09090b] p-1.5 flex items-center justify-center shadow-xl border-[3px] border-[#b82987] mt-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <div className="w-full h-full rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                      <img src="/zystraClientLogo/JawedHabib.webp" alt="Jawed Habib" decoding="async" className="w-full h-full object-contain rounded-full" />
                    </div>
                  </motion.div>
                </div>

                {/* Row 2 */}
                <div className="flex justify-between items-center px-2">
                  <motion.div
                    className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#09090b] p-1.5 flex items-center justify-center shadow-xl border-[3px] border-[#0099db]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.15 }}
                  >
                    <div className="w-full h-full rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                      <img src="/zystraClientLogo/VedikaCure.webp" alt="Vedika Cure" decoding="async" className="w-full h-full object-contain rounded-full" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#09090b] p-1.5 flex items-center justify-center shadow-xl border-[3px] border-[#e89218]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                  >
                    <div className="w-full h-full rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                      <img src="/zystraClientLogo/warecare-logo.webp" alt="Warecare" decoding="async" className="w-full h-full object-contain rounded-full" />
                    </div>
                  </motion.div>
                </div>

                {/* Row 3 */}
                <div className="flex justify-start items-center gap-6 sm:gap-10">
                  <motion.div
                    className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#09090b] p-1.5 flex items-center justify-center shadow-xl border-[3px] border-[#a855f7]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.25 }}
                  >
                    <div className="w-full h-full rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                      <img src="/zystraClientLogo/hindSolar.webp" alt="Hind Solar" decoding="async" className="w-full h-full object-contain rounded-full" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#09090b] p-1.5 flex items-center justify-center shadow-xl border-[3px] border-[#38bdf8] mt-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.3 }}
                  >
                    <div className="w-full h-full rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                      <img src="/zystraClientLogo/AnandTours.webp" alt="Anand Tours" decoding="async" className="w-full h-full object-contain rounded-full" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* ── CENTER CORE NODE: ZYSTRA LOGO ── */}
              <motion.div
                className="relative z-20 w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-[#09090b] border-4 border-purple-500 p-3 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.6)] shrink-0 transform-gpu"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img
                  src="/zystra-logo.jpg"
                  alt="Zystra Logo Core"
                  decoding="async"
                  className="w-full h-full object-contain rounded-full bg-white p-1"
                />
              </motion.div>

              {/* ── RIGHT SIDE PANEL (6 CLIENT LOGOS) ── */}
              <div className="w-[280px] sm:w-[340px] h-full flex flex-col justify-between py-2">
                {/* Row 1 */}
                <div className="flex justify-end items-center gap-6 sm:gap-10">
                  <motion.div
                    className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#09090b] p-1.5 flex items-center justify-center shadow-xl border-[3px] border-[#e89218] mt-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                  >
                    <div className="w-full h-full rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                      <img src="/zystraClientLogo/Kamiko.webp" alt="Kamiko Tech" decoding="async" className="w-full h-full object-contain rounded-full" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#09090b] p-1.5 flex items-center justify-center shadow-xl border-[3px] border-[#00b2b2]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <div className="w-full h-full rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                      <img src="/zystraClientLogo/M-Brothers.webp" alt="M-Brothers" decoding="async" className="w-full h-full object-contain rounded-full" />
                    </div>
                  </motion.div>
                </div>

                {/* Row 2 */}
                <div className="flex justify-between items-center px-2">
                  <motion.div
                    className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#09090b] p-1.5 flex items-center justify-center shadow-xl border-[3px] border-[#b82987]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.15 }}
                  >
                    <div className="w-full h-full rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                      <img src="/zystraClientLogo/homeStyle.webp" alt="Home Style" decoding="async" className="w-full h-full object-contain rounded-full" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#09090b] p-1.5 flex items-center justify-center shadow-xl border-[3px] border-[#e11d48]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                  >
                    <div className="w-full h-full rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                      <img src="/zystraClientLogo/sanatani.webp" alt="Sanatani" decoding="async" className="w-full h-full object-contain rounded-full" />
                    </div>
                  </motion.div>
                </div>

                {/* Row 3 */}
                <div className="flex justify-end items-center gap-6 sm:gap-10">
                  <motion.div
                    className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#09090b] p-1.5 flex items-center justify-center shadow-xl border-[3px] border-[#059669] mt-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.25 }}
                  >
                    <div className="w-full h-full rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                      <img src="/zystraClientLogo/CursorAcademy.webp" alt="Cursor Academy" decoding="async" className="w-full h-full object-contain rounded-full" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#09090b] p-1.5 flex items-center justify-center shadow-xl border-[3px] border-[#f4b41a]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.3 }}
                  >
                    <div className="w-full h-full rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                      <img src="/zystraClientLogo/AASTHA _ LOGO.webp" alt="Aastha Enterprise" decoding="async" className="w-full h-full object-contain rounded-full" />
                    </div>
                  </motion.div>
                </div>
              </div>

            </div>

            {/* ── 5. MINIMALIST PROFESSIONAL METRICS ROW ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full">
              
              {/* Metric 1 */}
              <motion.div
                className="flex flex-col items-center bg-zinc-950/90 border border-zinc-800 rounded-2xl p-3 sm:p-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.25 }}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-purple-300 font-mono tracking-tight">
                  <Counter to={99} suffix="%" />
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-zinc-400 uppercase mt-1">
                  ACCURACY RATE
                </span>
              </motion.div>

              {/* Metric 2 */}
              <motion.div
                className="flex flex-col items-center bg-zinc-950/90 border border-zinc-800 rounded-2xl p-3 sm:p-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.35 }}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-fuchsia-300 font-mono tracking-tight">
                  <Counter to={10} suffix="x" />
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-zinc-400 uppercase mt-1">
                  RESOLUTION SPEED
                </span>
              </motion.div>

              {/* Metric 3 */}
              <motion.div
                className="flex flex-col items-center bg-zinc-950/90 border border-zinc-800 rounded-2xl p-3 sm:p-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.45 }}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-purple-300 font-mono tracking-tight">
                  24/7
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-zinc-400 uppercase mt-1">
                  AUTOMATED LOGIC
                </span>
              </motion.div>

              {/* Metric 4 */}
              <motion.div
                className="flex flex-col items-center bg-zinc-950/90 border border-zinc-800 rounded-2xl p-3 sm:p-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.55 }}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-fuchsia-300 font-mono tracking-tight">
                  <Counter to={100} suffix="%" />
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-zinc-400 uppercase mt-1">
                  PROBLEMS SOLVED
                </span>
              </motion.div>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
