import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useModal } from "./modal-store";
import { Counter } from "./Counter";
import {
  ArrowRight, Star, Heart, Users, Briefcase, Plane,
  MapPin, GraduationCap, CheckCircle2, Quote
} from "lucide-react";

/* ---------- SECTION 2: HERO ---------- */
export function Hero() {
  const { setOpen } = useModal();
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.06_263/0.92)] via-[oklch(0.22_0.07_263/0.78)] to-[oklch(0.22_0.07_263/0.55)]" />
      <div className="relative container-px mx-auto max-w-7xl py-24 text-white">
        <span className="label-tag animate-fade-up">Trusted Since 2007</span>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mt-3 leading-[1.05] max-w-4xl animate-fade-up-delay-1">
          150,000+ Happy Smiles <span className="text-[var(--gold)]">and Counting</span>
        </h1>
        <p className="text-base md:text-lg text-white/85 mt-5 max-w-2xl animate-fade-up-delay-2">
          We measure our success by the smiles we put on your faces. Orbix is the most trusted name in Study Abroad and Immigration Services.
        </p>
        <div className="flex flex-wrap gap-3 mt-7 animate-fade-up-delay-3">
          <button onClick={() => setOpen("consultation")} className="btn-gold px-6 py-3.5 rounded-md inline-flex items-center gap-2">
            Book a Free Consultation <ArrowRight className="h-4 w-4" />
          </button>
          <Link to="/services" className="btn-outline-white px-6 py-3.5 rounded-md inline-flex items-center gap-2">
            Explore Services
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl animate-fade-up-delay-3">
          {[
            ["17+","Years Experience"],
            ["150K+","Success Stories"],
            ["100+","Partner Universities"],
            ["99.87%","Success Rate"],
          ].map(([n,l]) => (
            <div key={l} className="border-l-2 border-[var(--gold)] pl-3">
              <div className="font-display text-2xl md:text-3xl text-[var(--gold)] font-bold">{n}</div>
              <div className="text-xs md:text-sm text-white/80">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 3: DESTINATIONS ---------- */
const destinations = [
  { flag:"🇨🇦", name:"Canada", slug:"canada", desc:"Globally recognized institutes, affordable tuition, ample scholarships & work opportunities" },
  { flag:"🇦🇺", name:"Australia", slug:"australia", desc:"Outstanding training facilities, strong student support, abundant scholarships" },
  { flag:"🇳🇿", name:"New Zealand", slug:"new-zealand", desc:"Research-driven, diverse culture, safe study environment, affordable living" },
  { flag:"🇬🇧", name:"UK", slug:"uk", desc:"High employability rankings, multicultural society, strong part-time work opportunities" },
  { flag:"🇫🇷", name:"France", slug:"france", desc:"Hotbed of innovation & research, rich culture, thriving student life" },
  { flag:"🇩🇪", name:"Germany", slug:"germany", desc:"Highly regarded education, low-cost tuition, safe multicultural cities" },
  { flag:"🇵🇱", name:"Poland", slug:"poland", desc:"Well-respected universities, lowest tuition fees and cost of living in Europe" },
];

export function Destinations() {
  return (
    <section className="py-20 bg-[var(--surface)]">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading label="Destinations" title="Choose Your Favourite Study Destination" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
          {destinations.map((d) => (
            <Link key={d.slug} to="/study-abroad/$country" params={{ country: d.slug }}
              className="card-lift bg-white rounded-xl p-6 block">
              <div className="text-5xl mb-3">{d.flag}</div>
              <h3 className="font-display text-2xl text-[var(--navy)] mb-2">{d.name}</h3>
              <p className="text-sm text-muted-foreground">{d.desc}</p>
              <div className="mt-4 text-sm text-[var(--gold)] font-semibold inline-flex items-center gap-1">
                Explore <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 4: STUDY ABROAD SPLIT ---------- */
export function StudyAbroadSplit() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="py-20">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="label-tag">Study Abroad</span>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--navy)] mt-2 leading-tight">
            Open Doors. <span className="text-[var(--gold)]">Expand Horizons.</span>
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            By studying abroad, you gain new perspectives, navigate diverse cultures, work with international peers, and communicate across languages. These skills make you more competitive globally and transform you into a well-rounded citizen of the world.
          </p>
          <Link to="/study-abroad" className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-md mt-6">
            Explore Study Destinations <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-border">
            {[["7","Countries"],["100+","Universities"],["50,000+","Students Placed"]].map(([n,l])=>(
              <div key={l}>
                <div className="font-display text-2xl text-[var(--navy)] font-bold">{n}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/GL-dVRy1OIw" title="Study Abroad" allowFullScreen />
          </div>
          <div className="mt-6 bg-white rounded-xl border border-border p-6 shadow-md">
            <h4 className="font-display text-xl text-[var(--navy)] mb-3">Quick Enquiry</h4>
            {submitted ? (
              <div className="text-sm text-[oklch(0.55_0.15_145)] flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Thanks — we'll reach out within 24 hours.</div>
            ) : (
              <form onSubmit={(e)=>{e.preventDefault();setSubmitted(true);}} className="grid sm:grid-cols-3 gap-2">
                <input required placeholder="Name" className="px-3 py-2 border border-border rounded-md text-sm" />
                <input required type="tel" placeholder="Phone" className="px-3 py-2 border border-border rounded-md text-sm" />
                <select required className="px-3 py-2 border border-border rounded-md text-sm bg-white">
                  <option value="">Qualification</option>
                  <option>Master's / Above</option><option>Degree</option><option>Plus Two / Diploma / Others</option>
                </select>
                <button className="btn-gold col-span-full py-2.5 rounded-md text-sm mt-1">Get Free Assessment</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 5: ELIGIBILITY ---------- */
export function Eligibility() {
  return (
    <section className="py-20 bg-[var(--navy)]">
      <div className="container-px mx-auto max-w-7xl">
        <h2 className="font-display text-4xl md:text-5xl text-white text-center">Calculate Your Eligibility Now</h2>
        <p className="text-white/70 text-center mt-3 max-w-xl mx-auto">Get an instant assessment of your immigration eligibility.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {[
            { flag:"🇦🇺", title:"Australia PR Point Calculator", desc:"Calculate your points for Australia Skilled Migration visas (189/190/491)." },
            { flag:"🇨🇦", title:"Canada PR Point Calculator", desc:"Estimate your CRS score for Canada Express Entry program." },
          ].map(c => (
            <div key={c.title} className="bg-white rounded-xl p-8 border-t-4 border-[var(--gold)] card-lift">
              <div className="text-5xl mb-3">{c.flag}</div>
              <h3 className="font-display text-2xl text-[var(--navy)] mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm mb-5">{c.desc}</p>
              <button className="btn-gold px-5 py-2.5 rounded-md inline-flex items-center gap-2">
                Calculate Now <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 6: MIGRATION PROGRAMS ---------- */
const programs = [
  { name:"Canada Express Entry", flag:"🇨🇦", desc:"Skilled worker pathway to permanent Canadian residency." },
  { name:"Provincial Nominee Program", flag:"🇨🇦", desc:"Immigrate via nomination by a Canadian province or territory." },
  { name:"Australia Subclass 189", flag:"🇦🇺", desc:"Permanent residency for invited skilled workers (Skilled Independent)." },
  { name:"Australia Subclass 190", flag:"🇦🇺", desc:"Permanent residency for state-nominated skilled workers." },
  { name:"Australia Subclass 491", flag:"🇦🇺", desc:"Live and work in regional Australia as a skilled migrant." },
  { name:"Canada Family Sponsorship", flag:"🇨🇦", desc:"Sponsor relatives to live, study and work in Canada." },
];

export function MigrationPrograms() {
  return (
    <section className="py-20 bg-[var(--surface)]">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading label="Migration" title="Choose Your Migration Program" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {programs.map(p => (
            <div key={p.name} className="card-lift bg-white rounded-xl p-7">
              <div className="text-4xl mb-3">{p.flag}</div>
              <h3 className="font-display text-xl text-[var(--navy)] mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
              <Link to="/migration" className="text-sm text-[var(--gold)] font-semibold inline-flex items-center gap-1">
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
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
            Your New Chapter <span className="text-[var(--gold)]">Begins Here.</span>
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            The decision to migrate can be fuelled by career opportunities, better education, improved living standards, or simply the joy of something new. Apart from a whole new direction in life, you'll gain cultural awareness, global perspective, and elevated confidence. Let us guide you through the HOWs.
          </p>
          <Link to="/migration" className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-md mt-6">
            Explore Migration Programs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 8: UNIVERSITY CAROUSEL ---------- */
const universities = [
  "University of Sheffield","University of Leeds","University of Liverpool","University of Essex","Swansea University",
  "University of Winchester","University of Aberdeen","University of Dundee","University of Surrey","Brunel University London",
  "Oxford Brookes University","Warsaw University of Technology","Vistula University Poland","Wroclaw University",
  "Berlin School of Business and Innovation","NEOMA Business School","SKEMA Business School","Thompson Rivers University","Trent University",
];
export function UniversityCarousel() {
  return (
    <section className="py-20 bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading label="Partners" title="Our Partnering Universities" />
      </div>
      <div className="mt-12 overflow-hidden">
        <div className="flex gap-5 animate-marquee-slow w-max">
          {[...universities, ...universities].map((u, i) => (
            <div key={i} className="shrink-0 w-64 h-24 bg-[var(--surface)] border border-border rounded-lg flex items-center justify-center px-4 text-center">
              <span className="text-sm font-semibold text-[var(--navy)] font-display leading-tight">{u}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 9: TESTIMONIALS ---------- */
const testimonials = [
  { name:"Shali", initials:"S", program:"Student Visa", text:"I was lost and clueless just before I met Orbix. They guided me through every step and I couldn't be more grateful. An emotional journey that ended in success!" },
  { name:"Rahul Babu", initials:"RB", program:"MSc Corporate Management, Germany", text:"Extremely happy from initial advice on universities to the final visa. The whole process was smooth and professional. Highly recommended." },
  { name:"Ruth Merin Babu", initials:"RM", program:"Master of Global Public Health, Australia", text:"Wonderful support and follow-up throughout the Australian visa process. Would recommend Orbix to anyone." },
  { name:"Alin Biju", initials:"AB", program:"LLM International Business, UK", text:"With Orbix I achieved my dream. Specialized staff for every process — they made the impossible feel easy." },
  { name:"Geo Mathew Thomas", initials:"GM", program:"PR Visa, Canada", text:"I'd particularly appreciate the efforts of my case officer who followed up on every step. Professional and trustworthy." },
  { name:"Donald Abraham", initials:"DA", program:"PR Visa, Australia", text:"The agency was very cooperative and respectful throughout. A seamless experience from start to finish." },
];

export function Testimonials() {
  const { setOpen } = useModal();
  return (
    <section className="py-20 bg-[var(--surface)]">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading label="Testimonials" title="What Our Clients Say" subtitle="50,000+ Happy Customers. And Counting." />
        <div className="mt-12 overflow-hidden">
          <div className="flex gap-6 animate-marquee w-max">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="shrink-0 w-[340px] md:w-[380px] bg-white rounded-xl p-6 border border-border shadow-sm">
                <Quote className="h-7 w-7 text-[var(--gold)] mb-3" />
                <div className="flex gap-0.5 mb-3">
                  {Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />)}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-4 line-clamp-4">{t.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="h-10 w-10 rounded-full bg-[var(--gold)] text-[var(--navy)] flex items-center justify-center font-bold text-sm">{t.initials}</div>
                  <div>
                    <div className="font-semibold text-[var(--navy)] text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.program}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <button onClick={()=>setOpen("review")} className="btn-outline-navy px-6 py-3 rounded-md">Add Your Review</button>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 10: OTHER SERVICES ---------- */
const otherServices = [
  { name:"Spouse Visa", icon: Heart, desc:"Reunite with your loved one abroad." },
  { name:"Parent Visa", icon: Users, desc:"Bring your parents to join you." },
  { name:"Job Seekers Visa", icon: Briefcase, desc:"Explore opportunities overseas." },
  { name:"Visit Visa", icon: Plane, desc:"Travel the world with ease." },
];
export function OtherServices() {
  return (
    <section className="py-20">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading label="Services" title="Other Services We Offer" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {otherServices.map(s => (
            <div key={s.name} className="card-lift bg-white rounded-xl p-7 text-center">
              <div className="h-14 w-14 rounded-full bg-[var(--gold)]/15 flex items-center justify-center mx-auto mb-4">
                <s.icon className="h-6 w-6 text-[var(--gold)]" />
              </div>
              <h3 className="font-display text-lg text-[var(--navy)] mb-2">{s.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <Link to="/services" className="text-sm text-[var(--gold)] font-semibold">Learn More →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 11: ACHIEVEMENTS ---------- */
export function Achievements() {
  return (
    <section className="py-20 bg-[var(--navy)]">
      <div className="container-px mx-auto max-w-7xl text-center">
        <h2 className="font-display text-4xl md:text-5xl text-white">What We've Achieved</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-12">
          {[
            { n: 17, suffix:"+", l:"Years of Experience" },
            { n: 150000, suffix:"+", l:"Abroad Success Stories" },
            { n: 100, suffix:"+", l:"Affiliated Universities" },
            { n: 2000, suffix:"+", l:"Professional Courses" },
            { n: 99.87, suffix:"%", l:"Success Rate" },
          ].map((s,i)=>(
            <div key={i}>
              <div className="font-display text-4xl md:text-5xl text-[var(--gold)] font-bold">
                <Counter to={s.n} suffix={s.suffix} />
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
            <button onClick={()=>setOpen("consultation")} className="btn-gold px-6 py-3 rounded-md inline-flex items-center gap-2">Book Consultation</button>
            <Link to="/about" className="btn-outline-navy px-6 py-3 rounded-md inline-flex items-center gap-2">Learn About Our Process</Link>
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
    <section className="py-20 bg-[var(--surface)]">
      <div className="container-px mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center">
          <div className="h-64 w-64 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-[var(--gold)]">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" alt="Anup Kannan" className="w-full h-full object-cover" />
          </div>
          <h3 className="font-display text-xl text-[var(--navy)] mt-5">Anup Kannan</h3>
          <div className="text-sm text-muted-foreground">Managing Director</div>
        </div>
        <div>
          <span className="label-tag">Our Leadership</span>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--navy)] mt-2 leading-tight">
            More Than Just Managers — <span className="text-[var(--gold)]">Leaders</span>
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            Unlike most consultancies, you can rest assured that you are entrusting your future to skilled, licensed experts in the immigration field. Our team consists of certified professionals with years of real-world experience.
          </p>
          <Link to="/about" className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-md mt-6">
            Meet the Team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 14: BRAND PROMISE ---------- */
export function BrandPromise() {
  return (
    <section className="py-24 relative overflow-hidden" style={{background:"linear-gradient(135deg, oklch(0.96 0.06 80 / 0.5), white)"}}>
      <Quote className="absolute top-6 left-6 h-32 w-32 text-[var(--gold)]/15" />
      <Quote className="absolute bottom-6 right-6 h-32 w-32 text-[var(--gold)]/15 rotate-180" />
      <div className="container-px mx-auto max-w-3xl text-center relative">
        <span className="label-tag">Our Promise</span>
        <h2 className="font-display text-4xl md:text-6xl text-[var(--navy)] mt-3 leading-tight">
          Hope Builds <span className="text-[var(--gold)] italic">Future</span>
        </h2>
        <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
          Fear never builds the future — hope does. We exist for one thing alone: to take away any fears you might have about your future, and transform them into hope for a brighter tomorrow.
        </p>
      </div>
    </section>
  );
}

/* ---------- SECTION 15: ACCREDITATIONS ---------- */
const accreds = ["MARA Registered","ICCRC Member","OISC Regulated","AIRC Member","NAFSA","ICEF","British Council","Campus France"];
export function Accreditations() {
  return (
    <section className="py-14 bg-white border-b border-border">
      <div className="container-px mx-auto max-w-7xl">
        <h3 className="font-display text-2xl text-[var(--navy)] text-center mb-8">Accreditations & Memberships</h3>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-4 animate-marquee-slow w-max">
          {[...accreds, ...accreds, ...accreds].map((a,i)=>(
            <div key={i} className="shrink-0 px-6 py-3 border border-border rounded-md bg-[var(--surface)] text-sm font-semibold text-[var(--navy)] whitespace-nowrap">{a}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Helper ---------- */
export function SectionHeading({ label, title, subtitle }: { label?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {label && <span className="label-tag">{label}</span>}
      <h2 className="font-display text-3xl md:text-5xl text-[var(--navy)] mt-2 leading-tight">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-3 text-lg">{subtitle}</p>}
    </div>
  );
}