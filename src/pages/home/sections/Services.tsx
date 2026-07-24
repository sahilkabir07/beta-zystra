import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      num: "01",
      title: "Search Engine Optimisation (SEO)",
      desc: "Rank higher on Google with data-backed SEO strategies tailored to your industry and location. On-page, off-page, and technical SEO — built for long-term, sustainable traffic growth.",
      link: "/services/seo",
      badge: "Best SEO Agency Bihar",
      image: "/services/seo.png",
      mockup: (
        <div className="my-4 p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20 backdrop-blur-md">
          <div className="flex items-center justify-between text-[11px] font-mono text-purple-300 mb-2">
            <span>Google SERP Rank</span>
            <span className="text-emerald-400 font-bold">#1 Position ↑</span>
          </div>
          <div className="h-1.5 w-full bg-purple-950 rounded-full overflow-hidden">
            <div className="h-full w-4/5 bg-gradient-to-r from-purple-500 to-emerald-400" />
          </div>
        </div>
      )
    },
    {
      num: "02",
      title: "Meta Ads (Facebook & Instagram)",
      desc: "Hyper-targeted paid social campaigns that reach your exact audience — by age, location, interest, and behaviour. Scroll-stopping ads that convert viewers into customers.",
      link: "/services/meta-ads",
      badge: "Meta Ads India",
      image: "/services/meta-ads.png",
      mockup: (
        <div className="my-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-xs font-mono">
            Meta Active
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-mono">
            4.8x ROAS
          </span>
        </div>
      )
    },
    {
      num: "03",
      title: "Google Ads (PPC)",
      desc: "High-intent traffic, delivered instantly. Our Google Ads specialists build precision PPC campaigns that maximise your ROI and minimise wasted spend — Search, Display & YouTube.",
      link: "/services/google-ads",
      badge: "Google Ads Bihar",
      image: "/services/google-ads.png",
      mockup: (
        <div className="my-4 p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 backdrop-blur-md flex items-center justify-between">
          <span className="text-xs font-mono text-indigo-200">PPC Search Intent</span>
          <span className="px-2.5 py-0.5 rounded bg-indigo-500/30 text-indigo-200 text-[10px] font-mono font-bold uppercase">Optimized</span>
        </div>
      )
    },
    {
      num: "04",
      title: "Website Design & Development",
      desc: "Your website is your 24/7 salesperson. We design fast, mobile-first, conversion-optimised websites that look world-class and perform even better.",
      link: "/services/website-designing",
      badge: "Web Development Patna",
      image: "/services/web-dev.png",
      mockup: (
        <div className="my-4 flex items-center gap-2 text-xs font-mono text-slate-300">
          <span className="px-3 py-1 rounded-lg bg-purple-600/40 text-purple-200 font-bold border border-purple-400/30">Mobile First</span>
          <span className="px-3 py-1 rounded-lg bg-white/5 text-slate-400">99+ Speed</span>
        </div>
      )
    },
    {
      num: "05",
      title: "Google Business Profile & Local SEO",
      desc: "Dominate \"near me\" searches and appear at the top of Google Maps. We fully optimise and manage your Google Business Profile so local customers find you first.",
      link: "/services/gbp-local-seo",
      badge: "Local SEO Bihar",
      image: "/services/local-seo.png",
      mockup: (
        <div className="my-4 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs font-mono text-purple-300">
          <span>Map Pack #1</span>
          <div className="flex gap-0.5 text-amber-400 text-[10px]">★★★★★</div>
        </div>
      )
    },
    {
      num: "06",
      title: "Performance Marketing",
      desc: "We go beyond impressions and clicks. Our performance marketing approach tracks every conversion, every lead, and every rupee — so you only pay for real results.",
      link: "/services/performance-marketing",
      badge: "Performance Marketing India",
      image: "/services/performance-marketing.png",
      mockup: (
        <div className="my-4 p-4 rounded-2xl bg-fuchsia-950/40 border border-fuchsia-500/20 backdrop-blur-md flex items-center justify-between">
          <span className="text-xs font-mono text-fuchsia-200">Tracked Conversions</span>
          <span className="text-emerald-400 font-mono font-bold text-xs">+10X Growth</span>
        </div>
      )
    }
  ];

  return (
    <section id="services" className="pt-24 pb-24 sm:pt-36 sm:pb-32 relative overflow-hidden" style={{ background: "#080510" }}>
      {/* Background Ambient Glow Effects */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none opacity-25 blur-[160px] rounded-full" 
        style={{ background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(99, 102, 241, 0.15) 60%, transparent 100%)" }}
      />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #a855f7 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono tracking-[0.2em] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            OUR CORE CAPABILITIES
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[0.98]" style={{ fontFamily: "'Bricolage Grotesque', serif" }}>
            Our Core <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">Digital Marketing</span> Services
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
            From search visibility to high-converting ads, from stunning websites to powerful brand identities — here's how Zystra drives measurable growth for businesses everywhere.
          </p>
        </div>

        {/* Services Bento Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: "easeOut" }}
              className="flex"
            >
              <Link href={s.link} className="w-full">
                <div className="group relative w-full h-full rounded-[32px] overflow-hidden border border-purple-500/20 bg-[#0d0722]/90 backdrop-blur-2xl p-7 sm:p-8 shadow-2xl flex flex-col justify-between transition-all duration-500 hover:border-purple-400/60 hover:shadow-[0_20px_50px_rgba(168,85,247,0.35)] cursor-pointer min-h-[350px]">
                  
                  {/* Glowing Bottom Ambient Light Bar */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-1.5 bg-gradient-to-r from-purple-600 via-fuchsia-400 to-indigo-500 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* DEFAULT CARD CONTENT (Glass UI) */}
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-xs font-mono font-black text-purple-400 tracking-widest uppercase">
                          {s.num}. SERVICE
                        </span>
                        <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-400 transition-all duration-300 shadow-md">
                          <ArrowUpRight className="w-4.5 h-4.5 text-purple-300 group-hover:text-white transition-colors" />
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-purple-300 transition-colors" style={{ fontFamily: "'Bricolage Grotesque', serif" }}>
                        {s.title}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed mb-3">
                        {s.desc}
                      </p>

                      {/* Embedded Bento UI Mockup */}
                      {s.mockup}
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-400 group-hover:text-purple-300 uppercase tracking-widest">
                        EXPLORE SERVICE <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>

                  {/* HOVER IMAGE SLIDE-UP OVERLAY */}
                  <div className="absolute inset-0 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Dark Overlay Gradient so text is 100% legible over image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070412] via-[#070412]/85 to-purple-950/60" />

                    {/* Content on top of sliding poster image */}
                    <div className="absolute inset-0 p-7 sm:p-8 flex flex-col justify-between z-30">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-black text-purple-300 tracking-widest uppercase">
                          {s.num}. SERVICE
                        </span>
                        <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg">
                          <ArrowUpRight className="w-4.5 h-4.5" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight" style={{ fontFamily: "'Bricolage Grotesque', serif" }}>
                          {s.title}
                        </h3>
                        <p className="text-purple-100/90 text-sm leading-relaxed">
                          {s.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/20">
                        <span className="inline-flex items-center gap-2 text-xs font-mono font-black text-white uppercase tracking-widest">
                          VIEW SERVICE DETAILS <ArrowRight className="w-4 h-4 text-purple-300" />
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <Link href="/services">
            <span className="group inline-flex items-center gap-3 px-9 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_10px_30px_rgba(124,58,237,0.4)] hover:scale-[1.03] cursor-pointer">
              Explore All Services <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
