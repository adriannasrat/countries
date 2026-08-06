import { normalizeCountry } from "./mappers/countryMapper.js";

const COUNTRIES_API_BASE_URL = "https://countries.dev";

const COUNTRY_FIELDS = [
  "name",
  "capital",
  "region",
  "subregion",
  "population",
  "flags",
  "flag",
  "currencies",
  "languages",
  "topLevelDomain",
  "borders",
  "alpha3Code",
  "nativeName",
].join(",");

const COUNTRIES_API_URL = `${COUNTRIES_API_BASE_URL}/countries?fields=${COUNTRY_FIELDS}`;

let countriesCache = null;
let countriesRequest = null;

export function getCachedCountries() {
  return countriesCache;
}

export async function fetchCountries({ force = false } = {}) {
  if (!force && countriesCache) {
    return countriesCache;
  }

  if (!force && countriesRequest) {
    return countriesRequest;
  }

  const request = fetch(COUNTRIES_API_URL).then(async (response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }

    const countries = await response.json();

    return countries.map(normalizeCountry);
  });

  countriesRequest = request;

  try {
    countriesCache = await request;

    return countriesCache;
  } finally {
    if (countriesRequest === request) {
      countriesRequest = null;
    }
  }
}

export async function fetchCountryByCode(code) {
  if (!code) {
    throw new Error("Country code is required");
  }

  const countries = await fetchCountries();

  const country = countries.find(
    (item) => item.cca3?.toLowerCase() === code.toLowerCase(),
  );

  if (!country) {
    throw new Error(`Country with code "${code}" not found`);
  }

  return {
    country,
    countries,
  };
}
