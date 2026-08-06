import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";

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
      <FontAwesomeIcon
        icon={isDarkMode ? solidMoon : regularMoon}
        aria-hidden="true"
      />
      <span className="hidden sm:inline">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}
