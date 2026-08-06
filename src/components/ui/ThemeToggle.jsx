import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  const nextTheme = isDarkMode ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={isDarkMode}
      title={`Switch to ${nextTheme} mode`}
      className="inline-flex shrink-0 items-center gap-2 rounded-md px-2 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 hover:cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 dark:text-white dark:hover:bg-slate-700 dark:focus-visible:ring-white dark:focus-visible:ring-offset-slate-800 sm:px-3"
    >
      {isDarkMode ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      )}
      <span className="hidden sm:inline">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}
