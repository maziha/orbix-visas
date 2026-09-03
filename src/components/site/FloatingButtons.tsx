"use client";

import { WhatsAppContactMenu } from "./WhatsAppContactMenu";
import { PhoneContactMenu } from "./PhoneContactMenu";

export function FloatingButtons() {
  return (
    <>
      <div className="floating-whatsapp-wrap floating-fab-bob fixed bottom-4 left-4 z-30 sm:bottom-6 sm:left-6">
        <WhatsAppContactMenu variant="floating" />
      </div>
      <div className="floating-phone-wrap floating-fab-bob fixed bottom-4 right-4 z-30 sm:bottom-6 sm:right-6">
        <PhoneContactMenu variant="floating" />
      </div>
    </>
  );
}
