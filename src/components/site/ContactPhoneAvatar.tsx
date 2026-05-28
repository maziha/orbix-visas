import { useState } from "react";
import type { ContactPhone } from "@/lib/contact-info";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

function initialsFor(phone: ContactPhone) {
  if (phone.label) {
    return phone.label
      .split(/\s+/)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }
  return phone.display.replace(/\D/g, "").slice(-4);
}

export function ContactPhoneAvatar({ phone, size = "md" }: { phone: ContactPhone; size?: "sm" | "md" }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = phone.avatarSrc && !imgFailed;

  return (
    <span className={`contact-phone-avatar contact-phone-avatar--${size}`}>
      {showImage ? (
        <img
          src={phone.avatarSrc}
          alt=""
          className="contact-phone-avatar__img"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span className="contact-phone-avatar__fallback" aria-hidden>
          {initialsFor(phone)}
        </span>
      )}
      <span className="contact-phone-avatar__badge" aria-hidden>
        <WhatsAppIcon className="h-2.5 w-2.5" />
      </span>
    </span>
  );
}
