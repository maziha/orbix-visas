"use client";

import { forwardRef, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "@/lib/motion/use-reduced-motion";
import { cn } from "@/lib/utils";

type FloatingActionButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
  /** Accessible name (maps to aria-label) */
  ariaLabel: string;
};

/** Gentle float + press feedback for WhatsApp / phone FABs */
export const FloatingActionButton = forwardRef<HTMLButtonElement, FloatingActionButtonProps>(
  function FloatingActionButton(
    { children, className, ariaLabel, type = "button", ...props },
    ref,
  ) {
    const reduced = useReducedMotion();

    return (
      <motion.button
        ref={ref}
        type={type}
        aria-label={ariaLabel}
        className={cn(className)}
        whileHover={reduced ? undefined : { scale: 1.07 }}
        whileTap={reduced ? undefined : { scale: 0.94 }}
        animate={
          reduced
            ? undefined
            : {
                y: [0, -5, 0],
                transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
              }
        }
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);
