import { useEffect, useMemo, useState, type ReactNode } from "react";
import { NAIRA_PRICING_LIVE, type Currency } from "../data/pricing";
import { CurrencyContext } from "./currency";

/**
 * Currency follows the visitor's location, and nothing else:
 *   Nigeria            → NGN   (only once NAIRA_PRICING_LIVE is true)
 *   anywhere else      → USD
 *   location unknown   → USD
 *
 * Until the naira grid is set, Nigerian visitors are still detected but see
 * dollars. To confirm detection on a deployment, open /api/geo.
 *
 * The country comes from /api/geo, which reads the header Vercel attaches to
 * every request. There's no toggle and no remembered choice. Locally that
 * endpoint doesn't exist, so development always shows USD.
 */
export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [country, setCountry] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);

    fetch("/api/geo", { signal: controller.signal })
      .then((res) => {
        // Off Vercel this path returns the app's HTML, not JSON.
        const isJson = res.headers.get("content-type")?.includes("json");
        return res.ok && isJson ? res.json() : null;
      })
      .then((data: { country: string | null } | null) => {
        if (data?.country) setCountry(data.country);
      })
      .catch(() => {
        // Stay on USD.
      })
      .finally(() => clearTimeout(timeout));

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  const currency: Currency = country === "NG" && NAIRA_PRICING_LIVE ? "NGN" : "USD";
  const value = useMemo(() => ({ currency, country }), [currency, country]);

  return (
    <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
  );
}
