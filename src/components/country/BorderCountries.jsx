import { Link } from "react-router-dom";

export default function BorderCountries({ borders, countries }) {
  const borderCountries = borders
    .map((borderCode) =>
      countries.find((country) => country.cca3 === borderCode),
    )
    .filter(Boolean)
    .sort((first, second) =>
      first.name.common.localeCompare(second.name.common),
    );

  return (
    <section className="mt-10 sm:mt-12 lg:mt-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-start">
        <h2 className="shrink-0 pt-2 text-sm font-semibold text-slate-950 dark:text-white">
          Border Countries:
        </h2>

        {borderCountries.length > 0 ? (
          <div className="flex min-w-0 flex-1 flex-wrap gap-2.5">
            {borderCountries.map((country) => (
              <Link
                key={country.cca3}
                to={`/country/${country.cca3}`}
                className="max-w-full rounded-md bg-white px-4 py-2 text-sm text-slate-700 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 dark:bg-slate-800 dark:text-slate-200 dark:focus-visible:ring-white dark:focus-visible:ring-offset-slate-900"
              >
                <span className="break-words">{country.name.common}</span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="pt-2 text-sm text-slate-600 dark:text-slate-300">
            No border countries
          </p>
        )}
      </div>
    </section>
  );
}
