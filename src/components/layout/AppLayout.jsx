import { useLayoutEffect, useRef } from "react";
import {
  Outlet,
  ScrollRestoration,
  useLocation,
  useNavigationType,
} from "react-router-dom";

import Navbar from "./Navbar";
import SkipLink from "./SkipLink";

export default function AppLayout() {
  const mainContentRef = useRef(null);
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (navigationType === "POP") {
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
    mainContentRef.current?.focus({ preventScroll: true });
  }, [navigationType, pathname]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 transition-colors dark:bg-slate-900 dark:text-white">
      <SkipLink />
      <Navbar />

      <main
        id="main-content"
        ref={mainContentRef}
        tabIndex={-1}
        className="outline-none"
      >
        <Outlet />
      </main>

      <ScrollRestoration />
    </div>
  );
}
