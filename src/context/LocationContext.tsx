import { useEffect, useMemo, useState, type ReactNode } from "react";
import { LocationContext } from "./location";

/**
 * Looks up the visitor's country once, via /api/geo (which reads the header
 * Vercel attaches to every request). Used for one branch today: visitors in
 * Nigeria get a "Request a quote" panel instead of a published price.
 *
 * `resolved` lets the price wait for the answer, so a Nigerian visitor never
 * sees a dollar figure flash before the quote panel replaces it. The lookup
 * gives up after 2.5s and treats the visitor as not in Nigeria.
 *
 * Locally /api/geo doesn't exist, so development resolves to "unknown" and
 * shows prices. To check detection on a deployment, open /api/geo.
 */
export function LocationProvider({ children }: { children: ReactNode }) {
  const [country, setCountry] = useState<string | null>(null);
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    // Set when this effect is torn down, so a cancelled lookup can't mark
    // itself resolved (React runs effects twice in development).
    let cancelled = false;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);

    fetch("/api/geo", { signal: controller.signal })
      .then((res) => {
        // Off Vercel this path returns the app's HTML, not JSON.
        const isJson = res.headers.get("content-type")?.includes("json");
        return res.ok && isJson ? res.json() : null;
      })
      .then((data: { country: string | null } | null) => {
        if (!cancelled && data?.country) setCountry(data.country);
      })
      .catch(() => {
        // Unknown location.
      })
      .finally(() => {
        clearTimeout(timeout);
        if (!cancelled) setResolved(true);
      });

    return () => {
      cancelled = true;
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  const value = useMemo(
    () => ({ country, resolved, isNigeria: country === "NG" }),
    [country, resolved]
  );

  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>;
}
