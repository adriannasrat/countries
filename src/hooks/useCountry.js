import { useCallback, useEffect, useState } from "react";

import { fetchCountryByCode } from "../api/countries.js";

export function useCountry(code) {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  const refetch = useCallback(() => {
    setReloadKey((prevKey) => prevKey + 1);
  }, []);

  useEffect(() => {
    if (!code) {
      setCountry(null);
      setError("Country not found");
      setIsLoading(false);
      return;
    }

    let ignore = false;

    async function loadCountry() {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchCountryByCode(code);

        if (!ignore) {
          setCountry(data);
        }
      } catch (error) {
        console.error("Error fetching country:", error);

        if (!ignore) {
          setCountry(null);
          setError(
            error instanceof Error && error.message === "Country not found"
              ? "Country not found."
              : "We couldn't load this country. Please try again.",
          );
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    loadCountry();

    return () => {
      ignore = true;
    };
  }, [code, reloadKey]);

  return {
    country,
    isLoading,
    error,
    refetch,
  };
}
