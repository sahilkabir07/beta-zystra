import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const navItems = [
    { label: "HOME", href: "#" },
    { label: "SERVICES", href: "#services" },
    { label: "INNOVATION", href: "#innovation" },
    { label: "WHY ZYSTRA", href: "#why-zystra" },
    { label: "PROCESS", href: "#how-we-work" },
    { label: "CONTACT", href: "#contact" }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#140026] text-white overflow-hidden flex flex-col justify-between select-none">
      {/* Background Ambient Glows */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-90"
        style={{
          background: `
            radial-gradient(circle at 80% 30%, rgba(147, 51, 234, 0.35) 0%, rgba(88, 28, 135, 0.18) 45%, transparent 75%),
            radial-gradient(circle at 15% 75%, rgba(192, 132, 252, 0.12) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(20, 0, 38, 1) 0%, rgba(15, 0, 30, 1) 100%)
          `
        }}
      />

      {/* Top Header / Navigation Bar (Always Above Graphic with z-50) */}
      <header className="relative z-50 w-full px-6 sm:px-12 py-6 flex items-center justify-between max-w-7xl mx-auto border-b border-white/5">
        {/* Logo Badge */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-black/60 border border-purple-500/30 flex items-center justify-center overflow-hidden shadow-md group-hover:border-purple-400 transition-colors">
            <img src="/zystra-logo.jpg" alt="Zystra Logo" className="w-full h-full object-cover" />
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-xs lg:text-sm font-sans font-bold tracking-widest text-white/90 hover:text-white transition-colors duration-200 uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* 
        RIGHT SIDE GRAPHIC: 3 Diagonal Pill Frames
        Positioned below header (top-24) to ensure ZERO overlap with navbar links
      */}
      <div className="absolute top-24 right-0 w-full lg:w-[54vw] xl:w-[50vw] h-[calc(100%-6rem)] pointer-events-none z-10 overflow-hidden flex items-start justify-end">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative w-full h-full"
        >
          <svg
            viewBox="0 0 950 700"
            className="w-full h-full object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] overflow-visible"
            preserveAspectRatio="xMaxYMin meet"
          >
            <defs>
              {/* Diagonal Oval Pill 1 (Leftmost slot) */}
              <clipPath id="hero-pill-1">
                <rect x="220" y="-80" width="180" height="660" rx="90" transform="rotate(-42 310 250)" />
              </clipPath>
              
              {/* Diagonal Oval Pill 2 (Middle slot - Extends Lowest Down) */}
              <clipPath id="hero-pill-2">
                <rect x="445" y="-30" width="180" height="730" rx="90" transform="rotate(-42 535 335)" />
              </clipPath>

              {/* Diagonal Oval Pill 3 (Rightmost slot - Ends Higher) */}
              <clipPath id="hero-pill-3">
                <rect x="670" y="30" width="180" height="580" rx="90" transform="rotate(-42 760 320)" />
              </clipPath>
            </defs>

            {/* --- Oval Pill 1 Image & White Outline --- */}
            <g clipPath="url(#hero-pill-1)">
              <image
                href="/heroBgImg/Zystra.png"
                x="100"
                y="-20"
                width="900"
                height="750"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
            <rect
              x="220"
              y="-80"
              width="180"
              height="660"
              rx="90"
              transform="rotate(-42 310 250)"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
            />

            {/* --- Oval Pill 2 Image & White Outline --- */}
            <g clipPath="url(#hero-pill-2)">
              <image
                href="/heroBgImg/Zystra.png"
                x="100"
                y="-20"
                width="900"
                height="750"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
            <rect
              x="445"
              y="-30"
              width="180"
              height="730"
              rx="90"
              transform="rotate(-42 535 335)"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
            />

            {/* --- Oval Pill 3 Image & White Outline --- */}
            <g clipPath="url(#hero-pill-3)">
              <image
                href="/heroBgImg/Zystra.png"
                x="100"
                y="-20"
                width="900"
                height="750"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
            <rect
              x="670"
              y="30"
              width="180"
              height="580"
              rx="90"
              transform="rotate(-42 760 320)"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
            />
          </svg>
        </motion.div>
      </div>

      {/* Main Left Content Body Container */}
      <div className="relative z-20 container mx-auto px-6 sm:px-12 max-w-7xl py-6 my-auto flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start relative z-20 max-w-2xl pt-8 lg:pt-0">
            {/* Top Dot Matrix Pattern Accent */}
            <div className="hidden sm:grid grid-cols-6 gap-2 mb-6 opacity-30">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              ))}
            </div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-sans font-black text-white tracking-tight leading-none mb-6"
            >
              ZYSTRA
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg sm:text-xl lg:text-2xl font-sans font-medium text-white/90 max-w-xl leading-snug mb-10"
            >
              Next Generation AI-Powered Digital Marketing Agency —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-300 to-fuchsia-300 font-bold">
                Built for Brands That Want to Lead
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-sans font-bold text-sm sm:text-base shadow-lg transition-all duration-300 hover:scale-[1.03] flex items-center gap-2"
              >
                <span>Start Your Growth Journey</span>
                <span className="text-lg font-normal">→</span>
              </a>

              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, "#services")}
                className="px-8 py-4 rounded-full bg-white/5 border border-purple-400/30 hover:bg-white/10 hover:border-purple-400/60 text-white font-sans font-bold text-sm sm:text-base backdrop-blur-md transition-all duration-300"
              >
                See Our Work
              </a>
            </motion.div>

            {/* Bottom Dot Matrix Pattern Accent */}
            <div className="grid grid-cols-6 gap-2 mt-12 opacity-25">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Down Animated Indicator */}
      <div className="relative z-20 w-full pb-6 flex justify-end pr-8 sm:pr-16">
        <div 
          className="flex flex-col items-center gap-0.5 text-white/50 animate-bounce cursor-pointer hover:text-white transition-colors"
          onClick={() => window.scrollTo({ top: 650, behavior: "smooth" })}
        >
          <ChevronDown className="w-5 h-5 -mb-2" />
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
