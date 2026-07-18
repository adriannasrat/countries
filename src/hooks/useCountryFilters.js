import { useMemo } from "react";

export function useCountryFilters({
  countries = [],
  searchQuery = "",
  selectedRegion = "",
}) {
  const regions = useMemo(() => {
    return [...new Set(countries.map((country) => country.region))]
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b));
  }, [countries]);

  const filteredCountries = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();
    const normalizedRegion = selectedRegion.trim().toLowerCase();

    return countries.filter((country) => {
      const countryName = country.name?.common?.toLowerCase() ?? "";
      const countryRegion = country.region?.toLowerCase() ?? "";

      const matchesSearch =
        normalizedSearch === "" || countryName.includes(normalizedSearch);

      const matchesRegion =
        normalizedRegion === "" || countryRegion === normalizedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [countries, searchQuery, selectedRegion]);

  return {
    regions,
    filteredCountries,
  };
}
