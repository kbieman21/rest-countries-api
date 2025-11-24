// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getCountryDetail } from "../api/countries";

// import type { Country } from "../api/type";

// function CountryDetailPage() {
//   const { name } = useParams<{ name: string }>();

//   const decodedName = name ? decodeURIComponent(name) : "";

//    const [borders, setBorders] = useState<Country[]>([]);

//   const [country, setCountry] = useState<Country | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!name) return;

//     async function fetchCountry() {
//       setLoading(true);
//       setError("");
//       try {
//         const res = await getCountryDetail(name);
//         setCountry(res.data[0]); // get the first object
//         console.log("API RESPONSE:", res.data[0].borders);

        
//       } catch {
//         setError("Failed to load country details.");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchCountry();
//   }, [name]);

//   if (loading) return <p>Loading country details...</p>;
//   if (error) return <p>{error}</p>;
//   if (!country) return <p>No country found.</p>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>{country.name.common}</h1>
//       <img src={country.flags.png} alt={country.name.common} style={{ width: "300px", borderRadius: "10px" }} />
//       <p>Official Name: {country.name.official}</p>
//       <p>Population: {country.population.toLocaleString()}</p>
//       <p>Region: {country.region}</p>
//       <p>Subregion: {country.subregion}</p>
//       <p>Capital: {country.capital?.[0]}</p>
//       <p>Top Level Domain: {country.tld?.[0]}</p>
//       <p>Currency: {country.currencies ? Object.keys(country.currencies)[0] : "N/A"}</p>
//       <p>Languages: {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
      
//       <div>

//       </div>
//     </div>
//   );
// }

// export default CountryDetailPage;


import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCountryDetail, getCountryByCode } from "../api/countries";
import type { Country } from "../api/type";

function CountryDetailPage() {
  const { name } = useParams<{ name: string }>();
  const decodedName = name ? decodeURIComponent(name) : "";

  const [country, setCountry] = useState<Country | null>(null);
  const [borders, setBorders] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // -----------------------------
  // Fetch main country details
  // -----------------------------
  useEffect(() => {
    async function fetchCountry() {
      try {
        setLoading(true);
        setError("");

        const res = await getCountryDetail(decodedName);
        const found = res.data[0];
        setCountry(found);

        // Fetch border countries if available
        if (found?.borders?.length > 0) {
          const borderFetch = await Promise.all(
            found.borders.map((code: string) => getCountryByCode(code))
          );

          setBorders(borderFetch.map((res) => res.data[0]));
        } else {
          setBorders([]);
        }
      } catch (err) {
        setError("Failed to load country details.");
      } finally {
        setLoading(false);
      }
    }

    fetchCountry();
  }, [decodedName]);

  // -----------------------------
  // Loading and error handling
  // -----------------------------
  if (loading) return <p style={{ padding: 20 }}>Loading country details...</p>;
  if (error) return <p style={{ padding: 20 }}>{error}</p>;
  if (!country) return <p>No country found.</p>;

  // For easier reads
  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  const currency =
    country.currencies ? Object.keys(country.currencies)[0] : "N/A";

  return (
    
    <div style={{ padding: "40px" }}>

         <header className="flex items-center text-black justify-between px-6 py-4 shadow-md max-w-7xl mx-auto">
    
      <h1 className="text-xl font-bold">Where in the world?</h1>
       <div id="dark-mode-toggle" className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
          <i className="fas fa-moon"></i>
          <span>Dark Mode</span>
    </div>  
  </header>

      <Link
        to="/"
        style={{
          display: "flex",
          padding: "8px 16px",
         
          borderRadius: "8px",
          marginBottom: "20px",
          textDecoration: "none",
          color: "black",
          justifyContent: "left"
        }}
        //className="mt-5 inline-flex justifyContent-left gap-2 bg-white px-8 py-2 rounded-md shadow hover:bg-gray-200 hover:shadow-lg transition transform hover:scale-105"
      >
        ← Back
      </Link>

      <div style={{ display: "flex", gap: "40px", alignItems: "left" }}>
        <img
          src={country.flags.png}
          alt={country.name.common}
        //   style={{
        //     width: "350px",
        //     borderRadius: "10px",
        //     boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        //   }}
        className="w-full max-w-lg h-auto rounded-md object-contain"
        />

        <div className="flex flex-col lg:flex-col gap-6 items-left lg:items-start">

        <h1 className="text-3xl font-bold mb-4">{country.name.common}</h1>
        <div  className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm grid-flow-col grid-rows-5">        
           
         

          <p>
            <strong>Official Name:</strong> {country.name.official}
          </p>
          <p>
            <strong>Population:</strong>{" "}
            {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Subregion:</strong> {country.subregion}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
          </p>

          <p>
            <strong>Top Level Domain:</strong> {country.tld?.[0]}
          </p>
          <p>
            <strong>Currency:</strong> {currency}
          </p>
          <p>
            <strong>Languages:</strong> {languages}
          </p>
        </div>
          {/* ----------------------------- */}
          {/* Border Countries */}
          {/* ----------------------------- */}
          <div style={{ marginTop: "20px" }}>
            <strong>Border Countries:</strong>

            {borders.length === 0 ? (
              <p>None</p>
            ) : (
              <div style={{ marginTop: "10px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {borders.map((borderCountry) => (
                  <Link
                    key={borderCountry.cca3}
                    to={`/detail/${encodeURIComponent(borderCountry.name.common)}`}
                    style={{
                      padding: "6px 12px",
                      border: "1px solid #ccc",
                      borderRadius: "6px",
                      textDecoration: "none",
                      background: "#fafafa",
                      color: "black",
                      fontSize: "14px",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                    }}
                  >
                    {borderCountry.name.common}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetailPage;
