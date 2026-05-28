import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { ContactSentenceForm } from "@/components/site/enquiry/ContactSentenceForm";
import { Phone, Mail, MapPin } from "lucide-react";
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

export const Route = createFileRoute("/contact")({
  head: () => headForPage("contact"),
  component: Contact,
});

function Contact() {
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
            <h2 className="font-display text-2xl text-[var(--navy)] mb-2">Send us a message</h2>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Complete the sentences below — it only takes a minute.
            </p>
            <ContactSentenceForm />
            <a href={`tel:${CONTACT_PHONES[0].tel}`} className="contact-form-call-link mt-4 inline-block">
              Or call us directly — {CONTACT_PHONES.map((p) => p.display).join(" · ")}
            </a>
          </div>
        </div>
      </section>
      <BrandPromise />
    </SiteLayout>
  );
}
