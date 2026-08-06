import { useCallback, useEffect, useState } from "react";
import { fetchCountries, getCachedCountries } from "../api/countries";

export function useCountries() {
  const [countries, setCountries] = useState(() => getCachedCountries() ?? []);
  const [isLoading, setIsLoading] = useState(
    () => getCachedCountries() === null,
  );
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  const refetch = useCallback(() => {
    setReloadKey((currentKey) => currentKey + 1);
  }, []);

  useEffect(() => {
    if (reloadKey === 0 && getCachedCountries()) {
      return;
    }

    async function loadCountries() {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchCountries({ force: reloadKey > 0 });

        const countriesWithoutAntarctica = data.filter(
          (country) => country.region?.toLowerCase() !== "antarctica",
        );

        setCountries(countriesWithoutAntarctica);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred",
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadCountries();
  }, [reloadKey]);

  return {
    countries,
    isLoading,
    error,
    refetch,
  };
}
