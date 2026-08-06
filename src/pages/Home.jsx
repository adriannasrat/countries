import React, { useRef } from "react";
import { useSearchParams } from "react-router-dom";

import CountryGrid from "../components/country/CountryGrid";
import CountryGridSkeleton from "../components/country/CountryGridSkeleton";
import ErrorState from "../components/ui/ErrorState";
import NoResults from "../components/ui/NoResults";
import PageContainer from "../components/layout/PageContainer";
import Pagination from "../components/ui/Pagination";
import RegionFilter from "../components/ui/RegionFilter";
import ResultsStatus from "../components/ui/ResultsStatus";
import SearchBar from "../components/ui/SearchBar";
import { useCountries } from "../hooks/useCountries";
import { useCountryFilters } from "../hooks/useCountryFilters";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { usePagination } from "../hooks/usePagination";

const COUNTRIES_PER_PAGE = 24;

export default function Home() {
  useDocumentTitle("Countries");

  const homeContentRef = useRef(null);

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
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    homeContentRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });

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
      {
        replace: false,
        preventScrollReset: true,
      },
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 dark:text-white">
      <PageContainer className="py-8 sm:py-10 lg:py-12">
        <h1 className="sr-only">Countries</h1>

        <form
          ref={homeContentRef}
          role="search"
          aria-label="Filter countries"
          onSubmit={(event) => event.preventDefault()}
          className="flex flex-col scroll-mt-6 gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between"
        >
          <SearchBar value={searchQuery} onChange={handleSearchChange} />

          <RegionFilter
            value={selectedRegion}
            regions={regions}
            onChange={handleRegionChange}
          />
        </form>
        {isLoading ? (
          <CountryGridSkeleton />
        ) : error ? (
          <ErrorState onRetry={refetch} />
        ) : filteredCountries.length > 0 ? (
          <>
            <ResultsStatus
              currentPage={currentPage}
              pageSize={COUNTRIES_PER_PAGE}
              totalResults={filteredCountries.length}
              visibleResults={paginatedItems.length}
            />

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
    </div>
  );
}
