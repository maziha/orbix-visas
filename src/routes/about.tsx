import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { LeadershipTeaser, Achievements, SectionEyebrow } from "@/components/site/HomeSections";
import { headForPage } from "@/lib/site-meta";

export const Route = createFileRoute("/about")({
  head: () => headForPage("about"),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero label="About Us" title="Built on Trust. Driven by Hope." subtitle="A new consultancy focused on clear guidance, honest advice, and support you can count on." />
      <section className="py-20">
        <div className="container-px mx-auto max-w-4xl prose-lg space-y-6 text-foreground">
          <SectionEyebrow>ABOUT US</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)]">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">Orbix Overseas Careers was founded with one mission — to be a trusted bridge between Indian aspirants and global opportunities. We are building our practice on transparency, careful preparation, and counsellors who take the time to understand your goals before recommending a path forward.</p>
          <SectionEyebrow className="mt-8">OUR MISSION</SectionEyebrow>
          <h2 className="font-display text-3xl text-[var(--navy)]">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">We exist to take away the fear, complexity, and confusion of moving abroad — replacing it with clarity, confidence, and hope.</p>
        </div>
      </section>
      <LeadershipTeaser />
      <Achievements />
    </SiteLayout>
  );
}
