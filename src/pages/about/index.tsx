import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, Phone, Sparkles, Rocket, Globe, Award, MessageSquare } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/shared/SEO";
import DoodleSocialArrow from "@/components/shared/DoodleSocialArrow";
import AboutInteractiveBg from "@/components/ui/AboutInteractiveBg";

function AnimatedStatNumber({ value, triggerKey = 0 }: { value: string; triggerKey?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { margin: "-20px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView && triggerKey === 0) return;

    const numericMatch = value.match(/(\d+)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(numericMatch[1], 10);
    const suffix = value.replace(numericMatch[1], "");
    const startTime = performance.now();
    const duration = 350; // Super fast & smooth 350ms
    let lastCount = -1;

    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easedProgress * targetNum);

      if (currentCount !== lastCount) {
        lastCount = currentCount;
        setDisplayValue(`${currentCount}${suffix}`);
      }

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, value, triggerKey]);

  return <span ref={ref}>{displayValue}</span>;
}

function RenderStatGraph({ type, index }: { type: string; index: number }) {
  if (type === "bar-chart") {
    const barHeights = [22, 38, 54, 70, 84, 96];
    return (
      <svg className="relative z-10 w-full h-full overflow-visible" viewBox="0 0 280 100" fill="none">
        <defs>
          <linearGradient id={`barGrad-${index}`} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#33015a" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#818cf8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="1" />
          </linearGradient>
        </defs>
        {barHeights.map((h, bIdx) => {
          const barWidth = 24;
          const x = 20 + bIdx * 42;
          const y = 95 - h;
          return (
            <g key={bIdx}>
              <motion.rect
                x={x}
                width={barWidth}
                rx={6}
                fill={`url(#barGrad-${index})`}
                initial={{ y: 95, height: 0, opacity: 0 }}
                whileInView={{ y, height: h, opacity: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: bIdx * 0.03 }}
                style={{ willChange: "transform, opacity" }}
              />
              {bIdx === barHeights.length - 1 && (
                <motion.circle
                  cx={x + barWidth / 2}
                  cy={y}
                  r="5"
                  fill="#ffffff"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.2, delay: 0.25 }}
                />
              )}
            </g>
          );
        })}
      </svg>
    );
  }

  if (type === "stepped-line") {
    const stepPath = "M 15 85 L 75 85 L 75 62 L 135 62 L 135 38 L 195 38 L 195 18 L 255 18";
    return (
      <svg className="relative z-10 w-full h-full overflow-visible" viewBox="0 0 280 100" fill="none">
        <defs>
          <linearGradient id={`stepGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity="1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <motion.path
          d={stepPath}
          stroke={`url(#stepGrad-${index})`}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: "stroke-dashoffset, opacity" }}
        />
        {[[75, 62], [135, 38], [195, 18], [255, 18]].map(([nx, ny], nIdx) => (
          <motion.circle
            key={nIdx}
            cx={nx}
            cy={ny}
            r={nIdx === 3 ? 5.5 : 3.5}
            fill={nIdx === 3 ? "#ffffff" : "#c084fc"}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.15, delay: 0.08 + nIdx * 0.06 }}
          />
        ))}
      </svg>
    );
  }

  if (type === "wave-pulse") {
    const wave1 = "M 15 75 C 60 55, 90 85, 140 45 C 180 20, 220 50, 260 20";
    const wave2 = "M 15 85 C 60 70, 90 95, 140 60 C 180 35, 220 65, 260 35";
    return (
      <svg className="relative z-10 w-full h-full overflow-visible" viewBox="0 0 280 100" fill="none">
        <defs>
          <linearGradient id={`waveGrad1-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="1" />
          </linearGradient>
          <linearGradient id={`waveGrad2-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <motion.path
          d={wave2}
          stroke={`url(#waveGrad2-${index})`}
          strokeWidth="2.5"
          strokeDasharray="4 4"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.7 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ willChange: "stroke-dashoffset, opacity" }}
        />
        <motion.path
          d={wave1}
          stroke={`url(#waveGrad1-${index})`}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: "stroke-dashoffset, opacity" }}
        />
        <motion.circle
          cx={260}
          cy={20}
          r="5.5"
          fill="#ffffff"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.2, delay: 0.25 }}
        />
      </svg>
    );
  }

  // Default: Smooth Exponential Curve with Area Glow (Card 1)
  const curvePath = "M 15 80 Q 70 75, 130 50 T 260 18";
  const areaPath = "M 15 80 Q 70 75, 130 50 T 260 18 L 260 95 L 15 95 Z";
  return (
    <svg className="relative z-10 w-full h-full overflow-visible" viewBox="0 0 280 100" fill="none">
      <defs>
        <linearGradient id={`curveGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#c084fc" stopOpacity="1" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id={`areaGrad-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </linearGradient>
      </defs>

      <motion.path
        d={areaPath}
        fill={`url(#areaGrad-${index})`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.3, delay: 0.05 }}
      />

      <motion.path
        d={curvePath}
        stroke={`url(#curveGrad-${index})`}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: "stroke-dashoffset, opacity" }}
      />

      <motion.circle
        cx={260}
        cy={18}
        r="5.5"
        fill="#ffffff"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.2, delay: 0.25 }}
      />
    </svg>
  );
}

function StatCard({ stat, index }: { stat: any; index: number }) {
  const [animKey, setAnimKey] = useState(0);

  const handleMouseEnter = () => {
    setAnimKey((prev) => prev + 1);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-purple-500/25 bg-[#0a0618]/90 backdrop-blur-xl p-3.5 sm:p-7 flex flex-col justify-between min-h-[250px] sm:min-h-[350px] shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-purple-400/50 hover:shadow-[0_20px_40px_rgba(110,1,156,0.35)] transition-all duration-500 cursor-pointer"
    >
      {/* Glowing Bottom Light Bar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-2 bg-gradient-to-r from-purple-600 via-purple-300 to-indigo-500 blur-md opacity-80 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-purple-600/35 blur-2xl rounded-full pointer-events-none" />

      {/* Card Header: Timestamp & Filter Pill */}
      <div className="flex items-center justify-between z-10 text-[9px] sm:text-[11px] font-mono text-slate-400">
        <span className="truncate pr-1 font-sans font-medium text-[10px] sm:text-xs text-slate-300">{stat.timeframe}</span>
        <div className="flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 shrink-0 text-[9px] sm:text-xs">
          <span>{stat.filter}</span>
          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Chart Graphic Area with Grid & Dynamic Custom Graph */}
      <div className="relative w-full h-20 sm:h-32 my-1 sm:my-3 flex items-center justify-center overflow-hidden">
        {/* SVG Grid Overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 280 100">
          <pattern id={`grid-stat-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#a855f7" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill={`url(#grid-stat-${index})`} />
        </svg>

        {/* Custom Animated Graph Component */}
        <RenderStatGraph key={`graph-${animKey}`} type={stat.graphType} index={index} />
      </div>

      {/* Metrics & Subtitles */}
      <div className="relative z-10 flex flex-col items-center text-center gap-1 pt-0.5 sm:pt-1">
        <span className="text-[9px] sm:text-xs font-mono tracking-widest text-slate-400 uppercase" style={{ fontFamily: "MONO" }}>
          {stat.label}
        </span>

        <div className="flex items-baseline justify-center gap-1">
          <span
            className="font-black text-white leading-none tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(24px, 5.5vw, 48px)" }}
          >
            <AnimatedStatNumber key={`num-${animKey}`} value={stat.value} triggerKey={animKey} />
          </span>
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 self-center group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>

        <span className="text-[9px] sm:text-[11px] font-mono text-slate-400/80 tracking-wide leading-tight truncate max-w-full" style={{ fontFamily: "MONO" }}>
          {stat.subtitle}
        </span>
      </div>
    </div>
  );
}

function LineReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        animate={inView ? { y: "0%", opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay }}
        style={{ willChange: "transform, opacity" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

function IdentityCard({ card }: { card: any }) {
  return (
    <div
      className={`group relative bg-gradient-to-b from-[#140c33]/95 via-[#0d0722]/95 to-[#080510] text-white p-3.5 sm:p-4 pb-5 sm:pb-6 rounded-[24px] sm:rounded-[28px] shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-purple-500/30 transition-all duration-500 hover:scale-[1.04] hover:z-30 hover:border-fuchsia-400 hover:shadow-[0_30px_70px_rgba(168,85,247,0.45)] cursor-pointer select-none flex flex-col justify-between h-full min-h-[460px] sm:min-h-[490px] ${card.rotation}`}
    >
      {/* Top Purple/Fuchsia Sticker Badge glued onto card frame */}
      <div className="absolute -top-3.5 right-4 z-30 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-black text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-sm shadow-[0_4px_14px_rgba(168,85,247,0.5)] border border-purple-300/40 transform rotate-3 group-hover:scale-110 group-hover:rotate-0 transition-all">
        {card.badge}
      </div>

      {/* Top Left Margin Camera Spec Notches */}
      <div className="absolute top-2.5 left-4 text-[9px] font-mono font-extrabold text-purple-300/80 tracking-widest uppercase pointer-events-none z-10">
        + HUD // {card.code}
      </div>

      {/* Camera Corner HUD Alignment Marks */}
      <div className="absolute top-2.5 right-12 w-2 h-2 border-r border-t border-purple-400/40 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-l border-b border-purple-400/40 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-r border-b border-purple-400/40 pointer-events-none" />

      {/* Zystra Deep Purple Inner Screen Box for Social Media Images */}
      <div className="relative w-full h-[245px] sm:h-[265px] rounded-[18px] overflow-hidden bg-gradient-to-b from-[#1c103f] via-[#10082b] to-[#070414] p-3 flex flex-col justify-between border border-purple-500/30 shadow-inner group-hover:border-fuchsia-400/60 group-hover:brightness-110 transition-all mt-3">
        {/* Background Radial Glow & Mesh */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.4) 1px, transparent 1px)", backgroundSize: "14px 14px" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 via-transparent to-transparent pointer-events-none" />

        {/* HUD Crosshairs in corner */}
        <div className="relative z-10 flex justify-between items-center text-[10px] font-mono font-bold text-purple-200 uppercase">
          <span className="bg-purple-950/80 px-2 py-0.5 rounded-full border border-purple-400/40 text-[9px] text-purple-200 font-extrabold backdrop-blur-md">
            [ ISO 800 ]
          </span>
          <span className="bg-purple-900/80 text-fuchsia-300 px-2 py-0.5 rounded-md border border-fuchsia-400/40 text-[9px] backdrop-blur-md">
            4K RAW
          </span>
        </div>

        {/* Social Media Image Asset */}
        <div className="relative z-10 flex-1 flex items-center justify-center my-1">
          <img
            src={card.image}
            alt={card.title}
            className="max-h-[185px] sm:max-h-[205px] w-auto object-contain filter drop-shadow-[0_20px_35px_rgba(124,58,237,0.5)] group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500"
          />
        </div>

        {/* Inner Glued Sticker Tag at Bottom Right */}
        <div className="relative z-10 flex justify-end">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-extrabold text-[10px] font-mono px-2.5 py-0.5 rounded-sm border border-purple-300/40 shadow-md uppercase transform -rotate-2">
            1. {card.sticker}
          </div>
        </div>
      </div>

      {/* Polaroid Bottom Title & Description Section (Zystra Brand Theme & Bricolage Font) */}
      <div className="pt-4 pb-0.5 px-1 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-mono font-extrabold text-purple-300 tracking-widest uppercase">
              {card.tag}
            </span>
            <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:text-fuchsia-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>

          <h3
            className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-1"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {card.title}
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm font-sans line-clamp-2 leading-relaxed mb-4 font-normal">
            {card.subtitle}
          </p>
        </div>

        <div>
          <Link href={card.link}>
            <span className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-purple-500/20 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-fuchsia-600 text-purple-200 group-hover:text-white text-xs font-mono font-extrabold tracking-wider uppercase transition-all duration-300 border border-purple-400/30 group-hover:border-fuchsia-400 shadow-md group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
              <span>EXPLORE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

const TEAM_CARDS = [
  {
    id: "graphic",
    name: "BARKAT ALI",
    role: "Graphic Designer",
    watermark: "GRAPHIC DESIGNER",
    image: "/team/Graphic.webp",
    video: "/team/GraphicDesigner.mp4",
    startTime: 2.5,
    bgGradient: "from-purple-400 via-purple-500 to-purple-600",
    textColor: "text-purple-950",
    watermarkColor: "text-purple-950",
    badgeBg: "bg-purple-950/90 text-purple-300 border-purple-500/30",
    colSpan: "md:col-span-1",
    videoPos: "object-top",
    videoScale: "scale-100 origin-top",
  },
  {
    id: "developer",
    name: "SAHIL KABIR",
    role: "Developer & Tech Lead",
    watermark: "DEVELOPER & TECH LEAD",
    image: "/team/Developer.webp",
    video: "/team/Developer.mp4",
    startTime: 2.5,
    bgGradient: "from-sky-400 via-sky-500 to-sky-600",
    textColor: "text-sky-950",
    watermarkColor: "text-sky-950",
    badgeBg: "bg-sky-950/90 text-sky-300 border-sky-500/30",
    colSpan: "md:col-span-1",
    videoPos: "object-top",
    videoScale: "scale-100 origin-top",
  },
  {
    id: "social_media",
    name: "SHAKRA SAJDA",
    role: "Social Media Manager",
    watermark: "SOCIAL MEDIA MANAGER",
    image: "/team/socialmediamanager.webp",
    video: "/team/SocialMediaManager.mp4",
    startTime: 2.5,
    bgGradient: "from-rose-400 via-pink-500 to-rose-600",
    textColor: "text-rose-950",
    watermarkColor: "text-rose-950",
    badgeBg: "bg-rose-950/90 text-rose-300 border-rose-500/30",
    colSpan: "md:col-span-1",
    videoPos: "object-top",
    videoScale: "scale-100 origin-top",
  },
  {
    id: "video_editor",
    name: "RITESH",
    role: "Video Editor",
    watermark: "VIDEO EDITOR",
    image: "/team/video.webp",
    video: "/team/VideoEditor.mp4",
    startTime: 2.5,
    bgGradient: "from-emerald-400 via-teal-500 to-emerald-600",
    textColor: "text-emerald-950",
    watermarkColor: "text-emerald-950",
    badgeBg: "bg-emerald-950/90 text-emerald-300 border-emerald-500/30",
    colSpan: "md:col-span-1",
    videoPos: "object-top",
    videoScale: "scale-[1.42] origin-top translate-y-2",
    imagePos: "object-top",
    imageScale: "scale-[1.42] origin-top translate-y-2",
  },
  {
    id: "manager",
    name: "MD SAMEER",
    role: "Chief Operations Manager",
    watermark: "CHIEF OPERATIONS MANAGER",
    image: "/team/Manager.webp",
    video: "/team/Manager.mp4",
    startTime: 2.5,
    bgGradient: "from-amber-400 via-amber-500 to-amber-600",
    textColor: "text-amber-950",
    watermarkColor: "text-amber-950",
    badgeBg: "bg-amber-950/90 text-amber-300 border-amber-500/30",
    colSpan: "md:col-span-2 max-w-2xl mx-auto w-full",
    videoPos: "object-top",
    videoScale: "scale-100 origin-top",
  },
  {
    id: "ceo",
    name: "EHTESHAM AHMAD",
    role: "Founder & CEO",
    watermark: "FOUNDER & CEO",
    image: "/team/CEO.webp",
    video: "/team/CEO.mp4",
    startTime: 2.5,
    bgGradient: "from-[#2A0845] via-[#7B1FA2] to-[#E91E63]",
    textColor: "text-white",
    watermarkColor: "text-white",
    badgeBg: "bg-gradient-to-r from-fuchsia-950/95 via-purple-950/95 to-rose-950/95 text-fuchsia-200 border-fuchsia-400/50 shadow-2xl",
    colSpan: "md:col-span-2 w-full",
    videoPos: "object-top",
    videoScale: "scale-[1.38] origin-top translate-y-2",
    imagePos: "object-top",
    imageScale: "scale-[1.38] origin-top translate-y-2",
  },
];

function TeamCardItem({ card, idx }: { card: (typeof TEAM_CARDS)[0]; idx: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasAutoPlayedMobile, setHasAutoPlayedMobile] = useState(false);
  const [isMobileVideoActive, setIsMobileVideoActive] = useState(false);

  const [imgError, setImgError] = useState((card as any).isPlaceholder ?? false);
  const [videoError, setVideoError] = useState((card as any).isPlaceholder ?? false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const startTime = card.startTime ?? 2.5;
  const isCeo = card.id === "ceo";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // IntersectionObserver for Mobile: 1-time autoplay when card is centered in mobile viewport
  useEffect(() => {
    if (!isMobile || hasAutoPlayedMobile || !cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoPlayedMobile) {
            setHasAutoPlayedMobile(true);
            setIsMobileVideoActive(true);
            if (videoRef.current && !videoError) {
              videoRef.current.currentTime = startTime;
              videoRef.current.play().catch(() => {
                setVideoError(true);
                setIsMobileVideoActive(false);
              });
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [isMobile, hasAutoPlayedMobile, startTime, videoError]);

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovered(true);
    if (videoRef.current && !videoError) {
      if (videoRef.current.currentTime < startTime) {
        videoRef.current.currentTime = startTime;
      }
      videoRef.current.play().catch(() => {
        setVideoError(true);
      });
    }
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setIsHovered(false);
    if (videoRef.current && !videoError) {
      videoRef.current.pause();
      videoRef.current.currentTime = startTime;
    }
  };

  const handleCardClick = () => {
    if (!isMobile) return;

    if (isMobileVideoActive) {
      setIsMobileVideoActive(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = startTime;
      }
    } else {
      setIsMobileVideoActive(true);
      if (videoRef.current && !videoError) {
        videoRef.current.currentTime = startTime;
        videoRef.current.play().catch(() => {
          setVideoError(true);
          setIsMobileVideoActive(false);
        });
      }
    }
  };

  const handleEnded = () => {
    if (isMobile) {
      setIsMobileVideoActive(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = startTime;
      }
    } else {
      if (videoRef.current && !videoError) {
        videoRef.current.currentTime = startTime;
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const showVideo = isMobile ? isMobileVideoActive : isHovered;

  return (
    <FadeUp key={card.id} delay={idx * 0.1} className={card.colSpan}>
      <div
        ref={cardRef}
        onClick={handleCardClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`group relative rounded-[32px] sm:rounded-[40px] overflow-hidden p-5 sm:p-7 flex flex-col justify-between ${
          isCeo ? "min-h-[500px] sm:min-h-[560px] border border-white/20 shadow-2xl" : "min-h-[480px] sm:min-h-[540px]"
        } bg-gradient-to-br ${card.bgGradient} shadow-2xl transition-all duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.5)] cursor-pointer select-none`}
      >
        {/* ANIMATED GIANT BACKGROUND MARQUEE TEXT (100% Seamless Infinite Track) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 flex flex-col justify-center gap-3">
          {/* Top Row Marquee (Moving Left Seamlessly) */}
          <div className="flex w-fit whitespace-nowrap overflow-hidden">
            <div
              className="flex shrink-0 items-center gap-8 text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter animate-marquee-gpu pr-8"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className={`${card.watermarkColor} shrink-0 transition-opacity duration-500 ${
                    showVideo ? "opacity-65" : "opacity-30"
                  }`}
                >
                  {card.watermark} •
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Row Marquee (Moving Right Seamlessly) */}
          <div className="flex w-fit whitespace-nowrap overflow-hidden">
            <div
              className="flex shrink-0 items-center gap-8 text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter animate-marquee-gpu pl-8"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif", animationDirection: "reverse" }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className={`${card.watermarkColor} shrink-0 transition-opacity duration-500 ${
                    showVideo ? "opacity-65" : "opacity-30"
                  }`}
                >
                  {card.watermark} •
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FULL CARD HOVER VIDEO (Spans Entire Card Frame Edge-to-Edge) */}
        {!videoError && (
          <video
            ref={videoRef}
            src={`${card.video}#t=${startTime}`}
            muted
            onEnded={handleEnded}
            onError={() => setVideoError(true)}
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover ${card.videoPos ?? "object-top"} ${card.videoScale ?? "scale-100 origin-top"} z-10 transition-opacity duration-500 ${
              showVideo ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        )}

        {/* Dark Top & Bottom Vignette Overlays when Video Plays for High Contrast Badges */}
        <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none z-15 transition-opacity duration-500 ${showVideo && !videoError ? "opacity-100" : "opacity-0"}`} />
        <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none z-15 transition-opacity duration-500 ${showVideo && !videoError ? "opacity-100" : "opacity-0"}`} />

        {/* TOP CORNER / TOP CENTER ROLE LABEL */}
        <div className={`relative z-20 flex items-center ${isCeo ? "justify-center pt-1" : "justify-between"}`}>
          <span className={`font-mono font-extrabold uppercase transition-all duration-300 border flex items-center gap-2 ${
            isCeo
              ? "text-xs sm:text-sm tracking-widest px-5 py-2 rounded-full bg-black/60 text-white border-white/30 shadow-md backdrop-blur-md font-sans"
              : showVideo
              ? "text-[11px] tracking-widest px-3.5 py-1.5 rounded-full bg-black/50 text-white border-white/20 backdrop-blur-md"
              : "text-[11px] tracking-widest px-3.5 py-1.5 rounded-full bg-black/10 text-black/80 border-black/10 backdrop-blur-md"
          }`}>
            {isCeo && <span className="text-sm">👑</span>}
            {showVideo && !videoError && !isCeo && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />}
            <span>{card.role}</span>
          </span>
        </div>

        {/* PORTRAIT IMAGE OR PLACEHOLDER AVATAR */}
        <div className="relative z-10 flex-1 flex items-center justify-center pt-4 my-2 overflow-hidden pointer-events-none">
          {!imgError ? (
            <img
              src={card.image}
              alt={card.name}
              onError={() => setImgError(true)}
              className={`${
                isCeo ? "max-h-[340px] sm:max-h-[400px]" : "max-h-[300px] sm:max-h-[360px]"
              } w-auto max-w-full object-contain ${card.imagePos ?? "object-bottom"} ${card.imageScale ?? "scale-100 origin-bottom"} filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] transition-all duration-300 ${
                showVideo && !videoError ? "opacity-0" : "opacity-100"
              }`}
            />
          ) : (
            <div className="flex flex-col items-center justify-center my-auto py-8 text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-black/20 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-xl mb-4 group-hover:scale-105 transition-transform duration-300">
                <span className="text-3xl sm:text-4xl font-black text-white/90 tracking-widest font-sans">
                  {card.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-black/30 text-white/90 border border-white/20 backdrop-blur-md">
                MEDIA PLACEHOLDER
              </span>
            </div>
          )}
          {!imgError && (
            <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent pointer-events-none z-10 transition-opacity duration-300 ${showVideo && !videoError ? "opacity-0" : "opacity-100"}`} />
          )}
        </div>

        {/* CARD BOTTOM INFO BADGE */}
        <div className="relative z-20 mt-auto pt-2">
          <div className={`flex items-center justify-between px-5 py-3.5 rounded-2xl ${
            isCeo
              ? "bg-slate-950/90 text-white border border-white/20 shadow-md"
              : card.badgeBg
          } backdrop-blur-xl border transition-transform duration-300 group-hover:translate-y-[-2px]`}>
            <div>
              <h3 className={`font-black tracking-tight font-sans ${isCeo ? "text-base sm:text-lg text-white flex items-center gap-2" : "text-sm sm:text-base"}`}>
                {card.name} {isCeo && <span className="text-amber-400 text-sm">★</span>}
              </h3>
              <p className={`text-[10px] sm:text-xs font-mono uppercase tracking-wider ${isCeo ? "text-amber-300 font-bold" : "opacity-80"}`}>
                {isCeo ? "FOUNDER & CHIEF EXECUTIVE OFFICER" : card.role}
              </p>
            </div>
            <div className={`w-9 h-9 rounded-full ${isCeo ? "bg-amber-400/20 text-amber-300 border border-amber-400/50" : "bg-white/10"} flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-md`}>
              →
            </div>
          </div>
        </div>

      </div>
    </FadeUp>
  );
}

function TeamScrollRevealSection() {
  return (
    <section className="relative py-20 sm:py-32 bg-[#080510] overflow-hidden">
      <AboutInteractiveBg />

      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-700/10 blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #a855f7 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 text-center max-w-3xl mx-auto flex flex-col items-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono tracking-[0.2em] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              THE TEAM BEHIND ZYSTRA
            </div>
          </FadeUp>

          <LineReveal delay={0.1}>
            <h2
              className="font-black text-white leading-[0.98] tracking-tight mb-5 text-4xl sm:text-6xl md:text-7xl"
              style={{ fontFamily: "'Bricolage Grotesque', serif" }}
            >
              Who <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">We Are</span>
            </h2>
          </LineReveal>

          <FadeUp delay={0.2} className="max-w-2xl">
            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-normal">
              A high-performance team of growth engineers, creative designers, and marketing strategists dedicated to scaling market leaders.
            </p>
          </FadeUp>
        </div>

        {/* 2X2 VIBRANT CARD GRID (REFERENCE INSPIRED DESIGN) */}
        <div className="relative max-w-5xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {TEAM_CARDS.map((card, idx) => (
              <TeamCardItem key={card.id} card={card} idx={idx} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}


function ArcCardItem({
  card,
  idx,
  smoothIndex,
  onSelect,
}: {
  card: any;
  idx: number;
  smoothIndex: any;
  onSelect: () => void;
}) {
  const x = useTransform(smoothIndex, (val: number) => (idx - val) * 230);
  const rotate = useTransform(smoothIndex, (val: number) => (idx - val) * 8);
  const y = useTransform(smoothIndex, (val: number) => Math.pow(Math.abs(idx - val), 1.6) * 14);
  const scale = useTransform(smoothIndex, (val: number) => {
    const diff = Math.abs(idx - val);
    return Math.max(0.75, 1.06 - diff * 0.08);
  });
  const opacity = useTransform(smoothIndex, (val: number) => {
    const diff = Math.abs(idx - val);
    return diff > 2.5 ? 0 : Math.max(0.18, 1 - diff * 0.22);
  });
  const zIndex = useTransform(smoothIndex, (val: number) => {
    const diff = Math.abs(idx - val);
    return Math.round(40 - diff * 10);
  });

  return (
    <motion.div
      onClick={onSelect}
      style={{
        position: "absolute",
        x,
        y,
        rotate,
        scale,
        opacity,
        zIndex,
        willChange: "transform, opacity",
      }}
      className="group relative w-56 h-[310px] sm:w-64 sm:h-[340px] md:w-72 md:h-[370px] rounded-[2rem] p-5 sm:p-6 flex flex-col justify-between border overflow-hidden backdrop-blur-xl shadow-2xl cursor-pointer bg-[#0a0618]/95 transform-gpu border-purple-500/25 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-purple-400/80 transition-colors duration-300"
    >
      {/* Top Glowing Light Bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/5 h-1.5 rounded-b-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-indigo-500 blur-[1px] opacity-90" />
      
      {/* Bottom Glowing Light Bar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-2 bg-gradient-to-r from-purple-600 via-purple-300 to-indigo-500 blur-md opacity-80 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-purple-600/35 blur-2xl rounded-full pointer-events-none" />

      {/* Top Star Emblem & Title */}
      <div className="flex flex-col items-center gap-2 text-center pt-1">
        <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-400/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.25)] group-hover:scale-110 group-hover:border-purple-400/60 transition-all duration-300">
          <svg className="w-5 h-5 text-purple-300 filter drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>

        <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-bold">
          {card.num}. PRINCIPLE
        </span>

        <h3
          className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug group-hover:text-purple-300 transition-colors"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          {card.title}
        </h3>
      </div>

      {/* Body Paragraph */}
      <p className="text-xs text-slate-300 font-sans font-normal leading-relaxed text-center my-1 max-w-[92%] mx-auto">
        {card.desc}
      </p>

      {/* Bottom Gradient CTA Button */}
      <div className="flex justify-center pt-1 z-10">
        <span className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 border border-purple-400/30 shadow-[0_5px_15px_rgba(124,58,237,0.4)] group-hover:from-purple-500 group-hover:to-indigo-500 group-hover:scale-105 transition-all duration-300 cursor-pointer">
          READ MORE <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </motion.div>
  );
}

function ArcPrinciplesSection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const containerRef = useRef<HTMLDivElement>(null);

  // Ultra-silky continuous MotionValue physics tuned for Apple-grade momentum
  const targetIndex = useMotionValue(2);
  const smoothIndex = useSpring(targetIndex, { stiffness: 150, damping: 24, mass: 0.5 });

  const arcCards = [
    {
      num: "01",
      title: "Radical Transparency",
      desc: "Zero hidden costs. Real-time dashboards and weekly reports so you always know where your investment goes.",
    },
    {
      num: "02",
      title: "Obsessive Innovation",
      desc: "Constantly testing new ad formats, AI workflows, and design trends to keep your brand ahead of competitors.",
    },
    {
      num: "03",
      title: "Revenue First",
      desc: "Vanity metrics don't pay bills. We optimize exclusively for leads, sales, and measurable return on ad spend.",
    },
    {
      num: "04",
      title: "Speed to Execution",
      desc: "Agile sprints and rapid deployment so your marketing campaigns go live in days, not months.",
    },
    {
      num: "05",
      title: "End-to-End Ownership",
      desc: "From strategy to copy, design to tracking — we manage every detail so you can focus on running your business.",
    },
  ];

  const handleSelect = (idx: number) => {
    setActiveIndex(idx);
    targetIndex.set(idx);
  };

  const handlePrev = () => {
    const next = Math.max(0, activeIndex - 1);
    setActiveIndex(next);
    targetIndex.set(next);
  };

  const handleNext = () => {
    const next = Math.min(arcCards.length - 1, activeIndex + 1);
    setActiveIndex(next);
    targetIndex.set(next);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let snapTimeout: any = null;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) || Math.abs(e.deltaX) < 2) return;
      e.preventDefault();

      const delta = e.deltaX * 0.002;
      const current = targetIndex.get();
      const next = Math.max(0, Math.min(arcCards.length - 1, current + delta));
      targetIndex.set(next);

      clearTimeout(snapTimeout);
      snapTimeout = setTimeout(() => {
        const rounded = Math.round(targetIndex.get());
        setActiveIndex(rounded);
        targetIndex.set(rounded);
      }, 140);
    };

    el.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      el.removeEventListener("wheel", handleWheel);
      clearTimeout(snapTimeout);
    };
  }, []);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "#080510" }}>
      <AboutInteractiveBg />
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-[5vw] relative z-10">
        {/* Center-Aligned Header */}
        <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto flex flex-col items-center justify-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono tracking-[0.2em] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              OUR PRINCIPLES
            </div>
          </FadeUp>

          <LineReveal delay={0.1}>
            <h2
              className="font-black text-white leading-[0.95] tracking-tight mb-3"
              style={{ fontSize: "clamp(38px, 6vw, 84px)", fontFamily: "'Bricolage Grotesque', serif" }}
            >
              The Values <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">That Drive Us</span>
            </h2>
          </LineReveal>

          <FadeUp delay={0.2} className="max-w-xl">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Foundational beliefs and operational excellence that power our strategy, creativity, and revenue performance.
            </p>
          </FadeUp>
        </div>

        {/* Continuous 120 FPS Motion Track (Compact Card Size) */}
        <div
          ref={containerRef}
          className="relative w-full py-8 min-h-[420px] flex items-center justify-center overflow-hidden select-none cursor-grab active:cursor-grabbing"
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDrag={(_, info) => {
              const delta = info.delta.x * -0.004;
              const next = Math.max(0, Math.min(arcCards.length - 1, targetIndex.get() + delta));
              targetIndex.set(next);
            }}
            onDragEnd={(_, info) => {
              const velocity = info.velocity.x * -0.002;
              const final = Math.max(0, Math.min(arcCards.length - 1, targetIndex.get() + velocity));
              const rounded = Math.round(final);
              setActiveIndex(rounded);
              targetIndex.set(rounded);
            }}
            className="flex items-center justify-center relative w-full max-w-5xl h-[380px]"
          >
            {arcCards.map((card, idx) => (
              <ArcCardItem
                key={idx}
                card={card}
                idx={idx}
                smoothIndex={smoothIndex}
                onSelect={() => handleSelect(idx)}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom Navigation Arrows & Dots Indicator */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-purple-600 hover:border-purple-400 flex items-center justify-center text-white transition-all duration-300 shadow-lg active:scale-95 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {arcCards.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIndex ? "w-8 bg-purple-400" : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-purple-600 hover:border-purple-400 flex items-center justify-center text-white transition-all duration-300 shadow-lg active:scale-95 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

const marqueeItems = ["Transparency", "Creativity", "Performance", "AI-Powered", "Data Driven", "Results First"];

const coreValues = [
  { num: "I", title: "Transparency", tagline: "No hidden fees. No mysteries.", body: "We provide clear, jargon-free reports every week and every month. Just honest numbers — traffic, leads, conversions, and ROI — presented in plain language.", accent: "#a855f7" },
  { num: "II", title: "Creativity", tagline: "Ideas that make brands unforgettable.", body: "Data tells us what to do. Creativity decides how we do it. Our in-house creative team builds brand experiences that stand out in crowded feeds and busy search results.", accent: "#6366f1" },
  { num: "III", title: "Performance", tagline: "Measured by your growth.", body: "Every project is tied to clear, measurable KPIs. We set goals with you, track them obsessively, and optimise relentlessly until they are achieved.", accent: "#ec4899" },
];

const whoWeAreItems = [
  { num: "01", title: "Creativity Meets AI Precision", body: "Every campaign starts with deep research — your market, your competitors, your audience behaviour. We then layer AI-powered tools to build strategies that are smarter, faster, and more accurate than traditional methods." },
  { num: "02", title: "Experience the Best Before You Pay", body: "Before you spend a single rupee with Zystra, we audit your current digital presence, identify your biggest opportunities, and show you exactly what we would do — and why. Real value from day one." },
  { num: "03", title: "One Team. Every Solution.", body: "We handle your entire digital ecosystem — strategy, execution, creative, and reporting — under one roof. One point of contact, one shared goal: your growth." },
];

const advantages = [
  { title: "Industry Depth. National-Grade Execution.", body: "Deep, hands-on experience across 10+ industries — healthcare, Ayurveda, beauty, solar energy, education, travel, interior design, events, and technology — combined with tools and talent of a national-level agency." },
  { title: "Premium Strategy, Honest Pricing.", body: "World-class digital marketing should not come with a metro-agency price tag. At Zystra, we offer premium strategy and execution at pricing built around real business value — with complete transparency." },
  { title: "AI Tools + Human Creativity.", body: "We leverage cutting-edge AI for research, analysis, and optimisation — but human creativity drives every strategy, every campaign, and every piece of content we produce." },
  { title: "Full-Stack. One Team. No Gaps.", body: "SEO, paid ads, web development, branding, video, app development — all in one place. No vendor juggling. No miscommunication. One team, one goal: your measurable growth." },
];

const services = [
  { label: "Digital Marketing & SEO", href: "/services/seo", desc: "Organic visibility from the ground up. Local SEO, content marketing, and GBP management." },
  { label: "Paid Advertising", href: "/services/meta-ads", desc: "Meta Ads and Google Ads campaigns engineered for maximum ROAS — every rupee tracked." },
  { label: "Web & App Development", href: "/services/website-designing", desc: "Modern, fast, mobile-first websites and custom mobile applications built to scale." },
  { label: "Branding & Creative", href: "/services/logo-designing", desc: "Logo design, brand identity, video production, and social content that feels premium." },
  { label: "RevOps Solutions", href: "/services/rev-ops-solutions", desc: "Revenue operations consulting to align your marketing, sales, and customer success." },
  { label: "Performance Marketing", href: "/services", desc: "Data-driven campaigns with clear KPIs, real-time reporting, and obsessive optimisation." },
];

// ─── Font shorthand ───────────────────────────────────────────────────────────
const CONDENSED = "'Barlow Condensed', 'Bricolage Grotesque', sans-serif";
const MONO      = "'DM Mono', monospace";

export default function AboutUsPage() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    const isTouch = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const lenis = new Lenis({
      duration: 0.55,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.15,
      touchMultiplier: 1.0,
    });
    lenis.scrollTo(0, { immediate: true });
    let rafId: number;
    function raf(time: number) { lenis.raf(time); rafId = requestAnimationFrame(raf); }
    rafId = requestAnimationFrame(raf);
    window.scrollTo(0, 0);
    return () => { cancelAnimationFrame(rafId); lenis.destroy(); };
  }, []);

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Zystra",
    url: "https://zystra.in/about",
    description: "Learn about Zystra — an AI-powered creative digital marketing agency.",
    mainEntity: { "@type": "Organization", name: "Zystra", url: "https://zystra.in" }
  };

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(heroScroll, [0, 0.55], [1, 0]);
  const heroY       = useTransform(heroScroll, [0, 1], ["0%", "18%"]);

  return (
    <div className="min-h-screen text-slate-100 overflow-hidden selection:bg-purple-500/30 selection:text-white" style={{ background: "#080510", fontFamily: "'Outfit', sans-serif" }}>
      <SEO
        title="About Zystra | AI-Powered Creative Marketing Agency"
        description="Zystra is an AI-powered creative digital marketing agency. We blend data, technology & creativity to build brands that lead their industry."
        canonicalUrl="https://zystra.in/about"
        schema={seoSchema}
      />
      <Navbar />

      {/* ╔══════════════════════════════════════════════════════════════════════
          HERO  —  Pinterest reference layout, Zystra purple theme
      ══════════════════════════════════════════════════════════════════════╗ */}
      <section
        ref={heroRef}
        className="relative w-full flex flex-col justify-between overflow-hidden"
        style={{ minHeight: "100vh", background: "#080510", willChange: "transform" }}
      >
        <AboutInteractiveBg particleCount={60} />
        {/* ── Halftone dot texture ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            transform: "translateZ(0)",
          }}
        />

        {/* ── Deep purple ambient glow behind astronaut (GPU accelerated) ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "5%", right: "5%",
            width: "55vw", height: "55vw",
            maxWidth: "700px", maxHeight: "700px",
            background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, rgba(99,102,241,0.1) 45%, transparent 70%)",
            filter: "blur(80px)",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        />

        {/* ── Deep dark gradient overlay ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 80% at 50% -10%, rgba(51,1,90,0.35) 0%, rgba(8,5,16,0.35) 75%)",
          }}
        />

        {/* ── Bottom shadow for astronaut (GPU accelerated) ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "5%", right: "10%",
            width: "45vw", height: "120px",
            background: "radial-gradient(ellipse, rgba(51,1,90,0.75) 0%, transparent 70%)",
            filter: "blur(25px)",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        />

        {/* ══════════════════════════════════════════════════════════════════
            MAIN CONTAINER: Content on LEFT, Astronaut Image on RIGHT
            Proper gap from top header (pt-32 sm:pt-36 lg:pt-28) to prevent navbar overlap on mobile
        ══════════════════════════════════════════════════════════════════ */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-32 sm:pt-36 lg:pt-28 pb-10 flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* ── LEFT COLUMN: Text Content & Headlines ── */}
          <motion.div
            className="w-full lg:w-[58%] flex flex-col items-start text-left z-20 relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{ willChange: "transform, opacity" }}
          >
            {/* Doodle Arrow with 3D Social Media Icons & Zystra logo */}
            <div className="absolute -top-10 -right-12 sm:-right-20 md:-right-28 lg:-right-36 pointer-events-none z-30 transform scale-75 sm:scale-90 md:scale-95 lg:scale-100 origin-top-left">
              <DoodleSocialArrow />
            </div>

            {/* Line 1 — TAKING YOUR */}
            <div
              style={{
                fontFamily: CONDENSED,
                fontWeight: 900,
                fontSize: "clamp(26px, 4.2vw, 64px)",
                lineHeight: 1.0,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "0.025em",
                textShadow: "0 3px 24px rgba(0,0,0,0.85), 0 1px 6px rgba(0,0,0,0.6)",
                marginBottom: "0.02em",
              }}
            >
              TAKING YOUR
            </div>

            {/* Line 2 — BUSINESS  TO */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.25em", lineHeight: 0.88, marginBottom: "0.02em", flexWrap: "wrap" }}>
              <span
                style={{
                  fontFamily: CONDENSED,
                  fontWeight: 900,
                  fontSize: "clamp(48px, 9vw, 136px)",
                  background: "linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #6366f1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textTransform: "uppercase",
                  letterSpacing: "0.01em",
                }}
              >
                BUSINESS
              </span>
              <span
                style={{
                  fontFamily: CONDENSED,
                  fontWeight: 900,
                  fontSize: "clamp(20px, 3.5vw, 50px)",
                  color: "#ffffff",
                  textTransform: "uppercase",
                  letterSpacing: "0.025em",
                  textShadow: "0 3px 20px rgba(0,0,0,0.85)",
                  paddingBottom: "0.1em",
                }}
              >
                TO
              </span>
            </div>

            {/* Line 3 — NEW HEIGHTS! */}
            <div
              style={{
                fontFamily: CONDENSED,
                fontWeight: 900,
                fontSize: "clamp(42px, 8vw, 120px)",
                lineHeight: 0.9,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "0.01em",
                textShadow: "0 3px 24px rgba(0,0,0,0.85), 0 1px 6px rgba(0,0,0,0.6)",
                marginBottom: "1.25rem",
              }}
            >
              NEW HEIGHTS!
            </div>

            {/* Sub-text — OUR AI-POWERED DIGITAL STRATEGIES ARE OUT OF THIS WORLD! */}
            <motion.div
              className="max-w-xl text-left"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              style={{ willChange: "transform, opacity" }}
            >
              <p
                style={{
                  fontFamily: CONDENSED,
                  fontWeight: 700,
                  fontSize: "clamp(14px, 1.8vw, 24px)",
                  lineHeight: 1.35,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: "2rem",
                }}
              >
                <span style={{ color: "#ffffff", textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}>OUR </span>
                <span
                  style={{
                    background: "linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #6366f1 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  AI-POWERED DIGITAL STRATEGIES{" "}
                </span>
                <span style={{ color: "#ffffff", textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}>
                  ARE OUT OF THIS WORLD!
                </span>
              </p>

              {/* CTA button directly below title tagline */}
              <Link href="/contact">
                <motion.span
                  className="cursor-pointer inline-flex items-center gap-3"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                    color: "#ffffff",
                    fontFamily: CONDENSED,
                    fontWeight: 900,
                    fontSize: "clamp(13px, 1.5vw, 19px)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    padding: "14px 38px",
                    borderRadius: "9999px",
                    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.4)",
                    whiteSpace: "nowrap",
                  }}
                  whileHover={{ scale: 1.04, boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5)" }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                >
                  START A PROJECT
                  <ArrowUpRight className="w-5 h-5 text-white/90" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN: Astronaut Image ── */}
          <motion.div
            className="w-full lg:w-[42%] flex items-center justify-center lg:justify-end relative select-none mt-2 sm:mt-6 lg:mt-12 lg:pr-4"
            style={{ y: heroY, opacity: heroOpacity, willChange: "transform, opacity", transform: "translate3d(0,0,0)" }}
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >

            <div
              className="relative flex justify-center lg:justify-end items-center w-full z-20"
              style={{ animation: "heroFloat1 5.5s ease-in-out infinite", willChange: "transform" }}
            >
              {/* Soft purple glow backdrop (GPU accelerated blur) */}
              <div
                className="absolute inset-0 pointer-events-none rounded-full"
                style={{
                  background: "radial-gradient(circle at center, rgba(168,85,247,0.35) 0%, rgba(110,1,156,0.15) 50%, transparent 75%)",
                  filter: "blur(35px)",
                  transform: "scale(0.9) translateZ(0)",
                  willChange: "transform",
                }}
              />
              <img
                src="/astronaut-hero.png"
                alt="Zystra — Taking your business to new heights"
                draggable={false}
                className="w-auto max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] mx-auto lg:mx-0 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                style={{
                  height: "auto",
                  transform: "translateZ(0)",
                  maskImage: "radial-gradient(ellipse 92% 94% at 50% 50%, black 65%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse 92% 94% at 50% 50%, black 65%, transparent 100%)",
                  willChange: "transform",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* ╚══════════════════════════════════════════════════════════════════════╝ */}

      {/* MARQUEE */}
      <div className="relative py-5 overflow-hidden border-y border-white/[0.06]" style={{ background: "#0d0a1a" }}>
        <div className="flex gap-12 whitespace-nowrap animate-marquee-gpu w-max">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-8 text-xs font-bold tracking-[0.2em] uppercase text-white/30" style={{ fontFamily: MONO }}>
              {item}
              <span className="w-1 h-1 rounded-full bg-purple-500/50 shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* TEAM SCROLL REVEAL */}
      <TeamScrollRevealSection />

      {/* OUR STORY */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "#080510" }}>
        <AboutInteractiveBg />
        {/* Halftone Dot Patterns (Top-Left & Bottom-Right of Section) */}
        <div
          className="absolute top-0 left-0 w-80 h-80 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(168, 85, 247, 0.8) 1.5px, transparent 1.5px)", backgroundSize: "16px 16px" }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(168, 85, 247, 0.8) 1.5px, transparent 1.5px)", backgroundSize: "16px 16px" }}
        />

        {/* Ambient Section Glows */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-purple-600/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 rounded-full bg-indigo-600/15 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-[5vw] relative z-10">


          {/* Main Grid: 3D Bean Bag Image on Left, Content & Headlines on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: 3D Bean Bag Character Image */}
            <FadeUp delay={0.1} className="lg:col-span-5 flex items-center justify-center">
              <div className="relative max-w-[360px] sm:max-w-[420px] lg:max-w-full">
                <img
                  src="/about-story-behind.webp"
                  alt="Crafting Digital Success - Zystra"
                  className="w-full h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)]"
                />
              </div>
            </FadeUp>

            {/* Right: Stacked Headlines, Story Text & Action CTA */}
            <FadeUp delay={0.2} className="lg:col-span-7 flex flex-col items-start text-left gap-6">
              {/* Stacked Display Headlines */}
              <div className="flex flex-col leading-[0.95]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
                  THE STORY
                </span>
                <span className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
                  BEHIND ZYSTRA
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-purple-400 uppercase mt-3" style={{ fontFamily: MONO }}>
                  OUR GENESIS • AI-POWERED GROWTH
                </span>
              </div>

              {/* Story Text UI */}
              <div className="flex flex-col gap-5 pt-3 border-t border-white/10 w-full">
                <div className="relative pl-5 border-l-2 border-purple-500 bg-purple-950/40 py-3.5 pr-5 rounded-r-xl border-y border-r border-purple-500/15">
                  <p className="text-slate-200 text-sm sm:text-base md:text-[17px] leading-relaxed font-normal">
                    Zystra was built out of a simple frustration — too many strong businesses were being held back by weak digital strategy. Generic agencies sold templated packages, while freelancers lacked scale. <span className="text-purple-200 font-semibold">Nobody combined real creative thinking with AI precision.</span>
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  So we built Zystra differently — a digital agency <span className="text-purple-300 font-semibold">powered by AI</span>, <span className="text-indigo-300 font-semibold">driven by data</span>, and obsessed with one outcome: <span className="text-fuchsia-300 font-semibold">measurable growth for every brand</span> we work with.
                </p>

                {/* Feature Highlight Chips */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    AI-Powered Strategy
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 text-xs font-mono text-fuchsia-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_8px_rgba(217,70,239,0.8)]" />
                    35+ Brands Scaled
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                    Patna to Pan-India
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>


        </div>
      </section>

      {/* STATS SECTION - GLASSMORPHISM NEON CARDS */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "#080510" }}>
        <AboutInteractiveBg />
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-[5vw] relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8">
            {[
              {
                value: "50+",
                label: "Brands Grown",
                subtitle: "Patna, India & International",
                timeframe: "Data updated live",
                filter: "Monthly",
                graphType: "smooth-area",
              },
              {
                value: "11",
                label: "Core Services",
                subtitle: "SEO, Ads, Web, AI & Branding",
                timeframe: "Full-Stack Suite",
                filter: "Services",
                graphType: "bar-chart",
              },
              {
                value: "3x",
                label: "Average ROI",
                subtitle: "Revenue growth vs last quarter",
                timeframe: "Campaign Performance",
                filter: "Quarterly",
                graphType: "stepped-line",
              },
              {
                value: "Global",
                label: "Brand Reach",
                subtitle: "India, UAE & Global Markets",
                timeframe: "Global Footprint",
                filter: "Active",
                graphType: "wave-pulse",
              },
            ].map((stat, i) => (
              <FadeUp key={i} delay={0} className="w-full">
                <StatCard stat={stat} index={i} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE - removed: now handled by TeamScrollRevealSection above */}

      {/* OUR PRINCIPLES - ARC FAN CAROUSEL */}
      <ArcPrinciplesSection />

      {/* ══════════════════════════════════════════════════════════════════════
          WHY ZYSTRA / OUR ADVANTAGE - PREMIUM FUTURISTIC SHOWCASE (Ref Inspired)
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="why-zystra" className="relative py-28 md:py-40 overflow-hidden" style={{ background: "#080510" }}>
        <AboutInteractiveBg />
        {/* Ambient Radial Background Glows & Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/15 blur-[160px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-indigo-600/15 blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-6 sm:px-[5vw] relative z-10">
          
          {/* ── TOP HERO ROW: Left Content & Right Floating Mobile Image (Ref Match) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start gap-6">
              <FadeUp>
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono tracking-[0.2em] uppercase">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  OUR ADVANTAGE
                </div>
              </FadeUp>

              <LineReveal delay={0.1}>
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[0.98] tracking-tight" style={{ fontFamily: "'Bricolage Grotesque', serif" }}>
                  Why Brands <br />
                  <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
                    Choose Zystra
                  </span>
                </h2>
              </LineReveal>

              <FadeUp delay={0.2}>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                  Most agencies sell the same generic playbook to every client. We don't. We bring deep industry expertise, cutting-edge AI tools, and full-stack creative execution — all built around your measurable business growth.
                </p>
              </FadeUp>

              <FadeUp delay={0.25} className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/services">
                  <span className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-white cursor-pointer transition-all duration-300 hover:scale-[1.03] bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_10px_30px_rgba(124,58,237,0.35)]">
                    Explore Services <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              </FadeUp>
            </div>

            {/* Right: Floating Dual Purple iPhones Mockup (Ref Match) */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              {/* Background Neon Orbits / Glowing Rings */}
              <div className="absolute w-[340px] sm:w-[450px] h-[340px] sm:h-[450px] rounded-full border border-purple-500/20 animate-[spin_30s_linear_infinite] pointer-events-none" />
              <div className="absolute w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full border border-dashed border-indigo-500/30 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-fuchsia-500/20 to-transparent blur-[60px] rounded-full pointer-events-none" />

              {/* Mobile Image Container with Smooth Floating Motion (GPU CSS) */}
              <div
                style={{ animation: "heroFloat1 6s ease-in-out infinite", willChange: "transform" }}
                className="relative z-10 max-w-[360px] sm:max-w-[440px] md:max-w-[480px] w-full flex justify-center"
              >
                <img
                  src="/About-mobile-image.webp"
                  alt="Zystra Mobile Marketing & Social Feed App Showcase"
                  className="w-full h-auto object-contain filter drop-shadow-[0_30px_60px_rgba(110,1,156,0.35)]"
                />
              </div>
            </div>

          </div>

          {/* ── MIDDLE ROW: 4 Feature Cards Grid (Ref Match - Pop-out Card 02 & Outer Shell) ── */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <LineReveal>
                <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight" style={{ fontFamily: "'Bricolage Grotesque', serif" }}>
                  Your <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">Trusted Partner</span> of Brand Growth.
                </h3>
              </LineReveal>
            </div>

            {/* Unified Outer Container Box Shell */}
            <div className="max-w-5xl mx-auto relative rounded-[20px] sm:rounded-[36px] border border-purple-500/20 bg-[#070412]/80 p-2 min-[380px]:p-3.5 sm:p-8 md:p-10 backdrop-blur-2xl shadow-2xl">
              <div className="grid grid-cols-3 gap-1 min-[380px]:gap-2 sm:gap-6 md:gap-8 items-stretch">
                
                {/* ── CARD 01 (LEFT - StatCard UI Styled) ── */}
                <FadeUp delay={0.1} className="flex">
                  <div className="group relative w-full rounded-xl sm:rounded-3xl overflow-hidden border border-purple-500/25 bg-[#0a0618]/90 backdrop-blur-xl p-2 min-[380px]:p-3 sm:p-7 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-purple-400/50 hover:shadow-[0_20px_40px_rgba(110,1,156,0.35)] transition-all duration-500">
                    {/* Glowing Bottom Light Bar */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-1.5 sm:h-2 bg-gradient-to-r from-purple-600 via-purple-300 to-indigo-500 blur-md opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-purple-600/35 blur-2xl rounded-full pointer-events-none" />

                    <div>
                      {/* Top Header: Subtitle & Dropdown Pill */}
                      <div className="flex items-center justify-between mb-1.5 sm:mb-6 text-[7.5px] min-[380px]:text-[8.5px] sm:text-[11px] font-mono text-slate-400">
                        <span className="truncate pr-0.5 uppercase">01. Advantage</span>
                        <div className="flex items-center gap-0.5 sm:gap-1.5 px-1 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 shrink-0 text-[6.5px] min-[380px]:text-[7.5px] sm:text-xs">
                          <span>National</span>
                          <svg className="w-2 h-2 sm:w-3 sm:h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      <h4 className="text-[9.5px] min-[380px]:text-[11px] sm:text-2xl font-bold text-white mb-1 sm:mb-3 leading-tight group-hover:text-purple-300 transition-colors" style={{ fontFamily: "'Bricolage Grotesque', serif" }}>
                        Industry Depth. National Execution.
                      </h4>
                      <p className="text-slate-400 text-[7.5px] min-[380px]:text-[8.5px] sm:text-sm leading-tight sm:leading-relaxed font-sans line-clamp-2 sm:line-clamp-none">
                        Deep experience across 10+ industries combined with national-level tools.
                      </p>
                    </div>

                    <div className="pt-1.5 sm:pt-6 mt-1.5 sm:mt-6 border-t border-white/10 z-10">
                      <Link href="/services">
                        <span className="inline-flex items-center gap-1 sm:gap-2 text-[6.5px] min-[380px]:text-[8px] sm:text-xs font-mono font-bold text-purple-400 hover:text-purple-300 uppercase tracking-widest cursor-pointer transition-colors">
                          LEARN <ArrowRight className="w-2 h-2 sm:w-3.5 sm:h-3.5" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </FadeUp>

                {/* ── CARD 02 (CENTER POP-OUT - StatCard Dark UI Styled) ── */}
                <FadeUp delay={0.2} className="flex">
                  <div className="group relative z-30 -my-1.5 min-[380px]:-my-2.5 sm:-my-8 md:-my-14 w-full rounded-xl sm:rounded-3xl overflow-hidden border border-purple-500/40 bg-[#0a0618]/95 backdrop-blur-xl p-2 min-[380px]:p-3 sm:p-7 flex flex-col justify-between shadow-[0_20px_45px_rgba(110,1,156,0.4)] hover:border-purple-400 transition-all duration-500 hover:scale-[1.03]">
                    {/* Glowing Bottom Light Bar */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-1.5 sm:h-2 bg-gradient-to-r from-purple-600 via-purple-300 to-indigo-500 blur-md opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-purple-600/40 blur-2xl rounded-full pointer-events-none" />

                    <div>
                      {/* Top Header: Subtitle & Dropdown Pill */}
                      <div className="flex items-center justify-between mb-1.5 sm:mb-6 text-[7.5px] min-[380px]:text-[8.5px] sm:text-[11px] font-mono text-slate-400">
                        <span className="truncate pr-0.5 uppercase">02. Featured</span>
                        <div className="flex items-center gap-0.5 sm:gap-1.5 px-1 py-0.5 sm:px-3 sm:py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 shrink-0 font-bold text-[6.5px] min-[380px]:text-[7.5px] sm:text-xs">
                          <span>Popular</span>
                          <svg className="w-2 h-2 sm:w-3 sm:h-3 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      <h4 className="text-[9.5px] min-[380px]:text-[11px] sm:text-2xl font-bold text-white mb-1 sm:mb-3 leading-tight group-hover:text-purple-300 transition-colors" style={{ fontFamily: "'Bricolage Grotesque', serif" }}>
                        Premium Strategy, Honest Pricing.
                      </h4>
                      <p className="text-slate-400 text-[7.5px] min-[380px]:text-[8.5px] sm:text-sm leading-tight sm:leading-relaxed font-sans line-clamp-2 sm:line-clamp-none">
                        World-class digital marketing built around real business value.
                      </p>
                    </div>

                    <div className="pt-1.5 sm:pt-6 mt-1.5 sm:mt-6 border-t border-white/10 z-10">
                      <Link href="/services">
                        <span className="inline-flex items-center gap-1 sm:gap-2 text-[6.5px] min-[380px]:text-[8px] sm:text-xs font-mono font-bold text-purple-400 hover:text-purple-300 uppercase tracking-widest cursor-pointer transition-colors">
                          LEARN <ArrowRight className="w-2 h-2 sm:w-3.5 sm:h-3.5" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </FadeUp>

                {/* ── CARD 03 (RIGHT - StatCard UI Styled) ── */}
                <FadeUp delay={0.3} className="flex">
                  <div className="group relative w-full rounded-xl sm:rounded-3xl overflow-hidden border border-purple-500/25 bg-[#0a0618]/90 backdrop-blur-xl p-2 min-[380px]:p-3 sm:p-7 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-purple-400/50 hover:shadow-[0_20px_40px_rgba(110,1,156,0.35)] transition-all duration-500">
                    {/* Glowing Bottom Light Bar */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-1.5 sm:h-2 bg-gradient-to-r from-purple-600 via-purple-300 to-indigo-500 blur-md opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-purple-600/35 blur-2xl rounded-full pointer-events-none" />

                    <div>
                      {/* Top Header: Subtitle & Dropdown Pill */}
                      <div className="flex items-center justify-between mb-1.5 sm:mb-6 text-[7.5px] min-[380px]:text-[8.5px] sm:text-[11px] font-mono text-slate-400">
                        <span className="truncate pr-0.5 uppercase">03. AI Tech</span>
                        <div className="flex items-center gap-0.5 sm:gap-1.5 px-1 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 shrink-0 text-[6.5px] min-[380px]:text-[7.5px] sm:text-xs">
                          <span>Active</span>
                          <svg className="w-2 h-2 sm:w-3 sm:h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      <h4 className="text-[9.5px] min-[380px]:text-[11px] sm:text-2xl font-bold text-white mb-1 sm:mb-3 leading-tight group-hover:text-purple-300 transition-colors" style={{ fontFamily: "'Bricolage Grotesque', serif" }}>
                        AI Tools + Human Creativity.
                      </h4>
                      <p className="text-slate-400 text-[7.5px] min-[380px]:text-[8.5px] sm:text-sm leading-tight sm:leading-relaxed font-sans line-clamp-2 sm:line-clamp-none">
                        Cutting-edge AI research driven by human creative strategy for ROI.
                      </p>
                    </div>

                    <div className="pt-1.5 sm:pt-6 mt-1.5 sm:mt-6 border-t border-white/10 z-10">
                      <Link href="/services">
                        <span className="inline-flex items-center gap-1 sm:gap-2 text-[6.5px] min-[380px]:text-[8px] sm:text-xs font-mono font-bold text-purple-400 hover:text-purple-300 uppercase tracking-widest cursor-pointer transition-colors">
                          LEARN <ArrowRight className="w-2 h-2 sm:w-3.5 sm:h-3.5" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </FadeUp>

              </div>
            </div>
          </div>

          {/* ── BOTTOM ROW: Rating Stars & Trust Banner (Zystra Dark Glass Theme) ── */}
          <FadeUp delay={0.2}>
            <div className="max-w-5xl mx-auto relative rounded-[32px] overflow-hidden border border-purple-500/25 bg-[#0a0618]/95 p-8 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              {/* Top Glowing Light Bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1.5 rounded-b-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-indigo-500 blur-[1px] opacity-90" />
              
              {/* Bottom Glowing Light Bar */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-2 bg-gradient-to-r from-purple-600 via-purple-300 to-indigo-500 blur-md opacity-80" />
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-purple-600/30 blur-3xl rounded-full pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left gap-3">
                {/* Rating Badge */}
                <div className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/20 backdrop-blur-md inline-flex items-center gap-2 mb-1">
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    {"★".repeat(5)}
                  </div>
                  <span className="text-xs font-mono font-bold text-purple-200 tracking-wide">4.9 / 5 Rating</span>
                </div>

                <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug" style={{ fontFamily: "'Bricolage Grotesque', serif" }}>
                  Trusted growth partner anytime & anywhere.
                </h4>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                  Whether you are scaling locally in Bihar or expanding across India and internationally, Zystra delivers measurable ROI and revenue growth.
                </p>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0">
                <Link href="/contact">
                  <span className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_10px_30px_rgba(124,58,237,0.4)] hover:scale-[1.03] cursor-pointer">
                    Start A Project <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
                <a href="tel:+916200048924" className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-sm font-mono font-semibold text-purple-300 border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
                  <Phone className="w-4 h-4 text-purple-400" />
                  Ask Question?
                </a>
              </div>
            </div>
          </FadeUp>

        </div>
      </section>

      {/* SERVICES BENTO GRID - EVERYTHING UNDER ONE ROOF */}
      <section className="relative overflow-hidden py-24 md:py-36 border-t border-white/[0.06]" style={{ background: "#080510" }}>
        <AboutInteractiveBg />
        <div className="max-w-7xl mx-auto px-6 sm:px-[5vw] relative z-10">
          {/* Center-Aligned Header */}
          <div className="mb-16 sm:mb-20 text-center max-w-4xl mx-auto flex flex-col items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono tracking-[0.2em] uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                COMPREHENSIVE SUITE
              </div>
            </FadeUp>

            <LineReveal delay={0.1}>
              <h2 className="font-black text-white leading-[0.96] tracking-tight mb-6" style={{ fontSize: "clamp(40px, 6.5vw, 84px)", fontFamily: "'Bricolage Grotesque', serif" }}>
                Everything <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">Under One Roof</span>
              </h2>
            </LineReveal>

            <FadeUp delay={0.2} className="max-w-2xl">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal mb-8">
                From organic search visibility and high-converting ads to custom web development and brand identity — our full-spectrum capabilities engineered to scale your revenue.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <Link href="/services">
                <span className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-400/60 transition-all duration-300 cursor-pointer shadow-lg">
                  All Services <ArrowUpRight className="w-4 h-4 text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
            </FadeUp>
          </div>

          {/* Bento Box Container (Replicating exact 3D Bento Box Layout from Reference) */}
          <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#0c081d]/90 border border-purple-500/20 p-4 sm:p-7 md:p-8 backdrop-blur-2xl shadow-2xl overflow-hidden">
            <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch relative z-10">
              
              {/* CARD 1: Product Design & AI Strategy (Tall Left Card: 1 Col, 2 Rows) */}
              <FadeUp delay={0.05} className="md:col-span-1 md:row-span-2 flex">
                <Link href="/services" className="w-full">
                  <div className="group relative w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#140c33]/90 via-[#0d0722]/95 to-[#080510] border border-purple-500/20 hover:border-purple-400/60 p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(168,85,247,0.35)] cursor-pointer min-h-[380px] md:min-h-[520px]">
                    {/* Top 3D Asset Floating */}
                    <div className="relative h-48 sm:h-60 flex items-center justify-center">
                      <div className="absolute w-36 h-36 bg-purple-600/15 rounded-full blur-2xl pointer-events-none" />
                      <img
                        src="/social-media/Zystra.png"
                        alt="Zystra AI & Brand Strategy"
                        className="max-h-44 sm:max-h-52 w-auto object-contain filter drop-shadow-[0_20px_35px_rgba(124,58,237,0.5)] group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500"
                      />
                    </div>
                    {/* Bottom Text Content */}
                    <div>
                      <div className="text-[10px] font-mono font-extrabold text-purple-300 tracking-widest uppercase mb-1">
                        01 // STRATEGY & AI
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors" style={{ fontFamily: "'Bricolage Grotesque', serif" }}>
                        AI & Brand Strategy
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                        Crafting market intelligence, audience personas, and predictive positioning engineered for revenue growth.
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-400 group-hover:text-purple-200 uppercase tracking-wider">
                        EXPLORE <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>

              {/* CARD 2: Web & App Engineering (Wide Top Right Card: 2 Cols, 1 Row) */}
              <FadeUp delay={0.1} className="md:col-span-2 md:row-span-1 flex">
                <Link href="/services/web-development" className="w-full">
                  <div className="group relative w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#140c33]/90 via-[#0d0722]/95 to-[#080510] border border-purple-500/20 hover:border-purple-400/60 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(168,85,247,0.35)] cursor-pointer min-h-[220px] sm:min-h-[250px]">
                    {/* Left Content */}
                    <div className="flex-1">
                      <div className="text-[10px] font-mono font-extrabold text-purple-300 tracking-widest uppercase mb-1">
                        02 // ENGINEERING & ADS
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors" style={{ fontFamily: "'Bricolage Grotesque', serif" }}>
                        Web & Google Ads Scaling
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 max-w-md">
                        Ultra-fast Next.js web applications, mobile platforms, and high-converting Google PPC campaign scaling.
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-400 group-hover:text-purple-200 uppercase tracking-wider">
                        EXPLORE <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    {/* Right 3D Graphic */}
                    <div className="relative w-40 sm:w-56 h-36 sm:h-44 flex items-center justify-center shrink-0">
                      <div className="absolute w-32 h-32 bg-purple-600/15 rounded-full blur-2xl pointer-events-none" />
                      <img
                        src="/social-media/googleAdds.png"
                        alt="Google Ads Scaling"
                        className="max-h-36 sm:max-h-44 w-auto object-contain filter drop-shadow-[0_15px_30px_rgba(124,58,237,0.5)] group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </Link>
              </FadeUp>

              {/* CARD 3: Brand Identity (Middle Center Card: 1 Col, 1 Row) */}
              <FadeUp delay={0.15} className="md:col-span-1 md:row-span-1 flex">
                <Link href="/services/logo-designing" className="w-full">
                  <div className="group relative w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#140c33]/90 via-[#0d0722]/95 to-[#080510] border border-purple-500/20 hover:border-purple-400/60 p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(168,85,247,0.35)] cursor-pointer min-h-[240px] sm:min-h-[260px]">
                    <div>
                      <div className="text-[10px] font-mono font-extrabold text-purple-300 tracking-widest uppercase mb-1">
                        03 // META ADS & DESIGN
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors" style={{ fontFamily: "'Bricolage Grotesque', serif" }}>
                        Meta & Brand Identity
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                        Building cohesive visual identities, Facebook & Meta ad creatives that resonate.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-400 group-hover:text-purple-200 uppercase tracking-wider">
                        EXPLORE <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <img
                        src="/social-media/meta.png"
                        alt="Meta Ads"
                        className="w-16 h-16 object-contain filter drop-shadow-[0_10px_20px_rgba(124,58,237,0.4)] group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </Link>
              </FadeUp>

              {/* CARD 4: Organic SEO (Middle Right Card: 1 Col, 1 Row) */}
              <FadeUp delay={0.2} className="md:col-span-1 md:row-span-1 flex">
                <Link href="/services/seo-optimization" className="w-full">
                  <div className="group relative w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#140c33]/90 via-[#0d0722]/95 to-[#080510] border border-purple-500/20 hover:border-purple-400/60 p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(168,85,247,0.35)] cursor-pointer min-h-[240px] sm:min-h-[260px]">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-[10px] font-mono font-extrabold text-purple-300 tracking-widest uppercase mb-1">
                          04 // GOOGLE SEARCH
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors" style={{ fontFamily: "'Bricolage Grotesque', serif" }}>
                          Organic SEO
                        </h3>
                      </div>
                      <img
                        src="/social-media/google.png"
                        alt="Google Search SEO"
                        className="w-16 h-16 object-contain filter drop-shadow-[0_10px_20px_rgba(124,58,237,0.4)] group-hover:scale-110 transition-transform duration-500 shrink-0"
                      />
                    </div>
                    <div>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                        Pan-India & global Google search dominance with high-authority organic rankings.
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-400 group-hover:text-purple-200 uppercase tracking-wider">
                        EXPLORE <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>

              {/* CARD 5: Performance Paid Ads (Wide Bottom Left Card: 2 Cols, 1 Row) */}
              <FadeUp delay={0.25} className="md:col-span-2 md:row-span-1 flex">
                <Link href="/services/social-media-marketing" className="w-full">
                  <div className="group relative w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#140c33]/90 via-[#0d0722]/95 to-[#080510] border border-purple-500/20 hover:border-purple-400/60 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(168,85,247,0.35)] cursor-pointer min-h-[220px] sm:min-h-[250px]">
                    {/* Left Content */}
                    <div className="flex-1">
                      <div className="text-[10px] font-mono font-extrabold text-purple-300 tracking-widest uppercase mb-1">
                        05 // B2B & PERFORMANCE
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors" style={{ fontFamily: "'Bricolage Grotesque', serif" }}>
                        LinkedIn & B2B Growth
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 max-w-md">
                        High-converting B2B lead generation, LinkedIn executive branding, and performance campaigns.
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-400 group-hover:text-purple-200 uppercase tracking-wider">
                        EXPLORE <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    {/* Right 3D Graphic */}
                    <div className="relative w-40 sm:w-56 h-36 sm:h-44 flex items-center justify-center shrink-0">
                      <div className="absolute w-32 h-32 bg-purple-600/15 rounded-full blur-2xl pointer-events-none" />
                      <img
                        src="/social-media/linkedIn.png"
                        alt="LinkedIn B2B Growth"
                        className="max-h-36 sm:max-h-44 w-auto object-contain filter drop-shadow-[0_15px_30px_rgba(124,58,237,0.5)] group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </Link>
              </FadeUp>

              {/* CARD 6: Social Media & Viral Content (Bottom Right Card: 1 Col, 1 Row) */}
              <FadeUp delay={0.3} className="md:col-span-1 md:row-span-1 flex">
                <Link href="/services" className="w-full">
                  <div className="group relative w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#140c33]/90 via-[#0d0722]/95 to-[#080510] border border-purple-500/20 hover:border-purple-400/60 p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(168,85,247,0.35)] cursor-pointer min-h-[240px] sm:min-h-[260px]">
                    <div>
                      <div className="text-[10px] font-mono font-extrabold text-purple-300 tracking-widest uppercase mb-1">
                        06 // INSTAGRAM & VIRAL
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors" style={{ fontFamily: "'Bricolage Grotesque', serif" }}>
                        Instagram & Reels
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                        Viral Instagram reels strategy, high-engagement storytelling, and brand amplification.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-400 group-hover:text-purple-200 uppercase tracking-wider">
                        EXPLORE <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <img
                        src="/social-media/insta.png"
                        alt="Instagram Growth"
                        className="w-16 h-16 object-contain filter drop-shadow-[0_10px_20px_rgba(124,58,237,0.4)] group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </Link>
              </FadeUp>

            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA SECTION (Zystra Dark Glass Theme) */}
      <section className="relative overflow-hidden py-24 sm:py-36" style={{ background: "#080510" }}>
        <AboutInteractiveBg />
        {/* Ambient Glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none opacity-20 blur-[150px] rounded-full bg-purple-600" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #a855f7 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="relative rounded-[36px] overflow-hidden border border-purple-500/25 bg-[#0a0618]/95 p-10 sm:p-14 md:p-16 text-center backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col items-center gap-8">
              {/* Top Glowing Light Bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1.5 rounded-b-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-indigo-500 blur-[1px] opacity-90" />
              
              {/* Bottom Glowing Light Bar */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-2 bg-gradient-to-r from-purple-600 via-purple-300 to-indigo-500 blur-md opacity-80" />
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-purple-600/30 blur-3xl rounded-full pointer-events-none" />

              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono tracking-[0.2em] uppercase">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                READY TO GROW?
              </div>

              <div>
                <LineReveal>
                  <h2 className="font-black text-white leading-[0.95]" style={{ fontSize: "clamp(42px, 7vw, 90px)", fontFamily: "'Bricolage Grotesque', serif", letterSpacing: "-0.03em" }}>
                    Let's Build Your
                  </h2>
                </LineReveal>
                <LineReveal delay={0.1}>
                  <h2 className="font-black leading-[0.95] bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent" style={{ fontSize: "clamp(42px, 7vw, 90px)", fontFamily: "'Bricolage Grotesque', serif", letterSpacing: "-0.03em" }}>
                    Digital Future
                  </h2>
                </LineReveal>
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
                Whether you run a healthcare brand, a solar company, a salon, a coaching institute, or a growing startup — Zystra is your brand growth partner. Let's start with a conversation.
              </p>

              {/* Action Buttons (Free Audit & Phone Number Removed) */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Link href="/contact">
                  <span className="group inline-flex items-center gap-3 px-9 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_10px_35px_rgba(168,85,247,0.45)] hover:scale-[1.03] cursor-pointer">
                    Start A Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link href="/services">
                  <span className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-mono font-semibold text-purple-200 border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300 cursor-pointer">
                    Explore Services
                  </span>
                </Link>
              </div>

              <div className="pt-4 border-t border-white/10 w-full max-w-lg">
                <span className="text-[11px] text-purple-300/60 font-mono tracking-widest uppercase block">
                  SERVING CLIENTS ACROSS INDIA & INTERNATIONALLY · RESPONSE WITHIN 24 HOURS
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes heroFloat1 {
            0%, 100% { transform: translateY(-6px) rotate(-2deg); }
            50% { transform: translateY(8px) rotate(2deg); }
          }
          @media (max-width: 768px) {
            .backdrop-blur-xl,
            .backdrop-blur-2xl,
            .backdrop-blur-3xl,
            .backdrop-blur-lg,
            .backdrop-blur-md {
              backdrop-filter: none !important;
              -webkit-backdrop-filter: none !important;
            }
          }
        `
      }} />
    </div>
  );
}
