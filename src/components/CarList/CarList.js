import { CarCard } from '../CarCard/CarCard';

import { CardListStyle, CardItemStyle } from './CarList.styled';

export const CarList = ({ adverts }) => {
  return (
    <div>
      <CardListStyle>
        {adverts.map(advert => (
          <CardItemStyle key={advert._id}>
            <CarCard key={advert._id} car={advert} />
          </CardItemStyle>
        ))}
      </CardListStyle>
    </div>
  );
};
