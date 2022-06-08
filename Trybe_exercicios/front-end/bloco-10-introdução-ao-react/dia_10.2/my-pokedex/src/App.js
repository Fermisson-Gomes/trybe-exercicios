import pokemons from './data';
import { Pokemon } from './Pokemon';

function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <div className='pokedex'>
        {pokemons.map(item => {
          return <Pokemon pokemon={item} key={item.id}/>
        })}
      </div>
    </div>
  );
}

export default App;
