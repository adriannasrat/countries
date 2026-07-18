import { useParams } from "react-router-dom";

import { useCountry } from "../hooks/useCountry";

import CountryDetailsSkeleton from "../components/country/CountryDetailsSkeleton";
import ErrorState from "../components/ui/ErrorState";

export default function CountryDetails() {
  const { code } = useParams();

  const { country, isLoading, error, refetch } = useCountry(code);

  if (isLoading) {
    return <CountryDetailsSkeleton />;
  }

  if (error) {
    return (
      <main className="min-h-screen bg-white px-6 py-10 dark:bg-slate-900 md:px-10">
        <div className="mx-auto max-w-screen-2xl">
          <ErrorState description="{error}" onRetry={refetch} />;
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 py-10 text-slate-950 dark:bg-slate-900 dark:text-white md:px-10">
      <pre>{JSON.stringify(country, null, 2)}</pre>
    </main>
  );
}
