import { useEffect, useState } from "react";
import { fetchCountries } from "../api/countries";

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCountries() {
      try {
        const data = await fetchCountries();

        const countriesWithoutAntarctica = data.filter(
          (country) => country.region?.toLowerCase() !== "antarctica",
        );

        setCountries(countriesWithoutAntarctica);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadCountries();
  }, []);

  return {
    countries,
    isLoading,
    error,
  };
}
