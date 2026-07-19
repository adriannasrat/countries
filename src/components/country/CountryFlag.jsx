export default function CountryFlag({ flags, countryName }) {
  const source = flags?.svg || flags?.png;
  const alt = flags?.alt || `Flag of ${countryName}`;

  if (!source) {
    return (
      <div className="flex aspect-[4/3] w-full items-center justify-center rounded-md bg-slate-100 text-sm text-slate-500 dark:bg-slate-800 dark:text-slate-400">
        Flag unavailable
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md shadow-lg">
      <img
        src={source}
        alt={alt}
        className="aspect-[4/3] w-full object-cover"
      />
    </div>
  );
}
