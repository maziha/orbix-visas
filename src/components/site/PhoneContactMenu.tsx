import { useState } from "react";
import { Phone } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CONTACT_PHONES, type ContactPhone } from "@/lib/contact-info";
import { ContactPhoneAvatar } from "./ContactPhoneAvatar";
import { cn } from "@/lib/utils";

type PhoneContactMenuProps = {
  variant?: "floating" | "inline";
  triggerLabel?: string;
  className?: string;
};

function displayShort(phone: ContactPhone) {
  return phone.display.replace("+91 ", "");
}

export function PhoneContactMenu({
  variant = "floating",
  triggerLabel,
  className,
}: PhoneContactMenuProps) {
  const [open, setOpen] = useState(false);

  const triggerClass =
    variant === "floating"
      ? "floating-phone floating-action-btn pulse-gold flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14"
      : "phone-menu-trigger btn-secondary";

  const ariaLabel =
    variant === "inline" && triggerLabel
      ? `${triggerLabel} — choose a phone line`
      : "Choose a phone line to call";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={ariaLabel}
          aria-expanded={open}
          className={cn(triggerClass, className)}
        >
          <Phone className={variant === "floating" ? "h-5 w-5 sm:h-6 sm:w-6" : "h-5 w-5"} aria-hidden />
          {variant === "inline" && triggerLabel ? (
            <span className="phone-menu-trigger__label">{triggerLabel}</span>
          ) : null}
        </button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align={variant === "floating" ? "end" : "start"}
        sideOffset={12}
        className="orbix-popover-content contact-line-menu w-[min(100vw-2rem,17.5rem)] p-2"
      >
        <p className="contact-line-menu__title">Call us</p>
        <p className="contact-line-menu__hint">Pick a director — tap their line when you&apos;re ready to dial.</p>
        <ul className="contact-line-menu__list">
          {CONTACT_PHONES.map((phone) => (
            <li key={phone.tel}>
              <a
                href={`tel:${phone.tel}`}
                className="contact-line-menu__item contact-line-menu__item--phone"
                onClick={() => setOpen(false)}
              >
                <ContactPhoneAvatar phone={phone} size="md" />
                <span className="contact-line-menu__copy">
                  <span className="contact-line-menu__label">{phone.name}</span>
                  <span className="contact-line-menu__number">
                    {phone.role} · {displayShort(phone)}
                  </span>
                </span>
                <Phone className="contact-line-menu__action-icon h-4 w-4 shrink-0" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
