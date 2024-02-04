import React from 'react';
import { CarCard } from '../CarCard/CarCard';

import sprite from '../../images/sprite.svg#sprite';
import {
  CardListStyle,
  CardItemStyle,
  ButtonFavoriteStyle,
  IconFavoriteStyle,
} from './CarList.styled';

export const CarList = ({ data, onClick }) => {
  return (
    <CardListStyle>
      {data.map(advert => (
        <CardItemStyle key={advert.id}>
          <ButtonFavoriteStyle>
            <IconFavoriteStyle>
              <use href={`${sprite}#icon-normal-1`}></use>
            </IconFavoriteStyle>
          </ButtonFavoriteStyle>
          <CarCard car={advert} onLearnMoreClick={onClick} />
        </CardItemStyle>
      ))}
    </CardListStyle>
  );
};
