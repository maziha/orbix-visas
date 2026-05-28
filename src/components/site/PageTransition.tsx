import type { ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import { pageTransitionDramatic } from "@/lib/motion/presets";

/** Route change — cinematic glide between pages */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduced = useReducedMotion();

  if (reduced) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="min-h-0"
        variants={pageTransitionDramatic}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
