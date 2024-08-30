import { Link } from 'react-router-dom';

function Home({ pokemons }) {
  console.log(pokemons);
  return (
  <div>
    <h1>Pokemons</h1>
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>
          <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
        </li>
      ))}
    </ul>
    
  </div>

  );
}

export default Home;
