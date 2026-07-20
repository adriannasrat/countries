export default function CountryCardSkeleton() {
  return (
    <article
      aria-hidden="true"
      className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-slate-800"
    >
      <div className="aspect-[3/2] animate-pulse bg-slate-200 dark:bg-slate-700" />

      <div className="space-y-4 px-5 py-6 sm:px-6">
        <div className="h-6 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />

        <div className="space-y-3">
          <div className="h-4 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-4 w-4/5 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
        </div>
      </div>
    </article>
  );
}
