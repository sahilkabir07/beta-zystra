import React from "react";
import { Shield } from "lucide-react";

export default function WhyChoose() {
  return (
    <section id="why-zystra" className="py-24 sm:py-32 bg-slate-50/50 relative">
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
              {/* The Rod */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-slate-300 to-transparent pointer-events-none hidden sm:block" />
              
              {/* Tags Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 pt-12 items-start justify-items-center">
                
                {/* Tag 1 Wrapper (Arched Price Tag) */}
                <div className="relative w-full max-w-[230px] flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:rotate-[1deg] cursor-pointer group">
                  {/* Hanging String (SVG Thread) */}
                  <svg className="absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-[62px] overflow-visible pointer-events-none hidden sm:block" viewBox="0 0 32 62">
                    <path d="M16,0 C12,18 20,28 16,62" fill="none" stroke="#aa9c84" strokeWidth="1.5" strokeDasharray="3,2" />
                  </svg>

                  {/* Arched Tag Body */}
                  <div
                    className="relative pt-12 pb-0 w-full rounded-t-[100px] rounded-b-2xl shadow-[0_12px_30px_rgba(0,0,0,0.02)] border border-brand-medium/15 bg-[#faf9fc] flex flex-col items-center text-center justify-between"
                    style={{ minHeight: "360px" }}
                  >
                    {/* Metal Grommet */}
                    <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-100 border border-slate-400 flex items-center justify-center shadow-inner z-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    </div>

                    <div className="px-5 flex flex-col items-center flex-1 justify-center">
                      <span className="text-[7.5px] font-mono tracking-widest text-brand-medium uppercase font-bold mb-1">AGENCY ETHOS</span>
                      
                      <h4 className="text-xl font-serif font-black tracking-tight text-brand-medium leading-none uppercase">
                        TRANSPARENCY
                      </h4>
                      <span className="text-xs font-serif italic text-slate-555 mb-1">First</span>

                      {/* Badge */}
                      <div className="my-2.5 px-4 py-1.5 bg-brand-vibrant text-white font-mono text-[10px] font-black rounded-md tracking-wider shadow-sm uppercase">
                        100% CLEAR
                    </div>

                      <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed font-sans mt-2">
                        You always know where your budget is going. We provide clear, jargon-free reporting that shows real metrics.
                    </p>
                    </div>

                    {/* Bottom bar */}
                    <div className="w-full bg-brand-medium text-white text-[9px] font-mono font-bold py-3 uppercase tracking-widest rounded-b-2xl">
                      [ NO VANITY METRICS ]
                  </div>
                  </div>
                </div>

                {/* Tag 2 Wrapper (Clipped Price Tag) */}
                <div className="relative w-full max-w-[230px] flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:rotate-[-1.5deg] cursor-pointer group">
                  {/* Hanging String (SVG Thread) - outside the clipped card */}
                  <svg className="absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-[62px] overflow-visible pointer-events-none hidden sm:block" viewBox="0 0 32 62">
                    <path d="M16,0 C20,18 12,28 16,62" fill="none" stroke="#aa9c84" strokeWidth="1.5" strokeDasharray="3,2" />
                  </svg>

                  {/* Clipped Tag Body */}
                  <div
                    className="relative p-[1.2px] w-full bg-brand-vibrant/20 rounded-b-sm"
                    style={{
                      minHeight: "360px",
                      clipPath: "polygon(24px 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%, 0 24px)"
                    }}
                  >
                    <div
                      className="w-full h-full pt-12 pb-0 bg-[#fdfcff] flex flex-col items-center text-center justify-between"
                      style={{
                        minHeight: "357.6px",
                        clipPath: "polygon(23.2px 0, calc(100% - 23.2px) 0, 100% 23.2px, 100% 100%, 0 100%, 0 23.2px)"
                      }}
                    >
                      {/* Metal Grommet */}
                      <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-100 border border-slate-400 flex items-center justify-center shadow-inner z-10">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                      </div>

                      <div className="px-4 flex flex-col items-center flex-1 justify-center">
                        <span className="text-[7.5px] font-mono tracking-widest text-brand-vibrant uppercase font-bold mb-1">TRACKED GROWTH</span>
                        
                        <h4 className="text-xl font-serif font-black tracking-tight text-brand-vibrant leading-none uppercase">
                          PERFORMANCE
                        </h4>
                        <span className="text-[10px] font-serif italic text-slate-500 mb-1">Unbelievable!</span>

                        {/* Percentage Badge */}
                        <div className="my-2 text-slate-900 font-serif font-black text-2xl tracking-tighter">
                          ROI <span className="text-brand-vibrant font-sans font-light">DRIVEN</span>
                        </div>

                        <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed font-sans">
                          We measure success by your growth. Our team sets measurable KPIs and optimises relentlessly.
                        </p>
                      </div>

                      {/* Bottom bar */}
                      <div className="w-full bg-brand-vibrant text-white text-[10px] font-mono font-bold py-3.5 uppercase tracking-widest">
                        70% OFF SPEND WASTE
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tag 3 Wrapper (Circular Stamp Tag) */}
                <div className="relative w-full max-w-[230px] flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:rotate-[2deg] cursor-pointer group">
                  {/* Hanging String (SVG Thread) */}
                  <svg className="absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-[58px] overflow-visible pointer-events-none hidden sm:block" viewBox="0 0 32 58">
                    <path d="M16,0 C10,18 22,28 16,58" fill="none" stroke="#aa9c84" strokeWidth="1.5" strokeDasharray="3,2" />
                  </svg>

                  {/* Circular Tag Body */}
                  <div
                    className="relative p-1.5 w-full aspect-square rounded-full bg-brand-vibrant/10 shadow-[0_12px_30px_rgba(0,0,0,0.02)] border border-brand-vibrant/20 flex items-center justify-center"
                  >
                    {/* Grommet near top edge */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-100 border border-slate-400 flex items-center justify-center shadow-inner z-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    </div>

                    <div className="relative w-full h-full bg-[#33015a] rounded-full p-6 flex flex-col justify-center items-center border-[1.5px] border-dashed border-white/30 text-white overflow-hidden text-center">
                      <span className="text-[7.5px] font-mono tracking-widest uppercase opacity-70 mb-0.5">DATA + ART</span>
                      
                      <h4 className="text-base font-serif font-black uppercase tracking-tight text-white leading-tight">
                        CREATIVE
                      </h4>
                      
                      {/* Rotated banner */}
                      <div className="w-[120%] bg-white text-brand-vibrant font-serif font-black text-[9.5px] py-1 uppercase tracking-widest my-2 rotate-[-6deg] shadow-md flex justify-center">
                        CREATIVITY & DATA
                      </div>
                      
                      <p className="text-white/85 text-[10px] leading-normal max-w-[90%] font-sans mb-1">
                        Great marketing needs both art and science. We combine creative design with analytics on every campaign.
                      </p>
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
