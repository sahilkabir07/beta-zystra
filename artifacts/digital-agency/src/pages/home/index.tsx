import React, { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "@/components/layout/Navbar";
import Hero from "./sections/Hero";
import StatsStrip from "./sections/StatsStrip";
import Marquee from "./sections/Marquee";
import WhatWeDo from "./sections/WhatWeDo";
import ScrollTimelineShowcase from "./sections/ScrollTimelineShowcase";
import Services from "./sections/Services";
import WhyChoose from "./sections/WhyChoose";
import Industries from "./sections/Industries";
import HowWeWork from "./sections/HowWeWork";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  // Clear any existing dark class to enable light mode by default
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.15,
      touchMultiplier: 1.4,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-500/20 selection:text-indigo-900 overflow-x-clip relative">
      {/* Content wrapper */}
      <div className="relative z-20">
        <Navbar />
        <Hero />
        <StatsStrip />
        <Marquee />
        <WhatWeDo />
        <ScrollTimelineShowcase />
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
