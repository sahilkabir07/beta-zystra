import React from "react";
import { Shield } from "lucide-react";

export default function WhyChoose() {
  return (
    <section id="why-zystra" className="py-24 sm:py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-20 items-center">
          {/* Left Column: Heading and Subtext */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Why Businesses <span className="bg-gradient-to-r from-brand-vibrant via-brand-medium to-[#33015a] bg-clip-text text-transparent">Everywhere</span> Choose Zystra
            </h2>
            
            <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed font-normal border-l-2 border-brand-vibrant/30 pl-4 py-1">
              The digital landscape is crowded, noisy, and competitive. Most businesses struggle to stand out — not because their products are weak, but because their digital presence is. <span className="font-semibold text-slate-900">Zystra was built to solve exactly that problem.</span>
            </p>
          </div>

          {/* Right Column: Creative Hanging Tags */}
          <div className="lg:col-span-8 flex flex-col">
            <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-slate-900 tracking-tight mb-2 select-none">
              Our Core Values <span className="bg-gradient-to-r from-brand-vibrant to-brand-medium bg-clip-text text-transparent">That Drive Every Campaign</span>
            </h3>

            {/* Hanging rod for the tags */}
            <div className="relative w-full">
              {/* The Rod (Visible on all screens) */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-slate-300 to-transparent pointer-events-none block" />
              
              {/* 3-Column Single Row Container on ALL Screens (No Horizontal Scroll Needed) */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-6 pt-10 sm:pt-12 items-start justify-items-center w-full">
                
                {/* Tag 1 Wrapper (Arched Price Tag) */}
                <div className="relative w-full max-w-[230px] flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:rotate-[1deg] cursor-pointer group">
                  {/* Hanging String (SVG Thread) */}
                  <svg className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-[48px] sm:h-[62px] overflow-visible pointer-events-none block" viewBox="0 0 32 62">
                    <path d="M16,0 C12,18 20,28 16,62" fill="none" stroke="#aa9c84" strokeWidth="1.5" strokeDasharray="3,2" />
                  </svg>

                  {/* Arched Tag Body */}
                  <div
                    className="relative pt-7 sm:pt-12 pb-0 w-full rounded-t-[40px] sm:rounded-t-[100px] rounded-b-lg sm:rounded-b-2xl shadow-sm border border-brand-medium/15 bg-[#faf9fc] flex flex-col items-center text-center justify-between min-h-[250px] sm:min-h-[360px]"
                  >
                    {/* Metal Grommet */}
                    <div className="absolute top-2 sm:top-3.5 left-1/2 -translate-x-1/2 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-slate-100 border border-slate-400 flex items-center justify-center shadow-inner z-10">
                      <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-slate-700" />
                    </div>

                    <div className="px-1.5 sm:px-5 flex flex-col items-center flex-1 justify-center">
                      <span className="text-[6px] sm:text-[7.5px] font-mono tracking-wider text-brand-medium uppercase font-bold mb-0.5 sm:mb-1">ETHOS</span>
                      
                      <h4 className="text-[11px] sm:text-xl font-serif font-black tracking-tight text-brand-medium leading-none uppercase">
                        TRANSPARENCY
                      </h4>
                      <span className="text-[9px] sm:text-xs font-serif italic text-slate-500 mb-0.5 sm:mb-1">First</span>

                      {/* Badge */}
                      <div className="my-1 sm:my-2.5 px-1.5 sm:px-4 py-0.5 sm:py-1.5 bg-brand-vibrant text-white font-mono text-[7px] sm:text-[10px] font-black rounded tracking-wider shadow-xs uppercase">
                        100% CLEAR
                      </div>

                      <p className="text-slate-600 text-[8px] sm:text-xs leading-tight sm:leading-relaxed font-sans mt-0.5 sm:mt-2">
                        Clear, jargon-free reporting showing real metrics.
                      </p>
                    </div>

                    {/* Bottom bar */}
                    <div className="w-full bg-brand-medium text-white text-[6.5px] sm:text-[9px] font-mono font-bold py-1.5 sm:py-3 uppercase tracking-wider rounded-b-lg sm:rounded-b-2xl truncate px-0.5">
                      [ NO VANITY METRICS ]
                    </div>
                  </div>
                </div>

                {/* Tag 2 Wrapper (Circular Stamp Tag) */}
                <div className="relative w-full max-w-[230px] flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:rotate-[2deg] cursor-pointer group">
                  {/* Hanging String (SVG Thread) */}
                  <svg className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-[44px] sm:h-[58px] overflow-visible pointer-events-none block" viewBox="0 0 32 58">
                    <path d="M16,0 C10,18 22,28 16,58" fill="none" stroke="#aa9c84" strokeWidth="1.5" strokeDasharray="3,2" />
                  </svg>

                  {/* Circular Tag Body */}
                  <div
                    className="relative p-1 sm:p-1.5 w-full aspect-square rounded-full bg-brand-vibrant/10 shadow-sm border border-brand-vibrant/20 flex items-center justify-center"
                  >
                    {/* Grommet near top edge */}
                    <div className="absolute top-1.5 sm:top-2.5 left-1/2 -translate-x-1/2 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-slate-100 border border-slate-400 flex items-center justify-center shadow-inner z-10">
                      <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-slate-700" />
                    </div>

                    <div className="relative w-full h-full bg-[#33015a] rounded-full p-2 sm:p-6 flex flex-col justify-center items-center border-[1px] sm:border-[1.5px] border-dashed border-white/30 text-white overflow-hidden text-center">
                      <span className="text-[6px] sm:text-[7.5px] font-mono tracking-widest uppercase opacity-70 mb-0.5">DATA + ART</span>
                      
                      <h4 className="text-[10px] sm:text-base font-serif font-black uppercase tracking-tight text-white leading-tight">
                        CREATIVE
                      </h4>
                      
                      {/* Rotated banner */}
                      <div className="w-[125%] bg-white text-brand-vibrant font-serif font-black text-[6.5px] sm:text-[9.5px] py-0.5 sm:py-1 uppercase tracking-wider my-1 sm:my-2 rotate-[-6deg] shadow-sm flex justify-center">
                        CREATIVITY & DATA
                      </div>
                      
                      <p className="text-white/85 text-[7px] sm:text-[10px] leading-tight max-w-[95%] font-sans">
                        Creative design with analytics on every campaign.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tag 3 Wrapper (Clipped Price Tag) */}
                <div className="relative w-full max-w-[230px] flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:rotate-[-1.5deg] cursor-pointer group">
                  {/* Hanging String (SVG Thread) */}
                  <svg className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-[48px] sm:h-[62px] overflow-visible pointer-events-none block" viewBox="0 0 32 62">
                    <path d="M16,0 C20,18 12,28 16,62" fill="none" stroke="#aa9c84" strokeWidth="1.5" strokeDasharray="3,2" />
                  </svg>

                  {/* Clipped Tag Body */}
                  <div
                    className="relative p-[1px] sm:p-[1.2px] w-full bg-brand-vibrant/20 rounded-b-sm"
                    style={{
                      minHeight: "250px",
                      clipPath: "polygon(14px 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%, 0 14px)"
                    }}
                  >
                    <div
                      className="w-full h-full pt-7 sm:pt-12 pb-0 bg-[#fdfcff] flex flex-col items-center text-center justify-between min-h-[248px] sm:min-h-[357.6px]"
                      style={{
                        clipPath: "polygon(13.2px 0, calc(100% - 13.2px) 0, 100% 13.2px, 100% 100%, 0 100%, 0 13.2px)"
                      }}
                    >
                      {/* Metal Grommet */}
                      <div className="absolute top-2 sm:top-3.5 left-1/2 -translate-x-1/2 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-slate-100 border border-slate-400 flex items-center justify-center shadow-inner z-10">
                        <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-slate-700" />
                      </div>

                      <div className="px-1.5 sm:px-4 flex flex-col items-center flex-1 justify-center">
                        <span className="text-[6px] sm:text-[7.5px] font-mono tracking-wider text-brand-vibrant uppercase font-bold mb-0.5 sm:mb-1">GROWTH</span>
                        
                        <h4 className="text-[11px] sm:text-xl font-serif font-black tracking-tight text-brand-vibrant leading-none uppercase">
                          PERFORMANCE
                        </h4>
                        <span className="text-[8px] sm:text-[10px] font-serif italic text-slate-500 mb-0.5 sm:mb-1">ROI Driven</span>

                        {/* Percentage Badge */}
                        <div className="my-1 sm:my-2 text-slate-900 font-serif font-black text-xs sm:text-2xl tracking-tight">
                          ROI <span className="text-brand-vibrant font-sans font-light">DRIVEN</span>
                        </div>

                        <p className="text-slate-600 text-[8px] sm:text-xs leading-tight sm:leading-relaxed font-sans">
                          Optimised KPIs for real business growth.
                        </p>
                      </div>

                      {/* Bottom bar */}
                      <div className="w-full bg-brand-vibrant text-white text-[6.5px] sm:text-[10px] font-mono font-bold py-1.5 sm:py-3.5 uppercase tracking-wider truncate px-0.5">
                        70% OFF SPEND WASTE
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
