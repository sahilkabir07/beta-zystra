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
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const springValue = useSpring(0, { bounce: 0, duration: 2000 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    } else {
      springValue.set(0);
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
        staggerChildren: 0.12,
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
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 lg:pt-56 lg:pb-40 border-y border-slate-100 bg-slate-50/50 relative">
      {/* Background abstract element to highlight the grid layout */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#6e019c_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-6 max-w-7xl lg:max-w-[1400px] relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4 items-stretch"
        >
          {/* Card 1: Conversions (Mint Lavender) - lg:translate-y-[15px] */}
          <div className="lg:translate-y-[15px] flex">
            <motion.div 
              variants={cardVariants}
              className="relative p-5 rounded-2xl bg-gradient-to-br from-[#f3e8ff] via-[#f3e8ff] to-[#e9d5ff] border border-purple-200/50 shadow-[0_15px_30px_rgba(147,51,234,0.04)] hover:shadow-[0_20px_40px_rgba(147,51,234,0.08)] hover:-translate-y-1 transition-all duration-300 w-full flex flex-col justify-between min-h-[185px] overflow-hidden group"
            >
              {/* Natural glossy shine overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.25] to-transparent opacity-85" />
              <div className="absolute inset-0 pointer-events-none border border-t-white/40 border-l-white/40 border-b-transparent border-r-transparent rounded-2xl" />
              
              <div className="flex items-start justify-between w-full relative z-10">
                <div className="text-3xl font-sans font-black text-purple-950 tracking-tight leading-none">
                  <AnimatedCounter value={3.8} decimals={1} suffix=" M" />
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-900 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <ArrowUpRight className="w-4.5 h-4.5" strokeWidth={2.5} />
                </div>
              </div>
              <div className="mt-8 relative z-10">
                <h4 className="text-xs font-bold text-purple-900 font-sans uppercase tracking-wider">Conversions</h4>
                <p className="text-[11px] text-purple-800 font-semibold font-sans mt-1">21% More than last month</p>
              </div>
            </motion.div>
          </div>

          {/* Card 2: New Orders (Matte Black with Purple Accent) - lg:translate-y-[65px] */}
          <div className="lg:translate-y-[65px] flex">
            <motion.div 
              variants={cardVariants}
              className="relative p-5 rounded-2xl bg-gradient-to-br from-[#1c1c20] via-[#121214] to-[#0b0b0d] border border-zinc-800/80 shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 w-full flex flex-col justify-between min-h-[185px] overflow-hidden group"
            >
              {/* Natural glossy shine overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent" />
              <div className="absolute inset-0 pointer-events-none border border-t-white/[0.08] border-l-white/[0.08] border-b-transparent border-r-transparent rounded-2xl" />
              
              <div className="flex items-start justify-between w-full relative z-10">
                <div>
                  <h4 className="text-xs text-zinc-400 font-sans font-semibold">New Orders</h4>
                  <div className="text-3xl font-sans font-black text-white tracking-tight leading-none mt-2">
                    <AnimatedCounter value={3.2} decimals={1} suffix=" k" />
                  </div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-[#8d00cb] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <ArrowUpRight className="w-4.5 h-4.5" strokeWidth={2.5} />
                </div>
              </div>
              <div className="mt-8 relative z-10">
                <p className="text-xs text-[#a855f7] font-bold font-sans">33% More than last month</p>
              </div>
            </motion.div>
          </div>

          {/* Card 3: Bounce Rate (Glossy Black with Purple Accent) - lg:translate-y-[15px] */}
          <div className="lg:translate-y-[15px] flex">
            <motion.div 
              variants={cardVariants}
              className="relative p-5 rounded-2xl bg-gradient-to-br from-[#1c1c20] via-[#121214] to-[#0b0b0d] border border-zinc-800/80 shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 w-full flex flex-col justify-between min-h-[185px] overflow-hidden group"
            >
              {/* Natural glossy shine overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent" />
              <div className="absolute inset-0 pointer-events-none border border-t-white/[0.08] border-l-white/[0.08] border-b-transparent border-r-transparent rounded-2xl" />
              
              <div className="flex items-start justify-between w-full relative z-10">
                <div>
                  <h4 className="text-xs text-zinc-400 font-sans font-semibold">Bounce Rate</h4>
                  <div className="text-3xl font-sans font-black text-[#a855f7] tracking-tight leading-none mt-2">
                    <AnimatedCounter value={21} suffix="%" />
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-850 text-[#a855f7] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <ArrowUpRight className="w-4.5 h-4.5" strokeWidth={2.5} />
                </div>
              </div>
              <div className="mt-8 relative z-10">
                <p className="text-[11px] text-zinc-400 font-sans">21% more than last month</p>
              </div>
            </motion.div>
          </div>

          {/* Card 4: Subscriptions (Glossy Black with Purple Accent) - lg:translate-y-[-35px] */}
          <div className="lg:translate-y-[-35px] flex">
            <motion.div 
              variants={cardVariants}
              className="relative p-5 rounded-2xl bg-gradient-to-br from-[#1c1c20] via-[#121214] to-[#0b0b0d] border border-zinc-800/80 shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 w-full flex flex-col justify-between min-h-[185px] overflow-hidden group"
            >
              {/* Natural glossy shine overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent" />
              <div className="absolute inset-0 pointer-events-none border border-t-white/[0.08] border-l-white/[0.08] border-b-transparent border-r-transparent rounded-2xl" />
              
              <div className="flex items-start justify-between w-full relative z-10">
                <div>
                  <h4 className="text-xs text-zinc-400 font-sans font-semibold">Subscriptions</h4>
                  <div className="text-3xl font-sans font-black text-purple-400 tracking-tight leading-none mt-2">
                    <AnimatedCounter value={3.4} decimals={1} suffix=" k" />
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-purple-500/30 text-purple-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-8 relative z-10">
                <p className="text-[11px] text-zinc-400 font-sans">More than last month</p>
              </div>
            </motion.div>
          </div>

          {/* Card 5: New Users (Vibrant Purple Brand Gradient) - lg:translate-y-[-85px] */}
          <div className="lg:translate-y-[-85px] flex">
            <motion.div 
              variants={cardVariants}
              className="relative p-5 rounded-2xl bg-gradient-to-br from-[#8d00cb] via-[#7e02b2] to-[#6e019c] border border-purple-450/30 shadow-[0_15px_30px_rgba(110,1,156,0.06)] hover:shadow-[0_20px_40px_rgba(110,1,156,0.12)] hover:-translate-y-1 transition-all duration-300 w-full flex flex-col justify-between min-h-[185px] overflow-hidden group text-white"
            >
              {/* Natural glossy shine overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.18] to-transparent opacity-85" />
              <div className="absolute inset-0 pointer-events-none border border-t-white/40 border-l-white/40 border-b-transparent border-r-transparent rounded-2xl" />
              
              <div className="flex items-start justify-between w-full relative z-10">
                <div>
                  <h4 className="text-xs font-bold font-sans uppercase tracking-wider">New Users</h4>
                  <p className="text-[10px] text-purple-100/90 font-medium font-sans mt-0.5">28% more than last month</p>
                </div>
                <div className="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center shadow-sm">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-end w-full mt-8 relative z-10">
                <div className="text-4xl font-sans font-black tracking-tight leading-none">
                  <AnimatedCounter value={13} suffix="k+" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 6: AI-Based (Premium White) - lg:translate-y-[-135px] */}
          <div className="lg:translate-y-[-135px] flex">
            <motion.div 
              variants={cardVariants}
              className="relative p-5 rounded-2xl bg-gradient-to-br from-white via-white to-slate-50 border border-slate-200 shadow-[0_15px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 w-full flex flex-col justify-between min-h-[185px] overflow-hidden group"
            >
              {/* Natural glossy shine overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/50 to-transparent" />
              <div className="absolute inset-0 pointer-events-none border border-t-white border-l-white border-b-transparent border-r-transparent rounded-2xl" />
              
              <div className="flex items-start justify-between w-full relative z-10">
                <div />
                <div className="w-8 h-8 rounded-xl bg-[#6e019c] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                </div>
              </div>
              <div className="mt-8 relative z-10">
                <h3 className="text-2xl font-sans font-black text-slate-900 tracking-tight leading-none">
                  AI-Based.
                </h3>
                <p className="text-[10px] font-black text-[#6e019c] font-sans uppercase tracking-widest mt-2">Approach.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
