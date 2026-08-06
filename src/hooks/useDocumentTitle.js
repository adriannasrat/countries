import { useEffect } from "react";

const APPLICATION_NAME = "Where in the world?";

export function useDocumentTitle(pageTitle) {
  useEffect(() => {
    document.title = pageTitle
      ? `${pageTitle} | ${APPLICATION_NAME}`
      : APPLICATION_NAME;
  }, [pageTitle]);
}
