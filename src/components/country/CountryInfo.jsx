import CountryInfoItem from "./CountryInfoItem.jsx";

export default function CountryInfo({ country }) {
  const name = country.name?.common ?? "Unknown country";

  const nativeName =
    country.name?.nativeName?.default?.official || country.name?.common;

  const population =
    country.population?.toLocaleString("en") || "Unknown population";

  const region = country.region ?? "Uknonwn region";
  const subregion = country.subregion ?? "Unknown subregion";
  const capital = country.capital?.join(", ") || "No capital";

  const topLevelDomains =
    country.tld?.length > 0 ? country.tld.join(", ") : "Not available";

  const currencyNames = Object.values(country.currencies ?? {})
    .map((currency) => currency.name)
    .filter(Boolean)
    .join(", ");

  const languageNames = Object.values(country.languages ?? {})
    .filter(Boolean)
    .sort((first, second) => first.localeCompare(second))
    .join(", ");

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
        {country.name?.common || "Unknown country"}
      </h1>

      <div className="mt-8 grid gap-10 sm:grid-cols-2">
        <div className="space-y-2">
          <CountryInfoItem label="Native Name" value={nativeName} />
          <CountryInfoItem label="Population" value={population} />
          <CountryInfoItem label="Region" value={region} />
          <CountryInfoItem label="Subregion" value={subregion} />
          <CountryInfoItem label="Capital" value={capital} />
        </div>

        <div className="space-y-2">
          <CountryInfoItem label="Top Level Domain" value={topLevelDomains} />

          <CountryInfoItem
            label="Currencies"
            value={currencyNames || "Not available"}
          />

          <CountryInfoItem
            label="Languages"
            value={languageNames || "Not available"}
          />
        </div>
      </div>
    </div>
  );
}
