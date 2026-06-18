import React from "react";
import { motion } from "framer-motion";

export default function Marquee() {
  const text = "AI Digital Strategy · Performance Marketing · SEO Patna · Social Media Campaigns · Local SEO Bihar · Custom Web Development · PPC Google Ads · ";
  return (
    <div className="w-full bg-slate-50 border-y border-slate-100 py-6 overflow-hidden flex whitespace-nowrap relative z-10">
      <motion.div
        className="text-xs sm:text-sm font-mono tracking-widest text-brand-vibrant font-bold flex uppercase gap-4"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <span>{text}{text}{text}</span>
      </motion.div>
    </div>
  );
}
