import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ChevronRight, ChevronDown, X, ArrowRight, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = location === "/";
  const [islandExpanded, setIslandExpanded] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const navItems = [
    { label: "Home", href: isHomePage ? "#" : "/", isLink: !isHomePage },
    { label: "About", href: "/about", isLink: true },
    { label: "Services", href: "/services", isLink: true },
    { label: "Portfolio", href: "/portfolio", isLink: true },
    { label: "Innovation", href: "/innovation", isLink: true },
    { label: "Contact", href: "/contact", isLink: true }
  ];

  const getActiveItem = () => {
    if (location === "/about") return navItems[1];
    if (location === "/services") return navItems[2];
    if (location === "/portfolio") return navItems[3];
    if (location === "/innovation") return navItems[4];
    if (location === "/contact") return navItems[5];
    return navItems[0];
  };

  const activeItem = getActiveItem();

  const isCompact = scrolled && !islandExpanded;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none w-full flex justify-center py-3 sm:py-4 px-4">
        <div
          onMouseEnter={() => scrolled && setIslandExpanded(true)}
          onMouseLeave={() => scrolled && setIslandExpanded(false)}
          onClick={() => scrolled && !islandExpanded && setIslandExpanded(true)}
          className={`pointer-events-auto flex items-center justify-between border backdrop-blur-2xl transform-gpu transition-[max-width,padding,gap,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isCompact
              ? "bg-[#09031a]/95 border-white/20 shadow-xl rounded-full px-5 py-2 gap-3 max-w-[245px] mx-auto cursor-pointer hover:border-purple-400/60"
              : scrolled
              ? "bg-[#09031a]/95 border-white/15 shadow-xl rounded-full px-6 py-2.5 max-w-4xl w-full justify-between gap-6"
              : "bg-[#09031a]/40 border-white/10 shadow-lg hover:bg-[#09031a]/60 hover:border-white/20 rounded-full px-7 py-3.5 max-w-7xl w-full justify-between gap-6"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <Link href="/" className="flex items-center gap-2.5 shrink-0" data-testid="link-logo">
              <img src="/zystra-logo.jpg" alt="Zystra Logo" className="h-7 sm:h-8 w-auto rounded border border-white/15" />
              <span
                className={`font-serif font-bold text-lg tracking-tight whitespace-nowrap text-white overflow-hidden transform-gpu transition-[max-width,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isCompact ? "max-w-0 opacity-0" : "max-w-[120px] opacity-100"
                }`}
              >
                ZYSTRA<span className="text-purple-400">.</span>
              </span>
            </Link>
          </div>

          {/* DYNAMIC ISLAND COMPACT BADGE (Shown ONLY when scrolled & not hovered) */}
          <div
            className={`overflow-hidden whitespace-nowrap flex items-center shrink-0 transform-gpu transition-[max-width,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isCompact ? "max-w-[190px] opacity-100" : "max-w-0 opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-bold text-white tracking-wide font-sans px-1">
              <span className="text-purple-300 font-mono">✦</span>
              <span className="uppercase tracking-wider">{activeItem.label}</span>
              <ChevronDown className="w-3.5 h-3.5 text-purple-400 ml-1 opacity-70" />
            </div>
          </div>

          {/* FULL NAVIGATION ITEMS (Shown when top OR hovered while scrolled) */}
          <nav
            className={`hidden md:flex items-center gap-1.5 p-1 rounded-full bg-slate-950/60 border border-white/15 backdrop-blur-md shadow-md overflow-hidden whitespace-nowrap transform-gpu transition-[max-width,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isCompact ? "max-w-0 opacity-0 pointer-events-none border-0 p-0" : "max-w-[600px] opacity-100"
            }`}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navItems.map((item, idx) => {
              const isActive =
                (item.label === "Services" && location === "/services") ||
                (item.label === "Innovation" && location === "/innovation") ||
                (item.label === "Portfolio" && location === "/portfolio") ||
                (item.label === "About" && location === "/about") ||
                (item.label === "Contact" && location === "/contact") ||
                (item.label === "Home" && location === "/");

              return (
                <div key={item.label} className="relative flex items-center shrink-0">
                  <Link
                    href={item.href}
                    className={`relative px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 rounded-full flex items-center gap-1.5 ${
                      isActive
                        ? "text-white font-bold bg-[#6e019c] border border-purple-400/40"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    }`}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    data-testid={`link-nav-${item.label.toLowerCase()}`}
                  >
                    <span>{item.label}</span>
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* CTA & Mobile Trigger */}
          <div
            className={`overflow-hidden whitespace-nowrap hidden sm:flex items-center gap-3 shrink-0 transform-gpu transition-[max-width,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isCompact ? "max-w-0 opacity-0 pointer-events-none" : "max-w-[160px] opacity-100"
            }`}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold text-xs shadow-md transition-all hover:scale-105"
            >
              <span>Get Started</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Interactive Morphing Hamburger Trigger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={(e) => { e.stopPropagation(); setMobileMenuOpen(!mobileMenuOpen); }}
              className="relative w-10 h-10 rounded-full bg-[#120b2e]/90 hover:bg-[#6e019c]/40 border border-purple-500/40 shadow-[0_0_20px_rgba(110,1,156,0.35)] text-white transition-all duration-200 active:scale-90 flex items-center justify-center cursor-pointer group"
              aria-label="Toggle Menu"
            >
              <div className="relative w-4.5 h-3.5 flex flex-col justify-between items-center transform-gpu">
                <span className={`w-4.5 h-0.5 bg-white rounded-full transition-all duration-300 transform-gpu ${mobileMenuOpen ? "rotate-45 translate-y-[6px] bg-purple-300" : ""}`} />
                <span className={`w-3.5 h-0.5 bg-purple-300 rounded-full transition-all duration-200 self-end ${mobileMenuOpen ? "opacity-0 translate-x-2" : "group-hover:w-4.5"}`} />
                <span className={`w-4.5 h-0.5 bg-white rounded-full transition-all duration-300 transform-gpu ${mobileMenuOpen ? "-rotate-45 -translate-y-[6px] bg-purple-300" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Super Smooth & Fast Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-xl z-50 flex justify-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 420, mass: 0.7 }}
              className="w-full max-w-[340px] sm:max-w-sm bg-[#09031a]/95 border-l border-purple-500/25 h-full shadow-[0_0_60px_rgba(0,0,0,0.9)] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden select-none backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background ambient glow inside sidebar */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileMenuOpen(false)}>
                    <img src="/zystra-logo.jpg" alt="Zystra Logo" className="h-8 w-auto rounded border border-purple-400/30" />
                    <span className="text-xl font-bold tracking-tight text-white font-serif">
                      ZYSTRA<span className="text-purple-400">.</span>
                    </span>
                  </Link>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-8.5 h-8.5 rounded-full bg-white/10 hover:bg-purple-600/40 border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-all active:scale-90 cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-2.5">
                  {navItems.map((item, idx) => {
                    const isActive =
                      (item.label === "Services" && location === "/services") ||
                      (item.label === "Innovation" && location === "/innovation") ||
                      (item.label === "Portfolio" && location === "/portfolio") ||
                      (item.label === "About" && location === "/about") ||
                      (item.label === "Contact" && location === "/contact") ||
                      (item.label === "Home" && location === "/");

                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.025 + 0.04, duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`relative group flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-150 active:scale-[0.98] ${
                            isActive
                              ? "bg-gradient-to-r from-purple-600/90 to-violet-600/90 text-white font-bold border border-purple-400/40 shadow-[0_4px_25px_rgba(110,1,156,0.5)]"
                              : "text-slate-200 hover:text-white hover:bg-white/10 border border-transparent"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`text-[11px] font-mono font-bold ${isActive ? "text-purple-200" : "text-purple-400/60 group-hover:text-purple-300"}`}>
                              0{idx + 1}
                            </span>
                            <span className="text-base font-bold tracking-wide font-sans">{item.label}</span>
                          </div>
                          <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isActive ? "text-white" : "text-white/40"}`} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Quick Contact & CTA Footer */}
              <div className="relative z-10 pt-5 border-t border-white/10 flex flex-col gap-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 text-white font-bold text-sm tracking-wide text-center shadow-[0_0_25px_rgba(110,1,196,0.5)] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center justify-between px-1 text-[11px] font-mono text-purple-300/80">
                  <a href="mailto:info@zystra.in" className="hover:text-white transition-colors">info@zystra.in</a>
                  <a href="tel:+916200048924" className="hover:text-white transition-colors">+91 62000 48924</a>
                </div>

                <div className="flex items-center justify-center gap-5 pt-1 text-white/50 border-t border-white/5">
                  <a href="https://www.instagram.com/zystra_web_tech/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors p-1">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/company/zystra-webtech/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors p-1">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://twitter.com/Zystra_Web_Tech" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors p-1">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61571699426971" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors p-1">
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
