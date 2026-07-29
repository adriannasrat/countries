const HOME_SCROLL_POSITION_KEY = "countries-home-scroll-position";

export function saveHomeScrollPosition(position) {
  sessionStorage.setItem(HOME_SCROLL_POSITION_KEY, String(position));
}

export function getHomeScrollPosition() {
  const storedValue = sessionStorage.getItem(HOME_SCROLL_POSITION_KEY);

  if (storedValue === null) {
    return null;
  }

  const value = Number(storedValue);

  return Number.isFinite(value) ? value : null;
}

export function clearHomeScrollPosition() {
  sessionStorage.removeItem(HOME_SCROLL_POSITION_KEY);
}
