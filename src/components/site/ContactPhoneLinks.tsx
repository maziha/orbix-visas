import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { CONTACT_PHONES, whatsAppUrlFor, type ContactPhone } from "@/lib/contact-info";

type ContactPhoneLinksProps = {
  phone: ContactPhone;
  /** footer = dark panel; default = light/neutral */
  variant?: "default" | "footer" | "contact" | "mobile";
  className?: string;
};

export function ContactPhoneLinks({
  phone,
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
        <span className="contact-phone-links__name">{phone.name}</span>
        <span className="contact-phone-links__meta">
          {phone.role} · {phone.display}
        </span>
      </span>
      <span className="contact-phone-links__actions">
        <a href={`tel:${phone.tel}`} className={actionClass}>
          <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden />
          Call
        </a>
        <a
          href={whatsAppUrlFor(phone)}
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
}: {
  variant?: "default" | "footer" | "contact" | "mobile";
  className?: string;
}) {
  return (
    <ul className={`contact-phone-links-list space-y-3 ${className}`.trim()}>
      {CONTACT_PHONES.map((phone) => (
        <li key={phone.tel}>
          <ContactPhoneLinks phone={phone} variant={variant} />
        </li>
      ))}
    </ul>
  );
}
