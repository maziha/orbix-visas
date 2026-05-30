import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { CONTACT_PHONE_TEL } from "@/lib/contact-info";
import { cn } from "@/lib/utils";

type PhoneContactMenuProps = {
  variant?: "floating" | "inline";
  triggerLabel?: string;
  className?: string;
};

export function PhoneContactMenu({
  variant = "floating",
  triggerLabel,
  className,
}: PhoneContactMenuProps) {
  const reduced = useReducedMotion();

  const triggerClass =
    variant === "floating"
      ? "floating-phone floating-action-btn pulse-gold flex min-h-11 min-w-11 h-12 w-12 items-center justify-center rounded-full sm:min-h-[3.25rem] sm:min-w-[3.25rem] sm:h-14 sm:w-14"
      : "phone-menu-trigger btn-secondary";

  const ariaLabel = variant === "inline" && triggerLabel ? triggerLabel : "Call us";

  const motionProps = {
    whileHover: reduced ? undefined : { scale: 1.07 },
    whileTap: reduced ? undefined : { scale: 0.94 },
    animate: reduced
      ? undefined
      : {
          y: [0, -5, 0],
          transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const },
        },
  };

  if (variant === "floating") {
    return (
      <motion.a
        href={`tel:${CONTACT_PHONE_TEL}`}
        aria-label={ariaLabel}
        className={cn(triggerClass, className)}
        {...motionProps}
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
      </motion.a>
    );
  }

  return (
    <a
      href={`tel:${CONTACT_PHONE_TEL}`}
      aria-label={ariaLabel}
      className={cn(triggerClass, "inline-flex items-center justify-center gap-2", className)}
    >
      <Phone className="h-5 w-5" aria-hidden />
      {triggerLabel ? <span className="phone-menu-trigger__label">{triggerLabel}</span> : null}
    </a>
  );
}
