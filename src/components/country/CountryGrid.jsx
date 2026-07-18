import React, { useState } from "react";
import CountryCard from "./CountryCard";
import { useNavigate, Link } from "react-router-dom";

/* const CountryList = ({ filterCountries, selectedRegion }) => {
  const [showDetails, setShowDetails] = useState(null);
  const history = useNavigate();

  const handleToggleDetails = (countryName) => {
    setShowDetails(showDetails === countryName ? null : countryName);
  };

  const countriesToRender = filterCountries.filter(
    (country) => !selectedRegion || country.region === selectedRegion,
  );

  const navigateToCountryAbout = (country) => {
    history(`/country/${country.name.common}`, { state: { country } });
  };

  return (
    <div className="grid grid-container items-baseline gap-16 dark:bg-darkBg bg-white">
      {countriesToRender.map((country, index) => (
        // eslint-disable-next-line
        <a key={index} onClick={() => navigateToCountryAbout(country)}>
          <Country
            key={index}
            country={country}
            showDetails={showDetails}
            onToggleDetails={handleToggleDetails}
          />
        </a>
      ))}
      <ScrollToTop />
    </div>
  );
};

export default CountryList;
 */

export default function CountryGrid({ countries = [] }) {
  return (
    <section className="grid gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {countries.map((country) => (
        <Link
          key={country.cca3}
          to={`/country/${country.cca3}`}
          className="block"
        >
          <CountryCard country={country} />
        </Link>
      ))}
    </section>
  );
}
