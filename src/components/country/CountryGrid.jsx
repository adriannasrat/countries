import CountryCard from "./CountryCard";

export default function CountryGrid({ countries = [] }) {
  return (
    <section
      aria-label="Countries"
      className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4"
    >
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </section>
  );
}
