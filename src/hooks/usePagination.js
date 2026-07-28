import { useMemo } from "react";

function normalizePage(page) {
  const parsedPage = Number(page);

  if (!Number.isInteger(parsedPage) || parsedPage < 1) {
    return 1;
  }

  return parsedPage;
}

export function usePagination({ items, page, pageSize = 24, onPageChange }) {
  const requestedPage = normalizePage(page);

  const totalPages = Math.ceil(items.length / pageSize);

  const currentPage = totalPages > 0 ? Math.min(requestedPage, totalPages) : 1;

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return items.slice(startIndex, endIndex);
  }, [items, currentPage, pageSize]);

  function goToPage(nextPage) {
    if (totalPages === 0) {
      return;
    }

    const normalizedPage = Math.min(
      Math.max(normalizePage(nextPage), 1),
      totalPages,
    );

    onPageChange?.(normalizedPage);
  }

  function nextPage() {
    goToPage(currentPage + 1);
  }

  function previousPage() {
    goToPage(currentPage - 1);
  }

  return {
    currentPage,
    requestedPage,
    totalPages,
    paginatedItems,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
    nextPage,
    previousPage,
    goToPage,
  };
}
