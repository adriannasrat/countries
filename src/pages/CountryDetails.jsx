import { useParams } from "react-router-dom";

import BackButton from "../components/country/BackButton";
import BorderCountries from "../components/country/BorderCountries";
import CountryDetailsSkeleton from "../components/country/CountryDetailsSkeleton";
import CountryFlag from "../components/country/CountryFlag";
import CountryInfo from "../components/country/CountryInfo";
import ErrorState from "../components/ui/ErrorState";
import PageContainer from "../components/layout/PageContainer";
import { useCountry } from "../hooks/useCountry";

export default function CountryDetails() {
  const { code } = useParams();

  const { country, countries, isLoading, error, refetch } = useCountry(code);

  if (isLoading) {
    return <CountryDetailsSkeleton />;
  }

  if (error) {
    return (
      <main className="min-h-screen bg-white px-6 py-10 dark:bg-slate-900">
        <PageContainer className="py-8 sm:py-10 lg:py-12">
          <ErrorState description="{error}" onRetry={refetch} />;
        </PageContainer>
      </main>
    );
  }

  if (!country) {
    return (
      <main className="min-h-screen bg-white px-6 py-10 dark:bg-slate-900">
        <PageContainer className="py-8 sm:py-10 lg:py-12">
          <ErrorState description="Country data is unavailable." />
        </PageContainer>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-900 dark:text-white">
      <PageContainer className="py-8 sm:py-10 lg:py-12">
        <BackButton />

        <section className="mt-10 grid gap-10 sm:mt-12 lg:mt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-16 xl:gap-24">
          <CountryFlag
            flags={country.flags}
            countryName={country.name?.common}
          />

          <CountryInfo country={country} />
        </section>

        <BorderCountries
          borders={country.borders ?? []}
          countries={countries}
        />
      </PageContainer>
    </main>
  );
}
