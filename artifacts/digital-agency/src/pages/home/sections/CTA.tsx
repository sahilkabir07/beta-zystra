import React from "react";
import { Link } from "wouter";
import { 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  Zap,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Megaphone,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section id="contact" className="py-28 sm:py-36 bg-[#fafbfc] relative overflow-hidden">
      {styleBlock}

      {/* Outer Section Glow Blobs (Optimized with radial gradients, no performance-heavy blur filters) */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none -z-10 opacity-85"
        style={{
          background: "radial-gradient(circle, rgba(110, 1, 156, 0.06) 0%, rgba(110, 1, 156, 0) 70%)"
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none -z-10 opacity-85"
        style={{
          background: "radial-gradient(circle, rgba(86, 29, 154, 0.06) 0%, rgba(86, 29, 154, 0) 70%)"
        }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Asymmetrical Custom Liquid Card with native GPU hover transition (no JS Framer Motion runtime) */}
        <div 
          className="w-full rounded-[3.5rem_9rem_3.5rem_9rem] bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-vibrant text-white p-10 sm:p-16 md:p-20 relative overflow-hidden shadow-[0_25px_60px_rgba(110,1,156,0.22)] border-4 border-white select-none group transition-transform duration-300 ease-out hover:-translate-y-1 will-change-transform"
        >
          
          {/* Internal Glowing Lighting Flares (Optimized with radial gradients, no filters) */}
          <div 
            className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 70%)",
              transform: "translate(-50%, -50%)"
            }}
          />
          <div 
            className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(110, 1, 156, 0.45) 0%, rgba(110, 1, 156, 0) 70%)",
              transform: "translate(33%, 33%)"
            }}
          />
          
          {/* High-performance Static Asymmetrical Outline Path */}
          <div className="absolute inset-2 border border-dashed border-white/10 rounded-[3.1rem_8.6rem_3.1rem_8.6rem] pointer-events-none z-0 hidden sm:block" />

          {/* Floating Social Media & Marketing Background Elements - Pure GPU CSS Animations */}
          <div className="absolute top-12 left-12 sm:left-16 text-white/5 group-hover:text-white/8 pointer-events-none z-0 transition-colors duration-300 animate-float-instagram">
            <Instagram className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>
          <div className="absolute bottom-16 left-8 sm:left-12 text-white/5 group-hover:text-white/8 pointer-events-none z-0 transition-colors duration-300 animate-float-facebook">
            <Facebook className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <div className="absolute top-16 right-12 sm:right-20 text-white/5 group-hover:text-white/8 pointer-events-none z-0 transition-colors duration-300 animate-float-linkedin">
            <Linkedin className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>
          <div className="absolute bottom-20 right-8 sm:right-16 text-white/5 group-hover:text-white/8 pointer-events-none z-0 transition-colors duration-300 animate-float-youtube">
            <Youtube className="w-12 h-12 sm:w-14 sm:h-14" />
          </div>
          <div className="absolute top-[35%] left-[25%] text-white/[0.03] pointer-events-none z-0 hidden md:block animate-float-megaphone">
            <Megaphone className="w-8 h-8" />
          </div>
          <div className="absolute bottom-[30%] right-[25%] text-white/[0.03] pointer-events-none z-0 hidden md:block animate-float-send">
            <Send className="w-8 h-8" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Title with theme-aligned Purple/White gradient */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-white mb-6 tracking-tight leading-[1.1] select-text">
              Ready to Escape the <br />
              <span className="bg-gradient-to-r from-purple-300 via-purple-100 to-white bg-clip-text text-transparent">Digital Competition?</span>
            </h2>

            <p className="text-purple-100 text-sm sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed font-normal select-text">
              Whether you are a local business looking to dominate your city or a startup ready to scale nationally — Zystra has the strategy, technology, and team to make it happen. Let's build something remarkable together.
            </p>

            {/* Glowing Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto rounded-full h-14 px-8 bg-white text-brand-dark font-black hover:bg-slate-50 shadow-[0_8px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_28px_rgba(255,255,255,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 border border-white/10" 
                  data-testid="button-ignite"
                >
                  Get Your Free Digital Audit
                  <ArrowRight className="w-4 h-4 text-brand-dark" />
                </Button>
              </Link>
              <a href="tel:+916200048924" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto rounded-full h-14 px-8 border-white/20 hover:border-white text-white hover:bg-white/10 font-bold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> 
                  Call: +91 6200048924
                </Button>
              </a>
            </div>

            {/* Horizontal Trust Info Badges */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-8 text-[10px] sm:text-xs font-mono tracking-wider text-purple-200/90 select-none">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-300" />
                RESPONSE WITHIN 24 HOURS
              </span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-300" />
                BASED IN PATNA, BIHAR
              </span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-purple-300" />
                SERVING CLIENTS PAN-INDIA
              </span>
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
