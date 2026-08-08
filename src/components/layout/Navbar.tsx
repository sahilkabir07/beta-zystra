import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ChevronRight, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

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

          <div className="flex items-center md:hidden">
            <button
              onClick={(e) => { e.stopPropagation(); setMobileMenuOpen(true); }}
              className="p-2 focus:outline-none rounded-full bg-slate-900 text-white hover:bg-[#6e019c] border border-purple-500/30 shadow-md transition-all duration-200 active:scale-95 flex items-center justify-center cursor-pointer"
              aria-label="Toggle Menu"
            >
              <Menu className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-50 flex justify-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <img src="/zystra-logo.jpg" alt="Zystra Logo" className="h-8 w-auto rounded" />
                    <span className="text-xl font-bold tracking-tight text-slate-900 font-serif">
                      ZYSTRA<span className="text-brand-medium">.</span>
                    </span>
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-slate-500 hover:text-slate-900 border border-slate-100 rounded-full"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <nav className="flex flex-col gap-5">
                  {navItems.map((item, idx) => {
                     const isActive = 
                       (item.label === "Services" && location === "/services") || 
                       (item.label === "Innovation" && location === "/innovation") || 
                       (item.label === "Portfolio" && location === "/portfolio") || 
                       (item.label === "About" && location === "/about") || 
                       (item.label === "Contact" && location === "/contact") || 
                       (item.label === "Home" && location === "/");
                    const linkClasses = `text-xl font-semibold transition-colors border-b border-slate-50 pb-2 flex justify-between items-center ${
                      isActive ? "text-brand-vibrant" : "text-slate-950 hover:text-brand-vibrant"
                    }`;

                    if (item.isLink) {
                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={linkClasses}
                          >
                            {item.label}
                            <ChevronRight className="w-4 h-4 text-slate-350" />
                          </Link>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.a
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={linkClasses}
                      >
                        {item.label}
                        <ChevronRight className="w-4 h-4 text-slate-350" />
                      </motion.a>
                    );
                  })}
                </nav>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
