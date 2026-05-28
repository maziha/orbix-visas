import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { CONTACT_PHONES, CONTACT_PHONE_TEL, whatsAppUrlFor } from "@/lib/contact-info";
import type { ConsultationPreset } from "@/lib/enquiry-options";
import { useModal } from "./modal-store";

const DEFAULT_TITLE = "Ready to take the first step?";
const DEFAULT_DESCRIPTION =
  "Speak with a counsellor — no obligation, available 6 days a week from our Vyttila office.";
const DEFAULT_PRIMARY_LABEL = "Book a Free Consultation";
export type ClosingCtaSecondaryAction =
  | { kind: "whatsapp"; label?: string }
  | { kind: "phone"; label: string; href?: string }
  | { kind: "link"; label: string; to: string; hash?: string };

export type ClosingCtaPanelProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondary?: ClosingCtaSecondaryAction;
  footer?: ReactNode;
  className?: string;
  consultationPreset?: ConsultationPreset;
};

function ClosingCtaSecondary({ action }: { action: ClosingCtaSecondaryAction }) {
  if (action.kind === "whatsapp") {
    return (
      <div className="closing-cta-panel__dual-whatsapp">
        {CONTACT_PHONES.map((phone) => (
          <a
            key={phone.tel}
            href={whatsAppUrlFor(phone)}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex items-center justify-center"
          >
            WhatsApp · {phone.display.replace("+91 ", "")}
          </a>
        ))}
      </div>
    );
  }

  if (action.kind === "phone") {
    return (
      <a
        href={action.href ?? `tel:${CONTACT_PHONE_TEL}`}
        className="btn-secondary inline-flex items-center justify-center gap-2"
      >
        <Phone className="h-4 w-4 shrink-0" aria-hidden />
        {action.label}
      </a>
    );
  }

  return (
    <Link
      to={action.to}
      hash={action.hash}
      className="btn-secondary inline-flex items-center justify-center"
    >
      {action.label}
    </Link>
  );
}

export function ClosingCtaPanel({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  primaryLabel = DEFAULT_PRIMARY_LABEL,
  secondary = { kind: "whatsapp" },
  footer,
  className = "",
  consultationPreset,
}: ClosingCtaPanelProps) {
  const { openConsultation } = useModal();

  return (
    <div className={`closing-cta-panel bg-brand-dark text-center ${className}`.trim()}>
      <h2 className="closing-cta-panel__title font-display">{title}</h2>
      <p className="closing-cta-panel__text mx-auto max-w-2xl">{description}</p>
      <div className="closing-cta-panel__actions">
        <button
          type="button"
          onClick={() => openConsultation(consultationPreset)}
          className="btn-primary"
        >
          {primaryLabel}
        </button>
        <ClosingCtaSecondary action={secondary} />
      </div>
      {footer ? <div className="closing-cta-panel__footer">{footer}</div> : null}
    </div>
  );
}
