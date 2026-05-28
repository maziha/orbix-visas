import type { ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

/** Soft enter on route change — keyed by pathname so each page glides in once. */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div key={pathname} className="page-content-enter">
      {children}
    </div>
  );
}
