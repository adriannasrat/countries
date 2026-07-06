import React from "react";

import { useCountries } from "../hooks/useCountries";

export default function Home() {
  const { countries, isLoading, error } = useCountries();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white px-10 py-10 dark:bg-darkBg dark:text-white">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white px-10 py-10 dark:bg-darkBg dark:text-white">
        Error: {error}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white px-10 py-10 dark:bg-darkBg dark:text-white">
      <div className="mx-auto max-w-screen-2xl">
        <h1 className="text-2xl font-bold">Countries</h1>
        <p className="mt-4">Loaded {countries.length} countries.</p>
      </div>
    </main>
  );
}
