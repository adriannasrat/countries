import { useParams } from "react-router-dom";

import BackButton from "../components/country/BackButton";
import BorderCountries from "../components/country/BorderCountries";
import CountryDetailsSkeleton from "../components/country/CountryDetailsSkeleton";
import CountryFlag from "../components/country/CountryFlag";
import CountryInfo from "../components/country/CountryInfo";
import ErrorState from "../components/ui/ErrorState";
import PageContainer from "../components/layout/PageContainer";
import { useCountry } from "../hooks/useCountry";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function CountryDetails() {
  const { code } = useParams();

  const { country, countries, isLoading, error, refetch } = useCountry(code);

  const documentTitle = error
    ? "Country unavailable"
    : country?.name?.common || "Country details";

  useDocumentTitle(documentTitle);

  if (isLoading) {
    return <CountryDetailsSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white px-6 py-10 dark:bg-slate-900">
        <PageContainer className="py-8 sm:py-10 lg:py-12">
          <ErrorState
            description={error}
            onRetry={refetch}
            headingLevel="h1"
          />
        </PageContainer>
      </div>
    );
  }

  if (!country) {
    return (
      <div className="min-h-screen bg-white px-6 py-10 dark:bg-slate-900">
        <PageContainer className="py-8 sm:py-10 lg:py-12">
          <ErrorState
            description="Country data is unavailable."
            headingLevel="h1"
          />
        </PageContainer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-900 dark:text-white">
      <PageContainer className="py-8 sm:py-10 lg:py-12">
        <div className="detail-reveal" style={{ "--reveal-delay": "0ms" }}>
          <BackButton />
        </div>

        <section
          className="detail-reveal mt-10 grid gap-10 sm:mt-12 lg:mt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-16 xl:gap-24"
          style={{ "--reveal-delay": "70ms" }}
        >
          <CountryFlag
            flags={country.flags}
            countryName={country.name?.common}
            countryCode={country.cca2}
          />

          <CountryInfo country={country} />
        </section>

        <div
          className="detail-reveal"
          style={{ "--reveal-delay": "140ms" }}
        >
          <BorderCountries
            borders={country.borders ?? []}
            countries={countries}
          />
        </div>
      </PageContainer>
    </div>
  );
}
