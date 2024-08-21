import React from 'react';
import { CarCard } from '../CarCard/CarCard';
import { CardListStyle, CardItemStyle } from './CarList.styled';

export const CarList = ({ adverts}) => {
  if (!Array.isArray(adverts)) {
    return <div>No adverts available</div>;
  }

  

  return (
    <div>
      <CardListStyle>
        {adverts.map(advert => (
          <CardItemStyle key={advert.id}>
            <CarCard car={advert}
/>
          </CardItemStyle>
        ))}
      </CardListStyle>
    </div>
  );
};
