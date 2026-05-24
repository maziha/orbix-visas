import { useModal } from "./modal-store";

export function ClosingCtaPanel() {
  const { setOpen } = useModal();

  return (
    <div className="closing-cta-panel bg-brand-dark text-center">
      <h2 className="closing-cta-panel__title font-display">Ready to take the first step?</h2>
      <p className="closing-cta-panel__text mx-auto max-w-2xl">
        Speak with a counsellor — no obligation, available 6 days a week from Kochi.
      </p>
      <div className="closing-cta-panel__actions">
        <button type="button" onClick={() => setOpen("consultation")} className="btn-primary">
          Book a Free Consultation
        </button>
        <a
          href="https://wa.me/918592026134"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
