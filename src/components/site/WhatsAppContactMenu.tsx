"use client";

import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/contact-info";
import { cn } from "@/lib/utils";

type WhatsAppContactMenuProps = {
  variant?: "floating" | "inline";
  triggerLabel?: string;
  className?: string;
};

export function WhatsAppContactMenu({
  variant = "floating",
  triggerLabel,
  className,
}: WhatsAppContactMenuProps) {
  const triggerClass =
    variant === "floating"
      ? "floating-whatsapp floating-action-btn pulse-whatsapp flex min-h-11 min-w-11 h-12 w-12 items-center justify-center rounded-full sm:min-h-[3.25rem] sm:min-w-[3.25rem] sm:h-14 sm:w-14"
      : "whatsapp-menu-trigger btn-secondary";

  const ariaLabel =
    variant === "inline" && triggerLabel ? triggerLabel : "Chat on WhatsApp";

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={cn(
        triggerClass,
        variant === "inline" && "inline-flex items-center justify-center gap-2",
        className,
      )}
    >
      {variant === "floating" ? (
        <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      ) : (
        <>
          <WhatsAppIcon className="h-5 w-5" />
          {triggerLabel ? <span className="whatsapp-menu-trigger__label">{triggerLabel}</span> : null}
        </>
      )}
    </a>
  );
}
