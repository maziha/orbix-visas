"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/lib/motion/use-reduced-motion";
import { CheckCircle2 } from "lucide-react";
import { MotionPressable } from "@/components/motion";
import { popIn, springBouncy, springGentle } from "@/lib/motion/presets";
import { useSubmitEnquiry } from "@/hooks/use-submit-enquiry";
import { CONTACT_PHONE, CONTACT_WHATSAPP_DISPLAY } from "@/lib/contact-info";
import {
  CONTACT_SERVICE_OPTIONS,
  contactServiceLabel,
  resolveContactServiceFromParam,
} from "@/lib/enquiry-options";
import { SentenceInlineInput, SentenceInlinePick } from "./SentenceField";

type ContactSentenceFormProps = {
  initialService?: string;
};

export function ContactSentenceForm({ initialService = "" }: ContactSentenceFormProps) {
  const { send, isSubmitting, error } = useSubmitEnquiry();
  const [submitted, setSubmitted] = useState(false);
  const reduced = useReducedMotion();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: initialService,
    message: "",
  });

  const set = (key: keyof typeof form, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.phone.trim() || !form.service) return;

    const ok = await send({
      source: "contact",
      name: form.fullName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || undefined,
      service: contactServiceLabel(form.service),
      message: form.message.trim() || undefined,
    });

    if (ok) setSubmitted(true);
  };

  const canSubmit = form.fullName.trim() && form.phone.trim() && form.service;

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          className="contact-form-confirmation"
          initial={reduced ? false : "hidden"}
          animate="visible"
          variants={popIn}
          transition={springGentle}
        >
          <motion.div
            initial={reduced ? false : { scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ ...springBouncy, delay: 0.1 }}
          >
            <CheckCircle2 className="contact-form-confirmation__icon h-12 w-12" aria-hidden />
          </motion.div>
          <h3 className="contact-form-confirmation__title">Message received</h3>
          <p className="contact-form-confirmation__text">
            We will contact you at the number you provided within 24 business hours. For urgent
            queries, call us at {CONTACT_PHONE} or WhatsApp us at {CONTACT_WHATSAPP_DISPLAY}.
          </p>
        </motion.div>
      ) : (
    <motion.form
      key="form"
      onSubmit={handleSubmit}
      className="sentence-enquiry-form space-y-5"
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p className="sentence-line text-[var(--navy)] leading-relaxed">
        Hi, I&apos;m{" "}
        <SentenceInlineInput
          value={form.fullName}
          onChange={(v) => set("fullName", v)}
          placeholder="your full name"
          required
          autoComplete="name"
          width="md"
        />
        . You can reach me on{" "}
        <SentenceInlineInput
          value={form.phone}
          onChange={(v) => set("phone", v)}
          placeholder="WhatsApp / mobile"
          type="tel"
          required
          autoComplete="tel"
          width="lg"
        />{" "}
        or{" "}
        <SentenceInlineInput
          value={form.email}
          onChange={(v) => set("email", v)}
          placeholder="email (optional)"
          type="email"
          autoComplete="email"
          width="lg"
        />
        .
      </p>

      <p className="sentence-line text-[var(--navy)] leading-relaxed">
        I&apos;m interested in{" "}
        <SentenceInlinePick
          value={form.service}
          onChange={(v) => set("service", v)}
          options={CONTACT_SERVICE_OPTIONS}
          placeholder="choose a service"
          ariaLabel="Service you are interested in"
          layout="popover"
        />
        .
      </p>

      <label className="block">
        <span className="sentence-line text-[var(--navy)] leading-relaxed">
          Here&apos;s a bit more about my situation{" "}
          <span className="text-muted-foreground text-sm">(optional)</span>
        </span>
        <textarea
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Tell us what you're hoping to achieve, your timeline, or any questions…"
          rows={4}
          className="sentence-notes mt-2 w-full"
        />
      </label>

      {error ? (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <MotionPressable
        type="submit"
        disabled={isSubmitting || !canSubmit}
        className="contact-form-submit"
        pulse={canSubmit ? true : false}
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </MotionPressable>
    </motion.form>
      )}
    </AnimatePresence>
  );
}

function ContactSentenceFormFromUrl() {
  const searchParams = useSearchParams();
  const initialService = resolveContactServiceFromParam(searchParams.get("service")) ?? "";
  return <ContactSentenceForm initialService={initialService} />;
}

export function ContactSentenceFormWithParams() {
  return (
    <Suspense fallback={<ContactSentenceForm />}>
      <ContactSentenceFormFromUrl />
    </Suspense>
  );
}
