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
    <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <h2 className="shrink-0 text-sm font-semibold text-slate 950 dark:text-white">
        Border Countries:
      </h2>

      {borderCountries.length > 0 ? (
        <div className="flex flex-wrap gap-3">
          {borderCountries.map((country) => (
            <Link
              key={country.cca3}
              to={`/country/${country.cca3}`}
              className="rounded-md bg-white px-4 py-2 text-sm text-slate-700 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 dark:bg-slate-800 dark:text-slate-200 dark:focus-visible:ring-white dark:focus-visible:ring-offset-slate-900"
            >
              {country.name.common}
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-600 darl:text-slate-300">
          No border countries
        </p>
      )}
    </div>
  );
}
