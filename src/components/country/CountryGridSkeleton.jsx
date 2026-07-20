import CountryCardSkeleton from "./CountryCardSkeleton";

export default function CountryGridSkeleton({ count = 8 }) {
  return (
    <section
      aria-label="Loading countries"
      aria-busy="true"
      className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4"
    >
      {Array.from({ length: count }, (_, index) => (
        <CountryCardSkeleton key={index} />
      ))}
    </section>
  );
}
