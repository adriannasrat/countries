import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <label className="relative block w-full md:max-w-md">
      <span className="sr-only">Search for a country</span>

      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="pointer-events-none absolute left-8 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </svg>

      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for a country..."
        className="w-full rounded-md bg-white py-5 pl-20 pr-6 shadow-md outline-none placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400 dark:focus-visible:ring-white dark:focus-visible:ring-offset-slate-900"
      />
    </label>
  );
};

export default SearchBar;
