"use client";

import type { ReactNode } from "react";

/** Page content wrapper — route transitions disabled for reliable navigation in production. */
export function PageTransition({ children }: { children: ReactNode }) {
  return <div className="min-h-0">{children}</div>;
}
