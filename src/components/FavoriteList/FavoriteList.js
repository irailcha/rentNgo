import React from 'react';

import sprite from '../../images/sprite.svg#sprite';
import { ButtonFavoriteStyle, IconFavoriteStyle } from './FavoriteList.style';

export const FavoriteList = ({isFavorite, handleChangeFavorite}) => {

  return (
    <ButtonFavoriteStyle onClick={handleChangeFavorite}>
      <IconFavoriteStyle>
        <use
          href={`${sprite}#${isFavorite ? 'icon-active' : 'icon-normal-1'}`}
        ></use>
      </IconFavoriteStyle>
    </ButtonFavoriteStyle>
  );
};
