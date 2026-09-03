"use client";

import { forwardRef, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "@/lib/motion/use-reduced-motion";
import { cn } from "@/lib/utils";

type MotionPressableProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
  className?: string;
  /** Subtle idle pulse for primary CTAs */
  pulse?: boolean;
};

export const MotionPressable = forwardRef<HTMLButtonElement, MotionPressableProps>(
  function MotionPressable({ children, className, pulse, ...props }, ref) {
    const reduced = useReducedMotion();

    return (
      <motion.button
        ref={ref}
        className={cn(className)}
        whileHover={reduced ? undefined : { scale: 1.04, y: -2 }}
        whileTap={reduced ? undefined : { scale: 0.96 }}
        animate={
          reduced || !pulse
            ? undefined
            : { scale: [1, 1.02, 1], transition: { duration: 2.6, repeat: Infinity, ease: "easeInOut" } }
        }
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);
