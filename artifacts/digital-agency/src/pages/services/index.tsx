import React, { useEffect } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Sparkles,
  Search,
  Megaphone,
  TrendingUp,
  MapPin,
  Video,
  Code2,
  Palette,
  Users,
  Layers,
  Smartphone,
  Workflow,
  ArrowRight,
  Phone,
  Mail,
  ChevronRight,
  Activity,
  Lightbulb,
  Cpu
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/shared/SEO";
import { Button } from "@/components/ui/button";
import ServicesHero from "./components/ServicesHero";
import UnifiedEcosystem from "./components/UnifiedEcosystem";




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

  const coreServices = [
    {
      title: "Search Engine Optimisation (SEO)",
      description: "Rank at the top of Google for the keywords your customers are actually searching. Our SEO strategies combine technical precision, content depth, and authoritative link building — built for sustainable, long-term organic growth rather than short-lived spikes.",
      included: "On-page optimisation, technical SEO audits, content strategy, keyword research, link building, and monthly performance reporting.",
      icon: Search,
      anchorText: "Explore SEO",
      href: "/services/seo"
    },
    {
      title: "Meta Ads — Facebook & Instagram",
      description: "High-converting paid social campaigns that reach exactly the right audience at exactly the right moment. We build ad creatives, audience segments, conversion funnels, and retargeting systems that turn cold traffic into loyal customers.",
      included: "Campaign strategy, ad creative production, audience targeting, A/B testing, retargeting, and ROAS-focused optimisation.",
      icon: Megaphone,
      anchorText: "Explore Meta Ads",
      href: "/services/meta-ads"
    },
    {
      title: "Google Ads (PPC)",
      description: "Intent-driven advertising that captures customers at the exact moment they're ready to buy. Our Google Ads specialists build precision PPC campaigns across Search, Display, and YouTube — with every rupee tracked and optimised for return.",
      included: "Search campaigns, display advertising, YouTube ads, conversion tracking, bid optimisation, and transparent spend reporting.",
      icon: Cpu,
      anchorText: "Explore Google Ads",
      href: "/services/google-ads"
    },
    {
      title: "Google Business Profile & Local SEO",
      description: "Appear at the top of Google Maps and dominate \"near me\" search results. We fully optimise, manage, and grow your Google Business Profile so local customers find and choose you first.",
      included: "Profile optimisation, review management, local citation building, map ranking strategy, and ongoing visibility monitoring.",
      icon: MapPin,
      anchorText: "Explore Local SEO",
      href: "/services/gbp-local-seo"
    },
    {
      title: "Video Production",
      description: "Story-driven video content that captures attention and communicates your brand's value in seconds. From brand films and product videos to reels and client testimonials — we handle the full production process.",
      included: "Concept development, filming, editing, motion graphics, and platform-specific formatting for social and ads.",
      icon: Video,
      anchorText: "Explore Video Production",
      href: "/services/video-shoot-production"
    },
    {
      title: "Website Design & Development",
      description: "Your website is your most powerful sales asset. We design fast, mobile-first, conversion-optimised websites built on modern technology — engineered to turn visitors into leads, not just page views.",
      included: "UI/UX design, responsive development, speed optimisation, SEO-ready architecture, and ongoing maintenance support.",
      icon: Code2,
      anchorText: "Explore Website Design",
      href: "/services/website-designing"
    },
    {
      title: "Logo Design & Branding",
      description: "A great brand is not just a logo — it's a feeling. We create brand identities that are memorable, premium, and built to scale — from logo design and colour systems to complete brand guidelines.",
      included: "Logo design, brand colour palette, typography systems, brand guidelines, and visual identity rollout.",
      icon: Palette,
      anchorText: "Explore Logo Design",
      href: "/services/logo-designing"
    },
    {
      title: "Social Media Management",
      description: "Consistent, creative, community-driven content that builds your audience and keeps your brand top of mind. We manage content calendars, design, copywriting, and community engagement across every platform that matters to your audience.",
      included: "Content strategy, post design, copywriting, scheduling, community management, and monthly growth reporting.",
      icon: Users,
      anchorText: "Explore Social Media",
      href: "/services/social-media-management"
    },
    {
      title: "Performance Marketing",
      description: "We align every marketing channel — paid, organic, social, and email — into one integrated performance system. Every decision is driven by data. Every campaign is optimised for return on investment, not just reach.",
      included: "Cross-channel strategy, conversion rate optimisation, analytics setup, attribution modelling, and growth scaling plans.",
      icon: Layers,
      anchorText: "Explore Performance Marketing",
      href: "/services/performance-marketing"
    },
    {
      title: "App Development",
      description: "Custom mobile and web applications built for real users solving real problems. We design and develop apps that deliver smooth experiences and support your business operations at scale.",
      included: "UI/UX design, native and cross-platform development, backend architecture, testing, and post-launch support.",
      icon: Smartphone,
      anchorText: "Explore App Development",
      href: "/services/custom-app-development"
    },
    {
      title: "RevOps Solutions",
      description: "We align your marketing, sales, and customer success into one revenue engine — using CRM integration, automation, pipeline design, and reporting systems that eliminate friction and accelerate growth.",
      included: "CRM setup and integration, sales funnel automation, pipeline reporting, and cross-team workflow design.",
      icon: Workflow,
      anchorText: "Explore RevOps",
      href: "/services/rev-ops-solutions"
    }
  ];

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


        {/* SECTION 3 — CORE SERVICES GRID */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-vibrant uppercase">
              The Suite
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">
              Our Core Services
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-medium">
              Eleven services. One integrated growth system. Explore what we do — and how each piece fits into your brand's bigger picture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-slate-800 bg-slate-900/20 p-6 flex flex-col justify-between hover:border-brand-vibrant/30 hover:bg-slate-900/30 transition-all duration-300 shadow-md"
              >
                <div className="flex flex-col gap-5">
                  <div className="w-11 h-11 rounded-xl bg-brand-vibrant/10 border border-brand-vibrant/25 flex items-center justify-center text-brand-vibrant group-hover:scale-105 transition-transform duration-300">
                    <service.icon className="w-5.5 h-5.5" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5 pt-4 border-t border-slate-900/80">
                    <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                      What's Included
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-medium">
                      {service.included}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900/80">
                  <Link href={service.href}>
                    <span className="text-xs font-mono font-bold text-purple-300 hover:text-white flex items-center gap-1.5 group/link cursor-pointer">
                      {service.anchorText}
                      <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

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
