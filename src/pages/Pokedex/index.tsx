import React, { useState } from 'react';
import useData from '../../hooks/getData';
import useDebounce from '../../hooks/useDebounce';
import { Endpoint, QueryParams } from '../../utils/getUrlWithParamsConfig';
import { IPokemonsResponse } from '../../interface/pokemons';

import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Pokemon from '../../components/Pokemon';
import Loader from '../../components/Loader';

import s from './Pokedex.module.scss';

const POKEMON_PER_PAGE = 12;

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<QueryParams>({ limit: POKEMON_PER_PAGE });
  const debounceValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemonsResponse>(Endpoint.getPokemons, query, [debounceValue]);

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
