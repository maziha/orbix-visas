"use client";

import { lazy, Suspense, type ComponentType } from "react";
import { cn } from "@/lib/utils";
import type { CountryCode } from "@/lib/countries";

const LazyFlags = {
  CA: lazy(() => import("country-flag-icons/react/3x2/CA")),
  AU: lazy(() => import("country-flag-icons/react/3x2/AU")),
  NZ: lazy(() => import("country-flag-icons/react/3x2/NZ")),
  GB: lazy(() => import("country-flag-icons/react/3x2/GB")),
  FR: lazy(() => import("country-flag-icons/react/3x2/FR")),
  DE: lazy(() => import("country-flag-icons/react/3x2/DE")),
  PL: lazy(() => import("country-flag-icons/react/3x2/PL")),
} satisfies Record<CountryCode, ReturnType<typeof lazy<ComponentType<object>>>>;

const SIZE_CLASS = {
  sm: "w-8",
  md: "w-12",
  lg: "w-16",
  xl: "w-20",
  "2xl": "w-[5.5rem]",
} as const;

type CountryFlagProps = {
  code: CountryCode;
  size?: keyof typeof SIZE_CLASS;
  className?: string;
  title?: string;
};

export function CountryFlag({ code, size = "md", className, title }: CountryFlagProps) {
  const Flag = LazyFlags[code];
  if (!Flag) return null;

  const sizeClass = SIZE_CLASS[size];

  return (
    <Suspense
      fallback={
        <span
          className={cn("inline-block shrink-0 rounded-[4px] bg-muted/40", sizeClass, className)}
          style={{ aspectRatio: "3 / 2" }}
          aria-hidden
        />
      }
    >
      <Flag
        title={title}
        aria-hidden={title ? undefined : true}
        className={cn(
          "h-auto shrink-0 rounded-[4px] border border-black/8 shadow-sm",
          sizeClass,
          className,
        )}
      />
    </Suspense>
  );
}
