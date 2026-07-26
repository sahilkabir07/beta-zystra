import React from "react";
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
   SVG NEURAL NETWORK BACKGROUND
───────────────────────────────────────────────────────────────────── */
function NeuralNetworkBg() {
  const points = [
    { x: 4,  y: 8  }, { x: 14, y: 4  }, { x: 25, y: 10 }, { x: 36, y: 5  },
    { x: 47, y: 9  }, { x: 58, y: 4  }, { x: 69, y: 8  }, { x: 80, y: 5  },
    { x: 90, y: 10 }, { x: 97, y: 6  },
    { x: 3,  y: 22 }, { x: 13, y: 28 }, { x: 24, y: 18 }, { x: 35, y: 25 },
    { x: 48, y: 20 }, { x: 60, y: 26 }, { x: 72, y: 19 }, { x: 84, y: 24 },
    { x: 95, y: 18 },
    { x: 5,  y: 40 }, { x: 17, y: 48 }, { x: 30, y: 38 }, { x: 43, y: 44 },
    { x: 56, y: 40 }, { x: 68, y: 46 }, { x: 80, y: 38 }, { x: 92, y: 44 },
    { x: 4,  y: 60 }, { x: 16, y: 68 }, { x: 28, y: 58 }, { x: 42, y: 65 },
    { x: 55, y: 60 }, { x: 67, y: 67 }, { x: 78, y: 58 }, { x: 90, y: 64 },
    { x: 6,  y: 80 }, { x: 18, y: 86 }, { x: 32, y: 78 }, { x: 46, y: 84 },
    { x: 60, y: 80 }, { x: 73, y: 87 }, { x: 85, y: 79 }, { x: 96, y: 84 },
    { x: 10, y: 94 }, { x: 30, y: 96 }, { x: 52, y: 93 }, { x: 72, y: 96 }, { x: 91, y: 94 },
  ];
  const edges: [number, number][] = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dx = points[i].x - points[j].x;
      const dy = points[i].y - points[j].y;
      if (Math.sqrt(dx * dx + dy * dy) < 16) edges.push([i, j]);
    }
  }
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {edges.map(([a, b], idx) => (
        <line key={idx}
          x1={points[a].x} y1={points[a].y}
          x2={points[b].x} y2={points[b].y}
          stroke="rgba(74,222,128,0.12)" strokeWidth="0.12"
        />
      ))}
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="0.45" fill="rgba(74,222,128,0.35)" />
      ))}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   MOUNTAIN + CLIMBER — Clean, non-neon rendering
───────────────────────────────────────────────────────────────────── */
function MountainScene() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[55%] pointer-events-none select-none">
      <svg viewBox="0 0 480 240" className="w-full h-auto">
        <defs>
          <radialGradient id="mtn-g2" cx="45%" cy="25%" r="65%">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="55%" stopColor="#052e16" />
            <stop offset="100%" stopColor="#021409" />
          </radialGradient>
        </defs>

        <path d="M 40 240 L 180 55 L 230 82 L 275 48 L 440 240 Z" fill="url(#mtn-g2)" />

        <path d="M 180 55 L 230 82 L 275 48"
          fill="none" stroke="rgba(74,222,128,0.4)" strokeWidth="1.5" strokeLinejoin="round" />

        <path d="M 40 240 L 130 155 L 178 165 L 210 128"
          fill="none" stroke="rgba(74,222,128,0.15)" strokeWidth="0.8" />
        <path d="M 440 240 L 355 152 L 308 165 L 282 118"
          fill="none" stroke="rgba(74,222,128,0.15)" strokeWidth="0.8" />

        {/* RANK #1 flag */}
        <line x1="275" y1="48" x2="275" y2="14" stroke="#22c55e" strokeWidth="1.8" />
        <rect x="275" y="14" width="52" height="24" rx="5" fill="#22c55e" />
        <text x="301" y="30" textAnchor="middle" fontSize="9.5" fontWeight="900"
          fill="#021409" fontFamily="'Barlow Condensed', monospace">RANK #1</text>

        {/* Climber */}
        <g transform="translate(238, 75)">
          <ellipse cx="0" cy="0" rx="3.5" ry="6" fill="#021409" stroke="#22c55e" strokeWidth="0.6" />
          <circle cx="0" cy="-9" r="3" fill="#021409" stroke="#22c55e" strokeWidth="0.6" />
          <rect x="2.5" y="-4" width="3.5" height="6" rx="1" fill="#16a34a" />
          <line x1="3.5" y1="-1" x2="12" y2="-10" stroke="#22c55e" strokeWidth="1" />
          <path d="M 12 -10 Q 24 -13 36 -22" fill="none"
            stroke="rgba(74,222,128,0.6)" strokeWidth="0.7" strokeDasharray="2.5 2" />
        </g>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   FEATURE NODE — Crisp clean non-neon icon node
───────────────────────────────────────────────────────────────────── */
function FeatureNode({
  Icon, label, style, lx1, ly1, lx2, ly2,
}: {
  Icon: React.ElementType;
  label: string;
  style: React.CSSProperties;
  lx1: number; ly1: number; lx2: number; ly2: number;
}) {
  const mx = (lx1 + lx2) / 2;
  const my = Math.min(ly1, ly2) - 4;
  return (
    <>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d={`M ${lx1} ${ly1} Q ${mx} ${my} ${lx2} ${ly2}`}
          fill="none" stroke="rgba(74,222,128,0.3)" strokeWidth="0.25" strokeDasharray="1.6 1.4"
        />
        <circle cx={lx2} cy={ly2} r="0.8" fill="#22c55e" />
        <circle cx={lx1} cy={ly1} r="0.5" fill="rgba(74,222,128,0.4)" />
      </svg>
      <div className="absolute flex flex-col items-center gap-1.5 group" style={style}>
        <div
          className="w-12 h-12 rounded-2xl border border-green-500/30 bg-[#061208]/90 flex items-center justify-center transition-all duration-300 group-hover:border-green-400 group-hover:bg-green-950/80 group-hover:scale-105"
        >
          <Icon className="w-5 h-5 text-green-400" />
        </div>
        <span className="text-[11px] font-bold text-green-300/90 text-center leading-tight whitespace-pre-line max-w-[80px]">
          {label}
        </span>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   MAIN EXPORT — Full-width SEO Service Card (Clean Non-Neon)
───────────────────────────────────────────────────────────────────── */
export default function SEOServiceCard() {
  return (
    <div
      className="relative w-full overflow-hidden bg-[#020e06] select-none"
      style={{ minHeight: "clamp(480px, 70vh, 760px)" }}
    >
      {/* ── Deep dark green background (clean, no neon) ── */}
      <div className="absolute inset-0 bg-[#031007]" />

      {/* ── Neural network lines ── */}
      <NeuralNetworkBg />

      {/* ── Top Brand Header ── */}
      <div className="absolute top-6 left-8 right-8 flex items-center justify-between z-30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center shadow-md">
            <span className="text-[11px] font-black text-black tracking-tight font-mono">ZY</span>
          </div>
          <div>
            <div className="text-white font-black text-sm tracking-wider leading-tight">ZYSTRA</div>
            <div className="text-green-400/70 text-[9px] font-mono">Advanced Digital Marketing</div>
          </div>
        </div>
        <span className="text-[10px] font-mono text-green-400/70 uppercase tracking-widest
          bg-green-950/60 border border-green-500/30 px-3 py-1 rounded-full">
          01 / SEO
        </span>
      </div>

      {/* ════════════════════════════════════
          FEATURE NODES — orbiting clean
      ════════════════════════════════════ */}

      {/* TOP CENTER — On Page / Off Page */}
      <FeatureNode Icon={LayoutDashboard} label={"On Page\nOff Page"}
        style={{ top: "14%", left: "50%", transform: "translateX(-50%)" }}
        lx1={50} ly1={31} lx2={50} ly2={44}
      />
      {/* TOP RIGHT — Backlinks */}
      <FeatureNode Icon={Link2} label="Backlinks"
        style={{ top: "10%", right: "8%" }}
        lx1={87} ly1={27} lx2={73} ly2={42}
      />
      {/* RIGHT — Traffic */}
      <FeatureNode Icon={BarChart3} label="Traffic"
        style={{ top: "42%", right: "5%" }}
        lx1={89} ly1={48} lx2={74} ly2={51}
      />
      {/* BOTTOM RIGHT — Content */}
      <FeatureNode Icon={FileText} label="Content"
        style={{ top: "63%", right: "8%" }}
        lx1={85} ly1={65} lx2={71} ly2={59}
      />
      {/* BOTTOM CENTER — Site Architecture */}
      <FeatureNode Icon={Globe} label={"Site\nArchitecture"}
        style={{ top: "72%", left: "50%", transform: "translateX(-50%)" }}
        lx1={50} ly1={72} lx2={50} ly2={62}
      />
      {/* LEFT — Analysis */}
      <FeatureNode Icon={TrendingUp} label="Analysis"
        style={{ top: "63%", left: "5%" }}
        lx1={14} ly1={65} lx2={28} ly2={59}
      />
      {/* TOP LEFT — Ranking */}
      <FeatureNode Icon={SendHorizonal} label="Ranking"
        style={{ top: "38%", left: "5%" }}
        lx1={13} ly1={46} lx2={27} ly2={51}
      />

      {/* ════════════════════════════════════
          MASSIVE "SEO" — Clean lime text without neon drop-shadows
      ════════════════════════════════════ */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <span
          className="font-black uppercase leading-none text-center"
          style={{
            fontSize: "clamp(100px, 22vw, 220px)",
            color: "#86efac",
            fontFamily: "'Barlow Condensed', 'Outfit', sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          SEO
        </span>
      </div>

      {/* ── Mountain + Climber + RANK #1 ── */}
      <MountainScene />

      {/* ── Bottom Footer ── */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 py-5
        bg-black/90 border-t border-green-900/30 z-30">
        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"
            className="text-green-400/60 hover:text-green-400 transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"
            className="text-green-400/60 hover:text-green-400 transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"
            className="text-green-400/60 hover:text-green-400 transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"
            className="text-green-400/60 hover:text-green-400 transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
          <span className="text-[10px] font-mono font-bold text-green-400/50 uppercase tracking-widest ml-1">
            ZYSTRA
          </span>
        </div>

        {/* GET STARTED TODAY pill */}
        <Link href="/contact">
          <span className="inline-flex flex-col items-start bg-white rounded-2xl px-5 py-3 cursor-pointer
            hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-md">
            <span className="text-[12px] font-black uppercase tracking-wider text-slate-900 leading-tight">
              Get started today
            </span>
            <span className="text-[9px] font-mono text-slate-600 flex items-center gap-1">
              ✈ info@zystra.in
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
