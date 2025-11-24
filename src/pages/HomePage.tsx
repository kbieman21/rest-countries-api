import { useFetchCountries } from "../hooks/useFetchCountries";
import CountryCard from "../components/CoutryCard";
import NavBar from "../components/NavBar";

function HomePage() {
  const { countries, loading: loadingAll } = useFetchCountries();

  if (!countries) return <p>No countries found ...</p>;
  return (
    <>
      <NavBar />
      {/* {countries && countries.map((country) => (
        <Link to={`/country/${country.cca3}`}>
            <div>
                 <img src={country.flags.png} alt={country.name.common} />
            <h3>{country.name.common}</h3>
            </div>
           
        </Link>
      )
        
      )} */}

      
      
      
     
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
         
          {countries.map((con) => (
            <CountryCard key={con.cca3} allCountries={con} />
          ))}
        </div>
      
    </>
  );
}

export default HomePage;
