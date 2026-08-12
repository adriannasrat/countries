import FlagImage from "./FlagImage.jsx";

export default function CountryFlag({ flags, countryName, countryCode }) {
  const alt = flags?.alt || `Flag of ${countryName}`;
  const flagCdnFallback = countryCode
    ? `https://flagcdn.com/${countryCode.toLowerCase()}.svg`
    : "";

  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg">
      <FlagImage
        alt={alt}
        sources={[flags?.svg, flags?.png, flagCdnFallback]}
        fetchPriority="high"
        className="max-h-full max-w-full object-contain shadow-lg"
        fallbackClassName="text-sm text-slate-500 dark:text-slate-400"
      />
    </div>
  );
}
