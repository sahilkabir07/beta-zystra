import React, { useEffect, useRef } from "react";

interface AntigravityCanvasProps {
  className?: string;
  dotColor?: string;
  accentColor?: string;
  glowColor?: string;
  gridSpacing?: number;
  interactiveRadius?: number;
  showConnections?: boolean;
}

export default function AntigravityCanvas({
  className = "",
  dotColor = "rgba(168, 85, 247, 0.4)",
  accentColor = "rgba(192, 132, 252, 0.75)",
  gridSpacing = 28,
  interactiveRadius = 240,
}: AntigravityCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let parent = canvas.parentElement;
    let width = (canvas.width = parent?.offsetWidth || window.innerWidth);
    let height = (canvas.height = parent?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initGrid();
    };
    window.addEventListener("resize", handleResize);

    // Track mouse position relative to parent container
    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      if (mouseX >= 0 && mouseX <= rect.width && mouseY >= 0 && mouseY <= rect.height) {
        mouse.x = mouseX;
        mouse.y = mouseY;
        mouse.active = true;
      } else {
        mouse.active = false;
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    // Particle Grid Structure
    interface Dot {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
      radius: number;
      color: string;
      symbol: string | null;
    }

    let grid: Dot[] = [];

    const initGrid = () => {
      grid = [];
      const cols = Math.ceil(width / gridSpacing) + 1;
      const rows = Math.ceil(height / gridSpacing) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const baseX = c * gridSpacing + ((r % 2) * (gridSpacing / 2));
          const baseY = r * gridSpacing;

          let symbol: string | null = null;
          const rand = Math.random();
          if (rand > 0.95) symbol = "✦";
          else if (rand > 0.83) symbol = "+";

          grid.push({
            baseX,
            baseY,
            x: baseX,
            y: baseY,
            radius: symbol ? 2.5 : (Math.random() > 0.6 ? 2.2 : 1.3),
            color: Math.random() > 0.5 ? dotColor : accentColor,
            symbol,
          });
        }
      }
    };

    initGrid();

    const startTime = performance.now();

    // 120 FPS Fluid Animation Loop
    const render = (now: number) => {
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < grid.length; i++) {
        const dot = grid[i];

        // 1. Organic Antigravity Wave Drift
        const waveY = Math.sin(elapsed * 0.0016 + dot.baseX * 0.009 + dot.baseY * 0.009) * 6;
        const waveX = Math.cos(elapsed * 0.0014 + dot.baseX * 0.007 - dot.baseY * 0.007) * 5;

        let targetX = dot.baseX + waveX;
        let targetY = dot.baseY + waveY;

        // 2. Antigravity Fluid Displacement on Cursor Hover (No neon glow overlay)
        if (mouse.active) {
          const dx = mouse.x - dot.baseX;
          const dy = mouse.y - dot.baseY;
          const dist = Math.hypot(dx, dy);

          if (dist < interactiveRadius) {
            const force = (1 - dist / interactiveRadius);
            const ripple = Math.sin(dist * 0.025 - elapsed * 0.004) * force * 65;
            const angle = Math.atan2(dy, dx);

            targetX -= Math.cos(angle) * (ripple + force * 20);
            targetY -= Math.sin(angle) * (ripple + force * 20);
          }
        }

        // Smooth Lerp Physics Interpolation
        dot.x += (targetX - dot.x) * 0.07;
        dot.y += (targetY - dot.y) * 0.07;

        // Render Particle
        if (dot.symbol === "✦") {
          ctx.fillStyle = accentColor;
          ctx.font = "bold 10px sans-serif";
          ctx.fillText("✦", dot.x - 4, dot.y + 4);
        } else if (dot.symbol === "+") {
          ctx.fillStyle = accentColor;
          ctx.font = "bold 11px monospace";
          ctx.fillText("+", dot.x - 3, dot.y + 3.5);
        } else {
          ctx.fillStyle = dot.color;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotColor, accentColor, gridSpacing, interactiveRadius]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  );
}
