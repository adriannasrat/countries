import CountryCard from "./CountryCard";

export default function CountryGrid({ countries = [] }) {
  return (
    <section aria-labelledby="countries-heading" className="mt-8 sm:mt-10">
      <h2 id="countries-heading" className="sr-only">
        Countries
      </h2>

      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4">
        {countries.map((country) => (
          <li key={country.cca3} className="h-full">
            <CountryCard country={country} />
          </li>
        ))}
      </ul>
    </section>
  );
}
