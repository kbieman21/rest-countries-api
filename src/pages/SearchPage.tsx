import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCountryByName } from "../api/countries";
import CountryCard from "../components/CoutryCard";



function SearchPage() {
  const { query } = useParams();


  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchSearch() {
      setLoading(true);
      setError("");

      try {
        const res = await getCountryByName(query!);
        setResults(res.data || []);
        console.log('Params', query);
        console.log(res.data);
        
        console.log('Result', results);
        
        
      } catch (err) {
        setError("No countries found.");
        setResults([]);
      } finally {
        setLoading(false);
      }
    }

    if (query) fetchSearch();
  }, [query]);

  if (loading) return <p style={{ padding: "20px" }}>Searching...</p>;

  if (error)
    return <p style={{ padding: "20px" }}>{error} (“{query}”)</p>;

  if (results.length === 0)
    return <p style={{ padding: "20px" }}>No results found for "{query}".</p>;

  return (
    
    <div style={{ padding: "20px" }}>
      <h1>Search Results for “{query}”</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        
        {results.map((country) => (
          <CountryCard key={country.cca3} allCountries={country} />
        ))}
      </div>
    </div>
   
  );
}

export default SearchPage;
