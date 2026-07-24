import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Quote, ArrowUpRight, Mouse, Zap, Command, Star } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-white text-slate-900 overflow-hidden flex flex-col justify-between select-none pt-24 sm:pt-28 pb-0 font-sans">
      
      {/* Main Center Content: Huge Stacked Typography in Zystra Brand Fonts */}
      <div className="relative z-20 container mx-auto px-4 sm:px-8 max-w-7xl my-auto py-8 sm:py-12 flex flex-col items-center justify-center text-center">
        
        {/* Top Decorative Graphic Badges */}
        <div className="w-full relative flex flex-col items-center">
          
          {/* Top Plus Icon */}
          <span className="absolute -top-8 left-6 sm:left-16 text-[#6e019c]/60 font-mono font-bold text-3xl select-none">
            +
          </span>

          {/* Top Star Sparkle Accent */}
          <Sparkles className="absolute -top-6 right-8 sm:right-20 w-8 h-8 text-[#6e019c]" />

          {/* MAIN STACKED TYPOGRAPHY BLOCK (Pure White Theme, Pure Colors, No Gradients) */}
          <div className="flex flex-col items-center justify-center tracking-tighter leading-[0.9] font-serif font-black uppercase text-[12.8vw] sm:text-[8.5vw] lg:text-[7vw] xl:text-[98px] select-none my-1">
            
            {/* --- LINE 1: WE GROW [3D Insta] BRANDS, [3D Meta] --- */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-5 my-1">
              <span className="text-slate-900">WE</span>
              <span className="text-[#6e019c] font-black tracking-tight">GROW</span>
              
              {/* 3D Instagram Icon (Floating) */}
              <motion.div
                animate={{ y: [-6, 6, -6], rotate: [-6, -2, -6] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-[0.9em] h-[0.9em] hover:scale-125 transition-transform duration-300"
              >
                <img src="/heroBgImg/insta.png" alt="Instagram 3D" className="w-full h-full object-contain" />
              </motion.div>

              <span className="text-slate-900">BRANDS,</span>

              {/* 3D Meta / Facebook Icon (Floating) */}
              <motion.div
                animate={{ y: [6, -6, 6], rotate: [6, 10, 6] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="inline-flex items-center justify-center w-[0.85em] h-[0.85em] hover:scale-125 transition-transform duration-300"
              >
                <img src="/heroBgImg/meta.png" alt="Meta 3D" className="w-full h-full object-contain" />
              </motion.div>
            </div>

            {/* --- LINE 2: [3D YouTube] (CREATE) [3D LinkedIn] EXPERIENCES --- */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 my-1 relative">
              {/* 3D YouTube Icon (Floating) */}
              <motion.div
                animate={{ y: [-7, 7, -7], rotate: [-12, -8, -12] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="inline-flex items-center justify-center w-[0.85em] h-[0.85em] hover:scale-125 transition-transform duration-300"
              >
                <img src="/heroBgImg/youtube.png" alt="YouTube 3D" className="w-full h-full object-contain" />
              </motion.div>

              {/* CREATE with Zystra Purple Oval Loop */}
              <div className="relative inline-block px-5 sm:px-9 py-1">
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 200 80" preserveAspectRatio="none">
                  <ellipse cx="100" cy="40" rx="96" ry="36" fill="none" stroke="#6e019c" strokeWidth="4" strokeDasharray="4 0" transform="rotate(-2 100 40)" />
                </svg>
                <span className="text-slate-900 relative z-10">CREATE</span>
              </div>

              {/* 3D LinkedIn Icon (Floating) */}
              <motion.div
                animate={{ y: [7, -7, 7], rotate: [12, 16, 12] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="inline-flex items-center justify-center w-[0.85em] h-[0.85em] hover:scale-125 transition-transform duration-300"
              >
                <img src="/heroBgImg/linkedIn.png" alt="LinkedIn 3D" className="w-full h-full object-contain" />
              </motion.div>

              <span className="text-slate-900 font-black">EXPERIENCES</span>
            </div>

            {/* --- LINE 3: [3D Twitter] SOLVE [3D Google Ads] BUSINESS PROBLEMS. --- */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 my-1 relative">
              {/* 3D Twitter/X Icon (Floating) */}
              <motion.div
                animate={{ y: [-6, 6, -6], rotate: [6, 2, 6] }}
                transition={{ duration: 4.0, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="inline-flex items-center justify-center w-[0.8em] h-[0.8em] hover:scale-125 transition-transform duration-300"
              >
                <img src="/heroBgImg/twitter.png" alt="Twitter 3D" className="w-full h-full object-contain" />
              </motion.div>

              <span className="text-[#6e019c] font-black">SOLVE</span>

              {/* 3D Google Ads Icon (Floating) */}
              <motion.div
                animate={{ y: [6, -6, 6], rotate: [-6, -10, -6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="inline-flex items-center justify-center w-[0.85em] h-[0.85em] hover:scale-125 transition-transform duration-300"
              >
                <img src="/heroBgImg/googleAdds.png" alt="Google Ads 3D" className="w-full h-full object-contain" />
              </motion.div>

              <span className="text-slate-900">BUSINESS</span>
              <span className="text-[#6e019c] font-black">PROBLEMS.</span>

              {/* 3D Google Icon (Floating) */}
              <motion.div
                animate={{ y: [-7, 7, -7], rotate: [12, 8, 12] }}
                transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                className="inline-flex items-center justify-center w-[0.75em] h-[0.75em] hover:scale-125 transition-transform duration-300"
              >
                <img src="/heroBgImg/google.png" alt="Google 3D" className="w-full h-full object-contain" />
              </motion.div>
            </div>

          </div>

        </div>

        {/* 
          STARBURST "LET'S TALK!" STICKER Positioned High Up
        */}
        <div className="relative w-full max-w-5xl flex justify-end mt-2 sm:-mt-20 lg:-mt-28 mb-0 sm:-mb-6 z-30 pointer-events-none pr-2 sm:pr-8">
          <motion.a
            href="/contact"
            initial={{ scale: 0.8, rotate: 12 }}
            animate={{ scale: 1, rotate: [8, 14, 8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-auto cursor-pointer group"
          >
            {/* Starburst Badge in Zystra Vibrant Purple (#6E019C) */}
            <div className="relative w-28 h-28 sm:w-40 sm:h-40 flex items-center justify-center filter drop-shadow-md group-hover:scale-110 transition-transform duration-300">
              <svg className="absolute inset-0 w-full h-full text-[#6e019c] fill-current" viewBox="0 0 100 100">
                <path d="M50 0 L61 11 L75 4 L80 18 L94 18 L93 33 L100 44 L93 56 L94 70 L80 71 L75 85 L61 78 L50 90 L39 78 L25 85 L20 71 L6 70 L7 56 L0 44 L7 33 L6 18 L20 18 L25 4 L39 11 Z" />
              </svg>
              <div className="relative z-10 text-center font-sans font-black text-white text-base sm:text-xl leading-tight uppercase tracking-wider px-2 flex flex-col items-center justify-center">
                <span>LET'S</span>
                <span>TALK!</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3] mt-0.5 text-white" />
              </div>
            </div>
          </motion.a>
        </div>

        {/* BOTTOM STATEMENT CARD */}
        <div className="w-full max-w-4xl mx-auto mt-6 relative z-20">
          <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8 flex items-start sm:items-center gap-5 text-left">
            {/* Zystra Purple Vertical Badge */}
            <div className="px-2.5 py-4 rounded-full bg-[#6e019c] text-white font-mono text-xs font-black tracking-widest uppercase write-vertical flex items-center justify-center shadow-sm shrink-0">
              <span className="[writing-mode:vertical-lr] rotate-180">©2026</span>
            </div>

            {/* Paragraph */}
            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed my-auto">
              A strong brand needs a strong purpose. We're here to uncover yours. Through our intentional AI-driven growth engineering process, we ensure our clients are <span className="font-semibold text-slate-900">(always)</span> putting their best foot forward.
            </p>
          </div>
        </div>

      </div>

      {/* INFINITE MOVING SERVICES MARQUEE - FLUSH AT BOTTOM */}
      <div className="relative z-20 w-full border-t border-b border-purple-800 bg-[#6e019c] py-6 sm:py-7 overflow-hidden mt-auto mb-0 select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-8 sm:gap-14 whitespace-nowrap w-max transform-gpu will-change-transform"
        >
          {[
            "AI Growth Engineering",
            "Performance Marketing",
            "Bespoke Web Development",
            "Branding & Creative Strategy",
            "SEO & Content Automation",
            "Conversion Rate Optimization",
            "Omnichannel Ad Campaigns",
            "Social Media Scaling",
            "AI Growth Engineering",
            "Performance Marketing",
            "Bespoke Web Development",
            "Branding & Creative Strategy",
            "SEO & Content Automation",
            "Conversion Rate Optimization",
            "Omnichannel Ad Campaigns",
            "Social Media Scaling"
          ].map((service, idx) => (
            <div key={idx} className="flex items-center gap-4 font-mono text-sm sm:text-base font-black tracking-widest uppercase">
              <span className={`w-3 h-3 rounded-full shrink-0 ${idx % 2 === 0 ? "bg-white" : "bg-slate-900"}`} />
              <span className={idx % 2 === 0 ? "text-white font-black" : "text-slate-900 font-black"}>
                {service}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
