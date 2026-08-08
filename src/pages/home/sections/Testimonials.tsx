import React from "react";
import { motion } from "framer-motion";
import { Star, Flag, Clock, Bookmark, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rohan Gupta",
      role: "Founder, Raj Retail",
      location: "Patna",
      initial: "R",
      avatarBg: "from-purple-600 to-violet-600",
      bannerBg: "from-purple-900 via-indigo-900 to-slate-950",
      metric: "5-6x",
      metricLabel: "Leads Boost",
      duration: "3 Months",
      rating: "5.0",
      quote: "Zystra completely transformed our online presence. Within 3 months, our Google rankings jumped and we started getting 5–6 leads daily from our website.",
      tag: "SEO & Lead Gen",
      isDark: true
    },
    {
      name: "Sanjana Singh",
      role: "Marketing Head, Bihar D2C",
      location: "Bihar",
      initial: "S",
      avatarBg: "from-fuchsia-600 to-purple-600",
      bannerBg: "from-violet-900 via-fuchsia-900 to-purple-950",
      metric: "2.5x",
      metricLabel: "ROI Boost",
      duration: "1 Month",
      rating: "5.0",
      quote: "Their Meta Ads team is outstanding. Our Facebook ad cost-per-lead dropped by 60% in the first month of working with them.",
      tag: "Paid Advertising",
      isDark: true
    },
    {
      name: "Dr. Vikas Prasad",
      role: "Director, Prasad Health",
      location: "Gola Road",
      initial: "V",
      avatarBg: "from-indigo-600 to-blue-600",
      bannerBg: "from-slate-950 via-purple-950 to-indigo-950",
      metric: "+150%",
      metricLabel: "Enquiries",
      duration: "6 Months",
      rating: "5.0",
      quote: "Finally a digital agency that understands the Bihar market. They don't just run ads — they think like our business partner.",
      tag: "Brand Scaling",
      isDark: true
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#09031a] border-t border-purple-900/30 relative overflow-hidden text-white">
      {/* Decorative Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-xs font-mono font-bold uppercase tracking-widest text-purple-300 mb-4">
            CLIENT REVIEWS & RESULTS
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-white mb-5 tracking-tight leading-tight">
            Where Strategy Meets <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-300 bg-clip-text text-transparent">Real Growth</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
            We don't just deliver campaigns; we deliver business transformation. See how our clients scale their reach.
          </p>
        </div>

        {/* ── REVIEWS CARDS GRID (Pure CSS Gradient Cards matching Profile UI) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[28px] overflow-hidden border border-white/10 bg-[#121216] shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            >
              {/* Top Banner Gradient with Category Pill Tag */}
              <div className={`relative h-28 w-full bg-gradient-to-r ${t.bannerBg} overflow-hidden p-4`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
                
                {/* Top-Right Category Badge */}
                <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-black/40 border border-white/20 backdrop-blur-md text-[11px] font-mono font-bold text-white flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  <span>{t.tag}</span>
                </div>
              </div>

              {/* Card Body Container */}
              <div className="p-5 sm:p-6 pt-0 relative">
                {/* Overlapping Avatar Initials Badge */}
                <div className="flex items-end justify-between mb-4">
                  <div className="relative -mt-8 z-10">
                    <div className={`w-16 h-16 rounded-full border-4 border-[#121216] bg-gradient-to-tr ${t.avatarBg} shadow-lg flex items-center justify-center text-white text-2xl font-black font-mono`}>
                      {t.initial}
                    </div>
                  </div>

                  {/* Bookmark Button */}
                  <button className="w-9 h-9 rounded-full bg-white/10 text-slate-300 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>

                {/* Name & Title */}
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-black tracking-tight font-sans text-white">
                    {t.name}
                  </h3>
                  <p className="text-xs font-mono font-medium text-slate-400">
                    {t.role}
                  </p>
                </div>

                {/* Quote Paragraph */}
                <p className="text-xs sm:text-sm leading-relaxed mb-5 italic font-sans text-slate-300/90">
                  "{t.quote}"
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-2 py-3 px-2 rounded-2xl mb-5 text-center border bg-white/[0.03] border-white/10 text-slate-300">
                  {/* Rating */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{t.rating}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Rating</span>
                  </div>

                  {/* Metric Result */}
                  <div className="flex flex-col items-center border-x border-white/10">
                    <div className="flex items-center gap-1 text-xs font-extrabold text-purple-400">
                      <Flag className="w-3.5 h-3.5 text-purple-400" />
                      <span>{t.metric}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">{t.metricLabel}</span>
                  </div>

                  {/* Duration */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 text-xs font-bold text-purple-300">
                      <Clock className="w-3.5 h-3.5 text-purple-300" />
                      <span>{t.duration}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Timeframe</span>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <button
                  onClick={() => window.location.href = "/contact"}
                  className="w-full py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02]"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
