import React from 'react';
import {useLocation} from "react-router";

import './PokemonDetails.scss'

const PokemonDetails = () => {
  const location = useLocation()
  const {state} = location
  console.log(state);
  return (
    <div className={'pokemon'}>
      <img src="" alt="" className={'pokemon__image'}/>
      <h2 className="pokemon__title">{state.name} #{state.id}</h2>
      <div className="pokemon__info">
        <div className="pokemon__info-item">
          <p className={'label type'}>Type</p>
          <div className={'value type__value'}>
          {state.types.map(type => (
            <span>{type.type.name[0].toUpperCase() + type.type.name.slice(1)+" "}
            </span>
          ))}
          </div>
        </div>
        {state.stats.map(stat => (
          <div className="pokemon__info-item">
            <p className={'label'}>{stat.stat.name}</p>
            <p className={'value'}>{stat.base_stat}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonDetails;