import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addFavoriteAdvert,
  deleteFavoriteAdvert,
} from '../../redux/Auth/operations';
import sprite from '../../images/sprite.svg#sprite';
import { ButtonFavoriteStyle, IconFavoriteStyle } from './FavoriteList.style';

export const FavoriteList = ({ advert }) => {
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);

  const handleChangeFavoriteAds = () => {
    if (isFavorite) {
      dispatch(deleteFavoriteAdvert(advert._id));
    } else {
      dispatch(addFavoriteAdvert(advert._id));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <ButtonFavoriteStyle onClick={handleChangeFavoriteAds}>
      <IconFavoriteStyle isFavorite={isFavorite}>
        <use href={`${sprite}#icon-normal-1`}></use>
      </IconFavoriteStyle>
    </ButtonFavoriteStyle>
  );
};
