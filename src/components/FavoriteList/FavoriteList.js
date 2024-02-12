import React from 'react';
import { CarCard } from '../CarCard/CarCard';
import {
  CardItemStyle,
  CardListStyle,
  ButtonFavoriteStyle,
  IconFavoriteStyle,
  TextStyle,
} from './FavoriteList.style';
import sprite from '../../images/sprite.svg#sprite';
export const FavoriteList = ({
  favoriteList,
  isFavorite,
  changeFavoriteList,
}) => {
  return (
    <div>
      {favoriteList.length === 0 ? (
        <TextStyle>No favorite yet</TextStyle>
      ) : (
        <CardListStyle>
          {favoriteList.map(advert => (
            <CardItemStyle key={advert.id}>
              <ButtonFavoriteStyle onClick={() => changeFavoriteList(advert)}>
                <IconFavoriteStyle
                  isFavorite={favoriteList.some(item => item.id === advert.id)}
                >
                  <use href={`${sprite}#icon-normal-1`}></use>
                </IconFavoriteStyle>
              </ButtonFavoriteStyle>
              {<CarCard car={advert} />}
            </CardItemStyle>
          ))}
        </CardListStyle>
      )}
    </div>
  );
};
