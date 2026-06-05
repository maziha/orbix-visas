"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import type { ConsultationPreset } from "@/lib/enquiry-options";

type ModalType = "consultation" | "review" | null;

type ModalContextValue = {
  open: ModalType;
  consultationPreset: ConsultationPreset | null;
  consultationPresetKey: string;
  openConsultation: (preset?: ConsultationPreset) => void;
  openReview: () => void;
  closeModal: () => void;
  /** @deprecated Use openConsultation() */
  setOpen: (modal: ModalType) => void;
};

const Ctx = createContext<ModalContextValue>({
  open: null,
  consultationPreset: null,
  consultationPresetKey: "default",
  openConsultation: () => {},
  openReview: () => {},
  closeModal: () => {},
  setOpen: () => {},
});

function presetKey(preset?: ConsultationPreset) {
  if (!preset) return "default";
  return [
    preset.goal ?? "",
    preset.migrateCountry ?? "",
    preset.studyCountry ?? "",
    preset.visaType ?? "",
    preset.headline ?? "",
  ].join("|");
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpenState] = useState<ModalType>(null);
  const [consultationPreset, setConsultationPreset] = useState<ConsultationPreset | null>(null);
  const [consultationPresetKey, setConsultationPresetKey] = useState("default");

  const openConsultation = useCallback((preset?: ConsultationPreset) => {
    setConsultationPreset(preset ?? null);
    setConsultationPresetKey(presetKey(preset));
    setOpenState("consultation");
  }, []);

  const openReview = useCallback(() => setOpenState("review"), []);

  const closeModal = useCallback(() => {
    setOpenState(null);
    setTimeout(() => {
      setConsultationPreset(null);
      setConsultationPresetKey("default");
    }, 300);
  }, []);

  const setOpen = useCallback(
    (modal: ModalType) => {
      if (modal === "consultation") openConsultation();
      else if (modal === "review") openReview();
      else closeModal();
    },
    [closeModal, openConsultation, openReview],
  );

  return (
    <Ctx.Provider
      value={{
        open,
        consultationPreset,
        consultationPresetKey,
        openConsultation,
        openReview,
        closeModal,
        setOpen,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export const useModal = () => useContext(Ctx);
