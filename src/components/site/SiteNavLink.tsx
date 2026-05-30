import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { blurActiveElement } from "@/lib/mobile-nav-click";
import { cn } from "@/lib/utils";

type SiteNavLinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
};

export function SiteNavLink({ to, children, className }: SiteNavLinkProps) {
  return (
    <Link
      to={to}
      className={className}
      activeProps={{
        className: cn(className, "site-nav__link--active"),
      }}
      activeOptions={{ exact: true }}
      onClick={blurActiveElement}
    >
      {children}
    </Link>
  );
}
