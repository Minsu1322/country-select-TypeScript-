import React, { useEffect, useState } from "react";
import { Country } from "../types/country";
import { getContries } from "../api/CountryApi";
import CountryCard from "./CountryCard";
import { StyledSelectedCountryDiv } from "./../style/StyledCountryList";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCoutries = async () => {
      try {
        const data: Country[] = await getContries();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCoutries();
  }, []);

  const handleSelect = (country: Country) => {
    setSelectedCountries((prevSelected) => [...prevSelected, country]);
    setCountries((prevCountries) =>
      prevCountries.filter((c) => c.name.common !== country.name.common)
    );
  };

  const cancelSelect = (country: Country) => {
    setSelectedCountries((prevCountries) =>
      prevCountries.filter((c) => c.name.common !== country.name.common)
    );
    setCountries((prevSelected) => [...prevSelected, country]);
  };

  return (
    <div>
      <h1>선택한 나라목록</h1>

      <StyledSelectedCountryDiv>
        {selectedCountries
          .sort((a: Country, b: Country) =>
            a.name.common.localeCompare(b.name.common)
          )

          .map((country: Country) => (
            <CountryCard
              key={country.name.common}
              country={country}
              onSelect={cancelSelect}
            />
          ))}
      </StyledSelectedCountryDiv>

      <h1>나라목록</h1>
      <StyledSelectedCountryDiv>
        {countries
          .sort((a: Country, b: Country) =>
            a.name.common.localeCompare(b.name.common)
          )

          .map((country: Country) => (
            <CountryCard
              key={country.name.common}
              country={country}
              onSelect={handleSelect}
            />
          ))}
      </StyledSelectedCountryDiv>
    </div>
  );
};

export default CountryList;
