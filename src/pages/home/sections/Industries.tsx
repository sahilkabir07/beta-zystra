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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Radial Background Glows (themed around brand-vibrant purple) - Optimized */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] pointer-events-none" 
        style={{ background: "radial-gradient(circle, rgba(110, 1, 156, 0.08) 0%, rgba(110, 1, 156, 0) 70%)" }}
      />
      <div 
        className="absolute -top-40 -left-40 w-96 h-96 pointer-events-none" 
        style={{ background: "radial-gradient(circle, rgba(86, 29, 154, 0.07) 0%, rgba(86, 29, 154, 0) 70%)" }}
      />
      <div 
        className="absolute -bottom-40 -right-40 w-96 h-96 pointer-events-none" 
        style={{ background: "radial-gradient(circle, rgba(110, 1, 156, 0.07) 0%, rgba(110, 1, 156, 0) 70%)" }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          {/* Subtle Glowing Aura behind Header */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-32 pointer-events-none -z-10" 
            style={{ background: "radial-gradient(circle, rgba(110, 1, 156, 0.08) 0%, rgba(110, 1, 156, 0) 70%)" }}
          />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
            We Grow Brands Across <span className="bg-gradient-to-r from-brand-vibrant via-brand-medium to-brand-dark bg-clip-text text-transparent">Every Industry</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            From retail shops in Patna to startups targeting pan-India audiences — <span className="text-slate-800 font-semibold border-b border-brand-vibrant/20 pb-0.5">Zystra</span> has helped businesses build their digital presence and outpace their competition.
          </p>
        </div>

        {/* Interactive Mind Map (Responsive for ALL screen sizes) */}
        <div className="relative w-full aspect-square max-w-[350px] sm:max-w-xl lg:max-w-4xl mx-auto block">
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
                  <line
                    x1="500"
                    y1="375"
                    x2={card.x}
                    y2={card.y}
                    stroke={
                      isHovered
                        ? "rgba(110, 1, 156, 1)"
                        : isHubHovered
                        ? "rgba(110, 1, 156, 0.45)"
                        : "rgba(110, 1, 156, 0.2)"
                    }
                    strokeWidth={isHovered ? "3.5" : "2"}
                    strokeDasharray="6 6"
                    style={{
                      animation: isFlowing ? `industryFlow ${isHovered ? 0.8 : 2}s linear infinite` : "none"
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
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-40 sm:h-40 lg:w-52 lg:h-52 rounded-full border-[3px] sm:border-[5px] lg:border-[6px] border-white shadow-[0_10px_35px_rgba(110,1,156,0.22)] bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-vibrant flex flex-col items-center justify-center text-center p-2 sm:p-5 lg:p-6 text-white z-20 cursor-pointer select-none"
          >
            {/* Animated Ripples (GPU CSS) */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-44 sm:h-44 lg:w-56 lg:h-56 rounded-full bg-brand-vibrant/10 -z-10 animate-ping pointer-events-none"
              style={{ animationDuration: "3s" }}
            />

            <Network className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mb-0.5 sm:mb-2 text-white/95 animate-pulse" />
            <span className="text-[6px] sm:text-[9px] lg:text-[10px] font-mono font-black tracking-[0.2em] text-purple-200 uppercase mb-0.5">
              INDUSTRIES
            </span>
            <h3 className="text-[10px] sm:text-base lg:text-lg font-serif font-black leading-tight text-white px-1">
              We Grow
            </h3>
            <span className="text-[6px] sm:text-[10px] lg:text-xs font-mono font-medium text-purple-200 mt-0.5">
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
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                  delay: idx * 0.03
                }}
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0 20px 45px rgba(110, 1, 156, 0.25)",
                  zIndex: 30
                }}
                whileTap={{ scale: 1.05 }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full border-[2.5px] sm:border-[4px] lg:border-[5px] transition-all duration-300 flex flex-col items-center justify-center text-center p-1 sm:p-3 lg:p-4 z-10 cursor-pointer select-none overflow-hidden
                  ${isHovered 
                    ? "border-white shadow-[0_15px_35px_rgba(110,1,156,0.25)]" 
                    : "bg-[#faf9fc] border-brand-medium/15 shadow-[0_8px_20px_rgba(0,0,0,0.035)]"
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
                  <span className={`text-[5.5px] sm:text-[8px] lg:text-[9.5px] font-mono font-bold tracking-wider px-1 sm:px-2 py-0.2 sm:py-0.5 rounded-full mb-0.5 sm:mb-1.5 backdrop-blur-xs transition-colors duration-300
                    ${isHovered ? "bg-white/20 text-white" : "bg-brand-vibrant/10 text-brand-vibrant"}
                  `}>
                    {card.num}
                  </span>

                  {/* Industry Icon */}
                  <Icon className={`w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 mb-0.5 sm:mb-1.5 transition-colors duration-300
                    ${isHovered ? "text-white" : "text-brand-vibrant"}
                  `} />

                  {/* Industry Name */}
                  <h4 className={`text-[7.5px] sm:text-xs lg:text-[13px] font-bold font-serif leading-tight mb-0.5 transition-colors duration-300 px-0.5
                    ${isHovered ? "text-white" : "text-brand-dark"}
                  `}>
                    {card.name}
                  </h4>

                  {/* Industry Desc */}
                  <p className={`hidden sm:block text-[8.5px] lg:text-[9.5px] leading-snug font-normal px-1 line-clamp-2 transition-colors duration-300
                    ${isHovered ? "text-white/85" : "text-slate-600"}
                  `}>
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes industryFlow {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -24; }
          }
        `
      }} />
    </section>
  );
}
