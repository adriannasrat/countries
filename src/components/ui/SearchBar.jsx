import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full md:max-w-md">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for a country..."
        className="w-full rounded-md bg-white py-5 pl-20 pr-6 shadow-md outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-slate-400 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
      />
      <div className="absolute top-6 pl-8 md:pl-8"></div>
    </div>
  );
};

export default SearchBar;
