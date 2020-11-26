/* eslint-disable camelcase */
import { PokemonType } from '../components/Pokemon';

export interface IPokemon {
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

export interface IPokemonsResponse {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: IPokemon[];
}
