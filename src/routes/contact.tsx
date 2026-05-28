import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useSubmitEnquiry } from "@/hooks/use-submit-enquiry";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { BrandPromise } from "@/components/site/HomeSections";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { ContactPhoneLinksList } from "@/components/site/ContactPhoneLinks";
import {
  COMPANY_ADDRESS,
  COMPANY_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONES,
  GSTIN,
} from "@/lib/contact-info";
import { headForPage } from "@/lib/site-meta";

const SERVICE_OPTIONS = [
  { value: "", label: "Select a service" },
  { value: "canada-pr", label: "Canada PR" },
  { value: "australia-pr", label: "Australia PR" },
  { value: "study-abroad", label: "Study Abroad" },
  { value: "spouse-family-visa", label: "Spouse / Family Visa" },
  { value: "job-seekers-visa", label: "Job Seekers Visa" },
  { value: "visit-visa", label: "Visit Visa" },
  { value: "ielts-language", label: "IELTS / Language Training" },
  { value: "other", label: "Other" },
] as const;

export const Route = createFileRoute("/contact")({
  head: () => headForPage("contact"),
  component: Contact,
});

function Contact() {
  const { send, isSubmitting, error } = useSubmitEnquiry();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const serviceLabel =
      SERVICE_OPTIONS.find((opt) => opt.value === form.service)?.label ?? form.service;

    const ok = await send({
      source: "contact",
      name: form.fullName,
      phone: form.phone,
      email: form.email,
      service: serviceLabel || undefined,
      message: form.message || undefined,
    });

    if (ok) setSubmitted(true);
  };

  return (
    <SiteLayout>
      <PageHero
        label="Contact"
        title="Let's Talk About Your Future."
        subtitle={`Reach out today and an ${COMPANY_NAME} advisor will get back to you within 24 hours.`}
      />
      <section className="py-20">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12">
          <div>
            <SectionEyebrow>CONTACT</SectionEyebrow>
            <h2 className="font-display text-3xl text-[var(--navy)] mb-6">Get in Touch</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="icon-well-accent h-12 w-12 rounded-full shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Phone — call or WhatsApp
                  </div>
                  <ContactPhoneLinksList variant="contact" />
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="icon-well-accent h-12 w-12 rounded-full shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-semibold text-[var(--navy)] hover:text-[var(--accent-sky)] break-all"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="icon-well-accent h-12 w-12 rounded-full shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Head Office</div>
                  <p className="font-semibold text-[var(--navy)] leading-relaxed">{COMPANY_ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="icon-well-accent h-12 w-12 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-[var(--navy)]">
                  GST
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">GSTIN</div>
                  <p className="font-semibold text-[var(--navy)]">{GSTIN}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-subtle rounded-2xl p-8 border border-border">
            <h2 className="font-display text-2xl text-[var(--navy)] mb-5">Send us a message</h2>
            {submitted ? (
              <div className="contact-form-confirmation">
                <CheckCircle2 className="contact-form-confirmation__icon h-12 w-12" aria-hidden />
                <h3 className="contact-form-confirmation__title">Message received</h3>
                <p className="contact-form-confirmation__text">
                  We will contact you at the number you provided within 24 business hours. For urgent
                  queries, call or WhatsApp us on either line:{" "}
                  {CONTACT_PHONES.map((p) => p.display).join(" or ")}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-full-name" className="contact-form-label">
                    Full Name
                  </label>
                  <input
                    id="contact-full-name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.fullName}
                    onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                    className="contact-form-field"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="contact-form-label">
                    WhatsApp / Mobile Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="contact-form-field"
                    autoComplete="tel"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="contact-form-label">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="contact-form-field"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="contact-service" className="contact-form-label">
                    I am interested in
                  </label>
                  <select
                    id="contact-service"
                    required
                    value={form.service}
                    onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                    className="contact-form-field"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.value || "placeholder"} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="contact-form-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us about your situation and what you are hoping to achieve."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="contact-form-field resize-none"
                  />
                </div>

                {error ? (
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                ) : null}
                <button type="submit" disabled={isSubmitting} className="contact-form-submit">
                  {isSubmitting ? "Sending…" : "Send Message"}
                </button>

                <a href={`tel:${CONTACT_PHONES[0].tel}`} className="contact-form-call-link">
                  Or call us directly — {CONTACT_PHONES.map((p) => p.display).join(" · ")}
                </a>
              </form>
            )}
          </div>
        </div>
      </section>
      <BrandPromise />
    </SiteLayout>
  );
}
