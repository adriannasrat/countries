export function normalizeCountry(country) {
  return {
    name: {
      common: country.name,
      nativeName: {
        default: {
          official: country.nativeName || country.name,
        },
      },
    },
    capital: country.capital ? [country.capital] : [],
    region: country.region,
    subregion: country.subregion,
    population: country.population,
    flags: {
      svg: country.flags?.svg || country.flag,
      png: country.flags?.png || country.flag,
      alt: `Flag of ${country.name}`,
    },
    currencies: Array.isArray(country.currencies)
      ? Object.fromEntries(
          country.currencies.map((currency) => [
            currency.code,
            {
              name: currency.name,
              symbol: currency.symbol,
            },
          ]),
        )
      : {},
    languages: Array.isArray(country.languages)
      ? Object.fromEntries(
          country.languages.map((language) => [
            language.iso639_1 || language.name,
            language.name,
          ]),
        )
      : {},
    tld: country.topLevelDomain || [],
    borders: country.borders || [],
    cca3: country.alpha3Code,
  };
}
