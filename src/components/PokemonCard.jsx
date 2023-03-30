import React from "react"; 
import PropTypes from 'prop-types';


function PokemonCard(props) {
  const {pokemon} = props
  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} />  : "???" }
    <figcaption>{pokemon.name}</figcaption>
  </figure>
  ); 
}

PokemonCard.PropTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.isRequired, 
    imgSrc: PropTypes.object,
  })
}

export default PokemonCard;
