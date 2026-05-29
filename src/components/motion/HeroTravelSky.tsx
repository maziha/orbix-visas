import { motion, useReducedMotion } from "framer-motion";
import { flightPathDraw } from "@/lib/motion/presets";

/** Ambient flight path + destination dots — study / migration / visa theme */
export function HeroTravelSky() {
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <div className="hero-travel-sky pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <svg
        className="hero-travel-sky__path absolute -right-[8%] top-[18%] h-auto w-[min(55vw,28rem)] text-[var(--accent-sky)]"
        viewBox="0 0 320 140"
        fill="none"
      >
        <motion.path
          d="M12 110 Q 90 24, 168 58 T 308 32"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="5 6"
          variants={flightPathDraw}
          initial="hidden"
          animate="visible"
        />
      </svg>

      {[
        { left: "12%", top: "22%", delay: 0.8, label: "CA" },
        { left: "78%", top: "28%", delay: 1.1, label: "AU" },
        { left: "58%", top: "12%", delay: 1.35, label: "UK" },
      ].map((dot) => (
        <motion.span
          key={dot.label}
          className="hero-travel-sky__dot absolute flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-[0.625rem] font-bold tracking-wide text-white/90 backdrop-blur-sm"
          style={{ left: dot.left, top: dot.top }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0.28, 0.48, 0.28], scale: 1 }}
          transition={{
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: dot.delay + 0.4 },
            scale: { type: "spring", damping: 20, stiffness: 260, delay: dot.delay },
          }}
        >
          {dot.label}
        </motion.span>
      ))}

      <motion.span
        className="hero-travel-sky__stamp absolute bottom-[28%] left-[6%] h-14 w-14 rounded-full border border-dashed border-white/20"
        animate={{
          y: [0, -6, 0],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="hero-travel-sky__stamp absolute right-[10%] top-[42%] h-10 w-10 rounded-full border border-dashed border-white/15"
        animate={{
          y: [0, -5, 0],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
    </div>
  );
}
