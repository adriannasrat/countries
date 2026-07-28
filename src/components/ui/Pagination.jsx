function createPageItems(currentPage, totalPages) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages = new Set([
    1,
    totalPages,
    currentPage - 1,
    currentPage,
    currentPage + 1,
  ]);

  const validPages = [...pages]
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((first, second) => first - second);

  const items = [];

  validPages.forEach((page, index) => {
    const previousPage = validPages[index - 1];

    if (previousPage && page - previousPage > 1) {
      items.push(`ellipsis-${previousPage}`);
    }

    items.push(page);
  });

  return items;
}

export default function Pagination({
  currentPage,
  totalPages,
  hasNextPage,
  hasPreviousPage,
  onNextPage,
  onPreviousPage,
  onPageChange,
}) {
  if (totalPages <= 1) {
    return null;
  }

  const pageItems = createPageItems(currentPage, totalPages);

  const buttonClasses =
    "inline-flex min-h-10 min-w-10 items-center justify-center rounded-md px-3 text-sm font-medium shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 dark:focus-visible:ring-white dark:focus-visible:ring-offset-slate-900";

  return (
    <nav
      aria-label="Country pagination"
      className="mt-10 flex items-center justify-between gap-4 sm:mt-12 sm:justify-center"
    >
      <button
        type="button"
        onClick={onPreviousPage}
        disabled={!hasPreviousPage}
        className={`${buttonClasses} bg-white text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700`}
      >
        Previous
      </button>

      <p className="text-sm text-slate-600 dark:text-slate-300 sm:hidden">
        Page {currentPage} of {totalPages}
      </p>

      <div className="hidden items-center gap-2 sm:flex">
        {pageItems.map((item) =>
          typeof item === "string" ? (
            <span
              key={item}
              aria-hidden="true"
              className="px-1 text-slate-500 dark:text-slate-400"
            >
              ...
            </span>
          ) : (
            <button
              key={item}
              type="button"
              onClick={() => onPageChange(item)}
              aria-label={`Go to page ${item}`}
              aria-current={item === currentPage ? "page" : undefined}
              className={
                item === currentPage
                  ? `${buttonClasses} bg-slate-900 text-white dark:bg-white dark:text-slate-900`
                  : `${buttonClasses} bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700`
              }
            >
              {item}
            </button>
          ),
        )}
      </div>

      <button
        type="button"
        onClick={onNextPage}
        disabled={!hasNextPage}
        className={`${buttonClasses} bg-white text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700`}
      >
        Next
      </button>
    </nav>
  );
}
