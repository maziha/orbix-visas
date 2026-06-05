"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MotionLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  /** Slide accent on hover */
  slide?: boolean;
};

export function MotionLink({ className, children, slide = true, href }: MotionLinkProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <motion.span
      className={cn("inline-block", className)}
      whileHover={slide ? { x: 4, color: "var(--accent-sky)" } : { opacity: 0.85 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", damping: 22, stiffness: 400 }}
    >
      <Link href={href} className="inline-block">
        {children}
      </Link>
    </motion.span>
  );
}
