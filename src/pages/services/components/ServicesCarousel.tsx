import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────
   Brand Tokens
───────────────────────────────────────────────────────────────────── */
const BRAND = {
  vibrant: "#7059f6",
  bg: "#070412",
};

/* ─────────────────────────────────────────────────────────────────────
   Grid & Star Dust Background (Fast GPU accelerated)
───────────────────────────────────────────────────────────────────── */
function PosterBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Deep purple radial glow wash */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-70 transform-gpu"
        style={{
          background: `radial-gradient(circle at 50% 40%, #311868 0%, #150933 50%, ${BRAND.bg} 90%)`,
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-25 transform-gpu"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(160, 140, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(160, 140, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Star Dust */}
      <svg className="absolute inset-0 w-full h-full opacity-50 pointer-events-none">
        {[
          { cx: "12%", cy: "18%", r: 1.2 }, { cx: "22%", cy: "38%", r: 1.5 },
          { cx: "38%", cy: "12%", r: 1.2 }, { cx: "82%", cy: "22%", r: 1.5 },
          { cx: "88%", cy: "68%", r: 1.8 }, { cx: "78%", cy: "82%", r: 1.2 },
          { cx: "14%", cy: "78%", r: 1.5 }, { cx: "48%", cy: "88%", r: 1.2 },
          { cx: "62%", cy: "28%", r: 1.2 }, { cx: "28%", cy: "62%", r: 1.8 },
        ].map((star, idx) => (
          <circle key={idx} cx={star.cx} cy={star.cy} r={star.r} fill="#ffffff" />
        ))}
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   11 SERVICES DEFINITION
───────────────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    num: "01",
    label: "SEO",
    title: "SEARCH ENGINE OPTIMISATION",
    orbitTag: "Orbiting around",
    taglineLine1: "Take your brand beyond limits with",
    taglineHighlight: "futuristic, data driven strategies.",
    link: "/services/seo",
    image: "/heroBgImg/SEO.webp",
  },
  {
    num: "02",
    label: "META ADS",
    title: "HYPER TARGETED PAID SOCIAL",
    orbitTag: "Accelerating through",
    taglineLine1: "Scale your revenue with scroll-stopping",
    taglineHighlight: "high converting ad campaigns.",
    link: "/services/meta-ads",
    image: "/heroBgImg/meta.webp",
  },
  {
    num: "03",
    label: "GOOGLE ADS",
    title: "PRECISION SEARCH & PPC",
    orbitTag: "Dominating high intent",
    taglineLine1: "Capture buyer intent instantly with",
    taglineHighlight: "ROI engineered PPC systems.",
    link: "/services/google-ads",
    image: "/heroBgImg/Google.webp",
  },
  {
    num: "04",
    label: "WEB DEVELOPMENT",
    title: "WORLD CLASS UI & DEV",
    orbitTag: "Architecting modern",
    taglineLine1: "Transform your online presence with",
    taglineHighlight: "fast, conversion-first design.",
    link: "/services/website-designing",
    image: "/heroBgImg/web-dev.webp",
  },
  {
    num: "05",
    label: "LOCAL SEO",
    title: "GOOGLE MAPS DOMINANCE",
    orbitTag: "Conquering local",
    taglineLine1: "Stand out in 'near me' searches with",
    taglineHighlight: "top 3 Google Map pack ranking.",
    link: "/services/gbp-local-seo",
    image: "/heroBgImg/local-seo.webp",
  },
  {
    num: "06",
    label: "PERFORMANCE",
    title: "MULTI CHANNEL GROWTH",
    orbitTag: "Optimizing overall",
    taglineLine1: "Pay only for verified outcomes with",
    taglineHighlight: "tracked, scalable performance ops.",
    link: "/services/performance-marketing",
    image: "/heroBgImg/performance.webp",
  },
  {
    num: "07",
    label: "VIDEO SHOOTS",
    title: "STORY DRIVEN PRODUCTION",
    orbitTag: "Captivating viewers with",
    taglineLine1: "Engage audience emotions through",
    taglineHighlight: "studio quality reels & commercials.",
    link: "/services/video-shoot-production",
    image: "/heroBgImg/video-shoot.webp",
  },
  {
    num: "08",
    label: "LOGO DESIGN",
    title: "LOGO & BRAND IDENTITY",
    orbitTag: "Crafting iconic",
    taglineLine1: "Build instant trust and recall with",
    taglineHighlight: "tailored, premium identity systems.",
    link: "/services/logo-designing",
    image: "/heroBgImg/logo-design.webp",
  },
  {
    num: "09",
    label: "SOCIAL MEDIA",
    title: "MANAGEMENT & COMMUNITY",
    orbitTag: "Engaging connected",
    taglineLine1: "Turn followers into active brand advocates with",
    taglineHighlight: "consistent viral content strategies.",
    link: "/services/social-media-management",
    image: "/heroBgImg/social-media.webp",
  },
  {
    num: "10",
    label: "APP DEV",
    title: "MOBILE & WEB ENGINEERING",
    orbitTag: "Building scalable",
    taglineLine1: "Empower your business operations with",
    taglineHighlight: "high speed iOS & Android applications.",
    link: "/services/custom-app-development",
    image: "/heroBgImg/app-dev.webp",
  },
  {
    num: "11",
    label: "REVOPS",
    title: "REVENUE OPS & CRM",
    orbitTag: "Unifying marketing &",
    taglineLine1: "Streamline sales and customer growth with",
    taglineHighlight: "automated revenue pipelines.",
    link: "/services/rev-ops-solutions",
    image: "/heroBgImg/rev-ops.webp",
  },
];

/* ─────────────────────────────────────────────────────────────────────
   Poster Card Component (Staggered Fluid 60 FPS Entrance)
───────────────────────────────────────────────────────────────────── */
function PosterCard({ svc }: { svc: typeof SERVICES[0] }) {
  const { label, orbitTag, taglineLine1, taglineHighlight, link, image, num } = svc;

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#070412] font-sans transform-gpu">
      {/* Background Texture & Grid */}
      <PosterBg />

      {/* MAIN CENTER LAYOUT */}
      <div className="relative w-full h-full flex flex-col items-center justify-between pt-6 sm:pt-8 pb-14 px-6 z-10">

        {/* 1. Orbiting Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="text-center z-10 mt-1 sm:mt-2"
        >
          <span className="text-lg sm:text-2xl font-sans font-medium text-slate-200 tracking-wide drop-shadow-md">
            {orbitTag}
          </span>
        </motion.div>

        {/* 2. GIANT GRADIENT TITLE TEXT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.08, ease: [0.25, 1, 0.5, 1] as const }}
          className="absolute top-[16%] sm:top-[17%] left-1/2 -translate-x-1/2 w-full text-center z-10 pointer-events-none px-2 transform-gpu"
        >
          <h1
            className="font-black uppercase tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-[#9d86ff] drop-shadow-[0_15px_40px_rgba(112,89,246,0.5)]"
            style={{
              fontSize: label.length <= 4 
                ? "clamp(130px, 27vw, 310px)" 
                : label.length > 10 
                ? "clamp(48px, 10.5vw, 125px)" 
                : "clamp(75px, 17vw, 195px)",
              fontFamily: "'Barlow Condensed', 'Bricolage Grotesque', sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            {label}
          </h1>
        </motion.div>

        {/* 3. 3D FLOATING SUBJECT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: [0.98, 1, 0.98],
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 0.4, delay: 0.1 },
            scale: { duration: 7.5, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 7.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[90%] max-w-[540px] h-[55%] sm:h-[63%] flex items-center justify-center z-15 pointer-events-none transform-gpu drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
        >
          <img
            src={image}
            alt={label}
            className="w-full h-full object-contain transform-gpu filter drop-shadow-[0_20px_35px_rgba(112,89,246,0.35)]"
          />
        </motion.div>

        {/* 4. BOTTOM SUBTITLE TAGLINE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.12 }}
          className="text-center z-30 max-w-xl mx-auto px-4 mb-1"
        >
          <p className="text-base sm:text-2xl font-sans text-slate-100 leading-relaxed font-normal">
            {taglineLine1}{" "}
            <span className="font-bold text-[#7059f6]">
              {taglineHighlight}
            </span>
          </p>
        </motion.div>

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   Main Export — Super Smooth & Fast Carousel (60 FPS GPU Accelerated)
───────────────────────────────────────────────────────────────────── */
export default function ServicesCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  }, [active]);

  const next = useCallback(() => {
    setDirection(1);
    setActive((p) => (p + 1) % SERVICES.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((p) => (p - 1 + SERVICES.length) % SERVICES.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  // Continuous auto-advance every 2 seconds (non-stop)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    timerRef.current = setTimeout(next, 2000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, next]);

  const svc = SERVICES[active];

  // Ultra-smooth 60 FPS spring & depth transition
  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? "100%" : "-100%",
      scale: 0.96,
      opacity: 0,
      filter: "blur(4px)",
    }),
    center: {
      x: "0%",
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        x: { type: "spring" as const, stiffness: 400, damping: 35, mass: 0.7 },
        scale: { duration: 0.25, ease: [0.25, 1, 0.5, 1] as const },
        opacity: { duration: 0.2 },
        filter: { duration: 0.2 },
      },
    },
    exit: (d: number) => ({
      x: d > 0 ? "-100%" : "100%",
      scale: 0.96,
      opacity: 0,
      filter: "blur(4px)",
      transition: {
        x: { type: "spring" as const, stiffness: 400, damping: 35, mass: 0.7 },
        scale: { duration: 0.2 },
        opacity: { duration: 0.15 },
        filter: { duration: 0.15 },
      },
    }),
  };

  return (
    <section className="container mx-auto px-4 sm:px-8 max-w-7xl mb-16 select-none">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2
          className="text-3xl sm:text-5xl font-black text-white leading-tight"
          style={{ fontFamily: "'Bricolage Grotesque', serif" }}
        >
          Explore Our{" "}
          <span className="bg-gradient-to-r from-[#7059f6] via-[#a855f7] to-[#ffffff] bg-clip-text text-transparent">
            Digital Capabilities
          </span>
        </h2>
      </div>

      {/* Carousel Outer Box */}
      <div
        className="relative rounded-[36px] overflow-hidden border-2 shadow-[0_30px_100px_rgba(112,89,246,0.35)] transform-gpu cursor-grab active:cursor-grabbing"
        style={{ height: "clamp(580px, 82vh, 800px)", borderColor: "rgba(112,89,246,0.4)" }}
      >
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) next();
              else if (info.offset.x > 60) prev();
            }}
            className="absolute inset-0 transform-gpu will-change-transform"
          >
            <PosterCard svc={svc} />
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next Arrows */}
        <motion.button
          whileHover={{ scale: 1.15, backgroundColor: "rgba(112, 89, 246, 0.4)" }}
          whileTap={{ scale: 0.92 }}
          onClick={prev}
          aria-label="Previous Service"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-black/80 border border-white/20 flex items-center justify-center shadow-2xl text-white transform-gpu backdrop-blur-md cursor-pointer transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.15, backgroundColor: "rgba(112, 89, 246, 0.4)" }}
          whileTap={{ scale: 0.92 }}
          onClick={next}
          aria-label="Next Service"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-black/80 border border-white/20 flex items-center justify-center shadow-2xl text-white transform-gpu backdrop-blur-md cursor-pointer transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Dots & Active Indicator */}
      <div className="mt-6 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2.5 flex-wrap justify-center">
          {SERVICES.map((s, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => go(i)}
              aria-label={`Go to service ${s.num}`}
              className="rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: i === active ? 36 : 10,
                height: 10,
                background: i === active ? "#7059f6" : "rgba(255, 255, 255, 0.25)",
                boxShadow: i === active ? "0 0 16px #7059f6" : "none",
              }}
            />
          ))}
        </div>

        <motion.span
          key={active}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase font-bold tracking-widest text-purple-200 bg-purple-950/70 px-4 py-1.5 rounded-full border border-purple-500/30 shadow-lg"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          {SERVICES[active].num} / {SERVICES.length} — {SERVICES[active].title}
        </motion.span>
      </div>
    </section>
  );
}
