/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';

import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Pokemon, { PokemonType } from '../../components/Pokemon';

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

interface IData {
  pokemons: IPokemon[];
  total: number;
}

const usePokemons = () => {
  const [data, setData] = useState<IData>({ pokemons: [], total: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://zar.hosthot.ru/api/v1/pokemons?limit=${POKEMON_PER_PAGE}`);
        const result: IPokemonsResponse = await response.json();

        setData({ pokemons: result.pokemons, total: result.total });
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error :(</div>;
  }

  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <Heading tag="h1" className={s.contentTitle}>
          {data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>

        <div className={s.pokemonList}>
          {data.pokemons.map((pokemon) => (
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
      </Layout>
    </div>
  );
};

export default PokedexPage;
