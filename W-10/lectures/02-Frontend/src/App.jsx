import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [countries, setCountries] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  console.log(countries);
  return (
    <>
      <h1>Country list</h1>
    </>
  );
}

export default App;
