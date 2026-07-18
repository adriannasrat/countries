import React from "react";

export default function ErrorState() {
  const title = "Unable to load countries";
  const description =
    "There was an error while fetching the countries. Please try again later.";
  return (
    <section
      role="alert"
      className="flex min-h-[300px] flex-col items-center justify-center text-center"
    >
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
        {title}
      </h2>
      <p className="mt-3 max-w-md text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </section>
  );
}
