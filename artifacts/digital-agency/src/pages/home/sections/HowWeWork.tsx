import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "@/components/shared/Icons";

const steps = [
  {
    step: "01",
    title: "Free Digital Audit",
    tagline: "ANALYSIS & AUDITING",
    desc: "We review your current website, SEO health, social presence, and ad performance — and show you exactly where the gaps are. No cost. No commitment.",
    image: "/audit_step.png",
    color: "from-cyan-400 to-teal-500",
    glowColor: "rgba(6, 182, 212, 0.4)",
    textColor: "text-cyan-600",
    points: [
      "Core web vitals & page speed performance audit",
      "Organic SEO positioning & search ranking analysis",
      "Competitor marketing & funnel strategy report"
    ]
  },
  {
    step: "02",
    title: "Custom Strategy",
    tagline: "STRATEGIC ROADMAPPING",
    desc: "Based on your business goals, target audience, and competition, we build a tailor-made digital growth strategy — not a template, not a package.",
    image: "/strategy_step.png",
    color: "from-brand-medium to-brand-vibrant",
    glowColor: "rgba(110, 1, 156, 0.4)",
    textColor: "text-brand-vibrant",
    points: [
      "Bespoke omni-channel growth blueprint",
      "Ideal buyer persona & high-intent audience mapping",
      "Tailored media spend & channel allocation planning"
    ]
  },
  {
    step: "03",
    title: "Execution with AI Precision",
    tagline: "CAMPAIGN LAUNCH & AUTOMATION",
    desc: "Our team executes your campaign using AI-powered tools for keyword research, audience targeting, content creation, and real-time bid optimisation.",
    image: "/execution_step.png",
    color: "from-cyan-400 to-teal-500",
    glowColor: "rgba(6, 182, 212, 0.4)",
    textColor: "text-cyan-600",
    points: [
      "AI-accelerated copy, creative & content generation",
      "Real-time predictive bid adjustments (24/7)",
      "Dynamic search & social audience routing"
    ]
  },
  {
    step: "04",
    title: "Measure, Report & Scale",
    tagline: "DATA TRANSPARENCY & GROWTH",
    desc: "We track every metric that matters — traffic, leads, conversions, ROAS — and share transparent weekly/monthly reports. Then we scale what's working.",
    image: "/scale_step.png",
    color: "from-brand-medium to-brand-vibrant",
    glowColor: "rgba(110, 1, 156, 0.4)",
    textColor: "text-brand-vibrant",
    points: [
      "Live multi-channel ROI tracking dashboard",
      "Transparent weekly syncs & deep-dive reports",
      "Automated budget reallocation to top creatives"
    ]
  }
];

export default function HowWeWork() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background starry/dots decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-75 pointer-events-none -z-20" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 relative">
          {/* Subtle Glowing Aura behind Header */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-32 bg-brand-vibrant/5 rounded-full blur-[60px] pointer-events-none -z-10" />



          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Our Simple <span className="bg-gradient-to-r from-brand-vibrant via-brand-medium to-brand-dark bg-clip-text text-transparent">4-Step Growth</span> Process
          </h2>
          <p className="text-slate-500 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto font-normal">
            From insights to intelligence, how we orchestrate <span className="text-slate-800 font-semibold border-b border-brand-vibrant/20 pb-0.5">digital scale</span>.
          </p>
        </div>

        {/* Winding Timeline Path Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Winding SVG Road (visible on desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-32 pointer-events-none hidden lg:block -z-10">
            <svg
              viewBox="0 0 100 800"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              {/* Outer Thick Glow Path */}
              <path
                d="M 50 0 C 50 40, 25 60, 25 100 C 25 200, 75 200, 75 300 C 75 400, 25 400, 25 500 C 25 600, 75 600, 75 700 C 75 750, 50 760, 50 800"
                fill="none"
                stroke="rgba(110, 1, 156, 0.04)"
                strokeWidth="20"
                strokeLinecap="round"
              />
              {/* Inner Track Path */}
              <path
                d="M 50 0 C 50 40, 25 60, 25 100 C 25 200, 75 200, 75 300 C 75 400, 25 400, 25 500 C 25 600, 75 600, 75 700 C 75 750, 50 760, 50 800"
                fill="none"
                stroke="rgba(110, 1, 156, 0.1)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              {/* Animated Center Dash flow */}
              <motion.path
                d="M 50 0 C 50 40, 25 60, 25 100 C 25 200, 75 200, 75 300 C 75 400, 25 400, 25 500 C 25 600, 75 600, 75 700 C 75 750, 50 760, 50 800"
                fill="none"
                stroke="#6e019c"
                strokeWidth="3"
                strokeDasharray="8 8"
                strokeLinecap="round"
                animate={{ strokeDashoffset: [0, -32] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 2.5
                }}
              />
            </svg>
          </div>

          {/* Steps List */}
          <div className="space-y-24 lg:space-y-36">
            {steps.map((st, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left/Right Visual Illustration Card */}
                  <div className="w-full lg:w-1/2 flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="relative w-full max-w-md aspect-video lg:aspect-[4/3] rounded-3xl border border-slate-100 shadow-[0_12px_35px_rgba(0,0,0,0.04)] bg-white group"
                    >
                      {/* Image Wrapper to handle rounding and clipping */}
                      <div className="w-full h-full rounded-3xl overflow-hidden relative bg-white flex items-center justify-center p-6">
                        {/* 3D Illustration Image */}
                        <img
                          src={st.image}
                          alt={st.title}
                          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-103"
                        />
                      </div>

                      {/* Number Circle Badge (Sits on center line timeline) */}
                      {/* On desktop, absolute positioned at the inner side to lay over the central winding road */}
                      <div
                        className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-[5px] border-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] bg-gradient-to-tr ${st.color} items-center justify-center font-bold text-white text-base font-mono z-20 select-none
                          ${isEven ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"}
                        `}
                      >
                        {st.step}
                      </div>

                      {/* Number Circle Badge (Mobile absolute fallback) */}
                      <div
                        className={`lg:hidden absolute top-4 left-4 w-11 h-11 rounded-full border-4 border-white shadow-md bg-gradient-to-tr ${st.color} flex items-center justify-center font-bold text-white text-xs font-mono z-20 select-none`}
                      >
                        {st.step}
                      </div>
                    </motion.div>
                  </div>

                  {/* Left/Right Description Card */}
                  <div className="w-full lg:w-1/2 select-text">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 35 : -35 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className="max-w-md mx-auto lg:mx-0"
                    >
                      <span className={`text-[10px] font-mono font-black tracking-widest ${st.textColor} uppercase mb-2 block`}>
                        {st.tagline}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 mb-4 tracking-tight leading-tight">
                        {st.title}
                      </h3>
                      <p className="text-slate-655 text-sm sm:text-base leading-relaxed mb-6">
                        {st.desc}
                      </p>

                      {/* Detailed Checklist */}
                      <ul className="space-y-3">
                        {st.points.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 font-medium"
                          >
                            <span
                              className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-white font-black text-[9px] select-none shadow-xs
                                ${isEven ? "bg-cyan-500 shadow-cyan-500/10" : "bg-brand-vibrant shadow-brand-vibrant/10"}
                              `}
                            >
                              ✓
                            </span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
