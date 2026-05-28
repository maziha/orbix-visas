/** Official company and contact details — single source of truth for the site. */

export const COMPANY_NAME = "OrbiX Overseas Careers";
export const COMPANY_NAME_SHORT = "OrbiX";

export const CONTACT_EMAIL = "orbixoverseascareers@gmail.com";

export type ContactPhone = {
  display: string;
  tel: string;
  /** Digits only, for wa.me (no + or spaces) */
  whatsapp: string;
  /** Short label in pickers (e.g. counsellor name or desk name) */
  label?: string;
  /**
   * Optional photo (e.g. WhatsApp profile export) under public/.
   * Falls back to initials if missing or broken.
   */
  avatarSrc?: string;
};

export const CONTACT_PHONES: readonly ContactPhone[] = [
  {
    display: "+91 8592026134",
    tel: "+918592026134",
    whatsapp: "918592026134",
    label: "Counsellor · Line 1",
    avatarSrc: "/images/contact/whatsapp-6134.jpg",
  },
  {
    display: "+91 8592026124",
    tel: "+918592026124",
    whatsapp: "918592026124",
    label: "Counsellor · Line 2",
    avatarSrc: "/images/contact/whatsapp-6124.jpg",
  },
];

export function whatsAppUrlFor(phone: ContactPhone): string {
  return `https://wa.me/${phone.whatsapp}`;
}

/** Primary line — header, floating call button, default tel:/WhatsApp links */
export const CONTACT_PHONE = CONTACT_PHONES[0].display;
export const CONTACT_PHONE_TEL = CONTACT_PHONES[0].tel;

export const CONTACT_PHONE_ALT = CONTACT_PHONES[1].display;
export const CONTACT_PHONE_ALT_TEL = CONTACT_PHONES[1].tel;

/** @deprecated Prefer whatsAppUrlFor(CONTACT_PHONES[0]) — kept for simple imports */
export const WHATSAPP_URL = whatsAppUrlFor(CONTACT_PHONES[0]);

export const COMPANY_ADDRESS =
  "7th Floor, Jomer Symphony, Ponnurunni East, Ponnurunni, Vyttila, Ernakulam, Kerala 682019";

export const COMPANY_ADDRESS_SHORT = "Vyttila, Ernakulam, Kerala 682019";

export const GSTIN = "32GFUPD6561J1Z0";

/** Official WhatsApp brand green */
export const WHATSAPP_GREEN = "#25D366";
export const WHATSAPP_GREEN_HOVER = "#20BD5A";
