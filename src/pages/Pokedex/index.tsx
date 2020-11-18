/* eslint-disable camelcase */
import React, { useState } from 'react';
import useData from '../../hooks/getData';
import { Endpoint, QueryParams } from '../../utils/getUrlWithParamsConfig';

import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Pokemon, { PokemonType } from '../../components/Pokemon';
import Loader from '../../components/Loader';

import s from './Pokedex.module.scss';

const POKEMON_PER_PAGE = 12;

interface IPokemon {
  name_clean: string;
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-defense': number;
    speed: number;
  };
  types: PokemonType[];
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}

interface IPokemonsResponse {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: IPokemon[];
}

interface IDataResponse {
  data: IPokemonsResponse | null;
  isLoading: boolean;
  isError: boolean;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<QueryParams>({ limit: POKEMON_PER_PAGE });

  const { data, isLoading, isError }: IDataResponse = useData<IPokemonsResponse>(Endpoint.getPokemons, query, [
    searchValue,
  ]);

  const changeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  if (isError) {
    return <div>Error :(</div>;
  }

  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <Heading tag="h1" className={s.contentTitle}>
          {data?.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>

        <div className={s.contentSearch}>
          <input
            type="text"
            className={s.search}
            value={searchValue}
            onChange={changeSearchHandler}
            placeholder="Encuentra tu pokémon..."
          />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={s.pokemonList}>
            {data?.pokemons.map((pokemon) => (
              <Pokemon
                key={pokemon.id}
                name={pokemon.name}
                attack={pokemon.stats.attack}
                defense={pokemon.stats.defense}
                types={pokemon.types}
                img={pokemon.img}
              />
            ))}
          </div>
        )}
      </Layout>
    </div>
  );
};

export default PokedexPage;
