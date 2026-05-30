import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { ContactSentenceForm } from "@/components/site/enquiry/ContactSentenceForm";
import { Phone, Mail, MapPin } from "lucide-react";
import { BrandPromise } from "@/components/site/HomeSections";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { ContactPhoneLinksList } from "@/components/site/ContactPhoneLinks";
import { HoverLift, Reveal, RevealItem, RevealStagger } from "@/components/motion";
import { springGentle } from "@/lib/motion/presets";
import {
  COMPANY_ADDRESS,
  COMPANY_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  GSTIN,
} from "@/lib/contact-info";
import { headForPage } from "@/lib/site-meta";

export const Route = createFileRoute("/_site/contact")({
  head: () => headForPage("contact"),
  component: Contact,
});

const contactRows = [
  { key: "phone", icon: Phone, label: "Phone — call or WhatsApp", content: "phones" as const },
  { key: "email", icon: Mail, label: "Email", content: "email" as const },
  { key: "address", icon: MapPin, label: "Head Office", content: "address" as const },
  { key: "gst", icon: null, label: "GSTIN", content: "gst" as const },
];

function Contact() {
  const reduced = useReducedMotion();

  return (
    <>
      <PageHero
        label="Contact"
        title="Let's Talk About Your Future."
        subtitle={`Reach out today and an ${COMPANY_NAME} advisor will get back to you within 24 hours.`}
      />
      <section className="py-20">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12">
          <div>
            <Reveal>
              <SectionEyebrow>CONTACT</SectionEyebrow>
              <h2 className="font-display text-3xl text-[var(--navy)] mb-6">Get in Touch</h2>
            </Reveal>
            <RevealStagger className="space-y-5">
              {contactRows.map((row) => {
                const Icon = row.icon;
                return (
                  <RevealItem key={row.key}>
                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={reduced ? undefined : { x: 6 }}
                      transition={springGentle}
                    >
                      <motion.div
                        className="icon-well-accent h-12 w-12 rounded-full shrink-0 flex items-center justify-center"
                        whileHover={reduced ? undefined : { scale: 1.1, rotate: 5 }}
                      >
                        {Icon ? (
                          <Icon className="h-5 w-5" />
                        ) : (
                          <span className="text-xs font-bold text-[var(--navy)]">GST</span>
                        )}
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                          {row.label}
                        </div>
                        {row.content === "phones" && <ContactPhoneLinksList variant="contact" />}
                        {row.content === "email" && (
                          <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="font-semibold text-[var(--navy)] hover:text-[var(--accent-sky)] break-all"
                          >
                            {CONTACT_EMAIL}
                          </a>
                        )}
                        {row.content === "address" && (
                          <p className="font-semibold text-[var(--navy)] leading-relaxed">
                            {COMPANY_ADDRESS}
                          </p>
                        )}
                        {row.content === "gst" && (
                          <p className="font-semibold text-[var(--navy)]">{GSTIN}</p>
                        )}
                      </div>
                    </motion.div>
                  </RevealItem>
                );
              })}
            </RevealStagger>
          </div>

          <HoverLift className="bg-brand-subtle rounded-2xl p-8 border border-border">
            <h2 className="font-display text-2xl text-[var(--navy)] mb-2">Send us a message</h2>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Complete the sentences below — it only takes a minute.
            </p>
            <ContactSentenceForm />
            <a href={`tel:${CONTACT_PHONE_TEL}`} className="contact-form-call-link mt-4 inline-block">
              Or call us directly — {CONTACT_PHONE}
            </a>
          </HoverLift>
        </div>
      </section>
      <BrandPromise />
    </>
  );
}
