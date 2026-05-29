import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, springGentle } from "@/lib/motion/presets";
import { cn } from "@/lib/utils";

type RevealWhen = "inView" | "mount";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** How much of element must be visible (0–1) — inView only */
  amount?: number;
  as?: "div" | "section" | "article";
  /** mount = animate on load; inView = when scrolled into view */
  when?: RevealWhen;
};

export function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.08,
  as = "div",
  when = "inView",
}: RevealProps) {
  const reduced = useReducedMotion();
  const Component = motion[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const transition = { ...springGentle, delay };

  if (when === "mount") {
    return (
      <Component
        className={cn(className)}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={transition}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: "0px 0px -40px 0px" }}
      variants={fadeUp}
      transition={transition}
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
  when?: RevealWhen;
};

export function RevealStagger({
  children,
  className,
  amount = 0.08,
  as = "div",
  when = "inView",
}: RevealStaggerProps) {
  const reduced = useReducedMotion();
  const Tag = as;
  const Component = motion[as];

  if (reduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.04 },
    },
  };

  if (when === "mount") {
    return (
      <Component
        className={cn(className)}
        initial="hidden"
        animate="visible"
        variants={staggerVariants}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: "0px 0px -40px 0px" }}
      variants={staggerVariants}
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
