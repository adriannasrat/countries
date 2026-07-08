import React from "react";

export default function RegionFilter({ value, regions, onChange }) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      aria-label="Filter countries by Region"
      className="w-56 rounded-md bg-white px-6 py-5 shadow-md outline-none focus:ring-2 focus:ring-slate-400 dark:bg-slate-800 dark:text-white border-white dark:border-slate-800 border-r-8"
    >
      <option value="">All Regions</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
}
