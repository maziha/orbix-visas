import { useId, useState } from "react";
import { CheckCircle2, GraduationCap, Heart, Plane } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
    description: "Canada and Australia permanent residency pathways",
    icon: Plane,
  },
  {
    value: "study",
    label: "Study Abroad",
    description: "Undergraduate and postgraduate programs across 7 countries",
    icon: GraduationCap,
  },
  {
    value: "family",
    label: "Family or Spouse Visa",
    description: "Reunite with your spouse, parents, or dependents overseas",
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
  "w-full px-3 py-2.5 border border-border rounded-md text-sm bg-brand-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-sky)]/40";

export function QuickEnquiryForm() {
  const groupId = useId();
  const [goal, setGoal] = useState<Goal | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    migrateCountry: "",
    studyCountry: "",
    visaType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-[var(--accent-sky)]/30 bg-brand-subtle p-5 text-sm text-[var(--navy)] leading-relaxed">
        <div className="flex items-start gap-2">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--accent-sky)] mt-0.5" />
          <p>
            We will contact you within 24 hours. For faster response, WhatsApp us at{" "}
            <a
              href="https://wa.me/918592026134"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[var(--accent-sky)] hover:underline"
            >
              +91 8592026134
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <fieldset className="border-0 p-0 m-0 min-w-0">
        <legend className="font-display text-lg text-[var(--navy)] mb-3 float-left w-full">
          What are you looking for?
        </legend>
        <div className="grid gap-2 clear-both">
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
                <span className="enquiry-goal-card__icon shrink-0" aria-hidden>
                  <Icon className="h-5 w-5 text-[var(--accent-sky)]" />
                </span>
                <span className="min-w-0">
                  <span className="enquiry-goal-card__label block">{option.label}</span>
                  <span className="enquiry-goal-card__desc block">{option.description}</span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {goal && (
        <div key={goal} className="quick-enquiry-step-enter space-y-3">
          <div>
            <label htmlFor={`${groupId}-name`} className="sr-only">
              Name
            </label>
            <input
              id={`${groupId}-name`}
              type="text"
              required
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor={`${groupId}-whatsapp`} className="sr-only">
              WhatsApp number
            </label>
            <input
              id={`${groupId}-whatsapp`}
              type="tel"
              required
              placeholder="WhatsApp number"
              value={form.whatsapp}
              onChange={(e) => setForm((f) => ({ ...f, whatsapp: e.target.value }))}
              className={inputClass}
            />
          </div>

          {goal === "migrate" && (
            <div>
              <label htmlFor={`${groupId}-migrate-country`} className="sr-only">
                Which country?
              </label>
              <select
                id={`${groupId}-migrate-country`}
                required
                value={form.migrateCountry}
                onChange={(e) => setForm((f) => ({ ...f, migrateCountry: e.target.value }))}
                className={inputClass}
              >
                <option value="">Which country?</option>
                {migrateCountries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          )}

          {goal === "study" && (
            <div>
              <label htmlFor={`${groupId}-study-country`} className="sr-only">
                Preferred country?
              </label>
              <select
                id={`${groupId}-study-country`}
                required
                value={form.studyCountry}
                onChange={(e) => setForm((f) => ({ ...f, studyCountry: e.target.value }))}
                className={inputClass}
              >
                <option value="">Preferred country?</option>
                {studyCountries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          )}

          {goal === "family" && (
            <div>
              <label htmlFor={`${groupId}-visa-type`} className="sr-only">
                Visa type?
              </label>
              <select
                id={`${groupId}-visa-type`}
                required
                value={form.visaType}
                onChange={(e) => setForm((f) => ({ ...f, visaType: e.target.value }))}
                className={inputClass}
              >
                <option value="">Visa type?</option>
                {familyVisaTypes.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button type="submit" className="btn-primary w-full">
            Get Assessment
          </button>
        </div>
      )}
    </form>
  );
}
