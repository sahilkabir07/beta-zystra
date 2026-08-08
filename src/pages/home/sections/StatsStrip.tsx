import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Users } from "@/components/shared/Icons";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

function AnimatedCounter({ value, prefix = "", suffix = "", decimals = 0 }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const springValue = useSpring(0, { bounce: 0, duration: 1500 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(latest);
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {prefix}{displayValue.toFixed(decimals)}{suffix}
    </span>
  );
}

export default function StatsStrip() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 140,
        damping: 18
      }
    }
  };

  return (
    <section className="py-12 sm:py-20 lg:pt-56 lg:pb-40 border-y border-slate-100 bg-white relative overflow-hidden select-none">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#6e019c_1.5px,transparent_1.5px)] [background-size:20px_20px]" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl lg:max-w-[1400px] relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 items-stretch"
        >
          {/* Card 1: Conversions (Lavender Glass Card) */}
          <div className="translate-y-0 lg:translate-y-[15px] flex">
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03, transition: { type: "spring", stiffness: 350, damping: 22 } }}
              className="relative p-5 rounded-3xl bg-gradient-to-br from-[#f5ebff] via-[#eee0ff] to-[#e4cbff] border border-purple-300/60 shadow-[0_20px_45px_rgba(147,51,234,0.12),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(147,51,234,0.22)] transition-all duration-300 w-full flex flex-col justify-between min-h-[165px] sm:min-h-[190px] overflow-hidden group cursor-pointer"
            >
              {/* Realistic Glass Edge Bevel Highlight */}
              <div className="absolute inset-0 pointer-events-none border-t border-l border-white/80 rounded-3xl" />
              <div className="absolute top-0 right-0 w-28 h-28 bg-white/30 rounded-bl-full pointer-events-none blur-xl group-hover:scale-125 transition-transform duration-500" />
              
              <div className="flex items-start justify-between w-full relative z-10">
                <div className="text-2xl sm:text-3xl font-sans font-black text-purple-950 tracking-tight leading-none">
                  <AnimatedCounter value={3.8} decimals={1} suffix=" M" />
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-900 text-white flex items-center justify-center shadow-lg group-hover:rotate-45 transition-transform duration-300 shrink-0 ml-1">
                  <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" strokeWidth={2.5} />
                </div>
              </div>
              <div className="mt-4 sm:mt-8 relative z-10">
                <h4 className="text-[10px] sm:text-xs font-black text-purple-900 font-sans uppercase tracking-wider">Conversions</h4>
                <p className="text-[10px] sm:text-[11px] text-purple-800 font-bold font-sans mt-0.5 sm:mt-1">21% More than last month</p>
              </div>
            </motion.div>
          </div>

          {/* Card 2: New Orders (Tactile Dark Card) */}
          <div className="translate-y-5 lg:translate-y-[65px] flex">
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03, transition: { type: "spring", stiffness: 350, damping: 22 } }}
              className="relative p-5 rounded-3xl bg-gradient-to-br from-[#1a1a1e] via-[#111114] to-[#09090b] border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.35),0_8px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_rgba(110,1,156,0.3)] transition-all duration-300 w-full flex flex-col justify-between min-h-[165px] sm:min-h-[190px] overflow-hidden group cursor-pointer"
            >
              {/* Realistic Glass Edge Bevel Highlight */}
              <div className="absolute inset-0 pointer-events-none border-t border-l border-white/15 rounded-3xl" />
              
              <div className="flex items-start justify-between w-full relative z-10">
                <div>
                  <h4 className="text-[10px] sm:text-xs text-zinc-400 font-sans font-semibold">New Orders</h4>
                  <div className="text-2xl sm:text-3xl font-sans font-black text-white tracking-tight leading-none mt-1 sm:mt-2">
                    <AnimatedCounter value={3.2} decimals={1} suffix=" k" />
                  </div>
                </div>
                <div className="w-8 h-8 rounded-2xl bg-[#8d00cb] text-white flex items-center justify-center shadow-lg shadow-purple-600/40 group-hover:rotate-45 transition-transform duration-300 shrink-0 ml-1">
                  <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" strokeWidth={2.5} />
                </div>
              </div>
              <div className="mt-4 sm:mt-8 relative z-10">
                <p className="text-[10px] sm:text-xs text-[#b967ff] font-extrabold font-sans">33% More than last month</p>
              </div>
            </motion.div>
          </div>

          {/* Card 3: Bounce Rate (Glossy Obsidian Card) */}
          <div className="translate-y-0 lg:translate-y-[15px] flex">
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03, transition: { type: "spring", stiffness: 350, damping: 22 } }}
              className="relative p-5 rounded-3xl bg-gradient-to-br from-[#1a1a1e] via-[#111114] to-[#09090b] border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.35),0_8px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_rgba(168,85,247,0.25)] transition-all duration-300 w-full flex flex-col justify-between min-h-[165px] sm:min-h-[190px] overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 pointer-events-none border-t border-l border-white/15 rounded-3xl" />
              
              <div className="flex items-start justify-between w-full relative z-10">
                <div>
                  <h4 className="text-[10px] sm:text-xs text-zinc-400 font-sans font-semibold">Bounce Rate</h4>
                  <div className="text-2xl sm:text-3xl font-sans font-black text-[#a855f7] tracking-tight leading-none mt-1 sm:mt-2">
                    <AnimatedCounter value={21} suffix="%" />
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 text-[#a855f7] flex items-center justify-center shadow-md group-hover:rotate-45 transition-transform duration-300 shrink-0 ml-1">
                  <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" strokeWidth={2.5} />
                </div>
              </div>
              <div className="mt-4 sm:mt-8 relative z-10">
                <p className="text-[10px] sm:text-[11px] text-zinc-400 font-sans">21% more than last month</p>
              </div>
            </motion.div>
          </div>

          {/* Card 4: Subscriptions (Dark Tactile Card) */}
          <div className="translate-y-5 lg:-translate-y-[35px] flex">
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03, transition: { type: "spring", stiffness: 350, damping: 22 } }}
              className="relative p-5 rounded-3xl bg-gradient-to-br from-[#1a1a1e] via-[#111114] to-[#09090b] border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.35),0_8px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_rgba(147,51,234,0.25)] transition-all duration-300 w-full flex flex-col justify-between min-h-[165px] sm:min-h-[190px] overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 pointer-events-none border-t border-l border-white/15 rounded-3xl" />
              
              <div className="flex items-start justify-between w-full relative z-10">
                <div>
                  <h4 className="text-[10px] sm:text-xs text-zinc-400 font-sans font-semibold">Subscriptions</h4>
                  <div className="text-2xl sm:text-3xl font-sans font-black text-purple-400 tracking-tight leading-none mt-1 sm:mt-2">
                    <AnimatedCounter value={3.4} decimals={1} suffix=" k" />
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0 ml-1">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-4 sm:mt-8 relative z-10">
                <p className="text-[10px] sm:text-[11px] text-zinc-400 font-sans">More than last month</p>
              </div>
            </motion.div>
          </div>

          {/* Card 5: New Users (Vibrant Purple Brand Gradient Card) */}
          <div className="translate-y-0 lg:-translate-y-[85px] flex">
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03, transition: { type: "spring", stiffness: 350, damping: 22 } }}
              className="relative p-5 rounded-3xl bg-gradient-to-br from-[#9a0ce2] via-[#7e02b2] to-[#5b0182] border border-white/20 shadow-[0_20px_45px_rgba(110,1,156,0.35),0_8px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_60px_rgba(110,1,156,0.5)] transition-all duration-300 w-full flex flex-col justify-between min-h-[165px] sm:min-h-[190px] overflow-hidden group text-white cursor-pointer"
            >
              <div className="absolute inset-0 pointer-events-none border-t border-l border-white/40 rounded-3xl" />
              
              <div className="flex items-start justify-between w-full relative z-10">
                <div>
                  <h4 className="text-[10px] sm:text-xs font-black font-sans uppercase tracking-wider">New Users</h4>
                  <p className="text-[9px] sm:text-[10px] text-purple-100/90 font-medium font-sans mt-0.5">28% more than last month</p>
                </div>
                <div className="w-8 h-8 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-md shrink-0 ml-1 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-end w-full mt-4 sm:mt-8 relative z-10">
                <div className="text-3xl sm:text-4xl font-sans font-black tracking-tight leading-none">
                  <AnimatedCounter value={13} suffix="k+" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 6: AI-Based (Tactile White Glass Card) */}
          <div className="translate-y-5 lg:-translate-y-[135px] flex">
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03, transition: { type: "spring", stiffness: 350, damping: 22 } }}
              className="relative p-5 rounded-3xl bg-gradient-to-br from-white via-white to-slate-100 border border-slate-200/80 shadow-[0_20px_45px_rgba(0,0,0,0.08),0_8px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(110,1,156,0.15)] transition-all duration-300 w-full flex flex-col justify-between min-h-[165px] sm:min-h-[190px] overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 pointer-events-none border-t border-l border-white rounded-3xl" />
              
              <div className="flex items-start justify-between w-full relative z-10">
                <div>
                  <h3 className="text-lg sm:text-2xl font-black font-sans text-slate-900 leading-none">AI-Based.</h3>
                  <span className="text-[10px] sm:text-xs font-bold text-purple-600 font-mono tracking-widest uppercase mt-1 block">APPROACH.</span>
                </div>
                <div className="w-8 h-8 rounded-2xl bg-purple-900 text-white flex items-center justify-center shadow-md group-hover:rotate-45 transition-transform duration-300 shrink-0 ml-1">
                  <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" strokeWidth={2.5} />
                </div>
              </div>
              <div className="mt-4 sm:mt-8 relative z-10">
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-sans">Precision growth engines</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
