import { Link } from "react-router-dom";
import type { Country } from "../api/type";

interface Props {
  allCountries: Country;
}

function CountryCard({ allCountries }: Props) {
  return (
    <div>
      <Link
        to={`/detail/${encodeURIComponent(allCountries.name.common)}`}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        // className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div
       
      >
          <img
            src={allCountries.flags.png}
            alt={allCountries.name.common}
            
          />
          <h3>{allCountries.name.common}</h3>
          <p>Population: {allCountries.population}</p>
          <p>Region: {allCountries.region}</p>
          <p>Capital: {allCountries.population}</p>
        </div>
      </Link>
    </div>
  );
}

export default CountryCard;
