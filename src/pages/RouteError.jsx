import { useEffect, useRef } from "react";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

import PageContainer from "../components/layout/PageContainer";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function getErrorMessage(error) {
  if (isRouteErrorResponse(error)) {
    return error.status === 404
      ? "The requested page could not be found."
      : "The requested page could not be loaded.";
  }

  return "An unexpected error occurred while displaying this page.";
}

export default function RouteError() {
  const error = useRouteError();
  const mainContentRef = useRef(null);

  useDocumentTitle("Something went wrong");

  useEffect(() => {
    mainContentRef.current?.focus();
  }, []);

  return (
    <main
      id="main-content"
      ref={mainContentRef}
      tabIndex={-1}
      className="min-h-screen bg-slate-50 text-slate-950 outline-none dark:bg-slate-900 dark:text-white"
    >
      <PageContainer className="flex min-h-screen items-center justify-center py-12 text-center">
        <section role="alert" aria-labelledby="route-error-title">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Application error
          </p>

          <h1
            id="route-error-title"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Something went wrong
          </h1>

          <p className="mx-auto mt-4 max-w-md text-slate-600 dark:text-slate-300">
            {getErrorMessage(error)} You can try again or return to the country
            list.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-4 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 dark:focus-visible:ring-white dark:focus-visible:ring-offset-slate-900"
            >
              Try again
            </button>

            <Link
              to="/"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-4 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 dark:focus-visible:ring-white dark:focus-visible:ring-offset-slate-900"
            >
              Return to countries
            </Link>
          </div>
        </section>
      </PageContainer>
    </main>
  );
}
