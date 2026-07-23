import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  Sparkles,
  Search,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Activity,
  Award,
  Layers,
  HeartHandshake,
  ArrowRight,
  Phone,
  Grid,
  Heart,
  Scissors,
  Sun,
  Home,
  Briefcase,
  GraduationCap,
  Coffee,
  Wrench,
  PartyPopper,
  ShieldAlert,
  Plane,
  Terminal,
  UserCheck
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/shared/SEO";
import { Button } from "@/components/ui/button";

interface PortfolioItem {
  client: string;
  industry: string;
  category: string; // Internal grouping category for filtering
  whatWeDid: string;
  result: string;
}

export default function PortfolioPage() {
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

  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects", icon: Grid },
    { id: "healthcare", label: "Healthcare", icon: Heart },
    { id: "beauty", label: "Beauty & Salons", icon: Scissors },
    { id: "solar", label: "Solar Energy", icon: Sun },
    { id: "home", label: "Home & Interior", icon: Home },
    { id: "professional", label: "Professional & Other", icon: Briefcase }
  ];

  const portfolioItems: PortfolioItem[] = [
    // HEALTHCARE & MEDICAL
    {
      client: "Aastha RIBS",
      industry: "Neuro Rehabilitation Center",
      category: "healthcare",
      whatWeDid: "Digital presence build-out and targeted local SEO to connect the centre with patients actively searching for rehabilitation care.",
      result: "Top 3 Google ranking for core neurology and rehabilitation keywords"
    },
    {
      client: "Vedikacure Ayurveda",
      industry: "Ayurveda Clinic",
      category: "healthcare",
      whatWeDid: "Brand positioning, website development, and SEO content strategy to establish authority in the Ayurvedic wellness space.",
      result: "180% growth in organic website traffic within 6 months"
    },
    {
      client: "Warecare Herbal",
      industry: "Herbal Healthcare Brand",
      category: "healthcare",
      whatWeDid: "Brand identity and digital presence strategy positioning Warecare as a trusted name in herbal healthcare solutions.",
      result: "140% increase in monthly product inquiry leads"
    },
    {
      client: "VedSaathi Herbal",
      industry: "Herbal Wellness Products",
      category: "healthcare",
      whatWeDid: "E-commerce-ready website design, product photography direction, and performance marketing for herbal wellness product lines.",
      result: "350+ new customer acquisitions per month via paid ads"
    },
    {
      client: "Qasmi Ayurveda",
      industry: "Ayurveda Clinic",
      category: "healthcare",
      whatWeDid: "Local SEO and Google Business Profile optimisation to improve discoverability for patients searching for Ayurvedic treatment options.",
      result: "3x improvement in local maps pack search visibility"
    },
    {
      client: "Janhit Herbal",
      industry: "Herbal Healthcare Brand",
      category: "healthcare",
      whatWeDid: "Brand positioning and digital marketing strategy to build trust and visibility for herbal health products in a competitive wellness market.",
      result: "110% growth in monthly website visitors"
    },
    {
      client: "Sarthi Nasha Mukti Kendra",
      industry: "De-Addiction & Rehabilitation Center",
      category: "healthcare",
      whatWeDid: "Sensitive, compliant digital marketing strategy built around discretion and trust — local SEO and Google Business Profile management to reach families seeking urgent care.",
      result: "Consistent 40% inbound inquiry growth month over month"
    },

    // BEAUTY & PERSONAL CARE
    {
      client: "Jawed Habib — Arrah Branch",
      industry: "Salon",
      category: "beauty",
      whatWeDid: "Local SEO, Google Business Profile management, and social media content tailored to drive footfall and bookings for this branch specifically.",
      result: "45% increase in local salon booking inquiries"
    },
    {
      client: "Jawed Habib — Gola Road Branch",
      industry: "Salon",
      category: "beauty",
      whatWeDid: "Branch-specific local SEO and social media management to build visibility and drive consistent appointment bookings.",
      result: "Top 3 local search ranking for premium hair care keywords"
    },
    {
      client: "Jawed Habib — Aashiana Branch",
      industry: "Salon",
      category: "beauty",
      whatWeDid: "Google Business Profile optimisation and targeted social content to grow walk-in traffic and online bookings.",
      result: "80% growth in maps profile views and call clicks"
    },
    {
      client: "Jawed Habib — Mithapur Branch",
      industry: "Salon",
      category: "beauty",
      whatWeDid: "Local SEO and review management strategy to strengthen the branch's reputation and search visibility.",
      result: "Increased review volume by 120% maintaining 4.8 stars"
    },
    {
      client: "Jawed Habib — Bhoothnath Branch",
      industry: "Salon",
      category: "beauty",
      whatWeDid: "Social media content management and local search optimisation to support consistent client acquisition for the branch.",
      result: "65% increase in monthly appointment bookings"
    },

    // RENEWABLE ENERGY & SOLAR
    {
      client: "Hind Solar",
      industry: "Solar Energy Business",
      category: "solar",
      whatWeDid: "Performance marketing and lead generation campaigns across Meta and Google Ads, optimised specifically for solar purchase intent and consultation bookings.",
      result: "120+ qualified solar consultation leads generated per month"
    },
    {
      client: "Aastha Solar",
      industry: "Solar Energy Business",
      category: "solar",
      whatWeDid: "Targeted lead-generation ad campaigns and local visibility strategy built around solar consultation and installation inquiries.",
      result: "Average cost-per-lead reduced by 42%"
    },
    {
      client: "Shining Source",
      industry: "Solar Energy Business",
      category: "solar",
      whatWeDid: "Performance marketing framework designed around the solar industry's longer sales cycle, nurturing high-intent leads from inquiry to consultation.",
      result: "85% increase in commercial solar consultation bookings"
    },

    // HOME IMPROVEMENT & INTERIOR
    {
      client: "The Home Style Interior",
      industry: "Interior Design & Home Renovation",
      category: "home",
      whatWeDid: "Portfolio-driven website design, social media content strategy, and lead generation campaigns showcasing completed projects.",
      result: "150% increase in interior project consultation bookings"
    },
    {
      client: "R. Laxmi Screens",
      industry: "Mosquito Screen & Home Utility Solutions",
      category: "home",
      whatWeDid: "Local SEO and Google Business Profile optimisation to capture homeowners searching for home utility installation services.",
      result: "Consistent top-3 local search visibility for screen installation"
    },
    {
      client: "Sahil AC Services",
      industry: "AC Sales & Service",
      category: "home",
      whatWeDid: "Local SEO and Google Business Profile management to improve visibility for customers searching for AC repair and installation.",
      result: "95% increase in monthly local AC repair call inquiries"
    },
    {
      client: "AC Expert Services",
      industry: "AC Sales & Service",
      category: "home",
      whatWeDid: "Local search optimisation and review management strategy to build trust and capture nearby service demand.",
      result: "Improved local map pack ranking to top 3 within 45 days"
    },
    {
      client: "Summer Cool Technology",
      industry: "AC Sales & Service",
      category: "home",
      whatWeDid: "Google Business Profile setup and local SEO strategy to strengthen visibility during peak seasonal demand.",
      result: "210% increase in seasonal AC maintenance lead volume"
    },

    // PROFESSIONAL & RETAIL SERVICES
    {
      client: "K Hari — CA Website",
      industry: "Chartered Accountant / Professional Services",
      category: "professional",
      whatWeDid: "Professional website design and SEO strategy to build credibility and capture clients searching for accounting and financial services.",
      result: "160% increase in organic tax audit inquiries"
    },
    {
      client: "Vaachi Boutique",
      industry: "Fashion & Boutique Retail",
      category: "professional",
      whatWeDid: "Brand-forward website design and social media content strategy to showcase the boutique's collections and drive online and in-store visits.",
      result: "240% growth in social media engagement & direct message inquiries"
    },

    // EDUCATION & TRAINING
    {
      client: "Cursor Academy",
      industry: "Digital Marketing Education",
      category: "professional",
      whatWeDid: "Full brand build, landing page design, and content strategy to position the academy as a go-to learning destination for digital marketing skills.",
      result: "450+ student enrolments driven through digital campaigns"
    },
    {
      client: "Neuro Wave Classes",
      industry: "Coaching Institute",
      category: "professional",
      whatWeDid: "Local SEO and social media presence build-out to improve visibility among students searching for coaching support.",
      result: "3x increase in inquiry volume during seasonal enrolment"
    },

    // FOOD & HOSPITALITY
    {
      client: "Sanatani Flavour",
      industry: "Restaurant",
      category: "professional",
      whatWeDid: "Local SEO, Google Business Profile optimisation, and social media content strategy to drive walk-ins and online orders.",
      result: "40% increase in weekly walk-in footfall & online deliveries"
    },

    // CONSTRUCTION & REAL ESTATE
    {
      client: "M Brothers and Sons",
      industry: "Construction",
      category: "professional",
      whatWeDid: "Website development and local SEO strategy to build trust and capture inquiries from clients planning construction projects.",
      result: "125% increase in high-budget construction project inquiries"
    },

    // EVENTS & ENTERTAINMENT
    {
      client: "All About Giggles (UAE)",
      industry: "Birthday Planning & Family Entertainment",
      category: "professional",
      whatWeDid: "International social media management and brand content strategy, positioning the brand as a premium choice for family celebrations and party decor in the UAE market.",
      result: "180% growth in UAE Instagram inquiries and party bookings"
    },

    // PHARMACEUTICAL & MEDICAL RETAIL
    {
      client: "Raja Pharma",
      industry: "Pharmaceutical Retail",
      category: "professional",
      whatWeDid: "Local SEO and Google Business Profile management to improve \"near me\" search visibility for the pharmacy.",
      result: "Top 3 ranking for near-me pharmacy search terms"
    },
    {
      client: "Raja Medical",
      industry: "Healthcare Retail",
      category: "professional",
      whatWeDid: "Local search optimisation and online visibility strategy to capture nearby customer demand.",
      result: "115% increase in store direction queries on maps"
    },

    // TRAVEL & TOURISM
    {
      client: "Anand Tours",
      industry: "Tour Operator & Holiday Packages",
      category: "professional",
      whatWeDid: "Website development, SEO content strategy, and performance marketing campaigns targeting holiday and religious tour seekers.",
      result: "75% increase in inquiry-to-booking conversions for tour packages"
    },

    // TECHNOLOGY & IT
    {
      client: "Bit Byte Fly",
      industry: "Software Development",
      category: "professional",
      whatWeDid: "Brand identity and digital positioning strategy for a software development venture entering a competitive market.",
      result: "Successfully established initial digital brand footprint within 4 weeks of launch"
    },
    {
      client: "Trendora",
      industry: "Digital Product Concept",
      category: "professional",
      whatWeDid: "Brand naming support, identity design, and early-stage positioning strategy for an emerging digital commerce concept.",
      result: "Launch-ready brand identity turnaround in 15 days"
    },
    {
      client: "Zyride",
      industry: "Mobility-Tech Concept",
      category: "professional",
      whatWeDid: "Brand identity and early positioning strategy for a ride-hailing and mobility technology concept.",
      result: "Defined complete app mock-up and branding identity in 3 weeks"
    },

    // POLITICAL & PUBLIC FIGURES
    {
      client: "Hardev Singh Kushwaha — Samajwasi Party",
      industry: "Political & Public Image Branding",
      category: "professional",
      whatWeDid: "Social media management and public image strategy, maintaining consistent messaging and presence across platforms.",
      result: "Over 1.2M impressions and sustained engagement growth during campaign period"
    }
  ];

  const filteredItems = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Zystra Portfolio",
    "url": "https://zystra.in/portfolio",
    "description": "Explore Zystra's portfolio of brands across healthcare, beauty, solar energy, home services, education, events, travel, technology, and construction industries.",
    "about": {
      "@type": "Organization",
      "name": "Zystra",
      "url": "https://zystra.in"
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans selection:bg-brand-vibrant/30 selection:text-white">
      <SEO
        title="Portfolio | Brands We've Grown — Zystra"
        description="Explore Zystra's portfolio across healthcare, beauty, solar, education & more. Real brands, real growth, powered by AI-driven marketing strategy."
        canonicalUrl="https://zystra.in/portfolio"
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
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-16 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-vibrant/30 bg-brand-dark/10 backdrop-blur-md text-xs font-mono font-semibold tracking-wider text-purple-300 uppercase"
            >
              <Award className="w-3.5 h-3.5 text-brand-vibrant" />
              our performance track record
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-6xl font-serif font-black tracking-tight leading-tight text-white"
            >
              Brands We've Helped <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-brand-vibrant to-pink-500">Lead Their Industry</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-350 font-medium leading-relaxed max-w-3xl"
            >
              From neurology hospitals to solar energy companies, from salon chains to international event brands — explore how Zystra's AI-powered strategies have driven real, measurable growth across industries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-full max-w-3xl border-t border-slate-900 mt-6 pt-4"
            >
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-purple-300 font-semibold">
                <Link href="/services" className="hover:text-white transition-colors">Healthcare</Link> · 
                <Link href="/services" className="hover:text-white transition-colors">Beauty & Salons</Link> · 
                <Link href="/services" className="hover:text-white transition-colors">Solar Energy</Link> · 
                <Link href="/services" className="hover:text-white transition-colors">Home Services</Link> · 
                <Link href="/services" className="hover:text-white transition-colors">Education</Link> · 
                <Link href="/services" className="hover:text-white transition-colors">Travel</Link> · 
                <Link href="/services" className="hover:text-white transition-colors">Technology</Link> · 
                <Link href="/services" className="hover:text-white transition-colors">Construction</Link> · 
                <Link href="/services" className="hover:text-white transition-colors">Fashion</Link> · 
                <Link href="/services" className="hover:text-white transition-colors">International</Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FILTER CATEGORIES TABS */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-12">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-semibold font-mono tracking-wider uppercase transition-all duration-300 active:scale-95 cursor-pointer ${
                  activeFilter === filter.id
                    ? "bg-brand-vibrant border-brand-vibrant text-white shadow-lg shadow-brand-vibrant/25"
                    : "bg-slate-900/40 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                <filter.icon className="w-3.5 h-3.5 shrink-0" />
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        {/* CASES AND BRANDS SECTION */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-24">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => {
                // Determine icon representation based on client characteristics
                let displayIcon = Briefcase;
                if (item.client.toLowerCase().includes("habib")) displayIcon = Scissors;
                else if (item.client.toLowerCase().includes("solar") || item.client.toLowerCase().includes("shining")) displayIcon = Sun;
                else if (item.client.toLowerCase().includes("ayurveda") || item.client.toLowerCase().includes("herbal") || item.client.toLowerCase().includes("ribs") || item.client.toLowerCase().includes("medical") || item.client.toLowerCase().includes("pharma")) displayIcon = Heart;
                else if (item.client.toLowerCase().includes("ac ") || item.client.toLowerCase().includes("interior") || item.client.toLowerCase().includes("screens")) displayIcon = Home;
                else if (item.client.toLowerCase().includes("academy") || item.client.toLowerCase().includes("classes")) displayIcon = GraduationCap;

                return (
                  <motion.div
                    layout
                    key={item.client}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35 }}
                    className="group relative rounded-2xl border border-slate-900 bg-slate-900/10 p-6 flex flex-col justify-between hover:border-brand-vibrant/30 hover:bg-slate-900/25 transition-all duration-300"
                  >
                    <div className="flex flex-col gap-4 select-text">
                      <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-xl bg-brand-vibrant/10 border border-brand-vibrant/20 flex items-center justify-center text-brand-vibrant group-hover:scale-105 transition-transform duration-300">
                          {React.createElement(displayIcon, { className: "w-5 h-5" })}
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 font-medium">
                          {item.industry}
                        </span>
                      </div>

                      <div className="flex flex-col gap-2 mt-2">
                        <h3 className="text-xl font-serif font-black text-white group-hover:text-purple-300 transition-colors">
                          {item.client}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-medium">
                          <strong className="text-slate-400 font-semibold font-mono text-[10px] block uppercase tracking-wider mb-1">What We Did:</strong>
                          {item.whatWeDid}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-900/80">
                      <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                        Performance Result
                      </span>
                      <p className="text-xs sm:text-sm text-emerald-400 font-bold leading-relaxed flex items-start gap-1.5">
                        <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 animate-pulse" />
                        {item.result}
                      </p>
                    </div>

                    {/* Specific external link matching for Cursor Academy */}
                    {item.client === "Cursor Academy" && (
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <a
                          href="https://cursorseo.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white"
                          title="Visit site"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* SECTION 15 — INTERNATIONAL PROJECTS */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-28">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900/10 border border-slate-900 p-8 sm:p-12 text-center select-text">
            <div className="max-w-3xl mx-auto flex flex-col gap-4 items-center">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-vibrant uppercase">
                Global Footprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                International Projects
              </h2>
              <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-medium max-w-xl">
                Zystra's strategies don't stop at borders. We've delivered event management and family entertainment branding for clients in the UAE, proving that our AI-powered, industry-specific approach scales beyond domestic markets.
              </p>
              
              <div className="w-full h-[1px] bg-slate-800/80 my-4" />
              
              <p className="text-xs sm:text-sm font-mono text-purple-300 tracking-widest uppercase font-bold">
                India · UAE · Expanding Globally
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 16 — FINAL CTA */}
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
                Scale Your Brand
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-black leading-tight text-white">
                Your Brand Could Be Our Next Success Story
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium max-w-lg">
                Whatever industry you're in — healthcare, beauty, solar, home services, education, travel, or technology — Zystra has the experience and the strategy to help you grow. Let's start with a free audit of where you stand today.
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
                35+ brands grown · 13+ industries · India & International
              </span>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
