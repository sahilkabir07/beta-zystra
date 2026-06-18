import React from "react";
import { motion } from "framer-motion";
import { Users } from "@/components/shared/Icons";

export default function Industries() {
  const industries = [
    { name: "Local Retail & FMCG", bg: "from-brand-vibrant/10 to-brand-vibrant/0 hover:border-brand-medium" },
    { name: "Real Estate & Construction", bg: "from-emerald-500/10 to-emerald-500/0 hover:border-emerald-400" },
    { name: "Education & EdTech", bg: "from-blue-500/10 to-blue-500/0 hover:border-blue-400" },
    { name: "Healthcare & Clinics", bg: "from-pink-500/10 to-pink-500/0 hover:border-pink-400" },
    { name: "Food & Restaurant Chains", bg: "from-amber-500/10 to-amber-500/0 hover:border-amber-400" },
    { name: "Startups & D2C Brands", bg: "from-purple-500/10 to-purple-500/0 hover:border-purple-400" },
    { name: "Professional Services (CA, Legal, HR)", bg: "from-rose-500/10 to-rose-500/0 hover:border-rose-400" },
    { name: "Manufacturing & B2B", bg: "from-sky-500/10 to-sky-500/0 hover:border-sky-400" }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            Diverse Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 mb-4">
            We Grow Brands Across Every Industry
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From retail shops in Patna to startups targeting pan-India audiences — Zystra has helped businesses across diverse industries build their digital presence and outpace their competition.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-mono font-bold text-slate-400 text-center uppercase tracking-widest mb-8">
            Industries We Serve
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className={`px-6 py-4 rounded-2xl bg-gradient-to-br ${ind.bg} border border-slate-200 bg-white text-slate-800 font-serif font-bold text-sm sm:text-base hover:shadow-md transition-all duration-300 cursor-default flex items-center gap-2.5`}
              >
                <span className="w-2 h-2 rounded-full bg-brand-vibrant" />
                {ind.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
