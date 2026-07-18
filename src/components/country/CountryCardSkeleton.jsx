import React from "react";

export default function CountryCarsSkeleton() {
  return (
    <article
      aria-hidden="true"
      className="overflow-hidden rounded-md bg-white shadow-sm dark:bg-slate-800"
    >
      <div className="aspect-[16/10] animate-pulse bg-slate-200 dark:bg-slate-700" />
      <div className="space-y-4 p-6">
        <div className="h-6 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />

        <div className="space-y-3">
          <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-4 w-3/5 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
        </div>
      </div>
    </article>
  );
}
