import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";

export function MotionProvider({ children }: { children: ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <MotionConfig reducedMotion={reducedMotion ? "always" : "user"}>
      {children}
    </MotionConfig>
  );
}
