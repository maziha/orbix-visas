import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { popoverPanel, springGentle } from "@/lib/motion/presets";
import { cn } from "@/lib/utils";

type AnimatedPopoverPanelProps = {
  children: ReactNode;
  className?: string;
};

/** Popover body — animate when Radix mounts content (parent controls visibility) */
export function AnimatedPopoverPanel({ children, className }: AnimatedPopoverPanelProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={popoverPanel}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.07, delayChildren: 0.05 },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function AnimatedPopoverRow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.li
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, x: -8 },
        visible: { opacity: 1, x: 0, transition: springGentle },
      }}
    >
      {children}
    </motion.li>
  );
}
