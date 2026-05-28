import { Phone } from "lucide-react";
import { CONTACT_PHONES, whatsAppUrlFor, type ContactPhone } from "@/lib/contact-info";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.116-.272.13-.57.13-.86 0-.616-1.36-.974-1.59-1.073zM16.99 25.62c-1.79 0-3.55-.484-5.078-1.39l-3.65 1.16 1.183-3.51a9.797 9.797 0 0 1-1.59-5.378c0-5.405 4.4-9.804 9.805-9.804s9.804 4.4 9.804 9.805-4.4 9.805-9.805 9.805zm0-21.62C10.51 4 5.205 9.305 5.205 15.785a11.7 11.7 0 0 0 1.69 6.094L4.747 28l6.317-2.02a11.804 11.804 0 0 0 5.925 1.61c6.48 0 11.786-5.304 11.786-11.785S23.47 4.013 16.99 4z" />
    </svg>
  );
}

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
      <span className="contact-phone-links__number">{phone.display}</span>
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
