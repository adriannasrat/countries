import { Link } from "react-router-dom";

import PageContainer from "../components/layout/PageContainer";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 dark:bg-slate-900">
      <PageContainer className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 text-center">
        <section aria-labelledby="not-found-title">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Error 404
          </p>

          <h1
            id="not-found-title"
            className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl"
          >
            Page not found
          </h1>

          <p className="mx-auto mt-4 max-w-md text-slate-600 dark:text-slate-300">
            The page you requested does not exist or may have been moved.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-4 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 dark:focus-visible:ring-white dark:focus-visible:ring-offset-slate-900"
          >
            Return to countries
          </Link>
        </section>
      </PageContainer>
    </div>
  );
}
