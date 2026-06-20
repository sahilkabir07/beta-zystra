import React from "react";
import { Link } from "wouter";
import { motion, Variants } from "framer-motion";
import { Target, ArrowUpRight, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Search Engine Optimisation (SEO)",
      desc: "Rank higher on Google with data-backed SEO strategies tailored to your industry and location. We handle on-page, off-page, and technical SEO — built for long-term, sustainable traffic growth.",
      link: "/services/seo",
      badge: "Best SEO Agency Bihar",
      image: "/services/seo.png",
      bgColor: "bg-[#eae3f0]"
    },
    {
      title: "Meta Ads (Facebook & Instagram)",
      desc: "Hyper-targeted paid social campaigns that reach your exact audience — by age, location, interest, and behaviour. We create ads that stop the scroll and convert viewers into customers.",
      link: "/services/meta-ads",
      badge: "Meta Ads India",
      image: "/services/meta-ads.png",
      bgColor: "bg-[#e2edd8]"
    },
    {
      title: "Google Ads (PPC)",
      desc: "High-intent traffic, delivered instantly. Our Google Ads specialists build precision PPC campaigns that maximise your ROI and minimise wasted spend — from Search to Display to YouTube.",
      link: "/services/google-ads",
      badge: "Google Ads Bihar",
      image: "/services/google-ads.png",
      bgColor: "bg-[#deebf0]"
    },
    {
      title: "Website Design & Development",
      desc: "Your website is your 24/7 salesperson. We design fast, mobile-first, conversion-optimised websites that look world-class and perform even better — from brochure sites to full e-commerce stores.",
      link: "/services/website-designing",
      badge: "Web Development Patna",
      image: "/services/web-dev.png",
      bgColor: "bg-[#e8e4f5]"
    },
    {
      title: "Google Business Profile & Local SEO",
      desc: "Dominate \"near me\" searches and appear at the top of Google Maps. We fully optimise and manage your Google Business Profile so local customers find you first — every time.",
      link: "/services/gbp-local-seo",
      badge: "Local SEO Bihar",
      image: "/services/local-seo.png",
      bgColor: "bg-[#e2f0ea]"
    },
    {
      title: "Performance Marketing",
      desc: "We go beyond impressions and clicks. Our performance marketing approach tracks every conversion, every lead, and every rupee — so you only pay for results that move the needle.",
      link: "/services/performance-marketing",
      badge: "Performance Marketing India",
      image: "/services/performance-marketing.png",
      bgColor: "bg-[#f0ece9]"
    }
  ];

  const imgWrapperVariants: Variants = {
    initial: { 
      x: 0, 
      y: -15,
      transition: { type: "spring", stiffness: 180, damping: 20 }
    },
    hover: { 
      x: "27.5%", 
      y: "-27.5%",
      transition: { type: "spring", stiffness: 180, damping: 20 }
    }
  };

  const imgVariants: Variants = {
    initial: { 
      scale: 1, 
      transition: { type: "spring", stiffness: 180, damping: 20 }
    },
    hover: { 
      scale: 0.32, 
      transition: { type: "spring", stiffness: 180, damping: 20 }
    }
  };

  const coverTitleVariants: Variants = {
    initial: { opacity: 1, y: 0 },
    hover: { 
      opacity: 0, 
      y: 15,
      transition: { duration: 0.25, ease: "easeOut" } 
    }
  };

  const curtainVariants: Variants = {
    initial: { 
      y: "100%",
      transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] }
    },
    hover: { 
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const contentVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    hover: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.35, delay: 0.15, ease: "easeOut" } 
    }
  };

  return (
    <section id="services" className="pt-0 pb-24 sm:pt-0 sm:pb-32 bg-slate-50 relative overflow-hidden">
      {/* SVG Clip Path Definition for the Curtain Corner Cutout */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <clipPath id="curtain-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 L 0.55 0 A 0.45 0.45 0 0 0 1.0 0.45 L 1.0 1.0 L 0 1.0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Background visual details */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-vibrant/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-20 text-center max-w-4xl mx-auto">
          {/* Creative Accent Line instead of Badge */}
          <div className="flex items-center justify-center gap-2 mb-6 select-none">
            <span className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-brand-vibrant/60" />
            <span className="w-2 h-2 rounded-full bg-brand-vibrant/80 animate-pulse" />
            <span className="w-10 h-[1.5px] bg-gradient-to-l from-transparent to-brand-vibrant/60" />
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif font-black text-slate-900 mb-6 tracking-tight leading-none">
            Our Core <span className="bg-gradient-to-r from-[#6e019c] via-[#561d9a] to-[#3b82f6] bg-clip-text text-transparent">Digital Marketing</span> Services
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
            From search visibility to high-converting ads, from stunning websites to powerful brand identities — here's how Zystra drives growth for businesses <span className="font-semibold text-slate-900 border-b-2 border-brand-vibrant/10 pb-0.5">everywhere</span>.
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
            >
              <motion.div
                initial="initial"
                whileHover="hover"
                className="relative overflow-hidden w-full aspect-[4/5] rounded-[32px] border border-slate-200/60 shadow-[0_15px_30px_rgba(0,0,0,0.02)] cursor-pointer bg-white"
              >
                {/* COVER LAYER (Normal State) */}
                <div className={`absolute inset-0 p-8 flex flex-col justify-between ${s.bgColor}`}>
                  {/* Spacer to push title down */}
                  <div className="flex-1" />
                  
                  {/* Title block */}
                  <motion.div
                    variants={coverTitleVariants}
                    className="flex items-center justify-between w-full"
                  >
                    <h3 className="text-lg md:text-xl font-serif font-black text-slate-900 tracking-tight leading-tight max-w-[80%]">
                      {s.title}
                    </h3>
                    <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-800 shadow-sm border border-slate-100 flex-shrink-0">
                      <ArrowUpRight className="w-4.5 h-4.5" />
                    </span>
                  </motion.div>
                </div>

                {/* IMAGE CONTAINER (Absolute wrapper for aspect-ratio independent scaling/translation) */}
                <motion.div
                  variants={imgWrapperVariants}
                  className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
                >
                  <motion.img
                    variants={imgVariants}
                    src={s.image}
                    alt={s.title}
                    className="w-[70%] object-contain max-h-[60%] filter drop-shadow-md pointer-events-none"
                  />
                </motion.div>

                {/* CURTAIN LAYER (Slides up on hover) */}
                <motion.div
                  variants={curtainVariants}
                  style={{ clipPath: "url(#curtain-clip)" }}
                  className="absolute inset-0 p-6 pt-10 bg-gradient-to-br from-[#4c1380] via-[#350260] to-[#1b0033] text-white flex flex-col justify-between z-10"
                >
                  <motion.div variants={contentVariants} className="max-w-[52%] flex flex-col gap-3">
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-serif font-extrabold tracking-tight leading-tight text-white">
                      {s.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/85 text-[11.5px] sm:text-xs md:text-[13px] leading-relaxed font-sans">
                      {s.desc}
                    </p>
                  </motion.div>

                  {/* Explore Button */}
                  <motion.div variants={contentVariants}>
                    <Link 
                      href={s.link} 
                      className="inline-flex items-center justify-center gap-2 bg-brand-vibrant hover:bg-brand-medium text-white px-4.5 py-2.5 rounded-full text-[11px] font-bold transition-all shadow-md w-fit cursor-pointer hover:scale-105 active:scale-95"
                    >
                      Explore Service <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
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
