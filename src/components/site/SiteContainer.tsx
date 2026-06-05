import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SiteContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/** Page shell — same side widths as the homepage (max-w-7xl + container-px). */
export function SiteContainer({ children, className, as: Tag = "div" }: SiteContainerProps) {
  return <Tag className={cn("site-container", className)}>{children}</Tag>;
}
