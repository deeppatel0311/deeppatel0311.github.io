"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&";

/* Terminal-style decode: characters cycle randomly, then settle left to right */
export function ScrambleText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const frame = useRef<number>(0);

  const scramble = () => {
    cancelAnimationFrame(frame.current);
    let tick = 0;
    const run = () => {
      tick++;
      const settled = Math.floor(tick / 3);
      setDisplay(
        text
          .split("")
          .map((char, i) =>
            i < settled || char === " "
              ? char
              : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          )
          .join("")
      );
      if (settled < text.length) {
        frame.current = requestAnimationFrame(run);
      } else {
        setDisplay(text);
      }
    };
    frame.current = requestAnimationFrame(run);
  };

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  return (
    <span className={className} onMouseEnter={scramble} aria-label={text}>
      {display}
    </span>
  );
}

/* Acid dot cursor with a lagging ring that grows over interactive elements.
   Mouse-only (pointer: fine) and disabled for reduced-motion users. */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 400, damping: 35 });
  const ringY = useSpring(dotY, { stiffness: 400, damping: 35 });

  useEffect(() => {
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    setEnabled(true);
    document.documentElement.classList.add("cursor-active");

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      setHovering(
        !!(e.target as Element).closest?.(
          "a, button, input, textarea, [data-cursor]"
        )
      );
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      document.documentElement.classList.remove("cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[100] w-2 h-2 -ml-1 -mt-1 rounded-full bg-acid pointer-events-none"
        style={{ x: dotX, y: dotY }}
      />
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[100] w-10 h-10 -ml-5 -mt-5 rounded-full border border-acid/60 pointer-events-none"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 1.7 : 1, opacity: hovering ? 1 : 0.5 }}
        transition={{ duration: 0.25 }}
      />
    </>
  );
}

/* Faint dot grid that ripples away from the cursor — canvas, no WebGL */
export function DotGrid({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const spacing = 34;
    let dots: { ox: number; oy: number }[] = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    const build = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (let x = spacing / 2; x < rect.width; x += spacing) {
        for (let y = spacing / 2; y < rect.height; y += spacing) {
          dots.push({ ox: x, oy: y });
        }
      }
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      const radius = 130;
      for (const dot of dots) {
        const dx = dot.ox - mouse.x;
        const dy = dot.oy - mouse.y;
        const dist = Math.hypot(dx, dy);
        let x = dot.ox;
        let y = dot.oy;
        let alpha = 0.10;
        let color = "242, 241, 236";
        if (!reduced && dist < radius) {
          const force = (1 - dist / radius) * 16;
          x += (dx / (dist || 1)) * force;
          y += (dy / (dist || 1)) * force;
          alpha = 0.1 + (1 - dist / radius) * 0.5;
          color = "204, 255, 0";
        }
        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    build();
    if (reduced) {
      // draw one static frame, no animation loop
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      for (const dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.ox, dot.oy, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(242, 241, 236, 0.10)";
        ctx.fill();
      }
    } else {
      raf = requestAnimationFrame(draw);
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mouseout", onLeave);
    }
    window.addEventListener("resize", build);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("resize", build);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`absolute inset-0 pointer-events-none ${className ?? ""}`}
    />
  );
}

/* Subtle perspective tilt toward the cursor */
export function Tilt({
  children,
  max = 1.5,
  className,
}: {
  children: React.ReactNode;
  max?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(0, { stiffness: 150, damping: 20 });
  const ry = useSpring(0, { stiffness: 150, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rx.set(-py * 2 * max);
    ry.set(px * 2 * max);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
