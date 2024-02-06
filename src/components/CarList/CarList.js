import React, { useState } from 'react';
import { CarCard } from '../CarCard/CarCard';

import sprite from '../../images/sprite.svg#sprite';
import {
  CardListStyle,
  CardItemStyle,
  ButtonFavoriteStyle,
  IconFavoriteStyle,
} from './CarList.styled';

export const CarList = ({ data }) => {
  const [favoriteList, setFavoriteList] = useState([]);

  const changeFavoriteList = advertId => {
    setFavoriteList(prevList => {
      const favoriteAdvert = prevList.some(item => item.id === advertId);
      if (favoriteAdvert) {
        console.log('Видалено');
        return prevList.filter(item => item.id !== advertId);
      } else {
        console.log('Додано');
        return [...prevList, { id: advertId }];
      }
    });
  };

  return (
    <CardListStyle>
      {data.map(advert => (
        <CardItemStyle key={advert.id}>
          <ButtonFavoriteStyle onClick={() => changeFavoriteList(advert.id)}>
            <IconFavoriteStyle
              isFavorite={favoriteList.some(item => item.id === advert.id)}
            >
              <use href={`${sprite}#icon-normal-1`}></use>
            </IconFavoriteStyle>
          </ButtonFavoriteStyle>
          <CarCard car={advert} />
        </CardItemStyle>
      ))}
    </CardListStyle>
  );
};
