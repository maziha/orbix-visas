import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Orbix Overseas Careers" },
      { name: "description", content: "Get in touch with Orbix for expert advice on study abroad & immigration." },
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
            <h2 className="font-display text-3xl text-[var(--navy)] mb-6">Get in Touch</h2>
            <div className="space-y-5">
              {[
                { Icon: Phone, label: "Phone", val: "+91 8592026134" },
                { Icon: Mail, label: "Email", val: "hello@orbixvisas.com" },
                { Icon: MapPin, label: "Head Office", val: "Kochi, Kerala, India" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-[var(--gold)]/15 flex items-center justify-center shrink-0">
                    <c.Icon className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="font-semibold text-[var(--navy)]">{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[var(--surface)] rounded-2xl p-8 border border-border">
            <h2 className="font-display text-2xl text-[var(--navy)] mb-5">Send us a message</h2>
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="h-14 w-14 text-[var(--gold)] mx-auto mb-3" />
                <p className="text-[var(--navy)] font-semibold">Thanks! We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e)=>{e.preventDefault();setSubmitted(true);}} className="space-y-3">
                <input required placeholder="Full Name" className="w-full px-4 py-2.5 border border-border rounded-md bg-white" />
                <input required type="email" placeholder="Email" className="w-full px-4 py-2.5 border border-border rounded-md bg-white" />
                <input required type="tel" placeholder="Phone" className="w-full px-4 py-2.5 border border-border rounded-md bg-white" />
                <textarea required rows={5} placeholder="Your message" className="w-full px-4 py-2.5 border border-border rounded-md bg-white resize-none" />
                <button className="btn-gold w-full py-3 rounded-md">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
