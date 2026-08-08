import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

function ServicesHeroInteractiveBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768 || ("ontouchstart" in window && navigator.maxTouchPoints > 0);
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let parent = canvas.parentElement;
    let width = (canvas.width = parent?.offsetWidth || window.innerWidth);
    let height = (canvas.height = parent?.offsetHeight || window.innerHeight);

    // Pause when offscreen for 120 FPS performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animationFrameId) {
            animationFrameId = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initGrid();
    };
    window.addEventListener("resize", handleResize);

    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      if (mouseX >= 0 && mouseX <= rect.width && mouseY >= 0 && mouseY <= rect.height) {
        mouse.x = mouseX;
        mouse.y = mouseY;
        mouse.active = true;
      } else {
        mouse.active = false;
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    const spacing = 26;
    interface Node {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
      radius: number;
      alpha: number;
      isAccent: boolean;
    }

    let grid: Node[] = [];

    const initGrid = () => {
      grid = [];
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const baseX = c * spacing;
          const baseY = r * spacing;
          grid.push({
            baseX,
            baseY,
            x: baseX,
            y: baseY,
            radius: 1.2,
            alpha: 0.25,
            isAccent: (r * cols + c) % 17 === 0,
          });
        }
      }
    };

    initGrid();

    const startTime = performance.now();

    const render = (now: number) => {
      if (!isVisible) {
        animationFrameId = 0;
        return;
      }

      const elapsed = now - startTime;
      ctx.clearRect(0, 0, width, height);

      const maxDist = 220;

      for (let i = 0; i < grid.length; i++) {
        const node = grid[i];

        // 1. Subtle Sine Wave Drift
        const waveY = Math.sin(elapsed * 0.0018 + node.baseX * 0.01 + node.baseY * 0.01) * 3;
        let targetX = node.baseX;
        let targetY = node.baseY + waveY;
        let targetRadius = 1.2;
        let targetAlpha = 0.25;

        // 2. Interactive Cursor Radial Displacement & Glow Activation
        if (mouse.active) {
          const dx = mouse.x - node.baseX;
          const dy = mouse.y - node.baseY;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const force = 1 - dist / maxDist;
            const ripple = Math.sin(dist * 0.03 - elapsed * 0.005) * force * 24;
            const angle = Math.atan2(dy, dx);

            targetX -= Math.cos(angle) * (ripple + force * 16);
            targetY -= Math.sin(angle) * (ripple + force * 16);
            targetRadius = 1.2 + force * 2.8;
            targetAlpha = 0.25 + force * 0.75;
          }
        }

        // Smooth Lerp Physics
        node.x += (targetX - node.x) * 0.08;
        node.y += (targetY - node.y) * 0.08;
        node.radius += (targetRadius - node.radius) * 0.1;
        node.alpha += (targetAlpha - node.alpha) * 0.1;

        // Render Node
        if (node.isAccent) {
          ctx.fillStyle = `rgba(217, 70, 239, ${node.alpha * 1.2})`;
          ctx.font = `${Math.round(node.radius * 3 + 6)}px monospace`;
          ctx.fillText("+", node.x - 3, node.y + 3);
        } else {
          ctx.fillStyle = `rgba(168, 85, 247, ${node.alpha})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

export default function ServicesHero() {


  const marqueeItems = [
    "DIGITAL MARKETING",
    "PERFORMANCE ADS",
    "SEO OPTIMISATION",
    "META & INSTAGRAM ADS",
    "GOOGLE ADS PPC",
    "BRANDING & CREATIVE",
    "CONVERSION FUNNELS",
    "REVOPS & AUTOMATION",
    "VIDEO AD PRODUCTION",
    "WEB DEVELOPMENT"
  ];

  return (
    <section className="relative w-full overflow-hidden select-none">
      {/* Outer Wrapper with height constrained to ONE FRAME */}
      <div className="relative min-h-[85vh] lg:min-h-[88vh] max-h-[960px] flex flex-col justify-between pt-16 sm:pt-20 pb-0 bg-[#090314] text-white">
        {/* Ambient Glows & Interactive Grid Canvas using Zystra Brand Colors */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Zystra Brand Colors: Dark Purple #33015a & Vibrant Purple #6e019c */}
          <div className="absolute -top-24 right-1/4 w-[600px] h-[600px] bg-[#6e019c]/35 rounded-full blur-[160px]" />
          <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#33015a]/50 rounded-full blur-[140px]" />
          <ServicesHeroInteractiveBg />
        </div>

        {/* Main Content Hero Canvas — FITS PROPERLY IN ONE FRAME */}
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl relative z-10 my-auto pt-4 pb-0">
          
          {/* GIANT BACKGROUND TYPOGRAPHY & PERSON OVERLAY (UNCUT FULL IMAGE) */}
          <div className="relative w-full flex items-center justify-center text-center mt-4 sm:mt-6 mb-0">
            
            {/* GIANT TITLE BLOCK TOGETHER (BEHIND THE PERSON) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative z-10 flex flex-col items-center justify-center leading-[0.78] sm:leading-[0.8] select-none py-2"
            >
              <h1 
                className="text-[18vw] sm:text-[15.5vw] md:text-[14vw] lg:text-[12.5vw] font-black uppercase tracking-tighter text-white"
                style={{ fontFamily: "'Barlow Condensed', 'Outfit', sans-serif" }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300">
                  DIGITAL
                </span>
              </h1>

              <h1 
                className="text-[18vw] sm:text-[15.5vw] md:text-[14vw] lg:text-[12.5vw] font-black uppercase tracking-tighter text-white"
                style={{ fontFamily: "'Barlow Condensed', 'Outfit', sans-serif" }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-100 to-white">
                  MARKETING
                </span>
              </h1>
            </motion.div>

            {/* PERSON CUTOUT OVERLAY (MOVED HIGHER UP OVER TITLE) */}
            <div className="absolute inset-0 z-20 flex justify-center items-center pointer-events-none -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-[260px] sm:max-w-[360px] md:max-w-[430px] lg:max-w-[480px] w-full"
              >
                <img 
                  src="/photorealistic-marketing-hero-cutout.png" 
                  alt="Zystra Digital Marketing Specialist" 
                  className="w-full h-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)]"
                />
              </motion.div>
            </div>


          </div>




          {/* OVERLAY CONTENT — LEFT COLUMN (STATS UPLIFTED HIGHER UP) */}
          <div className="absolute left-4 sm:left-8 lg:left-12 top-[42%] -translate-y-1/2 z-30 hidden sm:flex flex-col gap-6 max-w-[190px]">
            {/* METRICS STACK WITH SEPARATORS IN ZYSTRA PURPLE */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-3"
            >
              {/* Stat 1 */}
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-extrabold font-sans tracking-tight text-white">
                  500<span className="text-purple-400">+</span>
                </span>
                <span className="text-[9px] font-mono font-bold tracking-wider text-slate-300 uppercase">
                  BRANDS SCALED
                </span>
              </div>

              <div className="w-12 h-[1px] bg-purple-500/30" />

              {/* Stat 2 */}
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-extrabold font-sans tracking-tight text-white">
                  125<span className="text-purple-400">+</span>
                </span>
                <span className="text-[9px] font-mono font-bold tracking-wider text-slate-300 uppercase">
                  ADS CAMPAIGNS
                </span>
              </div>

              <div className="w-12 h-[1px] bg-purple-500/30" />

              {/* Stat 3 */}
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-extrabold font-sans tracking-tight text-white">
                  450M<span className="text-purple-400">+</span>
                </span>
                <span className="text-[9px] font-mono font-bold tracking-wider text-slate-300 uppercase">
                  AD IMPRESSIONS
                </span>
              </div>

            </motion.div>
          </div>

          {/* OVERLAY CONTENT — RIGHT COLUMN (EMBLEM, INFO & PLAY BUTTON UPLIFTED HIGHER UP) */}
          <div className="absolute right-4 sm:right-8 lg:right-12 top-[42%] -translate-y-1/2 z-30 hidden sm:flex flex-col justify-between items-end gap-10 max-w-[240px] lg:max-w-[270px]">
            
            {/* TOP RIGHT CIRCULAR STAR EMBLEM BADGE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-14 h-14 rounded-full border border-purple-400/40 flex items-center justify-center backdrop-blur-md bg-purple-950/30 group"
            >
              <div className="absolute inset-1 rounded-full border border-dashed border-purple-400/50 animate-[spin_12s_linear_infinite]" />
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold shadow-lg transform group-hover:scale-110 transition-transform bg-[#6e019c]">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
              </div>
            </motion.div>

            {/* BOTTOM RIGHT PARAGRAPH + CTA + PLAY BUTTON */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-end gap-4 text-right"
            >
              <p className="text-xs text-slate-200 font-medium leading-relaxed max-w-[220px] select-text">
                Zystra is a full-stack digital marketing agency. We engineer high-ROI Meta & Google ads, SEO rankings, and performance web experiences.
              </p>
            </motion.div>

          </div>

          {/* MOBILE ADAPTIVE STATS & CTA GRID (FOR SMALL SCREENS) */}
          <div className="flex sm:hidden flex-col gap-4 mt-4 z-30 relative px-2">
            <div className="grid grid-cols-3 gap-2 text-center p-2.5 rounded-2xl bg-[#33015a]/70 backdrop-blur-md border border-purple-500/30">
              <div>
                <div className="text-lg font-black text-purple-300">500+</div>
                <div className="text-[8px] font-mono text-slate-300 uppercase">BRANDS</div>
              </div>
              <div>
                <div className="text-lg font-black text-purple-300">420%</div>
                <div className="text-[8px] font-mono text-slate-300 uppercase">ROAS</div>
              </div>
              <div>
                <div className="text-lg font-black text-purple-300">450M+</div>
                <div className="text-[8px] font-mono text-slate-300 uppercase">REACH</div>
              </div>
            </div>

            <p className="text-xs text-center text-slate-200 font-medium leading-relaxed">
              Zystra is a full-stack digital marketing agency engineered for maximum ROI and performance growth.
            </p>
          </div>

        </div>


        {/* BOTTOM TICKER / MARQUEE RIBBON TAPE WITH ZYSTRA VIBRANT PURPLE THEME */}
        <div className="relative w-full z-40 mt-0 overflow-hidden shadow-2xl">

          <div 
            className="w-full py-3 flex items-center overflow-hidden font-black uppercase tracking-wider text-xs sm:text-sm lg:text-base border-y bg-[#6e019c] text-white border-purple-400/40"
            style={{ 
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
            }}
          >
            {/* MARQUEE RUNNING STRIP */}
            <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
                <div key={index} className="flex items-center mx-4">
                  <span className="font-extrabold tracking-widest">{item}</span>
                  <span className="mx-4 text-base">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

