import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { springGentle } from "@/lib/motion/presets";
import { cn } from "@/lib/utils";

type HoverLiftProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  index?: number;
  instant?: boolean;
  as?: "div" | "article" | "li";
};

export function HoverLift({
  children,
  className,
  index = 0,
  instant = false,
  as = "div",
  ...rest
}: HoverLiftProps) {
  const reduced = useReducedMotion();
  const Component = motion[as];

  if (reduced) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <Component
      className={cn(className)}
      initial={instant ? false : { opacity: 0, y: 28, scale: 0.97 }}
      whileInView={instant ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={instant ? undefined : { once: true, amount: 0.15 }}
      transition={{ ...springGentle, delay: index * 0.07 }}
      whileHover={{ y: -8, scale: 1.02, transition: springGentle }}
      whileTap={{ scale: 0.98 }}
      {...rest}
    >
      {children}
    </Component>
  );
}
