import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Innovation", href: "#showcase" },
    { label: "Why Zystra", href: "#why-choose" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none w-full flex justify-center">
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 200, damping: 24 }}
          className={`flex items-center justify-between pointer-events-auto w-full ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl border-x border-b border-slate-200/60 shadow-lg shadow-brand-vibrant/5 rounded-b-2xl px-8 py-3 max-w-4xl"
              : "bg-transparent py-6 border-b border-transparent px-6 md:px-12 w-full max-w-7xl"
          }`}
        >
          <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
            <img src="/zystra-logo.jpg" alt="Zystra Logo" className="h-8 w-auto rounded shadow-sm border border-slate-100" />
          </Link>

          {/* Desktop Nav Items */}
          <nav
            className="hidden md:flex items-center gap-1 bg-slate-50/60 backdrop-blur-xs border border-slate-100 rounded-full p-1"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                  hoveredIndex === idx ? "text-brand-vibrant" : "text-slate-650 hover:text-slate-900"
                }`}
                onMouseEnter={() => setHoveredIndex(idx)}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {hoveredIndex === idx && (
                  <motion.span
                    layoutId="navHover"
                    className="absolute inset-0 bg-white shadow-xs rounded-full -z-10 border border-slate-100"
                    transition={{ type: "spring", stiffness: 180, damping: 20 }}
                  />
                )}
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="#contact">
              <Button
                className="hidden sm:inline-flex rounded-full bg-slate-900 hover:bg-slate-800 text-white px-6 shadow-md transition-all hover:scale-105"
                data-testid="button-start-project"
              >
                Get Free Audit
              </Button>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none bg-white border border-slate-200 rounded-full"
              aria-label="Toggle Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </motion.div>
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
                  {navItems.map((item, idx) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xl font-semibold text-slate-950 hover:text-brand-vibrant transition-colors border-b border-slate-50 pb-2 flex justify-between items-center"
                    >
                      {item.label}
                      <ChevronRight className="w-4 h-4 text-slate-350" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              <div className="mt-8">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full rounded-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-base shadow-md">
                    Get Free Audit
                  </Button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
