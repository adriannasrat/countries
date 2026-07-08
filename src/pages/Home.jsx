import React, { useMemo, useState } from "react";

import { useCountries } from "../hooks/useCountries";
import SearchBar from "../components/ui/SearchBar";
import RegionFilter from "../components/ui/RegionFilter";
import CountryGrid from "../components/country/CountryGrid";

export default function Home() {
  const { countries, isLoading, error } = useCountries();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const regions = useMemo(() => {
    return [...new Set(countries.map((country) => country.region))]
      .filter(Boolean)
      .sort();
  }, [countries]);

  if (isLoading) {
    return <div className="min-h-screen bg-white px-10 py-10">Loading...</div>;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white px-10 py-10">Error: {error}</div>
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

        <CountryGrid countries={countries} />
      </div>
    </main>
  );
}
