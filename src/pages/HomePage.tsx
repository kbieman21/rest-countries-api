

import { useFetchCountries } from "../hooks/useFetchCountries";
import CountryCard from "../components/CoutryCard";

function HomePage() {
  const { countries } = useFetchCountries();

  return (
    <>
      <h1>Home Page</h1>
       {/* {countries && countries.map((country) => (
        <Link to={`/country/${country.cca3}`}>
            <div>
                 <img src={country.flags.png} alt={country.name.common} />
            <h3>{country.name.common}</h3>
            </div>
           
        </Link>
      )
        
      )} */}
      <div
        // style={{
        //   display: "grid",
        //   gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        //   gap: "20px",
        //   marginTop: "20px",
        // }}
      >
        {countries.map(cat => (
          <CountryCard allCountries={cat} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
