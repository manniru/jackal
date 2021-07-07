import ReactCountryFlag from "react-country-flag";

const fixBrokenFlags = (country) => {
  if (country === "Gambia")
    return (
      <ReactCountryFlag className="accordion__flag__img" svg countryCode="gm" />
    );
  if (country === "Bahamas")
    return (
      <ReactCountryFlag className="accordion__flag__img" svg countryCode="bs" />
    );
  if (country === "Ivory Coast")
    return (
      <ReactCountryFlag className="accordion__flag__img" svg countryCode="ci" />
    );
  if (country === "Kosovo")
    return (
      <ReactCountryFlag className="accordion__flag__img" svg countryCode="xk" />
    );
  if (country === "Myanmar")
    return (
      <ReactCountryFlag className="accordion__flag__img" svg countryCode="mm" />
    );
  if (country === "Palestine")
    return (
      <ReactCountryFlag className="accordion__flag__img" svg countryCode="ps" />
    );
  if (country === "Vatican City")
    return (
      <ReactCountryFlag className="accordion__flag__img" svg countryCode="va" />
    );
  if (country === "Virgin Islands of the United States")
    return (
      <ReactCountryFlag className="accordion__flag__img" svg countryCode="vi" />
    );
  if (country === "Netherlands Antilles")
    return <img className="accordion__flag__img" src="./an.svg" />;
  return null;
};

export { fixBrokenFlags };
