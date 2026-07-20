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

export async function fetchCountries() {
  const response = await fetch(COUNTRIES_API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  const countries = await response.json();

  return countries.map(normalizeCountry);
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
