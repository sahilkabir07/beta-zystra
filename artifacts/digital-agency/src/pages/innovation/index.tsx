import React, { useEffect } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Sparkles,
  Zap,
  TrendingUp,
  Cpu,
  GraduationCap,
  Car,
  ShoppingBag,
  Megaphone,
  MessageSquareCode,
  ArrowRight,
  Phone,
  ArrowUpRight,
  Activity,
  Lightbulb,
  Compass,
  Database,
  ChevronRight
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/shared/SEO";
import { Button } from "@/components/ui/button";

export default function InnovationPage() {
  // Page initialization
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
    "@type": "CollectionPage",
    "name": "Zystra Innovation",
    "url": "https://zystra.in/innovation",
    "description": "Explore Zystra's approach to AI-powered technology and product development, including ventures like Cursor SEO Academy, ZyRide, Trendora, and Awaaz Portal.",
    "about": {
      "@type": "Organization",
      "name": "Zystra",
      "url": "https://zystra.in"
    },
    "hasPart": [
      {
        "@type": "CreativeWork",
        "name": "Cursor SEO Academy",
        "url": "https://cursorseo.com",
        "description": "A digital marketing education platform with a Learn to Internship to Job Assistance model."
      },
      {
        "@type": "Thing",
        "name": "ZyRide",
        "description": "A mobility-tech concept in early development focused on smarter ride-hailing and transport solutions."
      },
      {
        "@type": "Thing",
        "name": "Trendora",
        "description": "A digital commerce and trend-discovery concept in early-stage development."
      },
      {
        "@type": "Thing",
        "name": "Awaaz Portal",
        "description": "A social-impact anonymous reporting platform built around privacy and trust."
      }
    ]
  };

  const ventures = [
    {
      title: "Cursor SEO Academy",
      status: "Live",
      statusColor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
      description: "A digital marketing education platform offering a structured Learn → Internship → Job Assistance model — helping learners move from foundational skills to real industry experience and job-ready careers in SEO, performance marketing, and growth.",
      icon: GraduationCap,
      linkText: "Visit Cursor SEO Academy",
      href: "https://cursorseo.com",
      isExternal: true
    },
    {
      title: "ZyRide",
      status: "In Development",
      statusColor: "bg-amber-500/10 border-amber-500/20 text-amber-400",
      description: "A mobility-tech concept exploring smarter, more reliable ride-hailing and transport solutions. ZyRide is in early development, with a focus on building a dependable, user-first riding experience.",
      icon: Car,
      linkText: "",
      href: ""
    },
    {
      title: "Trendora",
      status: "In Development",
      statusColor: "bg-amber-500/10 border-amber-500/20 text-amber-400",
      description: "A digital commerce and trend-discovery concept currently in early-stage development, built around helping users discover and engage with what's trending — with more details to be shared as the platform takes shape.",
      icon: ShoppingBag,
      linkText: "",
      href: ""
    },
    {
      title: "Awaaz Portal",
      status: "In Development",
      statusColor: "bg-amber-500/10 border-amber-500/20 text-amber-400",
      description: "A social-impact technology platform designed to give people a safe, anonymous way to voice concerns within local ecosystems — built with privacy, trust, and transparency as core design principles.",
      icon: MessageSquareCode,
      linkText: "",
      href: ""
    }
  ];

  const buildSteps = [
    {
      step: "Step 1",
      title: "Identify a Real Gap",
      description: "Every product starts with a problem we've personally seen go unsolved — not a trend we're chasing."
    },
    {
      step: "Step 2",
      title: "Validate Before Building",
      description: "We research the market, the audience, and the competition before writing a single line of a product requirement document."
    },
    {
      step: "Step 3",
      title: "Build Lean, Launch Fast",
      description: "We favour practical, deployable MVPs over long development cycles — getting real feedback as early as possible."
    },
    {
      step: "Step 4",
      title: "Iterate With Data",
      description: "Once live, every product is refined continuously using real usage data — the same discipline we apply to client performance marketing."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans selection:bg-brand-vibrant/30 selection:text-white">
      <SEO
        title="Innovation | What We're Building Next — Zystra"
        description="Zystra isn't just an agency — we build technology. Explore our ventures including Cursor SEO Academy, ZyRide, Trendora, and Awaaz Portal."
        canonicalUrl="https://zystra.in/innovation"
        schema={seoSchema}
      />

      <Navbar />

      {/* Decorative Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute -top-[15%] left-[5%] w-[800px] h-[800px] bg-brand-dark/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-[25%] -right-[10%] w-[700px] h-[700px] bg-brand-vibrant/10 rounded-full blur-[160px]" />
      </div>

      <main className="relative z-10 pt-28 pb-20">

        {/* SECTION 1 — HERO */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-24 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-vibrant/30 bg-brand-dark/10 backdrop-blur-md text-xs font-mono font-semibold tracking-wider text-purple-300 uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-vibrant animate-pulse" />
              Zystra Innovation Lab
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-6xl font-serif font-black tracking-tight leading-tight text-white"
            >
              We Don't Just Market Brands. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-brand-vibrant to-pink-500">We Build Technology.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-350 font-medium leading-relaxed max-w-3xl"
            >
              Beyond client campaigns, Zystra invests in technology — products, platforms, and tools built using AI and data to solve real problems. This is where that work lives.
            </motion.p>
          </div>
        </section>

        {/* SECTION 2 — WHY WE BUILD TECHNOLOGY */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-28">
          <div className="relative rounded-3xl border border-slate-800 bg-slate-900/30 backdrop-blur-xl p-8 sm:p-12 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-vibrant/5 rounded-full blur-[90px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 select-text items-start">
              
              <div className="lg:col-span-6 flex flex-col gap-6">
                <span className="text-xs font-mono font-bold tracking-widest text-brand-vibrant uppercase">
                  R&D Commitment
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                  Why a Marketing Agency Invests in Technology
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                  Most agencies stop at running campaigns for other people's brands. Zystra goes further. We believe the same AI-powered, data-driven thinking we use for our clients should also be applied to building technology — tools and platforms that didn't exist before, created to solve genuine problems.
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                  Technology is not a side project for us. It's core to how we operate. Every campaign we run for clients is powered by AI tools, automation, and data systems — and that same technical fluency is what drives the products we build under our own name.
                </p>
              </div>

              <div className="lg:col-span-6 flex flex-col gap-8 bg-slate-950/40 p-6 sm:p-8 rounded-2xl border border-slate-900">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white flex items-center gap-2">
                  <Compass className="w-5.5 h-5.5 text-brand-vibrant shrink-0" />
                  Our Technology Philosophy
                </h3>
                
                <div className="flex flex-col gap-6 pt-4 border-t border-slate-900">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-base font-serif font-bold text-white flex items-center gap-2">
                      <Cpu className="w-4.5 h-4.5 text-purple-400" />
                      AI-First Thinking
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-450 leading-relaxed font-medium">
                      From keyword research to ad optimisation to content generation, AI is embedded in how we work — not bolted on as an afterthought.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="text-base font-serif font-bold text-white flex items-center gap-2">
                      <Zap className="w-4.5 h-4.5 text-yellow-500" />
                      Build Lean, Ship Fast
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-450 leading-relaxed font-medium">
                      We favour practical, deployable products over long development cycles. Real feedback, early — always.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="text-base font-serif font-bold text-white flex items-center gap-2">
                      <Database className="w-4.5 h-4.5 text-emerald-400" />
                      Data-Driven Iteration
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-450 leading-relaxed font-medium">
                      Every product we build, like every campaign we run, is refined continuously using real usage data, not assumptions.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3 — OUR VENTURES */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-vibrant uppercase">
              Current Focus
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">
              Our Ventures
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-medium">
              From education to mobility to social impact, here's a glimpse into what we're building beyond client work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ventures.map((venture, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-slate-900 bg-slate-900/20 p-6 sm:p-8 flex flex-col justify-between hover:border-brand-vibrant/30 hover:bg-slate-900/30 transition-all duration-300"
              >
                <div className="flex flex-col gap-5 select-text">
                  <div className="flex justify-between items-start">
                    <div className="w-11 h-11 rounded-xl bg-brand-vibrant/10 border border-brand-vibrant/25 flex items-center justify-center text-brand-vibrant group-hover:scale-105 transition-transform duration-300">
                      <venture.icon className="w-5.5 h-5.5" />
                    </div>
                    <span className={`text-[10px] font-mono px-2.5 py-1 rounded border uppercase font-bold tracking-wider ${venture.statusColor}`}>
                      {venture.status}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2.5 mt-2">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-purple-300 transition-colors">
                      {venture.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-medium">
                      {venture.description}
                    </p>
                  </div>
                </div>

                {venture.linkText && (
                  <div className="mt-6 pt-4 border-t border-slate-900/80">
                    {venture.isExternal ? (
                      <a
                        href={venture.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-bold text-purple-300 hover:text-white flex items-center gap-1.5 group/link cursor-pointer"
                      >
                        {venture.linkText}
                        <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <Link href={venture.href}>
                        <span className="text-xs font-mono font-bold text-purple-300 hover:text-white flex items-center gap-1.5 group/link cursor-pointer">
                          {venture.linkText}
                          <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                        </span>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4 — WHAT'S NEXT */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-28">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900/10 border border-slate-800 p-8 sm:p-12 text-center select-text">
            <div className="max-w-2xl mx-auto flex flex-col gap-4 items-center">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-vibrant uppercase">
                Active Research
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                What We're Building Next
              </h2>
              <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-medium">
                These ventures are just the beginning. Our innovation lab is actively exploring new ideas across AI, technology, and digital products. As each one moves from concept to launch, it will be featured here.
              </p>
              
              <div className="w-full h-[1px] bg-slate-800/80 my-4" />
              
              <p className="text-xs sm:text-sm font-mono text-purple-300 tracking-widest uppercase font-bold">
                More technology. More products. Coming soon.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5 — HOW WE BUILD */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-vibrant uppercase">
              Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">
              How Zystra Approaches Product Development
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-medium">
              Whether it's a client campaign or our own technology, the process is the same — research first, validate the problem, design with intent, and build only what's needed to deliver real value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 select-text">
            {buildSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-900/25 p-6 rounded-2xl border border-slate-900 flex flex-col gap-4"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-brand-vibrant uppercase tracking-wider">
                    {step.step}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-vibrant/60" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-serif font-bold text-white leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6 — WHY THIS MATTERS FOR CLIENTS */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-28 select-text">
          <div className="relative rounded-3xl border border-slate-800 bg-slate-900/30 backdrop-blur-xl p-8 sm:p-12 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-vibrant/5 rounded-full blur-[90px] pointer-events-none" />
            
            <div className="max-w-4xl mx-auto flex flex-col gap-5">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-vibrant uppercase">
                Client Value
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white leading-tight">
                What Our Innovation Work Means for You
              </h2>
              <p className="text-sm sm:text-base text-slate-350 leading-relaxed font-medium">
                When you work with Zystra, you're not working with an agency that only knows how to execute briefs. You're working with a team that builds, tests, and ships its own technology — which means we bring genuine product thinking, technical fluency, and a builder's mindset to every client strategy we create as your dedicated product development agency.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7 — FINAL CTA */}
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
                Co-Development
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-black leading-tight text-white">
                Want to Build Something With Us?
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium max-w-lg">
                Whether you have a product idea that needs validation, or a brand that needs the same builder's mindset applied to its marketing — let's talk.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href="/#contact">
                  <Button className="rounded-full bg-white text-slate-950 hover:bg-slate-50 font-bold px-8 py-6 shadow-lg flex items-center gap-2 group cursor-pointer">
                    Get In Touch
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
                Response within 24 hours
              </span>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
