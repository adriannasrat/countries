export default function CountryFlag({ flags, countryName }) {
  const source = flags?.svg || flags?.png;
  const alt = flags?.alt || `Flag of ${countryName}`;

  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg">
      {source ? (
        <img
          src={source}
          alt={alt}
          className="max-h-full max-w-full object-contain shadow-lg"
        />
      ) : (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Flag unavailable
        </p>
      )}
    </div>
  );
}
