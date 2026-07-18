import React, { useMemo, useState } from "react";

import CountryGrid from "../components/country/CountryGrid";
import NoResults from "../components/ui/NoResults";
import RegionFilter from "../components/ui/RegionFilter";
import SearchBar from "../components/ui/SearchBar";
import { useCountries } from "../hooks/useCountries";
import { useCountryFilters } from "../hooks/useCountryFilters";

export default function Home() {
  const { countries, isLoading, error } = useCountries();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const { regions, filteredCountries } = useCountryFilters({
    countries,
    searchQuery,
    selectedRegion,
  });

  if (isLoading) {
    return (
      <main className="min-h-screen bg-slate-50 px-10 py-10 dark:bg-slate-900 dark:text-white">
        Loading countries...
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-50 px-10 py-10 dark:bg-slate-900 dark:text-white">
        Error: {error}
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 dark:text-white">
      <div className="mx-auto max-w-screen-2xl px-10 py-10 sm:px-20">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />

          <RegionFilter
            value={selectedRegion}
            regions={regions}
            onChange={setSelectedRegion}
          />
        </div>

        {filteredCountries.length > 0 ? (
          <CountryGrid countries={filteredCountries} />
        ) : (
          <NoResults />
        )}
      </div>
    </main>
  );
}
