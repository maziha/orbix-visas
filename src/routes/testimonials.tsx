import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { ConsultationCta } from "@/components/site/HomeSections";
import { useModal } from "@/components/site/modal-store";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Get Started — Orbix Overseas Careers" },
      { name: "description", content: "Book a free consultation with Orbix for study abroad and immigration guidance." },
    ],
  }),
  component: Page,
});

function Page() {
  const { setOpen } = useModal();
  return (
    <SiteLayout>
      <PageHero
        label="Get Started"
        title="Let's Plan Your Next Chapter"
        subtitle="We're a new consultancy building our reputation on honest advice and dedicated support — starting with yours."
      />
      <section className="py-16">
        <div className="container-px mx-auto max-w-3xl text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Client stories will be shared here as we grow. In the meantime, book a free consultation and our team will walk you through study abroad and migration options tailored to your profile.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mt-8">
            <button
              type="button"
              onClick={() => setOpen("consultation")}
              className="btn-gold px-8 py-3.5 rounded-md inline-flex items-center justify-center gap-2"
            >
              Book a Free Consultation <ArrowRight className="h-4 w-4" />
            </button>
            <Link to="/contact" className="btn-outline-navy px-8 py-3.5 rounded-md inline-flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <ConsultationCta />
    </SiteLayout>
  );
}
