import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TrendingUp, Heart, MessageCircle } from "lucide-react";

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

export default function ScrollTimelineShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [windowWidth, setWindowWidth] = useState(1200);
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

  // Smooth scrollProgress slightly to filter mobile touch gestures and avoid jitters
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 34,
    restDelta: 0.001
  });

  // Central Mockup Animations
  const scale = useTransform(smoothProgress,
    [0, 0.25, 0.35, 0.52],
    [0.8 * dashMaxScale, dashMaxScale, dashMaxScale, 0.5 * dashMaxScale]
  );

  const y = useTransform(smoothProgress,
    [0, 0.25, 0.35, 0.52],
    [isMobile ? 70 : 100, isMobile ? 15 : 25, isMobile ? 15 : 25, isMobile ? -500 : -700]
  );

  const rotateX = useTransform(smoothProgress,
    [0, 0.25, 0.35, 0.52],
    [isMobile ? 0 : 15, 0, 0, isMobile ? 0 : -10]
  );

  const dashOpacity = useTransform(smoothProgress, [0.0, 0.35, 0.52], [1.0, 1.0, 0.0]);

  // 3D Math for Carousel Cards
  const getCardTransform = (progress: number, index: number) => {
    const start = 0.50;
    const end = 0.92;

    // Normalized carousel rotation progress (0 to 1)
    let t = 0;
    if (progress > start) {
      t = Math.min(1, (progress - start) / (end - start));
    }

    // Total sweep: rotate by -270 degrees (3/4 of a circle) so cards 0, 1, 2, 3 rotate to front.
    const baseRotation = t * -270;
    const cardAngle = baseRotation + index * 90;
    const rad = (cardAngle * Math.PI) / 180;

    // Responsive radii - slightly narrowed to keep cards away from edges
    const radiusX = isMobile ? 85 : isTablet ? 170 : 300;
    const radiusZ = isMobile ? 35 : isTablet ? 70 : 130;

    // Tilt the circle slightly towards the camera for premium look
    const tiltY = isMobile ? 10 : isTablet ? 16 : 24;

    // X, Y, Z coordinates
    const x = radiusX * Math.sin(rad);
    const z = radiusZ * Math.cos(rad);

    // Y center offset shifts the carousel from below the frame into center frame
    let centerY = 0;
    if (progress < 0.40) {
      centerY = isMobile ? 350 : 500;
    } else if (progress < 0.50) {
      const tCenter = (progress - 0.40) / (0.50 - 0.40);
      const startVal = isMobile ? 350 : 500;
      const endVal = isMobile ? 100 : 150;
      centerY = startVal + tCenter * (endVal - startVal);
    } else {
      centerY = isMobile ? 100 : 150;
    }
    const y = centerY - tiltY * Math.cos(rad);

    const cosVal = Math.cos(rad); // 1 is front, -1 is back
    const normDepth = (cosVal + 1) / 2; // 0 to 1

    // Style mappings
    const scale = (isMobile ? 0.48 : 0.62) + (isMobile ? 0.28 : 0.35) * normDepth;

    // Opacity transitions
    let opacity = 0.15 + 0.85 * normDepth;
    if (progress < 0.40) {
      opacity = 0;
    } else if (progress < start) {
      // Fade in carousel as it slides into center frame
      const fadeInFactor = (progress - 0.40) / (start - 0.40);
      opacity = opacity * fadeInFactor;
    } else if (progress > 0.94) {
      // Fade out carousel completely from 0.94 to 1.0
      const fadeOutFactor = Math.max(0, 1 - (progress - 0.94) / (1.0 - 0.94));
      opacity = opacity * fadeOutFactor;
    }

    // Face direction: use sine function to create a 3D curves sway without mirroring
    const rotateY = -25 * Math.sin(rad);

    // Banking angle (roll tilt) as cards swing around sides
    const rotateZ = -8 * Math.sin(rad);

    const zIndex = Math.round(10 + 40 * normDepth);

    return { x, y, z, scale, opacity, rotateY, rotateZ, zIndex };
  };

  // Setup motion transformations for each card
  const useCardTransform = (index: number) => {
    const x = useTransform(smoothProgress, (p: number) => getCardTransform(p, index).x);
    const y = useTransform(smoothProgress, (p: number) => getCardTransform(p, index).y);
    const z = useTransform(smoothProgress, (p: number) => getCardTransform(p, index).z);
    const scale = useTransform(smoothProgress, (p: number) => getCardTransform(p, index).scale);
    const opacity = useTransform(smoothProgress, (p: number) => getCardTransform(p, index).opacity);
    const rotateY = useTransform(smoothProgress, (p: number) => getCardTransform(p, index).rotateY);
    const rotateZ = useTransform(smoothProgress, (p: number) => getCardTransform(p, index).rotateZ);
    const zIndex = useTransform(smoothProgress, (p: number) => getCardTransform(p, index).zIndex);

    return { x, y, z, scale, opacity, rotateY, rotateZ, zIndex };
  };

  const card0 = useCardTransform(0);
  const card1 = useCardTransform(1);
  const card2 = useCardTransform(2);
  const card3 = useCardTransform(3);

  // Captions Transitions mapping to scrollProgress
  const captionOpacity0 = useTransform(smoothProgress, [0.0, 0.20, 0.40], [1, 0, 0]);
  const captionOpacity1 = useTransform(smoothProgress, [0.45, 0.49, 0.58, 0.61], [0, 1, 1, 0]);
  const captionOpacity2 = useTransform(smoothProgress, [0.58, 0.61, 0.72, 0.75], [0, 1, 1, 0]);
  const captionOpacity3 = useTransform(smoothProgress, [0.72, 0.75, 0.86, 0.89], [0, 1, 1, 0]);
  const captionOpacity4 = useTransform(smoothProgress, [0.86, 0.89, 0.99, 1.0], [0, 1, 1, 0]);

  // Metric updates tied to scroll
  const reachVal = useTransform(smoothProgress, [0.0, 0.32], [18450, 1400000]);
  const convVal = useTransform(smoothProgress, [0.0, 0.32], [1.4, 19.2]);

  return (
    <section id="showcase" ref={containerRef} className="relative h-[280vh] bg-transparent">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        {/* Soft Radial Gradients */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-vibrant/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-brand-medium/10 rounded-full blur-[140px]" />
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
            perspective: 1000,
            willChange: "transform, opacity",
            zIndex: isHovered ? 50 : 20
          }}
          className="relative w-[90%] max-w-[850px] h-[370px] sm:h-[460px] md:h-[520px] rounded-3xl bg-white shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-slate-200 p-3 sm:p-5 flex flex-col transition-shadow duration-300 hover:shadow-[0_45px_120px_rgba(110,1,156,0.15)]"
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
                <div className="flex-1 flex items-end justify-between gap-1 sm:gap-1.5 mt-3 sm:mt-5">
                  {[40, 65, 50, 80, 70, 95, 120, 105, 140, 160, 185, 220].map((val, idx) => {
                    const barProgress = idx / 12;
                    const scaleY = useTransform(
                      scrollYProgress,
                      [barProgress * 0.45, barProgress * 0.45 + 0.35],
                      [0.05, 1]
                    );
                    return (
                      <div key={idx} className="flex-1 bg-indigo-50 rounded-t-md flex items-end h-full">
                        <motion.div
                          style={{
                            scaleY,
                            originY: 1,
                            height: `${(val / 220) * 100}%`
                          }}
                          className="w-full bg-gradient-to-t from-brand-vibrant via-brand-medium to-brand-dark rounded-t-md shadow-sm"
                        />
                      </div>
                    );
                  })}
                </div>
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
            className="absolute w-[160px] sm:w-[190px] md:w-[210px] rounded-[20px] bg-white border border-slate-100 p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] pointer-events-auto transition-[border-color,box-shadow] duration-300 cursor-pointer flex flex-col gap-2"
          >
            {/* Instagram Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <img src="/zystra-logo.jpg" alt="Zystra Logo" className="w-6 h-6 rounded-full object-cover border border-slate-100" />
                <div className="leading-none">
                  <div className="text-[9px] font-bold text-slate-900 flex items-center gap-0.5">
                    zystra_webtech
                    <span className="w-2 h-2 bg-blue-500 rounded-full flex items-center justify-center text-[5px] text-white">✓</span>
                  </div>
                  <span className="text-[7px] text-slate-400 font-medium">Patna, India</span>
                </div>
              </div>
              <span className="text-slate-400 text-xs font-bold leading-none -mt-1">···</span>
            </div>

            {/* Post Image */}
            <div className="w-full aspect-square rounded-[10px] overflow-hidden border border-slate-100">
              <img
                src="/insta_post.jpeg"
                alt="Zystra Webtech Instagram Post"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Engagement Icons */}
            <div className="flex items-center justify-between text-slate-700 mt-0.5">
              <div className="flex gap-2">
                <Heart className="w-3.5 h-3.5 hover:text-rose-500 transition-colors animate-pulse" />
                <MessageCircle className="w-3.5 h-3.5 hover:text-brand-vibrant transition-colors" />
                {/* Send/Share Icon */}
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </div>
              {/* Bookmark Icon */}
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
              </svg>
            </div>

            {/* Likes & Caption */}
            <div className="leading-tight">
              <div className="text-[8px] font-bold text-slate-900">1,204 likes</div>
              <p className="text-[8px] text-slate-700 mt-0.5 truncate">
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
            className="absolute w-[160px] sm:w-[190px] md:w-[210px] rounded-[20px] bg-white border border-slate-100 p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] pointer-events-auto transition-[border-color,box-shadow] duration-300 cursor-pointer flex flex-col gap-2"
          >
            {/* Facebook Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <img src="/zystra-logo.jpg" alt="Zystra Logo" className="w-6 h-6 rounded-full object-cover border border-slate-100" />
                <div className="leading-tight">
                  <div className="text-[9px] font-bold text-slate-900 flex items-center gap-0.5">
                    Zystra Webtech
                    <span className="w-2.5 h-2.5 bg-[#1877f2] rounded-full flex items-center justify-center text-[5px] text-white">✓</span>
                  </div>
                  <div className="text-[7px] text-slate-400 font-medium flex items-center gap-0.5">
                    1d · <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full scale-[0.6]" /> 🌐
                  </div>
                </div>
              </div>
              <span className="text-slate-400 text-xs font-bold leading-none -mt-1">···</span>
            </div>

            {/* Post Caption */}
            <p className="text-[8px] text-slate-800 leading-normal">
              High-fidelity interactions designed for modern conversion systems. Let's build your brand's digital presence.
            </p>

            {/* Post Image */}
            <div className="w-full aspect-video rounded-[10px] overflow-hidden border border-slate-100">
              <img
                src="/facebook_post.png"
                alt="Zystra Webtech Facebook Post"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Reaction Metrics */}
            <div className="flex items-center justify-between text-[7px] text-slate-500 border-b border-slate-100 pb-1.5">
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
            <div className="flex justify-between items-center text-[8px] font-bold text-slate-500 pt-0.5 px-2">
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
            className="absolute w-[160px] sm:w-[190px] md:w-[210px] rounded-[20px] bg-white border border-slate-100 p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] pointer-events-auto transition-[border-color,box-shadow] duration-300 cursor-pointer flex flex-col gap-2"
          >
            {/* LinkedIn Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <img src="/zystra-logo.jpg" alt="Zystra Logo" className="w-6 h-6 rounded-full object-cover border border-slate-100" />
                <div className="leading-tight">
                  <div className="text-[8px] font-bold text-slate-900 flex items-center gap-0.5">
                    Zystra Webtech
                    <span className="text-[6px] text-slate-400 font-normal">· 1st</span>
                  </div>
                  <div className="text-[6px] text-slate-500 truncate max-w-[110px]">Empowering Brands through Interactive Design</div>
                  <div className="text-[6px] text-slate-400 font-medium flex items-center gap-0.5">
                    3h · <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full scale-[0.6]" /> 🌐
                  </div>
                </div>
              </div>
              <span className="text-slate-400 text-xs font-bold leading-none -mt-1">···</span>
            </div>

            {/* LinkedIn Caption */}
            <p className="text-[7.5px] text-slate-700 leading-normal">
              Proud to showcase our latest digital conversion architecture. High-fidelity layouts built on modern stacks. 📈🚀
            </p>

            {/* Post Image */}
            <div className="w-full aspect-video rounded-[10px] overflow-hidden border border-slate-100">
              <img
                src="/linkedin_post.jpeg"
                alt="Zystra Webtech LinkedIn Post"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Reactions and Comments */}
            <div className="flex justify-between items-center text-[6.5px] text-slate-500 border-b border-slate-100 pb-1.5">
              <div className="flex items-center gap-0.5">
                <span className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-[#0a66c2] flex items-center justify-center text-[5px] text-white">👍</span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 flex items-center justify-center text-[5px] text-white -ml-0.5">💡</span>
                </span>
                <span>85 reactions</span>
              </div>
              <span>12 comments</span>
            </div>

            {/* LinkedIn Actions */}
            <div className="flex justify-between items-center text-[7.5px] font-bold text-slate-500 pt-0.5">
              <span className="flex items-center gap-0.5 hover:text-[#0a66c2] transition-colors">👍 Like</span>
              <span className="flex items-center gap-0.5 hover:text-brand-vibrant transition-colors">💬 Comment</span>
              <span className="flex items-center gap-0.5 hover:text-green-600 transition-colors">🔁 Repost</span>
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
            className="absolute w-[160px] sm:w-[190px] md:w-[210px] rounded-[20px] bg-white border border-slate-100 p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] pointer-events-auto transition-[border-color,box-shadow] duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Tweet Header */}
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <img src="/zystra-logo.jpg" alt="Zystra Logo" className="w-7 h-7 rounded-full object-cover border border-slate-100" />
                  <div className="leading-tight">
                    <div className="text-[10px] font-bold text-slate-900 flex items-center gap-0.5">
                      Zystra Webtech
                      <span className="inline-block text-[#1d9bf0]">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-current">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                      </span>
                    </div>
                    <div className="text-[8px] text-slate-500 font-medium">@zystra_webtech</div>
                  </div>
                </div>
                {/* X Logo */}
                <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-slate-950 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>

              {/* Tweet Content */}
              <p className="text-[9px] text-slate-800 leading-normal font-sans font-medium mb-2">
                Creating digital activations that move culture. We build the future of web design. 💻🚀
              </p>

              {/* Tweet Image */}
              <div className="w-full h-[90px] sm:h-[110px] rounded-[10px] overflow-hidden border border-slate-100 mb-2">
                <img
                  src="/zystra-logo.jpg"
                  alt="Zystra Webtech Post Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Engagement Metrics */}
            <div className="border-t border-slate-100 pt-1.5 flex justify-between text-[8px] font-semibold text-slate-400">
              <span className="flex items-center gap-0.5 hover:text-sky-500 transition-colors">💬 24</span>
              <span className="flex items-center gap-0.5 hover:text-emerald-500 transition-colors">🔁 153</span>
              <span className="flex items-center gap-0.5 hover:text-rose-500 transition-colors">❤️ 842</span>
              <span className="flex items-center gap-0.5 hover:text-sky-500 transition-colors">📊 12K</span>
            </div>
          </motion.div>
        </div>

        {/* Text Captions Overlay pinned in center-top */}
        <div className="absolute top-24 sm:top-28 left-0 w-full text-center z-40 pointer-events-none px-6">
          <motion.div style={{ opacity: captionOpacity0 }} className="absolute w-full left-0">
            <h3 className="text-2xl md:text-3xl font-serif font-black text-slate-900 tracking-tight">LIVE ANALYTICS ENGINE</h3>
            <p className="text-slate-500 max-w-md mx-auto mt-2 text-sm leading-relaxed">
              Explore how we integrate brand strategy and interactive design to create high-conversion digital ecosystems.
            </p>
          </motion.div>

          <motion.div style={{ opacity: captionOpacity1 }} className="absolute w-full left-0">
            <h3 className="text-2xl md:text-3xl font-serif font-black text-slate-900 tracking-tight">01 / DYNAMIC SOCIAL FEED</h3>
            <p className="text-slate-500 max-w-md mx-auto mt-2 text-sm leading-relaxed">
              We design campaigns that stop scroll-fatigued feeds and demand complete attention across platforms.
            </p>
          </motion.div>

          <motion.div style={{ opacity: captionOpacity2 }} className="absolute w-full left-0">
            <h3 className="text-2xl md:text-3xl font-serif font-black text-slate-900 tracking-tight">02 / METRIC-DRIVEN ASSETS</h3>
            <p className="text-slate-500 max-w-md mx-auto mt-2 text-sm leading-relaxed">
              Every visual asset and branding detail is built to elevate business conversions and analytics.
            </p>
          </motion.div>

          <motion.div style={{ opacity: captionOpacity3 }} className="absolute w-full left-0">
            <h3 className="text-2xl md:text-3xl font-serif font-black text-slate-900 tracking-tight">03 / ORGANIC AUDIENCE REACH</h3>
            <p className="text-slate-500 max-w-md mx-auto mt-2 text-sm leading-relaxed">
              Scale traffic organic metrics directly with clean immersive UX that plays like a cinematic showcase.
            </p>
          </motion.div>

          <motion.div style={{ opacity: captionOpacity4 }} className="absolute w-full left-0">
            <h3 className="text-2xl md:text-3xl font-serif font-black text-slate-900 tracking-tight">04 / AMPLIFIED ENGAGEMENT</h3>
            <p className="text-slate-500 max-w-md mx-auto mt-2 text-sm leading-relaxed">
              Harness community building and viral structures to establish brand authority and conversion.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
