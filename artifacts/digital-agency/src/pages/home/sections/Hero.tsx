import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [phase, setPhase] = useState<"Auditing" | "Optimizing" | "Scaling">("Auditing");
  const [roiVal, setRoiVal] = useState("4.8x");
  const [leadsCount, setLeadsCount] = useState(1284);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(12);
  const [rotateY, setRotateY] = useState(-22);
  const [rotateZ, setRotateZ] = useState(-3);
  const [scale, setScale] = useState(1);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const px = x / box.width - 0.5;
    const py = y / box.height - 0.5;

    setIsHovered(true);
    setRotateX(3 - py * 24);
    setRotateY(-3 + px * 24);
    setRotateZ(-px * 3);
    setScale(1.05);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(12);
    setRotateY(-22);
    setRotateZ(-3);
    setScale(1);
  };

  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const lfoRef = useRef<OscillatorNode | null>(null);
  const oscsRef = useRef<OscillatorNode[]>([]);

  // Simulation leads and ROI updater when AI engine is active
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      // Increment leads count dynamically
      setLeadsCount((l) => l + Math.floor(Math.random() * 2) + 1);
      // Fluctuate ROI
      const rois = ["4.8x", "5.1x", "5.4x", "5.7x", "6.2x"];
      setRoiVal(rois[Math.floor(Math.random() * rois.length)]);
    }, 2500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // AI engine optimization phase loop
  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((p) => {
        if (p === "Auditing") return "Optimizing";
        if (p === "Optimizing") return "Scaling";
        return "Auditing";
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const startAudio = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // Create Brown noise for analog atmospheric backdrop
      const bufferSize = 2 * ctx.sampleRate;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = output[i];
        output[i] *= 2.0;
      }

      const source = ctx.createBufferSource();
      source.buffer = noiseBuffer;
      source.loop = true;
      sourceRef.current = source;

      // Filter
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(300, ctx.currentTime);

      // Slow LFO for breathing filter sweep
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.08, ctx.currentTime);
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(100, ctx.currentTime);

      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();
      lfoRef.current = lfo;

      // Polyphonic warm digital sine wave chord
      const osc1 = ctx.createOscillator();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(220, ctx.currentTime); // A3

      const osc2 = ctx.createOscillator();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(277.18, ctx.currentTime); // C#4

      const osc3 = ctx.createOscillator();
      osc3.type = "sine";
      osc3.frequency.setValueAtTime(329.63, ctx.currentTime); // E4

      const oscGain = ctx.createGain();
      oscGain.gain.setValueAtTime(0.03, ctx.currentTime);

      osc1.connect(oscGain);
      osc2.connect(oscGain);
      osc3.connect(oscGain);

      osc1.start();
      osc2.start();
      osc3.start();

      oscsRef.current = [osc1, osc2, osc3];

      const mainGain = ctx.createGain();
      mainGain.gain.setValueAtTime(0.12, ctx.currentTime);
      gainRef.current = mainGain;

      source.connect(filter);
      filter.connect(mainGain);
      oscGain.connect(mainGain);
      mainGain.connect(ctx.destination);

      source.start(0);
    } catch (error) {
      console.error("Failed to start AI synth sound:", error);
    }
  };

  const stopAudio = () => {
    try {
      if (sourceRef.current) {
        sourceRef.current.stop();
        sourceRef.current.disconnect();
        sourceRef.current = null;
      }
      oscsRef.current.forEach((o) => {
        try {
          o.stop();
          o.disconnect();
        } catch (e) { }
      });
      oscsRef.current = [];

      if (lfoRef.current) {
        lfoRef.current.stop();
        lfoRef.current.disconnect();
        lfoRef.current = null;
      }
      if (gainRef.current) {
        gainRef.current.disconnect();
        gainRef.current = null;
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
    } catch (error) {
      console.error("Failed to stop AI synth sound:", error);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      startAudio();
    } else {
      stopAudio();
    }
    return () => {
      stopAudio();
    };
  }, [isPlaying]);

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#f3f4f6]"
      style={{
        backgroundImage: "url('/studio-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Main Grid Content */}
      <div className="container mx-auto px-6 max-w-7xl relative z-20 w-full h-full flex flex-col lg:flex-row items-center justify-between gap-12 pt-10">
        {/* Left Side: Zystra Typography */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center relative min-h-[200px] lg:min-h-[400px]">
          <div className="flex flex-col relative z-20 -translate-y-2 sm:-translate-y-4 lg:-translate-y-8">
            <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] font-black tracking-tight text-slate-950 leading-[0.82] uppercase select-none">
              ZYSTRA
            </span>

            {/* Sub-heading / Tagline */}
            <h2 className="mt-6 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight max-w-xl uppercase">
              Next Generation AI-Powered Digital Marketing Agency — <span className="text-[#6e019c]">Built for Brands That Want to Lead</span>
            </h2>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a href="#contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto rounded-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-sm font-bold shadow-md transition-all hover:scale-105 flex items-center justify-center gap-2">
                  Start Your Growth Journey
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="#showcase" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto rounded-full border-slate-350 text-slate-700 bg-white/40 backdrop-blur-xs hover:bg-slate-50 hover:text-slate-900 px-8 py-6 text-sm font-bold transition-all hover:scale-105 flex items-center justify-center gap-2">
                  See Our Work
                </Button>
              </a>
            </div>
          </div>

          {/* Standalone 3D Vertical Block ("GROWTH HUB") */}
          <div
            className="absolute left-[75%] top-[10%] hidden xl:block z-30"
            style={{
              perspective: "1200px",
              transformStyle: "preserve-3d"
            }}
          >
            <div
              className="relative w-20 h-52 bg-white border-l border-slate-200/40 shadow-[10px_25px_45px_rgba(0,0,0,0.06)]"
              style={{
                transform: "rotateY(32deg) rotateX(12deg)",
                transformStyle: "preserve-3d"
              }}
            >
              <div className="absolute inset-0 bg-white flex items-center justify-center border border-slate-100/60 rounded-sm">
                <span
                  className="text-lg font-black font-mono tracking-[0.22em] text-[#006ccf] uppercase whitespace-nowrap"
                  style={{
                    writingMode: "vertical-lr",
                    transform: "rotate(180deg)"
                  }}
                >
                  GROWTH HUB
                </span>
              </div>
              <div
                className="absolute top-0 right-0 w-8 h-full bg-[#f1f4f8] origin-right border-y border-r border-slate-200/50"
                style={{
                  transform: "rotateY(90deg)"
                }}
              />
              <div
                className="absolute top-0 left-0 w-full h-8 bg-[#f9fafb] origin-top border-x border-t border-slate-200/50"
                style={{
                  transform: "rotateX(-90deg)"
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Side: MacBook Pro Mockup showcasing Zystra AI Dashboard */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-2 z-20 pointer-events-auto">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[580px] aspect-[16/10] select-none scale-90 sm:scale-100 cursor-pointer"
            style={{
              transform: `perspective(2000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
              transformStyle: "preserve-3d",
              transition: "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)"
            }}
          >
            {/* Soft Ambient Drop Shadow */}
            <div className="absolute inset-0 bg-black/12 blur-[40px] rounded-3xl scale-[0.94] translate-y-16 translate-x-4 -z-10" />

            {/* Laptop Screen Lid */}
            <div
              className="absolute inset-0 bg-black p-[2%] rounded-[22px] shadow-[0_12px_45px_rgba(0,0,0,0.2)] border border-slate-700/20 flex flex-col justify-between"
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              {/* Webcam & Green Light */}
              <div className="absolute top-[1.2%] left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-40">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-800" />
                <div className="w-1 h-1 rounded-full bg-emerald-500/80 animate-pulse" />
              </div>

              {/* Zystra Growth Dashboard Screen Content */}
              <div className="relative w-full h-full bg-[#f0f4f8] overflow-hidden rounded-[18px] flex flex-col border border-black/40 shadow-inner">
                {/* Navbar */}
                <div className="w-full h-[12%] bg-[#f0f4f8]/95 backdrop-blur-md border-b border-slate-200/50 flex items-center justify-between px-3 z-30">
                  <div className="flex items-center gap-1">
                    <img src="/zystra-logo.jpg" alt="Zystra Logo" className="w-3.5 h-3.5 rounded-xs" />
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-4 text-[8px] sm:text-[9.5px] font-bold text-slate-500">
                    <span className="text-slate-900 cursor-pointer hover:text-slate-900 transition-colors">Campaigns</span>
                    <span className="cursor-pointer hover:text-slate-900 transition-colors">SEO Audits</span>
                    <span className="cursor-pointer hover:text-slate-900 transition-colors">Creative Lab</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] sm:text-[9.5px] cursor-pointer hover:scale-105 transition-transform">🔍</span>
                    <div className="w-4.5 h-4.5 rounded-full bg-slate-300 overflow-hidden border border-slate-200">
                      <img src="/zystra-logo.jpg" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Inner Content Area */}
                <div className="flex-1 w-full relative p-2.5 sm:p-3 flex flex-col justify-between overflow-hidden">
                  {/* Ambient backdrop */}
                  <div className="absolute inset-0 opacity-[0.08] pointer-events-none select-none -z-10">
                    <img src="/facebook_post.png" alt="Marketing backdrop" className="w-full h-full object-cover" />
                  </div>

                  {/* Creative Promo Banner inside Screen */}
                  <div className="w-fit mx-auto mb-2 py-0.5 px-2.5 rounded-md bg-gradient-to-r from-[#6e019c] to-[#8d00cb] text-white text-[6px] sm:text-[7.5px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-3xs z-20 select-none">
                    <span className="relative flex h-1 w-1 sm:h-1.2 sm:w-1.2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1 w-1 sm:h-1.2 sm:w-1.2 bg-white"></span>
                    </span>
                    <span>Experience the Best Before You Pay</span>
                  </div>

                  {/* 3-Column Grid */}
                  <div className="w-full flex-1 grid grid-cols-12 gap-2 sm:gap-3 z-10 items-stretch mt-0.5">
                    {/* Left Column - Zystra copy */}
                    <div className="col-span-4 flex flex-col justify-between pr-1.5 border-r border-slate-200/50">
                      <div className="flex flex-col gap-1 sm:gap-1.5">
                        <h4 className="text-[9px] sm:text-[11.5px] md:text-[12.5px] font-sans font-extrabold text-slate-900 leading-tight">
                          We don't just run campaigns. <br />
                          <span className="text-[#6e019c]">We engineer growth.</span>
                        </h4>
                        <p className="text-[6.5px] sm:text-[8px] md:text-[8.5px] text-slate-650 leading-normal font-medium">
                          Zystra combines AI precision with creative strategy to put your brand exactly where your customers are looking — at the top.
                        </p>
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex flex-wrap gap-0.5">
                          {[
                            { name: "SEO", color: "bg-emerald-50 text-emerald-700 border-emerald-200/50" },
                            { name: "Meta Ads", color: "bg-blue-50 text-blue-700 border-blue-200/50" },
                            { name: "Google Ads", color: "bg-amber-50 text-amber-700 border-amber-200/50" },
                            { name: "Web Design", color: "bg-purple-50 text-purple-700 border-purple-200/50" }
                          ].map((tag) => (
                            <span
                              key={tag.name}
                              className={`px-1 sm:px-1.5 py-0.5 rounded-xs border text-[5.5px] sm:text-[6.5px] font-bold uppercase tracking-wider ${tag.color}`}
                            >
                              {tag.name}
                            </span>
                          ))}
                          <span className="px-1 sm:px-1.5 py-0.5 rounded-xs bg-slate-100 text-slate-500 border border-slate-200/50 text-[5.5px] sm:text-[6.5px] font-bold">
                            &amp; more
                          </span>
                        </div>
                        <span className="text-[14px] sm:text-[20px] md:text-[24px] font-sans font-black tracking-tighter text-slate-800/10 leading-none uppercase -mb-1 select-none">
                          GROWTH
                        </span>
                      </div>
                    </div>

                    {/* Middle Column (Live AI Ring Graph) */}
                    <div className="col-span-3 flex flex-col items-center justify-center relative overflow-hidden bg-white/40 backdrop-blur-2xs rounded-xl border border-white/60 p-1.5 text-center">
                      <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
                        <div
                          className="absolute rounded-full border border-[#6e019c]/15 bg-[#6e019c]/5 transition-transform duration-[4000ms] ease-in-out"
                          style={{
                            transform: phase === "Auditing" ? "scale(1.0)" : phase === "Optimizing" ? "scale(1.45)" : "scale(1.22)",
                            opacity: phase === "Optimizing" ? 0.8 : 0.4,
                            width: "82%",
                            height: "82%"
                          }}
                        />
                        <div
                          className="absolute rounded-full border border-[#6e019c]/20 bg-[#6e019c]/10 transition-transform duration-[4000ms] ease-in-out"
                          style={{
                            transform: phase === "Auditing" ? "scale(1.0)" : phase === "Optimizing" ? "scale(1.22)" : "scale(1.45)",
                            opacity: phase === "Scaling" ? 0.9 : 0.5,
                            width: "66%",
                            height: "66%"
                          }}
                        />
                        <div className="w-[52%] h-[52%] rounded-full bg-white shadow-md flex flex-col items-center justify-center border border-slate-100 z-20">
                          <span className="text-[7px] sm:text-[9px] font-black text-[#6e019c] font-mono leading-none">
                            {roiVal}
                          </span>
                          <span className="text-[5px] sm:text-[6.5px] font-bold tracking-wide text-slate-500 uppercase mt-0.5 leading-none">
                            {phase === "Auditing" ? "Audit Clicks" : phase === "Optimizing" ? "Optimize Bids" : "Scale ROI"}
                          </span>
                        </div>
                      </div>

                      <div className="mt-2 leading-none">
                        <span className="text-[7px] sm:text-[9px] font-black text-slate-800 font-mono">
                          {leadsCount.toLocaleString()}
                        </span>
                        <span className="text-[5px] sm:text-[6px] text-slate-400 font-bold block uppercase tracking-wide mt-0.5">
                          LEADS ACQUIRED
                        </span>
                      </div>
                    </div>

                    {/* Right Column - Campaign details */}
                    <div className="col-span-4 flex flex-col justify-between items-stretch">
                      <div className="flex-1 rounded-xl overflow-hidden relative border border-slate-200/50 shadow-2xs flex flex-col justify-between p-2.5 bg-white">
                        {/* Meta Ad Header */}
                        <div className="flex items-center justify-between w-full pb-1.5 border-b border-slate-100">
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 rounded-full overflow-hidden border border-slate-200">
                              <img src="/zystra-logo.jpg" alt="Zystra Avatar" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col leading-tight">
                              <div className="flex items-center gap-0.5">
                                <span className="text-[6px] font-black text-slate-900">Zystra</span>
                                <span className="text-[5px] text-blue-500">✓</span>
                              </div>
                              <span className="text-[4px] text-slate-400 font-medium">Sponsored · 🌐</span>
                            </div>
                          </div>
                          <span className="text-[6px] text-slate-400 font-bold tracking-tight cursor-pointer">•••</span>
                        </div>

                        {/* Ad Copy */}
                        <p className="text-[5px] text-slate-800 font-normal leading-normal my-1.5">
                          Stop losing leads to competitors. We build high-converting Meta Ad campaigns powered by AI to scale your ROI. 📈🚀
                        </p>

                        {/* Real Ad Creative Image (High Quality Marketing Chart) */}
                        <div className="relative w-full aspect-[1.91/1] rounded-sm overflow-hidden bg-slate-900 border border-slate-100">
                          <img 
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
                            alt="Meta Ad Creative" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-1 left-1 bg-[#1877f2] text-white text-[3.5px] font-bold px-1 py-0.5 rounded-xs shadow-sm">
                            Meta Ads Active
                          </div>
                        </div>

                        {/* Ad CTA Bar */}
                        <div className="flex items-center justify-between bg-slate-50 px-2 py-1.5 rounded-sm border border-slate-200/60 mt-1.5">
                          <div className="flex flex-col leading-tight">
                            <span className="text-[3.5px] text-slate-400 uppercase font-bold tracking-wider">zystra.com</span>
                            <span className="text-[5px] text-slate-900 font-bold">Scale Your Brand with 6x ROAS</span>
                          </div>
                          <span className="bg-[#1877f2] text-white text-[4.5px] font-bold py-0.5 px-2 rounded-xs hover:bg-[#166fe5] shadow-3xs cursor-pointer">
                            Book Now
                          </span>
                        </div>

                        {/* Interaction Bar (Like, Comment, Share counts) */}
                        <div className="flex items-center justify-between text-[4px] text-slate-400 border-t border-slate-100 pt-1 mt-1.5">
                          <div className="flex items-center gap-1">
                            <span className="flex items-center justify-center w-2.5 h-2.5 rounded-full bg-[#1877f2] text-white text-[3px]">👍</span>
                            <span>2.4k Likes</span>
                          </div>
                          <div className="flex gap-2">
                            <span>142 Comments</span>
                            <span>58 Shares</span>
                          </div>
                        </div>

                        {/* Live Performance Overlay */}
                        <div className="grid grid-cols-2 gap-1 border-t border-slate-100 pt-1 mt-1 bg-slate-50/50 p-1.5 rounded-sm">
                          <div>
                            <span className="block text-[3.5px] text-slate-400 font-bold uppercase tracking-wider leading-none">Live ROAS</span>
                            <span className="block text-[6.5px] font-black text-emerald-600 mt-0.5 leading-none">6.4x</span>
                          </div>
                          <div>
                            <span className="block text-[3.5px] text-slate-400 font-bold uppercase tracking-wider leading-none">Live CPC</span>
                            <span className="block text-[6.5px] font-black text-[#6e019c] mt-0.5 leading-none">$0.18</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0% { height: 3px; }
          100% { height: 10px; }
        }
      `}</style>
    </section>
  );
}
