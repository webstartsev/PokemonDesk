import React from 'react';
import cn from 'classnames';

import s from './Pokemon.module.scss';

export type PokemonType =
  | 'dark'
  | 'rock'
  | 'grass'
  | 'bug'
  | 'ice'
  | 'water'
  | 'fire'
  | 'fighting'
  | 'dragon'
  | 'normal'
  | 'gosth'
  | 'poison'
  | 'psychic'
  | 'fairy'
  | 'ghost'
  | 'ground'
  | 'electric'
  | 'flying';

interface IPokemonProps {
  name: string;
  attack: number;
  defense: number;
  types: PokemonType[];
  img: string;
}

const Pokemon: React.FC<IPokemonProps> = ({ name, attack, defense, types, img }) => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.info}>
          <div className={s.name}>{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}</div>
          <div className={s.stats}>
            <div className={s.stat}>
              <div className={s.stat_value}>{attack}</div>
              <div className={s.stat_title}>Attack</div>
            </div>
            <div className={s.stat}>
              <div className={s.stat_value}>{defense}</div>
              <div className={s.stat_title}>Defense</div>
            </div>
          </div>
          <div className={s.types}>
            {types.map((type) => (
              <div key={type} className={cn(s.type, s[type])}>
                {`${type.charAt(0).toUpperCase()}${type.slice(1)}`}
              </div>
            ))}
          </div>
        </div>
        <div className={cn(s.picture, s[types[0]])}>
          <img className={s.img} src={img} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
