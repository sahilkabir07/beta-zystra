import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
    <section className="py-24 sm:py-32 bg-[#fafbfc] border-t border-slate-100 relative overflow-hidden">
      {/* Hollow watermark text background (mirroring the reference image watermark style) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10 flex flex-col justify-between py-16 opacity-[0.03]">
        <div className="text-[12rem] sm:text-[18rem] font-serif font-black text-brand-vibrant select-none uppercase tracking-widest leading-none translate-x-[-10%]">
          REVIEW
        </div>
        <div className="text-[12rem] sm:text-[18rem] font-serif font-black text-brand-vibrant select-none uppercase tracking-widest leading-none translate-x-[40%]">
          CLIENT
        </div>
        <div className="text-[12rem] sm:text-[18rem] font-serif font-black text-brand-vibrant select-none uppercase tracking-widest leading-none translate-x-[-5%]">
          STORY
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-28 relative">
          {/* Subtle Glowing Aura behind Header */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-32 bg-brand-vibrant/5 rounded-full blur-[60px] pointer-events-none -z-10" />

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
            What Our Clients Say About <span className="bg-gradient-to-r from-brand-vibrant via-brand-medium to-brand-dark bg-clip-text text-transparent">Zystra</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto font-normal">
            Real feedback from brand owners who scaled their operations in <span className="text-slate-800 font-semibold border-b border-brand-vibrant/20 pb-0.5">Bihar & India</span>.
          </p>
        </div>

        {/* Testimonials Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pt-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative select-text"
            >
              {/* Overlapping "TESTIMONIAL" circular badge (top-left) */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-brand-vibrant border-4 border-white shadow-[0_8px_24px_rgba(110,1,156,0.18)] flex flex-col justify-center items-center text-center p-2 text-white z-20 select-none rotate-[-6deg]">
                <span className="font-serif text-lg leading-none -mb-1 opacity-70">“</span>
                <span className="font-serif font-black text-[9.5px] tracking-wider leading-tight uppercase px-1">
                  GROWTH
                  <br />
                  PROOF
                </span>
                <span className="font-serif text-lg leading-none -mt-1 opacity-70">”</span>
              </div>

              {/* Main Testimonial Card with custom Asymmetrical Blob border radius */}
              <div className="w-full min-h-[380px] rounded-[3rem_8rem_3rem_6rem] bg-gradient-to-br from-brand-medium via-[#6e019c] to-brand-dark p-8 sm:p-10 text-white flex flex-col justify-between shadow-[0_20px_50px_rgba(110,1,156,0.16)] border-4 border-white hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden group">
                
                {/* Top Section */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex gap-1 text-amber-300">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    {/* Circular initial avatar */}
                    <div className="w-11 h-11 rounded-full border-2 border-white/60 flex items-center justify-center text-white font-mono font-black text-base bg-white/10 shadow-inner select-none shrink-0">
                      {t.initial}
                    </div>
                  </div>

                  <h3 className="font-serif font-black text-lg tracking-wider mb-1 uppercase select-text">
                    {t.name}
                  </h3>
                  <div className="text-[10px] font-mono font-black tracking-widest text-purple-200 uppercase mb-4">
                    REVIEW
                  </div>

                  <p className="font-serif text-white/95 text-sm sm:text-base leading-relaxed italic pr-2 select-text">
                    "{t.quote}"
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono select-none">
                  <span className="text-purple-200/90 font-bold uppercase tracking-wider">
                    {t.role}
                  </span>
                  <span className="text-white font-black hover:text-amber-200 transition-colors cursor-pointer flex items-center gap-1">
                    VERIFIED STORY ↗
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
