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
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-32 pointer-events-none -z-10" 
            style={{ background: "radial-gradient(circle, rgba(110, 1, 156, 0.08) 0%, rgba(110, 1, 156, 0) 70%)" }}
          />



          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Our Simple <span className="bg-gradient-to-r from-brand-vibrant via-brand-medium to-brand-dark bg-clip-text text-transparent">4-Step Growth</span> Process
          </h2>
          <p className="text-slate-500 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto font-normal">
            From insights to intelligence, how we orchestrate <span className="text-slate-800 font-semibold border-b border-brand-vibrant/20 pb-0.5">digital scale</span>.
          </p>
        </div>

        {/* Winding Timeline Path Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Winding SVG Road (Center aligned & 100% Visible on ALL screens) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-16 sm:w-28 lg:w-32 pointer-events-none z-10 block">
            <svg
              viewBox="0 0 100 800"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              {/* Outer Thick Glow Path */}
              <path
                d="M 50 6 C 50 40, 25 60, 25 100 C 25 200, 75 200, 75 300 C 75 400, 25 400, 25 500 C 25 600, 75 600, 75 700 C 75 750, 50 760, 50 794"
                fill="none"
                stroke="rgba(124, 58, 237, 0.15)"
                strokeWidth="18"
                strokeLinecap="round"
              />
              {/* Inner Track Path */}
              <path
                d="M 50 6 C 50 40, 25 60, 25 100 C 25 200, 75 200, 75 300 C 75 400, 25 400, 25 500 C 25 600, 75 600, 75 700 C 75 750, 50 760, 50 794"
                fill="none"
                stroke="rgba(124, 58, 237, 0.3)"
                strokeWidth="8"
                strokeLinecap="round"
              />
              {/* Animated Center Dash flow */}
              <motion.path
                d="M 50 6 C 50 40, 25 60, 25 100 C 25 200, 75 200, 75 300 C 75 400, 25 400, 25 500 C 25 600, 75 600, 75 700 C 75 750, 50 760, 50 794"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="3.5"
                strokeDasharray="8 8"
                strokeLinecap="round"
                animate={{ strokeDashoffset: [0, -32] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 2.2
                }}
              />

              {/* Starting Knob */}
              <circle cx="50" cy="6" r="6" fill="rgba(124, 58, 237, 0.3)" />
              <circle cx="50" cy="6" r="3.5" fill="#7c3aed" stroke="#ffffff" strokeWidth="1.5" />

              {/* Ending Knob */}
              <circle cx="50" cy="794" r="6" fill="rgba(124, 58, 237, 0.3)" />
              <circle cx="50" cy="794" r="3.5" fill="#7c3aed" stroke="#ffffff" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Steps List (Side-by-Side Alternating Rows on ALL Screens) */}
          <div className="space-y-12 sm:space-y-24 lg:space-y-36">
            {steps.map((st, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-row items-center justify-between gap-3 sm:gap-10 lg:gap-20 ${
                    !isEven ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Left/Right Visual Illustration Card */}
                  <div className="w-1/2 flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
                      className="relative w-full max-w-md aspect-square sm:aspect-video lg:aspect-[4/3] rounded-2xl sm:rounded-3xl border border-slate-100 shadow-[0_8px_25px_rgba(0,0,0,0.04)] bg-white group"
                    >
                      {/* Image Wrapper */}
                      <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden relative bg-white flex items-center justify-center p-2.5 sm:p-5 lg:p-6">
                        {/* 3D Illustration Image */}
                        <img
                          src={st.image}
                          alt={st.title}
                          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-103"
                        />
                      </div>

                      {/* Step Number Circle Badge (Centered directly over central timeline road on ALL screens) */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 lg:w-14 lg:h-14 rounded-full border-2 sm:border-4 lg:border-[5px] border-white shadow-[0_6px_15px_rgba(0,0,0,0.12)] bg-gradient-to-tr ${st.color} flex items-center justify-center font-bold text-white text-[10px] sm:text-xs lg:text-base font-mono z-20 select-none
                          ${isEven ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"}
                        `}
                      >
                        {st.step}
                      </div>
                    </motion.div>
                  </div>

                  {/* Left/Right Description Card */}
                  <div className="w-1/2 select-text text-left">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.35, delay: 0.08, ease: "easeOut" }}
                      className="max-w-md mx-auto lg:mx-0"
                    >
                      <span className={`text-[7px] sm:text-[10px] font-mono font-black tracking-wider ${st.textColor} uppercase mb-1 block`}>
                        {st.tagline}
                      </span>
                      <h3 className="text-xs sm:text-2xl lg:text-3xl font-serif font-black text-slate-900 mb-1 sm:mb-3 leading-tight tracking-tight">
                        {st.title}
                      </h3>
                      <p className="text-slate-655 text-[8.5px] sm:text-sm lg:text-base leading-snug sm:leading-relaxed mb-2 sm:mb-5 line-clamp-2 sm:line-clamp-none">
                        {st.desc}
                      </p>

                      {/* Detailed Checklist */}
                      <ul className="space-y-1 sm:space-y-2.5">
                        {st.points.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-start gap-1.5 sm:gap-3 text-[8px] sm:text-xs lg:text-sm text-slate-600 font-medium leading-tight"
                          >
                            <span
                              className={`mt-0.5 w-3 h-3 sm:w-4 sm:h-4 rounded-full flex items-center justify-center shrink-0 text-white font-black text-[7px] sm:text-[9px] select-none shadow-xs
                                ${isEven ? "bg-cyan-500 shadow-cyan-500/10" : "bg-brand-vibrant shadow-brand-vibrant/10"}
                              `}
                            >
                              ✓
                            </span>
                            <span>{pt}</span>
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
