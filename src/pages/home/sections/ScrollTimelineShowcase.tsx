import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { TrendingUp, Heart, MessageCircle } from "lucide-react";

const CAPTIONS = [
  {
    title: "LIVE ANALYTICS ENGINE",
    desc: "Explore how we integrate brand strategy and interactive design to create high-conversion digital ecosystems."
  },
  {
    title: "01 / DYNAMIC SOCIAL FEED",
    desc: "We design campaigns that stop scroll-fatigued feeds and demand complete attention across platforms."
  },
  {
    title: "02 / METRIC-DRIVEN ASSETS",
    desc: "Every visual asset and branding detail is built to elevate business conversions and analytics."
  },
  {
    title: "03 / ORGANIC AUDIENCE REACH",
    desc: "Scale traffic organic metrics directly with clean immersive UX that plays like a cinematic showcase."
  },
  {
    title: "04 / AMPLIFIED ENGAGEMENT",
    desc: "Harness community building and viral structures to establish brand authority and conversion."
  }
];

const reachFormatter = (v: number) => {
  const rounded = Math.floor(v);
  if (rounded >= 1000000) {
    return (rounded / 1000000).toFixed(1) + "M+";
  }
  return rounded.toLocaleString();
};

const convFormatter = (v: number) => {
  return v.toFixed(1) + "%";
};

interface ScrollNumberProps {
  value: any;
  formatter: (v: number) => string;
}

function ScrollNumber({ value, formatter }: ScrollNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    return value.on("change", (latest: number) => {
      if (ref.current) {
        ref.current.textContent = formatter(latest);
      }
    });
  }, [value, formatter]);

  return <span ref={ref}>{formatter(value.get())}</span>;
}

const BAR_HEIGHTS = [40, 65, 50, 80, 70, 95, 120, 105, 140, 160, 185, 220];

function DashboardBars({ progress }: { progress: any }) {
  const b0 = useTransform(progress, [0.00, 0.35], [0.1, 1]);
  const b1 = useTransform(progress, [0.03, 0.38], [0.1, 1]);
  const b2 = useTransform(progress, [0.06, 0.41], [0.1, 1]);
  const b3 = useTransform(progress, [0.09, 0.44], [0.1, 1]);
  const b4 = useTransform(progress, [0.12, 0.47], [0.1, 1]);
  const b5 = useTransform(progress, [0.15, 0.50], [0.1, 1]);
  const b6 = useTransform(progress, [0.18, 0.53], [0.1, 1]);
  const b7 = useTransform(progress, [0.21, 0.56], [0.1, 1]);
  const b8 = useTransform(progress, [0.24, 0.59], [0.1, 1]);
  const b9 = useTransform(progress, [0.27, 0.62], [0.1, 1]);
  const b10 = useTransform(progress, [0.30, 0.65], [0.1, 1]);
  const b11 = useTransform(progress, [0.33, 0.68], [0.1, 1]);

  const barTransforms = [b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11];

  return (
    <div className="flex-1 flex items-end justify-between gap-1 sm:gap-1.5 mt-3 sm:mt-5">
      {BAR_HEIGHTS.map((val, idx) => (
        <div key={idx} className="flex-1 bg-indigo-50 rounded-t-md flex items-end h-full">
          <motion.div
            style={{
              scaleY: barTransforms[idx],
              originY: 1,
              height: `${(val / 220) * 100}%`
            }}
            className="w-full bg-gradient-to-t from-brand-vibrant via-brand-medium to-brand-dark rounded-t-md shadow-sm"
          />
        </div>
      ))}
    </div>
  );
}

export default function ScrollTimelineShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [windowWidth, setWindowWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const isLaptop = windowWidth >= 1024 && windowWidth < 1440;

  const dashMaxScale = isMobile ? 0.75 : isTablet ? 0.85 : isLaptop ? 0.88 : 1.0;

  const [currentStep, setCurrentStep] = useState(0);

  // Drive animations 100% directly from native scrollYProgress as section scrolls into view
  const p = scrollYProgress;

  // Caption step update
  useMotionValueEvent(p, "change", (latest: number) => {
    if (latest < 0.25) {
      setCurrentStep(0);
    } else if (latest < 0.40) {
      setCurrentStep(1);
    } else if (latest < 0.55) {
      setCurrentStep(2);
    } else if (latest < 0.70) {
      setCurrentStep(3);
    } else {
      setCurrentStep(4);
    }
  });

  // Dashboard zoom + slide: smooth in-view transform
  const scale = useTransform(
    p,
    [0.10, 0.40, 0.90],
    [0.65 * dashMaxScale, dashMaxScale, dashMaxScale]
  );
  const y = useTransform(
    p,
    [0.10, 0.40, 0.90],
    [isMobile ? 30 : 50, isMobile ? -65 : -110, isMobile ? -65 : -110]
  );
  const rotateX = useTransform(
    p,
    [0.10, 0.40],
    [isMobile ? 0 : 15, 0]
  );
  const dashOpacity = useTransform(p, [0.08, 0.20], [0.3, 1.0]);

  // Card 3D rotation: Moves smoothly while section scrolls through viewport
  const getCardTransform = (progress: number, index: number) => {
    const start = 0.15;
    const end = 0.85;

    let t = 0;
    if (progress > start) {
      t = Math.min(1, (progress - start) / (end - start));
    }

    const baseRotation = t * -270;
    const cardAngle = baseRotation + index * 90;
    const rad = (cardAngle * Math.PI) / 180;

    const radiusX = isMobile ? 100 : isTablet ? 170 : 270;
    const radiusZ = isMobile ? 35 : isTablet ? 65 : 120;
    const tiltY = isMobile ? 6 : isTablet ? 10 : 14;

    const x = radiusX * Math.sin(rad);
    const z = radiusZ * Math.cos(rad);

    const centerY = isMobile ? 135 : isTablet ? 165 : 195;
    const cardY = centerY - tiltY * Math.cos(rad);

    const cosVal = Math.cos(rad);
    const normDepth = (cosVal + 1) / 2;
    const cardScale = (isMobile ? 0.62 : 0.58) + (isMobile ? 0.28 : 0.32) * normDepth;

    let opacity = 1.0;
    if (progress < start) {
      opacity = Math.max(0.2, progress / start);
    }

    const rotateY = -22 * Math.sin(rad);
    const rotateZ = -6 * Math.sin(rad);
    const zIndex = Math.round(10 + 40 * normDepth);

    return { x, y: cardY, z, scale: cardScale, opacity, rotateY, rotateZ, zIndex };
  };

  const useCardTransform = (index: number) => {
    const x      = useTransform(p, (v: number) => getCardTransform(v, index).x);
    const cy     = useTransform(p, (v: number) => getCardTransform(v, index).y);
    const z      = useTransform(p, (v: number) => getCardTransform(v, index).z);
    const cs     = useTransform(p, (v: number) => getCardTransform(v, index).scale);
    const op     = useTransform(p, (v: number) => getCardTransform(v, index).opacity);
    const rotY   = useTransform(p, (v: number) => getCardTransform(v, index).rotateY);
    const rotZ   = useTransform(p, (v: number) => getCardTransform(v, index).rotateZ);
    const zi     = useTransform(p, (v: number) => getCardTransform(v, index).zIndex);
    return { x, y: cy, z, scale: cs, opacity: op, rotateY: rotY, rotateZ: rotZ, zIndex: zi };
  };

  const card0 = useCardTransform(0);
  const card1 = useCardTransform(1);
  const card2 = useCardTransform(2);
  const card3 = useCardTransform(3);

  const reachVal = useTransform(p, [0.1, 0.8], [18450, 1400000]);
  const convVal  = useTransform(p, [0.1, 0.8], [1.4, 19.2]);

  return (
    <section id="showcase" ref={containerRef} className="relative min-h-[110vh] py-12 sm:py-20 bg-transparent flex flex-col justify-center items-center overflow-hidden">
      <div className="relative w-full h-[620px] sm:h-[680px] flex flex-col justify-center items-center overflow-hidden">
        {/* Soft Radial Gradients (Optimized with radial gradients, no filters) */}
        <div className="absolute inset-0 opacity-45 pointer-events-none">
          <div 
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px]" 
            style={{ background: "radial-gradient(circle, rgba(110, 1, 156, 0.12) 0%, rgba(110, 1, 156, 0) 70%)" }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px]" 
            style={{ background: "radial-gradient(circle, rgba(86, 29, 154, 0.12) 0%, rgba(86, 29, 154, 0) 70%)" }}
          />
        </div>

        {/* Central Dashboard Showcase */}
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            scale,
            y,
            rotateX,
            opacity: dashOpacity,
            transformStyle: "preserve-3d",
            willChange: "transform, opacity",
            zIndex: isHovered ? 50 : 20
          }}
          className="relative w-[92%] max-w-[760px] h-[240px] sm:h-[290px] md:h-[320px] rounded-3xl bg-white shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-slate-200 p-3 sm:p-4 flex flex-col transition-shadow duration-300 hover:shadow-[0_45px_120px_rgba(110,1,156,0.15)]"
        >

          {/* Mock Browser Topbar */}
          <div className="flex items-center gap-2 pb-3 sm:pb-4 border-b border-slate-100 mb-3 sm:mb-5">
            <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-yellow-400/80" />
            <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-green-400/80" />
            <div className="ml-2 sm:ml-4 bg-slate-50 border border-slate-100 rounded-full px-3 sm:px-5 py-0.5 sm:py-1 text-[10px] sm:text-xs text-slate-400 font-mono w-48 sm:w-72 text-center truncate">
              zystra-analytics.com/live-dash
            </div>
            <div className="ml-auto flex items-center gap-1 sm:gap-1.5 bg-rose-50 text-rose-600 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider uppercase">
              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-rose-500 animate-ping" /> Live
            </div>
          </div>

          {/* Inner Dashboard Layout */}
          <div className="flex-1 grid grid-cols-12 gap-3 sm:gap-5 overflow-hidden">
            {/* Sidebar Panel */}
            <div className="col-span-3 border-r border-slate-100 pr-5 hidden sm:flex flex-col gap-3">
              <div className="h-10 w-full bg-brand-vibrant/5 text-brand-vibrant rounded-xl flex items-center px-4 gap-3 font-semibold text-xs border border-brand-vibrant/20">
                <TrendingUp className="w-4 h-4" /> Dashboard
              </div>
              {["Active Campaigns", "Asset Creator", "Media Planner", "Audience Insights"].map((item, i) => (
                <div key={i} className="h-10 w-full hover:bg-slate-50 text-slate-500 hover:text-slate-800 rounded-xl flex items-center px-4 gap-3 text-xs transition-colors cursor-pointer">
                  <div className="w-2 h-2 rounded bg-slate-300" /> {item}
                </div>
              ))}
            </div>

            {/* Main Graphs Content */}
            <div className="col-span-12 sm:col-span-9 flex flex-col gap-3 sm:gap-5">
              {/* Counter Metrics */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-brand-vibrant/5 border border-brand-vibrant/20 shadow-sm">
                  <div className="text-[8px] sm:text-[10px] font-mono font-bold tracking-wider text-brand-vibrant uppercase mb-1">TOTAL REACH</div>
                  <div className="text-sm sm:text-2xl md:text-3xl font-serif font-black text-slate-800">
                    <ScrollNumber value={reachVal} formatter={reachFormatter} />
                  </div>
                </div>
                <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50/40 border border-emerald-100/70 shadow-sm">
                  <div className="text-[8px] sm:text-[10px] font-mono font-bold tracking-wider text-emerald-600 uppercase mb-1">CONVERSION</div>
                  <div className="text-sm sm:text-2xl md:text-3xl font-serif font-black text-slate-800">
                    <ScrollNumber value={convVal} formatter={convFormatter} />
                  </div>
                </div>
              </div>

              {/* Dynamic scroll-progress bar graph */}
              <div className="flex-1 bg-slate-50/80 border border-slate-150 rounded-2xl p-2.5 sm:p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between items-center text-[8px] sm:text-[10px] font-mono font-bold text-slate-400">
                  <span>LIVE TRAFFIC FLOW</span>
                  <span className="text-brand-vibrant hidden sm:inline">SCROLL DOWN TO PROGRESS</span>
                </div>
                <DashboardBars progress={p} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Unified 3D Circular Carousel Wrapper */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
          style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
        >
          {/* 1. Instagram Post Card */}
          <motion.div
            style={{
              x: card0.x,
              y: card0.y,
              z: card0.z,
              rotateY: card0.rotateY,
              rotateZ: card0.rotateZ,
              opacity: card0.opacity,
              scale: card0.scale,
              zIndex: card0.zIndex,
              transformStyle: "preserve-3d",
              willChange: "transform, opacity"
            }}
            whileHover={{ scale: 1.05 }}
            className="absolute w-[230px] sm:w-[250px] md:w-[260px] min-h-[290px] sm:min-h-[320px] rounded-[22px] bg-white border border-slate-100 p-3.5 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.06)] pointer-events-auto transition-[border-color,box-shadow] duration-300 cursor-pointer flex flex-col justify-between gap-2.5"
          >
            {/* Instagram Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="/zystra-logo.jpg" alt="Zystra Logo" className="w-7 h-7 rounded-full object-cover border border-slate-100" />
                <div className="leading-none">
                  <div className="text-[10px] font-bold text-slate-900 flex items-center gap-0.5">
                    zystra_webtech
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full flex items-center justify-center text-[6px] text-white">✓</span>
                  </div>
                  <span className="text-[8px] text-slate-400 font-medium">Patna, India</span>
                </div>
              </div>
              <span className="text-slate-400 text-xs font-bold leading-none -mt-1">···</span>
            </div>

            {/* Post Image */}
            <div className="w-full h-[135px] sm:h-[155px] rounded-xl overflow-hidden border border-slate-100">
              <img
                src="/insta_post.jpeg"
                alt="Zystra Webtech Instagram Post"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Engagement Icons */}
            <div className="flex items-center justify-between text-slate-700 mt-0.5">
              <div className="flex gap-2.5">
                <Heart className="w-4 h-4 hover:text-rose-500 transition-colors animate-pulse" />
                <MessageCircle className="w-4 h-4 hover:text-brand-vibrant transition-colors" />
                {/* Send/Share Icon */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </div>
              {/* Bookmark Icon */}
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
              </svg>
            </div>

            {/* Likes & Caption */}
            <div className="leading-tight">
              <div className="text-[9px] font-bold text-slate-900">1,204 likes</div>
              <p className="text-[8.5px] text-slate-700 mt-0.5 truncate">
                <span className="font-bold mr-1">zystra_webtech</span>We design interactive digital movements...
              </p>
            </div>
          </motion.div>

          {/* 2. Facebook Post Card */}
          <motion.div
            style={{
              x: card1.x,
              y: card1.y,
              z: card1.z,
              rotateY: card1.rotateY,
              rotateZ: card1.rotateZ,
              opacity: card1.opacity,
              scale: card1.scale,
              zIndex: card1.zIndex,
              transformStyle: "preserve-3d",
              willChange: "transform, opacity"
            }}
            whileHover={{ scale: 1.05 }}
            className="absolute w-[230px] sm:w-[250px] md:w-[260px] min-h-[290px] sm:min-h-[320px] rounded-[22px] bg-white border border-slate-100 p-3.5 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.06)] pointer-events-auto transition-[border-color,box-shadow] duration-300 cursor-pointer flex flex-col justify-between gap-2.5"
          >
            {/* Facebook Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="/zystra-logo.jpg" alt="Zystra Logo" className="w-7 h-7 rounded-full object-cover border border-slate-100" />
                <div className="leading-tight">
                  <div className="text-[10px] font-bold text-slate-900 flex items-center gap-0.5">
                    Zystra Webtech
                    <span className="w-2.5 h-2.5 bg-[#1877f2] rounded-full flex items-center justify-center text-[6px] text-white">✓</span>
                  </div>
                  <div className="text-[8px] text-slate-400 font-medium flex items-center gap-0.5">
                    1d · <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full scale-[0.6]" /> 🌐
                  </div>
                </div>
              </div>
              <span className="text-slate-400 text-xs font-bold leading-none -mt-1">···</span>
            </div>

            {/* Post Caption */}
            <p className="text-[8.5px] text-slate-800 leading-normal">
              High-fidelity interactions designed for modern conversion systems. Let's build your brand's digital presence.
            </p>

            {/* Post Image */}
            <div className="w-full h-[135px] sm:h-[155px] rounded-xl overflow-hidden border border-slate-100">
              <img
                src="/facebook_post.png"
                alt="Zystra Webtech Facebook Post"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Reaction Metrics */}
            <div className="flex items-center justify-between text-[7.5px] text-slate-500 border-b border-slate-100 pb-1.5">
              <div className="flex items-center gap-1">
                <span className="flex items-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#1877f2] flex items-center justify-center text-[7px] text-white shadow-sm ring-1 ring-white">👍</span>
                  <span className="w-3.5 h-3.5 rounded-full bg-rose-500 flex items-center justify-center text-[7px] text-white shadow-sm ring-1 ring-white -ml-1">❤️</span>
                </span>
                <span>482 Likes</span>
              </div>
              <span>42 Shares</span>
            </div>

            {/* Facebook Action Buttons */}
            <div className="flex justify-between items-center text-[8.5px] font-bold text-slate-500 pt-0.5 px-2">
              <span className="flex items-center gap-1 hover:text-[#1877f2] transition-colors">👍 Like</span>
              <span className="flex items-center gap-1 hover:text-brand-vibrant transition-colors">💬 Comment</span>
              <span className="flex items-center gap-1 hover:text-green-600 transition-colors">↪ Share</span>
            </div>
          </motion.div>

          {/* 3. LinkedIn Post Card */}
          <motion.div
            style={{
              x: card2.x,
              y: card2.y,
              z: card2.z,
              rotateY: card2.rotateY,
              rotateZ: card2.rotateZ,
              opacity: card2.opacity,
              scale: card2.scale,
              zIndex: card2.zIndex,
              transformStyle: "preserve-3d",
              willChange: "transform, opacity"
            }}
            whileHover={{ scale: 1.05 }}
            className="absolute w-[230px] sm:w-[250px] md:w-[260px] min-h-[290px] sm:min-h-[320px] rounded-[22px] bg-white border border-slate-100 p-3.5 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.06)] pointer-events-auto transition-[border-color,box-shadow] duration-300 cursor-pointer flex flex-col justify-between gap-2.5"
          >
            {/* LinkedIn Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="/zystra-logo.jpg" alt="Zystra Logo" className="w-7 h-7 rounded-full object-cover border border-slate-100" />
                <div className="leading-tight">
                  <div className="text-[9px] font-bold text-slate-900 flex items-center gap-0.5">
                    Zystra Webtech
                    <span className="text-[7px] text-slate-400 font-normal">· 1st</span>
                  </div>
                  <div className="text-[7px] text-slate-500 truncate max-w-[130px]">Empowering Brands through Interactive Design</div>
                  <div className="text-[7px] text-slate-400 font-medium flex items-center gap-0.5">
                    3h · <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full scale-[0.6]" /> 🌐
                  </div>
                </div>
              </div>
              <span className="text-slate-400 text-xs font-bold leading-none -mt-1">···</span>
            </div>

            {/* LinkedIn Caption */}
            <p className="text-[8px] text-slate-700 leading-normal">
              Proud to showcase our latest digital conversion architecture. High-fidelity layouts built on modern stacks. 📈🚀
            </p>

            {/* Post Image */}
            <div className="w-full h-[135px] sm:h-[155px] rounded-xl overflow-hidden border border-slate-100">
              <img
                src="/linkedin_post.jpeg"
                alt="Zystra Webtech LinkedIn Post"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Reactions and Comments */}
            <div className="flex justify-between items-center text-[7.5px] text-slate-500 border-b border-slate-100 pb-1.5">
              <div className="flex items-center gap-1">
                <span className="flex items-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#0a66c2] flex items-center justify-center text-[6px] text-white">👍</span>
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center text-[6px] text-white -ml-0.5">💡</span>
                </span>
                <span>85 reactions</span>
              </div>
              <span>12 comments</span>
            </div>

            {/* LinkedIn Actions */}
            <div className="flex justify-between items-center text-[8.5px] font-bold text-slate-500 pt-0.5">
              <span className="flex items-center gap-1 hover:text-[#0a66c2] transition-colors">👍 Like</span>
              <span className="flex items-center gap-1 hover:text-brand-vibrant transition-colors">💬 Comment</span>
              <span className="flex items-center gap-1 hover:text-green-600 transition-colors">🔁 Repost</span>
            </div>
          </motion.div>

          {/* 4. Twitter/X Post Card */}
          <motion.div
            style={{
              x: card3.x,
              y: card3.y,
              z: card3.z,
              rotateY: card3.rotateY,
              rotateZ: card3.rotateZ,
              opacity: card3.opacity,
              scale: card3.scale,
              zIndex: card3.zIndex,
              transformStyle: "preserve-3d",
              willChange: "transform, opacity"
            }}
            whileHover={{ scale: 1.05 }}
            className="absolute w-[230px] sm:w-[250px] md:w-[260px] min-h-[290px] sm:min-h-[320px] rounded-[22px] bg-white border border-slate-100 p-3.5 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.06)] pointer-events-auto transition-[border-color,box-shadow] duration-300 cursor-pointer flex flex-col justify-between gap-2.5"
          >
            <div>
              {/* Tweet Header */}
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <img src="/zystra-logo.jpg" alt="Zystra Logo" className="w-7 h-7 rounded-full object-cover border border-slate-100" />
                  <div className="leading-tight">
                    <div className="text-[10px] font-bold text-slate-900 flex items-center gap-0.5">
                      Zystra Webtech
                      <span className="inline-block text-[#1d9bf0]">
                        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                      </span>
                    </div>
                    <div className="text-[8px] text-slate-500 font-medium">@zystra_webtech</div>
                  </div>
                </div>
                {/* X Logo */}
                <svg viewBox="0 0 24 24" className="w-3 h-3 text-slate-950 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>

              {/* Tweet Content */}
              <p className="text-[9.5px] text-slate-800 leading-normal font-sans font-medium mb-2">
                Creating digital activations that move culture. We build the future of web design. 💻🚀
              </p>

              {/* Tweet Image */}
              <div className="w-full h-[135px] sm:h-[155px] rounded-xl overflow-hidden border border-slate-100 mb-2">
                <img
                  src="/zystra-logo.jpg"
                  alt="Zystra Webtech Post Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Engagement Metrics */}
            <div className="border-t border-slate-100 pt-1.5 flex justify-between text-[8.5px] font-semibold text-slate-400">
              <span className="flex items-center gap-1 hover:text-sky-500 transition-colors">💬 24</span>
              <span className="flex items-center gap-1 hover:text-emerald-500 transition-colors">🔁 153</span>
              <span className="flex items-center gap-1 hover:text-rose-500 transition-colors">❤️ 842</span>
              <span className="flex items-center gap-1 hover:text-sky-500 transition-colors">📊 12K</span>
            </div>
          </motion.div>
        </div>

        {/* Single Active Caption Overlay - Placed above the Analytical Board UI */}
        <div className="absolute top-14 sm:top-16 left-0 w-full text-center z-40 pointer-events-none px-4 sm:px-6 flex justify-center">
          <AnimatePresence mode="wait">
            {currentStep >= 0 && (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="w-full max-w-md"
              >
                <h3 className="text-base sm:text-xl md:text-2xl font-serif font-black text-slate-900 tracking-tight">
                  {CAPTIONS[currentStep].title}
                </h3>
                <p className="text-slate-500 max-w-md mx-auto mt-1 text-xs sm:text-sm leading-relaxed px-2 hidden sm:block">
                  {CAPTIONS[currentStep].desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
