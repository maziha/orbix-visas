import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useSubmitEnquiry } from "@/hooks/use-submit-enquiry";
import { useModal } from "./modal-store";
import { CheckCircle2, Star, Upload } from "lucide-react";

export function ConsultationModal() {
  const { open, setOpen } = useModal();
  const { send, isSubmitting, error } = useSubmitEnquiry();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    qualification: "",
    service: "",
    country: "",
    message: "",
  });

  const isOpen = open === "consultation";
  const close = () => {
    setOpen(null);
    setTimeout(() => setSubmitted(false), 300);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) return;

    const ok = await send({
      source: "consultation",
      name: form.name,
      phone: form.phone,
      email: form.email,
      qualification: form.qualification || undefined,
      service: form.service || undefined,
      country: form.country || undefined,
      message: form.message || undefined,
    });

    if (ok) setSubmitted(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && close()}>
      <DialogContent className="max-w-lg">
        {submitted ? (
          <div className="py-10 text-center animate-fade-up">
            <CheckCircle2 className="h-16 w-16 text-[var(--accent-sky)] mx-auto mb-4" />
            <h3 className="font-display text-2xl text-[var(--navy)] mb-2">Thank you!</h3>
            <p className="text-muted-foreground">We&apos;ll contact you within 24 hours.</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl text-[var(--navy)]">
                Book a Consultation
              </DialogTitle>
              <p className="text-sm text-muted-foreground">
                Fill in your details and we&apos;ll get back to you.
              </p>
            </DialogHeader>
            <form onSubmit={submit} className="space-y-3 mt-2">
              <input
                required
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-sky)]/40"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  required
                  type="tel"
                  pattern="[0-9+\s-]{7,}"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-sky)]/40"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-sky)]/40"
                />
              </div>
              <select
                value={form.qualification}
                onChange={(e) => setForm({ ...form, qualification: e.target.value })}
                className="w-full px-4 py-2.5 border border-border rounded-md bg-brand-white"
              >
                <option value="">Qualification</option>
                <option>Master&apos;s / Above</option>
                <option>Degree</option>
                <option>Plus Two / Diploma / Others</option>
              </select>
              <div className="grid grid-cols-2 gap-3">
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-2.5 border border-border rounded-md bg-brand-white"
                >
                  <option value="">Service Interested In</option>
                  <option>Study Abroad</option>
                  <option>Migration</option>
                  <option>Language Training</option>
                  <option>Other</option>
                </select>
                <select
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="w-full px-4 py-2.5 border border-border rounded-md bg-brand-white"
                >
                  <option value="">Preferred Country</option>
                  {["Canada", "Australia", "UK", "New Zealand", "Germany", "France", "Poland"].map(
                    (c) => (
                      <option key={c}>{c}</option>
                    ),
                  )}
                </select>
              </div>
              <textarea
                placeholder="Message (optional)"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                className="w-full px-4 py-2.5 border border-border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[var(--accent-sky)]/40"
              />
              {error ? (
                <p className="text-sm text-red-600 text-center" role="alert">
                  {error}
                </p>
              ) : null}
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                {isSubmitting ? "Sending…" : "Book a Consultation"}
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function ReviewModal() {
  const { open, setOpen } = useModal();
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", category: "", review: "" });
  const isOpen = open === "review";
  const close = () => {
    setOpen(null);
    setTimeout(() => {
      setSubmitted(false);
      setRating(0);
    }, 300);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.review || !rating) return;
    setSubmitted(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && close()}>
      <DialogContent className="max-w-md">
        {submitted ? (
          <div className="py-10 text-center">
            <CheckCircle2 className="h-16 w-16 text-[var(--accent-sky)] mx-auto mb-4" />
            <h3 className="font-display text-2xl text-[var(--navy)] mb-2">Thanks for your review!</h3>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl text-[var(--navy)]">Add Your Review</DialogTitle>
            </DialogHeader>
            <form onSubmit={submit} className="space-y-3 mt-2">
              <input
                required
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 border border-border rounded-md"
              />
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-4 py-2.5 border border-border rounded-md bg-brand-white"
              >
                <option value="">Category</option>
                <option>Study Abroad</option>
                <option>Immigration</option>
                <option>Language Training</option>
              </select>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button key={n} type="button" onClick={() => setRating(n)}>
                    <Star
                      className={`h-7 w-7 ${n <= rating ? "fill-[var(--accent-sky)] text-[var(--accent-sky)]" : "text-muted-foreground"}`}
                    />
                  </button>
                ))}
              </div>
              <textarea
                required
                rows={4}
                placeholder="Your review"
                value={form.review}
                onChange={(e) => setForm({ ...form, review: e.target.value })}
                className="w-full px-4 py-2.5 border border-border rounded-md resize-none"
              />
              <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer border border-dashed border-border rounded-md px-4 py-3 hover:bg-brand-subtle">
                <Upload className="h-4 w-4" /> Upload a photo (optional)
                <input type="file" accept="image/*" className="hidden" />
              </label>
              <button type="submit" className="btn-primary w-full">
                Submit Review
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
