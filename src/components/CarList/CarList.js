import sprite from '../../images/sprite.svg#sprite';
import { CarCard } from '../CarCard/CarCard';
import {
  CardListStyle,
  CardItemStyle,
  ButtonFavoriteStyle,
  IconFavoriteStyle,
} from './CarList.styled';

export const CarList = ({ adverts }) => {
  return (
    <div>
      <CardListStyle>
        {adverts.map(advert => (
          <CardItemStyle key={advert._id}>
            <ButtonFavoriteStyle
              onClick={() => console.log('Зміна улюбленого оголошення')}
            >
              <IconFavoriteStyle>
                <use href={`${sprite}#icon-normal-1`}></use>
              </IconFavoriteStyle>
            </ButtonFavoriteStyle>
            <CarCard car={advert} />
          </CardItemStyle>
        ))}
      </CardListStyle>
    </div>
  );
};
