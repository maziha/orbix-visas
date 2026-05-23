import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { PAGE_DESCRIPTIONS } from "@/lib/page-descriptions";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/contact-info";
import { PAGE_TITLES } from "@/lib/page-titles";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: PAGE_TITLES.contact },
      { name: "description", content: PAGE_DESCRIPTIONS.contact },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <SiteLayout>
      <PageHero label="Contact" title="Let's Talk About Your Future." subtitle="Reach out today and a Orbix advisor will get back to you within 24 hours." />
      <section className="py-20">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12">
          <div>
            <SectionEyebrow>CONTACT</SectionEyebrow>
            <h2 className="font-display text-3xl text-[var(--navy)] mb-6">Get in Touch</h2>
            <div className="space-y-5">
              {[
                { Icon: Phone, label: "Phone", val: CONTACT_PHONE },
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
                      <>
                        {/* TODO: Confirm final domain email address with client before going live */}
                        <a href={c.href} className="font-semibold text-[var(--navy)] hover:text-[var(--accent-sky)] break-all">
                          {c.val}
                        </a>
                      </>
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
              <div className="text-center py-10">
                <CheckCircle2 className="h-14 w-14 text-[var(--accent-sky)] mx-auto mb-3" />
                <p className="text-[var(--navy)] font-semibold">Thanks! We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e)=>{e.preventDefault();setSubmitted(true);}} className="space-y-3">
                <input required placeholder="Full Name" className="w-full px-4 py-2.5 border border-border rounded-md bg-brand-white" />
                <input required type="email" placeholder="Email" className="w-full px-4 py-2.5 border border-border rounded-md bg-brand-white" />
                <input required type="tel" placeholder="Phone" className="w-full px-4 py-2.5 border border-border rounded-md bg-brand-white" />
                <textarea required rows={5} placeholder="Your message" className="w-full px-4 py-2.5 border border-border rounded-md bg-brand-white resize-none" />
                <button className="btn-primary w-full">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
