import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "@/components/shared/Icons";

export default function HowWeWork() {
  const steps = [
    {
      step: "01",
      title: "Free Digital Audit",
      desc: "We review your current website, SEO health, social presence, and ad performance — and show you exactly where the gaps are. No cost. No commitment."
    },
    {
      step: "02",
      title: "Custom Strategy",
      desc: "Based on your business goals, target audience, and competition, we build a tailor-made digital growth strategy — not a template, not a package."
    },
    {
      step: "03",
      title: "Execution with AI Precision",
      desc: "Our team executes your campaign using AI-powered tools for keyword research, audience targeting, content creation, and real-time bid optimisation."
    },
    {
      step: "04",
      title: "Measure, Report & Scale",
      desc: "We track every metric that matters — traffic, leads, conversions, ROAS — and share transparent weekly/monthly reports. Then we scale what's working."
    }
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">

          <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 mb-4">
            Our Simple 4-Step Growth Process
          </h2>
          <p className="text-slate-655 text-base">
            From insights to intelligence, how we orchestrate digital scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Timeline line overlay on desktop */}
          <div className="hidden lg:block absolute top-[45px] left-8 right-8 h-0.5 bg-slate-100 -z-10" />

          {steps.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative group bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-lg hover:border-brand-vibrant/25 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-vibrant/10 border border-brand-vibrant/20 flex items-center justify-center mb-6 group-hover:bg-brand-vibrant group-hover:text-white transition-colors duration-300 shadow-xs shrink-0">
                <span className="font-serif font-black text-lg text-brand-medium group-hover:text-white transition-colors duration-300">{st.step}</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{st.title}</h3>
              <p className="text-slate-555 text-sm sm:text-base leading-relaxed">{st.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
