import { normalizeCountry } from "./mappers/countryMapper.js";

const COUNTRIES_API_URL =
  "https://countries.dev/countries?fields=name,capital,region,subregion,population,flags,flag,currencies,languages,topLevelDomain,borders,alpha3Code,nativeName";

export async function fetchCountries() {
  const response = await fetch(COUNTRIES_API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  const countries = await response.json();

  return countries.map(normalizeCountry);
}
