import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ value, onChange }) => {
  return (
    <label className="relative block w-full md:max-w-md">
      <span className="sr-only">Search for a country</span>

      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        aria-hidden="true"
        className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 text-slate-400"
      />

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
