import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);

const THEME_STORAGE_KEY = "theme";

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialTheme() {
  if (typeof window == "undefined") {
    return "light";
  }

  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return getSystemTheme();
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const [hasStoredPreference, setHasStoresPreference] = useState(() => {
    if (typeof window == "undefined") {
      return false;
    }

    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    return storedTheme == "light" || storedTheme == "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    if (hasStoredPreference) {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function handleSystemThemeChange(e) {
      setTheme(e.matches ? "dark" : "light");
    }

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [hasStoredPreference]);

  function setPreferredTheme(nextTheme) {
    if (nextTheme !== "light" && nextTheme !== "dark") {
      return;
    }

    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setHasStoresPreference(true);
    setTheme(nextTheme);
  }

  function toggleTheme() {
    setPreferredTheme(theme == "dark" ? "light" : "dark");
  }

  function resetTheme() {
    localStorage.removeItem(THEME_STORAGE_KEY);
    setHasStoresPreference(false);
    setTheme(getSystemTheme());
  }

  const value = useMemo(
    () => ({
      theme,
      isDarkMode: theme === "dark",
      hasStoredPreference,
      setTheme: setPreferredTheme,
      toggleTheme,
      resetTheme,
    }),
    [theme, hasStoredPreference],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
