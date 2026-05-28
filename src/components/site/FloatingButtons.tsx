import { Phone } from "lucide-react";
import { CONTACT_PHONE_TEL } from "@/lib/contact-info";
import { WhatsAppContactMenu } from "./WhatsAppContactMenu";

export function FloatingButtons() {
  return (
    <>
      <div className="floating-whatsapp-wrap fixed bottom-4 left-4 z-30 sm:bottom-6 sm:left-6">
        <WhatsAppContactMenu variant="floating" />
      </div>
      <a
        href={`tel:${CONTACT_PHONE_TEL}`}
        aria-label="Call Now"
        className="fixed bottom-4 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-brand-dark text-white shadow-xl pulse-gold ring-2 ring-[color-mix(in_srgb,var(--accent-sky)_40%,transparent)] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
    </>
  );
}
