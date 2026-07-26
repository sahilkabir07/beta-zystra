import React, { useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  BarChart3,
  Link2,
  FileText,
  Globe,
  TrendingUp,
  LayoutDashboard,
  SendHorizonal,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────
   SVG NEURAL NETWORK BACKGROUND (matches reference image lines pattern)
───────────────────────────────────────────────────────────────────── */
function NeuralNetworkBg() {
  const points = [
    { x: 8, y: 10 }, { x: 22, y: 5 }, { x: 38, y: 12 }, { x: 52, y: 8 },
    { x: 70, y: 6 }, { x: 85, y: 14 }, { x: 95, y: 8 },
    { x: 5, y: 28 }, { x: 18, y: 35 }, { x: 32, y: 22 }, { x: 48, y: 30 },
    { x: 65, y: 20 }, { x: 80, y: 30 }, { x: 92, y: 25 },
    { x: 10, y: 50 }, { x: 25, y: 60 }, { x: 40, y: 48 }, { x: 60, y: 55 },
    { x: 75, y: 45 }, { x: 88, y: 52 },
    { x: 5, y: 72 }, { x: 20, y: 80 }, { x: 35, y: 70 }, { x: 50, y: 78 },
    { x: 68, y: 72 }, { x: 82, y: 80 }, { x: 95, y: 70 },
    { x: 12, y: 90 }, { x: 28, y: 88 }, { x: 45, y: 92 }, { x: 62, y: 88 }, { x: 78, y: 92 },
  ];
  // Connect nearby points
  const edges: [number, number][] = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dx = points[i].x - points[j].x;
      const dy = points[i].y - points[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 22) edges.push([i, j]);
    }
  }
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {edges.map(([a, b], idx) => (
        <line
          key={idx}
          x1={points[a].x} y1={points[a].y}
          x2={points[b].x} y2={points[b].y}
          stroke="rgba(74,222,128,0.15)"
          strokeWidth="0.15"
        />
      ))}
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="0.5" fill="rgba(74,222,128,0.4)" />
      ))}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   MOUNTAIN + CLIMBER SVG  (matches bottom center of reference image)
───────────────────────────────────────────────────────────────────── */
function MountainScene() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] pointer-events-none select-none">
      <svg viewBox="0 0 480 200" className="w-full h-auto">
        <defs>
          <radialGradient id="mtn-glow" cx="50%" cy="70%" r="55%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#052e16" stopOpacity="0.0" />
          </radialGradient>
          <radialGradient id="mtn-fill" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#16a34a" />
            <stop offset="60%" stopColor="#052e16" />
            <stop offset="100%" stopColor="#021409" />
          </radialGradient>
          <filter id="mtn-glow-filter">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Glow base under mountain */}
        <ellipse cx="240" cy="190" rx="220" ry="30" fill="url(#mtn-glow)" />

        {/* Main Mountain Body */}
        <path
          d="M 80 200 L 200 60 L 240 80 L 280 55 L 400 200 Z"
          fill="url(#mtn-fill)"
          filter="url(#mtn-glow-filter)"
        />
        {/* Mountain highlight edge */}
        <path
          d="M 200 60 L 240 80 L 280 55"
          fill="none"
          stroke="rgba(74,222,128,0.5)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Side ridges */}
        <path d="M 80 200 L 160 130 L 200 140 L 220 110" fill="none" stroke="rgba(74,222,128,0.2)" strokeWidth="0.8" />
        <path d="M 400 200 L 330 130 L 290 145 L 265 105" fill="none" stroke="rgba(74,222,128,0.2)" strokeWidth="0.8" />

        {/* RANK #1 flag at peak */}
        <line x1="280" y1="55" x2="280" y2="25" stroke="#22c55e" strokeWidth="1.5" />
        <rect x="280" y="25" width="44" height="22" rx="4" fill="#22c55e" />
        <text x="302" y="40" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#021409" fontFamily="monospace">RANK #1</text>

        {/* Green glow dot at peak */}
        <circle cx="280" cy="25" r="3.5" fill="#22c55e">
          <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Climber silhouette (simplified) near peak */}
        <g transform="translate(245, 72)">
          {/* Body */}
          <ellipse cx="0" cy="0" rx="3" ry="5" fill="#021409" stroke="#22c55e" strokeWidth="0.5" />
          {/* Head */}
          <circle cx="0" cy="-7" r="2.5" fill="#021409" stroke="#22c55e" strokeWidth="0.5" />
          {/* Backpack */}
          <rect x="2" y="-3" width="3" height="5" rx="1" fill="#16a34a" />
          {/* Arm reaching up */}
          <line x1="3" y1="-1" x2="10" y2="-8" stroke="#22c55e" strokeWidth="0.8" />
          {/* Rope */}
          <path d="M 10 -8 Q 20 -10 30 -17" fill="none" stroke="rgba(74,222,128,0.6)" strokeWidth="0.6" strokeDasharray="2 2" />
        </g>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   NODE ITEM — orbiting feature nodes (connected to SEO text by dashed lines)
───────────────────────────────────────────────────────────────────── */
function FeatureNode({
  Icon,
  label,
  style,
  lineFrom,
}: {
  Icon: React.ElementType;
  label: string;
  style: React.CSSProperties;
  lineFrom?: { x1: number; y1: number; x2: number; y2: number };
}) {
  return (
    <>
      {lineFrom && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d={`M ${lineFrom.x1} ${lineFrom.y1} Q ${(lineFrom.x1 + lineFrom.x2) / 2} ${lineFrom.y1 - 3} ${lineFrom.x2} ${lineFrom.y2}`}
            fill="none"
            stroke="rgba(74,222,128,0.35)"
            strokeWidth="0.3"
            strokeDasharray="1.5 1.5"
          />
          <circle cx={lineFrom.x2} cy={lineFrom.y2} r="0.7" fill="#22c55e" />
        </svg>
      )}
      <div
        className="absolute flex flex-col items-center gap-1 cursor-default group"
        style={style}
      >
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-green-500/30 bg-black/50 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:border-green-400/60 group-hover:bg-green-950/60 transition-all duration-300"
          style={{ boxShadow: "0 4px 20px rgba(34,197,94,0.2)" }}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
        </div>
        <span className="text-[9px] sm:text-[10px] font-bold text-green-300 text-center leading-tight max-w-[70px] whitespace-pre-line">
          {label}
        </span>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   MAIN SEO CARD  (Exported + Used in Services section)
───────────────────────────────────────────────────────────────────── */
export default function SEOCard() {
  return (
    <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-[28px] overflow-hidden bg-[#020e06] select-none">
      {/* ── Layer 1: Deep green/black radial gradient background ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(22,101,52,0.55) 0%, rgba(5,46,22,0.7) 45%, rgba(2,14,6,1) 100%)",
        }}
      />

      {/* ── Layer 2: Neural network polygon lines ── */}
      <NeuralNetworkBg />

      {/* ── Layer 3: Extra subtle glow pulses ── */}
      <div
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(74,222,128,0.12) 0%, transparent 70%)",
          animation: "pulse 4s ease-in-out infinite",
        }}
      />

      {/* ── Top Brand Bar ── */}
      <div className="absolute top-4 left-5 right-5 flex items-center justify-between z-30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-green-400 flex items-center justify-center">
            <span className="text-[10px] font-black text-black tracking-tight font-mono">ZY</span>
          </div>
          <div>
            <div className="text-white font-black text-xs tracking-wider leading-none">ZYSTRA</div>
            <div className="text-green-400/70 text-[8px] font-mono leading-none">Digital Marketing Agency</div>
          </div>
        </div>
        <span className="text-[9px] font-mono text-green-400/60 uppercase tracking-widest">01 / SEO</span>
      </div>

      {/* ── FEATURE NODE CONSTELLATION (exactly positioned like reference image) ── */}
      {/* Top center — On Page / Off Page */}
      <FeatureNode
        Icon={LayoutDashboard}
        label={"On Page\nOff Page"}
        style={{ top: "16%", left: "50%", transform: "translateX(-50%)" }}
        lineFrom={{ x1: 50, y1: 30, x2: 50, y2: 42 }}
      />
      {/* Top right — Backlinks */}
      <FeatureNode
        Icon={Link2}
        label="Backlinks"
        style={{ top: "12%", right: "8%" }}
        lineFrom={{ x1: 85, y1: 28, x2: 72, y2: 42 }}
      />
      {/* Right — Traffic */}
      <FeatureNode
        Icon={BarChart3}
        label="Traffic"
        style={{ top: "42%", right: "5%" }}
        lineFrom={{ x1: 88, y1: 46, x2: 72, y2: 50 }}
      />
      {/* Bottom right — Content */}
      <FeatureNode
        Icon={FileText}
        label="Content"
        style={{ top: "62%", right: "8%" }}
        lineFrom={{ x1: 84, y1: 62, x2: 70, y2: 58 }}
      />
      {/* Bottom center — Site Architecture */}
      <FeatureNode
        Icon={Globe}
        label={"Site\nArchitecture"}
        style={{ top: "70%", left: "50%", transform: "translateX(-50%)" }}
        lineFrom={{ x1: 50, y1: 68, x2: 50, y2: 60 }}
      />
      {/* Left — Analysis */}
      <FeatureNode
        Icon={TrendingUp}
        label="Analysis"
        style={{ top: "62%", left: "4%" }}
        lineFrom={{ x1: 16, y1: 62, x2: 28, y2: 58 }}
      />
      {/* Top left — Ranking */}
      <FeatureNode
        Icon={SendHorizonal}
        label="Ranking"
        style={{ top: "38%", left: "4%" }}
        lineFrom={{ x1: 15, y1: 44, x2: 28, y2: 50 }}
      />

      {/* ── BIG CENTER "SEO" TEXT (glowing yellow-green, massive, exactly like reference) ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <span
          className="font-black uppercase tracking-tight text-center leading-none"
          style={{
            fontSize: "clamp(72px, 18vw, 110px)",
            background: "linear-gradient(180deg, #d9f99d 0%, #86efac 30%, #22c55e 70%, #15803d 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            filter: "drop-shadow(0 0 40px rgba(74,222,128,0.7)) drop-shadow(0 0 80px rgba(34,197,94,0.4))",
            fontFamily: "'Barlow Condensed', 'Outfit', sans-serif",
          }}
        >
          SEO
        </span>
      </div>

      {/* ── MOUNTAIN + CLIMBER ── */}
      <MountainScene />

      {/* ── Bottom Footer Bar (brand + CTA exactly like reference) ── */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-30">
        {/* Left: social icons */}
        <div className="flex items-center gap-3">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-green-400/60 hover:text-green-400 transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-green-400/60 hover:text-green-400 transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-green-400/60 hover:text-green-400 transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-green-400/60 hover:text-green-400 transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
          <span className="text-[10px] font-mono text-green-400/50 ml-1">ZYSTRA</span>
        </div>

        {/* Right: CTA Pill */}
        <Link href="/services/seo">
          <span className="inline-flex flex-col items-center bg-white rounded-xl px-4 py-2 text-black cursor-pointer hover:bg-green-50 transition-all hover:scale-105 active:scale-95 shadow-xl">
            <span className="text-[10px] font-black uppercase tracking-wider">Get started today</span>
            <span className="text-[8px] font-mono text-slate-500">✈ info@zystra.in</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
