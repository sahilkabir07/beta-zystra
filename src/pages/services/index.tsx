import React, { useEffect } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Phone,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/shared/SEO";
import { Button } from "@/components/ui/button";
import ServicesHero from "./components/ServicesHero";
import UnifiedEcosystem from "./components/UnifiedEcosystem";
import ServicesCarousel from "./components/ServicesCarousel";
import GrowthSystemSpiral from "./components/GrowthSystemSpiral";
import LightRays from "@/components/ui/LightRays";




export default function ServicesPage() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    document.documentElement.classList.add("dark");
    const isTouch = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.15,
      touchMultiplier: 1.0,
    });
    lenis.scrollTo(0, { immediate: true });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    window.scrollTo(0, 0);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Marketing Agency Services",
    "provider": {
      "@type": "Organization",
      "name": "Zystra",
      "url": "https://zystra.in"
    },
    "areaServed": ["India", "UAE", "International"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Zystra Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta Ads" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Business Profile & Local SEO" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Production" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design & Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Logo Design & Branding" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Marketing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "App Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "RevOps Solutions" } }
      ]
    }
  };



  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans selection:bg-brand-vibrant/30 selection:text-white">
      <SEO
        title="Our Services | AI-Powered Digital Marketing by Zystra"
        description="Explore Zystra's full-stack digital marketing services — SEO, Meta Ads, Google Ads, Web Design, Branding, Video & App Development. Built to deliver ROI."
        canonicalUrl="https://zystra.in/services"
        schema={seoSchema}
      />

      <Navbar />

      {/* Decorative Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute -top-[15%] right-[5%] w-[800px] h-[800px] bg-brand-dark/25 rounded-full blur-[180px]" />
        <div className="absolute bottom-[30%] -left-[10%] w-[700px] h-[700px] bg-brand-vibrant/10 rounded-full blur-[160px]" />
      </div>

      <main className="relative z-10 pt-14 pb-20">

        {/* SECTION 1 — HERO (REPLICATING REFERENCE UI ACCORDING TO USER SPEC) */}
        <div className="mb-14">
          <ServicesHero />
        </div>



        {/* SECTION 2 — WHY ONE AGENCY, NOT MANY VENDORS (COMMAND KEY CONCEPT) */}
        <UnifiedEcosystem />


        {/* SECTION 3 — ALL 11 SERVICES CAROUSEL */}
        <ServicesCarousel />

        {/* SECTION 4 — HOW SERVICES WORK TOGETHER (3D HELICAL GROWTH SYSTEM) */}
        <GrowthSystemSpiral />

        {/* SECTION 5 — INDUSTRIES THIS WORKS FOR (ONE SINGLE FRAME CONTAINER WITH DUAL SPINNING CIRCULAR TEXT RINGS) */}
        <section className="container mx-auto px-4 sm:px-8 max-w-7xl mb-24 select-none">
          <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-b from-[#0d0620]/95 via-[#070314]/98 to-[#04010a] border border-purple-500/20 p-6 sm:p-10 lg:p-12 shadow-[0_30px_100px_rgba(112,89,246,0.15)] flex flex-col items-center justify-between text-center min-h-[540px] sm:min-h-[600px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#7059f6]/15 rounded-full blur-[160px] pointer-events-none" />

            {/* Main Interactive Canvas with Dual Spinning Circular Text Rings */}
            <div className="relative w-full max-w-5xl flex-1 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 px-2 sm:px-6 py-4">

              {/* ── LEFT SPINNING CIRCULAR TEXT-PATH RING WITH "WE HAVE" IN CENTER (GPU CSS) ── */}
              <div className="relative z-30 flex items-center justify-center">
                <div
                  style={{ animation: "spin 12s linear infinite" }}
                  className="w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 flex items-center justify-center transform-gpu"
                >
                  <svg className="w-full h-full drop-shadow-[0_0_18px_rgba(168,85,247,0.45)]" viewBox="0 0 200 200">
                    <path
                      id="circleLeftPath"
                      d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      fill="none"
                      stroke="rgba(196,168,255,0.4)"
                      strokeWidth="1.5"
                    />
                    <text className="fill-purple-200 font-mono text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.25em]">
                      <textPath href="#circleLeftPath" startOffset="0%">
                        HEALTHCARE  ✦  BEAUTY  ✦  SALONS  ✦  SOLAR  ✦  AYURVEDA  ✦  
                      </textPath>
                    </text>
                  </svg>
                </div>
                {/* Static Glowing Center Title (Bigger Stacked 2 Lines) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none leading-tight gap-0.5">
                  <span className="text-xl sm:text-3xl lg:text-4xl font-sans font-[900] uppercase tracking-[0.15em] text-white drop-shadow-[0_0_25px_rgba(168,85,247,1)]">
                    WE
                  </span>
                  <span className="text-xl sm:text-3xl lg:text-4xl font-sans font-[900] uppercase tracking-[0.15em] text-white drop-shadow-[0_0_25px_rgba(168,85,247,1)]">
                    HAVE
                  </span>
                </div>
              </div>

              {/* CENTER 3D SHARPENER IMAGE GRAPHIC (GPU CSS) */}
              <div
                style={{ animation: "heroFloat1 6s ease-in-out infinite" }}
                className="relative z-20 flex-1 max-w-[280px] sm:max-w-[440px] lg:max-w-[480px] flex justify-center mx-auto"
              >
                <img
                  src="/services-bottom-image.webp"
                  alt="Built for Every Industry — Proven Across Many"
                  className="w-full h-auto max-h-[360px] sm:max-h-[500px] object-contain filter drop-shadow-[0_30px_70px_rgba(112,89,246,0.55)] transform-gpu rounded-3xl"
                />
              </div>

              {/* ── RIGHT SPINNING CIRCULAR TEXT-PATH RING WITH "WORKED WITH" IN CENTER (GPU CSS) ── */}
              <div className="relative z-30 flex items-center justify-center">
                <div
                  style={{ animation: "spin 12s linear infinite reverse" }}
                  className="w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 flex items-center justify-center transform-gpu"
                >
                  <svg className="w-full h-full drop-shadow-[0_0_18px_rgba(168,85,247,0.45)]" viewBox="0 0 200 200">
                    <path
                      id="circleRightPath"
                      d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      fill="none"
                      stroke="rgba(196,168,255,0.4)"
                      strokeWidth="1.5"
                    />
                    <text className="fill-purple-200 font-mono text-[9px] lg:text-[9.8px] font-bold uppercase tracking-[0.17em]">
                      <textPath href="#circleRightPath" startOffset="0%">
                        EDUCATION  ✦  INTERIOR  ✦  DESIGN  ✦  EVENTS  ✦  TRAVEL  ✦  TECHNOLOGY  ✦  
                      </textPath>
                    </text>
                  </svg>
                </div>
                {/* Static Glowing Center Title (Bigger Stacked 2 Lines) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none leading-tight gap-0.5">
                  <span className="text-lg sm:text-2xl lg:text-3xl font-sans font-[900] uppercase tracking-[0.15em] text-white drop-shadow-[0_0_25px_rgba(168,85,247,1)]">
                    WORKED
                  </span>
                  <span className="text-lg sm:text-2xl lg:text-3xl font-sans font-[900] uppercase tracking-[0.15em] text-white drop-shadow-[0_0_25px_rgba(168,85,247,1)]">
                    WITH
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Subtitle Note */}
            <p className="text-xs sm:text-sm font-mono text-slate-300 tracking-wide font-medium italic max-w-xl mt-2 relative z-20">
              "Whatever your industry, our process adapts — the strategy is built around your business, not a generic playbook."
            </p>

          </div>
        </section>

        {/* SECTION 6 — CINEMATIC WEBGL LIGHT RAYS SPOTLIGHT HERO CTA */}
        <section className="container mx-auto px-4 sm:px-8 max-w-7xl mb-24 select-none">
          <div className="relative rounded-[36px] overflow-hidden bg-[#070314] border border-purple-500/40 p-10 sm:p-16 lg:p-20 shadow-[0_30px_100px_rgba(112,89,246,0.35)] flex flex-col items-center justify-center text-center min-h-[480px] sm:min-h-[540px]">
            
            {/* React Bits WebGL LightRays Component Background (Enhanced Visibility & Brightness) */}
            <LightRays
              raysOrigin="top-center"
              raysColor="#c084fc"
              raysSpeed={1.3}
              lightSpread={1.2}
              rayLength={2.2}
              pulsating={true}
              fadeDistance={1.4}
              saturation={1.0}
              followMouse={true}
              mouseInfluence={0.25}
              noiseAmount={0.03}
              distortion={0.02}
            />

            {/* Top Light Source Lens Flare */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-16 bg-purple-400/60 blur-2xl rounded-full pointer-events-none z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-white blur-md rounded-full pointer-events-none z-10" />

            {/* Stage Ground Reflection Pool */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[480px] sm:w-[620px] h-[50px] bg-gradient-to-r from-purple-500/35 via-purple-300/50 to-purple-500/35 blur-2xl rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[360px] sm:w-[460px] h-[18px] bg-white/40 blur-lg rounded-full pointer-events-none z-0" />

            {/* Illuminated Center Content under WebGL Light Rays */}
            <div className="relative z-20 max-w-3xl flex flex-col items-center gap-6">
              
              {/* Glowing Eyebrow Pill */}
              <div className="px-4 py-1.5 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-200 text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-2 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.9)]" />
                Tailored Growth Systems Setup
              </div>

              {/* Creative Multi-Line Heading */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-[900] tracking-tight leading-[1.12]">
                <span className="text-slate-300 font-extrabold text-xl sm:text-3xl lg:text-4xl block mb-2 opacity-90">
                  Not Sure Which Service You Need?
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300 drop-shadow-[0_0_35px_rgba(168,85,247,0.6)]">
                  Let's Figure It Out Together.
                </span>
              </h2>

              {/* Creative Paragraph & Micro Value Pills */}
              <div className="flex flex-col items-center gap-4">
                <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl drop-shadow-md">
                  Every brand's growth path looks different. Tell us where you are today and where you want to be — we'll recommend the <span className="text-white font-bold underline decoration-purple-400/70 decoration-2 underline-offset-4">exact mix of services</span> to get you there.
                </p>

                {/* Micro Value Chips */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
                  <span className="px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-xs font-mono text-purple-200 backdrop-blur-sm shadow-sm">
                    ✦ Custom Growth Playbook
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-xs font-mono text-purple-200 backdrop-blur-sm shadow-sm">
                    ✦ Zero Commitment
                  </span>
                </div>
              </div>

              {/* Clean Solid High-Contrast CTA Button */}
              <div className="mt-2">
                <a href="tel:+916200048924">
                  <Button className="rounded-full bg-white hover:bg-purple-50 text-slate-950 font-bold text-sm sm:text-base px-9 py-6 shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer border border-white transform-gpu hover:scale-105">
                    <Phone className="w-5 h-5 text-purple-600" />
                    Call Us: +91 6200048924
                  </Button>
                </a>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
