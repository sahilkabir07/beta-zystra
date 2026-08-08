import React, { useEffect, useState, useRef, memo } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useInView, animate } from "framer-motion";
import { Link } from "wouter";
import {
  X,
  Play,
  Eye,
  Video,
  Crown,
  Sparkles,
  ExternalLink,
  TrendingUp,
  Globe,
  Activity,
  HeartHandshake,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  Cpu,
  MessageSquare,
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
  logoScale?: string;
  logoBg?: string;
  subLabel?: string;
  initials?: string;
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



function ClientShowcaseModal({ 
  client, 
  onClose 
}: { 
  client: ClientItem | null; 
  onClose: () => void; 
}) {
  if (!client) return null;

  const sampleReels = [
    { title: "Brand Hero & Viral Launch Reel", views: "284K", likes: "36.2K", img: client.coverImg || "/HeroBg.webp" },
    { title: "Product Showcase & Ads Strategy", views: "156K", likes: "19.8K", img: client.logoImg || client.coverImg || "/HeroBg.webp" },
    { title: "Influencer Cross-Border Campaign", views: "98.5K", likes: "12.4K", img: client.coverImg || "/HeroBg.webp" },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-slate-950 text-white rounded-3xl border border-purple-500/40 shadow-2xl shadow-purple-950/80 overflow-hidden flex flex-col z-10"
        >
          {/* Header Banner */}
          <div className="relative w-full h-36 sm:h-44 bg-slate-900 overflow-hidden shrink-0">
            <img 
              src={client.coverImg || "/HeroBg.webp"} 
              alt={client.client} 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover filter brightness-75 contrast-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            
            {/* Close X Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-purple-600 text-white backdrop-blur-md border border-white/20 transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Brand Info Overlay */}
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl border-2 border-purple-400 ${client.logoBg || "bg-white"} p-1 shadow-xl shrink-0 overflow-hidden flex items-center justify-center`}>
                  {client.logoImg ? (
                    <img src={client.logoImg} alt={client.client} loading="lazy" decoding="async" className={`w-full h-full object-contain ${client.logoScale || "scale-125"}`} />
                  ) : (
                    <div className="w-full h-full bg-purple-950 text-purple-200 flex items-center justify-center font-black text-xl">
                      {client.initials || "Z"}
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-serif font-black text-white tracking-tight">{client.client}</h2>
                    <div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                  </div>
                  <p className="text-xs text-purple-300 font-mono mt-0.5">{client.industry}</p>
                </div>
              </div>

              {client.link && (
                <a
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-purple-600/40 transition-colors shrink-0"
                >
                  <span>Visit Brand</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
            
            {/* Impact Result Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/80 via-slate-900 to-slate-950 border border-purple-500/30 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-purple-300 font-bold">Zytsra Key Growth Impact</span>
                <p className="text-lg sm:text-xl font-extrabold text-white mt-0.5">{client.result}</p>
              </div>
              <div className="p-3 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/40 shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>

            {/* Scope of Work & Execution Overview */}
            <div>
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">Campaign Execution & Strategy</h3>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 font-sans">
                {client.whatWeDid}
              </p>
            </div>

            {/* Instagram Reels & Creative Media Gallery */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-purple-300 flex items-center gap-2">
                  <Video className="w-4 h-4 text-purple-400" />
                  <span>Reels & Creative Content Showcase</span>
                </h3>
                <span className="text-xs text-slate-400 font-mono">3 Campaigns Live</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {sampleReels.map((reel, idx) => (
                  <div key={idx} className="group/reel relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden cursor-pointer aspect-[9/14] flex flex-col justify-between p-3 transition-transform hover:scale-[1.03]">
                    <img src={reel.img} alt={reel.title} className="absolute inset-0 w-full h-full object-cover filter brightness-75 group-hover/reel:brightness-90 transition-all duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
                    
                    {/* Top Stats Pill */}
                    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/90">
                      <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center gap-1">
                        <Eye className="w-3 h-3 text-purple-400" /> {reel.views}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center gap-1">
                        <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> {reel.likes}
                      </span>
                    </div>

                    {/* Center Play Icon */}
                    <div className="relative z-10 self-center w-11 h-11 rounded-full bg-purple-600/90 text-white flex items-center justify-center backdrop-blur-md shadow-lg group-hover/reel:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>

                    {/* Bottom Title */}
                    <div className="relative z-10">
                      <h4 className="text-xs font-bold text-white line-clamp-2">{reel.title}</h4>
                      <p className="text-[10px] text-purple-200 font-mono mt-0.5">High Performance Ad</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Badges */}
            <div>
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">Zytsra Scope Delivered</h3>
              <div className="flex flex-wrap gap-2">
                {["Reels Direction & Editing", "Performance Meta Ads", "E-commerce UI/UX", "Brand Positioning", "SEO & Digital PR"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-200 text-xs font-bold font-sans flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Action Bar */}
          <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">Want similar explosive growth for your brand?</span>
            <a 
              href="#contact" 
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-white text-slate-950 hover:bg-slate-200 font-bold text-xs transition-colors"
            >
              Start Project 🚀
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

const StackedCardDeckDisplay = memo(function StackedCardDeckDisplay({ 
  clients,
  selectedIndex,
  onOpenShowcase 
}: { 
  clients: ClientItem[];
  selectedIndex: number;
  onOpenShowcase: (client: ClientItem) => void; 
}) {
  const activeClient = clients[selectedIndex] || clients[0];
  const nextClient1 = clients[(selectedIndex + 1) % clients.length];
  const nextClient2 = clients[(selectedIndex + 2) % clients.length];

  return (
    <div className="relative w-full max-w-[300px] sm:max-w-[365px] mx-auto select-none py-4 my-2 flex items-center justify-center">
      
      {/* ── 3D GLASS ORBITAL SWOOSH RING ── */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-visible flex items-center justify-center">
        <svg
          className="w-[125%] h-[125%] -translate-x-[2%] -translate-y-[2%]"
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ring-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#6e019c" stopOpacity="0.25" />
            </linearGradient>
          </defs>

          {/* 3D Swoosh Ring */}
          <path
            d="M 50,220 C 70,80 380,40 460,180 C 500,250 220,380 60,260 C 20,230 40,160 120,110"
            stroke="url(#ring-glow)"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="opacity-85 filter drop-shadow-[0_0_8px_rgba(192,132,252,0.6)]"
          />

          {/* Secondary accent ring */}
          <path
            d="M 40,210 C 65,70 395,30 470,170 C 510,240 210,390 50,250"
            stroke="#a855f7"
            strokeWidth="1"
            strokeDasharray="4 6"
            className="opacity-40"
          />
        </svg>
      </div>

      {/* ── STACKED CARDS LAYOUT (Left: 3D Credit Cards Stack, Right: Smartphone Mockup) ── */}
      <div className="relative w-full flex items-center justify-between gap-1.5 sm:gap-2.5">
        
        {/* Left Stacked Cards Container */}
        <div className="relative w-[95px] sm:w-[120px] h-[240px] sm:h-[270px] shrink-0 z-20 flex items-center">
          
          {/* Card #3 (Deep Dark Purple Card - Back of Stack) */}
          <motion.div
            key={`back-card-${nextClient2?.client}`}
            initial={{ x: 4, y: -4, scale: 1, rotate: -2, zIndex: 20 }}
            animate={{ x: -8, y: 12, scale: 0.88, rotate: -12, zIndex: 0 }}
            transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-4 left-0 w-[90px] sm:w-[112px] h-[155px] sm:h-[180px] rounded-2xl bg-gradient-to-br from-[#1b0a2e] via-[#10051e] to-[#080210] border border-white/15 shadow-2xl p-2 sm:p-2.5 flex flex-col justify-between text-white overflow-hidden transform-gpu"
          >
            <div className="flex justify-between items-start opacity-70">
              <div className="w-4 h-3 rounded bg-amber-400/40 border border-amber-300/60" />
              <div className="flex -space-x-1 opacity-60">
                <div className="w-3 h-3 rounded-full bg-white/40" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="space-y-0.5 opacity-50">
              <div className="text-[5px] sm:text-[6px] font-mono tracking-widest text-slate-400">•••• 9812</div>
              <div className="text-[6px] sm:text-[7px] font-bold truncate uppercase">{nextClient2?.client || "ZYSTRA CASE"}</div>
            </div>
          </motion.div>

          {/* Card #2 (Sleek Silver/White Card - Middle of Stack) */}
          <motion.div
            key={`mid-card-${nextClient1?.client}`}
            initial={{ x: -8, y: 12, scale: 0.88, rotate: -12 }}
            animate={{ x: -2, y: 4, scale: 0.94, rotate: -6 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-2 left-1 sm:left-1.5 w-[90px] sm:w-[112px] h-[155px] sm:h-[180px] rounded-2xl bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 border border-white/60 shadow-[0_15px_35px_rgba(0,0,0,0.5)] p-2 sm:p-2.5 flex flex-col justify-between text-slate-900 overflow-hidden transform-gpu z-10"
          >
            <div className="flex justify-between items-start">
              <div className="w-4 h-3 rounded bg-amber-500/80 border border-amber-600 flex items-center justify-center">
                <div className="w-2 h-1 border-t border-b border-amber-700/60" />
              </div>
              <div className="flex -space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500 opacity-90" />
                <div className="w-3 h-3 rounded-full bg-amber-400 opacity-90" />
              </div>
            </div>

            <div>
              <div className="text-[5px] sm:text-[6px] font-mono tracking-widest text-slate-600">CLIENT CARD</div>
              <div className="text-[7px] sm:text-[8px] font-black uppercase text-slate-900 truncate">
                {nextClient1?.client || "AYURVEDA CARE"}
              </div>
            </div>
          </motion.div>

          {/* Card #1 (Front Zystra Purple Card - Sweeps up from back over the side onto front!) */}
          <motion.div
            key={`front-card-${activeClient.client}`}
            initial={{ x: -25, y: 18, scale: 0.84, rotate: -15, zIndex: 5 }}
            animate={{ 
              x: [-25, -28, 4], 
              y: [18, -14, -4], 
              scale: [0.84, 1.04, 1], 
              rotate: [-15, -12, -2],
              zIndex: [5, 30, 30]
            }}
            transition={{ 
              duration: 0.38, 
              ease: [0.16, 1, 0.3, 1],
              times: [0, 0.45, 1]
            }}
            className="absolute top-0 left-2.5 sm:left-3 w-[92px] sm:w-[115px] h-[165px] sm:h-[190px] rounded-2xl bg-gradient-to-br from-[#c084fc] via-[#a855f7] to-[#6e019c] shadow-xl shadow-purple-950/60 p-2 sm:p-2.5 flex flex-col justify-between text-white overflow-hidden transform-gpu border border-[#e879f9]"
          >
            <div className="absolute -top-10 -right-10 w-20 h-32 bg-white/25 rotate-45 pointer-events-none blur-sm" />

            <div className="flex justify-between items-start z-10">
              <div className="flex -space-x-1">
                <div className="w-3 h-3 rounded-full bg-white opacity-90" />
                <div className="w-3 h-3 rounded-full bg-purple-200 opacity-80" />
              </div>
              
              <div className="w-4.5 h-3.5 rounded bg-slate-900/90 border border-slate-700 flex items-center justify-center p-0.5 shadow-inner">
                <div className="w-full h-full border border-amber-400/80 rounded-[2px]" />
              </div>
            </div>

            <div className="z-10 space-y-0.5">
              <div className="text-[5px] sm:text-[6px] font-mono uppercase tracking-wider font-extrabold text-purple-100/90 leading-none">
                ZYSTRA CASE STUDY
              </div>
              <div className="text-[10px] sm:text-xs font-black tracking-tight uppercase leading-tight font-sans text-white truncate pt-0.5">
                {activeClient.client}
              </div>
              <div className="text-[6px] sm:text-[7px] font-mono font-bold text-purple-200 pt-0.5">
                VERIFIED BRAND
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── FOREGROUND MAIN PHONE APP MOCKUP (Slim, Ultra-Realistic Smartphone Mockup) ── */}
        <div
          onClick={() => onOpenShowcase(activeClient)}
          className="relative flex-1 max-w-[205px] sm:max-w-[235px] rounded-[2.4rem] bg-[#090414] border-[3.5px] border-[#a855f7]/80 p-2.5 sm:p-3 shadow-2xl shadow-purple-950/80 flex flex-col justify-between text-white cursor-pointer group hover:border-[#c084fc] transition-all z-30 overflow-hidden transform-gpu"
        >
          {/* Screen Gloss Reflective Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-40" />

          {/* Hardware Dynamic Island Notch & Status Bar (Persistent) */}
          <div className="flex items-center justify-between text-[7px] sm:text-[8px] font-mono text-slate-300 px-0.5 mb-1.5 z-10">
            <span className="font-extrabold text-white">9:41</span>
            
            {/* Dynamic Island Notch */}
            <div className="w-14 sm:w-16 h-3 rounded-full bg-black border border-slate-800 flex items-center justify-between px-1.5 shadow-inner">
              <div className="w-1 h-1 rounded-full bg-slate-900 border border-slate-700" />
              <div className="w-2 h-2 rounded-full bg-[#1e1035] border border-purple-500/40 flex items-center justify-center">
                <div className="w-0.5 h-0.5 rounded-full bg-purple-400" />
              </div>
            </div>

            <div className="flex items-center gap-0.5 text-white">
              <span className="text-[6px] sm:text-[7px] font-bold">5G</span>
              <div className="w-2.5 h-1.5 border border-white/80 rounded-[2px] p-[1px] flex items-center">
                <div className="w-full h-full bg-[#c084fc] rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* Dynamic Screen Content Wrapper with Smooth Inner Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeClient.client}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="flex-1 flex flex-col justify-between"
            >
              {/* Dashboard Header Bar: Brand Profile & Category */}
              <div className="flex items-center justify-between gap-2 mb-1.5 z-10">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1a0b36] border border-purple-400/50 p-0.5 flex items-center justify-center shadow-lg overflow-hidden shrink-0">
                    {activeClient.logoImg ? (
                      <img src={activeClient.logoImg} alt={activeClient.client} className="w-full h-full object-contain rounded-full" />
                    ) : (
                      <Sparkles className="w-3.5 h-3.5 text-[#c084fc]" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[6px] sm:text-[7px] font-mono uppercase bg-[#250d4a] text-[#d8b4fe] px-1.5 py-0.5 rounded border border-[#a855f7]/30 font-bold block truncate max-w-[110px]">
                      {activeClient.industry}
                    </span>
                    <h4 className="text-xs sm:text-sm font-black text-white truncate leading-tight font-sans mt-0.5">
                      {activeClient.client}
                    </h4>
                  </div>
                </div>

                {/* Action Button */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#1d0b3a] border border-[#a855f7]/40 flex items-center justify-center text-[#c084fc] shadow-md group-hover:bg-[#a855f7] group-hover:text-white transition-colors shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                </div>
              </div>

              {/* ── REALISTIC MONETTO-STYLE HERO METRIC CARD ── */}
              <div className="relative w-full bg-gradient-to-br from-[#c084fc] via-[#a855f7] to-[#6e019c] text-white rounded-2xl p-2.5 sm:p-3 shadow-[0_10px_25px_rgba(168,85,247,0.4)] my-1 overflow-hidden group-hover:scale-[1.02] transition-transform z-10">
                <div className="flex items-center justify-between text-[7px] sm:text-[8px] font-mono font-bold uppercase tracking-wider text-purple-100">
                  <span>GROWTH IMPACT</span>
                  <span className="flex items-center gap-0.5 bg-black/40 text-purple-200 px-1.5 py-0.5 rounded-full backdrop-blur-sm">
                    <TrendingUp className="w-2.5 h-2.5 text-purple-300" /> VERIFIED
                  </span>
                </div>

                {/* Result Value */}
                <div className="text-sm sm:text-base font-black font-sans tracking-tight leading-tight my-1 text-white truncate">
                  {activeClient.result}
                </div>

                <div className="text-[7px] sm:text-[8px] font-mono text-purple-200 border-t border-white/20 pt-1 mt-0.5 flex justify-between items-center">
                  <span className="truncate">{activeClient.client}</span>
                  <span className="font-bold text-white">LIVE ANALYTICS</span>
                </div>
              </div>

              {/* ── SECONDARY LAYERED POCKET CARD (Monetto Tax Pocket Style) ── */}
              <div className="-mt-2 mx-1.5 bg-[#1f0945] border border-[#a855f7]/40 rounded-xl px-2.5 py-1 text-[7px] sm:text-[8px] font-mono text-[#e9d5ff] flex items-center justify-between shadow-md relative z-0">
                <span className="text-purple-200 font-bold">SEO & Brand Authority</span>
                <span className="font-mono font-extrabold text-[#c084fc]">+180% Organic</span>
              </div>

              {/* ── MOBILE BROWSER MOCKUP WITH UN-CROPPED BRAND LOGO ── */}
              <div className="relative w-full rounded-2xl border border-purple-500/30 bg-[#120627] shrink-0 shadow-inner my-1.5 overflow-hidden z-10">
                {/* Browser Address Bar Header */}
                <div className="bg-[#1b0939] px-2 py-1 border-b border-purple-500/20 flex items-center justify-between text-[7px] font-mono text-purple-300">
                  <div className="flex items-center gap-1 max-w-[80%] truncate">
                    <span className="text-purple-400">🔒</span>
                    <span className="truncate font-bold">{activeClient.link ? activeClient.link.replace("https://", "") : `${activeClient.client.toLowerCase().replace(/\s+/g, '')}.com`}</span>
                  </div>
                  <div className="w-2 h-2 rounded-full border border-purple-400/50 flex items-center justify-center text-[5px]">↻</div>
                </div>

                {/* Uncropped Brand Logo Visual Canvas */}
                <div className="h-20 sm:h-24 p-3 flex items-center justify-center bg-gradient-to-b from-[#120627] to-[#0a0317] relative">
                  {activeClient.logoImg ? (
                    <img
                      src={activeClient.logoImg}
                      alt={activeClient.client}
                      className="max-h-full max-w-full object-contain filter drop-shadow-[0_6px_14px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : activeClient.initials ? (
                    <div className="w-10 h-10 rounded-full bg-purple-900/80 border border-purple-400/40 flex items-center justify-center text-white font-black text-lg font-mono">
                      {activeClient.initials}
                    </div>
                  ) : (
                    <Sparkles className="w-7 h-7 text-purple-400" />
                  )}

                  {/* Corner ROI Badge */}
                  <div className="absolute bottom-1 right-1.5 bg-[#250d4a]/90 backdrop-blur-md px-1.5 py-0.5 rounded border border-[#a855f7]/40 text-[6px] font-mono font-bold text-[#e9d5ff] flex items-center gap-0.5">
                    <Sparkles className="w-2 h-2 text-[#c084fc]" /> 4.8x ROI
                  </div>
                </div>
              </div>

              {/* ── STRATEGY BRIEF DASHBOARD WIDGET ── */}
              <div className="bg-[#180838] border border-white/10 rounded-xl p-2 text-xs my-0.5 z-10">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[7px] font-mono uppercase tracking-wider text-purple-300 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
                    DELIVERABLE BRIEF
                  </span>
                  <span className="text-[6px] font-mono text-purple-400 font-bold">100% COMPLETE</span>
                </div>
                <p className="text-[9px] text-slate-200 font-sans line-clamp-2 leading-tight">
                  {activeClient.whatWeDid}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── REALISTIC iOS APP DOCK AT BOTTOM (Persistent) ── */}
          <div className="mt-1 bg-[#160733]/95 backdrop-blur-md rounded-xl p-1 border border-[#a855f7]/35 flex items-center justify-between gap-1 shadow-lg z-10">
            <div className="flex items-center gap-1.5 pl-1.5 text-purple-300">
              <Home className="w-3 h-3 text-[#c084fc]" />
              <Grid className="w-3 h-3 text-purple-400/60" />
            </div>
            {/* Action Button Pill */}
            <div className="flex-1 bg-[#2b1057] hover:bg-[#a855f7] text-slate-100 hover:text-white px-2 py-1 rounded-lg text-[8px] font-mono font-bold transition-colors flex items-center justify-between gap-1 border border-[#a855f7]/40">
              <span className="truncate">Explore Case Study</span>
              <ArrowUpRight className="w-3 h-3 shrink-0" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
});

// Helper function to return domain-specific hand-drawn doodle SVG icons per category
function getDoodleIconsForGenre(genreId: string) {
  switch (genreId) {
    case "ayurveda":
      return {
        iconLeft: (
          <svg className="w-8 h-8 text-emerald-400 stroke-[2.2] stroke-current fill-emerald-950/40 filter drop-shadow-md -rotate-12" viewBox="0 0 24 24">
            <path d="M 12 2 C 6 8 4 14 6 20 C 12 22 18 20 22 12 C 22 6 18 2 12 2 Z M 6 20 C 10 14 14 10 22 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconRight: (
          <svg className="w-7 h-7 text-green-300 stroke-[2.2] stroke-current fill-green-950/40 filter drop-shadow-md rotate-12" viewBox="0 0 24 24">
            <path d="M 12 22 V 10 M 12 10 C 12 5 7 3 2 5 C 2 10 7 12 12 10 Z M 12 10 C 12 5 17 3 22 5 C 22 10 17 12 12 10 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconAccent: (
          <svg className="w-5 h-5 text-amber-300 stroke-[2.2] stroke-current fill-amber-400/30" viewBox="0 0 24 24">
            <path d="M 12 2 L 14 9 L 21 12 L 14 15 L 12 22 L 10 15 L 3 12 L 10 9 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      };

    case "medical":
      return {
        iconLeft: (
          <svg className="w-7 h-7 text-rose-400 stroke-[2.2] stroke-current fill-rose-950/40 filter drop-shadow-md -rotate-6" viewBox="0 0 24 24">
            <path d="M 9 2 H 15 V 9 H 22 V 15 H 15 V 22 H 9 V 15 H 2 V 9 H 9 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconRight: (
          <svg className="w-8 h-7 text-sky-400 stroke-[2.2] stroke-current fill-none filter drop-shadow-md rotate-6" viewBox="0 0 24 24">
            <path d="M 2 12 H 6 L 9 4 L 14 20 L 17 10 L 19 14 H 22" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconAccent: (
          <svg className="w-5 h-5 text-purple-300 stroke-[2.2] stroke-current fill-purple-950/40" viewBox="0 0 24 24">
            <path d="M 4.5 19.5 L 19.5 4.5 M 10.5 7.5 C 7 4 4 7 7.5 10.5 L 13.5 16.5 C 17 20 20 17 16.5 13.5 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      };

    case "beauty":
      return {
        iconLeft: (
          <svg className="w-7 h-7 text-amber-300 stroke-[2.2] stroke-current fill-amber-950/40 filter drop-shadow-md -rotate-12" viewBox="0 0 24 24">
            <path d="M 2 4 L 7 13 L 12 6 L 17 13 L 22 4 L 20 19 H 4 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconRight: (
          <svg className="w-7 h-7 text-pink-300 stroke-[2.2] stroke-current fill-pink-950/40 filter drop-shadow-md rotate-12" viewBox="0 0 24 24">
            <path d="M 6 3 H 18 L 22 9 L 12 21 L 2 9 Z M 2 9 H 22 M 12 21 L 9 9 M 12 21 L 15 9" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconAccent: (
          <svg className="w-5 h-5 text-fuchsia-300 stroke-[2.2] stroke-current fill-fuchsia-400/30" viewBox="0 0 24 24">
            <path d="M 12 2 L 14 9 L 21 12 L 14 15 L 12 22 L 10 15 L 3 12 L 10 9 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      };

    case "education":
      return {
        iconLeft: (
          <svg className="w-8 h-7 text-indigo-400 stroke-[2.2] stroke-current fill-indigo-950/40 filter drop-shadow-md -rotate-6" viewBox="0 0 24 24">
            <path d="M 12 2 L 2 7 L 12 12 L 22 7 Z M 6 9.5 V 16 C 6 18.5 18 18.5 18 16 V 9.5 M 22 7 V 15" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconRight: (
          <svg className="w-7 h-7 text-amber-300 stroke-[2.2] stroke-current fill-amber-950/40 filter drop-shadow-md rotate-12" viewBox="0 0 24 24">
            <path d="M 9 18 H 15 M 10 21 H 14 M 12 2 C 7.5 2 4 5.5 4 10 C 4 13 6 15 7.5 16.5 V 18 H 16.5 V 16.5 C 18 15 20 13 20 10 C 20 5.5 16.5 2 12 2 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconAccent: (
          <svg className="w-5 h-5 text-yellow-300 stroke-[2.2] stroke-current fill-yellow-400/30" viewBox="0 0 24 24">
            <path d="M 12 2 L 14 9 L 21 12 L 14 15 L 12 22 L 10 15 L 3 12 L 10 9 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      };

    case "solar":
      return {
        iconLeft: (
          <svg className="w-8 h-8 text-amber-400 stroke-[2.2] stroke-current fill-amber-950/40 filter drop-shadow-md -rotate-12" viewBox="0 0 24 24">
            <path d="M 12 17 C 14.76 17 17 14.76 17 12 C 17 9.24 14.76 7 12 7 C 9.24 7 7 9.24 7 12 C 7 14.76 9.24 17 12 17 Z M 12 2 V 4 M 12 20 V 22 M 4.22 4.22 L 5.64 5.64 M 18.36 18.36 L 19.78 19.78 M 2 12 H 4 M 20 12 H 22 M 4.22 19.78 L 5.64 18.36 M 18.36 5.64 L 19.78 4.22" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconRight: (
          <svg className="w-7 h-7 text-yellow-300 stroke-[2.2] stroke-current fill-yellow-950/40 filter drop-shadow-md rotate-12" viewBox="0 0 24 24">
            <path d="M 13 2 L 3 14 H 12 L 11 22 L 21 10 H 12 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconAccent: (
          <svg className="w-5 h-5 text-emerald-300 stroke-[2.2] stroke-current fill-emerald-400/30" viewBox="0 0 24 24">
            <path d="M 12 2 C 6 8 4 14 6 20 C 12 22 18 20 22 12 C 22 6 18 2 12 2 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      };

    case "home":
      return {
        iconLeft: (
          <svg className="w-7 h-7 text-cyan-400 stroke-[2.2] stroke-current fill-cyan-950/40 filter drop-shadow-md -rotate-12" viewBox="0 0 24 24">
            <path d="M 14.7 6.3 A 1 1 0 0 0 14 5 C 11.8 5 10 6.8 10 9 C 10 9.5 10.1 10 10.3 10.4 L 3 17.7 C 2.4 18.3 2.4 19.3 3 19.9 C 3.6 20.5 4.6 20.5 5.2 19.9 L 12.5 12.6 C 12.9 12.8 13.4 12.9 13.9 12.9 C 16.1 12.9 17.9 11.1 17.9 8.9 A 1 1 0 0 0 16.6 8.2 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconRight: (
          <svg className="w-7 h-7 text-blue-300 stroke-[2.2] stroke-current fill-blue-950/40 filter drop-shadow-md rotate-6" viewBox="0 0 24 24">
            <path d="M 3 9.5 L 12 2.5 L 21 9.5 V 20 C 21 20.5 20.5 21 20 21 H 4 C 3.5 21 3 20.5 3 20 Z M 9 21 V 12 H 15 V 21" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconAccent: (
          <svg className="w-5 h-5 text-amber-300 stroke-[2.2] stroke-current fill-amber-400/30" viewBox="0 0 24 24">
            <path d="M 13 2 L 3 14 H 12 L 11 22 L 21 10 H 12 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      };

    case "hospitality":
      return {
        iconLeft: (
          <svg className="w-7 h-7 text-orange-400 stroke-[2.2] stroke-current fill-orange-950/40 filter drop-shadow-md -rotate-12" viewBox="0 0 24 24">
            <path d="M 18 2 V 22 M 18 2 C 15.5 2 14 4 14 7 V 11 H 18 M 6 2 V 9 C 6 11 8 13 10 13 V 22 M 6 2 H 10 V 9" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconRight: (
          <svg className="w-7 h-7 text-rose-300 stroke-[2.2] stroke-current fill-rose-950/40 filter drop-shadow-md rotate-12" viewBox="0 0 24 24">
            <path d="M 8 22 H 16 M 12 15 V 22 M 5 3 L 12 15 L 19 3 Z M 7 6 H 17" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconAccent: (
          <svg className="w-5 h-5 text-amber-300 stroke-[2.2] stroke-current fill-amber-400/30" viewBox="0 0 24 24">
            <path d="M 12 2 L 14 9 L 21 12 L 14 15 L 12 22 L 10 15 L 3 12 L 10 9 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      };

    case "real-estate":
      return {
        iconLeft: (
          <svg className="w-7 h-7 text-violet-400 stroke-[2.2] stroke-current fill-violet-950/40 filter drop-shadow-md -rotate-6" viewBox="0 0 24 24">
            <path d="M 6 22 V 2 H 18 V 22 M 10 6 H 14 M 10 10 H 14 M 10 14 H 14 M 10 18 H 14" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconRight: (
          <svg className="w-7 h-7 text-amber-300 stroke-[2.2] stroke-current fill-amber-950/40 filter drop-shadow-md rotate-12" viewBox="0 0 24 24">
            <path d="M 21 2 L 10 13 M 15 8 L 18 11 M 12 11 L 14 13 M 7.5 10.5 C 9.5 10.5 11 12 11 14 C 11 16 9.5 17.5 7.5 17.5 C 5.5 17.5 4 16 4 14 C 4 12 5.5 10.5 7.5 10.5 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconAccent: (
          <svg className="w-5 h-5 text-purple-300 stroke-[2.2] stroke-current fill-purple-400/30" viewBox="0 0 24 24">
            <path d="M 12 2 L 14 9 L 21 12 L 14 15 L 12 22 L 10 15 L 3 12 L 10 9 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      };

    case "tech":
      return {
        iconLeft: (
          <svg className="w-8 h-7 text-cyan-400 stroke-[2.2] stroke-current fill-cyan-950/40 filter drop-shadow-md -rotate-6" viewBox="0 0 24 24">
            <path d="M 16 18 L 22 12 L 16 6 M 8 6 L 2 12 L 8 18 M 14 4 L 10 20" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconRight: (
          <svg className="w-7 h-7 text-[#c084fc] stroke-[2.2] stroke-current fill-purple-950/40 filter drop-shadow-md rotate-12" viewBox="0 0 24 24">
            <path d="M 4.5 16.5 C 3 19 3 21 3 21 C 3 21 5 21 7.5 19.5 M 12 15 L 9 12 M 15 12 L 12 9 M 14.5 2 C 8.5 2 5.5 8 5.5 8 C 5.5 8 2.5 11 2.5 13.5 C 2.5 16 4.5 17.5 7 17.5 C 9.5 17.5 12.5 14.5 12.5 14.5 C 12.5 14.5 18.5 11.5 18.5 5.5 C 18.5 3 16 2 14.5 2 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconAccent: (
          <svg className="w-5 h-5 text-amber-300 stroke-[2.2] stroke-current fill-amber-400/30" viewBox="0 0 24 24">
            <path d="M 13 2 L 3 14 H 12 L 11 22 L 21 10 H 12 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      };

    case "political":
      return {
        iconLeft: (
          <svg className="w-8 h-7 text-amber-400 stroke-[2.2] stroke-current fill-amber-950/40 filter drop-shadow-md -rotate-12" viewBox="0 0 24 24">
            <path d="M 3 11 V 15 M 11 6 L 20 2 V 22 L 11 18 H 3 V 6 H 11 Z M 7 18 V 23" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconRight: (
          <svg className="w-7 h-7 text-yellow-300 stroke-[2.2] stroke-current fill-yellow-950/40 filter drop-shadow-md rotate-12" viewBox="0 0 24 24">
            <path d="M 2 4 L 7 13 L 12 6 L 17 13 L 22 4 L 20 19 H 4 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconAccent: (
          <svg className="w-5 h-5 text-amber-300 stroke-[2.2] stroke-current fill-amber-400/30" viewBox="0 0 24 24">
            <path d="M 12 2 L 14 9 L 21 12 L 14 15 L 12 22 L 10 15 L 3 12 L 10 9 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      };

    case "automotive":
      return {
        iconLeft: (
          <svg className="w-8 h-7 text-indigo-400 stroke-[2.2] stroke-current fill-indigo-950/40 filter drop-shadow-md -rotate-6" viewBox="0 0 24 24">
            <path d="M 5 17 C 3.5 17 3 15.5 3 14 L 5 9 H 19 L 21 14 C 21 15.5 20.5 17 19 17 M 7 17 A 2 2 0 1 0 7 13 A 2 2 0 1 0 7 17 Z M 17 17 A 2 2 0 1 0 17 13 A 2 2 0 1 0 17 17 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconRight: (
          <svg className="w-7 h-7 text-cyan-300 stroke-[2.2] stroke-current fill-cyan-950/40 filter drop-shadow-md rotate-12" viewBox="0 0 24 24">
            <path d="M 13 2 L 3 14 H 12 L 11 22 L 21 10 H 12 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconAccent: (
          <svg className="w-5 h-5 text-[#c084fc] stroke-[2.2] stroke-current fill-purple-400/30" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M 2 12 H 22 M 12 2 C 14.5 5 16 8.5 16 12 C 16 15.5 14.5 19 12 22 C 9.5 19 8 15.5 8 12 C 8 8.5 9.5 5 12 2 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      };

    default:
      return {
        iconLeft: (
          <svg className="w-8 h-6 text-purple-300 stroke-[2.2] stroke-current fill-purple-900/40 filter drop-shadow-md" viewBox="0 0 40 24">
            <path d="M 8 18 C 3 18 2 12 7 10 C 5 4 14 3 19 6 C 24 3 32 4 32 9 C 38 10 38 18 32 18 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconRight: (
          <svg className="w-7 h-7 text-amber-300 stroke-[2.2] stroke-current fill-amber-950/40 filter drop-shadow-md rotate-12" viewBox="0 0 24 24">
            <path d="M 12 2 L 14 9 L 21 12 L 14 15 L 12 22 L 10 15 L 3 12 L 10 9 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconAccent: (
          <svg className="w-5 h-5 text-[#c084fc] stroke-[2.2] stroke-current fill-purple-400/30" viewBox="0 0 24 24">
            <path d="M 12 2 L 14 9 L 21 12 L 14 15 L 12 22 L 10 15 L 3 12 L 10 9 Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      };
  }
}

const GenreOrbitCard = memo(function GenreOrbitCard({ 
  genre, 
  index, 
  totalCount = 12,
  onOpenShowcase
}: { 
  genre: GenreSection; 
  index: number; 
  totalCount?: number;
  onOpenShowcase: (client: ClientItem) => void;
}) {
  const doodleIcons = getDoodleIconsForGenre(genre.id || genre.category);
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);
  const selectedIndexRef = useRef(selectedClientIndex);
  selectedIndexRef.current = selectedClientIndex;
  const hoveredIdxRef = useRef<number | null>(null);

  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const selectedClient = genre.clients[selectedClientIndex] || genre.clients[0];
  const clientCount = genre.clients.length;

  const isEven = index % 2 === 0;
  const isLastSection = index === totalCount - 1;

  // Direct DOM 120fps hardware accelerated animation loop with strict IntersectionObserver optimization
  useEffect(() => {
    let animId: number;
    let isVisible = false; // Start false, only run when visible in viewport
    const startTime = performance.now();

    let w = typeof window !== "undefined" ? window.innerWidth : 1200;
    let isMobile = w < 640;
    let rx = isMobile ? Math.min(115, Math.max(85, Math.floor((w - 70) / 2))) : w < 1440 ? 220 : 270;
    let ry = isMobile ? 36 : w < 1440 ? 72 : 88;

    const handleResize = () => {
      w = window.innerWidth;
      isMobile = w < 640;
      rx = isMobile ? Math.min(115, Math.max(85, Math.floor((w - 70) / 2))) : w < 1440 ? 220 : 270;
      ry = isMobile ? 36 : w < 1440 ? 72 : 88;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        const entering = entry.isIntersecting;
        if (entering && !isVisible) {
          isVisible = true;
          if (animId) cancelAnimationFrame(animId);
          animId = requestAnimationFrame(updateOrbit);
        } else if (!entering && isVisible) {
          isVisible = false;
          if (animId) cancelAnimationFrame(animId);
        }
      },
      { rootMargin: "50px", threshold: 0.05 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    const tiltAngle = (-22 * Math.PI) / 180;
    const cosA = Math.cos(tiltAngle);
    const sinA = Math.sin(tiltAngle);

    const updateOrbit = (now: number) => {
      if (!isVisible) return;

      const elapsed = now - startTime;
      const angle = (elapsed * 0.028) % 360;
      const currentSelIdx = selectedIndexRef.current;
      const currentHoveredIdx = hoveredIdxRef.current;

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
        const isSelected = idx === currentSelIdx;
        const isHovered = idx === currentHoveredIdx;

        const baseScale = isSelected ? 1.28 : 0.78 + 0.3 * ((depthFactor + 1) / 2);
        const depthScale = isHovered ? Math.max(baseScale, 1.35) : baseScale;
        const depthOpacity = isHovered ? 1 : isSelected ? 1 : 0.55 + 0.45 * ((depthFactor + 1) / 2);
        
        const zIndex = isHovered
          ? 50
          : isSelected 
            ? (isFront ? 40 : 18) 
            : (isFront ? 30 : 10);

        el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0px) scale(${depthScale.toFixed(2)})`;
        el.style.opacity = `${depthOpacity.toFixed(2)}`;

        // Only mutate zIndex when layer changes (eliminates 99% of GPU layer tree invalidations!)
        const lastZ = (el as any)._lastZ;
        if (lastZ !== zIndex) {
          (el as any)._lastZ = zIndex;
          el.style.zIndex = `${zIndex}`;
        }
      });

      animId = requestAnimationFrame(updateOrbit);
    };

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [clientCount]);

  return (
    <div 
      ref={cardRef} 
      className="w-full relative rounded-3xl p-4 sm:p-8 flex flex-col justify-between overflow-visible my-12 sm:my-20"
      style={{
        minHeight: "clamp(480px, 68vh, 750px)",
      }}
    >
      {/* Genre Header — PLAYFUL DOODLE STYLE */}
      <div className={`relative z-10 mb-6 sm:mb-8 flex flex-col w-full max-w-7xl ${
        isLastSection 
          ? "items-center text-center mx-auto" 
          : isEven 
            ? "items-start text-left" 
            : "items-end text-right"
      }`}>
        <div className={`flex flex-col gap-2 max-w-3xl ${
          isLastSection 
            ? "items-center text-center" 
            : isEven 
              ? "items-start text-left" 
              : "items-end text-right"
        }`}>
          {/* Doodle Badge Pill */}
          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-black uppercase tracking-wider text-purple-200 bg-purple-950/80 px-4 py-1.5 rounded-full border-2 border-dashed border-purple-400/60 shadow-[3px_3px_0px_#6e019c]">
            <svg className="w-3.5 h-3.5 text-amber-300 stroke-[2.5] stroke-current fill-none" viewBox="0 0 24 24">
              <path d="M 12 2 L 14 9 L 21 12 L 14 15 L 12 22 L 10 15 L 3 12 L 10 9 Z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {genre.badgeText || genre.title}
          </div>

          {/* DOODLE ART BUBBLE TITLE CONTAINER */}
          <div className="relative inline-block mt-2 group/doodle">

            {/* Hand-Drawn Floating Category-Specific Doodle Icon (Top Left - GPU CSS) */}
            <div 
              style={{ animation: "heroFloat1 4s ease-in-out infinite" }}
              className="absolute -top-7 -left-9 hidden sm:block pointer-events-none"
            >
              {doodleIcons.iconLeft}
            </div>

            {/* Hand-Drawn Floating Category-Specific Doodle Icon (Top Right - GPU CSS) */}
            <div 
              style={{ animation: "heroFloat1 3.2s ease-in-out infinite reverse" }}
              className="absolute -top-6 -right-9 hidden sm:block pointer-events-none"
            >
              {doodleIcons.iconRight}
            </div>

            {/* Hand-Drawn Floating Accent Doodle Icon (Bottom Right - GPU CSS) */}
            <div 
              style={{ animation: "spin 12s linear infinite" }}
              className="absolute -bottom-3 -right-8 hidden sm:block pointer-events-none"
            >
              {doodleIcons.iconAccent}
            </div>

            {/* 3D OUTLINE DOODLE BUBBLE TITLE */}
            <h2 
              className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-serif font-black tracking-wide uppercase leading-[1.1] select-none text-white relative z-10 max-w-full break-words"
              style={{
                WebkitTextStroke: "2px #6e019c",
                textShadow: "3px 3px 0px #3b0057, 5px 5px 0px rgba(110, 1, 156, 0.4)",
              }}
            >
              {genre.title}
            </h2>

            {/* HAND-DRAWN SQUIGGLY DOODLE UNDERLINE STROKE */}
            <div className="mt-2.5 w-full max-w-[280px] sm:max-w-[380px] relative">
              <svg className="w-full h-4 text-purple-400 stroke-current fill-none overflow-visible" viewBox="0 0 300 16" preserveAspectRatio="none">
                <path d="M 4 8 Q 45 1, 90 12 T 180 8 T 296 10" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 12 12 Q 55 5, 100 14 T 190 11 T 285 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
              </svg>
            </div>

          </div>
        </div>
      </div>

      {/* Main Orbit Stage */}
      {isLastSection ? (
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-6 min-h-[460px] my-4">
          {/* Stacked Cards & Phone Mockup */}
          <div className="relative z-10 flex scale-85 sm:scale-95 lg:scale-[0.82] origin-center pointer-events-auto">
            <StackedCardDeckDisplay 
              clients={genre.clients}
              selectedIndex={selectedClientIndex} 
              onOpenShowcase={onOpenShowcase} 
            />
          </div>

          {/* 3D Orbit Stage (3D Globe + Revolving Satellite Logos) */}
          <div 
            className="flex flex-col items-center justify-center relative select-none mx-auto z-20 w-full max-w-[550px]"
            style={{ minHeight: "clamp(260px, 38vh, 460px)", maxHeight: "clamp(260px, 38vh, 460px)" }}
          >
            {/* CENTRAL ENLARGED 3D GLOBE IMAGE DISPLAY */}
            <div className="relative z-[20] flex items-center justify-center pointer-events-none">
              {/* Background Glow Div */}
              <div className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-purple-600/25 blur-3xl pointer-events-none" />
              
              {genre.image ? (
                <div
                  style={{ animation: "heroFloat1 5s ease-in-out infinite" }}
                  className="relative w-48 h-48 sm:w-68 sm:h-68 md:w-76 md:h-76 rounded-3xl flex items-center justify-center group cursor-pointer z-[20] pointer-events-auto transform-gpu"
                  onClick={() => onOpenShowcase(selectedClient)}
                >
                  <img 
                    src={genre.image} 
                    alt={`${genre.title} 3D`} 
                    decoding="async"
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : null}
            </div>

            {/* REVOLVING CLIENT SATELLITE NODES */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {genre.clients.map((client, idx) => {
                const isSelected = idx === selectedClientIndex;
                const IconComp = client.icon || Sparkles;

                return (
                  <div
                    key={client.client}
                    ref={(el) => { badgeRefs.current[idx] = el; }}
                    data-selected={isSelected}
                    onMouseEnter={() => {
                      hoveredIdxRef.current = idx;
                      if (selectedIndexRef.current !== idx) {
                        setSelectedClientIndex(idx);
                      }
                    }}
                    onMouseLeave={() => { hoveredIdxRef.current = null; }}
                    onClick={() => {
                      if (selectedIndexRef.current !== idx) {
                        setSelectedClientIndex(idx);
                      }
                      onOpenShowcase(client);
                    }}
                    className="absolute pointer-events-auto cursor-pointer group"
                    style={{
                      willChange: "transform, opacity",
                    }}
                  >
                    <div className="flex flex-col items-center gap-1 sm:gap-1.5 group">
                      <div 
                        className={`relative w-12 h-12 sm:w-18 sm:h-18 rounded-full border-2 p-0.5 flex items-center justify-center transform-gpu shadow-xl overflow-hidden ${
                          isSelected
                            ? "border-purple-300 ring-4 ring-purple-500/50 shadow-purple-500/80 z-30"
                            : "border-purple-500/50 group-hover:border-purple-300 group-hover:shadow-purple-500/50"
                        } ${client.logoBg || "bg-white"}`}
                      >
                        {client.logoImg ? (
                          <img 
                            src={client.logoImg} 
                            alt={client.client} 
                            className={`w-full h-full object-contain rounded-full ${client.logoScale || "scale-125 p-1.5"}`} 
                          />
                        ) : client.initials ? (
                          <div className={`w-full h-full flex items-center justify-center font-black font-sans text-xs sm:text-xl tracking-tighter ${isSelected ? "bg-[#6e019c] text-white" : "bg-purple-950 text-purple-200"}`}>
                            {client.initials}
                          </div>
                        ) : (
                          <div className={`w-full h-full flex items-center justify-center bg-white ${isSelected ? "text-purple-600 font-extrabold" : "text-purple-900"}`}>
                            <IconComp className="w-5 h-5 sm:w-8 sm:h-8 stroke-[2.2]" />
                          </div>
                        )}
                      </div>

                      <span className={`text-[9px] sm:text-xs font-bold font-sans tracking-tight px-2 py-0.5 rounded-full border shadow-md whitespace-nowrap ${
                        isSelected 
                          ? "bg-purple-600 text-white border-purple-300 shadow-purple-500/50" 
                          : "bg-slate-900/95 text-purple-200 border-purple-500/50 group-hover:border-purple-300"
                      }`}>
                        {client.subLabel || client.client}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 flex-1 min-h-0">
          {/* 3D Orbit Stage */}
          <div className={`w-full md:w-7/12 flex flex-col items-center justify-center relative select-none ${
            isEven ? "md:order-1" : "md:order-2"
          }`}
            style={{ minHeight: "clamp(250px, 36vh, 440px)", maxHeight: "clamp(250px, 36vh, 440px)" }}
          >
            {/* CENTRAL ENLARGED 3D IMAGE DISPLAY */}
            <div className="relative z-[20] flex items-center justify-center pointer-events-none">
              {/* Background Glow Div */}
              <div className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-purple-600/25 blur-3xl pointer-events-none" />
              
              {genre.image ? (
                <div
                  style={{ animation: "heroFloat1 5s ease-in-out infinite" }}
                  className="relative w-48 h-48 sm:w-68 sm:h-68 md:w-76 md:h-76 rounded-3xl flex items-center justify-center group cursor-pointer z-[20] pointer-events-auto transform-gpu"
                  onClick={() => onOpenShowcase(selectedClient)}
                >
                  <img 
                    src={genre.image} 
                    alt={`${genre.title} 3D`} 
                    decoding="async"
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : null}
            </div>

            {/* REVOLVING CLIENT SATELLITE NODES */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {genre.clients.map((client, idx) => {
                const isSelected = idx === selectedClientIndex;
                const IconComp = client.icon || Sparkles;

                return (
                  <div
                    key={client.client}
                    ref={(el) => { badgeRefs.current[idx] = el; }}
                    data-selected={isSelected}
                    onMouseEnter={() => {
                      hoveredIdxRef.current = idx;
                      if (selectedIndexRef.current !== idx) {
                        setSelectedClientIndex(idx);
                      }
                    }}
                    onMouseLeave={() => { hoveredIdxRef.current = null; }}
                    onClick={() => {
                      if (selectedIndexRef.current !== idx) {
                        setSelectedClientIndex(idx);
                      }
                      onOpenShowcase(client);
                    }}
                    className="absolute pointer-events-auto cursor-pointer group"
                    style={{
                      willChange: "transform, opacity",
                    }}
                  >
                    <div className="flex flex-col items-center gap-1 sm:gap-1.5 group">
                      <div 
                        className={`relative w-12 h-12 sm:w-18 sm:h-18 rounded-full border-2 p-0.5 flex items-center justify-center transform-gpu shadow-xl overflow-hidden ${
                          isSelected
                            ? "border-purple-300 ring-4 ring-purple-500/50 shadow-purple-500/80 z-30"
                            : "border-purple-500/50 group-hover:border-purple-300 group-hover:shadow-purple-500/50"
                        } ${client.logoBg || "bg-white"}`}
                      >
                        {client.logoImg ? (
                          <img 
                            src={client.logoImg} 
                            alt={client.client} 
                            className={`w-full h-full object-contain rounded-full ${client.logoScale || "scale-125 p-1.5"}`} 
                          />
                        ) : client.initials ? (
                          <div className={`w-full h-full flex items-center justify-center font-black font-sans text-xs sm:text-xl tracking-tighter ${isSelected ? "bg-[#6e019c] text-white" : "bg-purple-950 text-purple-200"}`}>
                            {client.initials}
                          </div>
                        ) : (
                          <div className={`w-full h-full flex items-center justify-center bg-white ${isSelected ? "text-purple-600 font-extrabold" : "text-purple-900"}`}>
                            <IconComp className="w-5 h-5 sm:w-8 sm:h-8 stroke-[2.2]" />
                          </div>
                        )}
                      </div>

                      <span className={`text-[9px] sm:text-xs font-bold font-sans tracking-tight px-2 py-0.5 rounded-full border shadow-md whitespace-nowrap ${
                        isSelected 
                          ? "bg-purple-600 text-white border-purple-300 shadow-purple-500/50" 
                          : "bg-slate-900/95 text-purple-200 border-purple-500/50 group-hover:border-purple-300"
                      }`}>
                        {client.subLabel || client.client}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stacked Card Deck Display (Cards + Phone Mockup) */}
          <div className={`w-full md:w-5/12 flex flex-col justify-center items-center scale-90 sm:scale-100 ${
            isEven ? "md:order-2" : "md:order-1"
          }`}>
            <StackedCardDeckDisplay 
              clients={genre.clients}
              selectedIndex={selectedClientIndex} 
              onOpenShowcase={onOpenShowcase} 
            />
          </div>
        </div>
      )}
    </div>
  );
});

// ── INTERACTIVE MESH NET CANVAS BACKGROUND COMPONENT ──
function InteractiveMeshNet() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768 || ("ontouchstart" in window && navigator.maxTouchPoints > 0);
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let isVisible = true;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animId) {
            animId = requestAnimationFrame(render);
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
      initMesh();
    };
    window.addEventListener("resize", handleResize);

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
    window.addEventListener("mouseleave", handleMouseLeave);

    const spacing = 36;
    let cols = 0;
    let rows = 0;
    let nodes: { baseX: number; baseY: number; x: number; y: number }[] = [];

    const initMesh = () => {
      nodes = [];
      cols = Math.ceil(width / spacing) + 1;
      rows = Math.ceil(height / spacing) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const baseX = c * spacing;
          const baseY = r * spacing;
          nodes.push({
            baseX,
            baseY,
            x: baseX,
            y: baseY,
          });
        }
      }
    };
    initMesh();

    const startTime = performance.now();

    const render = (now: number) => {
      if (!isVisible) {
        animId = 0;
        return;
      }

      const elapsed = now - startTime;
      ctx.clearRect(0, 0, width, height);

      // 1. Update node physics positions (gentle idle wave + mouse fluid mesh distortion)
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Idle organic ambient wave motion across the mesh
        const waveY = Math.sin(elapsed * 0.0016 + node.baseX * 0.008 + node.baseY * 0.008) * 5;
        const waveX = Math.cos(elapsed * 0.0014 + node.baseX * 0.006 - node.baseY * 0.006) * 4;

        let targetX = node.baseX + waveX;
        let targetY = node.baseY + waveY;

        // Fast & liquid net displacement on mouse hover
        if (mouse.active) {
          const dx = mouse.x - node.baseX;
          const dy = mouse.y - node.baseY;
          const dist = Math.hypot(dx, dy);

          if (dist < 290) {
            const force = (1 - dist / 290);
            const ripple = Math.sin(dist * 0.032 - elapsed * 0.006) * force * 65;
            const angle = Math.atan2(dy, dx);
            targetX -= Math.cos(angle) * ripple;
            targetY -= Math.sin(angle) * ripple;
          }
        }

        // Fast & Ultra-Smooth 120fps Silk Lerp Easing Factor
        node.x += (targetX - node.x) * 0.135;
        node.y += (targetY - node.y) * 0.135;
      }

      // 2. Draw Mesh Net Lines (batched into single path for max performance)
      ctx.beginPath();
      ctx.strokeStyle = "rgba(110, 1, 156, 0.18)";
      ctx.lineWidth = 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = r * cols + c;
          const node = nodes[idx];

          // Horizontal right connector
          if (c < cols - 1) {
            const rightNode = nodes[r * cols + (c + 1)];
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(rightNode.x, rightNode.y);
          }

          // Vertical bottom connector
          if (r < rows - 1) {
            const bottomNode = nodes[(r + 1) * cols + c];
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(bottomNode.x, bottomNode.y);
          }
        }
      }
      ctx.stroke();

      // 3. Draw Mesh Junction Dots
      ctx.fillStyle = "rgba(168, 85, 247, 0.4)";
      for (let i = 0; i < nodes.length; i += 2) {
        const node = nodes[i];
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}

// ── ANIMATED NUMBER COUNT UP STAT COMPONENT ──
function CountUpNumber({ 
  value, 
  suffix = "", 
  decimals = 0 
}: { 
  value: number; 
  suffix?: string; 
  decimals?: number 
}) {
  const [displayVal, setDisplayVal] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayVal(latest.toFixed(decimals));
      }
    });
    return () => controls.stop();
  }, [isInView, value, decimals]);

  return <span ref={ref}>{displayVal}{suffix}</span>;
}

// ── DOTTED SCROLL-DRIVEN TRACE PATH COMPONENT ──
function DottedScrollTracePath({ 
  totalSections,
  showcaseRef
}: { 
  totalSections: number;
  showcaseRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start 75%", "end 60%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    mass: 0.15,
    restDelta: 0.001,
  });

  // Build winding S-curve SVG path string connecting alternating title locations, ending in exact middle (500) over 3D Globe image
  const { pathD, endPoint } = React.useMemo(() => {
    if (totalSections <= 0) return { pathD: "", endPoint: { x: 500, y: 950 } };
    const points: { x: number; y: number }[] = [];
    const heightStep = 1000 / totalSections;

    for (let i = 0; i < totalSections; i++) {
      const y = (i + 0.5) * heightStep;
      // Last section ends in exact horizontal center (x: 500) directly over the central 3D globe image
      const isLast = i === totalSections - 1;
      const x = isLast ? 500 : i % 2 === 0 ? 130 : 870;
      points.push({ x, y });
    }

    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];
      const midY = (curr.y + next.y) / 2;
      d += ` C ${curr.x} ${midY}, ${next.x} ${midY}, ${next.x} ${next.y}`;
    }
    return { pathD: d, endPoint: points[points.length - 1] };
  }, [totalSections]);

  if (isMobile) return null;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          {/* SVG Mask: Solid white stroke expands down the path with scroll, revealing the small doodle dots! */}
          <mask id="dotted-trace-reveal-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="1000">
            <motion.path
              d={pathD}
              stroke="white"
              strokeWidth="50"
              fill="none"
              strokeLinecap="round"
              style={{ pathLength: smoothProgress }}
            />
          </mask>
        </defs>

        {/* Small Doodly Dotted Line (Progressively draws dot-by-dot, ending over central 3D globe) */}
        <path
          d={pathD}
          stroke="#8b5cf6"
          strokeWidth="2.2"
          strokeDasharray="2.5 5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          mask="url(#dotted-trace-reveal-mask)"
          opacity={0.92}
        />

        {/* Doodle Sparkle Target Icon right over center of 3D globe image where trace ends */}
        {endPoint && (
          <g transform={`translate(${endPoint.x - 12}, ${endPoint.y - 12})`}>
            <path
              d="M 12 2 L 14 9 L 21 12 L 14 15 L 12 22 L 10 15 L 3 12 L 10 9 Z"
              stroke="#fbbf24"
              strokeWidth="2"
              fill="rgba(251, 191, 36, 0.4)"
              mask="url(#dotted-trace-reveal-mask)"
              style={{ transformOrigin: "12px 12px", animation: "spin 10s linear infinite" }}
            />
          </g>
        )}
      </svg>
    </div>
  );
}

export default function PortfolioPage() {
  const [activeModalClient, setActiveModalClient] = useState<ClientItem | null>(null);
  const [hoverLead, setHoverLead] = useState(false);
  const showcaseRef = useRef<HTMLDivElement>(null);

  // Initialize Lenis smooth scroll (120fps fluid wheel inertia)
  useEffect(() => {
    document.documentElement.classList.add("dark");
    const isTouch = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const lenis = new Lenis({
      duration: 0.42,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.25,
      touchMultiplier: isTouch ? 0 : 1.0,
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
          logoImg: "/zystraClientLogo/VedikaCure.webp",
          icon: Leaf
        },
        {
          client: "Warecare Herbal",
          industry: "Herbal Healthcare",
          whatWeDid: "Brand identity and digital presence strategy positioning Warecare as a trusted name in herbal healthcare solutions.",
          result: "140% increase in product inquiries",
          logoImg: "/zystraClientLogo/warecare-logo.webp",
          icon: Sparkles
        },
        {
          client: "VedSaathi Herbal",
          industry: "Herbal Wellness",
          whatWeDid: "E-commerce-ready website design, product photography direction, and performance marketing for herbal wellness product lines.",
          result: "350+ new customer acquisitions per month",
          logoImg: "/zystraClientLogo/VedSaathi Herbal Vector logo png.webp",
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
          logoImg: "/zystraClientLogo/AASTHA _ LOGO.webp",
          icon: Activity
        },
        {
          client: "Raja Medical",
          industry: "Healthcare Retail",
          whatWeDid: "Local search optimisation and online visibility strategy to capture nearby customer demand.",
          result: "115% increase in store direction queries on maps",
          logoImg: "/zystraClientLogo/Raja Medical PNG.webp",
          icon: Stethoscope
        },
        {
          client: "Raja Pharma",
          industry: "Pharma Retail",
          whatWeDid: "Local SEO and Google Business Profile management to improve near-me search visibility for the pharmacy.",
          result: "Top 3 ranking for near-me pharmacy search terms",
          logoImg: "/zystraClientLogo/Raja-Pharma.webp",
          icon: Pill
        },
        {
          client: "Dr. S. Hussain & Samadhan Hospital",
          industry: "Multispecialty Hospital",
          whatWeDid: "Comprehensive hospital digital branding, doctor profile authority, and emergency inquiry routing.",
          result: "4.8★ rating with +300 monthly inquiries",
          logoImg: "/zystraClientLogo/Dr S Hussain.webp",
          icon: HeartHandshake
        },
        {
          client: "रमण डायग्नोस्टिक सेंटर",
          industry: "Pathology & Diagnostics",
          whatWeDid: "Diagnostic lab local SEO, home collection booking funnel, and Google Business Profile management.",
          result: "180% increase in monthly diagnostic test bookings",
          logoImg: "/zystraClientLogo/raman.webp",
          subLabel: "रमण डायग्नोस्टिक सेंटर",
          icon: Syringe
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
          logoImg: "/zystraClientLogo/JawedHabib.webp",
          subLabel: "Mithapur",
          icon: Scissors
        },
        {
          client: "Jawed Habib — Aashiana",
          industry: "Salon Chain",
          whatWeDid: "Google Business Profile optimisation and targeted social content to grow walk-in traffic and online bookings.",
          result: "80% growth in maps profile views and call clicks",
          logoImg: "/zystraClientLogo/JawedHabib.webp",
          subLabel: "Aashiana",
          icon: Scissors
        },
        {
          client: "Jawed Habib — Gola Road",
          industry: "Salon Chain",
          whatWeDid: "Branch-specific local SEO and social media management to build visibility and drive consistent appointment bookings.",
          result: "Top 3 local search ranking for premium hair care",
          logoImg: "/zystraClientLogo/JawedHabib.webp",
          subLabel: "Gola Road",
          icon: Scissors
        },
        {
          client: "Jawed Habib — Ara / Arrah",
          industry: "Salon Chain",
          whatWeDid: "New branch launch campaign, influencer tie-ups, and grand opening promotions.",
          result: "Over 500+ client walk-ins during launch week",
          logoImg: "/zystraClientLogo/JawedHabib.webp",
          subLabel: "Ara",
          icon: Scissors
        },
        {
          client: "Jawed Habib — Bhoothnath",
          industry: "Salon Chain",
          whatWeDid: "Social media content management and local search optimisation to support consistent client acquisition.",
          result: "65% increase in monthly appointment bookings",
          logoImg: "/zystraClientLogo/JawedHabib.webp",
          subLabel: "Bhoothnath",
          icon: Scissors
        },
        {
          client: "Vachi Boutique",
          industry: "Fashion & Lifestyle",
          whatWeDid: "E-commerce catalog showcase, Instagram shop setup, and luxury saree branding.",
          result: "240% growth in direct online inquiries",
          logoImg: "/zystraClientLogo/vaachi.webp",
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
          logoImg: "/zystraClientLogo/miracleIT.webp",
          icon: GraduationCap
        },
        {
          client: "Cursor Academy",
          industry: "Digital Marketing Education",
          whatWeDid: "Full brand build, landing page design, and content strategy to position the academy as a premier learning destination.",
          result: "3.5x conversion rate on demo class registrations",
          link: "https://cursorseo.com",
          logoImg: "/zystraClientLogo/CursorAcademy.webp",
          icon: GraduationCap
        },
        {
          client: "Maulana Azad Educational Trust",
          industry: "Educational Academy & Trust",
          whatWeDid: "Institutional digital branding, student enrollment funnels, and campus digital authority strategy.",
          result: "220% increase in student admission inquiries",
          logoImg: "/zystraClientLogo/Maulana-Azad.webp",
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
          logoImg: "/zystraClientLogo/shrinika.webp",
          logoScale: "scale-[2.4]",
          icon: Sun
        },
        {
          client: "Hind Solar",
          industry: "Rooftop Solar",
          whatWeDid: "Performance marketing and lead generation campaigns across Meta and Google Ads, optimised for solar purchase intent.",
          result: "120+ qualified solar consultation leads per month",
          logoImg: "/zystraClientLogo/hindSolar.webp",
          icon: Sun
        },
        {
          client: "Aastha Solar",
          industry: "Solar Energy Solutions",
          whatWeDid: "Targeted lead-generation ad campaigns and local visibility strategy built around solar consultation.",
          result: "Average cost-per-lead reduced by 42%",
          logoImg: "/zystraClientLogo/astha-solar.webp",
          icon: Zap
        },
        {
          client: "Shining Source Pvt Ltd",
          industry: "Renewable Energy",
          whatWeDid: "Corporate brand identity, industrial solar project portfolio, and investor presentation collateral.",
          result: "Secured 4 major industrial solar EPC contracts",
          logoImg: "/zystraClientLogo/Shining-Source.webp",
          logoScale: "scale-[2.4]",
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
          logoImg: "/zystraClientLogo/SUCCESS COOL SERVICE _ LOGO.webp",
          icon: Wrench
        },
        {
          client: "Sahil AC Service",
          industry: "AC Repair & Maintenance",
          whatWeDid: "Local SEO and Google Business Profile management to improve visibility for customers searching for AC repair.",
          result: "95% increase in monthly local AC repair call inquiries",
          logoImg: "/zystraClientLogo/SAHIL SERVICE _ LOGO.webp",
          logoBg: "bg-black",
          icon: Wrench
        },
        {
          client: "Perfect Cool Air",
          industry: "AC Installation",
          whatWeDid: "Commercial & residential HVAC service branding and customer feedback loop management.",
          result: "4.9★ rating across 300+ Google reviews",
          logoImg: "/zystraClientLogo/perfect-cool.png",
          logoScale: "scale-110",
          icon: Wrench
        },
        {
          client: "Summer Cool Technology",
          industry: "Appliance Tech",
          whatWeDid: "Google Business Profile setup and local SEO strategy to strengthen visibility during peak seasonal demand.",
          result: "210% increase in seasonal AC maintenance lead volume",
          logoImg: "/zystraClientLogo/summer-cool.webp",
          icon: Sun
        },
        {
          client: "Ac Experts Services",
          industry: "Home Utility Services",
          whatWeDid: "Multi-city local service SEO and instant call-now button lead funnels.",
          result: "Over 1,200+ leads generated per season",
          logoImg: "/zystraClientLogo/AcExpertServices.webp",
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
          logoImg: "/zystraClientLogo/sanatani.webp",
          logoScale: "scale-[2.0]",
          icon: Utensils
        },
        {
          client: "Anand Tours",
          industry: "Travel & Tour Operator",
          whatWeDid: "Website development, SEO content strategy, and performance marketing campaigns targeting holiday seekers.",
          result: "150+ group tour bookings confirmed",
          logoImg: "/zystraClientLogo/AnandTours.webp",
          icon: Plane
        },
        {
          client: "Saanvi Human Resources",
          industry: "Hospitality & HR Management",
          whatWeDid: "Human resources branding, talent acquisition portal, and hospitality staffing lead generation.",
          result: "250+ hospitality placements & corporate contracts",
          logoImg: "/zystraClientLogo/saanvi.webp",
          icon: UserCheck
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
          logoImg: "/zystraClientLogo/homeStyle.webp",
          icon: Home
        },
        {
          client: "M Brothers & Sons",
          industry: "Construction Contractor",
          whatWeDid: "Commercial construction branding, project milestone showcases, and architect B2B outreach.",
          result: "125% increase in high-budget construction inquiries",
          logoImg: "/zystraClientLogo/M-Brothers.webp",
          icon: Building2
        },
        {
          client: "R. Laxmi Screens",
          industry: "Architectural Screens",
          whatWeDid: "Product catalog web app, architect partnership campaign, and WhatsApp catalog integration.",
          result: "3.4x growth in architect inquiries",
          logoImg: "/zystraClientLogo/Rlaxmilogo.webp",
          icon: ShieldAlert
        },
        {
          client: "Creative Maps",
          industry: "Architectural Planning",
          whatWeDid: "2D/3D floor plan marketing, digital consultation booking, and municipal approval branding.",
          result: "80+ custom house map designs delivered monthly",
          logoImg: "/zystraClientLogo/creativeMaps.webp",
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
          logoImg: "/zystraClientLogo/Kamiko.webp",
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
          logoImg: "/zystraClientLogo/ANAV _ LOGO.webp",
          icon: Sparkles
        },
        {
          client: "Avain Corps",
          industry: "Corporate Enterprise",
          whatWeDid: "Strategic corporate re-branding, executive communications, and investor pitch deck.",
          result: "Successfully secured Series-A growth funding",
          logoImg: "/zystraClientLogo/Avain.webp",
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
          logoImg: "/zystraClientLogo/MLA.webp",
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
          icon: Video
        },
        {
          client: "All About Giggles (UAE)",
          industry: "Family Entertainment (UAE)",
          whatWeDid: "International social media management and brand content strategy positioning the brand as a premier choice in the UAE.",
          result: "180% growth in UAE Instagram inquiries & bookings",
          logoImg: "/zystraClientLogo/All About Giggles _ LOGO.webp",
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
        description="Explore Zystra's portfolio across healthcare, beauty, solar, education &amp; more. Real brands, real growth, powered by AI-driven marketing strategy."
        canonicalUrl="https://zystra.in/portfolio"
        schema={seoSchema}
      />

      <Navbar />

      <main className="relative z-10 pb-20 overflow-x-hidden w-full">

        {/* ═══════════════════════════════════════════════════════════
            HERO SECTION — FRAME 1: 100VH DEDICATED MOBILE SCREEN FRAME
            (Only Title Pills, 4 Social Logos & Client Moving Marquee)
        ═══════════════════════════════════════════════════════════ */}
        <section className="relative w-full min-h-[calc(100vh-20px)] sm:min-h-0 flex flex-col justify-between bg-white overflow-hidden pt-16 sm:pt-20 pb-0 sm:pb-10">

          {/* Interactive Mesh Net Canvas Background */}
          <InteractiveMeshNet />

          {/* Scattered accent dots — exact positions from reference */}
          <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-blue-500 opacity-70" />
          <div className="absolute top-40 left-6 w-2 h-2 rounded-full bg-blue-400 opacity-50" />
          <div className="absolute top-28 right-14 w-3.5 h-3.5 rounded-full bg-red-400 opacity-70" />
          <div className="absolute top-52 right-8 w-2.5 h-2.5 rounded-full bg-red-500 opacity-55" />
          <div className="absolute bottom-44 left-14 w-2.5 h-2.5 rounded-full bg-blue-400 opacity-60" />
          <div className="absolute bottom-28 left-8 w-1.5 h-1.5 rounded-full bg-blue-300 opacity-45" />
          <div className="absolute bottom-36 right-20 w-3 h-3 rounded-full bg-orange-400 opacity-55" />
          <div className="absolute top-1/2 right-6 w-2 h-2 rounded-full bg-pink-400 opacity-55" />
          <div className="absolute bottom-20 right-4 w-4 h-4 rounded-full bg-blue-500 opacity-60" />

          <div className="container mx-auto px-4 sm:px-8 max-w-5xl relative z-10 my-auto">

            {/* ═══ STAGGERED PILL HEADLINE BLOCK ═══ */}
            <div className="flex flex-col gap-2.5 sm:gap-2.5 mb-5 sm:mb-9 select-none">

              {/* ── ROW 1: "Brands" (white pill, Zystra purple border) + spinning text circle (top right) ── */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 sm:gap-4 w-full"
              >
                {/* "Brands" — white pill with Zystra purple border (Exchanges to Black on hover) */}
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "#09090b",
                    color: "#ffffff",
                    borderColor: "#a855f7",
                    boxShadow: "0 10px 32px rgba(168, 85, 247, 0.45)"
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="bg-white text-slate-900 shrink-0 cursor-pointer px-5 sm:px-8 py-1.5 sm:py-2.5 rounded-full border-[2.5px] border-[#6e019c] shadow-[0_4px_16px_rgba(110,1,156,0.12)]"
                >
                  <span
                    style={{
                      fontSize: "clamp(2.1rem, 7.2vw, 5.5rem)",
                      fontWeight: 900,
                      letterSpacing: "-0.03em",
                      lineHeight: 1.05,
                      fontFamily: "var(--app-font-serif)",
                    }}
                  >
                    Brands
                  </span>
                </motion.div>

                {/* Spinning text circular badge — top right corner */}
                <div className="ml-auto shrink-0">
                  <Link href="/contact" title="Get in touch with Zystra">
                    <div className="relative w-18 h-18 sm:w-28 sm:h-28 md:w-34 md:h-34 cursor-pointer group">
                      <svg
                        style={{ animation: "spin 18s linear infinite" }}
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 140 140"
                      >
                        <defs>
                          <path id="textCircleTop" d="M70,14 a56,56 0 1,1 -0.001,0" />
                        </defs>
                        <circle cx="70" cy="70" r="56" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeDasharray="5 5" />
                        <text fontSize="9.5" fill="#6e019c" fontFamily="var(--app-font-serif)" fontWeight="900" letterSpacing="0.04em">
                          <textPath href="#textCircleTop" startOffset="0%" textLength="348" lengthAdjust="spacingAndGlyphs">
                            WE WORK AS YOU NEED • THINK • CODE • GROW • 
                          </textPath>
                        </text>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          style={{ animation: "heroFloat1 3s ease-in-out infinite" }}
                          className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-100 to-purple-200/80 border border-purple-300 shadow-md flex items-center justify-center cursor-pointer group-hover:bg-[#6e019c] transition-colors"
                        >
                          <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6 text-[#6e019c] group-hover:text-white stroke-[3] transition-colors" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>

              {/* ── ROW 2: "We've Helped" (solid Zystra Vibrant Purple pill) + eye circle + social media badge ── */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2 sm:gap-4 ml-1 sm:ml-4"
              >
                {/* "We've Helped" — Zystra Signature Vibrant Purple Fill (Exchanges to White on hover) */}
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "#ffffff",
                    color: "#6e019c",
                    borderColor: "#6e019c",
                    boxShadow: "0 10px 32px rgba(110,1,156,0.3)"
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="text-white shrink-0 cursor-pointer bg-[#6e019c] px-5 sm:px-8 py-1.5 sm:py-2.5 rounded-full border-[2.5px] border-transparent shadow-[0_8px_30px_rgba(110,1,156,0.4)]"
                >
                  <span
                    style={{
                      fontSize: "clamp(2.1rem, 7.2vw, 5.5rem)",
                      fontWeight: 900,
                      letterSpacing: "-0.03em",
                      lineHeight: 1.05,
                      fontFamily: "var(--app-font-serif)",
                    }}
                  >
                    We've Helped
                  </span>
                </motion.div>

                {/* Small connector circle — white (Exchanges to Black on hover) */}
                <motion.div
                  whileHover={{ scale: 1.15, backgroundColor: "#09090b", borderColor: "#a855f7" }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="rounded-full bg-white border-2 border-purple-200 flex items-center justify-center shrink-0 shadow-sm cursor-pointer w-8 h-8 sm:w-12 sm:h-12"
                >
                  <div
                    className="rounded-full w-4 h-4 sm:w-6 sm:h-6"
                    style={{
                      background: "linear-gradient(135deg, #a855f7 0%, #6e019c 100%)"
                    }}
                  />
                </motion.div>

              </motion.div>

              {/* ── ROW 3: Helm circle + "Lead Industry" (white pill, Zystra purple dashed border) + yellow dot ── */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2 sm:gap-4"
              >
                {/* Helm/ship-wheel badge (Exchanges to Black on hover) */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 45, backgroundColor: "#09090b", borderColor: "#a855f7" }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="rounded-full bg-white border-2 border-purple-200 flex items-center justify-center shrink-0 shadow-md cursor-pointer w-9 h-9 sm:w-16 sm:h-16 md:w-18 md:h-18"
                >
                  <svg viewBox="0 0 48 48" className="w-5 h-5 sm:w-8 sm:h-8" fill="none">
                    <circle cx="24" cy="24" r="5" stroke="#6e019c" strokeWidth="2.5" fill="none"/>
                    <circle cx="24" cy="24" r="18" stroke="#6e019c" strokeWidth="2.5" fill="none"/>
                    {[0,45,90,135,180,225,270,315].map((deg) => (
                      <line
                        key={deg}
                        x1="24" y1="6"
                        x2="24" y2="19"
                        stroke="#6e019c"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        transform={`rotate(${deg} 24 24)`}
                      />
                    ))}
                  </svg>
                </motion.div>

                {/* "Lead Industry" / "DOMINATE..." — Moving Dotted Boundary Line Pill */}
                <motion.div
                  onMouseEnter={() => setHoverLead(true)}
                  onMouseLeave={() => setHoverLead(false)}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="shrink-0 cursor-pointer relative overflow-hidden transition-all duration-200 shadow-md px-5 sm:px-8 py-1.5 sm:py-2.5 rounded-full"
                  style={{
                    border: hoverLead ? "2.5px solid #a855f7" : "2.5px solid transparent",
                    background: hoverLead ? "#09090b" : "#ffffff",
                    boxShadow: hoverLead
                      ? "0 10px 32px rgba(168, 85, 247, 0.45)"
                      : "0 4px 16px rgba(168,85,247,0.12)"
                  }}
                >
                  {/* Continuously Moving Dotted Boundary Line (Exact Pill Boundary Geometry) */}
                  {!hoverLead && (
                    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                      <rect
                        x="1.25"
                        y="1.25"
                        width="calc(100% - 2.5px)"
                        height="calc(100% - 2.5px)"
                        rx="48"
                        ry="48"
                        fill="none"
                        stroke="#a855f7"
                        strokeWidth="2.5"
                        strokeDasharray="6 6"
                        style={{ animation: "industryFlow 1.6s linear infinite" }}
                      />
                    </svg>
                  )}

                  <AnimatePresence mode="wait">
                    {!hoverLead ? (
                      <motion.span
                        key="lead"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="block text-slate-900 select-none relative z-10"
                        style={{
                          fontSize: "clamp(2.1rem, 7.2vw, 5.5rem)",
                          fontWeight: 900,
                          letterSpacing: "-0.03em",
                          lineHeight: 1.05,
                          fontFamily: "var(--app-font-serif)",
                        }}
                      >
                        Lead Industry
                      </motion.span>
                    ) : (
                      <motion.span
                        key="dominate"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="block uppercase tracking-wider select-none relative z-10"
                        style={{
                          fontSize: "clamp(2.1rem, 7.2vw, 5.5rem)",
                          fontWeight: 900,
                          letterSpacing: "0.02em",
                          lineHeight: 1.05,
                          fontFamily: "var(--app-font-serif)",
                          background: "linear-gradient(135deg, #ffffff 35%, #d8b4fe 75%, #c084fc 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent"
                        }}
                      >
                        DOMINATE...
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Yellow dot */}
                <div
                  className="rounded-full shrink-0 w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-1.5"
                  style={{
                    background: "#fbbf24",
                    boxShadow: "0 0 10px rgba(251,191,36,0.6)",
                  }}
                />
              </motion.div>

              {/* ── ROW 4: 3D Social Media Icon Circles (Alternating Black & White Backgrounds) ── */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 sm:gap-3 ml-2 sm:ml-20 mt-2 sm:mt-0"
              >
                {/* 3D Instagram Circle — Black Background -> Hover: White Background */}
                {/* 3D Instagram Circle — Black Background -> Hover: White Background */}
                <div
                  style={{ animation: "heroFloat1 3.2s ease-in-out infinite" }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.14,
                      rotate: 6,
                      backgroundColor: "#ffffff",
                      borderColor: "#0f172a",
                      boxShadow: "0 12px 32px rgba(15,23,42,0.25)"
                    }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="rounded-full shrink-0 flex items-center justify-center p-2.5 sm:p-2.5 cursor-pointer w-15 h-15 sm:w-18 sm:h-18"
                    style={{
                      backgroundColor: "#09090b",
                      border: "3px solid #6e019c",
                      boxShadow: "0 8px 24px rgba(9,9,11,0.3)"
                    }}
                  >
                    <img src="/heroBgImg/insta.png" alt="Instagram 3D" className="w-full h-full object-contain filter drop-shadow-md" />
                  </motion.div>
                </div>

                {/* 3D Meta Circle — White Background -> Hover: Black Background */}
                <div
                  style={{ animation: "heroFloat1 3.5s ease-in-out infinite reverse" }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.14,
                      rotate: -6,
                      backgroundColor: "#09090b",
                      borderColor: "#6e019c",
                      boxShadow: "0 12px 32px rgba(110,1,156,0.4)"
                    }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="rounded-full shrink-0 flex items-center justify-center p-2.5 sm:p-2.5 cursor-pointer w-15 h-15 sm:w-18 sm:h-18"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "3px solid #0f172a",
                      boxShadow: "0 8px 24px rgba(15,23,42,0.15)"
                    }}
                  >
                    <img src="/heroBgImg/meta.png" alt="Meta 3D" className="w-full h-full object-contain filter drop-shadow-md" />
                  </motion.div>
                </div>

                {/* 3D YouTube Circle — Black Background -> Hover: White Background */}
                <div
                  style={{ animation: "heroFloat1 3.8s ease-in-out infinite" }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.14,
                      rotate: 6,
                      backgroundColor: "#ffffff",
                      borderColor: "#0f172a",
                      boxShadow: "0 12px 32px rgba(15,23,42,0.25)"
                    }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="rounded-full shrink-0 flex items-center justify-center p-2.5 sm:p-2.5 cursor-pointer w-15 h-15 sm:w-18 sm:h-18"
                    style={{
                      backgroundColor: "#09090b",
                      border: "3px solid #6e019c",
                      boxShadow: "0 8px 24px rgba(9,9,11,0.3)"
                    }}
                  >
                    <img src="/heroBgImg/youtube.png" alt="YouTube 3D" className="w-full h-full object-contain filter drop-shadow-md" />
                  </motion.div>
                </div>

                {/* 3D LinkedIn Circle — White Background -> Hover: Black Background */}
                <div
                  style={{ animation: "heroFloat1 3.4s ease-in-out infinite reverse" }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.14,
                      rotate: -6,
                      backgroundColor: "#09090b",
                      borderColor: "#6e019c",
                      boxShadow: "0 12px 32px rgba(110,1,156,0.4)"
                    }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="rounded-full shrink-0 flex items-center justify-center p-2.5 sm:p-2.5 cursor-pointer w-15 h-15 sm:w-18 sm:h-18"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "3px solid #0f172a",
                      boxShadow: "0 8px 24px rgba(15,23,42,0.15)"
                    }}
                  >
                    <img src="/heroBgImg/linkedIn.png" alt="LinkedIn 3D" className="w-full h-full object-contain filter drop-shadow-md" />
                  </motion.div>
                </div>
              </motion.div>

            </div>

          </div>

          {/* ═══ CLIENT LOGO MARQUEE — Pinned to Bottom of Frame 1 ═══ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative w-screen left-1/2 -translate-x-1/2 border-y border-slate-200 bg-slate-50/70 py-4 sm:py-6 mt-auto mb-0 sm:mb-14 overflow-hidden select-none"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)"
            }}
          >
            <div
              className="flex items-center gap-12 sm:gap-20 whitespace-nowrap w-max animate-marquee-gpu"
              style={{
                willChange: "transform",
                transform: "translate3d(0,0,0)",
                WebkitTransform: "translate3d(0,0,0)"
              }}
            >
              {[
                { name: "Vedikacure", style: "font-sans font-black text-slate-800 text-lg tracking-tight" },
                { name: "Jawed Habib", style: "font-serif italic font-semibold text-slate-700 text-lg tracking-wide" },
                { name: "Astha Solar", style: "font-mono font-black text-slate-800 text-base tracking-widest" },
                { name: "MLA Hardev Singh", style: "font-sans font-black text-slate-900 text-base uppercase tracking-tight" },
                { name: "AcExpert Services", style: "font-sans font-black text-slate-800 text-lg tracking-tighter" },
                { name: "Sanatani Flavour", style: "font-sans font-extrabold text-slate-800 text-base" },
                { name: "Home Style Studio", style: "font-mono font-black text-slate-800 text-base" },
                { name: "M Brothers & Sons", style: "font-sans font-black text-slate-900 text-base uppercase" },
                { name: "Vedikacure", style: "font-sans font-black text-slate-800 text-lg tracking-tight" },
                { name: "Jawed Habib", style: "font-serif italic font-semibold text-slate-700 text-lg tracking-wide" },
                { name: "Astha Solar", style: "font-mono font-black text-slate-800 text-base tracking-widest" },
                { name: "MLA Hardev Singh", style: "font-sans font-black text-slate-900 text-base uppercase tracking-tight" },
                { name: "AcExpert Services", style: "font-sans font-black text-slate-800 text-lg tracking-tighter" },
                { name: "Sanatani Flavour", style: "font-sans font-extrabold text-slate-800 text-base" },
                { name: "Home Style Studio", style: "font-mono font-black text-slate-800 text-base" },
                { name: "M Brothers & Sons", style: "font-sans font-black text-slate-900 text-base uppercase" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-12 sm:gap-20">
                  <span className={`${item.style} hover:text-purple-600 transition-colors cursor-default`}>
                    {item.name}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 shrink-0 shadow-sm" />
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            HERO SECTION — FRAME 2: STATS & CTA CARDS
            (Zystra Theme Gradient Mesh + Animated Number Counters + Mobile 2-1-1 Layout)
        ═══════════════════════════════════════════════════════════ */}
        <div className="container mx-auto px-4 sm:px-8 max-w-6xl relative z-10 pt-10 pb-16 sm:py-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 items-stretch"
          >

            {/* Card 1: Zystra Deep Purple Mesh Gradient Card (2x Less Time) — Mobile Line 1 (Left) */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="col-span-1 relative rounded-[32px] overflow-hidden p-5 sm:p-7 bg-gradient-to-br from-[#6e019c] via-[#4c1d95] to-[#1e1b4b] text-white shadow-xl shadow-purple-950/20 flex flex-col justify-between min-h-[230px] sm:min-h-[260px] group cursor-default border border-purple-400/30"
            >
              {/* Overlapping Glass Mesh Circles */}
              <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-cyan-400/30 blur-xl pointer-events-none opacity-50" />
              <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-purple-400/30 blur-2xl pointer-events-none opacity-40" />

              {/* Card Top Row: 3-line wave icon + action indicator */}
              <div className="relative z-10 flex items-center justify-between">
                <svg className="w-5 h-4 sm:w-6 sm:h-5 text-white/90 stroke-[2.5]" viewBox="0 0 24 18" fill="none">
                  <path d="M2 3H16M2 9H22M2 15H12" stroke="currentColor" strokeLinecap="round" />
                </svg>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
                </div>
              </div>

              {/* Card Bottom-Left Content (Exact Reference Layout + Animated Counter) */}
              <div className="relative z-10 mt-6 sm:mt-8">
                <div className="text-4xl sm:text-6xl font-black font-sans tracking-tight text-white leading-none drop-shadow-md">
                  <CountUpNumber value={2} suffix="x" /><span className="text-xl sm:text-2xl font-light opacity-80">°</span>
                </div>
                <p className="text-[10px] sm:text-xs font-mono uppercase text-purple-200 font-bold tracking-widest mt-2">
                  Less Time
                </p>
                <p className="text-[11px] sm:text-sm font-semibold text-white/90 mt-1 leading-snug drop-shadow-sm">
                  Spent on Growth-Ready Strategy
                </p>
              </div>
            </motion.div>

            {/* Card 2: Zystra Fuchsia Purple Gradient Card (50+ Brands) — Mobile Line 1 (Right) */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="col-span-1 relative rounded-[32px] overflow-hidden p-5 sm:p-7 bg-gradient-to-br from-[#a855f7] via-[#6e019c] to-[#312e81] text-white shadow-xl shadow-purple-950/20 flex flex-col justify-between min-h-[230px] sm:min-h-[260px] group cursor-default border border-purple-400/30"
            >
              {/* Overlapping Glass Mesh Circles */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-fuchsia-400/35 blur-xl pointer-events-none opacity-50" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-purple-300/30 blur-2xl pointer-events-none opacity-40" />

              {/* Card Top Row */}
              <div className="relative z-10 flex items-center justify-between">
                <svg className="w-5 h-4 sm:w-6 sm:h-5 text-white/90 stroke-[2.5]" viewBox="0 0 24 18" fill="none">
                  <path d="M2 3H16M2 9H22M2 15H12" stroke="currentColor" strokeLinecap="round" />
                </svg>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
                </div>
              </div>

              {/* Card Bottom-Left Content */}
              <div className="relative z-10 mt-6 sm:mt-8">
                <div className="text-4xl sm:text-6xl font-black font-sans tracking-tight text-white leading-none drop-shadow-md">
                  <CountUpNumber value={50} suffix="+" />
                </div>
                <p className="text-[10px] sm:text-xs font-mono uppercase text-purple-200 font-bold tracking-widest mt-2">
                  Brands
                </p>
                <p className="text-[11px] sm:text-sm font-semibold text-white/90 mt-1 leading-snug drop-shadow-sm">
                  Scaled Across 10+ Sectors
                </p>
              </div>
            </motion.div>

            {/* Card 3: Zystra Neon Violet-to-Midnight Card (3.8x Avg ROI) — Mobile Line 2 (Centered) */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="col-span-2 sm:col-span-1 max-w-[290px] sm:max-w-none mx-auto w-full relative rounded-[32px] overflow-hidden p-5 sm:p-7 bg-gradient-to-br from-[#c084fc] via-[#5b21b6] to-[#09090b] text-white shadow-xl shadow-purple-950/20 flex flex-col justify-between min-h-[230px] sm:min-h-[260px] group cursor-default border border-purple-400/30"
            >
              {/* Overlapping Glass Mesh Circles */}
              <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-violet-300/35 blur-xl pointer-events-none opacity-50" />
              <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-emerald-400/25 blur-2xl pointer-events-none opacity-40" />

              {/* Card Top Row */}
              <div className="relative z-10 flex items-center justify-between">
                <svg className="w-5 h-4 sm:w-6 sm:h-5 text-white/90 stroke-[2.5]" viewBox="0 0 24 18" fill="none">
                  <path d="M2 3H16M2 9H22M2 15H12" stroke="currentColor" strokeLinecap="round" />
                </svg>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
                </div>
              </div>

              {/* Card Bottom-Left Content */}
              <div className="relative z-10 mt-6 sm:mt-8">
                <div className="text-4xl sm:text-6xl font-black font-sans tracking-tight text-white leading-none drop-shadow-md">
                  <CountUpNumber value={3.8} decimals={1} suffix="x" />
                </div>
                <p className="text-[10px] sm:text-xs font-mono uppercase text-purple-200 font-bold tracking-widest mt-2">
                  Avg ROI
                </p>
                <p className="text-[11px] sm:text-sm font-semibold text-white/90 mt-1 leading-snug drop-shadow-sm">
                  Growth-Driven Performance Strategy
                </p>
              </div>
            </motion.div>

            {/* Card 4: Zystra Velvet Dark Purple CTA Card — Mobile Line 3 (Full Width) */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="col-span-2 sm:col-span-1 w-full relative rounded-[32px] overflow-hidden p-5 sm:p-7 bg-gradient-to-br from-[#18002a] via-[#3b0057] to-[#6e019c] text-white shadow-xl shadow-purple-950/30 flex flex-col justify-between min-h-[230px] sm:min-h-[260px] group border border-purple-400/30"
            >
              {/* Overlapping Glass Mesh Circles & Graphic Overlay */}
              <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none">
                <img src="/HeroBg.webp" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-amber-400/25 blur-2xl pointer-events-none opacity-50" />

              {/* Card Top Row */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-wider text-amber-300 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-400/50 shadow-md">
                  <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300" />
                  GROWTH
                </span>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
                </div>
              </div>

              {/* Card Bottom Content */}
              <div className="relative z-10 mt-5 sm:mt-6">
                <h3 className="text-xs sm:text-base font-black text-white leading-snug drop-shadow-md">
                  We Help Brands Overcome Growth Challenges — Every Single Day.
                </h3>

                <Link href="/contact" className="inline-block mt-3.5 sm:mt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className="bg-white text-purple-950 hover:bg-purple-50 text-xs sm:text-sm font-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg transition-all flex items-center gap-2 border border-purple-200"
                  >
                    <span>Let's Talk</span>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-700 stroke-[3]" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

          </motion.div>
        </div>






        {/* REVOLVING 3D GENRE ORBIT SHOWCASE SECTION */}
        <section ref={showcaseRef} className="container mx-auto px-6 sm:px-12 max-w-7xl mb-28 relative overflow-visible">

          {/* Ultra-Smooth Dotted Scroll-Driven Trace Path Winding Across All Category Headers */}
          <DottedScrollTracePath totalSections={genres.length} showcaseRef={showcaseRef} />

          <div className="space-y-4 relative z-10">
            {genres.map((genre, idx) => (
              <div key={genre.id} style={{ scrollSnapAlign: "start" }}>
                <GenreOrbitCard 
                  genre={genre} 
                  index={idx} 
                  totalCount={genres.length}
                  onOpenShowcase={(client) => setActiveModalClient(client)}
                />
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA SECTION - PERFECTLY ADJUSTED INTO FRAME */}
        <section className="container mx-auto px-4 sm:px-8 max-w-6xl mb-20 relative overflow-hidden">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-[#090417] border border-purple-500/30 p-6 sm:p-10 md:p-12 text-center flex flex-col items-center gap-6 sm:gap-8 shadow-2xl shadow-purple-950/80">
            {/* Background 1: Ambient Purple Radial Glows */}
            <div className="absolute w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute w-[260px] h-[260px] bg-indigo-500/15 rounded-full blur-[80px] pointer-events-none top-0 right-10" />

            {/* Background 2: Tech Blueprint Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f712_1px,transparent_1px),linear-gradient(to_bottom,#a855f712_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            {/* Top Pill Badge */}
            <div className="relative z-10">
              <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-purple-200 bg-purple-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-purple-400/40 shadow-lg">
                Scale Your Brand
              </span>
            </div>

            {/* Main Headline & Rotating Ring Badge Row */}
            <div className="relative z-10 max-w-4xl flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 w-full my-1">
              {/* Left Column: Headline & Subtitle */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight text-white tracking-tight">
                  <span className="font-serif italic font-normal text-purple-300 mr-2 sm:mr-3">Your Brand</span>
                  <span>Could Be Our</span>
                  <br />
                  <span>Next Success Story</span>
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium max-w-lg mt-3">
                  Whatever industry you're in — healthcare, beauty, solar, home services, edtech, travel, or technology — Zystra has the experience and strategy to help you grow.
                </p>
              </div>

              {/* Right Column: Circular Rotating Ring Action Badge (Perfectly centered center button) */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center shrink-0">
                {/* Rotating Text Ring */}
                <div className="w-full h-full relative animate-[spin_14s_linear_infinite]">
                  <svg className="w-full h-full text-purple-300" viewBox="0 0 120 120">
                    <path 
                      id="circleTextPath" 
                      d="M 60, 60 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" 
                      fill="none" 
                    />
                    <text className="text-[9.5px] font-mono uppercase tracking-[0.22em] fill-purple-200 font-bold">
                      <textPath href="#circleTextPath">
                        • LET'S TALK • BUILD & SCALE • CALL NOW 
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Center Action Button (Redirects to WhatsApp) */}
                <a
                  href="https://wa.me/916200048924?text=Hi%20Zystra%20team,%20I'd%20like%20to%20connect%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer group z-20" title="Call Now on WhatsApp">
                    <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mt-1">
              <a href="tel:+916200048924">
                <Button className="rounded-full bg-purple-900/50 hover:bg-purple-900/80 text-purple-100 border border-purple-400/40 backdrop-blur-md font-bold px-8 py-5.5 flex items-center gap-2 text-xs sm:text-sm cursor-pointer shadow-lg">
                  <Phone className="w-4 h-4 text-purple-300" />
                  Call Us: +91 6200048924
                </Button>
              </a>
            </div>

            {/* Continuous Swooshing Wavy Ticker Ribbon - Reaches Both Left & Right Edges Flush */}
            <div className="relative w-[calc(100%+3rem)] sm:w-[calc(100%+5rem)] md:w-[calc(100%+6rem)] -mx-6 sm:-mx-10 md:-mx-12 mt-4 -mb-6 sm:-mb-10 md:-mb-12 overflow-hidden pointer-events-none select-none">
              <svg 
                className="w-full h-auto max-h-[90px] sm:max-h-[120px]" 
                viewBox="0 0 1400 160" 
                preserveAspectRatio="none"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="waveRibbonGrad" x1="0" y1="0" x2="1400" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#7e22ce" />
                    <stop offset="35%" stopColor="#9333ea" />
                    <stop offset="70%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>

                  {/* Fixed Curved ribbon path */}
                  <path 
                    id="ribbonWavePath" 
                    d="M -300 90 C 150 160, 450 20, 700 90 C 950 160, 1250 20, 1700 90" 
                  />
                </defs>

                {/* Thick Gradient Ribbon Strip — STATIONARY FRAME */}
                <use href="#ribbonWavePath" stroke="url(#waveRibbonGrad)" strokeWidth="38" fill="none" />

                {/* Inner Ribbon Border Outline */}
                <use href="#ribbonWavePath" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.4" fill="none" />

                {/* Continuous Curved Text Flow — TEXT MOVES INSIDE STATIONARY FRAME */}
                <text className="text-[12px] font-mono font-black uppercase fill-white tracking-[0.25em]" dy="4" textRendering="geometricPrecision">
                  <textPath href="#ribbonWavePath" startOffset="0%">
                    <animate 
                      attributeName="startOffset" 
                      from="0%" 
                      to="-50%" 
                      dur="20s" 
                      repeatCount="indefinite" 
                    />
                    ★ ZYSTRA PORTFOLIO ★ 35+ BRANDS GROWN ★ 13+ INDUSTRIES ★ INDIA &amp; INTERNATIONAL ★ AI-POWERED GROWTH ★ ZYSTRA PORTFOLIO ★ 35+ BRANDS GROWN ★ 13+ INDUSTRIES ★ INDIA &amp; INTERNATIONAL ★ AI-POWERED GROWTH ★ ZYSTRA PORTFOLIO ★ 35+ BRANDS GROWN ★ 13+ INDUSTRIES ★ INDIA &amp; INTERNATIONAL ★ AI-POWERED GROWTH ★
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </section>

      </main>

      {/* Interactive Reels & Media Showcase Modal Drawer */}
      <ClientShowcaseModal 
        client={activeModalClient} 
        onClose={() => setActiveModalClient(null)} 
      />

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
            .backdrop-blur-md,
            .backdrop-blur-sm,
            .backdrop-blur {
              backdrop-filter: none !important;
              -webkit-backdrop-filter: none !important;
            }
          }
        `
      }} />
    </div>
  );
}
