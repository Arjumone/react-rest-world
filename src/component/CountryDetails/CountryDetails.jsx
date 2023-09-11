import React from "react";
import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
    const { country,handleVisitedCountry,handleVisitedFlag}=props
  return (
    <div>
      <h2>Country Details:</h2>
      {/* <CountryData>
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlag={handleVisitedFlag}
      </CountryData> */}
      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetails;
