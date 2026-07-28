import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import CountryGrid from "../components/country/CountryGrid";
import CountryGridSkeleton from "../components/country/CountryGridSkeleton";
import ErrorState from "../components/ui/ErrorState";
import NoResults from "../components/ui/NoResults";
import PageContainer from "../components/layout/PageContainer";
import Pagination from "../components/ui/Pagination";
import RegionFilter from "../components/ui/RegionFilter";
import SearchBar from "../components/ui/SearchBar";
import { useCountries } from "../hooks/useCountries";
import { useCountryFilters } from "../hooks/useCountryFilters";
import { usePagination } from "../hooks/usePagination";

const COUNTRIES_PER_PAGE = 24;

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") ?? "";
  const selectedRegion = searchParams.get("region") ?? "";

  const { countries, isLoading, error, refetch } = useCountries();

  const page = Number(searchParams.get("page")) || 1;

  const { regions, filteredCountries } = useCountryFilters({
    countries,
    searchQuery,
    selectedRegion,
  });

  const {
    currentPage,
    totalPages,
    paginatedItems,
    hasNextPage,
    hasPreviousPage,
    nextPage,
    previousPage,
    goToPage,
  } = usePagination({
    items: filteredCountries,
    page,
    pageSize: COUNTRIES_PER_PAGE,
    onPageChange: handlePageChange,
  });

  function handlePageChange(nextPage) {
    setSearchParams(
      (currentParams) => {
        const nextParams = new URLSearchParams(currentParams);

        if (nextPage <= 1) {
          nextParams.delete("page");
        } else {
          nextParams.set("page", String(nextPage));
        }

        return nextParams;
      },
      { replace: false },
    );
  }

  function handleSearchChange(value) {
    setSearchParams(
      (currentParams) => {
        const nextParams = new URLSearchParams(currentParams);

        if (value) {
          nextParams.set("search", value);
        } else {
          nextParams.delete("search");
        }

        return nextParams;
      },
      { replace: true },
    );
  }

  function handleRegionChange(value) {
    setSearchParams(
      (currentParams) => {
        const nextParams = new URLSearchParams(currentParams);

        if (value) {
          nextParams.set("region", value);
        } else {
          nextParams.delete("region");
        }

        return nextParams;
      },
      { replace: true },
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 dark:text-white">
      <PageContainer className="py-8 sm:py-10 lg:py-12">
        <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
          <SearchBar value={searchQuery} onChange={handleSearchChange} />

          <RegionFilter
            value={selectedRegion}
            regions={regions}
            onChange={handleRegionChange}
          />
        </div>
        {isLoading ? (
          <CountryGridSkeleton />
        ) : error ? (
          <ErrorState onRetry={refetch} />
        ) : filteredCountries.length > 0 ? (
          <>
            <CountryGrid countries={paginatedItems} />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              hasNextPage={hasNextPage}
              hasPreviousPage={hasPreviousPage}
              onNextPage={nextPage}
              onPreviousPage={previousPage}
              onPageChange={goToPage}
            />
          </>
        ) : (
          <NoResults />
        )}
      </PageContainer>
    </main>
  );
}
