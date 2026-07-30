import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link } from "wouter";
import {
  Sparkles,
  ExternalLink,
  TrendingUp,
  Globe,
  Activity,
  HeartHandshake,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Leaf,
  Flower2,
  Sprout,
  Phone,
  Grid,
  Heart,
  Scissors,
  Sun,
  Home,
  Briefcase,
  GraduationCap,
  Wrench,
  PartyPopper,
  Plane,
  Terminal,
  UserCheck,
  Stethoscope,
  Pill,
  Zap,
  Building2,
  Utensils,
  ShieldAlert,
  Rocket,
  Lightbulb,
  BookOpen,
  Target,
  PenTool,
  Cloud,
  PieChart,
  Apple,
  ClipboardList,
  Thermometer,
  Syringe,
  Wind,
  Droplets,
  RefreshCw,
  Plug,
  BatteryCharging,
  Factory
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/shared/SEO";
import { Button } from "@/components/ui/button";

interface ClientItem {
  client: string;
  industry: string;
  whatWeDid: string;
  result: string;
  link?: string;
  icon?: any;
  coverImg?: string;
  logoImg?: string;
}

interface GenreSection {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  image?: string; // 3D image path e.g. '/portfolio/ayurveda.webp'
  badgeText: string;
  clients: ClientItem[];
}

function GenreOrbitCard({ genre, index, isLast }: { genre: GenreSection; index: number; isLast?: boolean }) {
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const selectedClient = genre.clients[selectedClientIndex] || genre.clients[0];
  const clientCount = genre.clients.length;
  const isEven = index % 2 === 0;

  // Direct DOM 120fps hardware accelerated animation loop (0% React re-render overhead, ultra fast & smooth!)
  useEffect(() => {
    let animId: number;
    const startTime = performance.now();

    const updateOrbit = (now: number) => {
      const elapsed = now - startTime;
      const angle = (elapsed * 0.015) % 360;

      const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
      const rx = isMobile ? 135 : 215;
      const ry = isMobile ? 45 : 70;

      const tiltAngle = (-22 * Math.PI) / 180;
      const cosA = Math.cos(tiltAngle);
      const sinA = Math.sin(tiltAngle);

      badgeRefs.current.forEach((el, idx) => {
        if (!el) return;
        const clientAngleDeg = (angle + (360 / clientCount) * idx) % 360;
        const rad = (clientAngleDeg * Math.PI) / 180;

        const x0 = rx * Math.cos(rad);
        const y0 = ry * Math.sin(rad);

        const x = x0 * cosA - y0 * sinA;
        const y = x0 * sinA + y0 * cosA;

        const depthFactor = Math.sin(rad);
        const isFront = depthFactor > 0;
        const isSelected = el.getAttribute("data-selected") === "true";

        const depthScale = isSelected ? 1.15 : 0.78 + 0.3 * ((depthFactor + 1) / 2);
        const depthOpacity = isSelected ? 1 : 0.45 + 0.55 * ((depthFactor + 1) / 2);
        const zIndex = isSelected ? 40 : isFront ? 25 : 5;

        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0px) scale(${depthScale.toFixed(2)})`;
        el.style.opacity = `${depthOpacity.toFixed(2)}`;
        el.style.zIndex = `${zIndex}`;
      });

      animId = requestAnimationFrame(updateOrbit);
    };

    animId = requestAnimationFrame(updateOrbit);
    return () => cancelAnimationFrame(animId);
  }, [clientCount]);

  return (
    <div className="relative w-full py-8 sm:py-12 mb-16">
      {/* Genre Header - Custom Botanical Emblem for Ayurveda */}
      <div className={`relative z-10 mb-2 pt-4 flex w-full ${isEven ? "justify-start text-left" : "justify-end text-right"}`}>
        {genre.id === "ayurveda" || genre.title.toLowerCase().includes("ayurveda") ? (
          <div className="relative inline-flex flex-col items-center justify-center p-4 sm:p-6 select-none my-2">
            {/* Zystra Royal Purple Ambient Glow Circle */}
            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-purple-600/20 rounded-full blur-2xl pointer-events-none -z-10" />
            <div className="absolute w-44 h-44 sm:w-60 sm:h-60 bg-purple-950/40 rounded-full border border-purple-500/30 pointer-events-none -z-10 backdrop-blur-sm" />

            {/* Top Botanical Leaf/Flower Arc in Zystra Lavender/Purple Accents */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 mb-1.5 text-purple-300">
              <Leaf className="w-4 h-4 sm:w-5 sm:h-5 -rotate-45 text-purple-400" />
              <Flower2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" />
              <Sprout className="w-5 h-5 sm:w-6 sm:h-6 text-purple-200" />
              <Flower2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" />
              <Leaf className="w-4 h-4 sm:w-5 sm:h-5 rotate-45 text-purple-400" />
            </div>

            {/* Top Zystra Purple Divider Line */}
            <div className="w-36 sm:w-48 h-[1.5px] bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-1.5 opacity-90" />

            {/* Main Title Text in Zystra Gradient */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300 uppercase tracking-[0.2em] sm:tracking-[0.28em] text-center drop-shadow-md py-0.5">
              AYURVEDA
            </h2>

            {/* Bottom Zystra Purple Divider Line */}
            <div className="w-36 sm:w-48 h-[1.5px] bg-gradient-to-r from-transparent via-purple-400 to-transparent mt-1.5 opacity-90" />

            {/* Bottom Botanical Leaf/Flower Arc in Zystra Lavender/Purple Accents */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 mt-1.5 text-purple-300">
              <Leaf className="w-4 h-4 sm:w-5 sm:h-5 rotate-135 text-purple-400" />
              <Flower2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" />
              <Sprout className="w-5 h-5 sm:w-6 sm:h-6 text-purple-200 rotate-180" />
              <Flower2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" />
              <Leaf className="w-4 h-4 sm:w-5 sm:h-5 -rotate-135 text-purple-400" />
            </div>
          </div>
        ) : genre.id === "beauty" || genre.title.toLowerCase().includes("beauty") ? (
          <div className="relative inline-flex flex-col items-center justify-center py-3 px-6 sm:px-8 select-none my-2">
            {/* Subtle Purple Ambient Glow */}
            <div className="absolute w-72 h-32 bg-purple-600/20 rounded-full blur-2xl pointer-events-none -z-10" />

            {/* Main Emblem Row: BEAUTY [Scissors Icon] SALON */}
            <div className="flex items-center gap-4 sm:gap-6 mb-2">
              {/* LEFT: BEAUTY */}
              <span className="text-xl sm:text-3xl md:text-4xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300 tracking-[0.3em] uppercase">
                BEAUTY
              </span>

              {/* Center: Scissors Icon */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-purple-600/20 blur-lg pointer-events-none" />
                <Scissors className="w-8 h-8 sm:w-12 sm:h-12 text-purple-300 relative z-10 drop-shadow-lg" strokeWidth={1.4} />
              </div>

              {/* RIGHT: SALON */}
              <span className="text-xl sm:text-3xl md:text-4xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-100 to-white tracking-[0.3em] uppercase">
                SALON
              </span>
            </div>

            {/* Divider Line */}
            <div className="w-48 sm:w-[320px] h-[1.5px] bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>
        ) : genre.id === "medical" || genre.title.toLowerCase().includes("medical") ? (
          <div className="relative inline-flex flex-col items-center justify-center py-5 px-6 sm:px-10 select-none my-2 max-w-xs sm:max-w-md w-full rounded-2xl border border-purple-500/30 bg-purple-950/40 backdrop-blur-md shadow-xl overflow-hidden group">
            {/* Zystra Royal Purple Ambient Glow Backdrop */}
            <div className="absolute w-64 h-32 bg-purple-600/25 rounded-full blur-2xl pointer-events-none -z-10 animate-pulse" />

            {/* FLOATING 3D MEDICAL ICONS */}
            <motion.div
              animate={{ y: [-3, 3, -3], rotate: [-20, -12, -20] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 left-4 p-2 rounded-xl bg-purple-900/80 border border-purple-400/50 text-purple-200 shadow-md backdrop-blur-md z-20"
            >
              <ClipboardList className="w-5 h-5 text-purple-300" strokeWidth={1.8} />
            </motion.div>

            <motion.div
              animate={{ y: [-4, 4, -4], rotate: [15, 6, 15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 right-4 p-2 rounded-xl bg-purple-900/80 border border-purple-400/50 text-purple-200 shadow-md backdrop-blur-md z-20"
            >
              <Stethoscope className="w-5 h-5 text-purple-300" strokeWidth={1.6} />
            </motion.div>

            {/* MAIN TRACKED WHITE TITLE WITH THERMOMETER INTEGRATED AS "I" */}
            <div className="relative z-10 py-1.5 px-3 flex items-center justify-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-sans font-black text-white uppercase tracking-[0.2em] sm:tracking-[0.25em] text-center drop-shadow-[0_6px_16px_rgba(168,85,247,0.4)] flex items-center justify-center">
                <span>MED</span>
                <span className="relative inline-flex items-center justify-center mx-0.5">
                  <Thermometer className="w-5 h-7 sm:w-8 sm:h-10 text-purple-300 animate-pulse drop-shadow-md" strokeWidth={2.2} />
                </span>
                <span>CINE</span>
              </h2>
            </div>
          </div>
        ) : genre.id === "international" || genre.title.toLowerCase().includes("international") ? (
          <div className="relative inline-flex flex-col items-center justify-center select-none my-2 max-w-xs sm:max-w-md w-full group">
            {/* Zystra Purple Ambient Glow */}
            <div className="absolute w-60 h-60 bg-purple-600/25 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />

            {/* International Clients Vector Title UI (Exact 1:1 Replica matching reference image) */}
            <svg 
              className="w-full h-auto max-h-[120px] sm:max-h-[150px] select-none" 
              viewBox="0 0 720 320" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <style>
                  {`@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Plus+Jakarta+Sans:wght@900&display=swap');`}
                </style>

                {/* Vertical Gradient for "Clients" matching reference image */}
                <linearGradient id="clientsVerticalGradient" x1="0" y1="120" x2="0" y2="230" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#e9d5ff" />
                  <stop offset="35%" stopColor="#c084fc" />
                  <stop offset="70%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#6b21a8" />
                </linearGradient>

                {/* Trail Line Gradient */}
                <linearGradient id="trailLineGradient" x1="20" y1="285" x2="680" y2="285" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#e9d5ff" />
                </linearGradient>
              </defs>

              {/* --- 1. BRUSH SCRIPT TEXT: "International" --- */}
              <text 
                x="30" 
                y="105" 
                fontSize="82" 
                fontFamily="'Kaushan Script', 'Brush Script MT', cursive" 
                fill="#ffffff" 
                transform="rotate(-2 30 105)"
                style={{ filter: "drop-shadow(0 4px 14px rgba(255, 255, 255, 0.45))" }}
              >
                International
              </text>

              {/* --- 2. BOLD SANS TEXT: "Clients" --- */}
              <text 
                x="25" 
                y="225" 
                fontSize="125" 
                fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" 
                fontWeight="900" 
                letterSpacing="-1" 
                fill="url(#clientsVerticalGradient)" 
                stroke="#0d071b" 
                strokeWidth="5" 
                strokeLinejoin="round" 
                style={{ paintOrder: "stroke fill", filter: "drop-shadow(0 12px 28px rgba(126, 34, 206, 0.85))" }}
              >
                Clients
              </text>

              {/* --- 3. FLIGHT TRAIL & AIRPLANE SILHOUETTE --- */}
              <g>
                {/* Solid Line under "Clie" */}
                <line 
                  x1="25" 
                  y1="285" 
                  x2="350" 
                  y2="285" 
                  stroke="url(#trailLineGradient)" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                />

                {/* Curved Dashed Flight Trail under "nts" curving up */}
                <path 
                  d="M 350,285 Q 520,285 645,245" 
                  stroke="url(#trailLineGradient)" 
                  strokeWidth="3.5" 
                  strokeDasharray="9 6" 
                  fill="none" 
                  strokeLinecap="round"
                />

                {/* Purple Airplane Icon ✈ */}
                <g transform="translate(660, 230) rotate(-22)">
                  <path 
                    d="M 0,0 L 26,-10 L 36,-4 L 18,4 L 30,16 L 22,18 L 10,8 L -4,14 L -8,10 Z" 
                    fill="#a855f7" 
                    stroke="#e9d5ff" 
                    strokeWidth="1.5"
                    style={{ filter: "drop-shadow(0 4px 12px rgba(168, 85, 247, 0.9))" }}
                  />
                </g>
              </g>
            </svg>
          </div>
        ) : genre.id === "education" || genre.title.toLowerCase().includes("education") ? (
          <div className="relative inline-flex flex-col items-center justify-center py-3 px-5 select-none my-2 max-w-xs sm:max-w-md w-full rounded-2xl border border-purple-500/40 bg-purple-950/40 backdrop-blur-md shadow-xl overflow-hidden group">
            {/* Graph Paper / Grid Overlay Backdrop */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f718_1px,transparent_1px),linear-gradient(to_bottom,#a855f718_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none -z-10" />
            
            {/* Ambient Purple Glow */}
            <div className="absolute w-full h-full bg-purple-600/10 rounded-full blur-2xl pointer-events-none -z-10" />

            {/* CENTER: HATCHED "EDTECH" TEXT */}
            <div className="relative py-1 px-2 flex flex-col items-center justify-center">
              <h3 
                className="text-2xl sm:text-4xl font-sans font-black tracking-[0.14em] uppercase text-center select-none"
                style={{
                  WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.95)",
                  color: "transparent",
                  backgroundImage: "repeating-linear-gradient(-45deg, #c084fc, #c084fc 2.5px, transparent 2.5px, transparent 7px)",
                  WebkitBackgroundClip: "text",
                  filter: "drop-shadow(0 4px 8px rgba(147, 51, 234, 0.35))"
                }}
              >
                EDTECH
              </h3>
            </div>
          </div>
        ) : genre.id === "lifestyle" || genre.id === "travel" || genre.id === "food" || genre.title.toLowerCase().includes("food") || genre.title.toLowerCase().includes("travel") || genre.title.toLowerCase().includes("lifestyle") ? (
          <div className="relative inline-flex flex-col items-center justify-center select-none my-2 max-w-xs sm:max-w-md w-full group">
            {/* Zystra Purple Ambient Glow */}
            <div className="absolute w-52 h-52 bg-purple-600/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />

            {/* Pop-Art Comic Cloud Burst "LIFESTYLE" Title UI */}
            <svg 
              className="w-full h-auto max-h-[110px] sm:max-h-[145px] select-none" 
              viewBox="0 0 700 420" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Halftone Dot Pattern for Pop-Art Shadow */}
                <pattern id="halftoneDots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                  <circle cx="6" cy="6" r="2.5" fill="#7e22ce" />
                </pattern>

                {/* Text Gradient */}
                <linearGradient id="lifestyleTextGradient" x1="150" y1="210" x2="550" y2="210" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#7e22ce" />
                  <stop offset="50%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>

              {/* --- 1. COMIC RADIAL SUNBURST BACKGROUND RAYS --- */}
              <g stroke="none">
                {/* Background Base */}
                <rect width="700" height="420" rx="24" fill="#0d071b" />

                {/* Sunburst Beams (Radiating from Center 350, 210) */}
                <polygon points="350,210 -100,-100 100,-100" fill="#2e1065" />
                <polygon points="350,210 200,-100 350,-100" fill="#581c87" />
                <polygon points="350,210 450,-100 600,-100" fill="#2e1065" />
                <polygon points="350,210 700,-100 800,0" fill="#581c87" />
                <polygon points="350,210 800,80 800,200" fill="#2e1065" />
                <polygon points="350,210 800,280 800,400" fill="#581c87" />
                <polygon points="350,210 700,520 550,520" fill="#2e1065" />
                <polygon points="350,210 400,520 250,520" fill="#581c87" />
                <polygon points="350,210 100,520 -50,520" fill="#2e1065" />
                <polygon points="350,210 -100,400 -100,260" fill="#581c87" />
                <polygon points="350,210 -100,160 -100,20" fill="#2e1065" />

                {/* Radial Overlay Texture */}
                <rect width="700" height="420" rx="24" fill="url(#halftoneDots)" opacity="0.15" />
              </g>

              {/* --- 2. FLOATING POP-ART DOODLES & EXCLAMATION MARKS --- */}

              {/* Top-Right Exclamation Mark ! with Halftone Shadow */}
              <g transform="translate(570, 45) rotate(18)">
                {/* Shadow */}
                <path d="M 16,10 L 32,10 L 26,62 L 14,62 Z M 15,72 L 27,72 L 27,84 L 15,84 Z" fill="url(#halftoneDots)" />
                {/* Main Exclamation Body */}
                <path d="M 10,4 L 28,4 L 22,56 L 10,56 Z" fill="#c084fc" stroke="#0d071b" strokeWidth="3" />
                <rect x="11" y="66" width="12" height="12" rx="2" fill="#c084fc" stroke="#0d071b" strokeWidth="3" />
              </g>

              {/* Bottom-Left Exclamation Badge ! */}
              <g transform="translate(60, 315) rotate(-28)">
                {/* Shadow */}
                <rect x="6" y="6" width="56" height="24" rx="12" fill="#7e22ce" />
                <circle cx="70" cy="20" r="8" fill="#7e22ce" />
                {/* Main Badge */}
                <rect x="0" y="0" width="56" height="24" rx="12" fill="#ffffff" stroke="#0d071b" strokeWidth="3" />
                <text x="28" y="18" textAnchor="middle" fontSize="18" fontWeight="900" fill="#0d071b">!</text>
                <circle cx="64" cy="14" r="7" fill="#ffffff" stroke="#0d071b" strokeWidth="3" />
              </g>

              {/* Floating Speech Dots */}
              {/* Top Left Circle */}
              <circle cx="210" cy="60" r="18" fill="#ffffff" stroke="#0d071b" strokeWidth="4" />
              <circle cx="204" cy="66" r="18" fill="#7e22ce" opacity="0.4" />
              {/* Bottom Right Circle */}
              <circle cx="530" cy="330" r="16" fill="#ffffff" stroke="#0d071b" strokeWidth="4" />

              {/* --- 3. POP-ART CLOUD SPEECH BUBBLE --- */}

              {/* Cloud Halftone Drop Shadow (Offsetted Bottom Left) */}
              <path 
                d="M 180,160 
                   C 135,130 90,185 85,240 
                   C 75,295 115,355 180,360 
                   C 230,365 310,355 360,325 
                   C 410,355 490,355 535,305 
                   C 575,255 565,195 515,160 
                   C 475,120 405,130 365,150 
                   C 325,120 225,125 180,160 Z" 
                fill="#7e22ce" 
                transform="translate(-10, 12)" 
              />
              <path 
                d="M 180,160 
                   C 135,130 90,185 85,240 
                   C 75,295 115,355 180,360 
                   C 230,365 310,355 360,325 
                   C 410,355 490,355 535,305 
                   C 575,255 565,195 515,160 
                   C 475,120 405,130 365,150 
                   C 325,120 225,125 180,160 Z" 
                fill="url(#halftoneDots)" 
                transform="translate(-16, 18)" 
              />

              {/* Main White Cloud Speech Bubble Body */}
              <path 
                d="M 180,150 
                   C 135,120 90,175 85,230 
                   C 75,285 115,345 180,350 
                   C 230,355 310,345 360,315 
                   C 410,345 490,345 535,295 
                   C 575,245 565,185 515,150 
                   C 475,110 405,120 365,140 
                   C 325,110 225,115 180,150 Z" 
                fill="#ffffff" 
                stroke="#0d071b" 
                strokeWidth="6" 
                strokeLinejoin="round" 
              />

              {/* Inner Cloud Outline Accent */}
              <path 
                d="M 190,165 C 150,140 105,190 100,235 C 95,280 130,330 185,335" 
                stroke="#0d071b" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                fill="none" 
                opacity="0.3"
              />

              {/* --- 4. CENTERPIECE TITLE TEXT: LIFESTYLE --- */}
              <text 
                x="345" 
                y="255" 
                textAnchor="middle" 
                fontSize="62" 
                fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
                fontWeight="900" 
                letterSpacing="4" 
                fill="url(#lifestyleTextGradient)" 
                stroke="#0d071b" 
                strokeWidth="4" 
                strokeLinejoin="round" 
                style={{ paintOrder: "stroke fill", filter: "drop-shadow(0 6px 12px rgba(126, 34, 206, 0.4))" }}
              >
                LIFESTYLE
              </text>
            </svg>
          </div>
        ) : genre.id === "industry" || genre.title.toLowerCase().includes("industry") || genre.title.toLowerCase().includes("industrial") || genre.title.toLowerCase().includes("manufacturing") ? (
          <div className="relative inline-flex flex-col items-center justify-center select-none my-2 max-w-md sm:max-w-xl w-full group">
            {/* Zystra Purple Ambient Glow */}
            <div className="absolute w-60 h-60 bg-purple-600/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />

            {/* Industrial Line Art Vector Title UI (Exact 1:1 Replica in Zystra Theme) */}
            <svg 
              className="w-full h-auto max-h-[160px] sm:max-h-[200px] select-none" 
              viewBox="0 0 950 420" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Dark Zystra Canvas Base */}
              <rect width="950" height="420" rx="24" fill="#0d071b" stroke="#7e22ce" strokeWidth="2.5" />

              {/* --- TOP DOODLE ROW (Clean Line-Art Industrial Icons) --- */}
              <g stroke="#c084fc" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
                
                {/* 1. CPU Microchip (Top Left) */}
                <g transform="translate(65, 65)">
                  <rect x="-24" y="-24" width="48" height="48" rx="6" fill="#13092b" />
                  <rect x="-14" y="-14" width="28" height="28" rx="3" stroke="#e9d5ff" />
                  {/* Pin Legs */}
                  <path d="M -18,-24 L -18,-32 M -6,-24 L -6,-32 M 6,-24 L 6,-32 M 18,-24 L 18,-32" />
                  <path d="M -18,24 L -18,32 M -6,24 L -6,32 M 6,24 L 6,32 M 18,24 L 18,32" />
                  <path d="M -24,-18 L -32,-18 M -24,-6 L -32,-6 M -24,6 L -32,6 M -24,18 L -32,18" />
                  <path d="M 24,-18 L 32,-18 M 24,-6 L 32,-6 M 24,6 L 32,6 M 24,18 L 32,18" />
                </g>

                {/* 2. Recycle Gear Arrows (Top Left-Center) */}
                <g transform="translate(200, 65)">
                  <path d="M 0,0 C -22,-10 -22,-30 0,-30 C 18,-30 25,-12 18,0 L 22,-6 M 18,0 L 12,-6" stroke="#e9d5ff" />
                  <path d="M 0,0 C 22,10 22,30 0,30 C -18,30 -25,12 -18,0 L -22,6 M -18,0 L -12,6" stroke="#e9d5ff" />
                  <circle cx="0" cy="0" r="10" stroke="#a855f7" />
                </g>

                {/* 3. Warehouse Stacked Boxes (Top Center-Left) */}
                <g transform="translate(325, 65)">
                  <rect x="-24" y="0" width="48" height="20" fill="#13092b" stroke="#e9d5ff" />
                  <rect x="-24" y="-20" width="22" height="18" fill="#13092b" stroke="#c084fc" />
                  <rect x="2" y="-20" width="22" height="18" fill="#13092b" stroke="#c084fc" />
                  <rect x="-11" y="-38" width="22" height="16" fill="#13092b" stroke="#a855f7" />
                </g>

                {/* 4. User Profile & Resume (Top Center) */}
                <g transform="translate(470, 65)">
                  <rect x="-20" y="-30" width="40" height="60" rx="4" fill="#13092b" stroke="#e9d5ff" />
                  <circle cx="-6" cy="-15" r="6" stroke="#a855f7" />
                  <path d="M -14,0 C -14,-6 -2,-6 -2,0" stroke="#a855f7" />
                  <line x1="5" y1="-18" x2="14" y2="-18" stroke="#c084fc" />
                  <line x1="5" y1="-12" x2="14" y2="-12" stroke="#c084fc" />
                  <line x1="-12" y1="10" x2="12" y2="10" stroke="#c084fc" />
                  <line x1="-12" y1="18" x2="12" y2="18" stroke="#c084fc" />
                </g>

                {/* 5. Dollar Lightbulb Innovation (Top Center-Right) */}
                <g transform="translate(615, 65)">
                  <path d="M -16,-10 C -24,-30 24,-30 16,-10 C 10,0 8,10 -8,10 Z" fill="#13092b" stroke="#c084fc" />
                  <rect x="-8" y="10" width="16" height="8" fill="#13092b" stroke="#c084fc" />
                  <text x="0" y="-5" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#e9d5ff" stroke="none">$</text>
                </g>

                {/* 6. Sales Funnel & Coin (Top Right) */}
                <g transform="translate(740, 65)">
                  <polygon points="-18,-25 18,-25 6,0 -6,0" fill="#13092b" stroke="#e9d5ff" />
                  <rect x="-3" y="0" width="6" height="12" stroke="#e9d5ff" />
                  <circle cx="0" cy="22" r="8" stroke="#a855f7" />
                  <text x="0" y="26" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#a855f7" stroke="none">$</text>
                </g>

                {/* 7. Cargo Delivery Truck (Top Far-Right) */}
                <g transform="translate(860, 65)">
                  <rect x="-30" y="-20" width="40" height="30" rx="3" fill="#13092b" stroke="#c084fc" />
                  <path d="M 10,-5 L 24,-5 L 30,10 L 10,10 Z" fill="#13092b" stroke="#c084fc" />
                  <circle cx="-16" cy="14" r="6" fill="#0d071b" stroke="#e9d5ff" />
                  <circle cx="18" cy="14" r="6" fill="#0d071b" stroke="#e9d5ff" />
                </g>
              </g>

              {/* --- CENTERPIECE TITLE TEXT: INDUSTRY --- */}
              <g textAnchor="middle" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="900">
                <text 
                  x="475" 
                  y="235" 
                  fontSize="96" 
                  letterSpacing="8" 
                  fill="#ffffff" 
                  stroke="#3b0764" 
                  strokeWidth="8" 
                  strokeLinejoin="round" 
                  style={{ paintOrder: "stroke fill", filter: "drop-shadow(0 6px 20px rgba(168, 85, 247, 0.7))" }}
                >
                  INDUSTRY
                </text>
              </g>

              {/* --- BOTTOM DOODLE ROW (Industrial Manufacturing & Logistics Icons) --- */}
              <g stroke="#c084fc" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
                
                {/* 1. Conveyor Belt Line (Bottom Left) */}
                <g transform="translate(85, 345)">
                  <rect x="-35" y="-5" width="70" height="14" rx="7" fill="#13092b" stroke="#e9d5ff" />
                  <circle cx="-25" cy="2" r="3" fill="#e9d5ff" stroke="none" />
                  <circle cx="-10" cy="2" r="3" fill="#e9d5ff" stroke="none" />
                  <circle cx="5" cy="2" r="3" fill="#e9d5ff" stroke="none" />
                  <circle cx="20" cy="2" r="3" fill="#e9d5ff" stroke="none" />
                  {/* Boxes on belt */}
                  <rect x="-28" y="-22" width="16" height="15" fill="#13092b" stroke="#c084fc" />
                  <rect x="5" y="-22" width="16" height="15" fill="#13092b" stroke="#c084fc" />
                </g>

                {/* 2. Cargo Container Ship (Bottom Left-Center) */}
                <g transform="translate(245, 345)">
                  <path d="M -40,5 L -30,-15 L 35,-15 L 45,5 C 30,15 -20,15 -40,5 Z" fill="#13092b" stroke="#e9d5ff" />
                  {/* Stacked Containers */}
                  <rect x="-25" y="-28" width="14" height="12" stroke="#c084fc" />
                  <rect x="-8" y="-28" width="14" height="12" stroke="#c084fc" />
                  <rect x="9" y="-28" width="14" height="12" stroke="#c084fc" />
                  {/* Sea Waves */}
                  <path d="M -45,18 C -30,12 -15,22 0,18 C 15,14 30,22 45,18" stroke="#a855f7" />
                </g>

                {/* 3. Robotic Automation Arm (Bottom Center) */}
                <g transform="translate(415, 340)">
                  <rect x="-20" y="20" width="40" height="8" rx="2" stroke="#e9d5ff" />
                  <circle cx="-5" cy="10" r="5" stroke="#a855f7" />
                  <path d="M -5,10 L 15,-20" stroke="#e9d5ff" strokeWidth="3" />
                  <circle cx="15" cy="-20" r="5" stroke="#a855f7" />
                  <path d="M 15,-20 L -5,-35" stroke="#e9d5ff" strokeWidth="3" />
                  {/* Claw */}
                  <path d="M -12,-35 L -5,-35 M -12,-42 L -12,-28" stroke="#c084fc" strokeWidth="2.5" />
                </g>

                {/* 4. Factory Plant Towers (Bottom Center-Right) */}
                <g transform="translate(570, 340)">
                  <path d="M -25,25 L -18,-20 L 0,-20 L 5,25 Z" fill="#13092b" stroke="#e9d5ff" />
                  <path d="M 8,25 L 12,-10 L 28,-10 L 32,25 Z" fill="#13092b" stroke="#e9d5ff" />
                  <path d="M -18,-20 C -25,-30 -10,-35 0,-28" stroke="#a855f7" />
                </g>

                {/* 5. Production Cycle Clock (Bottom Right) */}
                <g transform="translate(720, 340)">
                  <circle cx="0" cy="-10" r="16" stroke="#e9d5ff" />
                  <path d="M 0,-10 L 0,-18 M 0,-10 L 6,-10" stroke="#e9d5ff" />
                  <path d="M -18,10 C -5,22 18,22 20,10" stroke="#a855f7" />
                  <path d="M 20,10 L 15,14 M 20,10 L 24,16" stroke="#a855f7" />
                </g>

                {/* 6. Industrial Control Terminal Laptop (Bottom Far-Right) */}
                <g transform="translate(865, 340)">
                  <rect x="-24" y="-22" width="48" height="30" rx="3" fill="#13092b" stroke="#e9d5ff" />
                  <path d="M -30,12 L 30,12 L 24,18 L -24,18 Z" fill="#13092b" stroke="#e9d5ff" />
                  <circle cx="0" cy="-6" r="6" stroke="#a855f7" />
                </g>
              </g>

            </svg>
          </div>
        ) : genre.id === "home" || genre.id === "home-services" || (genre.title.toLowerCase().includes("home") && !genre.title.toLowerCase().includes("interior")) ? (
          <div className="relative inline-flex flex-col items-center justify-center select-none my-2 max-w-md sm:max-w-xl w-full group">
            {/* Zystra Purple Ambient Glow */}
            <div className="absolute w-60 h-60 bg-purple-600/25 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />

            {/* Home Services Vector UI Card (Zystra Brand Colors) */}
            <svg 
              className="w-full h-auto max-h-[160px] sm:max-h-[200px] select-none" 
              viewBox="0 0 600 360" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Roof Zystra Purple Gradient */}
                <linearGradient id="homeRoofGradientLeft" x1="60" y1="140" x2="300" y2="40" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#7e22ce" />
                  <stop offset="100%" stopColor="#9333ea" />
                </linearGradient>
                <linearGradient id="homeRoofGradientRight" x1="300" y1="40" x2="540" y2="140" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>

                {/* Wave Swoosh Purple Gradient */}
                <linearGradient id="homeWaveSwooshGradient" x1="70" y1="320" x2="530" y2="280" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#7e22ce" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>

              {/* --- ROOF GRAPHIC WITH HAMMER CHIMNEY --- */}

              {/* 1. Main Outer 3D Roof Gable Peak */}
              <path d="M 60,135 L 290,32 L 290,52 L 92,142 Z" fill="url(#homeRoofGradientLeft)" />
              <path d="M 290,32 L 540,135 L 508,142 L 290,52 Z" fill="url(#homeRoofGradientRight)" />

              {/* 2. Chimney with Hammer on Top (Left side of roof peak) */}
              <rect x="135" y="65" width="22" height="42" fill="#9333ea" rx="1" />
              
              <g fill="#9333ea">
                <rect x="142" y="55" width="8" height="15" rx="1" />
                <rect x="110" y="44" width="48" height="13" rx="2" fill="#c084fc" />
                <rect x="155" y="42" width="8" height="17" rx="1" fill="#a855f7" />
                <path d="M 112,44 C 95,47 98,62 114,60 L 114,54 C 104,54 103,47 112,44 Z" fill="#c084fc" />
              </g>

              {/* 3. Inner Arched Roof Line */}
              <path d="M 140,142 Q 290,75 440,142" stroke="#e9d5ff" strokeWidth="4.5" strokeLinecap="round" fill="none" />

              {/* 4. Arched 4-Pane Window under the Peak */}
              <g stroke="#e9d5ff" strokeWidth="2.5" fill="none">
                <path d="M 276,118 L 276,104 C 276,94 304,94 304,104 L 304,118 Z" fill="#0d071b" />
                <line x1="290" y1="96" x2="290" y2="118" />
                <line x1="276" y1="107" x2="304" y2="107" />
              </g>

              {/* --- TITLE TEXT: HOME SERVICES --- */}

              {/* Line 1: HOME */}
              <text 
                x="290" 
                y="218" 
                textAnchor="middle" 
                fontSize="68" 
                fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
                fontWeight="900" 
                letterSpacing="10" 
                fill="#ffffff" 
                style={{ filter: "drop-shadow(0 4px 14px rgba(168, 85, 247, 0.6))" }}
              >
                HOME
              </text>

              {/* Line 2: SERVICES */}
              <text 
                x="290" 
                y="262" 
                textAnchor="middle" 
                fontSize="28" 
                fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
                fontWeight="700" 
                letterSpacing="16" 
                fill="#c084fc"
              >
                SERVICES
              </text>

              {/* --- BOTTOM CURVED WAVE SWOOSH --- */}
              <path 
                d="M 70,325 C 170,265 310,325 530,265 C 410,335 240,335 70,325 Z" 
                fill="url(#homeWaveSwooshGradient)" 
                style={{ filter: "drop-shadow(0 4px 12px rgba(168, 85, 247, 0.5))" }}
              />
            </svg>
          </div>
        ) : genre.id === "interior" || genre.id === "architecture" || genre.title.toLowerCase().includes("interior") || genre.title.toLowerCase().includes("architecture") || genre.title.toLowerCase().includes("decor") ? (
          <div className="relative inline-flex flex-col items-center justify-center select-none my-2 max-w-lg sm:max-w-2xl w-full group">
            {/* Zystra Purple Ambient Glow */}
            <div className="absolute w-72 h-72 bg-purple-600/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />

            {/* Architecture & Interior Design Title UI (Exact 1:1 replica matching reference drawing in Zystra Theme) */}
            <svg 
              className="w-full h-auto max-h-[170px] sm:max-h-[220px] select-none" 
              viewBox="0 0 950 360" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Text Gradient */}
                <linearGradient id="archTextGradient" x1="50" y1="200" x2="900" y2="200" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#e9d5ff" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>

                {/* Soft Organic Backdrop Fill */}
                <linearGradient id="blobBgGradient" x1="0" y1="0" x2="950" y2="360" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1a0b2e" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0d071b" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* --- 1. ORGANIC BACKDROP BLOB CONTAINER & BOTANICAL LEAVES --- */}
              <g stroke="none">
                {/* Organic Backdrop Blob */}
                <path 
                  d="M 120,160 Q 250,50 475,65 Q 700,50 830,160 Q 900,240 760,295 Q 475,325 190,295 Q 50,240 120,160 Z" 
                  fill="url(#blobBgGradient)" 
                  stroke="#7e22ce" 
                  strokeWidth="2.5"
                  strokeDasharray="8 4"
                />

                {/* Left Botanical Leaves */}
                <g fill="#34d399" opacity="0.85">
                  <path d="M 20,200 C 50,150 110,180 80,220 C 50,240 10,220 20,200 Z" />
                  <path d="M 10,240 C 40,200 90,240 60,270 C 30,285 0,265 10,240 Z" />
                </g>

                {/* Right Botanical Leaves */}
                <g fill="#34d399" opacity="0.85">
                  <path d="M 930,200 C 900,150 840,180 870,220 C 900,240 940,220 930,200 Z" />
                  <path d="M 940,240 C 910,200 860,240 890,270 C 920,285 950,265 940,240 Z" />
                </g>
              </g>

              {/* --- 2. ARCHITECTURAL DRAFTING TOOLS (Top Row & Background Doodles) --- */}

              {/* Top Left: Set-Square Triangle Ruler (📐) */}
              <g transform="translate(100, 40) rotate(-18)" stroke="#c084fc" strokeWidth="2.5" fill="none">
                <polygon points="0,70 70,0 70,70" fill="#2e1065" />
                <polygon points="18,56 54,20 54,56" fill="#0d071b" />
                <line x1="70" y1="15" x2="62" y2="15" strokeWidth="2" />
                <line x1="70" y1="30" x2="60" y2="30" strokeWidth="2" />
                <line x1="70" y1="45" x2="62" y2="45" strokeWidth="2" />
              </g>

              {/* Top Left: Gear Wheel (⚙️) */}
              <g transform="translate(260, 55)" fill="#9333ea" stroke="#c084fc" strokeWidth="2">
                <circle cx="0" cy="0" r="22" />
                <circle cx="0" cy="0" r="10" fill="#0d071b" />
                <path d="M 0,-26 L 0,-20 M 0,20 L 0,26 M -26,0 L -20,0 M 20,0 L 26,0 M -18,-18 L -14,-14 M 14,14 L 18,18 M -18,18 L -14,14 M 14,-14 L 18,-18" strokeWidth="3.5" />
              </g>

              {/* Top Center: Drafting Compass Divider */}
              <g transform="translate(420, 15)" stroke="#c084fc" strokeWidth="3" fill="none">
                {/* Knob */}
                <circle cx="20" cy="8" r="5" fill="#a855f7" />
                <line x1="20" y1="13" x2="20" y2="24" strokeWidth="3.5" />
                {/* Left Leg */}
                <path d="M 20,24 L -5,95" strokeWidth="3" />
                <circle cx="-5" cy="95" r="2" fill="#c084fc" />
                {/* Right Leg */}
                <path d="M 20,24 L 45,95" strokeWidth="3" />
                <path d="M 45,95 L 48,105" stroke="#fbbf24" strokeWidth="2.5" />
                {/* Horizontal Span Screw */}
                <line x1="5" y1="60" x2="35" y2="60" strokeWidth="2" />
                <circle cx="20" cy="60" r="4" fill="#a855f7" />
              </g>

              {/* Top Center-Right: Rolled Blueprint Roll */}
              <g transform="translate(490, 40) rotate(-12)" stroke="#c084fc" strokeWidth="2" fill="#2e1065">
                <rect x="0" y="0" width="75" height="32" rx="4" />
                <ellipse cx="75" cy="16" rx="6" ry="16" fill="#a855f7" />
                <ellipse cx="0" cy="16" rx="6" ry="16" fill="#2e1065" />
                <line x1="15" y1="0" x2="15" y2="32" strokeDasharray="3 2" />
                <line x1="40" y1="0" x2="40" y2="32" strokeDasharray="3 2" />
              </g>

              {/* Top Right: Semi-Circle Protractor Scale (📐) */}
              <g transform="translate(630, 45)" stroke="#c084fc" strokeWidth="2.5" fill="#2e1065">
                <path d="M -35,30 A 35,35 0 0,1 35,30 Z" />
                <path d="M -18,30 A 18,18 0 0,1 18,30 Z" fill="#0d071b" />
                <line x1="-35" y1="30" x2="35" y2="30" strokeWidth="3" />
                <line x1="0" y1="0" x2="0" y2="6" strokeWidth="2" />
                <line x1="-22" y1="10" x2="-18" y2="14" strokeWidth="2" />
                <line x1="22" y1="10" x2="18" y2="14" strokeWidth="2" />
              </g>

              {/* Top Far-Right: Magnifying Glass (🔍) */}
              <g transform="translate(800, 70) rotate(35)" stroke="#c084fc" strokeWidth="3" fill="none">
                <circle cx="0" cy="0" r="22" fill="#2e1065" />
                <circle cx="0" cy="0" r="15" stroke="#e9d5ff" strokeWidth="1.5" />
                <rect x="-4" y="22" width="8" height="35" rx="3" fill="#a855f7" stroke="#c084fc" strokeWidth="2" />
              </g>

              {/* --- 3. CENTERPIECE TITLE TEXT: ARCHITECTURE & DESIGN --- */}
              <g textAnchor="middle" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="900">
                <text 
                  x="475" 
                  y="200" 
                  fontSize="66" 
                  letterSpacing="4" 
                  fill="url(#archTextGradient)" 
                  stroke="#1e0b36" 
                  strokeWidth="7" 
                  strokeLinejoin="round" 
                  style={{ paintOrder: "stroke fill", filter: "drop-shadow(0 6px 18px rgba(126, 34, 206, 0.6))" }}
                >
                  ARCHITECTURE
                </text>
                <text 
                  x="475" 
                  y="265" 
                  fontSize="50" 
                  letterSpacing="10" 
                  fill="url(#archTextGradient)" 
                  stroke="#1e0b36" 
                  strokeWidth="6" 
                  strokeLinejoin="round" 
                  style={{ paintOrder: "stroke fill", filter: "drop-shadow(0 6px 18px rgba(126, 34, 206, 0.6))" }}
                >
                  & DESIGN
                </text>
              </g>

              {/* --- 4. MINI ARCHITECT / DESIGNER FIGURES INTERACTING WITH LETTERS --- */}
              <g transform="translate(180, 185)">
                <polygon points="-25,40 10,-35 22,-28 -13,47" fill="#fbbf24" stroke="#0d071b" strokeWidth="2" />
                <polygon points="10,-35 22,-28 16,-46" fill="#f472b6" />
                <circle cx="-32" cy="10" r="7" fill="#f472b6" />
                <path d="M -32,17 L -32,45 M -32,25 L -20,20 M -32,25 L -40,30" stroke="#f472b6" strokeWidth="3" strokeLinecap="round" />
              </g>

              <g transform="translate(325, 180)">
                <polygon points="-30,60 15,-15 25,-10 -20,65" fill="#c084fc" stroke="#0d071b" strokeWidth="2" />
                <polygon points="15,-15 25,-10 20,-26" fill="#38bdf8" />
                <circle cx="5" cy="15" r="7" fill="#e9d5ff" />
                <path d="M 5,22 L 5,50 M 5,30 L 18,25" stroke="#e9d5ff" strokeWidth="3.5" strokeLinecap="round" />
              </g>

              <g transform="translate(480, 125)">
                <circle cx="0" cy="-12" r="7" fill="#f472b6" />
                <path d="M 0,-5 L 0,20 M 0,5 L -10,12 M 0,5 L 10,12" stroke="#f472b6" strokeWidth="3.5" strokeLinecap="round" />
                <rect x="-12" y="10" width="14" height="9" rx="1" fill="#c084fc" />
              </g>

              <g transform="translate(630, 85)">
                <circle cx="0" cy="-10" r="7" fill="#38bdf8" />
                <path d="M 0,-3 L 0,25 M 0,5 L -12,-5 M 0,5 L 12,-5" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M -8,-12 C -8,-18 8,-18 8,-12 Z" fill="#fbbf24" />
              </g>

              <g transform="translate(805, 195)">
                <polygon points="5,-10 30,30 5,30" fill="#fbbf24" stroke="#0d071b" strokeWidth="2" />
                <circle cx="-12" cy="10" r="7" fill="#e9d5ff" />
                <path d="M -12,17 L -12,45 M -12,25 L 0,20 M -12,25 L -20,32" stroke="#e9d5ff" strokeWidth="3.5" strokeLinecap="round" />
              </g>

              {/* --- 5. BOTTOM DOODLES: PENCILS & PAPERCLIPS --- */}
              <g stroke="#c084fc" strokeWidth="2" fill="none">
                <g transform="translate(380, 310) rotate(-10)">
                  <polygon points="0,0 70,0 80,6 70,12 0,12 Z" fill="#f472b6" stroke="#0d071b" />
                  <polygon points="70,0 80,6 70,12" fill="#fbbf24" />
                </g>
                <path d="M 440,320 C 430,320 430,335 445,335 C 460,335 460,310 440,310 C 425,310 425,340 450,340" transform="translate(10, -5) scale(0.75)" />
                <path d="M 720,320 C 710,320 710,335 725,335 C 740,335 740,310 720,310 C 705,310 705,340 730,340" transform="translate(20, -5) scale(0.75)" />
              </g>

            </svg>
          </div>
        ) : genre.id === "livestock" || genre.id === "fishery" || genre.title.toLowerCase().includes("livestock") || genre.title.toLowerCase().includes("fishery") ? (
          <div className="relative inline-flex flex-col items-center justify-center select-none my-2 max-w-md sm:max-w-xl w-full group">
            {/* Zystra Purple Ambient Glow */}
            <div className="absolute w-64 h-64 bg-purple-600/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />

            {/* Leaping Catfish Rising Sun "LIVESTOCK" Vector Emblem (Zystra Theme) */}
            <svg 
              className="w-full h-auto max-h-[170px] sm:max-h-[210px] select-none" 
              viewBox="0 0 750 380" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Rising Sun Radial Gradient */}
                <radialGradient id="sunGlowGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="45%" stopColor="#e9d5ff" />
                  <stop offset="75%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.8" />
                </radialGradient>

                {/* Text Gradient */}
                <linearGradient id="livestockTextGradient" x1="100" y1="310" x2="650" y2="310" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#e9d5ff" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>

                {/* Water Waves Gradient */}
                <linearGradient id="waveLineGradient" x1="200" y1="240" x2="550" y2="240" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>

              {/* --- 1. RISING SUN LAYERED CIRCLES BACKDROP --- */}
              <g stroke="none">
                {/* Outer Pink/Purple Sun Disc */}
                <circle cx="375" cy="140" r="105" fill="#581c87" opacity="0.6" />
                <circle cx="375" cy="140" r="85" fill="#7e22ce" opacity="0.7" />
                <circle cx="375" cy="140" r="65" fill="#9333ea" opacity="0.85" />
                {/* Inner Sun Center */}
                <circle cx="375" cy="140" r="45" fill="url(#sunGlowGradient)" />
              </g>

              {/* --- 2. LEAPING CATFISH SILHOUETTE --- */}
              <g fill="#0d071b" stroke="#c084fc" strokeWidth="2">
                {/* Main Curved Body of Catfish */}
                <path 
                  d="M 320,50 
                     C 260,70 230,130 260,180 
                     C 290,225 360,235 440,215 
                     C 500,200 540,160 520,130 
                     C 500,105 440,135 390,165 
                     C 350,190 310,185 295,160 
                     C 280,135 295,95 320,50 Z" 
                  fill="#180b2e" 
                  stroke="#a855f7" 
                  strokeWidth="3.5"
                />

                {/* Belly White Highlight Curve */}
                <path 
                  d="M 285,165 C 315,200 375,205 445,190 C 490,180 515,150 500,138 C 470,150 420,175 375,180 C 335,185 305,178 285,165 Z" 
                  fill="#e9d5ff" 
                  stroke="none" 
                  opacity="0.9"
                />

                {/* Catfish Head & Whiskers (Barbels) */}
                <g stroke="#e9d5ff" strokeWidth="2.5" strokeLinecap="round" fill="none">
                  {/* Top Whiskers */}
                  <path d="M 312,50 C 305,32 312,20 300,10" />
                  <path d="M 322,46 C 328,28 335,18 328,6" />
                  <path d="M 330,48 C 342,32 355,25 350,15" />
                  {/* Side Fin */}
                  <path d="M 245,140 L 225,125 L 255,120 Z" fill="#2e1065" stroke="#c084fc" strokeWidth="2" />
                  <path d="M 345,175 L 358,195 L 340,190 Z" fill="#2e1065" stroke="#c084fc" strokeWidth="2" />
                </g>

                {/* Sleek Tail Fin */}
                <path 
                  d="M 520,130 C 540,110 550,140 535,165 C 520,185 500,170 520,130 Z" 
                  fill="#7e22ce" 
                  stroke="#c084fc" 
                  strokeWidth="2"
                />
              </g>

              {/* --- 3. WATER RIPPLE WAVES --- */}
              <g stroke="url(#waveLineGradient)" strokeWidth="3.5" strokeLinecap="round" fill="none">
                <path d="M 230,225 C 310,210 440,240 520,215" />
                <path d="M 245,242 C 320,230 430,255 505,235" />
                <path d="M 265,258 C 335,248 415,268 485,252" />
                <path d="M 290,274 C 350,266 400,280 460,268" />
              </g>

              {/* --- 4. CENTERPIECE TITLE TEXT: LIVESTOCK --- */}
              <g textAnchor="middle" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="900">
                <text 
                  x="375" 
                  y="345" 
                  fontSize="64" 
                  letterSpacing="10" 
                  fill="url(#livestockTextGradient)" 
                  stroke="#0d071b" 
                  strokeWidth="6" 
                  strokeLinejoin="round" 
                  style={{ paintOrder: "stroke fill", filter: "drop-shadow(0 6px 16px rgba(126, 34, 206, 0.6))" }}
                >
                  LIVESTOCK
                </text>
              </g>

            </svg>
          </div>
        ) : genre.id === "public-affairs" || genre.title.toLowerCase().includes("public") || genre.title.toLowerCase().includes("affair") ? (
          <div className="relative inline-flex flex-col items-center justify-center select-none my-2 max-w-lg sm:max-w-2xl w-full group">
            {/* Zystra Purple Ambient Glow */}
            <div className="absolute w-72 h-72 bg-purple-600/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />

            {/* Public Affairs Magnifying Glass Vector UI Emblem (Exact 1:1 Replica matching reference image in Zystra Theme) */}
            <svg 
              className="w-full h-auto max-h-[170px] sm:max-h-[220px] select-none" 
              viewBox="0 0 900 360" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Metallic Lens Glass Fill Gradient */}
                <linearGradient id="publicLensGradient" x1="150" y1="70" x2="370" y2="290" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#7e22ce" />
                  <stop offset="60%" stopColor="#581c87" />
                  <stop offset="100%" stopColor="#1e0b36" />
                </linearGradient>

                {/* Book Base Gradient */}
                <linearGradient id="publicBookGradient" x1="40" y1="250" x2="860" y2="330" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2e1065" />
                  <stop offset="100%" stopColor="#0d071b" />
                </linearGradient>
              </defs>

              {/* --- 1. BOOK BINDER BASE UNDERNEATH --- */}
              <g>
                {/* Book Cover Base */}
                <path 
                  d="M 50,260 L 850,260 C 865,260 875,270 870,285 L 850,335 C 845,345 830,350 815,350 L 40,350 Z" 
                  fill="url(#publicBookGradient)" 
                  stroke="#7e22ce" 
                  strokeWidth="3.5" 
                />
                {/* Book Spine Pages Layer */}
                <path d="M 850,260 L 875,285 L 850,335" stroke="#e9d5ff" strokeWidth="3" fill="none" />
                <line x1="60" y1="285" x2="860" y2="285" stroke="#a855f7" strokeWidth="2" opacity="0.6" />
              </g>

              {/* --- 2. MAGNIFYING GLASS HANDLE & METALLIC CONNECTOR (Horizontal Right) --- */}
              <g>
                {/* Dark Handle Bar */}
                <rect x="415" y="160" width="410" height="40" rx="20" fill="#0d071b" stroke="#7e22ce" strokeWidth="4" />
                {/* Handle Inner Metallic Ridge Highlight */}
                <line x1="440" y1="180" x2="800" y2="180" stroke="#a855f7" strokeWidth="3" strokeDasharray="18 8" strokeLinecap="round" />

                {/* Metallic Connector Neck */}
                <rect x="365" y="163" width="55" height="34" rx="4" fill="#c084fc" stroke="#e9d5ff" strokeWidth="3" />
                {/* Metallic Ring Ridges */}
                <line x1="380" y1="163" x2="380" y2="197" stroke="#0d071b" strokeWidth="2.5" />
                <line x1="395" y1="163" x2="395" y2="197" stroke="#0d071b" strokeWidth="2.5" />
                <line x1="410" y1="163" x2="410" y2="197" stroke="#0d071b" strokeWidth="2.5" />
              </g>

              {/* --- 3. CIRCULAR LENS WITH "PUBLIC AFFAIRS" TEXT --- */}
              <g>
                {/* Outer Drop Shadow */}
                <circle cx="250" cy="180" r="120" fill="#000000" opacity="0.4" transform="translate(4, 8)" />

                {/* Outer Silver/Chrome Lens Rim */}
                <circle cx="250" cy="180" r="118" fill="none" stroke="#e9d5ff" strokeWidth="12" />
                <circle cx="250" cy="180" r="112" fill="none" stroke="#a855f7" strokeWidth="3" />

                {/* Inner Purple Glass Lens Surface */}
                <circle cx="250" cy="180" r="108" fill="url(#publicLensGradient)" />

                {/* Glossy Curved Glass Reflection Highlight */}
                <path 
                  d="M 165,115 A 95,95 0 0,1 305,95" 
                  stroke="#ffffff" 
                  strokeWidth="7" 
                  strokeLinecap="round" 
                  fill="none" 
                  opacity="0.45"
                />

                {/* Centerpiece Text Inside Lens: PUBLIC AFFAIRS */}
                <g textAnchor="middle" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="900">
                  {/* Line 1: PUBLIC */}
                  <text 
                    x="250" 
                    y="160" 
                    fontSize="54" 
                    letterSpacing="3" 
                    fill="#ffffff" 
                    stroke="#0d071b" 
                    strokeWidth="5" 
                    strokeLinejoin="round" 
                    style={{ paintOrder: "stroke fill", filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.6))" }}
                  >
                    PUBLIC
                  </text>

                  {/* Line 2: AFFAIRS */}
                  <text 
                    x="250" 
                    y="218" 
                    fontSize="48" 
                    letterSpacing="4" 
                    fill="#ffffff" 
                    stroke="#0d071b" 
                    strokeWidth="5" 
                    strokeLinejoin="round" 
                    style={{ paintOrder: "stroke fill", filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.6))" }}
                  >
                    AFFAIRS
                  </text>
                </g>
              </g>

            </svg>
          </div>
        ) : genre.id === "solar" || genre.title.toLowerCase().includes("solar") || genre.title.toLowerCase().includes("energy") ? (
          <div className="relative inline-flex flex-col items-center justify-center select-none my-2 max-w-md sm:max-w-xl w-full group">
            {/* Zystra Purple Ambient Glow */}
            <div className="absolute w-60 h-60 bg-purple-600/25 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />

            {/* Compact Zystra-Themed Vector Doodle Canvas */}
            <svg 
              className="w-full h-auto max-h-[160px] sm:max-h-[200px] select-none" 
              viewBox="0 0 900 500" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Dark Zystra Canvas Base */}
              <rect width="900" height="500" rx="24" fill="#0d071b" stroke="#7e22ce" strokeWidth="2.5" />

              {/* --- LIGHT SKETCH DOODLE LAYER (Zystra Brand Colors Only) --- */}
              <g stroke="#c084fc" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
                
                {/* WAVY SKETCH WIRES */}
                <path d="M 30,170 C 40,110 110,50 170,90 C 230,130 260,35 340,65 C 420,95 470,40 540,60 C 610,80 660,35 740,65 C 810,95 860,50 880,100" stroke="#a855f7" strokeDasharray="6 3" strokeWidth="1.8" opacity="0.6" />
                <path d="M 40,230 C 90,210 120,310 180,270 C 240,230 280,330 350,300" stroke="#c084fc" strokeDasharray="5 2.5" strokeWidth="1.6" opacity="0.5" />
                <path d="M 30,370 C 70,330 110,450 200,430 C 290,410 330,470 420,440 C 510,410 580,470 660,435 C 740,400 810,460 870,410" stroke="#a855f7" strokeDasharray="6 3" strokeWidth="1.8" opacity="0.6" />
                
                {/* Wavy Loops */}
                <path d="M 120,80 C 135,50 160,50 150,80 C 140,110 110,100 125,75" stroke="#9333ea" />
                <path d="M 480,55 C 495,30 520,30 510,55 C 500,80 470,75 485,50" stroke="#9333ea" />
                <path d="M 810,75 C 825,45 850,45 840,75 C 830,105 800,100 815,70" stroke="#9333ea" />
                <path d="M 230,445 C 245,420 270,420 260,445 C 250,470 220,465 235,440" stroke="#9333ea" />
                <path d="M 680,450 C 695,425 720,425 710,450 C 700,475 670,470 685,445" stroke="#9333ea" />

                {/* --- TOP-LEFT DOODLES --- */}
                {/* Earth Globe */}
                <g transform="translate(135, 140)">
                  <circle cx="0" cy="0" r="38" fill="#0d071b" stroke="#e9d5ff" />
                  <ellipse cx="0" cy="0" rx="38" ry="15" stroke="#e9d5ff" />
                  <ellipse cx="0" cy="0" rx="18" ry="38" stroke="#e9d5ff" />
                  <path d="M -38,0 L 38,0 M 0,-38 L 0,38" stroke="#e9d5ff" />
                  <path d="M 0,-38 C -5,-55 0,-65 0,-65 C 0,-65 10,-55 0,-38" fill="#c084fc" stroke="#c084fc" />
                  <path d="M 0,-50 C -12,-55 -10,-42 0,-45" fill="#c084fc" stroke="#c084fc" />
                  <path d="M 0,-54 C 12,-59 10,-46 0,-49" fill="#c084fc" stroke="#c084fc" />
                  <path d="M 0,-72 L 0,-78 M -8,-70 L -12,-74 M 8,-70 L 12,-74" stroke="#c084fc" strokeWidth="1.8" />
                </g>

                {/* Eco Plug */}
                <path d="M 75,140 L 97,140" stroke="#e9d5ff" strokeWidth="3" />
                <rect x="55" y="130" width="20" height="20" rx="4" fill="#0d071b" stroke="#e9d5ff" />
                <path d="M 45,134 L 55,134 M 45,146 L 55,146" stroke="#e9d5ff" strokeWidth="2.5" />
                <path d="M 75,140 C 50,140 40,190 70,200 C 100,210 110,180 85,180" stroke="#c084fc" />

                {/* Cooling Towers */}
                <g transform="translate(265, 80)">
                  <path d="M -25,20 L -18,-25 L 5,-25 L 12,20 Z" fill="#0d071b" stroke="#e9d5ff" />
                  <path d="M -18,-12 L 5,-12" stroke="#e9d5ff" />
                  <path d="M -15,-32 C -25,-42 -10,-52 0,-42 C 10,-52 25,-42 15,-32 Z" fill="#0d071b" stroke="#c084fc" />
                  <path d="M 20,20 L 25,-15 L 42,-15 L 47,20 Z" fill="#0d071b" stroke="#e9d5ff" />
                  <path d="M 25,-3 L 42,-3" stroke="#e9d5ff" />
                  <path d="M 23,-22 C 15,-30 28,-38 34,-30 C 42,-38 52,-30 45,-22 Z" fill="#0d071b" stroke="#c084fc" />
                </g>

                {/* --- TOP-CENTER DOODLES --- */}
                {/* Sun */}
                <g transform="translate(435, 45)">
                  <circle cx="0" cy="0" r="14" fill="#0d071b" stroke="#c084fc" />
                  <path d="M 0,-20 L 0,-26 M 0,20 L 0,26 M -20,0 L -26,0 M 20,0 L 26,0 M -14,-14 L -19,-19 M 14,14 L 19,19 M -14,14 L -19,19 M 14,-14 L 19,-19" stroke="#c084fc" strokeWidth="2" />
                </g>

                {/* --- TOP-RIGHT DOODLES --- */}
                {/* Battery */}
                <g transform="translate(710, 48)">
                  <rect x="-12" y="-20" width="24" height="40" rx="4" fill="#0d071b" stroke="#e9d5ff" />
                  <rect x="-5" y="-25" width="10" height="5" rx="1.5" fill="#0d071b" stroke="#e9d5ff" />
                  <path d="M -7,-10 L 7,-10 M -7,0 L 7,0 M -7,10 L 7,10" stroke="#c084fc" strokeWidth="2.5" />
                </g>

                {/* Wind Turbine */}
                <g transform="translate(795, 75)">
                  <path d="M 0,0 L 0,70 M -8,70 L 8,70" stroke="#e9d5ff" strokeWidth="2.5" />
                  <circle cx="0" cy="0" r="5" fill="#0d071b" stroke="#e9d5ff" />
                  <path d="M 0,0 C -8,-25 0,-45 0,-45 C 0,-45 8,-25 0,0" fill="#0d071b" stroke="#c084fc" />
                  <path d="M 0,0 C 23,10 40,22 40,22 C 40,22 23,28 0,0" fill="#0d071b" stroke="#c084fc" />
                  <path d="M 0,0 C -23,10 -40,22 -40,22 C -40,22 -23,28 0,0" fill="#0d071b" stroke="#c084fc" />
                </g>

                {/* Gear */}
                <g transform="translate(865, 115)">
                  <circle cx="0" cy="0" r="18" fill="#0d071b" stroke="#e9d5ff" />
                  <circle cx="0" cy="0" r="8" fill="#0d071b" stroke="#e9d5ff" />
                  <path d="M 0,-22 L 0,-18 M 0,18 L 0,22 M -22,0 L -18,0 M 18,0 L 22,0 M -15,-15 L -12,-12 M 12,12 L 15,15 M -15,15 L -12,12 M 12,-12 L 15,-15" stroke="#e9d5ff" strokeWidth="3" />
                </g>

                {/* --- MIDDLE-LEFT DOODLES --- */}
                {/* Eco Lightning Badge */}
                <g transform="translate(85, 275)">
                  <circle cx="0" cy="0" r="26" fill="#0d071b" stroke="#c084fc" />
                  <circle cx="0" cy="0" r="20" stroke="#c084fc" strokeDasharray="3 2" />
                  <path d="M 2,-14 L -8,2 L 1,2 L -3,14 L 10,-2 L 1,-2 Z" fill="#e9d5ff" stroke="none" />
                </g>

                {/* --- MIDDLE-RIGHT DOODLES --- */}
                {/* Lightbulb */}
                <g transform="translate(635, 220)">
                  <path d="M -16,-10 C -24,-30 24,-30 16,-10 C 12,0 10,10 -10,10 C -10,10 -12,0 -16,-10 Z" fill="#0d071b" stroke="#c084fc" />
                  <rect x="-8" y="10" width="16" height="10" rx="2" fill="#0d071b" stroke="#c084fc" />
                  <path d="M -5,20 L 5,20 M 0,20 L 0,24" stroke="#c084fc" />
                  <path d="M 0,2 C -6,-8 0,-16 0,-16 C 0,-16 6,-8 0,2" fill="#e9d5ff" stroke="#e9d5ff" />
                  <path d="M -22,-22 L -28,-28 M 22,-22 L 28,-28 M 0,-30 L 0,-36" stroke="#c084fc" strokeWidth="1.8" />
                </g>

                {/* Solar Panel Grid */}
                <g transform="translate(830, 270)">
                  <polygon points="-40,-20 30,-25 40,20 -30,25" fill="#0d071b" stroke="#c084fc" />
                  <line x1="-5" y1="-22" x2="5" y2="22" stroke="#c084fc" />
                  <line x1="-22" y1="-21" x2="-12" y2="23" stroke="#c084fc" />
                  <line x1="12" y1="-23" x2="22" y2="21" stroke="#c084fc" />
                  <line x1="-37" y1="0" x2="33" y2="-4" stroke="#c084fc" />
                  <path d="M 0,22 L 0,40 M -15,40 L 15,40" stroke="#c084fc" strokeWidth="2.5" />
                </g>

                {/* --- BOTTOM-LEFT DOODLES --- */}
                {/* Electric Car */}
                <g transform="translate(85, 410)">
                  <path d="M -45,10 L -40,-5 C -35,-20 -15,-22 5,-22 C 25,-22 35,-8 45,10 Z" fill="#0d071b" stroke="#e9d5ff" />
                  <path d="M -50,10 L 50,10 L 50,20 L -50,20 Z" fill="#0d071b" stroke="#e9d5ff" />
                  <circle cx="-25" cy="20" r="9" fill="#0d071b" stroke="#e9d5ff" />
                  <circle cx="-25" cy="20" r="4" fill="#e9d5ff" stroke="none" />
                  <circle cx="25" cy="20" r="9" fill="#0d071b" stroke="#e9d5ff" />
                  <circle cx="25" cy="20" r="4" fill="#e9d5ff" stroke="none" />
                  <rect x="-5" y="-30" width="10" height="8" rx="2" fill="#0d071b" stroke="#c084fc" />
                  <path d="M -2,-30 L -2,-35 M 2,-30 L 2,-35" stroke="#c084fc" strokeWidth="2" />
                  <path d="M 0,-22 L 0,-30 M 0,-35 C 0,-45 -30,-40 -40,-20" stroke="#c084fc" />
                </g>

                {/* Bio Barrel */}
                <g transform="translate(195, 430)">
                  <rect x="-14" y="-20" width="28" height="40" rx="5" fill="#0d071b" stroke="#e9d5ff" />
                  <line x1="-14" y1="-7" x2="14" y2="-7" stroke="#e9d5ff" />
                  <line x1="-14" y1="7" x2="14" y2="7" stroke="#e9d5ff" />
                  <path d="M 0,-3 C -4,3 0,7 0,7 C 0,7 4,3 0,-3" fill="#c084fc" stroke="none" />
                </g>

                {/* --- BOTTOM-CENTER DOODLES --- */}
                {/* Pipe & Droplet */}
                <g transform="translate(325, 420)">
                  <path d="M -25,-20 L -25,10 C -25,25 -10,25 10,25 L 25,25" stroke="#e9d5ff" strokeWidth="6" strokeLinecap="square" />
                  <path d="M -25,-20 L -25,10 C -25,25 -10,25 10,25 L 25,25" stroke="#0d071b" strokeWidth="2" strokeLinecap="square" />
                  <circle cx="-25" cy="-24" r="6" fill="#0d071b" stroke="#e9d5ff" />
                  <path d="M 25,35 C 20,43 25,50 25,50 C 25,50 30,43 25,35" fill="#c084fc" stroke="none" />
                </g>

                {/* Socket Outlet */}
                <g transform="translate(475, 440)">
                  <rect x="-22" y="-16" width="44" height="32" rx="5" fill="#0d071b" stroke="#e9d5ff" />
                  <circle cx="-10" cy="0" r="4" fill="#c084fc" stroke="none" />
                  <circle cx="10" cy="0" r="4" fill="#c084fc" stroke="none" />
                </g>

                {/* --- BOTTOM-RIGHT DOODLES --- */}
                {/* Water Drop with Leaf */}
                <g transform="translate(615, 415)">
                  <path d="M 0,-28 C -22,5 0,28 0,28 C 0,28 22,5 0,-28 Z" fill="#0d071b" stroke="#c084fc" strokeWidth="2.5" />
                  <path d="M 0,-12 C -10,0 0,14 0,14 C 0,14 10,0 0,-12 Z" fill="#e9d5ff" stroke="#e9d5ff" />
                  <path d="M 0,-12 L 0,14" stroke="#0d071b" />
                </g>

                {/* Socket Box */}
                <g transform="translate(715, 445)">
                  <rect x="-18" y="-14" width="36" height="28" rx="4" fill="#0d071b" stroke="#e9d5ff" />
                  <circle cx="-8" cy="0" r="3" fill="#c084fc" stroke="none" />
                  <circle cx="8" cy="0" r="3" fill="#c084fc" stroke="none" />
                </g>

                {/* Eco Leaf Branch */}
                <g transform="translate(825, 435)">
                  <path d="M -35,20 C -10,0 20,-10 40,-5" stroke="#c084fc" strokeWidth="2.5" />
                  <path d="M -15,10 C -25,-2 -10,-10 -15,10" fill="#c084fc" stroke="#c084fc" />
                  <path d="M 5,2 C -2,-12 14,-18 5,2" fill="#c084fc" stroke="#c084fc" />
                  <path d="M 22,-3 C 18,-18 32,-22 22,-3" fill="#c084fc" stroke="#c084fc" />
                </g>

                {/* --- SCATTERED DOODLE STARS (★) & SPARKLES --- */}
                <g fill="#c084fc" stroke="none">
                  <path d="M 60,70 L 62,77 L 69,79 L 62,81 L 60,88 L 58,81 L 51,79 L 58,77 Z" />
                  <path d="M 370,35 L 372,40 L 377,42 L 372,44 L 370,49 L 368,44 L 363,42 L 368,40 Z" />
                  <path d="M 580,30 L 582,36 L 588,38 L 582,40 L 580,46 L 578,40 L 572,38 L 578,36 Z" />
                  <path d="M 670,130 L 672,135 L 677,137 L 672,139 L 670,144 L 668,139 L 663,137 L 668,135 Z" />
                  <path d="M 270,470 L 272,474 L 276,476 L 272,478 L 270,482 L 268,478 L 264,476 L 268,474 Z" />
                  <path d="M 540,430 L 542,435 L 547,437 L 542,439 L 540,444 L 538,439 L 533,437 L 538,435 Z" />
                  <path d="M 770,410 L 772,415 L 777,417 L 772,419 L 770,424 L 768,419 L 763,417 L 768,415 Z" />
                  
                  <text x="210" y="55" fontSize="14" fontFamily="serif">★</text>
                  <text x="310" y="160" fontSize="12" fontFamily="serif">★</text>
                  <text x="510" y="130" fontSize="13" fontFamily="serif">★</text>
                  <text x="640" y="50" fontSize="15" fontFamily="serif">★</text>
                  <text x="750" y="150" fontSize="12" fontFamily="serif">★</text>
                  <text x="140" y="340" fontSize="14" fontFamily="serif">★</text>
                  <text x="380" y="475" fontSize="14" fontFamily="serif">★</text>
                  <text x="570" y="475" fontSize="13" fontFamily="serif">★</text>
                  <text x="860" y="370" fontSize="14" fontFamily="serif">★</text>

                  <circle cx="100" cy="90" r="3" fill="#c084fc" />
                  <circle cx="210" cy="110" r="2.5" fill="#e9d5ff" />
                  <circle cx="340" cy="130" r="3" fill="#c084fc" />
                  <circle cx="540" cy="90" r="2" fill="#e9d5ff" />
                  <circle cx="680" cy="90" r="3" fill="#c084fc" />
                  <circle cx="830" cy="160" r="2.5" fill="#e9d5ff" />
                  <circle cx="170" cy="460" r="3" fill="#c084fc" />
                  <circle cx="410" cy="470" r="2.5" fill="#e9d5ff" />
                  <circle cx="650" cy="460" r="3" fill="#c084fc" />
                </g>

              </g>

              {/* --- CENTERPIECE TITLE: RENEWABLE ENERGY --- */}
              {/* Zystra Brand Colors Only (White fill + Dark Purple Stroke + Purple Glow) */}
              <g textAnchor="middle" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" fontWeight="900">
                
                {/* TOP LINE: RENEWABLE */}
                <text 
                  x="450" 
                  y="225" 
                  fontSize="82" 
                  letterSpacing="6" 
                  fill="#ffffff" 
                  stroke="#3b0764" 
                  strokeWidth="7" 
                  strokeLinejoin="round" 
                  style={{ paintOrder: "stroke fill", filter: "drop-shadow(0 4px 18px rgba(168, 85, 247, 0.7))" }}
                >
                  RENEWABLE
                </text>

                {/* BOTTOM LINE: ENERGY */}
                <text 
                  x="450" 
                  y="310" 
                  fontSize="82" 
                  letterSpacing="12" 
                  fill="#ffffff" 
                  stroke="#3b0764" 
                  strokeWidth="7" 
                  strokeLinejoin="round" 
                  style={{ paintOrder: "stroke fill", filter: "drop-shadow(0 4px 18px rgba(168, 85, 247, 0.7))" }}
                >
                  ENERGY
                </text>

              </g>

            </svg>
          </div>
        ) : (
          <div className={`flex flex-col gap-1 ${isEven ? "items-start text-left" : "items-end text-right"}`}>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black text-white leading-[0.95] tracking-tight">
              {genre.title}
            </h2>
          </div>
        )}
      </div>

      {/* Main Orbit Stage & Interactive Info Panel with Alternating Left/Right Grid Order */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* 3D Planetary Orbit Stage (Left on even index, Right on odd index) */}
        <div 
          className={`lg:col-span-7 flex flex-col items-center justify-center relative min-h-[400px] sm:min-h-[480px] select-none ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {/* 3D Diagonal Planetary Orbit Track */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <svg className="w-[320px] h-[200px] sm:w-[500px] sm:h-[300px]" viewBox="0 0 500 300">
              <g transform="rotate(-22 250 150)">
                <ellipse 
                  cx="250" 
                  cy="150" 
                  rx="215" 
                  ry="70" 
                  fill="none" 
                  stroke="#6e019c" 
                  strokeWidth="1.5" 
                  strokeDasharray="6 6"
                  strokeOpacity="0.4"
                />
                <ellipse 
                  cx="250" 
                  cy="150" 
                  rx="215" 
                  ry="70" 
                  fill="none" 
                  stroke="#9333ea" 
                  strokeWidth="1.5" 
                  strokeOpacity="0.6"
                />
              </g>
            </svg>
          </div>

          {/* Central 3D Image Display (Planet Center) */}
          <div className="relative z-10 flex items-center justify-center">
            {genre.image ? (
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [-1.5, 1.5, -1.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-44 h-44 sm:w-60 sm:h-60 rounded-2xl flex items-center justify-center group cursor-pointer"
              >
                <img 
                  src={genre.image} 
                  alt={`${genre.title} 3D`} 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ) : (
              /* Blank Placeholder Container */
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-3xl bg-slate-900/60 border-2 border-dashed border-purple-500/30 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-3 shadow-sm group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 text-purple-400 animate-pulse" />
                </div>
                <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  3D Artwork
                </span>
                <span className="text-[10px] font-mono text-purple-400 mt-1">
                  [ Image Reserved ]
                </span>
              </motion.div>
            )}
          </div>

          {/* Diagonal Planetary Ring Orbiting Client Badges */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {genre.clients.map((client, idx) => {
              const isSelected = selectedClientIndex === idx;
              const IconComp = client.icon || Sparkles;

              return (
                <div
                  key={client.client}
                  ref={(el) => { badgeRefs.current[idx] = el; }}
                  data-selected={isSelected}
                  className="absolute pointer-events-auto will-change-transform"
                  style={{
                    transform: `translate3d(0px, 0px, 0px) scale(1)`,
                    opacity: 1,
                    zIndex: isSelected ? 40 : 10
                  }}
                >
                  <div
                    onClick={() => setSelectedClientIndex(idx)}
                    onMouseEnter={() => setSelectedClientIndex(idx)}
                    className="cursor-pointer transition-transform duration-200 ease-out active:scale-95"
                  >
                    <div className={`flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border backdrop-blur-md shadow-md transition-colors duration-200 ${
                      isSelected
                        ? "bg-[#6e019c] text-white border-2 border-white font-bold scale-105"
                        : "bg-slate-900/90 text-slate-100 border-purple-500/40 hover:border-purple-300"
                    }`}>
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? "bg-white text-[#6e019c]" : "bg-purple-950 text-purple-300 border border-purple-500/30"
                      }`}>
                        <IconComp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold font-sans whitespace-nowrap tracking-tight">
                        {client.client}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Active Selected Client Details Panel (Exact 1:1 Social Profile Card Compact Frame Fit) */}
        <div className={`lg:col-span-5 flex flex-col justify-center items-center h-full ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedClient.client}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[340px] sm:max-w-[380px] mx-auto rounded-[28px] bg-white text-slate-900 shadow-xl overflow-hidden border border-slate-200/80 flex flex-col justify-between group/card"
            >
              {/* Top Half: Dark Cover Banner Photo */}
              <div className="relative w-full h-32 sm:h-36 bg-slate-950 overflow-hidden">
                <img
                  src={selectedClient.coverImg || genre.image || "/HeroBg.webp"}
                  alt={`${selectedClient.client} Cover`}
                  className="w-full h-full object-cover filter brightness-90 contrast-110 transition-transform duration-700 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Social / External Links (Bottom Right of Cover Photo) */}
                <div className="absolute bottom-2.5 right-3.5 flex items-center gap-2 text-white/90">
                  {selectedClient.link && (
                    <a
                      href={selectedClient.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full bg-black/50 hover:bg-purple-600 backdrop-blur-md transition-colors text-white"
                      title="Visit Website"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom Half: Crisp Pure White Section */}
              <div className="relative bg-white px-5 sm:px-6 pb-5 sm:pb-6 pt-0 flex flex-col justify-between flex-grow rounded-b-[28px]">
                <div>
                  {/* Overlapping Avatar Row */}
                  <div className="flex items-end justify-between -mt-9 sm:-mt-10 mb-3">
                    {/* Circular Avatar Badge (Thick White Border) */}
                    <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full border-4 border-white bg-black text-white font-black flex items-center justify-center shadow-md overflow-hidden shrink-0 z-10">
                      {selectedClient.logoImg ? (
                        <img src={selectedClient.logoImg} alt={selectedClient.client} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-black flex items-center justify-center text-white">
                          {React.createElement(selectedClient.icon || Sparkles, { className: "w-7 h-7 sm:w-8 sm:h-8 text-white" })}
                        </div>
                      )}
                    </div>

                    {/* Action Button ("Follow" / "Visit Brand") */}
                    {selectedClient.link ? (
                      <a
                        href={selectedClient.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 sm:px-6 sm:py-2 rounded-full bg-black text-white font-bold text-xs hover:bg-slate-800 transition-colors shadow-sm active:scale-95 flex items-center gap-1"
                      >
                        Visit Brand
                      </a>
                    ) : (
                      <button
                        className="px-5 py-2 sm:px-6 sm:py-2 rounded-full bg-black text-white font-bold text-xs hover:bg-slate-800 transition-colors shadow-sm"
                      >
                        Follow
                      </button>
                    )}
                  </div>

                  {/* Verified Name & Handle */}
                  <div className="mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight font-sans">
                        {selectedClient.client.toLowerCase()}
                      </h3>
                      {/* Solid Blue Circle Verified Badge */}
                      <div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5 fill-current text-white" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs font-sans text-gray-400 mt-0.5">
                      @{selectedClient.client.toLowerCase().replace(/[^a-z0-9]/g, "")}
                    </p>
                  </div>

                  {/* Description / Bio Text */}
                  <p className="text-xs text-gray-600 leading-relaxed font-sans mb-4">
                    {selectedClient.whatWeDid}
                  </p>
                </div>

                {/* Bottom Stats Row (Matching 500 Following 22.2K Followers style) */}
                <div className="pt-3 flex items-center gap-5 border-t border-gray-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs sm:text-sm font-extrabold text-black font-sans">
                      {selectedClient.result.split(" ")[0] || "3.8x"}
                    </span>
                    <span className="text-[11px] sm:text-xs text-gray-400 font-medium font-sans">
                      {selectedClient.result.split(" ").slice(1).join(" ") || "Growth"}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs sm:text-sm font-extrabold text-black font-sans">
                      {selectedClient.industry}
                    </span>
                    <span className="text-[11px] sm:text-xs text-gray-400 font-medium font-sans">
                      Sector
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start start", "end 75%"]
  });

  const pathLength = scrollYProgress;

  const zigZagPath = "M 28,3.5 C 28,7.7 72,7.7 72,12.0 C 72,17.7 28,17.7 28,23.5 C 28,28.2 72,28.2 72,33.0 C 72,37.5 28,37.5 28,42.0 C 28,47.5 72,47.5 72,53.0 C 72,57.7 28,57.7 28,62.5 C 28,67.2 72,67.2 72,72.0 C 72,76.2 28,76.2 28,80.5 C 28,84.5 72,84.5 72,88.5 C 72,92.5 50,92.5 50,96.5";

  // Page initialization
  useEffect(() => {
    document.documentElement.classList.remove("dark");

    const lenis = new Lenis({
      duration: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    window.scrollTo(0, 0);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);



  const genres: GenreSection[] = [
    {
      id: "ayurveda",
      title: "Ayurveda & Herbal Wellness",
      category: "ayurveda",
      subtitle: "Establishing digital authority, patient trust, and e-commerce growth for premier Ayurvedic clinics & herbal wellness brands.",
      image: "/portfolio/ayurveda.webp",
      badgeText: "Ayurvedic Care",
      clients: [
        {
          client: "Vedikacure Ayurveda",
          industry: "Ayurveda Clinic",
          whatWeDid: "Brand positioning, website development, and SEO content strategy to establish authority in the Ayurvedic wellness space.",
          result: "180% organic traffic growth in 6 months",
          link: "https://vedikacure.com",
          icon: Leaf
        },
        {
          client: "Warecare Herbal",
          industry: "Herbal Healthcare",
          whatWeDid: "Brand identity and digital presence strategy positioning Warecare as a trusted name in herbal healthcare solutions.",
          result: "140% increase in product inquiries",
          icon: Sparkles
        },
        {
          client: "VedSaathi Herbal",
          industry: "Herbal Wellness",
          whatWeDid: "E-commerce-ready website design, product photography direction, and performance marketing for herbal wellness product lines.",
          result: "350+ new customer acquisitions per month",
          icon: Leaf
        }
      ]
    },
    {
      id: "medical",
      title: "Healthcare, Clinics & Rehabilitation",
      category: "medical",
      subtitle: "Targeted digital presence, search ranking, and discreet inquiry acquisition for hospitals, rehabilitation centers, and pharma retailers.",
      image: "/portfolio/medical.webp",
      badgeText: "Healthcare & Rehab",
      clients: [
        {
          client: "Aastha RIBS",
          industry: "Spine & Neuro Rehab",
          whatWeDid: "Digital authority & lead acquisition strategy for spine, brain, and nerve rehabilitation care.",
          result: "Top 3 Google ranking for core neurology keywords",
          icon: Activity
        },
        {
          client: "Raja Medical",
          industry: "Healthcare Retail",
          whatWeDid: "Local search optimisation and online visibility strategy to capture nearby customer demand.",
          result: "115% increase in store direction queries on maps",
          icon: Stethoscope
        },
        {
          client: "Raja Pharma",
          industry: "Pharma Retail",
          whatWeDid: "Local SEO and Google Business Profile management to improve near-me search visibility for the pharmacy.",
          result: "Top 3 ranking for near-me pharmacy search terms",
          icon: Pill
        },
        {
          client: "Dr. S. Hussain & Samadhan Hospital",
          industry: "Multispecialty Hospital",
          whatWeDid: "Comprehensive hospital digital branding, doctor profile authority, and emergency inquiry routing.",
          result: "4.8★ rating with +300 monthly inquiries",
          icon: HeartHandshake
        }
      ]
    },
    {
      id: "beauty",
      title: "Beauty, Salon, Fashion & Lifestyle",
      category: "beauty",
      subtitle: "Branch-specific local search optimization, review management, and high-impact social media driving walk-in bookings across premier salons.",
      image: "/portfolio/salon.webp",
      badgeText: "Beauty & Lifestyle",
      clients: [
        {
          client: "Jawed Habib — Mithapur",
          industry: "Salon Chain",
          whatWeDid: "Local search management, Instagram aesthetic growth, and appointment booking funnel.",
          result: "Increased review volume by 120% maintaining 4.8 stars",
          icon: Scissors
        },
        {
          client: "Jawed Habib — Aashiana",
          industry: "Salon Chain",
          whatWeDid: "Google Business Profile optimisation and targeted social content to grow walk-in traffic and online bookings.",
          result: "80% growth in maps profile views and call clicks",
          icon: Scissors
        },
        {
          client: "Jawed Habib — Gola Road",
          industry: "Salon Chain",
          whatWeDid: "Branch-specific local SEO and social media management to build visibility and drive consistent appointment bookings.",
          result: "Top 3 local search ranking for premium hair care",
          icon: Scissors
        },
        {
          client: "Jawed Habib — Ara / Arrah",
          industry: "Salon Chain",
          whatWeDid: "New branch launch campaign, influencer tie-ups, and grand opening promotions.",
          result: "Over 500+ client walk-ins during launch week",
          icon: Scissors
        },
        {
          client: "Jawed Habib — Bhoothnath",
          industry: "Salon Chain",
          whatWeDid: "Social media content management and local search optimisation to support consistent client acquisition.",
          result: "65% increase in monthly appointment bookings",
          icon: Scissors
        },
        {
          client: "Vachi Boutique",
          industry: "Fashion & Lifestyle",
          whatWeDid: "E-commerce catalog showcase, Instagram shop setup, and luxury saree branding.",
          result: "240% growth in direct online inquiries",
          icon: Sparkles
        }
      ]
    },
    {
      id: "education",
      title: "Education, Coaching & Career Training",
      category: "education",
      subtitle: "Student lead generation, landing page conversion funnels, and search authority for IT academies and career institutes.",
      image: "/portfolio/edtech.webp",
      badgeText: "EdTech & Academy",
      clients: [
        {
          client: "Miracle IT Career Academy",
          industry: "IT Career Training",
          whatWeDid: "Student lead generation, course funnel optimization, and Google Search Ads for IT career programs.",
          result: "450+ IT career enrollments generated",
          icon: GraduationCap
        },
        {
          client: "Cursor Academy",
          industry: "Digital Marketing Education",
          whatWeDid: "Full brand build, landing page design, and content strategy to position the academy as a premier learning destination.",
          result: "3.5x conversion rate on demo class registrations",
          link: "https://cursorseo.com",
          icon: GraduationCap
        }
      ]
    },
    {
      id: "solar",
      title: "Solar & Renewable Energy",
      category: "solar",
      subtitle: "High-intent lead generation ad frameworks across Meta and Google Ads customized for solar consultation and EPC installation sales cycles.",
      image: "/portfolio/solar.webp",
      badgeText: "Clean Energy",
      clients: [
        {
          client: "Shrinika Solar / SRPB Innovations",
          industry: "Commercial Solar EPC",
          whatWeDid: "B2B commercial solar lead generation, corporate proposal decks, and regional SEO ranking.",
          result: "₹1.8 Cr+ in solar EPC project lead pipeline",
          icon: Sun
        },
        {
          client: "Hind Solar",
          industry: "Rooftop Solar",
          whatWeDid: "Performance marketing and lead generation campaigns across Meta and Google Ads, optimised for solar purchase intent.",
          result: "120+ qualified solar consultation leads per month",
          icon: Sun
        },
        {
          client: "Aastha Solar",
          industry: "Solar Energy Solutions",
          whatWeDid: "Targeted lead-generation ad campaigns and local visibility strategy built around solar consultation.",
          result: "Average cost-per-lead reduced by 42%",
          icon: Zap
        },
        {
          client: "Shining Source Pvt Ltd",
          industry: "Renewable Energy",
          whatWeDid: "Corporate brand identity, industrial solar project portfolio, and investor presentation collateral.",
          result: "Secured 4 major industrial solar EPC contracts",
          icon: Sun
        }
      ]
    },
    {
      id: "home",
      title: "AC, Appliance Repair & Local Home Services",
      category: "home",
      subtitle: "Hyper-local Google call ad campaigns, 24/7 map pack dominance, and instant WhatsApp booking funnels for HVAC & utility services.",
      image: "/portfolio/home-service.webp",
      badgeText: "Home Services",
      clients: [
        {
          client: "Success Cool Service",
          industry: "HVAC & AC Service",
          whatWeDid: "Hyper-local Google Call Ads and instant WhatsApp booking integration for seasonal repair demand.",
          result: "600+ seasonal AC service calls dispatched",
          icon: Wrench
        },
        {
          client: "Sahil AC Service",
          industry: "AC Repair & Maintenance",
          whatWeDid: "Local SEO and Google Business Profile management to improve visibility for customers searching for AC repair.",
          result: "95% increase in monthly local AC repair call inquiries",
          icon: Wrench
        },
        {
          client: "Perfect Cool Air",
          industry: "AC Installation",
          whatWeDid: "Commercial & residential HVAC service branding and customer feedback loop management.",
          result: "4.9★ rating across 300+ Google reviews",
          icon: Wrench
        },
        {
          client: "Summer Cool Technology",
          industry: "Appliance Tech",
          whatWeDid: "Google Business Profile setup and local SEO strategy to strengthen visibility during peak seasonal demand.",
          result: "210% increase in seasonal AC maintenance lead volume",
          icon: Sun
        },
        {
          client: "Ac Experts Services",
          industry: "Home Utility Services",
          whatWeDid: "Multi-city local service SEO and instant call-now button lead funnels.",
          result: "Over 1,200+ leads generated per season",
          icon: Wrench
        }
      ]
    },
    {
      id: "food-travel",
      title: "Food, Restaurant, Travel & Hospitality",
      category: "food-travel",
      subtitle: "Swiggy/Zomato listing optimization, culinary brand photography, and travel booking conversion funnels.",
      image: "/portfolio/tourism&food.webp",
      badgeText: "Food & Travel",
      clients: [
        {
          client: "Sanatani Flavour",
          industry: "Restaurant & Cloud Kitchen",
          whatWeDid: "Local SEO, Google Business Profile optimisation, and social media content strategy to drive walk-ins and delivery orders.",
          result: "+320% monthly food order volume",
          icon: Utensils
        },
        {
          client: "Anand Tours",
          industry: "Travel & Tour Operator",
          whatWeDid: "Website development, SEO content strategy, and performance marketing campaigns targeting holiday seekers.",
          result: "150+ group tour bookings confirmed",
          icon: Plane
        }
      ]
    },
    {
      id: "interiors",
      title: "Construction, Interiors & Home Improvement",
      category: "interiors",
      subtitle: "High-ticket villa interior showcases, 2D/3D map marketing, architectural screen catalogs, and construction B2B branding.",
      image: "/portfolio/interior.webp",
      badgeText: "Interiors & Build",
      clients: [
        {
          client: "Home Style Studio",
          industry: "Interior Design Studio",
          whatWeDid: "Portfolio-driven website design, social media content strategy, and lead generation campaigns showcasing luxury interiors.",
          result: "12+ high-ticket villa interior contracts signed",
          icon: Home
        },
        {
          client: "M Brothers & Sons",
          industry: "Construction Contractor",
          whatWeDid: "Commercial construction branding, project milestone showcases, and architect B2B outreach.",
          result: "125% increase in high-budget construction inquiries",
          icon: Building2
        },
        {
          client: "R. Laxmi Screens",
          industry: "Architectural Screens",
          whatWeDid: "Product catalog web app, architect partnership campaign, and WhatsApp catalog integration.",
          result: "3.4x growth in architect inquiries",
          icon: ShieldAlert
        },
        {
          client: "Creative Maps",
          industry: "Architectural Planning",
          whatWeDid: "2D/3D floor plan marketing, digital consultation booking, and municipal approval branding.",
          result: "80+ custom house map designs delivered monthly",
          icon: Grid
        }
      ]
    },
    {
      id: "industry",
      title: "Industrial, Machinery, B2B & Export",
      category: "industry",
      subtitle: "B2B machinery catalog portals, distributor network platforms, and global buyer acquisition for industrial manufacturers.",
      image: "/portfolio/industry.webp",
      badgeText: "Industrial & B2B",
      clients: [
        {
          client: "Kamiko Enterprises",
          industry: "Industrial Machinery B2B",
          whatWeDid: "B2B catalog website, IndiaMART integration, and international buyer inquiry funnel.",
          result: "Export inquiries received from 4 countries",
          icon: Briefcase
        },
        {
          client: "Kamiko Enterprises",
          industry: "Industrial Machinery B2B",
          whatWeDid: "B2B catalog website, IndiaMART integration, and international buyer inquiry funnel.",
          result: "Export inquiries received from 4 countries",
          icon: Briefcase
        }
      ]
    },
    {
      id: "livestock",
      title: "Livestock, Fishery & Aquaculture",
      category: "livestock",
      subtitle: "Aquaculture B2B supply branding, livestock management, wholesale rate update platforms, and distributor networks.",
      image: "/portfolio/fishery.webp",
      badgeText: "Livestock & Fishery",
      clients: [
        {
          client: "Anav Fish",
          industry: "Fishery & Aquaculture",
          whatWeDid: "Aquaculture B2B supply branding, wholesale rate updates platform, and distributor network.",
          result: "100+ ton fish distribution network connected",
          icon: Sparkles
        },
        {
          client: "Avain Corps",
          industry: "Corporate Enterprise",
          whatWeDid: "Strategic corporate re-branding, executive communications, and investor pitch deck.",
          result: "Successfully secured Series-A growth funding",
          icon: Briefcase
        }
      ]
    },
    {
      id: "public-affairs",
      title: "Public Affairs & Political Branding",
      category: "public-affairs",
      subtitle: "Strategic public figure branding, constituency digital outreach, social campaign strategy, and public grievance portals.",
      image: "/portfolio/public-affair.webp",
      badgeText: "Public Affairs",
      clients: [
        {
          client: "MLA Hardev Singh Kushwaha",
          industry: "Public Affairs (Samajwadi Party)",
          whatWeDid: "Constituency digital outreach, social media campaign strategy, and public grievance portal.",
          result: "Reached 2M+ citizens across constituency",
          icon: UserCheck
        }
      ]
    },
    {
      id: "international",
      title: "International Focus & Global Footprint",
      category: "international",
      subtitle: "Main Focus Centerpiece: Cross-border personal branding, Southeast Asia creator scaling, and GCC event entertainment strategy.",
      image: "/portfolio/international.webp",
      badgeText: "Global Centerpiece",
      clients: [
        {
          client: "Megha — Influencer Project (Malaysia)",
          industry: "Personal Brand & Content (Malaysia)",
          whatWeDid: "Cross-border personal branding, TikTok/Instagram creator growth strategy, and international brand sponsorship desk.",
          result: "Over 500K+ reach across Southeast Asia",
          icon: Sparkles
        },
        {
          client: "All About Giggles (UAE)",
          industry: "Family Entertainment (UAE)",
          whatWeDid: "International social media management and brand content strategy positioning the brand as a premier choice in the UAE.",
          result: "180% growth in UAE Instagram inquiries & bookings",
          icon: PartyPopper
        }
      ]
    }
  ];



  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Zystra Portfolio",
    "url": "https://zystra.in/portfolio",
    "description": "Explore Zystra's portfolio of brands across healthcare, beauty, solar energy, home services, education, events, travel, technology, and construction industries.",
    "about": {
      "@type": "Organization",
      "name": "Zystra",
      "url": "https://zystra.in"
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans selection:bg-brand-vibrant/30 selection:text-white">
      <SEO
        title="Portfolio | Brands We've Grown — Zystra"
        description="Explore Zystra's portfolio across healthcare, beauty, solar, education & more. Real brands, real growth, powered by AI-driven marketing strategy."
        canonicalUrl="https://zystra.in/portfolio"
        schema={seoSchema}
      />

      <Navbar />

      {/* Decorative Ambient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute -top-[15%] left-[5%] w-[800px] h-[800px] bg-brand-dark/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-[25%] -right-[10%] w-[700px] h-[700px] bg-brand-vibrant/10 rounded-full blur-[160px]" />
      </div>

      <main className="relative z-10 pb-20">

        {/* HERO SECTION WITH VIDEO BACKGROUND */}
        <section className="relative w-full overflow-hidden pt-32 pb-20 mb-16 border-b border-purple-950/30 min-h-[520px] lg:min-h-[580px] flex items-center justify-center">
          <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden bg-slate-950">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-[85%_center] sm:object-right-center opacity-100"
              src="/portfolio-hero-bg.mp4"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          </div>

          <div className="container mx-auto px-6 sm:px-12 max-w-7xl relative z-10 text-left">
            <div className="max-w-4xl flex flex-col items-start gap-8">
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-5xl sm:text-7xl lg:text-8xl font-serif font-black tracking-tight leading-[1.05] text-slate-950 drop-shadow-sm text-left"
              >
                Brands We've Helped{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark via-brand-vibrant to-pink-600">
                  Lead Their Industry
                </span>
              </motion.h1>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex flex-wrap items-center gap-8 sm:gap-12 py-2 border-y border-purple-950/30 w-full max-w-3xl"
              >
                <div className="flex flex-col items-start">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-brand-dark to-brand-vibrant drop-shadow-sm">50+</span>
                  <span className="text-xs font-mono text-slate-900 uppercase tracking-wider font-extrabold mt-1">Brands Scaled</span>
                </div>
                <div className="h-10 w-px bg-purple-900/30 hidden sm:block" />
                <div className="flex flex-col items-start">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-brand-dark to-brand-vibrant drop-shadow-sm">10+</span>
                  <span className="text-xs font-mono text-slate-900 uppercase tracking-wider font-extrabold mt-1">Sectors Covered</span>
                </div>
                <div className="h-10 w-px bg-purple-900/30 hidden sm:block" />
                <div className="flex flex-col items-start">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-brand-dark to-brand-vibrant drop-shadow-sm">3.8x</span>
                  <span className="text-xs font-mono text-slate-900 uppercase tracking-wider font-extrabold mt-1">Avg ROI Growth</span>
                </div>
                <div className="h-10 w-px bg-purple-900/30 hidden sm:block" />
                <div className="flex flex-col items-start">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-brand-dark to-brand-vibrant drop-shadow-sm">100%</span>
                  <span className="text-xs font-mono text-slate-900 uppercase tracking-wider font-extrabold mt-1">AI & Data Tracked</span>
                </div>
              </motion.div>

              {/* Industry Tag Chips */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-full max-w-3xl pt-1"
              >
                <div className="flex flex-wrap items-center justify-start gap-2 text-xs font-mono">
                  {["Ayurveda & Herbal", "Medical & Rehab", "Beauty & Salons", "Solar Energy", "Home Services", "Education", "Travel", "Technology", "Construction", "International"].map((industry) => (
                    <span
                      key={industry}
                      className="px-3.5 py-1.5 rounded-full border border-purple-900/30 bg-slate-950/80 backdrop-blur-md text-purple-100 font-semibold hover:bg-brand-vibrant hover:text-white transition-all duration-200 shadow-md"
                    >
                      #{industry}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* REVOLVING 3D GENRE ORBIT SHOWCASE SECTION WITH SCROLL-DRIVEN ZIG-ZAG TRACE PATH */}
        <section ref={showcaseRef} className="container mx-auto px-6 sm:px-12 max-w-7xl mb-24 relative">
          {/* SCROLL-DRIVEN ZIG-ZAG TRACE PATH (Connects left/right 3D stages as user scrolls down, clean high-contrast strokes with zero neon glow) */}
          <div className="absolute inset-0 pointer-events-none hidden md:block z-0 overflow-visible">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              {/* Clean Background Static Zig-Zag Track (No neon glow) */}
              <path
                d={zigZagPath}
                fill="none"
                stroke="#6e019c"
                strokeWidth="0.35"
                strokeOpacity="0.3"
                strokeDasharray="0.8 0.8"
              />

              {/* Dynamic Scroll-Filled Trace Path (Grows smoothly in sync with page scroll) */}
              <motion.path
                d={zigZagPath}
                fill="none"
                stroke="#a855f7"
                strokeWidth="0.5"
                strokeLinecap="round"
                style={{ pathLength }}
              />
            </svg>
          </div>

          <AnimatePresence mode="popLayout">
            {genres.map((genre, idx) => (
              <motion.div
                key={genre.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <GenreOrbitCard genre={genre} index={idx} isLast={idx === genres.length - 1} />
              </motion.div>
            ))}
          </AnimatePresence>
        </section>

        {/* INTERNATIONAL PROJECTS SECTION */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-28">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900/10 border border-slate-900 p-8 sm:p-12 text-center select-text">
            <div className="max-w-3xl mx-auto flex flex-col gap-4 items-center">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-vibrant uppercase">
                Global Footprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                International Projects
              </h2>
              <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-medium max-w-xl">
                Zystra's strategies don't stop at borders. We've delivered event management and family entertainment branding for clients in the UAE, proving that our AI-powered, industry-specific approach scales beyond domestic markets.
              </p>
              
              <div className="w-full h-[1px] bg-slate-800/80 my-4" />
              
              <p className="text-xs sm:text-sm font-mono text-purple-300 tracking-widest uppercase font-bold">
                India · UAE · Expanding Globally
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-vibrant p-10 sm:p-16 text-center flex flex-col items-center gap-6 shadow-xl shadow-brand-dark/20">
            <div 
              className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
              style={{
                backgroundImage: "radial-gradient(white 1.5px, transparent 1.5px)",
                backgroundSize: "24px 24px"
              }}
            />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40" />

            <div className="relative z-10 max-w-2xl flex flex-col items-center gap-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-200 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                Scale Your Brand
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-black leading-tight text-white">
                Your Brand Could Be Our Next Success Story
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium max-w-lg">
                Whatever industry you're in — healthcare, beauty, solar, home services, education, travel, or technology — Zystra has the experience and the strategy to help you grow. Let's start with a free audit of where you stand today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href="/#contact">
                  <Button className="rounded-full bg-white text-slate-950 hover:bg-slate-50 font-bold px-8 py-6 shadow-lg flex items-center gap-2 group cursor-pointer">
                    Get Your Free Digital Audit
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:+916200048924">
                  <Button className="rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold px-8 py-6 flex items-center gap-2 cursor-pointer">
                    <Phone className="w-4 h-4 text-purple-300" />
                    Call Us: +91 6200048924
                  </Button>
                </a>
              </div>
              
              <span className="text-xs text-purple-200 font-mono uppercase tracking-wider mt-2 block">
                35+ brands grown · 13+ industries · India & International
              </span>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
