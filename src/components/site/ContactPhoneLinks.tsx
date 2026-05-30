import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { CONTACT_PHONE, CONTACT_PHONE_TEL, WHATSAPP_URL } from "@/lib/contact-info";

type ContactPhoneLinksProps = {
  /** footer = dark panel; default = light/neutral */
  variant?: "default" | "footer" | "contact" | "mobile";
  className?: string;
};

export function ContactPhoneLinks({
  variant = "default",
  className = "",
}: ContactPhoneLinksProps) {
  const actionClass =
    variant === "footer"
      ? "contact-phone-links__action contact-phone-links__action--footer"
      : variant === "contact"
        ? "contact-phone-links__action contact-phone-links__action--contact"
        : variant === "mobile"
          ? "contact-phone-links__action contact-phone-links__action--mobile"
          : "contact-phone-links__action";

  return (
    <div className={`contact-phone-links contact-phone-links--${variant} ${className}`.trim()}>
      <span className="contact-phone-links__identity">
        <span className="contact-phone-links__name font-semibold text-[var(--navy)]">
          {CONTACT_PHONE}
        </span>
      </span>
      <span className="contact-phone-links__actions">
        <a href={`tel:${CONTACT_PHONE_TEL}`} className={actionClass}>
          <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden />
          Call
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className={`${actionClass} contact-phone-links__action--whatsapp`}
        >
          <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
          WhatsApp
        </a>
      </span>
    </div>
  );
}

export function ContactPhoneLinksList({
  variant = "default",
  className = "",
}: ContactPhoneLinksProps) {
  return (
    <div className={className}>
      <ContactPhoneLinks variant={variant} />
    </div>
  );
}
