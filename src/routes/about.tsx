import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { LeadershipTeaser, BrandPromise, Achievements } from "@/components/site/HomeSections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Orbix Overseas Careers" },
      { name: "description", content: "Learn about Orbix — 17+ years of empowering students and professionals to reach their global dreams." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero label="About Us" title="Built on Trust. Driven by Hope." subtitle="For over 17 years, Orbix has been turning aspirations into achievements — one happy smile at a time." />
      <section className="py-20">
        <div className="container-px mx-auto max-w-4xl prose-lg space-y-6 text-foreground">
          <h2 className="font-display text-3xl text-[var(--navy)]">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">Orbix was founded with one mission — to be the trusted bridge between Indian aspirants and global opportunities. Today, we are proud to have helped more than 150,000 students and professionals find their place in the world.</p>
          <h2 className="font-display text-3xl text-[var(--navy)] mt-8">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">We exist to take away the fear, complexity, and confusion of moving abroad — replacing it with clarity, confidence, and hope.</p>
        </div>
      </section>
      <Achievements />
      <LeadershipTeaser />
      <BrandPromise />
    </SiteLayout>
  );
}
