import { createContext, useContext, useState, type ReactNode } from "react";

type ModalType = "consultation" | "review" | null;
const Ctx = createContext<{ open: ModalType; setOpen: (m: ModalType) => void }>({
  open: null,
  setOpen: () => {},
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<ModalType>(null);
  return <Ctx.Provider value={{ open, setOpen }}>{children}</Ctx.Provider>;
}
export const useModal = () => useContext(Ctx);