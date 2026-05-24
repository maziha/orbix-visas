import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL } from "@/lib/contact-info";
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
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <PageHero
        label="Contact"
        title="Let's Talk About Your Future."
        subtitle="Reach out today and a Orbix advisor will get back to you within 24 hours."
      />
      <section className="py-20">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12">
          <div>
            <SectionEyebrow>CONTACT</SectionEyebrow>
            <h2 className="font-display text-3xl text-[var(--navy)] mb-6">Get in Touch</h2>
            <div className="space-y-5">
              {[
                { Icon: Phone, label: "Phone", val: CONTACT_PHONE, href: `tel:${CONTACT_PHONE_TEL}` },
                { Icon: Mail, label: "Email", val: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                { Icon: MapPin, label: "Head Office", val: "Kochi, Kerala, India" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="icon-well-accent h-12 w-12 rounded-full shrink-0">
                    <c.Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    {"href" in c && c.href ? (
                      <a
                        href={c.href}
                        className="font-semibold text-[var(--navy)] hover:text-[var(--accent-sky)] break-all"
                      >
                        {c.val}
                      </a>
                    ) : (
                      <div className="font-semibold text-[var(--navy)]">{c.val}</div>
                    )}
                  </div>
                </div>
              ))}
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
                  queries, call us at {CONTACT_PHONE} or WhatsApp us.
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

                <button type="submit" className="contact-form-submit">
                  Send Message
                </button>

                <a href={`tel:${CONTACT_PHONE_TEL}`} className="contact-form-call-link">
                  Or call us directly — {CONTACT_PHONE}
                </a>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
