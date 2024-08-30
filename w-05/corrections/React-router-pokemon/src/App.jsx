import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home pokemons={pokemons} />} />
        <Route
          path='/pokemon/:name'
          element={
            <Details
              pokemons={pokemons}
              pokemon={pokemon}
              setPokemon={setPokemon}
              setError={setError}
              error={error}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
