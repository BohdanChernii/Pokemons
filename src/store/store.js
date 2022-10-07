import {createStore} from "redux";
import {pokemonsReducer} from "../reducers/pokemons.reducer";

export const store = createStore(pokemonsReducer)