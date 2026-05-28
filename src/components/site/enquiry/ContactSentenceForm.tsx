import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useSubmitEnquiry } from "@/hooks/use-submit-enquiry";
import { CONTACT_PHONES } from "@/lib/contact-info";
import { CONTACT_SERVICE_OPTIONS, contactServiceLabel } from "@/lib/enquiry-options";
import { SentenceInlineInput, SentenceInlinePick } from "./SentenceField";

export function ContactSentenceForm() {
  const { send, isSubmitting, error } = useSubmitEnquiry();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const set = (key: keyof typeof form, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.phone.trim() || !form.service) return;

    const ok = await send({
      source: "contact",
      name: form.fullName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || undefined,
      service: contactServiceLabel(form.service),
      message: form.message.trim() || undefined,
    });

    if (ok) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-form-confirmation">
        <CheckCircle2 className="contact-form-confirmation__icon h-12 w-12" aria-hidden />
        <h3 className="contact-form-confirmation__title">Message received</h3>
        <p className="contact-form-confirmation__text">
          We will contact you at the number you provided within 24 business hours. For urgent
          queries, call or WhatsApp us on either line:{" "}
          {CONTACT_PHONES.map((p) => p.display).join(" or ")}.
        </p>
      </div>
    );
  }

  const canSubmit = form.fullName.trim() && form.phone.trim() && form.service;

  return (
    <form onSubmit={handleSubmit} className="sentence-enquiry-form space-y-5">
      <p className="sentence-line text-[var(--navy)] leading-relaxed">
        Hi, I&apos;m{" "}
        <SentenceInlineInput
          value={form.fullName}
          onChange={(v) => set("fullName", v)}
          placeholder="your full name"
          required
          autoComplete="name"
          width="md"
        />
        . You can reach me on{" "}
        <SentenceInlineInput
          value={form.phone}
          onChange={(v) => set("phone", v)}
          placeholder="WhatsApp / mobile"
          type="tel"
          required
          autoComplete="tel"
          width="lg"
        />{" "}
        or{" "}
        <SentenceInlineInput
          value={form.email}
          onChange={(v) => set("email", v)}
          placeholder="email (optional)"
          type="email"
          autoComplete="email"
          width="lg"
        />
        .
      </p>

      <p className="sentence-line text-[var(--navy)] leading-relaxed">
        I&apos;m interested in{" "}
        <SentenceInlinePick
          value={form.service}
          onChange={(v) => set("service", v)}
          options={CONTACT_SERVICE_OPTIONS}
          placeholder="choose a service"
          ariaLabel="Service you are interested in"
          layout="popover"
        />
        .
      </p>

      <label className="block">
        <span className="sentence-line text-[var(--navy)] leading-relaxed">
          Here&apos;s a bit more about my situation{" "}
          <span className="text-muted-foreground text-sm">(optional)</span>
        </span>
        <textarea
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Tell us what you're hoping to achieve, your timeline, or any questions…"
          rows={4}
          className="sentence-notes mt-2 w-full"
        />
      </label>

      {error ? (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <button type="submit" disabled={isSubmitting || !canSubmit} className="contact-form-submit">
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
