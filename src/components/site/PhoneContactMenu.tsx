"use client";

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
  const triggerClass =
    variant === "floating"
      ? "floating-phone floating-action-btn pulse-gold flex min-h-11 min-w-11 h-12 w-12 items-center justify-center rounded-full sm:min-h-[3.25rem] sm:min-w-[3.25rem] sm:h-14 sm:w-14"
      : "phone-menu-trigger btn-secondary";

  const ariaLabel = variant === "inline" && triggerLabel ? triggerLabel : "Call us";

  return (
    <a
      href={`tel:${CONTACT_PHONE_TEL}`}
      aria-label={ariaLabel}
      className={cn(
        triggerClass,
        variant === "inline" && "inline-flex items-center justify-center gap-2",
        className,
      )}
    >
      {variant === "floating" ? (
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
      ) : (
        <>
          <Phone className="h-5 w-5" aria-hidden />
          {triggerLabel ? <span className="phone-menu-trigger__label">{triggerLabel}</span> : null}
        </>
      )}
    </a>
  );
}
