import { Link } from "@tanstack/react-router";
import { useModal } from "./modal-store";
import { MigrationProgramsSection } from "./MigrationProgramsSection";
import { MigrationProgramSections } from "./MigrationProgramSections";
import { SectionHeading } from "./SectionHeading";
import { SectionEyebrow } from "./SectionEyebrow";

export { SectionHeading } from "./SectionHeading";
export { SectionEyebrow } from "./SectionEyebrow";
import { Counter } from "./Counter";
import { CountryFlag } from "./CountryFlag";
import { DestinationsSection } from "./DestinationsSection";
import { EnquiryFormSection } from "./EnquiryFormSection";
import { FamilyVisaHighlightSection } from "./FamilyVisaHighlightSection";
import { OtherServicesTableSection } from "./OtherServicesTableSection";
import { StudyAbroadCountriesSection } from "./StudyAbroadCountriesSection";
import { WhyOrbixClosingSection } from "./WhyOrbixClosingSection";
import { consultationClosingCta } from "@/lib/closing-cta-presets";
import { COMPANY_NAME_SHORT, CONTACT_PHONES } from "@/lib/contact-info";
import { ClosingCtaPanel, type ClosingCtaPanelProps } from "./ClosingCtaPanel";
import { ContactPhoneAvatar } from "./ContactPhoneAvatar";
import {
  ArrowRight, Star, Heart, Users, Briefcase, Plane,
  MapPin, GraduationCap, CheckCircle2
} from "lucide-react";

/* ---------- SECTION 2: HERO ---------- */
export { Hero } from "./Hero";

/* ---------- BRINGING FAMILY OVERSEAS ---------- */
export function BringingFamilyOverseas() {
  return <FamilyVisaHighlightSection />;
}

/* ---------- SECTION 3: DESTINATIONS ---------- */
export function Destinations() {
  return <DestinationsSection />;
}

/* ---------- SECTION 5: STUDY ABROAD (country list) ---------- */
export function StudyAbroadSplit() {
  return <StudyAbroadCountriesSection />;
}

/* ---------- SECTION 6: ENQUIRY FORM ---------- */
export { EnquiryFormSection };

/* ---------- SECTION 5: ELIGIBILITY ---------- */
export function Eligibility() {
  const { openConsultation } = useModal();
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
            <div key={c.title} className="eligibility-card card-base bg-brand-white rounded-xl p-8">
              <CountryFlag code={c.countryCode} size="lg" title={c.title} className="mb-3" />
              <h3 className="font-display text-2xl text-[var(--navy)] mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm mb-5">{c.desc}</p>
              <button
                type="button"
                onClick={() =>
                  openConsultation({ goal: "migrate", migrateCountry: "Canada", headline: "Canada PR consultation" })
                }
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
export function MigrationPrograms() {
  return <MigrationProgramsSection />;
}

export { MigrationProgramSections };

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
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return <BrandPromise {...consultationClosingCta(title, subtitle)} />;
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

/* ---------- SECTION 7: OTHER SERVICES (table) ---------- */
export function OtherServices() {
  return <OtherServicesTableSection />;
}

/* ---------- WHY ORBIX + CLOSING CTA (homepage) ---------- */
export function Achievements() {
  return <WhyOrbixClosingSection />;
}

/* ---------- SECTION 12: CHOOSING FUTURE ---------- */
export function ChoosingFuture() {
  const { openConsultation } = useModal();
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
            <button type="button" onClick={() => openConsultation()} className="btn-primary">
              Book a Consultation
            </button>
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
export function LeadershipTeaser() {
  return (
    <section className="py-20 bg-brand-subtle">
      <div className="container-px mx-auto max-w-4xl flex flex-col items-center text-center gap-8">
        <div>
          <SectionEyebrow>OUR LEADERSHIP</SectionEyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--navy)] leading-tight mt-2">
            Meet Our Directors
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mt-4">
            Alen and Dona lead {COMPANY_NAME_SHORT}&apos;s counsellor team in Vyttila — guiding students and
            families on study abroad, PR, and reunification pathways with clear, honest advice.
          </p>
        </div>

        <ul className="leadership-directors-grid w-full">
          {CONTACT_PHONES.map((director) => (
            <li key={director.tel} className="leadership-director-card">
              <ContactPhoneAvatar phone={director} size="lg" showBadge={false} />
              <div className="leadership-director-card__copy">
                <h3 className="font-display text-xl text-[var(--navy)]">{director.name}</h3>
                <p className="text-sm font-semibold text-[var(--accent-sky)]">{director.role}</p>
                <p className="text-sm text-muted-foreground mt-1">{director.display}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- CLOSING CTA (inner pages) ---------- */
export function BrandPromise(props: ClosingCtaPanelProps = {}) {
  return (
    <section className="bg-brand-white py-12 md:py-16">
      <div className="container-px mx-auto max-w-7xl">
        <ClosingCtaPanel {...props} />
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
