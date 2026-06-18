import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Target, ArrowUpRight, ChevronRight, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Search Engine Optimisation (SEO)",
      desc: "Rank higher on Google with data-backed SEO strategies tailored to your industry and location. We handle on-page, off-page, and technical SEO — built for long-term, sustainable traffic growth.",
      link: "/services/seo",
      badge: "Best SEO Agency Bihar"
    },
    {
      title: "Meta Ads (Facebook & Instagram)",
      desc: "Hyper-targeted paid social campaigns that reach your exact audience — by age, location, interest, and behaviour. We create ads that stop the scroll and convert viewers into customers.",
      link: "/services/meta-ads",
      badge: "Meta Ads India"
    },
    {
      title: "Google Ads (PPC)",
      desc: "High-intent traffic, delivered instantly. Our Google Ads specialists build precision PPC campaigns that maximise your ROI and minimise wasted spend — from Search to Display to YouTube.",
      link: "/services/google-ads",
      badge: "Google Ads Bihar"
    },
    {
      title: "Website Design & Development",
      desc: "Your website is your 24/7 salesperson. We design fast, mobile-first, conversion-optimised websites that look world-class and perform even better — from brochure sites to full e-commerce stores.",
      link: "/services/website-designing",
      badge: "Web Development Patna"
    },
    {
      title: "Google Business Profile & Local SEO",
      desc: "Dominate \"near me\" searches and appear at the top of Google Maps. We fully optimise and manage your Google Business Profile so local customers find you first — every time.",
      link: "/services/gbp-local-seo",
      badge: "Local SEO Bihar"
    },
    {
      title: "Performance Marketing",
      desc: "We go beyond impressions and clicks. Our performance marketing approach tracks every conversion, every lead, and every rupee — so you only pay for results that move the needle.",
      link: "/services/performance-marketing",
      badge: "Performance Marketing India"
    }
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background visual details */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-vibrant/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-vibrant/10 border border-brand-vibrant/20 text-brand-vibrant text-xs font-bold uppercase tracking-wider mb-4">
            <Target className="w-3.5 h-3.5" />
            Grow Your Presence
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 mb-6 tracking-tight">
            Our Core Digital Marketing Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From search visibility to high-converting ads, from stunning websites to powerful brand identities — here's how Zystra drives growth for businesses across Bihar, Jharkhand, UP, and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-8 rounded-3xl border border-slate-100 bg-white group hover:border-brand-vibrant hover:shadow-[0_20px_50px_rgba(110,1,156,0.08)] hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-200 ease-out relative flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-brand-medium bg-brand-vibrant/10 border border-brand-vibrant/20 rounded-full px-2.5 py-1 uppercase">
                    {s.badge}
                  </span>
                  <Link href={s.link}>
                    <span className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-450 hover:bg-brand-vibrant hover:text-white transition-colors cursor-pointer">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-brand-vibrant transition-colors">
                  <Link href={s.link} className="cursor-pointer">{s.title}</Link>
                </h3>
                <p className="text-slate-555 text-sm leading-relaxed mb-6">{s.desc}</p>
              </div>
              <Link href={s.link} className="text-brand-vibrant hover:text-brand-medium font-semibold text-xs inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read details <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <span className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white rounded-full h-14 px-8 text-base font-bold shadow-md hover:scale-105 transition-all cursor-pointer">
              Explore All 11 Services <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
