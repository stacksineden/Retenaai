import { createContext, useContext } from "react";

export type VisitorLocation = {
  /** Country code from Vercel ("NG", "US", …); null if unknown or off Vercel. */
  country: string | null;
  /** True once the lookup has finished — successfully or not. */
  resolved: boolean;
  /** Nigerian visitors see "Request a quote" instead of published prices. */
  isNigeria: boolean;
};

export const LocationContext = createContext<VisitorLocation | null>(null);

/** Where the visitor is. Must be used inside <LocationProvider>. */
export function useVisitorLocation(): VisitorLocation {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error("useVisitorLocation must be used inside <LocationProvider>");
  return ctx;
}
