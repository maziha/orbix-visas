"use client";

import { motion, useReducedMotion } from "framer-motion";
import { flightPathDraw } from "@/lib/motion/presets";

type AmbientTravelBgProps = {
  variant?: "hero" | "page" | "subtle";
  className?: string;
};

/** Floating route arcs + destination dots — study / migration motif */
export function AmbientTravelBg({ variant = "page", className }: AmbientTravelBgProps) {
  const reduced = useReducedMotion();
  if (reduced) return null;

  const opacity = variant === "hero" ? 0.5 : variant === "page" ? 0.35 : 0.2;

  return (
    <div className={className} aria-hidden>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <motion.path
          d="M40 280 Q 280 80, 520 200 T 1160 120"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="8 6"
          className="text-[var(--accent-sky)]"
          style={{ opacity }}
          variants={flightPathDraw}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M80 340 Q 400 160, 720 280 T 1120 220"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="5 8"
          className="text-white/25"
          style={{ opacity: opacity * 0.7 }}
          variants={flightPathDraw}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        />
        {[
          { cx: 520, cy: 200, delay: 0.8 },
          { cx: 720, cy: 280, delay: 1.1 },
          { cx: 1160, cy: 120, delay: 1.4 },
        ].map((dot) => (
          <motion.circle
            key={`${dot.cx}-${dot.cy}`}
            cx={dot.cx}
            cy={dot.cy}
            r="5"
            fill="var(--accent-sky)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.35, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
          />
        ))}
      </svg>

      <motion.span
        className="absolute right-[12%] top-[18%] h-16 w-16 rounded-full border border-dashed border-white/15"
        animate={{ rotate: [0, 360], opacity: [0.2, 0.45, 0.2] }}
        transition={{ rotate: { duration: 24, repeat: Infinity, ease: "linear" }, opacity: { duration: 4, repeat: Infinity } }}
      />
      <motion.span
        className="absolute left-[8%] bottom-[22%] h-12 w-12 rounded-full border border-dashed border-[var(--accent-sky)]/30"
        animate={{ y: [0, -10, 0], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
