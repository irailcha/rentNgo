import { CarCard } from '../CarCard/CarCard';
import { FavoriteList } from '../FavoriteList/FavoriteList';
import { CardListStyle, CardItemStyle } from './CarList.styled';

export const CarList = ({ adverts }) => {
  return (
    <div>
      <CardListStyle>
        {adverts.map(advert => (
          <CardItemStyle key={advert._id}>
            <FavoriteList advert={advert} />
            <CarCard car={advert} />
          </CardItemStyle>
        ))}
      </CardListStyle>
    </div>
  );
};
