import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowUpRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rohan Gupta",
      role: "Founder, Raj Retail",
      location: "Patna",
      initial: "R",
      metric: "5-6x",
      metricLabel: "Daily Leads Boost",
      quote: "Zystra completely transformed our online presence. Within 3 months, our Google rankings jumped and we started getting 5–6 leads daily from our website.",
      tag: "SEO & Lead Gen",
      glowColor: "rgba(168, 85, 247, 0.15)"
    },
    {
      name: "Sanjana Singh",
      role: "Marketing Head, Bihar D2C",
      location: "Bihar",
      initial: "S",
      metric: "2.5x",
      metricLabel: "Meta Ads ROI Boost",
      quote: "Their Meta Ads team is outstanding. Our Facebook ad cost-per-lead dropped by 60% in the first month of working with them.",
      tag: "Paid Advertising",
      glowColor: "rgba(236, 72, 153, 0.15)"
    },
    {
      name: "Dr. Vikas Prasad",
      role: "Director, Prasad Health",
      location: "Gola Road",
      initial: "V",
      metric: "+150%",
      metricLabel: "Patient Enquiries",
      quote: "Finally a digital agency that understands the Bihar market. They don't just run ads — they think like our business partner.",
      tag: "Brand Scaling",
      glowColor: "rgba(99, 102, 241, 0.15)"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Decorative background grids & blurred blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-200/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-indigo-100/30 blur-3xl" />
        {/* Modern Dot Matrix Background */}
        <div 
          className="absolute inset-0 opacity-[0.4]" 
          style={{ 
            backgroundImage: "radial-gradient(#e2e8f0 1.5px, transparent 1.5px)", 
            backgroundSize: "24px 24px" 
          }} 
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
            Where Strategy Meets <span className="bg-gradient-to-r from-brand-vibrant via-brand-medium to-brand-dark bg-clip-text text-transparent">Real Growth</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-normal">
            We don't just deliver campaigns; we deliver business transformation. See how our clients scale their reach.
          </p>
        </div>

        {/* Testimonials Horizontal Carousel on Mobile / 3-Col Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-8 px-2 scrollbar-none lg:grid lg:grid-cols-3 lg:gap-8 max-w-6xl mx-auto pt-4 lg:overflow-visible lg:px-0 lg:pb-0">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="snap-center min-w-[285px] max-w-[315px] sm:min-w-[340px] w-full flex-shrink-0 lg:min-w-0 lg:max-w-none lg:flex-shrink relative group cursor-pointer"
            >
              {/* Dynamic Glow Background Effect on Hover */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
                style={{ backgroundColor: t.glowColor }}
              />

              {/* Main Glassmorphic Testimonial Card */}
              <div className="h-full bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(110,1,156,0.06)] hover:border-purple-200/80 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                
                {/* Floating Metric Badge */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/[0.03] rounded-bl-full -z-10 transition-all duration-500 group-hover:scale-110" />

                {/* Top Section */}
                <div>
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    {/* Star Rating & Category Tag */}
                    <div>
                      <span className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[10px] font-mono font-bold tracking-wider uppercase mb-1.5">
                        {t.tag}
                      </span>
                      <div className="flex gap-1 text-amber-400 mt-1">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Quote Icon Accent */}
                    <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-purple-100 group-hover:text-purple-200/80 transition-colors duration-300" />
                  </div>

                  {/* Main Metric Callout */}
                  <div className="mb-5 sm:mb-6">
                    <span className="text-3xl sm:text-5xl font-mono font-black bg-gradient-to-r from-brand-vibrant to-purple-600 bg-clip-text text-transparent">
                      {t.metric}
                    </span>
                    <span className="block text-[11px] sm:text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mt-1">
                      {t.metricLabel}
                    </span>
                  </div>

                  {/* Client Quote */}
                  <p className="font-sans text-slate-600 text-xs sm:text-[15px] leading-relaxed mb-6 sm:mb-8 relative z-10 italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Bottom Section: Client Details */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar Initials with custom premium gradients */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-brand-vibrant to-purple-600 flex items-center justify-center text-white font-mono font-bold text-xs sm:text-sm shadow-sm">
                      {t.initial}
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-slate-800 text-xs sm:text-sm uppercase tracking-wide">
                        {t.name}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  {/* Verified Story Action Link */}
                  <div className="flex items-center gap-0.5 text-purple-600 group-hover:text-purple-700 text-xs font-mono font-bold tracking-wider opacity-60 group-hover:opacity-100 transition-all duration-300">
                    <span>CASE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Hint Dots (visible only on screens smaller than lg) */}
        <div className="flex lg:hidden items-center justify-center gap-2 mt-4">
          <span className="w-6 h-1.5 rounded-full bg-brand-vibrant" />
          <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />
        </div>
      </div>
    </section>
  );
}
