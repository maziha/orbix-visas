import { useState } from "react";
import { contactInitials, type ContactPhone } from "@/lib/contact-info";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function ContactPhoneAvatar({
  phone,
  size = "md",
  showBadge = true,
}: {
  phone: ContactPhone;
  size?: "sm" | "md";
  showBadge?: boolean;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = phone.avatarSrc && !imgFailed;

  return (
    <span className={`contact-phone-avatar contact-phone-avatar--${size}`}>
      {showImage ? (
        <img
          src={phone.avatarSrc}
          alt={phone.name}
          className="contact-phone-avatar__img"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span className="contact-phone-avatar__fallback" aria-hidden>
          {contactInitials(phone.name)}
        </span>
      )}
      {showBadge ? (
        <span className="contact-phone-avatar__badge" aria-hidden>
          <WhatsAppIcon className="h-2.5 w-2.5" />
        </span>
      ) : null}
    </span>
  );
}
