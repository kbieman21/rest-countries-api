import { Link } from "react-router-dom";
import type { Country } from "../api/type";


interface Props{
    allCountries:Country;
}


function CountryCard({allCountries}:Props) {
   

  return (
    <>
     
      <Link
      to={`/detail/${allCountries.name.common}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          width: "220px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "10px",
          background: "white",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <img
          src={allCountries.flags.png}
          alt={allCountries.name.common}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <h3>{allCountries.name.common}</h3>
        <p>Population: {allCountries.population}</p>
        <p>Region: {allCountries.region}</p>
        <p>Capital: {allCountries.capital}</p>

      </div>
    </Link>
      
    </>
  );
}

export default CountryCard;
