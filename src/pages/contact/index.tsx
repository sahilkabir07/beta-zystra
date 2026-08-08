import React, { useEffect, useState, useRef, useCallback } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  Sparkles, Phone, Mail, Instagram, Linkedin, Twitter, Facebook,
  ArrowRight, MessageCircle, Rocket, Cpu, Globe, BarChart3,
  Laptop, Smartphone, Code2, Plus, HelpCircle, Search, Megaphone,
  MapPin, ChevronLeft, ChevronRight, Clock, Target, ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/shared/SEO";

// ─── Ribbon Items ────────────────────────────────────
const RIBBON_ITEMS = [
  { icon: Instagram, label: "Instagram" },
  { icon: Search, label: "SEO & Local Search" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Code2, label: "Web & App Dev" },
  { icon: Twitter, label: "Twitter" },
  { icon: Cpu, label: "AI Engine & Automation" },
  { icon: Facebook, label: "Facebook" },
  { icon: Rocket, label: "Meta & Google Ads" },
  { icon: Sparkles, label: "Branding Studio" },
  { icon: BarChart3, label: "RevOps & Analytics" },
];

// ─── Types ───────────────────────────────────────────
interface FAQItem {
  question: string;
  answer: string;
  category?: string;
  icon?: any;
}
type SubmitPhase = "idle" | "connecting" | "strategy" | "team" | "ai" | "success" | "error";

// ─── AI Orb (pure CSS animations, no Framer Motion per-frame) ───────
const AI_OBJECTS = [
  { icon: Laptop,     label: "Web Build",  angle: 0   },
  { icon: Smartphone, label: "Mobile",     angle: 60  },
  { icon: Cpu,        label: "AI Engine",  angle: 120 },
  { icon: Code2,      label: "Dev Stack",  angle: 180 },
  { icon: Globe,      label: "Global SEO", angle: 240 },
  { icon: BarChart3,  label: "Analytics",  angle: 300 },
];

function AIOrb() {
  return (
    <div className="relative flex items-center justify-center w-64 h-64 select-none">
      {/* Orbit rings (CSS animation) */}
      <div className="absolute inset-0 rounded-full border border-dashed border-purple-500/20 animate-spin-slow" />
      <div className="absolute inset-4 rounded-full border border-purple-400/10" style={{ animation: "spin 18s linear infinite reverse" }} />

      {/* Satellite nodes — positioned absolutely via CSS transform */}
      {AI_OBJECTS.map((obj, i) => {
        const rad = (obj.angle * Math.PI) / 180;
        const r = 112;
        const x = Math.cos(rad) * r;
        const y = Math.sin(rad) * r;
        const Icon = obj.icon;
        return (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{ transform: `translate(${x}px, ${y}px)`, animation: `floatNode ${3 + i * 0.4}s ease-in-out infinite alternate`, animationDelay: `${i * 0.3}s` }}
          >
            <div className="w-9 h-9 rounded-xl bg-slate-900/90 border border-purple-500/30 flex items-center justify-center shadow-md backdrop-blur-sm">
              <Icon className="w-4 h-4 text-purple-300" />
            </div>
          </div>
        );
      })}

      {/* Connection lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 256 256">
        {AI_OBJECTS.map((obj, i) => {
          const rad = (obj.angle * Math.PI) / 180;
          const r = 112;
          return (
            <line
              key={i}
              x1="128" y1="128"
              x2={128 + Math.cos(rad) * r}
              y2={128 + Math.sin(rad) * r}
              stroke="rgba(168,85,247,0.18)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
          );
        })}
      </svg>

      {/* Core orb (CSS animation only) */}
      <div className="relative w-28 h-28 rounded-full z-10" style={{ animation: "orbPulse 4s ease-in-out infinite" }}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-violet-600 to-purple-900 opacity-70 blur-md scale-110" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-violet-500 to-indigo-700 shadow-[0_0_50px_rgba(110,1,196,0.7),0_0_100px_rgba(110,1,196,0.3)]" />
        <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-7 h-7 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
        </div>
      </div>
    </div>
  );
}

// ─── Background (no state, uses ref + direct DOM) ────
function BackgroundCanvas() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 transform-gpu">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(168,85,247,1) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Static ambient glows (pure CSS GPU accelerated) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-purple-600/8 blur-[100px] transform-gpu pointer-events-none" />
      <div className="absolute -top-32 left-1/4 w-[400px] h-[400px] bg-purple-900/15 rounded-full blur-[80px] transform-gpu pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-indigo-900/15 rounded-full blur-[80px] transform-gpu pointer-events-none" />
    </div>
  );
}

// ─── Form Card — Clean & Sharp UI (No Blur) ───────────────────
function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden">
      {/* Clean solid dark card panel for perfect legibility without blur */}
      <div className="relative z-10 w-full rounded-3xl border border-purple-500/30 bg-[#09071b]/85 p-7 sm:p-10 shadow-[0_32px_80px_rgba(0,0,0,0.8)]">
        {/* Top shimmer accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
        {children}
      </div>
    </div>
  );
}

// ─── Inputs — Sharp & Sleek Style (No Glassmorphism Blur) ────────────────────
function GlassInput({ label, name, type = "text", value, onChange, placeholder, required = false }: {
  label: string; name: string; type?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  placeholder?: string; required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const filled = value.length > 0;
  const up = focused || filled;
  return (
    <div className="relative group">
      <label
        className={`absolute left-3.5 pointer-events-none z-10 font-sans text-xs font-semibold tracking-wide transition-all duration-200 ${
          up ? "-top-2.5 text-[10px] text-purple-300 bg-[#09071b] px-1.5 rounded" : "top-3.5 text-white/40"
        }`}
      >
        {label}{required && <span className="text-purple-400 ml-0.5">*</span>}
      </label>
      <input
        type={type} name={name} value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={focused ? placeholder : ""}
        className={`w-full rounded-2xl px-4 pt-5 pb-3 text-sm font-medium text-white placeholder:text-white/25 outline-none transition-all duration-200 ${
          focused
            ? "bg-black/50 border border-purple-400/70 shadow-[0_0_0_3px_rgba(168,85,247,0.25)]"
            : "bg-black/30 border border-white/15 hover:border-purple-400/40 hover:bg-black/40"
        }`}
      />
    </div>
  );
}

function GlassTextarea({ label, name, value, onChange, placeholder, maxLength }: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  placeholder?: string; maxLength?: number;
}) {
  const [focused, setFocused] = useState(false);
  const up = focused || value.length > 0;
  return (
    <div className="relative group">
      <label
        className={`absolute left-3.5 pointer-events-none z-10 font-sans text-xs font-semibold tracking-wide transition-all duration-200 ${
          up ? "-top-2.5 text-[10px] text-purple-300 bg-[#09071b] px-1.5 rounded" : "top-3.5 text-white/40"
        }`}
      >
        {label}
      </label>
      <textarea
        name={name} value={value} rows={4}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={focused ? placeholder : ""}
        className={`w-full rounded-2xl px-4 pt-5 pb-3 text-sm font-medium text-white placeholder:text-white/25 outline-none transition-all duration-200 resize-none ${
          focused
            ? "bg-black/50 border border-purple-400/70 shadow-[0_0_0_3px_rgba(168,85,247,0.25)]"
            : "bg-black/30 border border-white/15 hover:border-purple-400/40 hover:bg-black/40"
        }`}
      />
      {maxLength && (
        <span className="absolute bottom-3 right-4 text-[10px] font-mono text-white/25">{value.length}/{maxLength}</span>
      )}
    </div>
  );
}

function GlassSelect({ label, name, value, onChange, options }: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative group">
      <label
        className="absolute left-3.5 -top-2.5 pointer-events-none z-10 font-sans text-[10px] font-semibold tracking-wide text-purple-300 bg-[#09071b] px-1.5 rounded"
      >
        {label}
      </label>
      <select
        name={name} value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full rounded-2xl px-4 pt-5 pb-3 text-sm font-medium outline-none transition-all duration-200 appearance-none cursor-pointer ${
          value ? "text-white" : "text-white/40"
        } ${
          focused
            ? "bg-black/50 border border-purple-400/70 shadow-[0_0_0_3px_rgba(168,85,247,0.25)]"
            : "bg-black/30 border border-white/15 hover:border-purple-400/40 hover:bg-black/40"
        }`}
      >
        <option value="" className="bg-[#0e0e1a] text-white/40" disabled>Select…</option>
        {options.map(o => <option key={o.value} value={o.value} className="bg-[#0e0e1a] text-white">{o.label}</option>)}
      </select>
      {/* Arrow */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

// ─── Launch Button ───────────────────────────────────
const PHASES: { phase: SubmitPhase; label: string; icon: string }[] = [
  { phase: "connecting", label: "Connecting...",             icon: "⚡" },
  { phase: "strategy",   label: "Finding Best Strategy...", icon: "🧠" },
  { phase: "team",       label: "Assigning Creative Team...",icon: "👥" },
  { phase: "ai",         label: "Preparing AI Workflow...", icon: "🤖" },
  { phase: "success",    label: "Mission Accepted ✓",        icon: "🚀" },
];

function LaunchButton({ onSubmit, status }: { onSubmit: () => void; status: SubmitPhase }) {
  const isLoading = !["idle", "error", "success"].includes(status);
  const isSuccess = status === "success";
  const currentPhase = PHASES.find(p => p.phase === status);

  return (
    <button
      onClick={onSubmit}
      disabled={isLoading || isSuccess}
      className={`relative w-full h-14 rounded-2xl font-bold text-sm tracking-wide transition-all duration-400 overflow-hidden cursor-pointer group ${
        isSuccess
          ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-[0_0_28px_rgba(16,185,129,0.35)]"
          : "bg-gradient-to-r from-purple-700 via-violet-600 to-purple-700 text-white shadow-[0_0_28px_rgba(110,1,196,0.4)] hover:shadow-[0_0_40px_rgba(110,1,196,0.55)]"
      }`}
    >
      {/* Light streak on hover */}
      {!isLoading && !isSuccess && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600 skew-x-[-20deg]" />
      )}
      {/* Loading progress */}
      {isLoading && (
        <span className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-200 to-violet-100 animate-[progress_6s_ease-out_forwards]" style={{ width: "90%" }} />
      )}

      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.span key="idle" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="flex items-center justify-center gap-2.5">
            <Rocket className="w-4 h-4" /> Launch Project
          </motion.span>
        )}
        {(isLoading || isSuccess) && currentPhase && (
          <motion.span key={status} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="flex items-center justify-center gap-2.5">
            <span>{currentPhase.icon}</span> {currentPhase.label}
          </motion.span>
        )}
        {status === "error" && (
          <motion.span key="error" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="flex items-center justify-center gap-2 text-red-200">
            ⚠️ Fill all required fields
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

// ─── Page ────────────────────────────────────────────
export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", phone: "", purpose: "", description: "" });
  const [descLength, setDescLength] = useState(0);
  const [submitStatus, setSubmitStatus] = useState<SubmitPhase>("idle");
  const [activeFaqIdx, setActiveFaqIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [whatsappBottom, setWhatsappBottom] = useState(24);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 350;
      setWhatsappBottom(isScrolled ? 96 : 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveFaqIdx((prev) => (prev + 1) % faqs.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.body.style.backgroundColor = "#090909";
    
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const lenis = new Lenis({ duration: 0.85, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    lenis.scrollTo(0, { immediate: true });

    let rafId: number;
    const raf = (time: number) => { lenis.raf(time); rafId = requestAnimationFrame(raf); };
    rafId = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(rafId); lenis.destroy(); };
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "description" && value.length > 800) return;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === "description") setDescLength(value.length);
  }, []);

  const handleSubmit = useCallback(() => {
    if (!formData.name || !formData.email || !formData.phone) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 2500);
      return;
    }
    const phases: SubmitPhase[] = ["connecting", "strategy", "team", "ai", "success"];
    let i = 0;
    const advance = () => {
      if (i < phases.length) { setSubmitStatus(phases[i]); i++; if (phases[i - 1] !== "success") setTimeout(advance, 1400); }
    };
    advance();
    setTimeout(() => { setFormData({ name: "", email: "", company: "", phone: "", purpose: "", description: "" }); setDescLength(0); }, 7200);
    setTimeout(() => setSubmitStatus("idle"), 8000);
  }, [formData]);

  const faqs: FAQItem[] = [
    {
      category: "RESPONSE TIME",
      icon: Clock,
      question: "How quickly will I hear back after contacting Zystra?",
      answer: "We respond to every inquiry within one business day. For urgent requests, calling us directly is the fastest way to connect.",
    },
    {
      category: "STRATEGY & SCOPE",
      icon: Target,
      question: "Do I need to know my exact service requirements?",
      answer: "No. Most clients reach out with just a goal or challenge — our team recommends the optimal strategy after analyzing your business.",
    },
    {
      category: "GLOBAL REACH",
      icon: Globe,
      question: "Does Zystra work with international clients?",
      answer: "Yes. We've delivered successful projects for global clients across the UAE, US, and Europe, operating seamlessly across time zones.",
    },
    {
      category: "FREE CONSULTATION",
      icon: Sparkles,
      question: "Is the initial consultation completely free?",
      answer: "Yes. We audit your digital presence and share our recommended growth roadmap before any financial commitment is required.",
    },
    {
      category: "AI AUTOMATION",
      icon: Cpu,
      question: "How does Zystra integrate AI into our workflow?",
      answer: "We deploy custom AI agents, automated ad optimization, and RevOps funnels to eliminate manual work and multiply campaign ROI.",
    },
    {
      category: "DELIVERY SPEED",
      icon: Rocket,
      question: "What is the typical project turnaround time?",
      answer: "Most website & growth campaigns launch within 2–4 weeks, with live performance analytics provided from day one.",
    },
  ];

  const contactSchema = {
    "@context": "https://schema.org", "@type": "ContactPage",
    "name": "Contact Zystra", "url": "https://zystra.in/contact",
    "description": "Get in touch with Zystra, an AI-powered digital marketing agency. Reach out for a free consultation and reply within 24 hours.",
    "mainEntity": { "@type": "Organization", "name": "Zystra", "url": "https://zystra.in", "telephone": "+916200048924", "email": "info@zystra.in",
      "address": { "@type": "PostalAddress", "streetAddress": "BM Das Rd, near Patna Muslim School, Naya Tola, Lalbagh", "addressLocality": "Patna", "addressRegion": "Bihar", "postalCode": "800004", "addressCountry": "IN" },
      "sameAs": ["https://www.instagram.com/zystra_web_tech/", "https://www.linkedin.com/company/zystra-webtech/", "https://twitter.com/Zystra_Web_Tech", "https://www.facebook.com/profile.php?id=61571699426971"] },
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  const projectTypes = [
    { value: "seo", label: "SEO & Local Search" },
    { value: "ads", label: "Paid Ads (Meta & Google)" },
    { value: "web", label: "Web & App Development" },
    { value: "brand", label: "Branding & Creative Studio" },
    { value: "revops", label: "RevOps & Automation" },
    { value: "consult", label: "Free Marketing Consultation" },
  ];

  return (
    <div className="min-h-screen bg-[#090909] text-white overflow-x-hidden font-sans selection:bg-purple-600/30">
      <style>{`
        @keyframes floatNode { from { transform: var(--tw-translate-x, 0) var(--tw-translate-y, 0) translateY(0px); } to { transform: var(--tw-translate-x, 0) var(--tw-translate-y, 0) translateY(-8px); } }
        @keyframes orbPulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.06); } }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes ribbonGpuFlow {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-25%, 0, 0); }
        }
        .animate-spin-slow { animation: spin-slow 28s linear infinite; }
        .animate-ribbon-gpu {
          animation: ribbonGpuFlow 25s linear infinite;
          will-change: transform;
          transform-box: fill-box;
        }
      `}</style>

      <SEO
        title="Contact Zystra | Launch Your Next Project"
        description="Get in touch with Zystra, an AI-powered digital marketing agency. Tell us your goals and we'll reply within one business day with a custom strategy."
        canonicalUrl="https://zystra.in/contact"
        schema={[contactSchema, faqSchema]}
      />
      <Navbar />

      {/* ── HERO — Full-Width Editorial Heading Frame ── */}
      <section className="relative min-h-[70vh] sm:h-screen w-full flex flex-col justify-center items-center pt-16 pb-8 sm:py-0 overflow-hidden">
        <BackgroundCanvas />

        {/* ── FULL-WIDTH HEADING BLOCK ── */}
        <div className="relative z-10 w-full max-w-full overflow-hidden px-2 sm:px-0 my-auto">

          {/* ── GIANT STACKED POSTER-STYLE TITLE UI ── */}
          <div className="relative flex flex-col items-center justify-center overflow-hidden select-none w-full py-2">
            
            {/* Full-Width Zystra Purple Ribbon Wave with Continuous Unbroken Flowing Text */}
            <svg
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[280px] sm:h-[480px] pointer-events-none z-0 opacity-95 overflow-hidden"
              viewBox="0 0 1400 400"
              preserveAspectRatio="none"
            >
              <defs>
                {/* 3 Seamless Periodic Wave Cycles of 1400 units each (Total 4200 units) */}
                <path
                  id="purpleWaveRibbon"
                  d="M -1400 200 C -1050 20, -350 380, 0 200 C 350 20, 1050 380, 1400 200 C 1750 20, 2450 380, 2800 200"
                />
              </defs>

              {/* Thick Purple Ribbon Track Frame — Stationary */}
              <use
                href="#purpleWaveRibbon"
                stroke="#6E01C4"
                strokeWidth="52"
                strokeLinecap="round"
                fill="none"
                className="drop-shadow-[0_10px_35px_rgba(110,1,196,0.65)]"
              />

              {/* 100% Continuous Unbroken Text Path Flow */}
              <text
                fill="#FFFFFF"
                fillOpacity="0.95"
                fontSize="12"
                fontWeight="800"
                fontFamily="Inter, system-ui, -apple-system, sans-serif"
                letterSpacing="4"
                dy="4"
                textRendering="geometricPrecision"
              >
                <textPath href="#purpleWaveRibbon" startOffset="0%">
                  <animate
                    attributeName="startOffset"
                    from="0%"
                    to="-33.3333%"
                    dur="24s"
                    repeatCount="indefinite"
                  />
                  INSTAGRAM  •  SEO &amp; LOCAL SEARCH  •  LINKEDIN  •  WEB &amp; APP DEV  •  TWITTER  •  AI &amp; AUTOMATION  •  FACEBOOK  •  META &amp; GOOGLE ADS  •  BRANDING STUDIO  •  REVOPS &amp; ANALYTICS  •  INSTAGRAM  •  SEO &amp; LOCAL SEARCH  •  LINKEDIN  •  WEB &amp; APP DEV  •  TWITTER  •  AI &amp; AUTOMATION  •  FACEBOOK  •  META &amp; GOOGLE ADS  •  BRANDING STUDIO  •  REVOPS &amp; ANALYTICS  •  INSTAGRAM  •  SEO &amp; LOCAL SEARCH  •  LINKEDIN  •  WEB &amp; APP DEV  •  TWITTER  •  AI &amp; AUTOMATION  •  FACEBOOK  •  META &amp; GOOGLE ADS  •  BRANDING STUDIO  •  REVOPS &amp; ANALYTICS  •  INSTAGRAM  •  SEO &amp; LOCAL SEARCH  •  LINKEDIN  •  WEB &amp; APP DEV  •  TWITTER  •  AI &amp; AUTOMATION  •  FACEBOOK  •  META &amp; GOOGLE ADS  •  BRANDING STUDIO  •  REVOPS &amp; ANALYTICS  •  INSTAGRAM  •  SEO &amp; LOCAL SEARCH  •  LINKEDIN  •  WEB &amp; APP DEV  •  TWITTER  •  AI &amp; AUTOMATION  •  FACEBOOK  •  META &amp; GOOGLE ADS  •  BRANDING STUDIO  •  REVOPS &amp; ANALYTICS  •  
                </textPath>
              </text>
            </svg>

            {/* Main Typography & Overlays Container — Full Width */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full px-3 sm:px-0 my-auto py-2 sm:py-0">
              
              {/* LINE 1: LET'S BUILD (Mobile: 2 separate lines LET'S / BUILD, Desktop: 1 line LET'S BUILD) */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-black uppercase tracking-tighter text-[clamp(3.6rem,18.5vw,5.8rem)] sm:text-[13.8vw] lg:text-[11.8vw] xl:text-[10.8vw] leading-[0.90] sm:leading-[0.82] text-white text-center w-full px-1 drop-shadow-2xl select-none"
                style={{ fontFamily: "'Inter', 'Impact', 'Arial Black', sans-serif" }}
              >
                <span className="block sm:inline scale-y-[1.28] sm:scale-y-100 origin-center mt-1 mb-2.5 sm:my-0">LET'S</span>{" "}
                <span className="block sm:inline scale-y-[1.28] sm:scale-y-100 origin-center mt-1.5 mb-1 sm:my-0">BUILD</span>
              </motion.h1>

              {/* LINE 2: SOMETHING */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-black uppercase tracking-tighter text-[clamp(2.4rem,13vw,5.2rem)] sm:text-[14.2vw] lg:text-[12.2vw] xl:text-[11.2vw] leading-[0.85] sm:leading-[0.82] text-white text-center w-full px-1 drop-shadow-2xl select-none"
                style={{ fontFamily: "'Inter', 'Impact', 'Arial Black', sans-serif" }}
              >
                <span className="block sm:inline scale-y-[1.2] sm:scale-y-100 origin-center my-1 sm:my-0">SOMETHING</span>
              </motion.h1>

              {/* LINE 3: EXTRAORDINARY */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-black uppercase tracking-tighter text-[clamp(1.65rem,9.2vw,4.2rem)] sm:text-[11.5vw] lg:text-[9.8vw] xl:text-[9vw] leading-[0.85] sm:leading-[0.82] text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-200 to-purple-400 text-center w-full px-1 drop-shadow-2xl select-none"
                style={{ fontFamily: "'Inter', 'Impact', 'Arial Black', sans-serif" }}
              >
                <span className="block sm:inline scale-y-[1.2] sm:scale-y-100 origin-center my-1 sm:my-0">EXTRAORDINARY</span>
              </motion.h1>

            </div>
          </div>
        </div>
      </section>

      {/* ── FORM SECTION — SEPARATE DEDICATED SECTION ── */}
      <section className="relative z-10 w-full py-16 sm:py-24">

        {/* ── BACKGROUND IMAGE FROM /contactUs/formBg.webp — EXTENDED UP BEHIND 'EXTRAORDINARY' ── */}
        <div className="absolute -top-64 inset-x-0 bottom-0 pointer-events-none z-0 overflow-hidden">
          {/* Continuous Grid Lines matching Hero section */}
          <div
            className="absolute inset-0 opacity-[0.03] z-10"
            style={{
              backgroundImage: "linear-gradient(rgba(168,85,247,1) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,1) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* FormBg Image extended 256px UP behind EXTRAORDINARY with smooth alpha mask */}
          <img
            src="/contactUs/formBg.webp"
            alt="Form Background"
            className="w-full h-full object-cover object-center transform-gpu"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.7) 30%, black 50%, rgba(0,0,0,0.7) 80%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.7) 30%, black 50%, rgba(0,0,0,0.7) 80%, transparent 100%)",
            }}
          />

          {/* Bottom vignette for smooth section exit */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent via-[#09071b]/60 to-[#09071b] z-20 pointer-events-none" />
        </div>

        {/* Form card */}
        <div className="relative z-10 w-full max-w-2xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard>
              {/* Header */}
              <div className="mb-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">Let's Start a Conversation</h2>
                <p className="text-sm text-white/40 mt-2 font-medium">The more context you share, the better we can tailor our response.</p>
              </div>

              {/* Form fields */}
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GlassInput label="Your Name" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Rahul Sharma" required />
                  <GlassInput label="Company" name="company" value={formData.company} onChange={handleChange} placeholder="e.g. Acme Corp" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GlassInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required />
                  <GlassInput label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
                </div>
                <GlassSelect label="Project Type" name="purpose" value={formData.purpose} onChange={handleChange} options={projectTypes} />
                <GlassTextarea label="Your Message" name="description" value={formData.description} onChange={handleChange} placeholder="Tell us about your project, goals, and timeline…" maxLength={800} />

                <LaunchButton onSubmit={handleSubmit} status={submitStatus} />
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT (FROSTED GLASS PROCESS CARDS WITH VIBRANT BACKDROP) ── */}
      <section className="relative z-10 pt-8 pb-20 sm:pt-12 sm:pb-24 w-full overflow-hidden">
        {/* Vibrant Full-Width Backdrop — fills 100% width and height of section */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden transform-gpu">
          {/* Top Gradient Blend — eliminates black gap & smoothly transitions from Form Section */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#09071b] via-[#09071b]/60 to-transparent z-10" />

          {/* Top-Left Teal Glow (Hardware promoted) */}
          <div className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-teal-600/30 rounded-full blur-[100px] transform-gpu will-change-transform" />
          
          {/* Diagonal Zystra Theme Flame Streak (Hardware promoted) */}
          <div className="absolute top-0 -left-20 w-[135%] h-80 bg-gradient-to-r from-purple-700/40 via-fuchsia-600/35 via-violet-500/30 to-amber-500/30 blur-[90px] -rotate-[22deg] transform-gpu will-change-transform" />
          
          {/* Bottom-Right Deep Purple Glow */}
          <div className="absolute -bottom-20 -right-20 w-[550px] h-[550px] bg-purple-800/30 rounded-full blur-[100px] transform-gpu will-change-transform" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="relative z-10 text-center mb-16"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#c084fc] mb-3 block">
            PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            What Happens After You Reach Out
          </h2>
        </motion.div>

        {/* Cards Container — Horizontal Carousel on Mobile (< md), 3-Column Grid on Desktop (md+) */}
        <div className="relative z-10 flex md:grid md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory [::-webkit-scrollbar]:hidden [scrollbar-width:none] py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0">
          {[
            {
              step: "01",
              tag: "STEP 01",
              line1: "REVIEW",
              line2: "YOUR BRIEF",
              bullets: "Goals • Challenges • Audit • Strategy",
              info: "Our team reads through your goals, current challenges, and any links you share — before we ever respond.",
              statusTag: "TIMELINE",
              badgeText: "DAY 1",
              bigValue: "STEP 01",
              bigLabel: "ANALYSIS",
              icon: Sparkles,
              headerLabel: "ZYSTRA PROCESS",
            },
            {
              step: "02",
              tag: "STEP 02",
              line1: "HEAR BACK",
              line2: "IN 24 HOURS",
              bullets: "Strategist • No Automation • Direct Call",
              info: "No long waiting. You'll hear from a real senior strategist, not an automated template email response.",
              statusTag: "RESPONSE",
              badgeText: "GUARANTEED",
              bigValue: "24H",
              bigLabel: "DIRECT",
              icon: Rocket,
              headerLabel: "FAST TURNAROUND",
            },
            {
              step: "03",
              tag: "STEP 03",
              line1: "MAP A PATH",
              line2: "FORWARD",
              bullets: "Services • Roadmap • Custom Plan",
              info: "Based on what you share, we outline the exact services, timeline, and strategy tailored to your specific goals.",
              statusTag: "ROADMAP",
              badgeText: "100% CUSTOM",
              bigValue: "100%",
              bigLabel: "TAILORED",
              icon: Cpu,
              headerLabel: "ACTION ROADMAP",
            },
          ].map((item, i) => {
            const StepIcon = item.icon;
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[85vw] max-w-[340px] sm:w-[380px] md:w-full shrink-0 snap-center rounded-[32px] border border-purple-500/25 bg-gradient-to-b from-[#110d29]/90 via-[#0a081a]/95 to-[#0d0a22]/90 backdrop-blur-xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/70 hover:shadow-[0_20px_50px_rgba(168,85,247,0.3)] group overflow-hidden flex flex-col justify-between select-none transform-gpu"
              >
                {/* Background glow orb inside card */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/20 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-500/35 transition-colors" />

                <div className="relative z-10 flex flex-col gap-6 pt-2">
                  {/* Typography Stack */}
                  <div className="flex flex-col items-center justify-center text-center py-2">
                    <div className="relative leading-none">
                      <span className="font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-normal [word-spacing:0.25em] text-white font-sans drop-shadow-xl">
                        {item.line1}
                      </span>
                      <span className="absolute -top-2.5 -right-8 bg-gradient-to-r from-purple-600 to-violet-500 text-white text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-purple-300/40 shadow-lg rotate-[12deg]">
                        {item.step}
                      </span>
                    </div>

                    <div className="font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-normal [word-spacing:0.25em] text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-violet-200 font-sans leading-[1.1] drop-shadow-xl mt-1.5">
                      {item.line2}
                    </div>

                    <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-violet-300/90 uppercase tracking-widest mt-3.5">
                      {item.bullets}
                    </div>
                  </div>

                  {/* Sleek Dark Glass Info Panel (Follows Zystra Theme) */}
                  <div className="w-full bg-white/[0.05] border border-white/10 rounded-2xl p-4 backdrop-blur-md flex items-center gap-3.5 text-white shadow-inner group-hover:bg-white/[0.08] group-hover:border-purple-400/30 transition-all">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center shrink-0 shadow-md">
                      <StepIcon className="w-4.5 h-4.5 text-purple-300" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[11.5px] font-medium text-slate-200 leading-snug">
                        {item.info}
                      </span>
                    </div>
                  </div>

                  {/* Status & Accent Bars */}
                  <div className="flex flex-col gap-2 pt-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-300">
                        <span>{item.statusTag}</span>
                        <span className="px-2 py-0.5 rounded-md bg-purple-500/20 border border-purple-400/30 text-[9.5px] font-black text-purple-200">
                          {item.badgeText}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-black text-white tracking-tight font-sans drop-shadow-md">
                          {item.bigValue}
                        </span>
                        <span className="text-lg sm:text-xl font-bold text-purple-300/90 tracking-wider font-sans">
                          {item.bigLabel}
                        </span>
                      </div>
                    </div>

                    {/* Zystra Theme Glowing Accent Underline Bars */}
                    <div className="grid grid-cols-4 gap-1.5 w-full pt-1">
                      <div className="h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
                      <div className="h-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(139,92,246,0.9)]" />
                      <div className="h-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_8px_rgba(232,121,249,0.9)]" />
                      <div className="h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.9)]" />
                    </div>
                  </div>

                {/* 5. Bottom Social Media Handles Footer */}
                <div className="flex items-center justify-between text-[10px] font-mono text-white/75 pt-3 border-t border-white/15">
                  <div className="flex items-center gap-1 hover:text-white transition-colors">
                    <Instagram className="w-3 h-3 text-pink-400" />
                    <span>@zystra_global</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-white transition-colors">
                    <Linkedin className="w-3 h-3 text-blue-400" />
                    <span>@zystra_webtech</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-white transition-colors">
                    <Twitter className="w-3 h-3 text-sky-400" />
                    <span>@zystra_global</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )})}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-2 pt-4 text-[11px] text-purple-300/80 font-mono font-bold tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span>SWIPE TO EXPLORE STEPS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        </div>
        </div>
      </section>

      {/* ── FAQ 3D PINNED NOTES SECTION (EXACT REPLICA OF REFERENCE IMAGE LAYOUT IN ZYSTRA THEME) ── */}
      <section className="relative z-10 py-24 sm:py-32 w-full overflow-hidden select-none" style={{ background: "linear-gradient(180deg, #090909 0%, #0c0822 50%, #090909 100%)" }}>
        {/* Faint Notebook Grid Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-15 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        {/* Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-purple-700/10 rounded-full blur-[140px]" />
        </div>

        {/* Section Header */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-sans drop-shadow-2xl">
            EVERYTHING YOU NEED TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400">KNOW</span>
          </h2>

          <p className="text-sm sm:text-base text-white/50 font-medium max-w-xl mx-auto mt-3 leading-relaxed">
            Winding guide to our response times, service scope, and growth strategies.
          </p>
        </div>

        {/* ── PINNED CARDS STAGE WITH WINDING DOTTED PATH ── */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
          
          {/* SVG Winding Dashed Path (Connects Pinned Cards Down the Stage in Zystra Purple Theme) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible hidden md:block" viewBox="0 0 1000 1600" preserveAspectRatio="none">
            <defs>
              <linearGradient id="purpleDashedPath" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(168,85,247,0.8)" />
                <stop offset="35%" stopColor="rgba(139,92,246,0.9)" />
                <stop offset="70%" stopColor="rgba(217,70,239,0.8)" />
                <stop offset="100%" stopColor="rgba(99,102,241,0.7)" />
              </linearGradient>
            </defs>
            <style>{`
              @keyframes traceDashFlow {
                from { stroke-dashoffset: 0; }
                to { stroke-dashoffset: -32; }
              }
            `}</style>
            <path
              d="M 280 120 C 500 220, 720 320, 720 420 C 720 520, 280 620, 280 740 C 280 860, 720 960, 720 1080 C 720 1200, 280 1300, 280 1420"
              stroke="url(#purpleDashedPath)"
              strokeWidth="2.5"
              strokeDasharray="16 16"
              fill="none"
              style={{ animation: "traceDashFlow 1.8s linear infinite" }}
              className="drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]"
            />
          </svg>

          {/* Cards List in Staggered Zig-Zag Layout — ALL CARDS STRICTLY USE ZYSTRA BRAND COLORS */}
          <div className="space-y-10 sm:space-y-14 md:space-y-16 relative z-10">
            {[
              {
                id: "01",
                numColor: "text-purple-400 font-mono",
                pinGradient: "from-purple-400 via-violet-500 to-purple-600 shadow-md",
                innerBg: "bg-gradient-to-br from-[#1a0e38]/95 via-[#100826]/98 to-[#080415]/95 border-purple-500/30",
                align: "justify-start md:pl-10 lg:pl-20",
                rotate: "-rotate-3",
                title: "Response Time",
                question: "How quickly will I hear back after contacting Zystra?",
                answer: "We respond to every inquiry within 1 business day. For urgent requests, calling us directly connects you immediately to a lead advisor."
              },
              {
                id: "02",
                numColor: "text-fuchsia-400 font-mono",
                pinGradient: "from-fuchsia-400 via-purple-500 to-fuchsia-600 shadow-md",
                innerBg: "bg-gradient-to-br from-[#280c35]/95 via-[#1a0624]/98 to-[#0e0314]/95 border-fuchsia-500/30",
                align: "justify-end md:pr-10 lg:pr-20",
                rotate: "rotate-3",
                title: "Strategy & Scope",
                question: "Do I need a complete project brief before reaching out?",
                answer: "No. Most clients reach out with just a goal — our team will audit your brand and present a tailored strategy roadmap."
              },
              {
                id: "03",
                numColor: "text-violet-400 font-mono",
                pinGradient: "from-violet-400 via-purple-500 to-violet-600 shadow-md",
                innerBg: "bg-gradient-to-br from-[#1b1042]/95 via-[#11092e]/98 to-[#09041a]/95 border-violet-500/30",
                align: "justify-start md:pl-10 lg:pl-20",
                rotate: "-rotate-2",
                title: "Global Reach",
                question: "Does Zystra work with international clients outside India?",
                answer: "Yes. We operate seamlessly across timezones for clients in the UAE, US, and Europe with global contract & payment setups."
              },
              {
                id: "04",
                numColor: "text-indigo-400 font-mono",
                pinGradient: "from-indigo-400 via-purple-500 to-indigo-600 shadow-md",
                innerBg: "bg-gradient-to-br from-[#121244]/95 via-[#0a0a2c]/98 to-[#050518]/95 border-indigo-500/30",
                align: "justify-end md:pr-10 lg:pr-20",
                rotate: "rotate-2",
                title: "Free Consultation",
                question: "Is the initial digital marketing consultation completely free?",
                answer: "Yes. We audit your digital presence and deliver a clear action plan before any financial commitment is required."
              },
              {
                id: "05",
                numColor: "text-purple-300 font-mono",
                pinGradient: "from-purple-300 via-fuchsia-500 to-purple-600 shadow-md",
                innerBg: "bg-gradient-to-br from-[#200e3a]/95 via-[#120726]/98 to-[#080315]/95 border-purple-400/30",
                align: "justify-start md:pl-10 lg:pl-20",
                rotate: "-rotate-3",
                title: "AI & Automation",
                question: "How does Zystra integrate AI into campaign workflows?",
                answer: "We deploy custom AI creative generators, automated lead qualifier funnels, and 24/7 RevOps analytics to multiply speed & ROI."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.65, delay: 0.05 }}
                className={`flex w-full ${card.align}`}
              >
                {/* ── COMPACT PINNED CARD CONTAINER (Smaller Size & Smooth Hover) ── */}
                <div className={`relative w-full max-w-[280px] sm:max-w-[315px] rounded-[26px] p-2 bg-white/10 border border-white/20 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-300 transform ${card.rotate} hover:rotate-0 hover:scale-[1.05] hover:z-30 cursor-pointer group`}>
                  
                  {/* ── 3D Spherical Pushpin / Thumbtack at Top Center ── */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center group-hover:scale-110 transition-transform duration-300">
                    {/* Spherical 3D Pin Head */}
                    <div className={`w-7 h-7 rounded-full bg-gradient-to-tr ${card.pinGradient} border-2 border-white/90 flex items-center justify-center`}>
                      <div className="w-2 h-2 rounded-full bg-white/90 shadow-inner" />
                    </div>
                    {/* Pin Drop Shadow */}
                    <div className="w-5 h-1.5 rounded-full bg-black/50 blur-[2px] mt-0.5" />
                  </div>

                  {/* ── Inner Tinted Panel (Compact Padding & Crisp Q&A in Zystra Colors) ── */}
                  <div className={`rounded-[20px] p-4 sm:p-5 border ${card.innerBg} flex flex-col justify-between h-full`}>
                    <div>
                      {/* Stylized Numbering at Top Left */}
                      <span className={`text-xl sm:text-2xl font-black leading-none block mb-2 ${card.numColor}`}>
                        {card.id}
                      </span>

                      {/* Title Header */}
                      <h3 className="text-lg sm:text-xl font-black text-white font-sans tracking-tight mb-2 group-hover:text-purple-200 transition-colors">
                        {card.title}
                      </h3>

                      {/* Question */}
                      <h4 className="text-xs font-bold text-white/85 leading-snug mb-2 font-sans">
                        {card.question}
                      </h4>

                      {/* Answer Paragraph */}
                      <p className="text-[11.5px] sm:text-xs font-medium text-slate-300/90 leading-relaxed font-sans pt-2 border-t border-white/10">
                        {card.answer}
                      </p>
                    </div>

                    {/* Footer Tag */}
                    <div className="pt-3.5 mt-3 border-t border-white/10 flex items-center justify-between text-[9.5px] font-mono text-white/40">
                      <span>✦ ZYSTRA PIN 0{card.id}</span>
                      <span className="text-purple-300 font-bold group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH CARD SECTION (Increased Width, Removed Logo & Date Tag) ── */}
      <section className="relative z-10 py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[32px] sm:rounded-[44px] bg-[#09031a]/95 border border-purple-500/30 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_25px_90px_rgba(110,1,156,0.35)] backdrop-blur-2xl"
        >
          {/* Subtle Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-600/15 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />

          {/* Right Side Wavy Particle Wave Mesh (Matches Reference Image Graphic in Zystra Colors) */}
          <svg className="absolute right-0 top-0 bottom-0 h-full w-1/2 pointer-events-none z-0 opacity-80 overflow-visible hidden md:block" viewBox="0 0 500 450" preserveAspectRatio="none">
            <defs>
              <linearGradient id="zystraAppleMesh" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="35%" stopColor="#06b6d4" />
                <stop offset="70%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#d946ef" />
              </linearGradient>
            </defs>
            <style>{`
              @keyframes zystraMeshFlow {
                from { stroke-dashoffset: 0; }
                to { stroke-dashoffset: -40; }
              }
            `}</style>
            {[...Array(16)].map((_, idx) => (
              <path
                key={idx}
                d={`M ${280 + idx * 10} 0 C ${160 + idx * 14} 110, ${320 - idx * 10} 250, ${200 + idx * 16} 450`}
                stroke="url(#zystraAppleMesh)"
                strokeWidth={2 - idx * 0.08}
                strokeDasharray="4 6"
                fill="none"
                style={{ animation: `zystraMeshFlow ${2 + idx * 0.15}s linear infinite` }}
                opacity={0.4 + (idx % 3) * 0.2}
              />
            ))}
          </svg>

          {/* Full Width Card Content Stack */}
          <div className="relative z-10 flex flex-col justify-between h-full min-h-[300px] sm:min-h-[340px]">
            {/* Top Row: Sub-header Tag ONLY */}
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/35 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-purple-300 shadow-sm">
                LET'S TALK
              </span>
            </div>

            {/* Middle Main Content */}
            <div className="mb-8 max-w-2xl">
              {/* Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-4 font-sans">
                Your Brand's Next Chapter Starts With One Message
              </h2>
              {/* Subtitle Paragraph */}
              <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-xl">
                You don't need a perfect brief. Just tell us where you are and where you want to be — we'll handle the rest.
              </p>

              {/* Action Button */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white font-bold text-sm sm:text-base shadow-[0_0_35px_rgba(168,85,247,0.45)] hover:shadow-[0_0_50px_rgba(168,85,247,0.65)] transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-purple-200 group-hover:rotate-12 transition-transform" />
                <span>Start the Conversation</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-purple-200 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Bottom Row Metadata */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-5 border-t border-white/10 text-xs sm:text-sm text-slate-400 font-mono gap-2">
              <span>Response within 24 hours</span>
              <span>India & International clients welcome</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── FLOATING REAL WHATSAPP BUTTON (Fixed Over Screen) ── */}
      <a
        href="https://wa.me/916200048924?text=Hi%20Zystra%20team,%20I'd%20like%20to%20connect%20with%20you."
        target="_blank"
        rel="noopener noreferrer"
        style={{ bottom: `${whatsappBottom}px` }}
        className="fixed right-6 sm:right-8 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 border-2 border-white/20 active:scale-95 group cursor-pointer"
        title="Chat on WhatsApp with Zystra"
        data-testid="button-whatsapp-floating"
      >
        <svg className="w-7 h-7 fill-current drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.758.459 3.474 1.33 4.982l-1.413 5.161 5.283-1.386a9.937 9.937 0 0 0 4.787 1.229h.004c5.507 0 9.99-4.478 9.99-9.984s-4.483-9.986-9.991-9.986zm5.825 14.166c-.244.688-1.417 1.315-1.982 1.4-.52.078-1.161.11-1.865-.116-.426-.135-.973-.316-1.674-.619-2.947-1.274-4.87-4.242-5.016-4.437-.146-.196-1.199-1.595-1.199-3.041 0-1.446.755-2.158 1.024-2.451.269-.294.587-.367.783-.367.196 0 .392.001.562.01.18.009.421-.068.658.501.245.589.832 2.037.905 2.184.073.147.122.318.025.514-.098.196-.147.318-.294.49-.147.172-.309.384-.441.515-.147.147-.301.307-.129.602.172.295.764 1.263 1.638 2.042 1.127 1.004 2.078 1.314 2.372 1.461.294.147.466.123.638-.073.172-.196.735-.857.931-1.15.196-.294.392-.245.662-.147.269.098 1.713.808 2.007.955.294.147.49.22.563.343.073.123.073.71-.171 1.398z" />
        </svg>
      </a>

      <Footer />
    </div>
  );
}
