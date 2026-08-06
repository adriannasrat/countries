import React from "react";

export default function RegionFilter({ value, regions, onChange }) {
  return (
    <label className="block w-full md:w-56">
      <span className="sr-only">Filter countries by region</span>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full cursor-pointer rounded-md border-r-8 border-white bg-white px-6 py-5 shadow-md outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-800 dark:text-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-slate-900"
      >
        <option value="">All Regions</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </label>
  );
}
