import React from "react";
import { Link } from "wouter";
import { 
  Search, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  Zap, 
  Sparkles, 
  Home as HomeIcon, 
  Grid, 
  Settings, 
  User,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#09031a] relative overflow-hidden text-white">
      {/* Decorative Lighting Flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* ── 3D CLAYMORPHIC / NEUMORPHIC DASHBOARD CARD CONTAINER (Matches Screenshot 1 Layout) ── */}
        <div className="w-full rounded-[36px] sm:rounded-[48px] bg-gradient-to-br from-[#4a398c] via-[#3a2979] to-[#26175e] p-6 sm:p-10 md:p-14 border-4 border-[#614fa8] shadow-[0_30px_90px_rgba(0,0,0,0.85)] relative overflow-hidden select-none">
          
          {/* Subtle Neumorphic Light Highlights */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

          {/* ── MAIN CONTENT GRID: Left Title + Right Floating Dark Card ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10 mt-4 sm:mt-6">
            
            {/* Left Column: Display Headline & Action Pills */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="inline-block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-purple-300 mb-3">
                  CHALLENGE UI · GROWTH ENGINE
                </span>
                
                <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight leading-[1.12] mb-6">
                  Ready to Escape the <br />
                  <span className="bg-gradient-to-r from-purple-200 via-fuchsia-200 to-white bg-clip-text text-transparent">
                    Digital Competition?
                  </span>
                </h2>
              </div>

              {/* Bottom Action Button (CALL NOW Only) */}
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="https://wa.me/916200048924?text=Hi%20Zystra%20team,%20I'd%20like%20to%20connect%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-full px-7 py-3 h-12 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 text-xs sm:text-sm flex items-center gap-2">
                    <Zap className="w-4 h-4 fill-current" />
                    CALL NOW
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column: Floating Dark Raised Card with 3D Element Notch */}
            <div className="lg:col-span-6 relative">
              
              {/* 3D Floating Rocket / Astronaut Element on Top-Right Corner */}
              <div className="absolute -top-10 -right-4 sm:-top-12 sm:right-2 z-30 pointer-events-none animate-bounce" style={{ animationDuration: "3s" }}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-purple-500 to-fuchsia-400 p-3 shadow-[0_15px_35px_rgba(168,85,247,0.5)] border-2 border-white flex items-center justify-center rotate-12">
                  <Rocket className="w-9 h-9 text-white drop-shadow-md" />
                </div>
              </div>

              {/* Floating Dark Raised Card */}
              <div className="w-full rounded-[28px] sm:rounded-[34px] bg-[#1a0f44] border-2 border-[#4c3993] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative z-20">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <h3 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-purple-200">
                    ZYSTRA GROWTH SYSTEM...
                  </h3>
                </div>

                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans font-normal mb-6">
                  Whether you are a local business looking to dominate your city or a startup ready to scale nationally — Zystra has the strategy, technology, and team to make it happen. Let's build something remarkable together.
                </p>

                {/* Internal Card Action Link */}
                <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-300 hover:text-white transition-colors group">
                  <span>START YOUR CAMPAIGN</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── BOTTOM DOCK TOOLBAR (Matches Screenshot 1 Bottom Dock Icons) ── */}
          <div className="pt-6 border-t border-[#524194] flex flex-wrap items-center justify-between gap-4">
            
            {/* Trust Tags */}
            <div className="flex flex-wrap items-center gap-4 text-[10px] sm:text-xs font-mono text-purple-200/90">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-300" />
                RESPONSE WITHIN 24H
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-300" />
                PATNA, BIHAR
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-purple-300" />
                PAN-INDIA
              </span>
            </div>

            {/* Bottom Floating Icon Dock (Exact Match to Screenshot 1 Bottom Dock Icons) */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#221356] border border-[#524194] shadow-md">
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-9 h-9 rounded-xl bg-[#39267a] hover:bg-purple-600 text-white flex items-center justify-center transition-colors">
                <HomeIcon className="w-4 h-4" />
              </button>
              <Link href="/services">
                <button className="w-9 h-9 rounded-xl bg-[#39267a] hover:bg-purple-600 text-white flex items-center justify-center transition-colors">
                  <Grid className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="w-9 h-9 rounded-xl bg-[#39267a] hover:bg-purple-600 text-white flex items-center justify-center transition-colors">
                  <Settings className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="w-9 h-9 rounded-xl bg-[#39267a] hover:bg-purple-600 text-white flex items-center justify-center transition-colors">
                  <User className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Injected CSS declarations for absolute butter-smooth performance (Zero Framer Motion overhead)
const styleBlock = (
  <style dangerouslySetInnerHTML={{
    __html: `
      @keyframes floatInstagram {
        0%, 100% { transform: translateY(-7px) rotate(15deg); }
        50% { transform: translateY(7px) rotate(15deg); }
      }
      @keyframes floatFacebook {
        0%, 100% { transform: translateY(-6px) rotate(-12deg); }
        50% { transform: translateY(6px) rotate(-12deg); }
      }
      @keyframes floatLinkedin {
        0%, 100% { transform: translateY(-8px) rotate(-8deg); }
        50% { transform: translateY(8px) rotate(-8deg); }
      }
      @keyframes floatYoutube {
        0%, 100% { transform: translateY(-7px) rotate(10deg); }
        50% { transform: translateY(7px) rotate(10deg); }
      }
      @keyframes floatMegaphone {
        0%, 100% { transform: translateY(-4px) rotate(-20deg); }
        50% { transform: translateY(4px) rotate(-20deg); }
      }
      @keyframes floatSend {
        0%, 100% { transform: translateY(-5px) rotate(18deg); }
        50% { transform: translateY(5px) rotate(18deg); }
      }
      .animate-float-instagram {
        animation: floatInstagram 5s ease-in-out infinite;
        will-change: transform;
      }
      .animate-float-facebook {
        animation: floatFacebook 4.2s ease-in-out infinite;
        will-change: transform;
      }
      .animate-float-linkedin {
        animation: floatLinkedin 5.5s ease-in-out infinite;
        will-change: transform;
      }
      .animate-float-youtube {
        animation: floatYoutube 4.6s ease-in-out infinite;
        will-change: transform;
      }
      .animate-float-megaphone {
        animation: floatMegaphone 5.2s ease-in-out infinite;
        will-change: transform;
      }
      .animate-float-send {
        animation: floatSend 4.8s ease-in-out infinite;
        will-change: transform;
      }
    `
  }} />
);
