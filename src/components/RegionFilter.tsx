// import { useState, useEffect } from "react";
// import { filterByRegion } from "../api/countries";
// import CountryCard from "./CoutryCard";


// interface Props {
//   onRegionChange: (region: string) => void;
// }
// function RegionFilter({onRegionChange}:Props) {
//   const [region, setRegion] = useState("");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   async function fetchRegionCountries(selectedRegion: string) {
//     setLoading(true);
//     setError("");

//     try {
//       const res = await filterByRegion(selectedRegion);
//       setResults(res.data || []);
     
      
//     } catch {
//       setError("No countries found for this region.");
//       setResults([]);
//     } finally {
//          console.log("Region Results", results);
//       setLoading(false);
//     }
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = e.target.value;
//     setRegion(value);

//     if (value) {
//       fetchRegionCountries(value);
//     } else {
//       setResults([]); // clear filter
//     }
//   };

//   return (
//     <div>
     

//       <select
//         className="p-2 border rounded-md shadow"
//         onChange={handleChange}
//         value={region}
//       >
//         <option value="">Select Region...</option>
//         <option value="Africa">Africa</option>
//         <option value="Americas">Americas</option>
//         <option value="Asia">Asia</option>
//         <option value="Europe">Europe</option>
//         <option value="Oceania">Oceania</option>
//       </select>

//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
//           gap: "20px",
//           marginTop: "20px",
//         }}
//       >
//         {results.map((country) => (
//           <CountryCard key={country.cca3} allCountries={country} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RegionFilter;

interface Props {
  onRegionChange: (region: string) => void;
}

function RegionFilter({ onRegionChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onRegionChange(e.target.value);
   
    
  };

  return (
    <div>
     
      <select onChange={handleChange} className="mt-2 md:mt-0 p-2 border rounded-md shadow-md" >
        <option value="">Select Region...</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
export default RegionFilter;


