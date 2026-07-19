export default function CountryInfoItem({ label, value }) {
  return (
    <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">
      <span className="font-semibold text-slate-950 dark:text-white">
        {label}:
      </span>{" "}
      <span>{value || "Not available"}</span>
    </p>
  );
}
