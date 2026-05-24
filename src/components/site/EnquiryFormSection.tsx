import { Clock, MapPin, ShieldCheck } from "lucide-react";
import { QuickEnquiryForm } from "./QuickEnquiryForm";
import { SectionEyebrow } from "./SectionEyebrow";

const TRUST_POINTS = [
  { icon: Clock, text: "We reply within 24 hours" },
  { icon: ShieldCheck, text: "Free first consultation" },
  { icon: MapPin, text: "Counsellors based in Kochi" },
] as const;

export function EnquiryFormSection() {
  return (
    <section className="home-enquiry-section bg-brand-subtle py-16 md:py-24" id="enquiry">
      <div className="container-px mx-auto max-w-7xl">
        <div className="home-enquiry-panel overflow-hidden rounded-2xl border border-[#e4e8f0] bg-brand-white shadow-[0_12px_40px_rgb(4_1_117_/0.06)]">
          <div className="grid lg:grid-cols-[minmax(17rem,34%)_1fr]">
            <aside className="home-enquiry-panel__aside bg-brand-dark px-7 py-10 md:px-9 md:py-12">
              <SectionEyebrow tone="dark">GET STARTED</SectionEyebrow>
              <h2 className="mt-3 font-display text-2xl md:text-[1.75rem] font-bold leading-tight text-white">
                Not sure where to start?
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/75">
                Tell us your goal — migration, study abroad, or family visa — and we will map out a
                clear next step for you.
              </p>
              <ul className="mt-8 space-y-4">
                {TRUST_POINTS.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-white/85">
                    <span
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10"
                      aria-hidden
                    >
                      <Icon className="h-4 w-4 text-[var(--accent-sky)]" />
                    </span>
                    <span className="leading-snug pt-1">{text}</span>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="home-enquiry-panel__form min-w-0 px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
              <QuickEnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
