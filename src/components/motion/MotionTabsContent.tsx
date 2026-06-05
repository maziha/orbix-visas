"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { fadeUp, springGentle } from "@/lib/motion/presets";

/** Wrap tab panel children for cross-fade + slide when value changes */
export function MotionTabsContent({
  value,
  activeValue,
  children,
  className,
}: {
  value: string;
  activeValue: string;
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (value !== activeValue) return null;

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={value}
        className={className}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={fadeUp}
        transition={springGentle}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
