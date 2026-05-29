import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { CONTACT_PHONES, whatsAppUrlFor } from "@/lib/contact-info";
import { ContactPhoneAvatar } from "./ContactPhoneAvatar";
import { cn } from "@/lib/utils";
import {
  AnimatedPopoverPanel,
  AnimatedPopoverRow,
  FloatingActionButton,
} from "@/components/motion";

type WhatsAppContactMenuProps = {
  variant?: "floating" | "inline";
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
      ? "floating-whatsapp pulse-whatsapp flex min-h-11 min-w-11 h-12 w-12 items-center justify-center rounded-full sm:min-h-[3.25rem] sm:min-w-[3.25rem] sm:h-14 sm:w-14"
      : "whatsapp-menu-trigger btn-secondary";

  const ariaLabel =
    variant === "inline" && triggerLabel
      ? `${triggerLabel} — choose a WhatsApp line`
      : "Choose a WhatsApp line";

  const trigger =
    variant === "floating" ? (
      <FloatingActionButton
        ariaLabel={ariaLabel}
        aria-expanded={open}
        className={cn(triggerClass, className)}
      >
        <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      </FloatingActionButton>
    ) : (
      <button
        type="button"
        aria-label={ariaLabel}
        aria-expanded={open}
        className={cn(triggerClass, className)}
      >
        <WhatsAppIcon className="h-5 w-5" />
        {triggerLabel ? <span className="whatsapp-menu-trigger__label">{triggerLabel}</span> : null}
      </button>
    );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        side="top"
        align="start"
        sideOffset={12}
        className="w-[min(100vw-2rem,17.5rem)] border-0 bg-transparent p-0 shadow-none"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <AnimatedPopoverPanel className="contact-line-menu rounded-[0.875rem] border border-[#e4e8f0] bg-popover p-2 shadow-lg">
          <p className="contact-line-menu__title">Chat on WhatsApp</p>
          <p className="contact-line-menu__hint">Choose a line — we&apos;ll reply from Vyttila.</p>
          <ul className="contact-line-menu__list">
            {CONTACT_PHONES.map((phone) => (
              <AnimatedPopoverRow key={phone.tel}>
                <a
                  href={whatsAppUrlFor(phone)}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-line-menu__item contact-line-menu__item--whatsapp"
                  onClick={() => setOpen(false)}
                >
                  <ContactPhoneAvatar phone={phone} size="md" />
                  <span className="contact-line-menu__copy">
                    <span className="contact-line-menu__label">{phone.name}</span>
                    <span className="contact-line-menu__number">
                      {phone.role} · {displayShort(phone)}
                    </span>
                  </span>
                  <WhatsAppIcon className="contact-line-menu__action-icon h-4 w-4 shrink-0" aria-hidden />
                </a>
              </AnimatedPopoverRow>
            ))}
          </ul>
        </AnimatedPopoverPanel>
      </PopoverContent>
    </Popover>
  );
}
