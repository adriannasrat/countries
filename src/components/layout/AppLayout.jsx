import { Outlet, ScrollRestoration } from "react-router-dom";

import Navbar from "./Navbar";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 transition-colors dark:bg-slate-900 dark:text-white">
      <Navbar />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}
