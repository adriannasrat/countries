import { useCallback, useEffect, useState } from "react";
import { fetchCountries } from "../api/countries";

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  const refetch = useCallback(() => {
    setReloadKey((currentKey) => currentKey + 1);
  }, []);

  useEffect(() => {
    async function loadCountries() {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchCountries();

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
