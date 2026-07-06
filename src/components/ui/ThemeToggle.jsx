import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";

import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center gap-2 md:gap-4"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <FontAwesomeIcon icon={isDark ? solidMoon : regularMoon} />
      <span className="md:text-xl">{isDark ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
}
