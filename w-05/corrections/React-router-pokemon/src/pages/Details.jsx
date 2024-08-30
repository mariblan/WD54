import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Details({ pokemons, pokemon, setPokemon, setError, error }) {
  const { name } = useParams();
  const [currentP, setCurrentP] = useState(null);
  console.log(name);
  console.log(pokemons);

  useEffect(() => {
    const poke = pokemons.find((pokemon) => {
        if (pokemon.name === name) return pokemon;
    })
    console.log(poke);

    if (pokemons.length > 0)
      setPokemon(
        pokemons.find((pokemon) => {
          console.log(pokemon);
          if (pokemon.name === name) return pokemon;
        })
      );
  }, [name, pokemons]);

  console.log(pokemon);

  useEffect(() => {
    if (pokemon) {
      fetch(pokemon.url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCurrentP(data);
        })
        .catch((error) => {
          console.error(error);
          setError(error);
        });
    }
  }, [pokemon]);

  console.log(currentP);
  return currentP && (
    <div>
      <h2>{currentP.name}</h2>
      <ul>
        {currentP.abilities.map((a, index) => (
          <li key={index}>{a.ability.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Details;
