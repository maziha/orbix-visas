import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/**
 * Subtle crossfade on route change only — skips first paint to avoid homepage jerk.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isFirstRoute = useRef(true);
  const [entering, setEntering] = useState(false);

  useEffect(() => {
    if (isFirstRoute.current) {
      isFirstRoute.current = false;
      return;
    }

    setEntering(true);
    const timer = window.setTimeout(() => setEntering(false), 320);
    return () => clearTimeout(timer);
  }, [pathname]);

  return <div className={cn(entering && "page-shell--enter")}>{children}</div>;
}
