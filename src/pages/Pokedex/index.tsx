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

const PokedexPage = () => {
  const [total, setTotal] = useState(0);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(`http://zar.hosthot.ru/api/v1/pokemons?limit=${POKEMON_PER_PAGE}`)
      .then((res) => res.json())
      .then((data: IPokemonsResponse) => {
        setTotal(data.total);
        setPokemons(data.pokemons);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
          {total} <b>Pokemons</b> for you to choose your favorite
        </Heading>

        <div className={s.pokemonList}>
          {pokemons.map((pokemon) => (
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
