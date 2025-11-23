import { useEffect, useState } from "react";
import { getAllCountries } from "../api/countries";


export function useFetchCountries() {
  const [countries, setCountries] = useState<any[]>([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCountry() {
      try {
        const res = await getAllCountries();
        setCountries(res.data || []);
        console.log("API RESPONSE:", res.data); //debug
      } catch (err) {
        setError("Failed to load countries");
      } finally {
        setLoading(false);
      }
    }

    fetchCountry();
    
  }, []);

  
  return { countries, loading, error};
}
