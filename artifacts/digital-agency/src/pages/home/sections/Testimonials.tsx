import React from "react";
import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rohan Gupta",
      role: "Founder, Raj Retail",
      location: "Patna",
      initial: "R",
      quote: "Zystra completely transformed our online presence. Within 3 months, our Google rankings jumped and we started getting 5–6 leads daily from our website."
    },
    {
      name: "Sanjana Singh",
      role: "Marketing Head, Bihar D2C",
      location: "Bihar",
      initial: "S",
      quote: "Their Meta Ads team is outstanding. Our Facebook ad cost-per-lead dropped by 60% in the first month of working with them."
    },
    {
      name: "Dr. Vikas Prasad",
      role: "Director, Prasad Health",
      location: "Gola Road",
      initial: "V",
      quote: "Finally a digital agency that understands the Bihar market. They don't just run ads — they think like our business partner."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-50/50 border-t border-slate-100 relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageCircle className="w-3.5 h-3.5 text-brand-medium" />
            Client Success
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 mb-4 tracking-tight">
            What Our Clients Say About Zystra
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base sm:text-lg">
            Real feedback from brand owners who scaled their operations in Bihar and India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white border border-slate-100 p-8 rounded-3xl relative overflow-hidden group hover:border-brand-vibrant/30 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-250 ease-out flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 font-serif text-base md:text-lg mb-8 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-vibrant/10 border border-brand-vibrant/20 flex items-center justify-center text-brand-vibrant font-bold text-lg">
                  {t.initial}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-none">{t.name}</h4>
                  <p className="text-[11px] text-brand-vibrant font-mono font-semibold uppercase tracking-wider mt-1">
                    {t.role}, <span className="text-slate-555">{t.location}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
