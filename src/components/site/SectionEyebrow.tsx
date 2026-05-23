import { cn } from "@/lib/utils";

type SectionEyebrowProps = {
  children: string;
  /** Light sections use accent sky; dark sections use white at 70% opacity */
  tone?: "light" | "dark";
  className?: string;
  as?: "span" | "p";
};

export function SectionEyebrow({
  children,
  tone = "light",
  className,
  as: Tag = "p",
}: SectionEyebrowProps) {
  return (
    <Tag
      className={cn(
        "section-eyebrow",
        tone === "dark" && "section-eyebrow--dark",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
