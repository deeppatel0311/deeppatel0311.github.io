"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
} from "framer-motion";

/* Scroll-linked acid progress bar pinned to the top of the viewport */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-acid origin-left z-[70]"
      style={{ scaleX }}
    />
  );
}

/* Fade + rise into view */
export function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Big-type entrance: each line slides up from behind a mask.
   The observed element is the outer mask — the inner span starts fully
   clipped, so observing it directly would never trigger whileInView. */
export function LineReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.span
      className={`block overflow-hidden ${className ?? ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.span
        className="block"
        variants={{ hidden: { y: "110%" }, visible: { y: "0%" } }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

/* Per-character masked reveal for display headlines: each letter rises
   from behind its own mask with a slight rotation settle */
export function CharReveal({
  text,
  delay = 0,
  className,
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const chars = Array.from(text);
  return (
    <motion.span
      className={`inline-block ${className ?? ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.035, delayChildren: delay },
        },
      }}
      aria-label={text}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", rotate: 8 },
              visible: { y: "0%", rotate: 0 },
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {char === " " ? " " : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/* Element gently follows the cursor while hovered */
export function Magnetic({
  children,
  strength = 0.25,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 180, damping: 16 });
  const y = useSpring(0, { stiffness: 180, damping: 16 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`inline-block ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

/* Leans content with scroll velocity — used on the acid tape */
export function ScrollSkew({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { stiffness: 120, damping: 25 });
  const skewX = useTransform(smooth, [-2000, 2000], [5, -5], { clamp: true });
  return (
    <motion.div style={{ skewX }} className={className}>
      {children}
    </motion.div>
  );
}

/* Subtle scroll parallax */
export function Parallax({
  children,
  speed = 60,
  className,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/* Full-width scrolling tape */
export function Marquee({
  items,
  className = "",
  slow = false,
}: {
  items: string[];
  className?: string;
  slow?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className={`inline-flex items-center ${
          slow ? "animate-marquee-slow" : "animate-marquee"
        }`}
      >
        {row.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="px-6">{item}</span>
            <span aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
