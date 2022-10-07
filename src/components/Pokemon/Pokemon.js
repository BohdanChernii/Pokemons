import React, {useEffect, useState} from 'react';
import {pokemonService} from "../../services/pokemon.service";
import {useLocation, useNavigate, useParams} from "react-router";

const Pokemon = ({pokemon}) => {
  const [pokemonDetails, setPokemonDetails] = useState()

  let id = pokemon.url.split('/pokemon/')
  const parsedId = parseInt(id[1]) + ''

  useEffect(() => {
    pokemonService.getById(parsedId).then(res => res.data).then(res => setPokemonDetails(res))
  }, [])

  const navigate = useNavigate()

  return (

      <div className={'pokemons__pokemon'} onClick={()=>navigate(parsedId, {state:pokemonDetails})}>
        <p className={'pokemons__pokemon-name'}>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</p>
        <div className={'pokemons__pokemon-types'}>
          {pokemonDetails?.types.map(item => (
            <p className={
              item.type.name}>{item.type.name[0].toUpperCase() + item.type.name.slice(1)
            }</p>
          ))}
        </div>
      </div>
  );
};

export default Pokemon;