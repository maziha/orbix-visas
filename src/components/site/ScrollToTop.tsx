import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { springGentle } from "@/lib/motion/presets";

const SHOW_AFTER_PX = 400;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          key="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="scroll-to-top fixed bottom-20 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-[#e4e8f0] bg-brand-white text-[var(--navy)] shadow-lg transition hover:border-[var(--accent-sky)] hover:text-[var(--accent-sky)] sm:bottom-[5.75rem] sm:right-6 sm:h-12 sm:w-12"
          aria-label="Scroll to top"
          initial={reduced ? false : { opacity: 0, y: 12, scale: 0.9 }}
          animate={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
          exit={reduced ? undefined : { opacity: 0, y: 8, scale: 0.92 }}
          whileHover={reduced ? undefined : { scale: 1.06 }}
          whileTap={reduced ? undefined : { scale: 0.94 }}
          transition={springGentle}
        >
          <ChevronUp className="h-5 w-5" aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
