import {GET_FIRST_PAGE, GET_NEXT_PAGE} from "../actions/pokemon.actions";

const pokemonsReducer = (state = {pokemons: []}, action) => {
  switch (action.type) {
    case GET_FIRST_PAGE:
      return {...state, pokemons: action.payload}
    case GET_NEXT_PAGE:
      return {...state, pokemons: action.payload}
    default:
      return state
  }
}
export {pokemonsReducer}