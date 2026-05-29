import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import { pageTransitionDramatic } from "@/lib/motion/presets";

/** Route change — cinematic glide between pages (plain HTML until hydrated to avoid mismatch). */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isRouteChange = mounted && prevPathname.current !== pathname;

  useLayoutEffect(() => {
    prevPathname.current = pathname;
  }, [pathname]);

  if (reduced || !mounted) {
    return <div className="min-h-0">{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="min-h-0"
        variants={pageTransitionDramatic}
        initial={isRouteChange ? "initial" : false}
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
