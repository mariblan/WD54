import { useState, useEffect } from "react";
import {
  fetchCountries,
  fetchCountryById,
  createCountry,
} from "./Server/countryFetch";

import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({
    name: "",
    alpha2Code: "",
    alpha3Code: "",
    capital: "",
  });
  const [countryId, setCountryId] = useState("66fd27a43cea9b8c10840501");

  useEffect(() => {
    fetchCountries().then((data) => setCountries(data));
  }, []);
  console.log(countries);

  useEffect(() => {
    fetchCountryById(countryId);
  }, []);

  const handleChange = (e) => {
    setCountry({ ...country, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCountry(country).then((data) => {
      setCountries([...countries, data.newCountry]);
    });
    setCountry({ name: "", alpha2Code: "", alpha3Code: "", capital: "" });
  };
  return (
    <>
      <h1>Country list</h1>
      <ul>
        {countries.map((country) => (
          <li key={country._id}>{country.name}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Country name?</label>
          <input
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            value={country.name}
          />
        </div>
        <div>
          <label htmlFor="alpha2">Alpha 2 Code?</label>
          <input
            onChange={handleChange}
            type="text"
            id="alpha2"
            name="alpha2Code"
            value={country.alpha2Code}
          />
        </div>
        <div>
          <label htmlFor="alpha3">Alpha 3 Code?</label>
          <input
            onChange={handleChange}
            type="text"
            id="alpha3"
            name="alpha3Code"
            value={country.alpha3Code}
          />
        </div>
        <div>
          <label htmlFor="capital">Capital?</label>
          <input
            onChange={handleChange}
            type="text"
            id="capital"
            name="capital"
            value={country.capital}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default App;
