import React from "react";
import { Link } from "react-router-dom";

import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md dark:bg-slate-800">
      <nav className="mx-auto flex items-center justify-between max-w-screen-2xl px-10 py-6 sm:px-20">
        <Link
          to="/"
          className="text-lg text-slate-950 dark:text-white font-bold md:text-2xl"
        >
          Where in the world?
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
