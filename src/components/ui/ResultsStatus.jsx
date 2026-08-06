export default function ResultsStatus({
  currentPage,
  pageSize,
  totalResults,
  visibleResults,
}) {
  if (totalResults === 0 || visibleResults === 0) {
    return null;
  }

  const firstResult = (currentPage - 1) * pageSize + 1;
  const lastResult = firstResult + visibleResults - 1;
  const resultLabel = totalResults === 1 ? "country" : "countries";

  return (
    <p
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="mt-8 text-sm text-slate-600 dark:text-slate-300"
    >
      Showing {firstResult}–{lastResult} of {totalResults} {resultLabel}
    </p>
  );
}
