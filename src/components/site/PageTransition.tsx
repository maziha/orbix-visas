"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { tweenSmooth } from "@/lib/motion/presets";

/** Soft fade/slide on route change — no exit wait, so navigation never blocks. */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      className="min-h-0"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={tweenSmooth}
    >
      {children}
    </motion.div>
  );
}
