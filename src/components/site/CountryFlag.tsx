import type { ComponentType, SVGProps } from "react";
import { AU, CA, DE, FR, GB, NZ, PL } from "country-flag-icons/react/3x2";
import { cn } from "@/lib/utils";
import type { CountryCode } from "@/lib/countries";

const FLAGS: Record<CountryCode, ComponentType<SVGProps<SVGSVGElement>>> = {
  CA,
  AU,
  NZ,
  GB,
  FR,
  DE,
  PL,
};

const SIZE_CLASS = {
  sm: "w-8",
  md: "w-12",
  lg: "w-16",
  xl: "w-20",
} as const;

type CountryFlagProps = {
  code: CountryCode;
  size?: keyof typeof SIZE_CLASS;
  className?: string;
  title?: string;
};

export function CountryFlag({ code, size = "md", className, title }: CountryFlagProps) {
  const Flag = FLAGS[code];
  if (!Flag) return null;

  return (
    <Flag
      title={title}
      aria-hidden={title ? undefined : true}
      className={cn(
        "h-auto shrink-0 rounded-[4px] border border-black/8 shadow-sm",
        SIZE_CLASS[size],
        className,
      )}
    />
  );
}
