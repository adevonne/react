import PropTypes from "prop-types";

function PokemonCard({ pokemonList }) {
  return (
    <figure>
      {pokemonList.imgSrc ? (
        <img src={pokemonList.imgSrc} alt={pokemonList.name} />
      ) : (
        "???"
      )}
      <figcaption>{pokemonList.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemonList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
