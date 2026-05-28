import { motion, useReducedMotion } from "framer-motion";
import { springGentle, slideInLeft } from "@/lib/motion/presets";
import { cn } from "@/lib/utils";

type SectionEyebrowProps = {
  children: string;
  tone?: "light" | "dark";
  className?: string;
  as?: "span" | "p";
  /** Parent already animates — skip own motion */
  static?: boolean;
};

export function SectionEyebrow({
  children,
  tone = "light",
  className,
  as: Tag = "p",
  static: isStatic = false,
}: SectionEyebrowProps) {
  const reduced = useReducedMotion();
  const classes = cn("section-eyebrow", tone === "dark" && "section-eyebrow--dark", className);

  if (reduced || isStatic) {
    return <Tag className={classes}>{children}</Tag>;
  }

  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={classes}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={slideInLeft}
      transition={springGentle}
    >
      {children}
    </MotionTag>
  );
}
