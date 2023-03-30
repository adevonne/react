function NavBar({ setPokemonIndex, pokemonIndex, pokemonList }) {
  const precedent = () => {
    setPokemonIndex(pokemonIndex > 0 ? pokemonIndex - 1 : pokemonIndex);
  };

  const suivant = () => {
    setPokemonIndex(
      pokemonIndex < pokemonList.length - 1 ? pokemonIndex + 1 : pokemonIndex
    );
  };
  return (
    <>
      <button onClick={precedent}>precedent</button>
      <button onClick={suivant}>suivant</button>
    </>
  );
}

export default NavBar;
