import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegionFilter from "./RegionFilter";
import { useFetchCountries } from "../hooks/useFetchCountries";
import { filterByRegion } from "../api/countries";
import CountryCard from "./CoutryCard";

function NavBar() {
  const { countries, loading: loadingAll } = useFetchCountries();

  const [filteredCountries, setFilteredCountries] = useState([]);

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/search/${search}`);
    setSearch("");
  }

  const handleRegionChange = async (region: string) => {
    if (!region) {
      setFilteredCountries([]);
      return;
    }
    try {
      const res = await filterByRegion(region);
      setFilteredCountries(res.data || []);
    } catch (err) {
      setFilteredCountries([]);
    }
  };

  const countriesToShow = filteredCountries.length
    ? filteredCountries
    : countries;
  return (
    <>
      <header className="flex items-center text-black justify-between px-6 py-4 shadow-md max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">Where in the world?</h1>
        <div
          id="dark-mode-toggle"
          className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition"
        >
          <i className="fas fa-moon"></i>
          <span>Dark Mode</span>
        </div>
      </header>
      {/* Search Bar */}

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
         <form onSubmit={handleSearch} style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={search}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            width: "200px",
          }}
        />

        {/* <button
          type="submit"
          style={{
            padding: "8px 15px",
            border: "none",
            borderRadius: "6px",
            background: "black",
            color: "white",
            cursor: "pointer",
          }}
        >
          Search
        </button> */}
      </form>
      <RegionFilter onRegionChange={handleRegionChange} />
      </div>
     

      {countriesToShow.map((country) => (
        <CountryCard key={country.cca3} allCountries={country} />
      ))}
    </>
  );
}

export default NavBar;
