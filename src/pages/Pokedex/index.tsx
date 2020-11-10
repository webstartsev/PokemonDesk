import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Pokemon from '../../components/Pokemon';

import POKEMONS from '../../mock/pokemon';

import s from './Pokedex.module.scss';

const PokedexPage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <Heading tag="h1" className={s.contentTitle}>
          800 <b>Pokemons</b> for you to choose your favorite
        </Heading>

        <div className={s.pokemonList}>
          {POKEMONS.map((pokemon) => {
            return (
              <Pokemon
                name={pokemon.name}
                attack={pokemon.stats.attack}
                defense={pokemon.stats.defense}
                types={pokemon.types}
                img={pokemon.img}
              />
            );
          })}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default PokedexPage;
