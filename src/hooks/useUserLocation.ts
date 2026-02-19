// src/hooks/useUserCountry.ts

import { getUserCountry } from "@/lib/locationService";
import { useEffect, useState } from "react";


export function useUserCountry() {
  const [country, setCountry] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem("country");

    if (cached) {
      setCountry(cached);
      setLoading(false);
      return;
    }

    async function fetchCountry() {
      const result = await getUserCountry();

      if (result) {
        localStorage.setItem("country", result);
      }

      setCountry(result);
      setLoading(false);
    }

    fetchCountry();
  }, []);

  return { country, loading };
}
