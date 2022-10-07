import logo from './logo.svg';
import './App.css';
import {Navigate, Route, Routes} from "react-router";
import MainLayout from "./layouts/MainLayout";
import Pokemons from "./components/Pokemons/Pokemons";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'pokemons'}/>}/>
          <Route path={'pokemons'} element={<Pokemons/>}>
            <Route path={':id'} element={<PokemonDetails/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
