import { cn } from "@/lib/utils";
import { SectionEyebrow } from "./SectionEyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  align = "center",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow && <SectionEyebrow tone={tone}>{eyebrow}</SectionEyebrow>}
      <h2
        className={cn(
          "font-display text-3xl md:text-5xl leading-tight",
          isDark ? "text-white" : "text-[var(--navy)]",
          eyebrow ? "mt-0" : "mt-2",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-lg",
            isDark ? "text-white/75" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
