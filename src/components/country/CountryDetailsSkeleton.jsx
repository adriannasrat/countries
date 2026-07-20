export default function CountryDetailsSkeleton() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 dark:bg-slate-900 md:px-10">
      <div className="mx-auto max-w-screen-2xl animate-pulse px-10 py-10 sm:px-20">
        <div className="h-10 w-28 rounded-md bg-slate-200 dark:bg-slate-700" />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[4/3] w-full rounded-md bg-slate-200 dark:bg-slate-700" />

          <div>
            <div className="h-9 w-52 rounded bg-slate-200 dark:bg-slate-700" />

            <div className="mt-8 grid gap-10 md:grid-cols-2">
              <div className="space-y-4">
                <div className="h-5 w-full rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-5 w-4/5 rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-5 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-5 w-5/6 rounded bg-slate-200 dark:bg-slate-700" />
              </div>

              <div className="space-y-4">
                <div className="h-5 w-full rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-5 w-4/5 rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-5 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
