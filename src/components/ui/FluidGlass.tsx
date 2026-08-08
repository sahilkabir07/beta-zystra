import React, { useRef, useState, useEffect } from "react";
import { useSpring, useMotionValue } from "framer-motion";

interface FluidGlassProps {
  mode?: "lens" | "bar" | "cube";
  lensProps?: Record<string, any>;
  barProps?: Record<string, any>;
  cubeProps?: Record<string, any>;
  className?: string;
  children?: React.ReactNode;
}

export default function FluidGlass({
  className = "",
  children
}: FluidGlassProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const lastClientPos = useRef<{ x: number; y: number } | null>(null);

  // Lightning-Fast & Ultra-Smooth Featherweight Physics (600 stiffness, 0.05 mass)
  const fastSpring = { damping: 30, stiffness: 600, mass: 0.05 };

  // Pointer Motion Values (0 to 1 normalized)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothMouseX = useSpring(mouseX, fastSpring);
  const smoothMouseY = useSpring(mouseY, fastSpring);

  const [targetPos, setTargetPos] = useState({ xPct: 50, yPct: 50 });

  // Update bounds with ResizeObserver to handle image loading and dynamic layout shifts
  useEffect(() => {
    if (!containerRef.current) return;

    const updateBounds = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setDimensions({ width: rect.width, height: rect.height });
        }
      }
    };

    updateBounds();

    const resizeObserver = new ResizeObserver(() => {
      updateBounds();
    });
    resizeObserver.observe(containerRef.current);

    window.addEventListener("resize", updateBounds);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateBounds);
    };
  }, []);

  const updatePointerPosition = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));

    mouseX.set(x);
    mouseY.set(y);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    lastClientPos.current = { x: e.clientX, y: e.clientY };
    setIsHovered(true);
    updatePointerPosition(e.clientX, e.clientY);
  };

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    lastClientPos.current = { x: e.clientX, y: e.clientY };
    setIsHovered(true);
    updatePointerPosition(e.clientX, e.clientY);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
  };

  // Zero-Latency RAF Sync Loop
  useEffect(() => {
    const isMobile = typeof window !== "undefined" && (window.innerWidth < 768 || ("ontouchstart" in window && navigator.maxTouchPoints > 0));
    if (isMobile) return;

    let rafId: number;

    const syncLoop = () => {
      // Re-evaluate pointer position if page scrolled while pointer is resting inside container
      if (lastClientPos.current && isHovered) {
        updatePointerPosition(lastClientPos.current.x, lastClientPos.current.y);
      }

      const xVal = smoothMouseX.get();
      const yVal = smoothMouseY.get();

      const clampX = Math.max(2, Math.min(98, xVal * 100));
      const clampY = Math.max(2, Math.min(98, yVal * 100));

      setTargetPos({ xPct: clampX, yPct: clampY });
      if (isHovered) {
        rafId = requestAnimationFrame(syncLoop);
      }
    };

    if (isHovered) {
      rafId = requestAnimationFrame(syncLoop);
    }
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [smoothMouseX, smoothMouseY, isHovered]);

  const LENS_SIZE = 280; // Lens diameter in px

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={`relative w-full overflow-hidden ${className}`}
    >
      {/* Base Content Layer */}
      <div className="relative z-0 w-full">{children}</div>

      {/* SVG Liquid Refraction Distortion Defs */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="fluid-glass-instant-refraction" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015 0.02"
              numOctaves="2"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="8s"
                values="0.015 0.02;0.025 0.015;0.015 0.02"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="18"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* LIGHTNING-FAST & BUTTERY-SMOOTH MAGNIFYING LENS */}
      {dimensions.width > 0 && dimensions.height > 0 && (
        <div
          style={{
            left: `${targetPos.xPct}%`,
            top: `${targetPos.yPct}%`,
            width: `${LENS_SIZE}px`,
            height: `${LENS_SIZE}px`,
            transform: "translate3d(-50%, -50%, 0)",
            opacity: isHovered ? 1 : 0.85,
            transition: "opacity 0.3s ease",
            willChange: "left, top, transform, opacity",
          }}
          className="pointer-events-none absolute z-30 rounded-full overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5),inset_0_0_25px_rgba(255,255,255,0.4),0_0_2px_1px_rgba(255,255,255,0.6)] border-2 border-white/40 backdrop-blur-[2px] hidden md:block transform-gpu"
        >
          {/* Pixel-Accurate Zoomed Content Projection */}
          <div
            className="absolute top-0 left-0 pointer-events-none select-none"
            style={{
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              left: `${LENS_SIZE / 2 - (targetPos.xPct / 100) * dimensions.width}px`,
              top: `${LENS_SIZE / 2 - (targetPos.yPct / 100) * dimensions.height}px`,
              transform: `scale(1.35)`,
              transformOrigin: `${targetPos.xPct}% ${targetPos.yPct}%`,
              filter: "url(#fluid-glass-instant-refraction)",
              willChange: "left, top, transform",
            }}
          >
            {children}
          </div>

          {/* Transparent Glass Specular Flare Overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 via-transparent to-cyan-300/25 mix-blend-overlay pointer-events-none" />

          {/* Glass Bevel Outer Rim */}
          <div className="absolute inset-0 rounded-full border border-purple-300/30 blur-[0.5px] pointer-events-none" />
        </div>
      )}
    </div>
  );
}

