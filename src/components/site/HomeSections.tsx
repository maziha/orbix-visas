import { Link } from "@tanstack/react-router";
import { useModal } from "./modal-store";
import { QuickEnquiryForm } from "./QuickEnquiryForm";
import { migrationProgramGroups } from "./migration-programs";
import { homepageOtherServices } from "./services-data";
import { SectionHeading } from "./SectionHeading";
import { SectionEyebrow } from "./SectionEyebrow";

export { SectionHeading } from "./SectionHeading";
export { SectionEyebrow } from "./SectionEyebrow";
import { Counter } from "./Counter";
import { CountryFlag } from "./CountryFlag";
import { COUNTRIES } from "@/lib/countries";
import {
  ArrowRight, Star, Heart, Users, Briefcase, Plane,
  MapPin, GraduationCap, CheckCircle2
} from "lucide-react";

/* ---------- SECTION 2: HERO ---------- */
export { HeroCarousel as Hero } from "./HeroCarousel";

/* ---------- BRINGING FAMILY OVERSEAS ---------- */
export function BringingFamilyOverseas() {
  const { setOpen } = useModal();
  const familyVisas = ["Spouse Visa", "Parent Visa", "Student Dependent Visa"];

  return (
    <section className="py-20 bg-brand-subtle">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="VISA SERVICES" title="Bringing Family Overseas" />
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <h3 className="font-display text-3xl md:text-4xl text-[var(--navy)] leading-tight">
              Spouse Visa & Family Reunification
            </h3>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Reunite with your spouse, parents, or dependents abroad with clear guidance on eligibility,
              documentation, and timelines.
            </p>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Our counsellors walk you through each step so you know what to expect before you apply.
            </p>
            <button
              type="button"
              onClick={() => setOpen("consultation")}
              className="btn-primary mt-6"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <ul className="space-y-4">
            {familyVisas.map((visa) => (
              <li key={visa} className="flex items-center gap-3 text-[var(--navy)] font-medium">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--accent-sky)]" />
                <span>{visa}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 3: DESTINATIONS ---------- */
const destinations = COUNTRIES.map((c) => ({
  ...c,
  hasMigration: c.slug === "canada" || c.slug === "australia",
  desc:
    c.slug === "canada"
      ? "Globally recognized institutes, affordable tuition, ample scholarships & work opportunities"
      : c.slug === "australia"
        ? "Outstanding training facilities, strong student support, abundant scholarships"
        : c.slug === "new-zealand"
          ? "Research-driven, diverse culture, safe study environment, affordable living"
          : c.slug === "uk"
            ? "High employability rankings, multicultural society, strong part-time work opportunities"
            : c.slug === "france"
              ? "Hotbed of innovation & research, rich culture, thriving student life"
              : c.slug === "germany"
                ? "Highly regarded education, low-cost tuition, safe multicultural cities"
                : "Well-respected universities, lowest tuition fees and cost of living in Europe",
}));

export function Destinations() {
  return (
    <section className="py-20 bg-brand-subtle">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="EXPLORE DESTINATIONS" title="Explore Destinations" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
          {destinations.map((d) => (
            <div key={d.slug} className="card-lift bg-brand-white rounded-xl p-6 flex flex-col">
              <CountryFlag code={d.code} size="lg" title={d.name} className="mb-3" />
              <h3 className="font-display text-2xl text-[var(--navy)] mb-2">{d.name}</h3>
              <p className="text-sm text-muted-foreground flex-1">{d.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Link
                  to="/study-abroad/$country"
                  params={{ country: d.slug }}
                  className="destination-pill"
                >
                  Study
                </Link>
                {d.hasMigration && (
                  <Link
                    to="/migration/$program"
                    params={{ program: `${d.slug}-pr` }}
                    className="destination-pill"
                  >
                    PR / Migration
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 4: STUDY ABROAD SPLIT ---------- */
export function StudyAbroadSplit() {
  return (
    <section className="py-20">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        <div>
          <SectionEyebrow>STUDY ABROAD</SectionEyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--navy)] leading-tight">
            Open Doors. <span className="heading-accent">Expand Horizons.</span>
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            By studying abroad, you gain new perspectives, navigate diverse cultures, work with international peers, and communicate across languages. These skills make you more competitive globally and transform you into a well-rounded citizen of the world.
          </p>
          <Link to="/study-abroad" className="btn-secondary mt-6">
            Explore Study Destinations <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-[color-mix(in_srgb,var(--accent-sky)_35%,var(--border))]">
            {[["7","Countries We Cover"],["1-on-1","Expert Counselling"]].map(([n,l])=>(
              <div key={l}>
                <div className="font-display text-2xl text-[var(--accent-sky)] font-bold">{n}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{l}</div>
              </div>
            ))}
            {/* [["100+","Universities"],["50,000+","Students Placed"]] — enable when partnerships/placements are live */}
          </div>
        </div>
        <div className="lg:sticky lg:top-24 space-y-6">
          <div>
            <h3 className="font-display text-2xl text-[var(--color-bg-dark)] leading-tight">
              See How Our Process Works
            </h3>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              From your first consultation to landing abroad — here&apos;s what the Orbix journey looks like.
            </p>
            {/* TODO: Confirm video relevance with client before going live.
                Prior embed was a generic study-abroad promo, not the Orbix process.
                If the client provides a process walkthrough video, add it here above the form. */}
          </div>
          <div className="bg-brand-white rounded-xl border border-border p-6 sm:p-8 shadow-md">
            <QuickEnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 5: ELIGIBILITY ---------- */
export function Eligibility() {
  const { setOpen } = useModal();
  return (
    <section className="py-20 bg-brand-dark">
      <div className="container-px mx-auto max-w-7xl">
        <SectionEyebrow tone="dark" className="mx-auto block w-fit text-center">
          ELIGIBILITY
        </SectionEyebrow>
        <h2 className="font-display text-4xl md:text-5xl text-white text-center">Calculate Your Eligibility Now</h2>
        <p className="text-white/70 text-center mt-3 max-w-xl mx-auto">Get an instant assessment of your immigration eligibility.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {[
            { countryCode: "AU" as const, title:"Australia PR Point Calculator", desc:"Calculate your points for Australia Skilled Migration visas (189/190/491)." },
            { countryCode: "CA" as const, title:"Canada PR Point Calculator", desc:"Estimate your CRS score for Canada Express Entry program." },
          ].map(c => (
            <div key={c.title} className="eligibility-card bg-brand-white rounded-xl p-8 card-lift">
              <CountryFlag code={c.countryCode} size="lg" title={c.title} className="mb-3" />
              <h3 className="font-display text-2xl text-[var(--navy)] mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm mb-5">{c.desc}</p>
              <button
                type="button"
                onClick={() => setOpen("consultation")}
                className="btn-primary inline-flex items-center gap-2"
              >
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 6: MIGRATION PROGRAMS ---------- */
function MigrationProgramGroupLabel({ label }: { label: string }) {
  return <h3 className="program-group-label">{label}</h3>;
}

export function MigrationPrograms() {
  return (
    <section className="py-20 bg-brand-subtle">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="MIGRATION" title="Migrate & Get Permanent Residency" />
        <div className="mt-12 space-y-14">
          {migrationProgramGroups.map((group) => (
            <div key={group.label}>
              <MigrationProgramGroupLabel label={group.label} />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {group.programs.map((p) => (
                  <div key={p.id} className="card-lift migration-program-card bg-brand-white rounded-xl p-7 flex flex-col h-full">
                    <CountryFlag code={p.countryCode} size="md" title={p.name} className="mb-3" />
                    <h3 className="font-display text-xl text-[var(--navy)] mb-2">{p.name}</h3>
                    <p className="text-muted-foreground text-sm flex-1">{p.desc}</p>
                    <Link to="/migration" hash={p.id} className="btn-secondary mt-6 self-start">
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Anchored program sections for /migration */
export function MigrationProgramSections() {
  return (
    <section className="py-20 bg-brand-subtle">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="MIGRATION"
          title="Migrate & Get Permanent Residency"
          align="left"
          className="max-w-none"
        />
        <div className="mt-12 space-y-16">
        {migrationProgramGroups.map((group) => (
          <div key={group.label}>
            <MigrationProgramGroupLabel label={group.label} />
            <div className="mt-8 space-y-6">
              {group.programs.map((p) => (
                <article
                  key={p.id}
                  id={p.id}
                  className="scroll-mt-28 content-card-accent bg-brand-white rounded-xl border border-border p-8 md:p-10"
                >
                  <CountryFlag code={p.countryCode} size="lg" title={p.name} className="mb-3" />
                  <h2 className="font-display text-2xl md:text-3xl text-[var(--navy)] mb-3">{p.name}</h2>
                  <p className="text-muted-foreground leading-relaxed max-w-3xl">{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 7: MIGRATION SPLIT ---------- */
export function MigrationSplit() {
  return (
    <section className="py-20">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="label-tag">Migration</span>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--navy)] mt-2 leading-tight">
            Your New Chapter <span className="heading-accent">Begins Here.</span>
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            The decision to migrate can be fuelled by career opportunities, better education, improved living standards, or simply the joy of something new. Apart from a whole new direction in life, you'll gain cultural awareness, global perspective, and elevated confidence. Let us guide you through the HOWs.
          </p>
          <Link to="/migration" className="btn-secondary mt-6">
            Explore Migration Programs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 8: UNIVERSITY CAROUSEL (enable when partner universities are confirmed) ----------
const universities = [
  "University of Sheffield","University of Leeds","University of Liverpool","University of Essex","Swansea University",
  "University of Winchester","University of Aberdeen","University of Dundee","University of Surrey","Brunel University London",
  "Oxford Brookes University","Warsaw University of Technology","Vistula University Poland","Wroclaw University",
  "Berlin School of Business and Innovation","NEOMA Business School","SKEMA Business School","Thompson Rivers University","Trent University",
];
export function UniversityCarousel() {
  return (
    <section className="py-20 bg-brand-white">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading label="Partners" title="Our Partnering Universities" />
      </div>
      <div className="mt-12 overflow-hidden">
        <div className="flex gap-5 animate-marquee-slow w-max">
          {[...universities, ...universities].map((u, i) => (
            <div key={i} className="shrink-0 w-64 h-24 bg-brand-subtle border border-border rounded-lg flex items-center justify-center px-4 text-center">
              <span className="text-sm font-semibold text-[var(--navy)] font-display leading-tight">{u}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
---------- */

/* ---------- SECTION 9: TESTIMONIALS (enable when client stories are available) ----------
const testimonials = [
  { name:"Shali", initials:"S", program:"Student Visa", text:"I was lost and clueless just before I met Orbix. They guided me through every step and I couldn't be more grateful. An emotional journey that ended in success!" },
  { name:"Rahul Babu", initials:"RB", program:"MSc Corporate Management, Germany", text:"Extremely happy from initial advice on universities to the final visa. The whole process was smooth and professional. Highly recommended." },
  { name:"Ruth Merin Babu", initials:"RM", program:"Master of Global Public Health, Australia", text:"Wonderful support and follow-up throughout the Australian visa process. Would recommend Orbix to anyone." },
  { name:"Alin Biju", initials:"AB", program:"LLM International Business, UK", text:"With Orbix I achieved my dream. Specialized staff for every process — they made the impossible feel easy." },
  { name:"Geo Mathew Thomas", initials:"GM", program:"PR Visa, Canada", text:"I'd particularly appreciate the efforts of my case officer who followed up on every step. Professional and trustworthy." },
  { name:"Donald Abraham", initials:"DA", program:"PR Visa, Australia", text:"The agency was very cooperative and respectful throughout. A seamless experience from start to finish." },
];
---------- */

export function ConsultationCta({
  title = "Ready to Take the Next Step?",
  subtitle = "Speak with our counsellors for a no-obligation session. We will help you understand your options for study abroad or migration and build a clear plan forward.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const { setOpen } = useModal();
  return (
    <section className="py-20 bg-brand-subtle">
      <div className="container-px mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl md:text-5xl text-[var(--navy)] leading-tight">{title}</h2>
        <p className="text-muted-foreground mt-4 text-lg leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mt-8">
          <button
            type="button"
            onClick={() => setOpen("consultation")}
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            Book a Consultation <ArrowRight className="h-4 w-4" />
          </button>
          <Link to="/contact" className="btn-secondary inline-flex items-center justify-center gap-2">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

/** @deprecated Use ConsultationCta — kept as alias until testimonials content exists */
export function Testimonials() {
  return <ConsultationCta />;
}

/*
export function TestimonialsOriginal() {
  ... marquee testimonials + Add Your Review ...
}
*/

/* ---------- SECTION 10: OTHER SERVICES ---------- */
export function OtherServices() {
  return (
    <section className="py-20">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="OTHER SERVICES" title="Other Services We Offer" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {homepageOtherServices.map((s) => {
            const Icon = s.icon;
            return (
            <div key={s.id} className="card-lift bg-brand-white rounded-xl p-7 text-center flex flex-col h-full">
              <div className="icon-well-accent h-14 w-14 rounded-full mx-auto mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg text-[var(--navy)] mb-2">{s.name}</h3>
              <p className="text-sm text-muted-foreground flex-1">{s.desc}</p>
              <Link to="/services" hash={s.id} className="btn-secondary mt-6 self-center">
                Learn More →
              </Link>
            </div>
            );
          })}
        </div>
        <OtherServicesCta />
      </div>
    </section>
  );
}

function OtherServicesCta() {
  const { setOpen } = useModal();
  return (
    <div className="text-center mt-12">
      <p className="text-muted-foreground mb-4">Not sure which service fits your situation?</p>
      <button type="button" onClick={() => setOpen("consultation")} className="btn-primary inline-flex items-center gap-2">
        Book a Consultation <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

/* ---------- SECTION 11: ACHIEVEMENTS ---------- */
export function Achievements() {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="container-px mx-auto max-w-7xl text-center">
        <SectionEyebrow tone="dark">WHY ORBIX</SectionEyebrow>
        <h2 className="font-display text-4xl md:text-5xl text-white">Why Choose Orbix</h2>
        <p className="text-white/75 mt-4 max-w-2xl mx-auto text-lg">Personal guidance built around your goals — honest advice from day one.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {[
            { display: "7", l: "Study Destinations" },
            { display: "2", l: "PR Pathways" },
            { display: "Full", l: "Visa Guidance" },
            { display: "1-on-1", l: "Counsellor Support" },
          ].map((s,i)=>(
            <div key={i}>
              <div className="font-display text-4xl md:text-5xl text-[var(--accent-sky)] font-bold">
                {s.display}
              </div>
              <div className="text-xs md:text-sm text-white/75 mt-2 uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 12: CHOOSING FUTURE ---------- */
export function ChoosingFuture() {
  const { setOpen } = useModal();
  return (
    <section className="py-20">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="label-tag">Your Journey</span>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--navy)] mt-2 leading-tight">Choosing Your Future</h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            Choosing your future is the most important decision you'll ever make. And you need the right partner to navigate the challenging landscape. Whether you want to study, work, or obtain permanent residency — Orbix is someone you can trust. We anticipate your needs even before you do.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <button onClick={()=>setOpen("consultation")} className="btn-primary">Book a Consultation</button>
            <Link to="/about" className="btn-secondary">Learn About Our Process</Link>
          </div>
        </div>
        <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=900&q=80" alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 13: LEADERSHIP ---------- */
function LeadershipInitialsAvatar({ initials }: { initials: string }) {
  return (
    <div
      className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand-dark text-[28px] font-semibold leading-none text-white"
      role="img"
      aria-label={`${initials} — photo placeholder`}
    >
      {initials}
    </div>
  );
}

export function LeadershipTeaser() {
  return (
    <section className="py-20 bg-brand-subtle">
      <div className="container-px mx-auto max-w-2xl flex flex-col items-center text-center gap-5">
        <SectionEyebrow>OUR LEADERSHIP</SectionEyebrow>
        <h2 className="font-display text-4xl md:text-5xl text-[var(--navy)] leading-tight">
          Our Leadership
        </h2>

        {/* TODO: Replace with real photo before launch - coordinate with client */}
        <LeadershipInitialsAvatar initials="AK" />

        <div className="flex flex-col items-center gap-1">
          <h3 className="font-display text-xl text-[var(--navy)]">Anup Kannan</h3>
          <p className="text-sm text-muted-foreground">Managing Director</p>
          {/* TODO: Confirm credentials copy with client before launch */}
          <p className="text-sm text-muted-foreground leading-relaxed max-w-md mt-2">
            Certified immigration consultant with expertise in Canadian and Australian migration pathways.
          </p>
        </div>

        <Link to="/about" className="btn-secondary mt-2">
          Meet the Team <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

/* ---------- FULL-WIDTH CTA STRIP (replaces Brand Promise) ---------- */
export function BrandPromise() {
  const { setOpen } = useModal();

  return (
    <section className="cta-strip w-full">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="cta-strip__title font-display">Ready to take the first step?</h2>
        <p className="cta-strip__text max-w-xl">
          Speak with a counsellor — no obligation, available 6 days a week from Kochi.
        </p>
        <div className="cta-strip__actions">
          <button
            type="button"
            onClick={() => setOpen("consultation")}
            className="btn-cta-strip-primary"
          >
            Book a Consultation
          </button>
          <a
            href="https://wa.me/918592026134"
            target="_blank"
            rel="noreferrer"
            className="btn-cta-strip-secondary"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 15: ACCREDITATIONS (enable when memberships are confirmed) ----------
const accreds = ["MARA Registered","ICCRC Member","OISC Regulated","AIRC Member","NAFSA","ICEF","British Council","Campus France"];
export function Accreditations() {
  return (
    <section className="py-14 bg-brand-white border-b border-border">
      <div className="container-px mx-auto max-w-7xl">
        <h3 className="font-display text-2xl text-[var(--navy)] text-center mb-8">Accreditations & Memberships</h3>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-4 animate-marquee-slow w-max">
          {[...accreds, ...accreds, ...accreds].map((a,i)=>(
            <div key={i} className="shrink-0 px-6 py-3 border border-border rounded-md bg-brand-subtle text-sm font-semibold text-[var(--navy)] whitespace-nowrap">{a}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
---------- */
