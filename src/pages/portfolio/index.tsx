import React, { useEffect, useState, useRef, memo } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
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
                    <img src={client.logoImg} alt={client.client} className={`w-full h-full object-contain ${client.logoScale || "scale-125"}`} />
                  ) : (
                    <div className="w-full h-full bg-purple-950 text-purple-200 flex items-center justify-center font-black text-xl">
                      {client.initials || "Z"}
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">{client.client}</h2>
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
          
          {/* Card #3 (Deep Dark Purple Card) */}
          <div
            className="absolute top-4 left-0 w-[90px] sm:w-[112px] h-[155px] sm:h-[180px] rounded-2xl bg-gradient-to-br from-[#1b0a2e] via-[#10051e] to-[#080210] border border-white/15 shadow-2xl p-2 sm:p-2.5 flex flex-col justify-between text-white overflow-hidden transform-gpu z-0 -rotate-12 -translate-x-2.5 translate-y-2 hover:-translate-y-1 transition-transform duration-300"
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
          </div>

          {/* Card #2 (Sleek Silver/White Card) */}
          <div
            className="absolute top-2 left-1 sm:left-1.5 w-[90px] sm:w-[112px] h-[155px] sm:h-[180px] rounded-2xl bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 border border-white/60 shadow-[0_15px_35px_rgba(0,0,0,0.5)] p-2 sm:p-2.5 flex flex-col justify-between text-slate-900 overflow-hidden transform-gpu z-10 -rotate-6 -translate-x-1 translate-y-1 hover:-translate-y-1 transition-transform duration-300"
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
          </div>

          {/* Card #1 (Front Zystra Purple Card) */}
          <div
            className="absolute top-0 left-2.5 sm:left-3 w-[92px] sm:w-[115px] h-[165px] sm:h-[190px] rounded-2xl bg-gradient-to-br from-[#c084fc] via-[#a855f7] to-[#6e019c] shadow-[0_20px_40px_rgba(168,85,247,0.45),0_0_20px_rgba(168,85,247,0.3)] p-2 sm:p-2.5 flex flex-col justify-between text-white overflow-hidden transform-gpu z-20 border border-[#e879f9] -rotate-2 translate-x-1 -translate-y-1 hover:-translate-y-2 transition-transform duration-300"
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
          </div>

        </div>

        {/* ── FOREGROUND MAIN PHONE APP MOCKUP (Slim, Ultra-Realistic Smartphone Mockup) ── */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeClient.client}
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.90, y: -12 }}
            transition={{ type: "spring", stiffness: 420, damping: 30 }}
            onClick={() => onOpenShowcase(activeClient)}
            className="relative flex-1 max-w-[205px] sm:max-w-[235px] rounded-[2.4rem] bg-[#090414] border-[3.5px] border-[#a855f7]/80 p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(168,85,247,0.35)] flex flex-col justify-between text-white cursor-pointer group hover:border-[#c084fc] transition-all z-30 overflow-hidden transform-gpu"
          >
            {/* Screen Gloss Reflective Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-40" />

            {/* Hardware Dynamic Island Notch & Status Bar */}
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

            {/* ── REALISTIC iOS APP DOCK AT BOTTOM ── */}
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

          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
});

const GenreOrbitCard = memo(function GenreOrbitCard({ 
  genre, 
  index, 
  onOpenShowcase
}: { 
  genre: GenreSection; 
  index: number; 
  onOpenShowcase: (client: ClientItem) => void;
}) {
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);
  const selectedIndexRef = useRef(selectedClientIndex);
  selectedIndexRef.current = selectedClientIndex;

  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const selectedClient = genre.clients[selectedClientIndex] || genre.clients[0];
  const clientCount = genre.clients.length;

  // Direct DOM 120fps hardware accelerated animation loop with IntersectionObserver optimization
  useEffect(() => {
    let animId: number;
    let isVisible = false;
    const startTime = performance.now();

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;

        if (isVisible && !wasVisible) {
          if (animId) cancelAnimationFrame(animId);
          animId = requestAnimationFrame(updateOrbit);
        } else if (!isVisible && animId) {
          cancelAnimationFrame(animId);
        }
      },
      { rootMargin: "0px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    const updateOrbit = (now: number) => {
      if (!isVisible) return;

      const elapsed = now - startTime;
      const angle = (elapsed * 0.022) % 360;

      const w = window.innerWidth;
      const isMobile = w < 640;
      const rx = isMobile ? 150 : w < 1440 ? 220 : 270;
      const ry = isMobile ? 50 : w < 1440 ? 72 : 88;

      const tiltAngle = (-22 * Math.PI) / 180;
      const cosA = Math.cos(tiltAngle);
      const sinA = Math.sin(tiltAngle);
      const currentSelIdx = selectedIndexRef.current;

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

        const depthScale = isSelected ? 1.28 : 0.78 + 0.3 * ((depthFactor + 1) / 2);
        const depthOpacity = isSelected ? 1 : 0.55 + 0.45 * ((depthFactor + 1) / 2);
        
        const zIndex = isSelected 
          ? (isFront ? 40 : 18) 
          : (isFront ? 30 : 10);

        el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0px) scale(${depthScale.toFixed(3)})`;
        el.style.opacity = `${depthOpacity.toFixed(3)}`;
        el.style.zIndex = `${zIndex}`;
      });

      animId = requestAnimationFrame(updateOrbit);
    };

    return () => {
      if (animId) cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, [clientCount]);

  const isEven = index % 2 === 0;

  return (
    <div 
      ref={cardRef} 
      className="relative w-full py-16 sm:py-24 mb-20 sm:mb-28 flex flex-col items-center justify-center border-b border-purple-950/40 last:border-b-0"
      style={{ 
        minHeight: "85vh",
      }}
    >
      {/* Genre Header */}
      <div className={`relative z-10 mb-2 sm:mb-3 flex flex-col w-full max-w-7xl ${isEven ? "items-start text-left" : "items-end text-right"}`}>
        <div className={`flex flex-col gap-1.5 max-w-3xl ${isEven ? "items-start text-left" : "items-end text-right"}`}>
          {/* Top Pill Badge */}
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-purple-200 bg-purple-950/60 backdrop-blur-md px-3.5 py-1 rounded-full border border-purple-500/40 shadow-lg">
            {genre.badgeText || genre.title}
          </span>

          {/* Headline */}
          <h2 
            className="text-xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-sans font-black tracking-tight text-white uppercase leading-[1.05] select-none"
            style={{ textShadow: "0 1px 0 #cbd5e1, 0 2px 0 #94a3b8, 0 3px 0 #64748b, 0 6px 18px rgba(0,0,0,0.9)" }}
          >
            {genre.title}
          </h2>

          {/* Subtitle */}
          <p className="text-slate-300 text-[11px] sm:text-xs font-medium max-w-xl leading-relaxed">
            {genre.subtitle}
          </p>

          <div className={`w-24 sm:w-40 h-[2px] bg-gradient-to-r ${isEven ? "from-purple-500/80 via-purple-300 to-transparent" : "from-transparent via-purple-300 to-purple-500/80"}`} />
        </div>
      </div>

      {/* Main Orbit Stage */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-center flex-1 min-h-0">
        {/* 3D Orbit Stage */}
        <div className={`lg:col-span-7 flex flex-col items-center justify-center relative select-none ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
          style={{ minHeight: "clamp(260px, 38vh, 440px)", maxHeight: "clamp(260px, 38vh, 440px)" }}
        >
          {/* CENTRAL ENLARGED 3D IMAGE DISPLAY */}
          <div className="relative z-[20] flex items-center justify-center pointer-events-none">
            {/* Background Glow Div (GPU Accelerated, no image alpha blur) */}
            <div className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-purple-600/25 blur-3xl pointer-events-none" />
            
            {genre.image ? (
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-52 h-52 sm:w-68 sm:h-68 md:w-76 md:h-76 rounded-3xl flex items-center justify-center group cursor-pointer z-[20] pointer-events-auto transform-gpu"
                onClick={() => onOpenShowcase(selectedClient)}
              >
                <img 
                  src={genre.image} 
                  alt={`${genre.title} 3D`} 
                  decoding="async"
                  loading="eager"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
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
                  onClick={() => {
                    setSelectedClientIndex(idx);
                    onOpenShowcase(client);
                  }}
                  onMouseEnter={() => setSelectedClientIndex(idx)}
                  className="absolute pointer-events-auto cursor-pointer"
                  style={{
                    willChange: "transform, opacity",
                  }}
                >
                  <div className="flex flex-col items-center gap-1.5 group">
                    <div 
                      className={`relative w-14 h-14 sm:w-18 sm:h-18 rounded-full border-2 p-0.5 flex items-center justify-center transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu shadow-xl overflow-hidden ${
                        isSelected
                          ? "border-purple-300 ring-4 ring-purple-500/50 shadow-purple-500/80 scale-125 z-30"
                          : "border-purple-500/50 hover:border-purple-300 hover:scale-115 hover:shadow-purple-500/50"
                      } ${client.logoBg || "bg-white"}`}
                    >
                      {client.logoImg ? (
                        <img 
                          src={client.logoImg} 
                          alt={client.client} 
                          className={`w-full h-full object-contain rounded-full transition-transform duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${client.logoScale || "scale-125 p-1.5"}`} 
                        />
                      ) : client.initials ? (
                        <div className={`w-full h-full flex items-center justify-center font-black font-sans text-base sm:text-xl tracking-tighter ${isSelected ? "bg-[#6e019c] text-white" : "bg-purple-950 text-purple-200"}`}>
                          {client.initials}
                        </div>
                      ) : (
                        <div className={`w-full h-full flex items-center justify-center bg-white ${isSelected ? "text-purple-600 font-extrabold" : "text-purple-900"}`}>
                          <IconComp className="w-6 h-6 sm:w-8 sm:h-8 stroke-[2.2]" />
                        </div>
                      )}
                    </div>

                    <span className={`text-[10px] sm:text-xs font-bold font-sans tracking-tight px-2.5 py-0.5 rounded-full backdrop-blur-md border shadow-md transition-all duration-150 whitespace-nowrap ${
                      isSelected 
                        ? "bg-purple-600 text-white border-purple-300 shadow-purple-500/50 scale-105" 
                        : "bg-slate-900/95 text-purple-200 border-purple-500/50 hover:border-purple-300"
                    }`}>
                      {client.subLabel || client.client}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stacked Card Deck Display (Right on even index, Left on odd index) */}
        <div className={`lg:col-span-5 flex flex-col justify-center items-center ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}>
          <StackedCardDeckDisplay 
            clients={genre.clients}
            selectedIndex={selectedClientIndex} 
            onOpenShowcase={onOpenShowcase} 
          />
        </div>

      </div>
    </div>
  );
});

export default function PortfolioPage() {
  const [activeModalClient, setActiveModalClient] = useState<ClientItem | null>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  // Dense multi-colored fiber bundle matching user reference image
  const traceStripes = [
    // --- Warm Red / Orange / Gold Band (Left) ---
    { color: "#cc0000", offset: -2.2, width: 0.16, opacity: 0.85 },
    { color: "#e60000", offset: -1.9, width: 0.18, opacity: 0.95 },
    { color: "#ff2200", offset: -1.6, width: 0.16, opacity: 0.90 },
    { color: "#ff5500", offset: -1.3, width: 0.18, opacity: 0.95 },
    { color: "#ff8800", offset: -1.0, width: 0.16, opacity: 0.90 },
    { color: "#ffbb00", offset: -0.7, width: 0.18, opacity: 1.00 }, // bright gold
    { color: "#ff1100", offset: -0.4, width: 0.16, opacity: 0.95 },

    // --- Crimson & Magenta Center Band ---
    { color: "#e60039", offset: -0.1, width: 0.18, opacity: 1.00 },
    { color: "#ff0055", offset:  0.2, width: 0.18, opacity: 1.00 }, // hot pink
    { color: "#cc0066", offset:  0.5, width: 0.16, opacity: 0.95 },
    { color: "#1a0026", offset:  0.8, width: 0.14, opacity: 0.80 }, // dark gap accent

    // --- Cool Violet / Blue / Cyan Band (Right) ---
    { color: "#6600cc", offset:  1.1, width: 0.16, opacity: 0.90 },
    { color: "#8800ff", offset:  1.4, width: 0.18, opacity: 0.95 }, // electric purple
    { color: "#0055ff", offset:  1.7, width: 0.18, opacity: 1.00 }, // cobalt blue
    { color: "#0099ff", offset:  2.0, width: 0.18, opacity: 0.95 }, // bright blue
    { color: "#00ccff", offset:  2.3, width: 0.16, opacity: 0.90 }, // sky blue
    { color: "#80e5ff", offset:  2.6, width: 0.14, opacity: 0.85 }, // ice cyan
  ];

  const traceSvgRef = useRef<SVGSVGElement>(null);
  const traceFirstPathRef = useRef<SVGPathElement>(null);
  const traceTotalLen = useRef(0);

  const zigZagPath = "M 28,3.5 C 28,7.7 72,7.7 72,12.0 C 72,17.7 28,17.7 28,23.5 C 28,28.2 72,28.2 72,33.0 C 72,37.5 28,37.5 28,42.0 C 28,47.5 72,47.5 72,53.0 C 72,57.7 28,57.7 28,62.5 C 28,67.2 72,67.2 72,72.0 C 72,76.2 28,76.2 28,80.5 C 28,84.5 72,84.5 72,88.5 C 72,92.5 50,92.5 50,96.5";

  // Smooth continuous scroll progress across the full section
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start 35%", "end 85%"]
  });

  useEffect(() => {
    document.documentElement.classList.remove("dark");
    if (traceFirstPathRef.current && traceSvgRef.current) {
      const len = traceFirstPathRef.current.getTotalLength();
      traceTotalLen.current = len;
      traceSvgRef.current.style.setProperty("--len", `${len}`);
      traceSvgRef.current.style.setProperty("--offset", `${len}`);
    }
  }, []);

  // Maximum performance: 1 CSS custom property update per frame (0 JS DOM loops, 0 reflows)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const len = traceTotalLen.current;
    if (len > 0 && traceSvgRef.current) {
      traceSvgRef.current.style.setProperty("--offset", `${len * (1 - latest)}`);
    }
  });




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
          initials: "PC",
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
        <section ref={showcaseRef} className="container mx-auto px-6 sm:px-12 max-w-7xl mb-28 relative">
          {/* SCROLL-DRIVEN MULTICOLOR BUNDLED TRACE — CSS Custom Property Accelerated */}
          <div className="absolute inset-0 pointer-events-none hidden md:block z-0 overflow-visible">
            <svg
              ref={traceSvgRef}
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="traceRainbowGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff2d55" />
                  <stop offset="20%" stopColor="#f4722b" />
                  <stop offset="40%" stopColor="#f9c74f" />
                  <stop offset="60%" stopColor="#ff006e" />
                  <stop offset="80%" stopColor="#8338ec" />
                  <stop offset="100%" stopColor="#3a86ff" />
                </linearGradient>
              </defs>

              {/* Ghost background track */}
              <path
                d={zigZagPath}
                fill="none"
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Central glowing gradient path */}
              <path
                ref={traceFirstPathRef}
                d={zigZagPath}
                fill="none"
                stroke="url(#traceRainbowGrad)"
                strokeWidth="0.45"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: "var(--len, 1000)",
                  strokeDashoffset: "var(--offset, 1000)",
                  willChange: "stroke-dashoffset",
                }}
              />

              {/* Bundled colored accent wire stripes */}
              {traceStripes.map((stripe, i) => (
                <path
                  key={i}
                  d={zigZagPath}
                  fill="none"
                  stroke={stripe.color}
                  strokeWidth={stripe.width}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity={stripe.opacity}
                  transform={`translate(${stripe.offset}, 0)`}
                  style={{
                    strokeDasharray: "var(--len, 1000)",
                    strokeDashoffset: "var(--offset, 1000)",
                    willChange: "stroke-dashoffset",
                  }}
                />
              ))}
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
                style={{ scrollSnapAlign: "start" }}
              >
                <GenreOrbitCard 
                  genre={genre} 
                  index={idx} 
                  onOpenShowcase={(client) => setActiveModalClient(client)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
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
                        • LET'S TALK • BUILD & SCALE • GET AUDIT NOW 
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Center Action Button (Perfectly Centered inside Ring) */}
                <Link href="/#contact">
                  <div className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-purple-950 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer group z-20">
                    <ArrowRight className="w-6 h-6 text-purple-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
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
                </defs>

                {/* Sine Wave Ribbon Track Path - Extended Edge to Edge */}
                <path 
                  id="ribbonWavePath" 
                  d="M -150,90 C 250,160 450,25 700,90 C 950,155 1150,25 1550,90" 
                  stroke="url(#waveRibbonGrad)" 
                  strokeWidth="38" 
                  fill="none"
                />

                {/* Inner Ribbon Border Outline */}
                <path 
                  d="M -150,90 C 250,160 450,25 700,90 C 950,155 1150,25 1550,90" 
                  stroke="#ffffff" 
                  strokeWidth="2" 
                  strokeOpacity="0.4" 
                  fill="none"
                />

                {/* Animated Marquee Text Path along the Ribbon */}
                <text className="text-[12px] font-mono font-black uppercase fill-white tracking-[0.25em]">
                  <textPath href="#ribbonWavePath" startOffset="0%">
                    <animate 
                      attributeName="startOffset" 
                      from="0%" 
                      to="-50%" 
                      dur="18s" 
                      repeatCount="indefinite" 
                    />
                    ★ ZYSTRA PORTFOLIO ★ 35+ BRANDS GROWN ★ 13+ INDUSTRIES ★ INDIA & INTERNATIONAL ★ AI-POWERED GROWTH ★ ZYSTRA PORTFOLIO ★ 35+ BRANDS GROWN ★ 13+ INDUSTRIES ★ INDIA & INTERNATIONAL ★
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
    </div>
  );
}
