import { StyledCountryCardDiv } from "../style/StyledCountryList";
import { Country } from "../types/country";

type CountryCard = {
  country: Country;
  onSelect: (country: Country) => void;
};

const CountryCard: React.FC<CountryCard> = ({ country, onSelect }) => {
  return (
    <StyledCountryCardDiv onClick={() => onSelect(country)}>
      <img src={country.flags.svg} style={{ width: "90px", height: "50px" }} />
      <h3>{country.name.common}</h3>
      <h4 style={{ color: "gray" }}>{country.capital}</h4>
    </StyledCountryCardDiv>
  );
};

export default CountryCard;
