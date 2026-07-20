import { Link } from "react-router-dom";

export default function CountryCard({ country }) {
  const name = country.name?.common ?? "Unknown country";
  const population =
    country.population?.toLocaleString("en") ?? "Unknown population";
  const region = country.region ?? "Unknown region";
  const capital = country.capital?.[0] ?? "No capital";
  const flag = country.flags?.png || country.flags?.svg || "";
  const flagAlt = country.flags?.alt ?? `Flag of ${name}`;
  const countryCode = country.cca3;

  const content = (
    <article className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800">
      <div className="aspect-[3/2] w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
        {flag ? (
          <img
            src={flag}
            alt={flagAlt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-500 dark:text-slate-400">
            Flag unavailable
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 py-6 sm:px-6">
        <h2 className="mb-4 line-clamp-2 text-lg font-bold leading-snug text-slate-950 dark:text-white">
          {name}
        </h2>

        <div className="mt-auto space-y-1.5 text-sm leading-6 text-slate-700 dark:text-slate-200">
          <p>
            <span className="font-semibold text-slate-950 dark:text-white">
              Population:
            </span>{" "}
            {population}
          </p>

          <p>
            <span className="font-semibold text-slate-950 dark:text-white">
              Region:
            </span>{" "}
            {region}
          </p>

          <p>
            <span className="font-semibold text-slate-950 dark:text-white">
              Capital:
            </span>{" "}
            {capital}
          </p>
        </div>
      </div>
    </article>
  );

  if (!countryCode) {
    return content;
  }

  return (
    <Link
      to={`/country/${countryCode}`}
      aria-label={`View details for ${name}`}
      className="block h-full rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-4 dark:focus-visible:ring-white dark:focus-visible:ring-offset-slate-900"
    >
      {content}
    </Link>
  );
}
