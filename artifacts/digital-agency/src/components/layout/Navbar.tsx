import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = location === "/";
  const [visible, setVisible] = useState(!isHomePage);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (location === "/") {
        setVisible(window.scrollY > 500);
      } else {
        setVisible(true);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
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

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            className="fixed top-0 left-0 right-0 z-50 pointer-events-none w-full flex justify-center"
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
              className={`flex items-center justify-between pointer-events-auto w-full ${
                scrolled
                  ? "bg-white/95 backdrop-blur-xl border-x border-b border-slate-200/60 shadow-lg shadow-brand-vibrant/5 rounded-b-2xl px-8 py-3 max-w-4xl"
                  : "bg-transparent py-6 border-b border-transparent px-6 md:px-12 w-full max-w-7xl"
              }`}
              data-scrolled={scrolled}
            >
              <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
                <img src="/zystra-logo.jpg" alt="Zystra Logo" className="h-8 w-auto rounded shadow-sm border border-slate-100" />
              </Link>

              {/* Desktop Nav Items */}
              <nav
                className={`hidden md:flex items-center gap-1 backdrop-blur-md rounded-full p-1.5 shadow-lg ${
                  (!scrolled && (location === "/about" || location === "/innovation" || location === "/"))
                    ? "bg-slate-950/80 border border-white/20 text-white"
                    : scrolled
                    ? "bg-white/95 border border-slate-200/80 text-slate-800"
                    : "bg-slate-900/80 border border-white/20 text-white"
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

                  const isDarkBg = !scrolled && (location === "/about" || location === "/innovation" || location === "/");

                  const linkClasses = `relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-full ${
                    isActive
                      ? isDarkBg
                        ? "text-white font-bold bg-purple-600/90 shadow-sm"
                        : scrolled
                        ? "text-purple-700 font-bold bg-purple-100/90 shadow-2xs"
                        : "text-white font-bold bg-purple-600/90 shadow-sm"
                      : isDarkBg
                      ? "text-slate-200 hover:text-white hover:bg-white/10"
                      : scrolled
                      ? "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`;

                  if (item.isLink) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={linkClasses}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        data-testid={`link-nav-${item.label.toLowerCase()}`}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className={linkClasses}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      data-testid={`link-nav-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              <div className="flex items-center gap-4">
                {isHomePage ? (
                  <a href="#contact">
                    <Button
                      className={`hidden sm:inline-flex rounded-full px-6 shadow-md transition-all hover:scale-105 ${
                        scrolled
                          ? "bg-slate-900 hover:bg-slate-800 text-white"
                          : "bg-white/15 hover:bg-white/25 text-white border border-white/30"
                      }`}
                      data-testid="button-start-project"
                    >
                      Get Free Audit
                    </Button>
                  </a>
                ) : (
                  <Link href="/#contact">
                    <Button
                      className="hidden sm:inline-flex rounded-full bg-slate-900 hover:bg-slate-800 text-white px-6 shadow-md transition-all hover:scale-105"
                      data-testid="button-start-project"
                    >
                      Get Free Audit
                    </Button>
                  </Link>
                )}

                {/* Mobile menu trigger */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className={`md:hidden p-2 focus:outline-none rounded-full ${
                    (scrolled || !isHomePage)
                      ? "text-slate-700 hover:text-slate-900 bg-white border border-slate-200"
                      : "text-white hover:text-white/80 bg-white/15 border border-white/25"
                  }`}
                  aria-label="Toggle Menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.header>
        )}
      </AnimatePresence>

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

              <div className="mt-8">
                {isHomePage ? (
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full rounded-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-base shadow-md">
                      Get Free Audit
                    </Button>
                  </a>
                ) : (
                  <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full rounded-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-base shadow-md">
                      Get Free Audit
                    </Button>
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
