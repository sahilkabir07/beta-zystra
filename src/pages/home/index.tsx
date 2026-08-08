import React, { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "@/components/layout/Navbar";
import Hero from "./sections/Hero";
import StatsStrip from "./sections/StatsStrip";
import Marquee from "./sections/Marquee";
import WhatWeDo from "./sections/WhatWeDo";
import ScrollExpandShowcase from "./sections/ScrollExpandShowcase";
import Services from "./sections/Services";
import WhyChoose from "./sections/WhyChoose";
import Industries from "./sections/Industries";
import HowWeWork from "./sections/HowWeWork";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  // Initialize Lenis smooth scroll (smoothWheel on desktop, native 120Hz momentum on touch devices)
  useEffect(() => {
    const isTouch = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const lenis = new Lenis({
      duration: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.25,
      touchMultiplier: 1.0,
      infinite: false,
    });
    lenis.scrollTo(0, { immediate: true });

    (window as any).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-purple-500/20 selection:text-purple-900 overflow-x-clip relative">
      {/* Content wrapper */}
      <div className="relative z-20">
        <Navbar />
        <Hero />
        <StatsStrip />
        <Marquee />
        <WhatWeDo />
        <ScrollExpandShowcase />
        <Services />
        <WhyChoose />
        <Industries />
        <HowWeWork />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
