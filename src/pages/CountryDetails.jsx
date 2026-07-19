import { useParams } from "react-router-dom";

import BackButton from "../components/country/BackButton";
import BorderCountries from "../components/country/BorderCountries";
import CountryDetailsSkeleton from "../components/country/CountryDetailsSkeleton";
import CountryFlag from "../components/country/CountryFlag";
import CountryInfo from "../components/country/CountryInfo";
import ErrorState from "../components/ui/ErrorState";
import { useCountry } from "../hooks/useCountry";

export default function CountryDetails() {
  const { code } = useParams();

  const { country, countries, isLoading, error, refetch } = useCountry(code);

  if (isLoading) {
    return <CountryDetailsSkeleton />;
  }

  if (error) {
    return (
      <main className="min-h-screen bg-white px-6 py-10 dark:bg-slate-900 md:px-10">
        <div className="mx-auto max-w-screen-2xl px-10 py-10 sm:px-20">
          <ErrorState description="{error}" onRetry={refetch} />;
        </div>
      </main>
    );
  }

  if (!country) {
    return (
      <main className="min-h-screen bg-white px-6 py-10 dark:bg-slate-900 md:px-10">
        <div className="mx-auto max-w-screen-2xl px-10 py-10 sm:px-20">
          <ErrorState description="Country data is unavailable." />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 py-10 text-slate-950 dark:bg-slate-900 dark:bg-slate-900 md:px-10">
      <div className="mx-auto max-w-screen-2xl px-10 py-10 sm:px-20">
        <BackButton />

        <section className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <CountryFlag
            flags={country.flags}
            countryName={country.name?.common}
          />

          <CountryInfo country={country} />

          <BorderCountries
            borders={country.borders ?? []}
            countries={countries}
          />
        </section>
      </div>
    </main>
  );
}
