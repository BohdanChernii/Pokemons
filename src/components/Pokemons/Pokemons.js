import React, {useEffect, useState} from 'react';
import {pokemonService} from "../../services/pokemon.service";
import {useDispatch, useSelector} from "react-redux";
import {GET_FIRST_PAGE, GET_NEXT_PAGE} from "../../actions/pokemon.actions";
import Pokemon from "../Pokemon/Pokemon";
import './Pokemons.scss'
import {Outlet} from "react-router";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([])
  let [page, setPage] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    pokemonService.getFirst().then(res => dispatch({
      type: GET_FIRST_PAGE,
      payload: res.data
    })).then((res) => setPokemons(res.payload.results))

  }, [])

  const nextPage = async () => {
    await setPage(page += 1)
    await pokemonService.getNext(pokemons.length, page)
      .then(res => dispatch({type: GET_NEXT_PAGE, payload: res.data}))
      .then(res => setPokemons(res.payload.results))

  }
  console.log(pokemons);
  return (
    <div className={'page'}>
      <div className={'pokemons'}>
        {pokemons.map(pokemon => (
          <Pokemon pokemon={pokemon}/>
        ))}
        <button className={'pokemons__button'} onClick={() => nextPage()}>Load More</button>

      </div>
      <Outlet/>
    </div>
  );
};

export default Pokemons;