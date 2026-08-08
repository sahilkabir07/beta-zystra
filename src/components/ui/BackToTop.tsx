import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 350);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    // 1. Dispatch global bypass event to unlock any showcase scroll locks
    window.dispatchEvent(new CustomEvent("bypass-scroll-lock"));
    document.body.style.overflow = "";

    // 2. Smoothly scroll to the top of the page
    try {
      if ((window as any).lenis) {
        (window as any).lenis.start();
        (window as any).lenis.scrollTo(0, { duration: 1, immediate: false });
      }
    } catch (err) {
      console.log("Lenis scroll error", err);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[1000] select-none pointer-events-auto"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.12, y: -3 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Back to Top"
            className="group relative w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#6e019c] via-[#5b0182] to-[#3b0057] p-0.5 border-2 border-purple-400/50 shadow-[0_8px_25px_rgba(110,1,156,0.5)] flex items-center justify-center cursor-pointer overflow-hidden transform-gpu pointer-events-auto"
          >
            {/* Ambient Pulsing Glow Background */}
            <div className="absolute inset-0 bg-purple-500/30 blur-md group-hover:bg-purple-500/60 transition-colors duration-300 scale-120" />

            {/* Rotating Dashed Outer Accent (GPU CSS) */}
            <svg
              style={{ animation: "spin 16s linear infinite" }}
              className="absolute inset-0 w-full h-full p-1 pointer-events-none opacity-40"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="46" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="6 6" />
            </svg>

            {/* Arrow Icon */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.8] group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
