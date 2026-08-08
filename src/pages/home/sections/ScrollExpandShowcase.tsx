import React, {
  useEffect,
  useRef,
  useCallback,
  useState,
} from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Easing
───────────────────────────────────────────────────────────── */
const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));

const smoothstep = (e0: number, e1: number, x: number) => {
  const t = clamp((x - e0) / (e1 - e0 || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};

/* ─────────────────────────────────────────────────────────────
   Frame data
───────────────────────────────────────────────────────────── */
const FRAMES = [
  {
    id: "f1",
    src: "/Home-zoomin/1.webp",
    tag: "01 / DYNAMIC SOCIAL FEED",
    badge: "INSTAGRAM & VISUAL BRANDING",
    headline: "Scroll-Stopping Visual Campaigns",
    description:
      "We design interactive campaigns that stop scroll-fatigued feeds and demand complete consumer attention across all digital platforms.",
    metrics: ["1.4M+ Total Reach", "48% Engagement Rate", "1,204 Active Likes"],
    badgeBg: "bg-purple-500/20 text-purple-200 border-purple-400/30",
    accent: "rgba(168,85,247,0.22)",
  },
  {
    id: "f2",
    src: "/Home-zoomin/2.webp",
    tag: "02 / METRIC-DRIVEN ASSETS",
    badge: "PERFORMANCE MARKETING & ADS",
    headline: "High-Conversion Ad Engine",
    description:
      "Every visual asset and branding detail is engineered to elevate business conversions, maximise ROAS, and multiply revenue ROI.",
    metrics: ["3.8× Avg ROAS", "19.2% Conversion Rate", "482 Reactions"],
    badgeBg: "bg-blue-500/20 text-blue-200 border-blue-400/30",
    accent: "rgba(59,130,246,0.22)",
  },
  {
    id: "f3",
    src: "/Home-zoomin/3.webp",
    tag: "03 / ORGANIC AUDIENCE REACH",
    badge: "B2B & AUTHORITY BUILDING",
    headline: "Authority & Organic Market Scale",
    description:
      "Scale organic metrics with clean, cinematic UX and strategic thought leadership that establishes brand authority across markets.",
    metrics: ["85 C-Suite Leads", "120K Impressions", "100% Organic Reach"],
    badgeBg: "bg-indigo-500/20 text-indigo-200 border-indigo-400/30",
    accent: "rgba(99,102,241,0.22)",
  },
  {
    id: "f4",
    src: "/Home-zoomin/4.webp",
    tag: "04 / AMPLIFIED ENGAGEMENT",
    badge: "AI & REVOPS AUTOMATION",
    headline: "24/7 Intelligent Brand System",
    description:
      "Deploying custom AI automation, real-time analytics, and automated telemetry to compound your brand growth around the clock.",
    metrics: ["24/7 AI Analytics", "12K Reach", "100% Automated Funnels"],
    badgeBg: "bg-fuchsia-500/20 text-fuchsia-200 border-fuchsia-400/30",
    accent: "rgba(217,70,239,0.22)",
  },
];

const TOTAL = FRAMES.length; // 4

/* ─────────────────────────────────────────────────────────────
   AnimatedCard — paints from progressRef every RAF tick
───────────────────────────────────────────────────────────── */
interface CardProps {
  frame: (typeof FRAMES)[number];
  progressRef: React.RefObject<number>;
}

const AnimatedCard = React.memo(({ frame, progressRef }: CardProps) => {
  const wrapRef    = useRef<HTMLDivElement>(null);
  const mediaRef   = useRef<HTMLImageElement>(null);
  const scrimRef   = useRef<HTMLDivElement>(null);
  const titleRef   = useRef<HTMLDivElement>(null);

  const paint = useCallback(() => {
    const p = clamp(progressRef.current ?? 0, 0, 1);
    const e = smoothstep(0, 1, p);

    const startW = 38, startH = 54;
    const w  = startW + (100 - startW) * e;
    const h  = startH + (100 - startH) * e;
    const ix = Math.max(0, (100 - w) / 2);
    const iy = Math.max(0, (100 - h) / 2);
    const r  = 26 * (1 - e);

    if (wrapRef.current)
      wrapRef.current.style.clipPath =
        `inset(${iy}% ${ix}% ${iy}% ${ix}% round ${r}px)`;

    if (mediaRef.current)
      mediaRef.current.style.transform = `scale(${1.28 - 0.28 * e})`;

    if (scrimRef.current)
      scrimRef.current.style.opacity = `${0.35 + 0.25 * e}`;

    if (titleRef.current) {
      titleRef.current.style.transform = `scale(${1 + 0.08 * e})`;
    }
  }, [progressRef]);

  useEffect(() => {
    paint();
  }, [paint, frame]);

  // Paint on custom trigger event when velocity is running
  useEffect(() => {
    const handleUpdate = () => paint();
    window.addEventListener("scroll-expand-tick", handleUpdate);
    return () => window.removeEventListener("scroll-expand-tick", handleUpdate);
  }, [paint]);

  return (
    <div className="absolute inset-0">
      <div
        ref={wrapRef}
        className="absolute inset-0"
        style={{ clipPath: "inset(23% 31% 23% 31% round 26px)", willChange: "clip-path" }}
      >
        <img
          ref={mediaRef}
          src={frame.src}
          alt={frame.tag}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          style={{ transform: "scale(1.28)", transformOrigin: "center", willChange: "transform" }}
          draggable={false}
          loading="eager"
        />
        <div
          ref={scrimRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)",
            opacity: 0.35,
          }}
        />

        {/* Elegant Centered Title Badge */}
        <div
          ref={titleRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 p-4"
          style={{ willChange: "transform" }}
        >
          <div className="bg-black/50 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full shadow-2xl">
            <p className="text-white font-mono font-bold text-xs sm:text-sm md:text-base tracking-widest uppercase text-center drop-shadow-md select-none">
              {frame.tag}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default function ScrollExpandShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const totalProgRef = useRef(0);
  const cardProgRef  = useRef<number>(0);
  const velRef       = useRef(0);
  const animRef      = useRef(false);
  const rafRef       = useRef<number>(0);
  const isVisibleRef = useRef(false);

  const [displayIdx, setDisplayIdx] = useState(0);
  const prevIdxRef = useRef(0);

  /* ── RAF animation tick driven by velocity (Super Smooth & Fast) ── */
  const animTick = useCallback(() => {
    const vel = velRef.current;

    if (Math.abs(vel) < 0.0001) {
      velRef.current = 0;
      animRef.current = false;
      return;
    }

    velRef.current = vel * 0.82;

    const next = clamp(totalProgRef.current + vel, 0, TOTAL);
    totalProgRef.current = next;

    // Derive card index and per-card progress
    const cardIdx  = Math.min(Math.floor(next), TOTAL - 1);
    const cardProg = next - Math.floor(next);

    cardProgRef.current = next >= TOTAL ? 1 : cardProg;

    if (cardIdx !== prevIdxRef.current) {
      prevIdxRef.current = cardIdx;
      setDisplayIdx(cardIdx);
    }

    // Trigger painted update to active card
    window.dispatchEvent(new CustomEvent("scroll-expand-tick"));

    rafRef.current = requestAnimationFrame(animTick);
  }, []);

  const stageRef = useRef<HTMLDivElement>(null);
  const isLockedRef = useRef(false);
  const bypassLockRef = useRef(false);

  const lockScroll = useCallback(() => {
    const isTouch = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    if (isTouch || isLockedRef.current || bypassLockRef.current) return;
    isLockedRef.current = true;
    document.body.style.overflow = "hidden";
    if (typeof window !== "undefined" && (window as any).lenis) {
      (window as any).lenis.stop();
    }
  }, []);

  const unlockScroll = useCallback(() => {
    if (!isLockedRef.current) return;
    isLockedRef.current = false;
    document.body.style.overflow = "";
    if (typeof window !== "undefined" && (window as any).lenis) {
      (window as any).lenis.start();
    }
  }, []);

  /* Global bypass listener for Back to Top / Navigation */
  useEffect(() => {
    const handleBypass = () => {
      bypassLockRef.current = true;
      unlockScroll();
      totalProgRef.current = 0;
      cardProgRef.current = 0;
      setDisplayIdx(0);
      setTimeout(() => {
        bypassLockRef.current = false;
      }, 2000);
    };

    window.addEventListener("bypass-scroll-lock", handleBypass);
    return () => window.removeEventListener("bypass-scroll-lock", handleBypass);
  }, [unlockScroll]);

  /* Cleanup lock on unmount */
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.start();
      }
    };
  }, []);

  /* Visibility Observer to pause RAF when offscreen */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
          if (!entry.isIntersecting) {
            velRef.current = 0;
            animRef.current = false;
            cancelAnimationFrame(rafRef.current);
            unlockScroll();
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [unlockScroll]);

  /* Continuous position watcher to freeze scroll momentum the INSTANT section enters top:0 (Desktop wheel only) */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const isTouch = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    if (isTouch) return; // Never lock body on mobile touch devices

    const checkPosition = () => {
      if (bypassLockRef.current || !isVisibleRef.current) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = totalProgRef.current;

      // Scrolling DOWN: section touches top:0 and cards aren't finished yet -> LOCK IMMEDIATELY
      if (rect.top <= 10 && rect.bottom >= vh - 10 && total < TOTAL && !isLockedRef.current) {
        if (Math.abs(rect.top) > 2) {
          window.scrollTo(0, window.scrollY + rect.top);
        }
        lockScroll();
      }

      // Scrolling UP: section enters from bottom and cards aren't reversed yet -> LOCK IMMEDIATELY
      if (rect.bottom >= vh - 10 && rect.top <= 10 && total > 0 && !isLockedRef.current) {
        if (Math.abs(rect.top) > 2) {
          window.scrollTo(0, window.scrollY + rect.top);
        }
        lockScroll();
      }
    };

    window.addEventListener("scroll", checkPosition, { passive: true });
    return () => window.removeEventListener("scroll", checkPosition);
  }, [lockScroll]);

  /* ── Wheel & Touch interceptor (Desktop Wheel + Mobile Touch Swipes) ── */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const onWheel = (e: WheelEvent) => {
      const stageRect = stage.getBoundingClientRect();
      const vh = window.innerHeight;
      const going = e.deltaY > 0 ? 1 : -1;
      const total = totalProgRef.current;

      // Check if section is entering viewport zone
      const isEnteringFromTop = going > 0 && stageRect.top <= 150 && stageRect.bottom >= 120 && total < TOTAL;
      const isEnteringFromBottom = going < 0 && stageRect.bottom >= vh - 120 && stageRect.top <= 120 && total > 0;

      // Release condition: finished cards going down or finished reversing going up
      if ((going > 0 && total >= TOTAL) || (going < 0 && total <= 0)) {
        unlockScroll();
        return;
      }

      if (!isEnteringFromTop && !isEnteringFromBottom && !isLockedRef.current) {
        return;
      }

      // Lock wheel event
      e.preventDefault();
      e.stopPropagation();

      if (!isLockedRef.current) {
        if (Math.abs(stageRect.top) > 2) {
          window.scrollTo(0, window.scrollY + stageRect.top);
        }
        lockScroll();
      }

      const clampedDeltaY = Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), 60);
      const delta = (clampedDeltaY / 100) * 0.04;
      velRef.current = clamp(velRef.current + delta, -0.075, 0.075);

      if (!animRef.current) {
        animRef.current = true;
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(animTick);
      }
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY - currentY;
      touchStartY = currentY;

      const total = totalProgRef.current;
      const goingDown = deltaY > 0;

      if ((goingDown && total < TOTAL) || (!goingDown && total > 0)) {
        const delta = (deltaY / window.innerHeight) * 1.5;
        velRef.current = clamp(velRef.current + delta, -0.08, 0.08);

        if (!animRef.current) {
          animRef.current = true;
          cancelAnimationFrame(rafRef.current);
          rafRef.current = requestAnimationFrame(animTick);
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false, capture: true });
    stage.addEventListener("touchstart", onTouchStart, { passive: true });
    stage.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel, { capture: true });
      stage.removeEventListener("touchstart", onTouchStart);
      stage.removeEventListener("touchmove", onTouchMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animTick, lockScroll, unlockScroll]);

  /* Reset totalProgress state when section scrolls completely out of viewport */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top > vh) {
        totalProgRef.current = 0;
        cardProgRef.current  = 0;
        unlockScroll();
        if (prevIdxRef.current !== 0) {
          prevIdxRef.current = 0;
          setDisplayIdx(0);
        }
      } else if (rect.bottom < 0) {
        totalProgRef.current = TOTAL;
        cardProgRef.current  = 1;
        unlockScroll();
        if (prevIdxRef.current !== TOTAL - 1) {
          prevIdxRef.current = TOTAL - 1;
          setDisplayIdx(TOTAL - 1);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [unlockScroll]);

  const currentFrame = FRAMES[displayIdx];

  return (
    <section
      ref={sectionRef}
      id="scroll-expand-showcase"
      className="relative bg-slate-950 text-white w-full h-screen overflow-hidden"
    >
      {/* ── 100vh animation stage ── */}
      <div
        ref={stageRef}
        className="relative w-full h-full overflow-hidden bg-black"
      >
        {/* ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-[background] duration-700"
          style={{
            background: `radial-gradient(ellipse 62% 58% at 50% 50%, ${currentFrame.accent}, transparent 68%)`,
          }}
        />

        {/* step dots */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {FRAMES.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === displayIdx ? "w-8 bg-white" : "w-4 bg-white/25"
              }`}
            />
          ))}
        </div>

        {/* animated card */}
        <AnimatedCard
          key={currentFrame.id}
          frame={currentFrame}
          progressRef={cardProgRef as React.RefObject<number>}
        />

      </div>
    </section>
  );
}
