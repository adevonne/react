import React from "react"; 

function PokemonCard(props) {
  const {pokemon} = props
  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} />  : "???" }
    <figcaption>{pokemon.name}</figcaption>
  </figure>
  ); 
}

export default PokemonCard;
