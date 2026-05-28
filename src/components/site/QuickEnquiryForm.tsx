import { useId, useState } from "react";
import { CheckCircle2, GraduationCap, Heart, Plane } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useSubmitEnquiry } from "@/hooks/use-submit-enquiry";
import { CONTACT_PHONES, whatsAppUrlFor } from "@/lib/contact-info";

type Goal = "migrate" | "study" | "family";

type GoalOption = {
  value: Goal;
  label: string;
  description: string;
  icon: LucideIcon;
};

const goalOptions: GoalOption[] = [
  {
    value: "migrate",
    label: "Migrate / Get PR",
    description: "Canada & Australia pathways",
    icon: Plane,
  },
  {
    value: "study",
    label: "Study Abroad",
    description: "7 destination countries",
    icon: GraduationCap,
  },
  {
    value: "family",
    label: "Family Visa",
    description: "Spouse, parent & dependent",
    icon: Heart,
  },
];

const studyCountries = [
  "Canada",
  "Australia",
  "New Zealand",
  "UK",
  "France",
  "Germany",
  "Poland",
];

const familyVisaTypes = ["Spouse Visa", "Parent Visa", "Student Dependent Visa"];

const migrateCountries = ["Canada", "Australia", "Other"];

const inputClass =
  "w-full px-3.5 py-2.5 border border-[#e4e8f0] rounded-lg text-sm bg-brand-white text-[#1A1A2E] placeholder:text-[#1A1A2E]/45 focus:outline-none focus:ring-2 focus:ring-[var(--accent-sky)]/40 focus:border-[var(--accent-sky)]";

const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--navy)]";

type FormState = {
  name: string;
  whatsapp: string;
  migrateCountry: string;
  studyCountry: string;
  visaType: string;
};

function getConfirmationMessage(goal: Goal, form: FormState): string {
  switch (goal) {
    case "migrate":
      if (form.migrateCountry === "Canada") {
        return "Our migration team will call you within 24 hours to discuss your Canada PR options.";
      }
      if (form.migrateCountry === "Australia") {
        return "Our migration team will call you within 24 hours to discuss your Australia PR options.";
      }
      return "Our migration team will call you within 24 hours to discuss your Canada or Australia PR options.";
    case "study":
      if (form.studyCountry) {
        return `Our study abroad team will call you within 24 hours to discuss studying in ${form.studyCountry}.`;
      }
      return "Our study abroad team will call you within 24 hours to discuss your study abroad options.";
    case "family":
      if (form.visaType) {
        return `Our family visa team will call you within 24 hours about your ${form.visaType} enquiry.`;
      }
      return "Our family visa team will call you within 24 hours about your family or spouse visa options.";
  }
}

export function QuickEnquiryForm() {
  const groupId = useId();
  const { send, isSubmitting, error } = useSubmitEnquiry();
  const [goal, setGoal] = useState<Goal | null>(null);
  const [submittedGoal, setSubmittedGoal] = useState<Goal | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    whatsapp: "",
    migrateCountry: "",
    studyCountry: "",
    visaType: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal) return;

    const ok = await send({
      source: "quick-enquiry",
      name: form.name,
      phone: form.whatsapp,
      goal,
      migrateCountry: goal === "migrate" ? form.migrateCountry || undefined : undefined,
      studyCountry: goal === "study" ? form.studyCountry || undefined : undefined,
      visaType: goal === "family" ? form.visaType || undefined : undefined,
    });

    if (!ok) return;
    setSubmittedGoal(goal);
    setSubmitted(true);
  };

  if (submitted && submittedGoal) {
    return (
      <div className="enquiry-form-confirmation rounded-xl border border-[#e4e8f0] bg-brand-subtle p-6 md:p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-6 w-6 shrink-0 text-[var(--accent-sky)]" aria-hidden />
          <div className="min-w-0 space-y-3">
            <p className="font-display text-lg font-semibold text-[var(--navy)]">
              Thank you — we have your enquiry
            </p>
            <p className="text-sm leading-relaxed text-[#1A1A2E]/75">
              {getConfirmationMessage(submittedGoal, form)}
            </p>
            <p className="text-sm text-[#1A1A2E]/75">
              Need a faster reply? WhatsApp us on{" "}
              {CONTACT_PHONES.map((phone, index) => (
                <span key={phone.tel}>
                  {index > 0 ? " or " : null}
                  <a
                    href={whatsAppUrlFor(phone)}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[var(--accent-sky)] hover:underline"
                  >
                    {phone.display.replace("+91 ", "")}
                  </a>
                </span>
              ))}
              .
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <fieldset className="border-0 p-0 m-0 min-w-0">
        <legend className="sr-only">What are you looking for?</legend>
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <p className="quick-enquiry-step-label">Step 1</p>
            <p className="mt-1 font-display text-xl font-semibold text-[var(--navy)]">
              What are you looking for?
            </p>
          </div>
          <span className="quick-enquiry-step-hint hidden sm:inline">Choose one path</span>
        </div>
        <div className="enquiry-goal-grid mt-5 grid gap-3 sm:grid-cols-3">
          {goalOptions.map((option) => {
            const Icon = option.icon;
            const selected = goal === option.value;
            return (
              <label
                key={option.value}
                className={`enquiry-goal-card cursor-pointer ${selected ? "enquiry-goal-card--selected" : ""}`}
              >
                <input
                  type="radio"
                  name={`${groupId}-goal`}
                  value={option.value}
                  checked={selected}
                  onChange={() => setGoal(option.value)}
                  className="sr-only"
                />
                <span className="enquiry-goal-card__icon" aria-hidden>
                  <Icon className="h-5 w-5 text-[var(--accent-sky)]" />
                </span>
                <span className="enquiry-goal-card__label">{option.label}</span>
                <span className="enquiry-goal-card__desc">{option.description}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {goal && (
        <div key={goal} className="quick-enquiry-step-enter border-t border-[#e4e8f0] pt-8">
          <div className="mb-5">
            <p className="quick-enquiry-step-label">Step 2</p>
            <p className="mt-1 font-display text-xl font-semibold text-[var(--navy)]">
              Your details
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor={`${groupId}-name`} className={labelClass}>
                Full name
              </label>
              <input
                id={`${groupId}-name`}
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor={`${groupId}-whatsapp`} className={labelClass}>
                WhatsApp number
              </label>
              <input
                id={`${groupId}-whatsapp`}
                type="tel"
                required
                autoComplete="tel"
                placeholder="+91 …"
                value={form.whatsapp}
                onChange={(e) => setForm((f) => ({ ...f, whatsapp: e.target.value }))}
                className={inputClass}
              />
            </div>

            {goal === "migrate" && (
              <div className="sm:col-span-2">
                <label htmlFor={`${groupId}-migrate-country`} className={labelClass}>
                  Which country?
                </label>
                <select
                  id={`${groupId}-migrate-country`}
                  required
                  value={form.migrateCountry}
                  onChange={(e) => setForm((f) => ({ ...f, migrateCountry: e.target.value }))}
                  className={inputClass}
                >
                  <option value="">Select country</option>
                  {migrateCountries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {goal === "study" && (
              <div className="sm:col-span-2">
                <label htmlFor={`${groupId}-study-country`} className={labelClass}>
                  Preferred country
                </label>
                <select
                  id={`${groupId}-study-country`}
                  required
                  value={form.studyCountry}
                  onChange={(e) => setForm((f) => ({ ...f, studyCountry: e.target.value }))}
                  className={inputClass}
                >
                  <option value="">Select country</option>
                  {studyCountries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {goal === "family" && (
              <div className="sm:col-span-2">
                <label htmlFor={`${groupId}-visa-type`} className={labelClass}>
                  Visa type
                </label>
                <select
                  id={`${groupId}-visa-type`}
                  required
                  value={form.visaType}
                  onChange={(e) => setForm((f) => ({ ...f, visaType: e.target.value }))}
                  className={inputClass}
                >
                  <option value="">Select visa type</option>
                  {familyVisaTypes.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {error ? (
            <p className="mt-4 text-sm text-red-600" role="alert">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary mt-6 w-full sm:w-auto sm:min-w-[220px]"
          >
            {isSubmitting ? "Sending…" : "Get Free Assessment"}
          </button>
        </div>
      )}
    </form>
  );
}
