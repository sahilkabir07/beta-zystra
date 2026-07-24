import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ServicesHero() {


  const marqueeItems = [
    "DIGITAL MARKETING",
    "PERFORMANCE ADS",
    "SEO OPTIMISATION",
    "META & INSTAGRAM ADS",
    "GOOGLE ADS PPC",
    "BRANDING & CREATIVE",
    "CONVERSION FUNNELS",
    "REVOPS & AUTOMATION",
    "VIDEO AD PRODUCTION",
    "WEB DEVELOPMENT"
  ];

  return (
    <section className="relative w-full overflow-hidden select-none">
      {/* Outer Wrapper with height constrained to ONE FRAME */}
      <div className="relative min-h-[85vh] lg:min-h-[88vh] max-h-[960px] flex flex-col justify-between pt-16 sm:pt-20 pb-0 bg-[#090314] text-white">
        {/* Ambient Glows & Grid Pattern using Zystra Brand Colors */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Zystra Brand Colors: Dark Purple #33015a & Vibrant Purple #6e019c */}
          <div className="absolute -top-24 right-1/4 w-[600px] h-[600px] bg-[#6e019c]/35 rounded-full blur-[160px]" />
          <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#33015a]/50 rounded-full blur-[140px]" />
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: "radial-gradient(#a855f7 1.2px, transparent 1.2px)",
              backgroundSize: "26px 26px"
            }}
          />
        </div>

        {/* Main Content Hero Canvas — FITS PROPERLY IN ONE FRAME */}
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl relative z-10 my-auto pt-4 pb-0">
          
          {/* GIANT BACKGROUND TYPOGRAPHY & PERSON OVERLAY (UNCUT FULL IMAGE) */}
          <div className="relative w-full flex items-center justify-center text-center mt-4 sm:mt-6 mb-0">
            
            {/* GIANT TITLE BLOCK TOGETHER (BEHIND THE PERSON) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative z-10 flex flex-col items-center justify-center leading-[0.78] sm:leading-[0.8] select-none py-2"
            >
              <h1 
                className="text-[18vw] sm:text-[15.5vw] md:text-[14vw] lg:text-[12.5vw] font-black uppercase tracking-tighter text-white"
                style={{ fontFamily: "'Barlow Condensed', 'Outfit', sans-serif" }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300">
                  DIGITAL
                </span>
              </h1>

              <h1 
                className="text-[18vw] sm:text-[15.5vw] md:text-[14vw] lg:text-[12.5vw] font-black uppercase tracking-tighter text-white"
                style={{ fontFamily: "'Barlow Condensed', 'Outfit', sans-serif" }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-100 to-white">
                  MARKETING
                </span>
              </h1>
            </motion.div>

            {/* PERSON CUTOUT OVERLAY (MOVED HIGHER UP OVER TITLE) */}
            <div className="absolute inset-0 z-20 flex justify-center items-center pointer-events-none -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-[260px] sm:max-w-[360px] md:max-w-[430px] lg:max-w-[480px] w-full"
              >
                <img 
                  src="/photorealistic-marketing-hero-cutout.png" 
                  alt="Zystra Digital Marketing Specialist" 
                  className="w-full h-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)]"
                />
              </motion.div>
            </div>


          </div>




          {/* OVERLAY CONTENT — LEFT COLUMN (STATS UPLIFTED HIGHER UP) */}
          <div className="absolute left-4 sm:left-8 lg:left-12 top-[42%] -translate-y-1/2 z-30 hidden sm:flex flex-col gap-6 max-w-[190px]">
            {/* METRICS STACK WITH SEPARATORS IN ZYSTRA PURPLE */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-3"
            >
              {/* Stat 1 */}
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-extrabold font-sans tracking-tight text-white">
                  500<span className="text-purple-400">+</span>
                </span>
                <span className="text-[9px] font-mono font-bold tracking-wider text-slate-300 uppercase">
                  BRANDS SCALED
                </span>
              </div>

              <div className="w-12 h-[1px] bg-purple-500/30" />

              {/* Stat 2 */}
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-extrabold font-sans tracking-tight text-white">
                  125<span className="text-purple-400">+</span>
                </span>
                <span className="text-[9px] font-mono font-bold tracking-wider text-slate-300 uppercase">
                  ADS CAMPAIGNS
                </span>
              </div>

              <div className="w-12 h-[1px] bg-purple-500/30" />

              {/* Stat 3 */}
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-extrabold font-sans tracking-tight text-white">
                  450M<span className="text-purple-400">+</span>
                </span>
                <span className="text-[9px] font-mono font-bold tracking-wider text-slate-300 uppercase">
                  AD IMPRESSIONS
                </span>
              </div>

            </motion.div>
          </div>

          {/* OVERLAY CONTENT — RIGHT COLUMN (EMBLEM, INFO & PLAY BUTTON UPLIFTED HIGHER UP) */}
          <div className="absolute right-4 sm:right-8 lg:right-12 top-[42%] -translate-y-1/2 z-30 hidden sm:flex flex-col justify-between items-end gap-10 max-w-[240px] lg:max-w-[270px]">
            
            {/* TOP RIGHT CIRCULAR STAR EMBLEM BADGE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-14 h-14 rounded-full border border-purple-400/40 flex items-center justify-center backdrop-blur-md bg-purple-950/30 group"
            >
              <div className="absolute inset-1 rounded-full border border-dashed border-purple-400/50 animate-[spin_12s_linear_infinite]" />
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold shadow-lg transform group-hover:scale-110 transition-transform bg-[#6e019c]">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
              </div>
            </motion.div>

            {/* BOTTOM RIGHT PARAGRAPH + CTA + PLAY BUTTON */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-end gap-4 text-right"
            >
              <p className="text-xs text-slate-200 font-medium leading-relaxed max-w-[220px] select-text">
                Zystra is a full-stack digital marketing agency. We engineer high-ROI Meta & Google ads, SEO rankings, and performance web experiences.
              </p>
            </motion.div>

          </div>

          {/* MOBILE ADAPTIVE STATS & CTA GRID (FOR SMALL SCREENS) */}
          <div className="flex sm:hidden flex-col gap-4 mt-4 z-30 relative px-2">
            <div className="grid grid-cols-3 gap-2 text-center p-2.5 rounded-2xl bg-[#33015a]/70 backdrop-blur-md border border-purple-500/30">
              <div>
                <div className="text-lg font-black text-purple-300">500+</div>
                <div className="text-[8px] font-mono text-slate-300 uppercase">BRANDS</div>
              </div>
              <div>
                <div className="text-lg font-black text-purple-300">420%</div>
                <div className="text-[8px] font-mono text-slate-300 uppercase">ROAS</div>
              </div>
              <div>
                <div className="text-lg font-black text-purple-300">450M+</div>
                <div className="text-[8px] font-mono text-slate-300 uppercase">REACH</div>
              </div>
            </div>

            <p className="text-xs text-center text-slate-200 font-medium leading-relaxed">
              Zystra is a full-stack digital marketing agency engineered for maximum ROI and performance growth.
            </p>
          </div>

        </div>


        {/* BOTTOM TICKER / MARQUEE RIBBON TAPE WITH ZYSTRA VIBRANT PURPLE THEME */}
        <div className="relative w-full z-40 mt-0 overflow-hidden shadow-2xl">

          <div 
            className="w-full py-3 flex items-center overflow-hidden font-black uppercase tracking-wider text-xs sm:text-sm lg:text-base border-y bg-[#6e019c] text-white border-purple-400/40"
            style={{ 
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
            }}
          >
            {/* MARQUEE RUNNING STRIP */}
            <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
                <div key={index} className="flex items-center mx-4">
                  <span className="font-extrabold tracking-widest">{item}</span>
                  <span className="mx-4 text-base">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

