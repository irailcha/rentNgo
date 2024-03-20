import React from 'react';
import { CarCard } from '../CarCard/CarCard';

// import sprite from '../../images/sprite.svg#sprite';
import {
  CardListStyle,
  CardItemStyle,
  // ButtonFavoriteStyle,
  // IconFavoriteStyle,
} from './CarList.styled';

export const CarList = ({
  visibleAdverts,
  // favoriteList,
  // changeFavoriteList,
}) => {
  return (
    <CardListStyle>
      {visibleAdverts.map(advert => (
        <CardItemStyle key={advert._id}>
          {/* <ButtonFavoriteStyle onClick={() => changeFavoriteList(advert)}>
            <IconFavoriteStyle
            // isFavorite={favoriteList.some(item => item.id === advert._id)}
            >
              <use href={`${sprite}#icon-normal-1`}></use>
            </IconFavoriteStyle>
          </ButtonFavoriteStyle> */}
          <CarCard car={advert} />
        </CardItemStyle>
      ))}
    </CardListStyle>
  );
};
