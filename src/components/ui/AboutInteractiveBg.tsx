import React, { useEffect, useRef } from "react";

interface AboutInteractiveBgProps {
  className?: string;
  particleCount?: number;
}

export default function AboutInteractiveBg({ className = "" }: AboutInteractiveBgProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768 || ("ontouchstart" in window && navigator.maxTouchPoints > 0);
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // Pause animation loop when offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animationFrameId) {
            animationFrameId = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Sleek Pointer History Array
    interface PointerPoint {
      x: number;
      y: number;
      age: number;
      maxAge: number;
    }

    // Micro Fiber Sparkle
    interface Stardust {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      size: number;
    }

    const path: PointerPoint[] = [];
    const particles: Stardust[] = [];
    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouse.x = x;
        mouse.y = y;
        mouse.active = true;

        // Push pointer coordinate
        path.push({
          x,
          y,
          age: 0,
          maxAge: 26, // ~420ms sleek decay
        });

        // Add 1 subtle stardust mote
        if (Math.random() > 0.4) {
          particles.push({
            x: x + (Math.random() - 0.5) * 8,
            y: y + (Math.random() - 0.5) * 8,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            alpha: 0.8,
            size: Math.random() * 1.5 + 0.8,
          });
        }

        if (!animationFrameId && isVisible) {
          animationFrameId = requestAnimationFrame(render);
        }
      } else {
        mouse.active = false;
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    // Render Loop (Runs ONLY when active path or particles exist)
    const render = () => {
      if (!isVisible) {
        animationFrameId = 0;
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ── 1. Render Ultra-Stylish Smooth Liquid Fiber Ribbon Trace ──
      if (path.length > 2) {
        ctx.save();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        // Pass A: Soft Ambient Outer Haze
        for (let i = 1; i < path.length - 1; i++) {
          const pt = path[i];
          const nextPt = path[i + 1];
          pt.age++;

          const life = 1 - pt.age / pt.maxAge;
          if (life <= 0) continue;

          const xc = (pt.x + nextPt.x) / 2;
          const yc = (pt.y + nextPt.y) / 2;

          ctx.beginPath();
          ctx.moveTo(pt.x, pt.y);
          ctx.quadraticCurveTo(pt.x, pt.y, xc, yc);

          ctx.strokeStyle = `rgba(168, 85, 247, ${life * 0.25})`;
          ctx.lineWidth = life * 12 + 1;
          ctx.stroke();
        }

        // Pass B: Razor-Sharp Brilliant Light Core Line
        for (let i = 1; i < path.length - 1; i++) {
          const pt = path[i];
          const nextPt = path[i + 1];

          const life = 1 - pt.age / pt.maxAge;
          if (life <= 0) continue;

          const xc = (pt.x + nextPt.x) / 2;
          const yc = (pt.y + nextPt.y) / 2;

          ctx.beginPath();
          ctx.moveTo(pt.x, pt.y);
          ctx.quadraticCurveTo(pt.x, pt.y, xc, yc);

          ctx.strokeStyle = `rgba(235, 220, 255, ${life * 0.9})`;
          ctx.lineWidth = life * 2.5 + 0.5;
          ctx.stroke();
        }

        ctx.restore();
      }

      // Age points and remove dead path segments
      for (let i = path.length - 1; i >= 0; i--) {
        if (path[i].age >= path[i].maxAge) {
          path.splice(i, 1);
        }
      }

      // ── 2. Render Elegant Micro Stardust Sparks ──
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.04;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `rgba(192, 132, 252, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── 3. Render Subtle Stylish HUD Ring Accent on Cursor Hover ──
      if (mouse.active && path.length > 0) {
        const head = path[path.length - 1];
        ctx.save();
        ctx.strokeStyle = "rgba(192, 132, 252, 0.4)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(head.x, head.y, 8, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.beginPath();
        ctx.arc(head.x, head.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Pause RAF if no active paths/particles exist
      if (path.length === 0 && particles.length === 0 && !mouse.active) {
        animationFrameId = 0;
        return;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  );
}
