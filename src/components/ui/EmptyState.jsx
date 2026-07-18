import React from "react";

export default function EmptyState() {
  const title = "No countries found";
  const description =
    "Try adjusting your search or filter to find what you're looking for!";
  return (
    <div className="flex min-h-64 flex-col items-center justify-center text-center">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
        {title}
      </h2>
      <p className="mt2 text-slate-500 text-sm dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}
