import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { CONTACT_PHONES, whatsAppUrlFor } from "@/lib/contact-info";
import { ContactPhoneAvatar } from "./ContactPhoneAvatar";
import { cn } from "@/lib/utils";

type WhatsAppContactMenuProps = {
  /** Floating green FAB (default) or secondary-style button on dark panels */
  variant?: "floating" | "inline";
  /** Shown beside inline trigger (e.g. on closing CTA) */
  triggerLabel?: string;
  className?: string;
};

function displayShort(phone: (typeof CONTACT_PHONES)[number]) {
  return phone.display.replace("+91 ", "");
}

export function WhatsAppContactMenu({
  variant = "floating",
  triggerLabel,
  className,
}: WhatsAppContactMenuProps) {
  const [open, setOpen] = useState(false);

  const triggerClass =
    variant === "floating"
      ? "floating-whatsapp pulse-whatsapp flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14"
      : "whatsapp-menu-trigger btn-secondary";

  const ariaLabel =
    variant === "inline" && triggerLabel
      ? `${triggerLabel} — choose a WhatsApp line`
      : "Choose a WhatsApp line";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={ariaLabel}
          aria-expanded={open}
          className={cn(triggerClass, className)}
        >
          <WhatsAppIcon className={variant === "floating" ? "h-6 w-6 sm:h-7 sm:w-7" : "h-5 w-5"} />
          {variant === "inline" && triggerLabel ? (
            <span className="whatsapp-menu-trigger__label">{triggerLabel}</span>
          ) : null}
        </button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="start"
        sideOffset={12}
        className="whatsapp-contact-menu w-[min(100vw-2rem,17.5rem)] p-2"
      >
        <p className="whatsapp-contact-menu__title">Chat on WhatsApp</p>
        <p className="whatsapp-contact-menu__hint">Choose a line — we&apos;ll reply from Vyttila.</p>
        <ul className="whatsapp-contact-menu__list">
          {CONTACT_PHONES.map((phone) => (
            <li key={phone.tel}>
              <a
                href={whatsAppUrlFor(phone)}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-contact-menu__item"
                onClick={() => setOpen(false)}
              >
                <ContactPhoneAvatar phone={phone} size="md" />
                <span className="whatsapp-contact-menu__copy">
                  <span className="whatsapp-contact-menu__label">{phone.name}</span>
                  <span className="whatsapp-contact-menu__number">
                    {phone.role} · {displayShort(phone)}
                  </span>
                </span>
                <WhatsAppIcon className="whatsapp-contact-menu__arrow h-4 w-4 shrink-0" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
