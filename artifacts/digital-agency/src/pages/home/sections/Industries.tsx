import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users } from "@/components/shared/Icons";
import {
  ShoppingBag,
  Building2,
  GraduationCap,
  Stethoscope,
  Utensils,
  Zap,
  Scale,
  Factory,
  Network
} from "lucide-react";

interface Industry {
  num: string;
  name: string;
  desc: string;
  x: number;
  y: number;
  left: string;
  top: string;
  icon: React.ComponentType<any>;
}

const industriesData: Industry[] = [
  {
    num: "01",
    name: "Retail & FMCG",
    desc: "Hyper-local SEO, custom e-commerce, and high-conversion store-visit campaigns.",
    x: 870,
    y: 375,
    left: "87%",
    top: "50%",
    icon: ShoppingBag
  },
  {
    num: "02",
    name: "Real Estate",
    desc: "High-quality lead gen, immersive landing pages, and automated CRM pipelines.",
    x: 762,
    y: 566,
    left: "76.2%",
    top: "75.5%",
    icon: Building2
  },
  {
    num: "03",
    name: "EdTech & Schools",
    desc: "Student enrollment campaigns, brand positioning, and enrollment funnel strategies.",
    x: 500,
    y: 645,
    left: "50%",
    top: "86%",
    icon: GraduationCap
  },
  {
    num: "04",
    name: "Healthcare",
    desc: "Doctor branding, booking systems, local SEO, and trust-building patient acquisition.",
    x: 238,
    y: 566,
    left: "23.8%",
    top: "75.5%",
    icon: Stethoscope
  },
  {
    num: "05",
    name: "Food & Restaurant",
    desc: "Online ordering growth, local search visibility, and viral social media branding.",
    x: 130,
    y: 375,
    left: "13%",
    top: "50%",
    icon: Utensils
  },
  {
    num: "06",
    name: "Startups & D2C",
    desc: "Growth hacking, performance marketing, CRO, and rapid brand scaling.",
    x: 238,
    y: 184,
    left: "23.8%",
    top: "24.5%",
    icon: Zap
  },
  {
    num: "07",
    name: "Professional Services",
    desc: "High-intent search ads, authority building, and B2B client acquisition systems.",
    x: 500,
    y: 105,
    left: "50%",
    top: "14%",
    icon: Scale
  },
  {
    num: "08",
    name: "B2B Manufacturing",
    desc: "LinkedIn outreach, SEO authority hubs, and global industrial lead generation.",
    x: 762,
    y: 184,
    left: "76.2%",
    top: "24.5%",
    icon: Factory
  }
];

export default function Industries() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isHubHovered, setIsHubHovered] = useState(false);

  return (
    <section className="py-24 bg-[#fafbfc] relative overflow-hidden">
      {/* Decorative Radial Background Glows (themed around brand-vibrant purple) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-vibrant/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-medium/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-vibrant/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-vibrant/5 text-brand-vibrant text-xs font-bold uppercase tracking-wider mb-4 border border-brand-vibrant/15 shadow-2xs">
            <Users className="w-3.5 h-3.5 text-brand-vibrant" />
            Diverse Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-900 mb-4 tracking-tight leading-tight">
            We Grow Brands Across Every Industry
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From retail shops in Patna to startups targeting pan-India audiences — Zystra has helped businesses across diverse industries build their digital presence and outpace their competition.
          </p>
        </div>

        {/* Desktop Interactive Mind Map (visible only on lg screens) */}
        <div className="relative w-full aspect-[4/3] max-w-4xl mx-auto hidden lg:block">
          {/* Connecting Lines SVG Layer */}
          <svg
            viewBox="0 0 1000 750"
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
          >
            {industriesData.map((card, idx) => {
              const isHovered = hoveredIdx === idx;
              const isFlowing = isHovered || isHubHovered;
              return (
                <g key={idx}>
                  {/* Outer glowing line on hover */}
                  {isHovered && (
                    <motion.line
                      x1="500"
                      y1="375"
                      x2={card.x}
                      y2={card.y}
                      stroke="rgba(110, 1, 156, 0.4)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                  {/* Base connecting line */}
                  <motion.line
                    x1="500"
                    y1="375"
                    x2={card.x}
                    y2={card.y}
                    stroke={
                      isHovered
                        ? "rgba(110, 1, 156, 1)"
                        : isHubHovered
                        ? "rgba(110, 1, 156, 0.45)"
                        : "rgba(110, 1, 156, 0.16)"
                    }
                    strokeWidth={isHovered ? "3.5" : "2.5"}
                    strokeDasharray="8 8"
                    animate={{
                      strokeDashoffset: isFlowing ? [0, -32] : [0, 0]
                    }}
                    transition={{
                      repeat: Infinity,
                      ease: "linear",
                      duration: isHovered ? 0.8 : isHubHovered ? 1.2 : 3
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Central Pulsing Hub */}
          <motion.div
            onHoverStart={() => setIsHubHovered(true)}
            onHoverEnd={() => setIsHubHovered(false)}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 50px rgba(110, 1, 156, 0.45)"
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full border-[6px] border-white shadow-[0_15px_45px_rgba(110,1,156,0.22)] bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-vibrant flex flex-col items-center justify-center text-center p-6 text-white z-20 cursor-pointer select-none"
          >
            {/* Animated Ripples */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-brand-vibrant/5 -z-10"
              animate={{
                scale: [1, 1.35],
                opacity: [0.5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-brand-medium/5 -z-10"
              animate={{
                scale: [1, 1.35],
                opacity: [0.5, 0]
              }}
              transition={{
                duration: 3,
                delay: 1.5,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />

            <Network className="w-8 h-8 mb-2.5 text-white/95 animate-pulse" />
            <span className="text-[10px] font-mono font-black tracking-[0.25em] text-purple-200 uppercase mb-1">
              INDUSTRIES
            </span>
            <h3 className="text-lg font-serif font-black leading-tight text-white px-2">
              We Grow
            </h3>
            <span className="text-xs font-mono font-medium text-purple-200 mt-1">
              8 Core Areas
            </span>
          </motion.div>

          {/* Surrounding Industry Circles */}
          {industriesData.map((card, idx) => {
            const Icon = card.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={idx}
                onHoverStart={() => setHoveredIdx(idx)}
                onHoverEnd={() => setHoveredIdx(null)}
                style={{
                  left: card.left,
                  top: card.top
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0 20px 45px rgba(110, 1, 156, 0.25)",
                  zIndex: 30
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border-[5px] transition-all duration-300 flex flex-col items-center justify-center text-center p-4 z-10 cursor-pointer select-none overflow-hidden
                  ${isHovered 
                    ? "border-white shadow-[0_20px_45px_rgba(110,1,156,0.25)]" 
                    : "bg-[#faf9fc] border-brand-medium/15 shadow-[0_12px_30px_rgba(0,0,0,0.035)]"
                  }
                `}
              >
                {/* Smooth hover gradient transition overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-brand-medium to-brand-vibrant transition-opacity duration-300 z-0"
                  style={{ opacity: isHovered ? 1 : 0 }}
                />

                {/* Content elements wrapped in relative to stack above the hover gradient */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  {/* Number Badge */}
                  <span className={`text-[9.5px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full mb-1.5 backdrop-blur-xs transition-colors duration-300
                    ${isHovered ? "bg-white/20 text-white" : "bg-brand-vibrant/10 text-brand-vibrant"}
                  `}>
                    {card.num}
                  </span>

                  {/* Industry Icon */}
                  <Icon className={`w-5 h-5 mb-1.5 transition-colors duration-300 group-hover:scale-110
                    ${isHovered ? "text-white" : "text-brand-vibrant"}
                  `} />

                  {/* Industry Name */}
                  <h4 className={`text-xs sm:text-[13px] font-bold font-serif leading-tight mb-1 transition-colors duration-300
                    ${isHovered ? "text-white" : "text-brand-dark"}
                  `}>
                    {card.name}
                  </h4>

                  {/* Industry Desc */}
                  <p className={`text-[9.5px] leading-snug font-normal px-1 line-clamp-3 transition-colors duration-300
                    ${isHovered ? "text-white/85" : "text-slate-600"}
                  `}>
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/Tablet Circle Grid (visible only on screens smaller than lg) */}
        <div className="lg:hidden mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {industriesData.map((card, idx) => {
            const Icon = card.icon;
            const [localHover, setLocalHover] = useState(false);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onHoverStart={() => setLocalHover(true)}
                onHoverEnd={() => setLocalHover(false)}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 15px 35px rgba(110, 1, 156, 0.22)"
                }}
                className={`w-48 h-48 sm:w-52 sm:h-52 mx-auto rounded-full border-[5px] flex flex-col items-center justify-center text-center p-5 relative overflow-hidden transition-all duration-300 cursor-pointer select-none
                  ${localHover 
                    ? "border-white shadow-[0_15px_35px_rgba(110, 1, 156, 0.22)]" 
                    : "bg-[#faf9fc] border-brand-medium/15 shadow-[0_12px_30px_rgba(0,0,0,0.035)]"
                  }
                `}
              >
                {/* Smooth hover gradient transition overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-brand-medium to-brand-vibrant transition-opacity duration-300 z-0"
                  style={{ opacity: localHover ? 1 : 0 }}
                />

                <div className="relative z-10 flex flex-col items-center justify-center">
                  {/* Number Badge */}
                  <span className={`text-[9.5px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full mb-2 backdrop-blur-xs transition-colors duration-300
                    ${localHover ? "bg-white/20 text-white" : "bg-brand-vibrant/10 text-brand-vibrant"}
                  `}>
                    {card.num}
                  </span>

                  {/* Industry Icon */}
                  <Icon className={`w-6 h-6 mb-2 transition-colors duration-300
                    ${localHover ? "text-white" : "text-brand-vibrant"}
                  `} />

                  {/* Industry Name */}
                  <h4 className={`text-xs sm:text-sm font-bold font-serif leading-tight mb-1 px-1 transition-colors duration-300
                    ${localHover ? "text-white" : "text-brand-dark"}
                  `}>
                    {card.name}
                  </h4>

                  {/* Industry Desc */}
                  <p className={`text-[10px] leading-snug font-normal px-2 line-clamp-3 transition-colors duration-300
                    ${localHover ? "text-white/85" : "text-slate-600"}
                  `}>
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
