import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Site-wide soft orbs — deferred until idle so they stay off the critical path. */
export function GlobalAmbientLayer() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const enable = () => setActive(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(enable, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const t = window.setTimeout(enable, 1200);
    return () => window.clearTimeout(t);
  }, [reduced]);

  if (reduced || !active) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute -left-[20%] top-[12%] h-[28rem] w-[28rem] rounded-full bg-[var(--accent-sky)] opacity-[0.04] blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[15%] top-[45%] h-[22rem] w-[22rem] rounded-full bg-[#040175] opacity-[0.05] blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[8%] left-[35%] h-[18rem] w-[18rem] rounded-full bg-[var(--accent-sky)] opacity-[0.03] blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
}
