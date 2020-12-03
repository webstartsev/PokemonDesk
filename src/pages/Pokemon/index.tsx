import React from 'react';
import { Endpoint } from '../../utils/getUrlWithParamsConfig';
import useData from '../../hooks/getData';
import Loader from '../../components/Loader';
import { IPokemon } from '../../interface/pokemons';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<IPokemon>(Endpoint.getPokemon, { id });

  if (isLoading) {
    return <Loader />;
  }

  return <div>Pokemon page {data?.name}</div>;
};

export default Pokemon;
