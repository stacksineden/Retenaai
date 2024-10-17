import { createContext, useContext, useState } from "react";

const INITIAL_STATE = {
  open: true,
  setOpen: () => {},
  mobileOpen: false,
  setMobileOpen: () => {},
  openPaymentModal: false,
  setOpenPaymentModal: () => {},
  chatOpen: true,
  setChatOpen: () => {},
  chatMobileOpen: false,
  setChatMobileOpen: () => {},
};

type IContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (mobileOpen: boolean) => void;
  openPaymentModal: boolean;
  setOpenPaymentModal: (openPaymentModal: boolean) => void;
  chatOpen: boolean;
  setChatOpen: (chatOpen: boolean) => void;
  chatMobileOpen: boolean;
  setChatMobileOpen: (chatMobileOpen: boolean) => void;
};

const AppContext = createContext<IContextType>(INITIAL_STATE);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(INITIAL_STATE.open);
  const [mobileOpen, setMobileOpen] = useState(INITIAL_STATE.mobileOpen);
  const [openPaymentModal, setOpenPaymentModal] = useState(
    INITIAL_STATE.openPaymentModal
  );
  const [chatOpen, setChatOpen] = useState(INITIAL_STATE.chatOpen);
  const [chatMobileOpen, setChatMobileOpen] = useState(
    INITIAL_STATE.chatMobileOpen
  );

  const value = {
    open,
    setOpen,
    mobileOpen,
    setMobileOpen,
    openPaymentModal,
    setOpenPaymentModal,
    chatOpen,
    setChatOpen,
    chatMobileOpen,
    setChatMobileOpen
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => useContext(AppContext);
