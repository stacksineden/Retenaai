import { createContext, useContext } from "react";
import type { Currency } from "../data/pricing";

export type CurrencyState = {
  /** Currency prices are shown in. There is no user-facing switch. */
  currency: Currency;
  /** Visitor's country code from Vercel ("NG", "US", …); null until known or off Vercel. */
  country: string | null;
};

export const CurrencyContext = createContext<CurrencyState | null>(null);

/** Current display currency. Must be used inside <CurrencyProvider>. */
export function useCurrency(): CurrencyState {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used inside <CurrencyProvider>");
  return ctx;
}
