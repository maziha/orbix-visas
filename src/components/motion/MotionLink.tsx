import { Link, type LinkProps } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const MotionRouterLink = motion.create(Link);

type MotionLinkProps = LinkProps & {
  className?: string;
  children: React.ReactNode;
  /** Slide accent on hover */
  slide?: boolean;
};

export function MotionLink({ className, children, slide = true, ...props }: MotionLinkProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <Link className={className} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <MotionRouterLink
      className={cn(className)}
      whileHover={slide ? { x: 4, color: "var(--accent-sky)" } : { opacity: 0.85 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", damping: 22, stiffness: 400 }}
      {...props}
    >
      {children}
    </MotionRouterLink>
  );
}
