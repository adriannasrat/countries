export default function CountryCard({ country }) {
  const name = country.name?.common ?? "Uknown country";
  const population =
    country.population?.toLocaleString("en") ?? "Unknown population";
  const region = country.region ?? "Unknown region";
  const capital = country.capital?.[0] ?? "No capital";
  const flag =
    (country.flags?.png || country.flags?.svg || country.flags?.svg.png) ?? "";
  const flagAlt = country.flags?.alt ?? `Flag of ${name}`;

  return (
    <article className="overflow-hidden rounded-md bg-white shadow-md transition hover:translate-y-1 hover:shadow-lg dark:bg-slate-800">
      <img src={flag} alt={flagAlt} className="h-44 w-full object-cover" />
      <div className="px-6 py-7">
        <h2 className="truncate mb-4 text-lg font-bold text-slate-950 dark:text-white">
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
}
