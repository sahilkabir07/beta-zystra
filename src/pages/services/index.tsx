import React, { useEffect } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Phone,
  Activity,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/shared/SEO";
import { Button } from "@/components/ui/button";
import ServicesHero from "./components/ServicesHero";
import UnifiedEcosystem from "./components/UnifiedEcosystem";
import ServicesCarousel from "./components/ServicesCarousel";




export default function ServicesPage() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    document.documentElement.classList.remove("dark");

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

        {/* SECTION 4 — HOW SERVICES WORK TOGETHER */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-28">
          <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl p-8 sm:p-12 overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-80 h-80 bg-brand-vibrant/5 rounded-full blur-[90px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start select-text">
              <div className="lg:col-span-5 flex flex-col gap-4">
                <span className="text-xs font-mono font-bold tracking-widest text-brand-vibrant uppercase">
                  Growth System
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-black text-white leading-tight">
                  How We Combine Services Into One Growth System
                </h2>
                <p className="text-sm sm:text-base text-slate-350 leading-relaxed font-medium mt-2">
                  A website without traffic is invisible. Traffic without conversion is wasted. Conversion without retention is short-lived growth. That's why Zystra never sells services in isolation — we build them to work together.
                </p>
              </div>

              <div className="lg:col-span-7 bg-slate-950/40 p-6 sm:p-8 rounded-2xl border border-slate-900 flex flex-col gap-6">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white flex items-center gap-2.5">
                  <Activity className="w-5 h-5 text-brand-vibrant shrink-0" />
                  Example: A Complete Brand Launch
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  Logo and brand identity define how you look. A high-converting website defines how you're experienced. SEO and Local SEO bring in organic discovery. Meta Ads and Google Ads bring in immediate demand. Video content fuels both your ads and your social presence. Performance Marketing ties every channel's data together — so we know exactly what's working and what to scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — INDUSTRIES THIS WORKS FOR */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-24">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900/10 border border-slate-800 p-8 sm:p-12 text-center select-text">
            <div className="max-w-3xl mx-auto flex flex-col gap-4 items-center">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-vibrant uppercase">
                Industry Versatility
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Built for Every Industry. Proven Across Many.
              </h2>
              <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-medium max-w-xl">
                These services have been tested and refined across healthcare, Ayurveda, beauty and salons, solar energy, education, interior design, events, travel, and technology. Whatever your industry, our process adapts — the strategy is built around your business, not a generic playbook.
              </p>
              
              <div className="w-full h-[1px] bg-slate-800/80 my-4" />
              
              <p className="text-xs sm:text-sm font-mono text-purple-300 tracking-wide font-medium italic">
                "Trusted by businesses across healthcare, beauty, solar energy, education, interior design, events, travel, and technology."
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6 — FINAL CTA */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-vibrant p-10 sm:p-16 text-center flex flex-col items-center gap-6 shadow-xl shadow-brand-dark/20">
            <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
              style={{
                backgroundImage: "radial-gradient(white 1.5px, transparent 1.5px)",
                backgroundSize: "24px 24px"
              }}
            />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40" />

            <div className="relative z-10 max-w-2xl flex flex-col items-center gap-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-200 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                Custom Systems Setup
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-black leading-tight text-white">
                Not Sure Which Service You Need? Let's Figure It Out Together.
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium max-w-lg">
                Every brand's growth path looks different. Tell us where you are today and where you want to be — we'll recommend the exact mix of services to get you there, starting with a free audit of your current digital presence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href="/#contact">
                  <Button className="rounded-full bg-white text-slate-950 hover:bg-slate-50 font-bold px-8 py-6 shadow-lg flex items-center gap-2 group cursor-pointer">
                    Get Your Free Digital Audit
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:+916200048924">
                  <Button className="rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold px-8 py-6 flex items-center gap-2 cursor-pointer">
                    <Phone className="w-4 h-4 text-purple-300" />
                    Call Us: +91 6200048924
                  </Button>
                </a>
              </div>
              
              <span className="text-xs text-purple-200 font-mono uppercase tracking-wider mt-2 block">
                No commitment required · Response within 24 hours
              </span>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
