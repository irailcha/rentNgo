import React from 'react';
import { CarCard } from '../CarCard/CarCard';
import { CardListStyle, CardItemStyle } from './CarList.styled';

export const CarList = ({ adverts, favoriteList, onClick}) => {
  if (!Array.isArray(adverts)) {
    return <div>No adverts available</div>;
  }

  

  return (
    <div>
      <CardListStyle>
        {adverts.map(advert => (
          <CardItemStyle key={advert.id}>
            <CarCard advert={advert} favoriteList={favoriteList} onClick={onClick}
/>
          </CardItemStyle>
        ))}
      </CardListStyle>
    </div>
  );
};
