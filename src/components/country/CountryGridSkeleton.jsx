import React from "react";
import CountryCardSkeleton from "./CountryCardSkeleton";

export default function CountryGridSkeleton({ count = 8 }) {
  return (
    <section
      aria-label="Loading countries"
      className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {Array.from({ length: count }).map((_, index) => (
        <CountryCardSkeleton key={index} />
      ))}
    </section>
  );
}
