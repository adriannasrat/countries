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

  return (
    <article className="overflow-hidden rounded-md bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800">
      <img src={flag} alt={flagAlt} className="h-44 w-full object-cover" />

      <div className="px-6 py-7">
        <h2 className="mb-4 truncate text-lg font-bold text-slate-950 dark:text-white">
          {name}
        </h2>

        <div className="space-y-1 text-sm text-slate-700 dark:text-slate-200">
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
    return;
    cardContent;
  }

  return (
    <Link
      to={`/country/${countryCode}`}
      aria-label={`View details for ${name}`}
      className="block h-full rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-4 dark:focus-visible:ring-white"
    >
      {cardContent}
    </Link>
  );
}
