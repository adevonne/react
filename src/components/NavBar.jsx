function NavBar({ setPokemonIndex, pokemonList }) {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button
          type="button"
          key={pokemon.name}
          onClick={() => setPokemonIndex(index)}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
