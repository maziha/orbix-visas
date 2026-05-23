import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { ConsultationCta } from "@/components/site/HomeSections";
import { Heart, Users, Briefcase, Plane, GraduationCap, Languages, Award, Wallet, Home } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Orbix Overseas Careers" },
      { name: "description", content: "Comprehensive visa, language training, and post-landing services from Orbix." },
    ],
  }),
  component: Services,
});

const visa = [
  { name: "Spouse Visa", icon: Heart, desc: "Reunite with your loved one abroad through expert-guided spouse visa processing." },
  { name: "Parent Visa", icon: Users, desc: "Bring your parents to join you in your new country with our parent visa services." },
  { name: "Job Seekers Visa", icon: Briefcase, desc: "Explore global opportunities with a job seekers visa." },
  { name: "Visit Visa", icon: Plane, desc: "Travel the world hassle-free with our streamlined visit visa processing." },
  { name: "Student Dependent Visa", icon: GraduationCap, desc: "Take your family with you while you study abroad." },
];
const other = [
  { name: "Language Training", icon: Languages, desc: "IELTS, PTE, TOEFL and more — taught by certified trainers." },
  { name: "IELTS Test Booking", icon: Award, desc: "Quick & easy IELTS slot bookings across India." },
  { name: "Loan Assistance", icon: Wallet, desc: "Education and migration loan support with leading banks." },
  { name: "Post Landing Services", icon: Home, desc: "Accommodation, SIM, bank account & airport pickup support." },
];

function Services() {
  return (
    <SiteLayout>
      <PageHero label="Services" title="Everything You Need, Under One Roof." subtitle="From your first counselling session to your post-landing settlement — we are with you at every step." />
      <section className="py-20">
        <div className="container-px mx-auto max-w-7xl">
          <h2 id="family-visa" className="font-display text-3xl text-[var(--navy)] mb-2 scroll-mt-24">
            Visa Services
          </h2>
          <p className="text-muted-foreground text-sm mt-1 mb-2">
            Spouse, parent, dependent, and other family reunification pathways.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {visa.map(s => (
              <div key={s.name} className="card-lift bg-white rounded-xl p-6">
                <s.icon className="h-8 w-8 text-[var(--gold)] mb-3" />
                <h3 className="font-display text-xl text-[var(--navy)] mb-2">{s.name}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <h2 className="font-display text-3xl text-[var(--navy)] mt-16 mb-2">Other Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
            {other.map(s => (
              <div key={s.name} className="card-lift bg-white rounded-xl p-6">
                <s.icon className="h-8 w-8 text-[var(--gold)] mb-3" />
                <h3 className="font-display text-lg text-[var(--navy)] mb-2">{s.name}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ConsultationCta />
    </SiteLayout>
  );
}
