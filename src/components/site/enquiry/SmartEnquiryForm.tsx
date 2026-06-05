"use client";

import { useEffect, useId, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useSubmitEnquiry } from "@/hooks/use-submit-enquiry";
import {
  buildEnquiryPayload,
  confirmationForEnquiry,
  defaultEnquiryFormState,
  ENQUIRY_GOAL_OPTIONS,
  FAMILY_VISA_OPTIONS,
  MIGRATE_COUNTRY_OPTIONS,
  QUALIFICATION_OPTIONS,
  STUDY_COUNTRY_OPTIONS,
  type ConsultationPreset,
  type EnquiryGoal,
  type SmartEnquiryFormState,
} from "@/lib/enquiry-options";
import { SentenceInlineInput, SentenceInlinePick } from "./SentenceField";

type SmartEnquiryFormProps = {
  source: "consultation" | "quick-enquiry";
  preset?: ConsultationPreset | null;
  presetKey?: string;
  requireEmail?: boolean;
  submitLabel?: string;
  onSubmitted?: () => void;
};

function isEnquiryComplete(form: SmartEnquiryFormState, requireEmail: boolean) {
  if (!form.name.trim() || !form.phone.trim() || !form.goal) return false;
  if (requireEmail && !form.email.trim()) return false;
  switch (form.goal) {
    case "migrate":
      return Boolean(form.migrateCountry);
    case "study":
      return Boolean(form.studyCountry);
    case "family":
      return Boolean(form.visaType);
    default:
      return false;
  }
}

export function SmartEnquiryForm({
  source,
  preset,
  presetKey,
  requireEmail = source === "consultation",
  submitLabel = source === "consultation" ? "Book a Consultation" : "Get Free Assessment",
  onSubmitted,
}: SmartEnquiryFormProps) {
  const formId = useId();
  const { send, isSubmitting, error } = useSubmitEnquiry();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<SmartEnquiryFormState>(() => defaultEnquiryFormState(preset));

  useEffect(() => {
    setForm(defaultEnquiryFormState(preset));
    setSubmitted(false);
  }, [presetKey, preset]);

  const set = <K extends keyof SmartEnquiryFormState>(key: K, value: SmartEnquiryFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const setGoal = (goal: EnquiryGoal) => {
    setForm((prev) => ({
      ...prev,
      goal,
      migrateCountry: goal === "migrate" ? prev.migrateCountry : "",
      studyCountry: goal === "study" ? prev.studyCountry : "",
      visaType: goal === "family" ? prev.visaType : "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = buildEnquiryPayload(source, form);
    if (!payload) return;
    if (requireEmail && !form.email.trim()) return;

    const ok = await send(payload);
    if (!ok) return;
    setSubmitted(true);
    onSubmitted?.();
  };

  if (submitted) {
    return (
      <div className="enquiry-form-confirmation py-8 text-center animate-fade-up">
        <CheckCircle2 className="h-14 w-14 text-[var(--accent-sky)] mx-auto mb-3" aria-hidden />
        <p className="font-display text-xl font-semibold text-[var(--navy)]">Thank you!</p>
        <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto leading-relaxed">
          {confirmationForEnquiry(form)}
        </p>
      </div>
    );
  }

  const goal = form.goal as EnquiryGoal | "";

  return (
    <form id={formId} onSubmit={handleSubmit} className="sentence-enquiry-form space-y-5">
      <p className="sentence-line text-[var(--navy)] leading-relaxed">
        Hi, I&apos;m{" "}
        <SentenceInlineInput
          value={form.name}
          onChange={(v) => set("name", v)}
          placeholder="your name"
          required
          autoComplete="name"
          width="md"
        />
        . Reach me on{" "}
        <SentenceInlineInput
          value={form.phone}
          onChange={(v) => set("phone", v)}
          placeholder="WhatsApp / phone"
          type="tel"
          required
          autoComplete="tel"
          width="lg"
        />
        {requireEmail ? (
          <>
            {" "}
            or{" "}
            <SentenceInlineInput
              value={form.email}
              onChange={(v) => set("email", v)}
              placeholder="email"
              type="email"
              required
              autoComplete="email"
              width="lg"
            />
          </>
        ) : null}
        .
      </p>

      <div className="sentence-block">
        <p className="sentence-line text-[var(--navy)] leading-relaxed">
          I want to{" "}
          <SentenceInlinePick
            value={form.goal}
            onChange={(v) => setGoal(v as EnquiryGoal)}
            options={ENQUIRY_GOAL_OPTIONS.map((g) => ({
              value: g.value,
              label: g.sentence,
            }))}
            placeholder="choose your goal"
            ariaLabel="What are you looking for?"
            required
            layout="popover"
          />
          {goal === "migrate" ? (
            <>
              {" "}
              in{" "}
              <SentenceInlinePick
                value={form.migrateCountry}
                onChange={(v) => set("migrateCountry", v)}
                options={MIGRATE_COUNTRY_OPTIONS}
                placeholder="pick a country"
                ariaLabel="Migration destination"
                required
                layout="chips"
              />
            </>
          ) : null}
          {goal === "study" ? (
            <>
              {" "}
              in{" "}
              <SentenceInlinePick
                value={form.studyCountry}
                onChange={(v) => set("studyCountry", v)}
                options={STUDY_COUNTRY_OPTIONS}
                placeholder="pick a country"
                ariaLabel="Study destination"
                required
                layout="popover"
              />
            </>
          ) : null}
          {goal === "family" ? (
            <>
              {" "}
              — specifically a{" "}
              <SentenceInlinePick
                value={form.visaType}
                onChange={(v) => set("visaType", v)}
                options={FAMILY_VISA_OPTIONS}
                placeholder="visa type"
                ariaLabel="Family visa type"
                required
                layout="chips"
              />
            </>
          ) : null}
          .
        </p>
        {goal ? (
          <p className="sentence-line-hint mt-2">
            {goal === "migrate"
              ? "We’ll match you with a migration counsellor for PR pathways."
              : goal === "study"
                ? "We’ll suggest universities and intakes that fit your profile."
                : "We’ll review sponsor status and documents for your reunification case."}
          </p>
        ) : null}
      </div>

      {goal ? (
        <div key={goal} className="sentence-block quick-enquiry-step-enter">
          <p className="sentence-line text-[var(--navy)] leading-relaxed">
            My highest qualification is{" "}
            <SentenceInlinePick
              value={form.qualification}
              onChange={(v) => set("qualification", v)}
              options={QUALIFICATION_OPTIONS}
              placeholder="select qualification"
              ariaLabel="Highest qualification"
              layout="popover"
            />
            .
          </p>
          <label className="block mt-4">
            <span className="sentence-line text-[var(--navy)] leading-relaxed">
              Anything else we should know?{" "}
              <span className="text-muted-foreground text-sm">(optional)</span>
            </span>
            <textarea
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
              placeholder="English score, budget, timeline, or questions for our counsellor…"
              rows={2}
              className="sentence-notes mt-2 w-full"
            />
          </label>
        </div>
      ) : null}

      {error ? (
        <p className="text-sm text-red-600 text-center" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting || !isEnquiryComplete(form, requireEmail)}
        className="btn-primary w-full sm:w-auto sm:min-w-[220px]"
      >
        {isSubmitting ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
