import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useModal } from "./modal-store";
import { SmartEnquiryForm } from "./enquiry/SmartEnquiryForm";
import { SentenceInlineInput, SentenceInlinePick } from "./enquiry/SentenceField";
import { CheckCircle2, Star, Upload } from "lucide-react";

export function ConsultationModal() {
  const { open, consultationPreset, consultationPresetKey, closeModal } = useModal();
  const isOpen = open === "consultation";
  const headline = consultationPreset?.headline ?? "Book a free consultation";

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && closeModal()}>
      <DialogContent className="site-dialog-content--enquiry max-w-xl">
        <DialogHeader className="site-dialog-header">
          <DialogTitle className="font-display text-xl sm:text-2xl text-[var(--navy)] pr-8">
            {headline}
          </DialogTitle>
          <p className="text-sm text-muted-foreground leading-relaxed mt-1">
            Tell us about your plans in your own words — we&apos;ll route you to the right counsellor.
          </p>
        </DialogHeader>
        <div className="site-dialog-body">
          <SmartEnquiryForm
          source="consultation"
          preset={consultationPreset}
          presetKey={consultationPresetKey}
          requireEmail
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

const REVIEW_CATEGORY_OPTIONS = [
  { value: "study-abroad", label: "study abroad" },
  { value: "immigration", label: "immigration / PR" },
  { value: "language", label: "language training" },
];

export function ReviewModal() {
  const { open, closeModal } = useModal();
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", category: "", review: "" });
  const isOpen = open === "review";

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.review || !rating || !form.category) return;
    setSubmitted(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && closeModal()}>
      <DialogContent>
        {submitted ? (
          <div className="py-8 sm:py-10 text-center">
            <CheckCircle2 className="h-16 w-16 text-[var(--accent-sky)] mx-auto mb-4" />
            <h3 className="font-display text-2xl text-[var(--navy)] mb-2">Thanks for your review!</h3>
          </div>
        ) : (
          <>
            <DialogHeader className="site-dialog-header">
              <DialogTitle className="font-display text-xl sm:text-2xl text-[var(--navy)] pr-8">
                Add Your Review
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={submit} className="site-dialog-body sentence-enquiry-form space-y-5">
              <p className="sentence-line text-[var(--navy)] leading-relaxed">
                I&apos;m{" "}
                <SentenceInlineInput
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="your name"
                  required
                  width="md"
                />
                . I used OrbiX for{" "}
                <SentenceInlinePick
                  value={form.category}
                  onChange={(v) => setForm({ ...form, category: v })}
                  options={REVIEW_CATEGORY_OPTIONS}
                  placeholder="choose a service"
                  ariaLabel="Review category"
                  layout="chips"
                />
                .
              </p>

              <div>
                <p className="sentence-line text-[var(--navy)] mb-2">I&apos;d rate my experience</p>
                <div className="flex items-center gap-1" role="group" aria-label="Star rating">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button key={n} type="button" onClick={() => setRating(n)} aria-label={`${n} stars`}>
                      <Star
                        className={`h-7 w-7 ${n <= rating ? "fill-[var(--accent-sky)] text-[var(--accent-sky)]" : "text-muted-foreground"}`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <label className="block">
                <span className="sentence-line text-[var(--navy)]">Here&apos;s what stood out:</span>
                <textarea
                  required
                  rows={4}
                  value={form.review}
                  onChange={(e) => setForm({ ...form, review: e.target.value })}
                  placeholder="Share what went well and what future clients should know…"
                  className="sentence-notes mt-2 w-full"
                />
              </label>

              <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer border border-dashed border-border rounded-md px-4 py-3 hover:bg-brand-subtle">
                <Upload className="h-4 w-4" /> Upload a photo (optional)
                <input type="file" accept="image/*" className="hidden" />
              </label>

              <button
                type="submit"
                disabled={!form.name || !form.category || !form.review || !rating}
                className="btn-primary w-full"
              >
                Submit Review
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
