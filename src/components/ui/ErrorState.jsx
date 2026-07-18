import React from "react";

export default function ErrorState({
  title = "Unable to load countries",
  description = "Something went wrong while fetching the country data. Please try again.",
  onRetry,
}) {
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

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 hover:cursor-pointer rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 dark:focus:ring-offset-slate-900"
        >
          Try again
        </button>
      )}
    </section>
  );
}
