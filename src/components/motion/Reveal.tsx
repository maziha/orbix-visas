import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, springGentle } from "@/lib/motion/presets";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** How much of element must be visible (0–1) */
  amount?: number;
  as?: "div" | "section" | "article";
};

export function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.2,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  const Component = motion[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={fadeUp}
      transition={{ ...springGentle, delay }}
    >
      {children}
    </Component>
  );
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  amount?: number;
  as?: "div" | "ul" | "ol";
};

export function RevealStagger({
  children,
  className,
  amount = 0.15,
  as = "div",
}: RevealStaggerProps) {
  const reduced = useReducedMotion();
  const Tag = as;
  const Component = motion[as];

  if (reduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.09, delayChildren: 0.05 },
        },
      }}
    >
      {children}
    </Component>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: springGentle },
      }}
    >
      {children}
    </motion.div>
  );
}
