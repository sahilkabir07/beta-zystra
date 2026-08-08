import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Quote, ArrowUpRight, Mouse, Zap, Command, Star } from "lucide-react";
import GrowthHoverOverlay from "@/components/ui/GrowthHoverOverlay";
import SolveHoverOverlay from "@/components/ui/SolveHoverOverlay";
import ProblemsHoverOverlay from "@/components/ui/ProblemsHoverOverlay";

// Antigravity Interactive Fluid Water-Wave Particle Grid Component
function AntigravityDotField() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    // Responsive spacing: 42px on mobile (cuts ~65% canvas CPU draw calls), 28px on desktop
    const isMobile = window.innerWidth < 768;
    const spacing = isMobile ? 42 : 28;
    let grid: { baseX: number; baseY: number; x: number; y: number; radius: number; color: string; isPlus: boolean }[] = [];

    const initGrid = () => {
      grid = [];
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const baseX = c * spacing + ((r % 2) * (spacing / 2));
          const baseY = r * spacing;
          grid.push({
            baseX,
            baseY,
            x: baseX,
            y: baseY,
            radius: Math.random() > 0.75 ? (isMobile ? 2.0 : 2.5) : (isMobile ? 1.2 : 1.4),
            color: Math.random() > 0.4 ? "rgba(110, 1, 156, 0.5)" : "rgba(168, 85, 247, 0.4)",
            isPlus: (r * cols + c) % 19 === 0,
          });
        }
      }
    };
    initGrid();

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initGrid();
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Mouse tracker
    const mouse = { x: -1000, y: -1000, active: false };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const handleMouseLeave = () => {
      mouse.active = false;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    let startTime = performance.now();

    // Silky Liquid Water-Wave Wide Scatter Animation Loop
    const render = (now: number) => {
      if (!isVisible) return;

      const elapsed = now - startTime;
      ctx.clearRect(0, 0, width, height);

      const rippleRadius = isMobile ? 220 : 320;

      // Update & Render Wide Scattering Dots
      const gridLen = grid.length;
      for (let i = 0; i < gridLen; i++) {
        const dot = grid[i];

        // 1. Organic Fluid Water Wave Sine Motion
        const waveY = Math.sin(elapsed * 0.0018 + dot.baseX * 0.01 + dot.baseY * 0.01) * 7;
        const waveX = Math.cos(elapsed * 0.0015 + dot.baseX * 0.008 - dot.baseY * 0.008) * 6;

        let targetX = dot.baseX + waveX;
        let targetY = dot.baseY + waveY;

        // 2. Wide Fluid Cursor Liquid Water-Wave Radial Scattering
        if (mouse.active) {
          const dx = mouse.x - dot.baseX;
          const dy = mouse.y - dot.baseY;
          const dist = Math.hypot(dx, dy);

          if (dist < rippleRadius) {
            const ripple = Math.sin(dist * 0.025 - elapsed * 0.005) * (1 - dist / rippleRadius) * 75;
            const angle = Math.atan2(dy, dx);
            targetX -= Math.cos(angle) * ripple;
            targetY -= Math.sin(angle) * ripple;
          }
        }

        // Silky Smooth Exponential Lerp Easing Factor
        dot.x += (targetX - dot.x) * 0.065;
        dot.y += (targetY - dot.y) * 0.065;

        // Render Unconnected Dot / Plus Element
        ctx.fillStyle = dot.color;
        if (dot.isPlus) {
          ctx.font = "bold 12px monospace";
          ctx.fillText("+", dot.x - 3, dot.y + 3);
        } else {
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // IntersectionObserver to freeze canvas when scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(render);
          } else {
            cancelAnimationFrame(animationFrameId);
          }
        });
      },
      { threshold: 0.01 }
    );
    observer.observe(canvas);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />;
}

export default function Hero() {
  const [growHovered, setGrowHovered] = useState(false);
  const [solveHovered, setSolveHovered] = useState(false);
  const [problemsHovered, setProblemsHovered] = useState(false);
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
    <section className="relative w-full h-screen min-h-[680px] bg-white text-slate-900 overflow-hidden flex flex-col justify-between select-none pt-24 sm:pt-28 pb-4 sm:pb-0 font-sans">
      
      {/* ── INTERACTIVE ANTIGRAVITY DOT PARTICLE FIELD CANVAS BACKGROUND ── */}
      <AntigravityDotField />
      
      {/* Main Center Content: Perfectly Positioned Stacked Typography in Zystra Brand Fonts */}
      <div className="relative z-20 container mx-auto px-4 sm:px-8 max-w-7xl mt-1 sm:mt-2 mb-auto py-2 flex flex-col items-center justify-center text-center">
        
        {/* Top Typography Container */}
        <div className="w-full relative flex flex-col items-center">

          {/* MAIN STACKED TYPOGRAPHY BLOCK (Pure White Theme, Pure Colors, No Gradients) */}
          <div className="flex flex-col items-center justify-center tracking-tighter leading-[0.9] font-serif font-black uppercase select-none my-1" style={{ fontSize: 'clamp(52px, 6.5vw, 96px)' }}>
            
            {/* --- LINE 1: WE GROW [3D Insta] BRANDS, [3D Meta] --- */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-5 my-1">
              <span className="text-slate-900">WE</span>
              <span
                className="text-[#6e019c] font-black tracking-tight cursor-default select-none"
                onMouseEnter={() => setGrowHovered(true)}
                onMouseLeave={() => setGrowHovered(false)}
              >
                GROW
              </span>
              
              {/* 3D Instagram Icon (Floating - GPU CSS Keyframe) */}
              <div
                style={{ animation: "heroFloat1 3.2s ease-in-out infinite" }}
                className="inline-flex items-center justify-center w-[0.95em] h-[0.95em] shrink-0 hover:scale-125 transition-transform duration-200 transform-gpu will-change-transform"
              >
                <img src="/heroBgImg/insta.png" alt="Instagram 3D" className="w-full h-full object-contain" />
              </div>

              <span className="text-slate-900">BRANDS,</span>

              {/* 3D Meta / Facebook Icon (Floating - GPU CSS Keyframe) */}
              <div
                style={{ animation: "heroFloat2 3.6s ease-in-out infinite 0.3s" }}
                className="inline-flex items-center justify-center w-[0.95em] h-[0.95em] shrink-0 hover:scale-125 transition-transform duration-200 transform-gpu will-change-transform"
              >
                <img src="/heroBgImg/meta.png" alt="Meta 3D" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* --- LINE 2: (CREATE) [3D YouTube] EXPERIENCES --- */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 my-1 relative">

              {/* CREATE with Zystra Purple Oval Loop */}
              <div className="relative inline-block px-5 sm:px-9 py-1">
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 200 80" preserveAspectRatio="none">
                  <ellipse cx="100" cy="40" rx="96" ry="36" fill="none" stroke="#6e019c" strokeWidth="4" strokeDasharray="4 0" transform="rotate(-2 100 40)" />
                </svg>
                <span className="text-slate-900 relative z-10">CREATE</span>
              </div>

              {/* 3D YouTube Icon (Floating - GPU CSS Keyframe) */}
              <div
                style={{ animation: "heroFloat3 3.8s ease-in-out infinite 0.6s" }}
                className="inline-flex items-center justify-center w-[0.95em] h-[0.95em] shrink-0 hover:scale-125 transition-transform duration-200 transform-gpu will-change-transform"
              >
                <img src="/heroBgImg/youtube.png" alt="YouTube 3D" className="w-full h-full object-contain" />
              </div>

              <span className="text-slate-900 font-black">EXPERIENCES</span>
            </div>

            {/* --- LINE 3: [3D Twitter] SOLVE [3D Google Ads] BUSINESS PROBLEMS. --- */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 my-1 relative">
              {/* 3D Twitter/X Icon (Floating - GPU CSS Keyframe) */}
              <div
                style={{ animation: "heroFloat4 4.0s ease-in-out infinite 0.8s" }}
                className="inline-flex items-center justify-center w-[0.95em] h-[0.95em] shrink-0 hover:scale-125 transition-transform duration-200 transform-gpu will-change-transform"
              >
                <img src="/heroBgImg/twitter.png" alt="Twitter 3D" className="w-full h-full object-contain" />
              </div>

              <span
                className="text-[#6e019c] font-black tracking-tight cursor-default select-none"
                onMouseEnter={() => setSolveHovered(true)}
                onMouseLeave={() => setSolveHovered(false)}
              >
                SOLVE
              </span>

              {/* 3D Google Ads Icon (Floating - GPU CSS Keyframe) */}
              <div
                style={{ animation: "heroFloat5 3.5s ease-in-out infinite 0.4s" }}
                className="inline-flex items-center justify-center w-[0.95em] h-[0.95em] shrink-0 hover:scale-125 transition-transform duration-200 transform-gpu will-change-transform"
              >
                <img src="/heroBgImg/googleAdds.png" alt="Google Ads 3D" className="w-full h-full object-contain" />
              </div>

              <span className="text-slate-900">BUSINESS</span>
              <span
                className="text-[#6e019c] font-black tracking-tight cursor-default select-none"
                onMouseEnter={() => setProblemsHovered(true)}
                onMouseLeave={() => setProblemsHovered(false)}
              >
                PROBLEMS.
              </span>

              {/* 3D Google Icon (Floating - GPU CSS Keyframe) */}
              <div
                style={{ animation: "heroFloat6 3.9s ease-in-out infinite 0.7s" }}
                className="inline-flex items-center justify-center w-[0.95em] h-[0.95em] shrink-0 hover:scale-125 transition-transform duration-200 transform-gpu will-change-transform"
              >
                <img src="/heroBgImg/google.png" alt="Google 3D" className="w-full h-full object-contain" />
              </div>
            </div>

          </div>

        </div>

        {/* 
          PREMIUM INTERACTIVE "LET'S TALK!" OVAL CAPSULE BADGE (FITS 100% IN SCREEN FRAME)
        */}
        <div className="mt-3 sm:mt-5 mb-2 z-50 flex justify-center items-center pointer-events-none w-full">
          <a
            href="/contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="pointer-events-auto cursor-pointer group relative block"
          >
            {/* Ambient Pulsing Glow Halo */}
            <div className="absolute inset-0 rounded-full bg-[#6e019c]/35 blur-xl group-hover:bg-[#6e019c]/60 transition-all duration-300 scale-110" />

            {/* Main Interactive Oval Capsule Badge */}
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-gradient-to-br from-[#6e019c] via-[#5b0182] to-[#3b0057] border-2 border-purple-400/50 shadow-[0_12px_32px_rgba(110,1,156,0.45)] flex items-center gap-3 overflow-hidden transition-all duration-300 transform-gpu"
            >
              {/* Rotating Outer Dashed Accent Border SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 200 60" preserveAspectRatio="none">
                <rect x="2" y="2" width="196" height="56" rx="28" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.35" />
              </svg>

              {/* Inner Text & Arrow */}
              <span className="relative z-10 font-sans font-black text-white text-xs sm:text-base lg:text-lg uppercase tracking-widest flex items-center gap-1.5">
                <span>LET'S</span>
                <span>TALK!</span>
              </span>

              <div className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-white group-hover:text-[#6e019c] transition-colors duration-300 shrink-0">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 stroke-[3] text-white group-hover:text-[#6e019c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </motion.div>
          </a>
        </div>

      </div>

    </section>

    {/* INFINITE MOVING SERVICES MARQUEE - BELOW HERO FRAME 1 (VISIBLE ON SCROLL) */}
    <div className="relative z-20 w-full border-t border-b border-purple-800 bg-[#6e019c] py-6 sm:py-7 overflow-hidden select-none">
      <div className="flex items-center gap-8 sm:gap-14 whitespace-nowrap w-max animate-marquee-gpu">
        {[
          "AI Growth Engineering",
          "Performance Marketing",
          "Bespoke Web Development",
          "Branding & Creative Strategy",
          "SEO & Content Automation",
          "Conversion Rate Optimization",
          "Omnichannel Ad Campaigns",
          "Social Media Scaling",
          "AI Growth Engineering",
          "Performance Marketing",
          "Bespoke Web Development",
          "Branding & Creative Strategy",
          "SEO & Content Automation",
          "Conversion Rate Optimization",
          "Omnichannel Ad Campaigns",
          "Social Media Scaling"
        ].map((service, idx) => (
          <div key={idx} className="flex items-center gap-4 font-mono text-sm sm:text-base font-black tracking-widest uppercase">
            <span className={`w-3 h-3 rounded-full shrink-0 ${idx % 2 === 0 ? "bg-white" : "bg-slate-900"}`} />
            <span className={idx % 2 === 0 ? "text-white font-black" : "text-slate-900 font-black"}>
              {service}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Growth Dashboard Hover Overlay */}
    <GrowthHoverOverlay visible={growHovered} />

    {/* Solve Engine Hover Overlay */}
    <SolveHoverOverlay visible={solveHovered} />

    {/* Problems Elimination Hover Overlay */}
    <ProblemsHoverOverlay visible={problemsHovered} />

    <style dangerouslySetInnerHTML={{
      __html: `
        @keyframes heroFloat1 { 0%, 100% { transform: translateY(-6px) rotate(-6deg); } 50% { transform: translateY(6px) rotate(-2deg); } }
        @keyframes heroFloat2 { 0%, 100% { transform: translateY(6px) rotate(6deg); } 50% { transform: translateY(-6px) rotate(10deg); } }
        @keyframes heroFloat3 { 0%, 100% { transform: translateY(-7px) rotate(-12deg); } 50% { transform: translateY(7px) rotate(-8deg); } }
        @keyframes heroFloat4 { 0%, 100% { transform: translateY(-6px) rotate(6deg); } 50% { transform: translateY(6px) rotate(2deg); } }
        @keyframes heroFloat5 { 0%, 100% { transform: translateY(6px) rotate(-6deg); } 50% { transform: translateY(-6px) rotate(-10deg); } }
        @keyframes heroFloat6 { 0%, 100% { transform: translateY(-7px) rotate(12deg); } 50% { transform: translateY(7px) rotate(8deg); } }
      `
    }} />
  </>
  );
}
