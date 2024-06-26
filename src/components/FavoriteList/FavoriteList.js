import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoriteAdvert,
  deleteFavoriteAdvert,
  fetchFavoriteList,
} from '../../redux/Auth/operations';
import sprite from '../../images/sprite.svg#sprite';
import {
  selectIsLoggedIn,
  selectFavoriteList,
} from '../../redux/Auth/selectors';
import { ButtonFavoriteStyle, IconFavoriteStyle } from './FavoriteList.style';

export const FavoriteList = ({ advert }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteList = useSelector(selectFavoriteList);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchFavoriteList());
  }, [dispatch]);

  useEffect(() => {
    if (favoriteList.some(fav => fav._id === advert._id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteList, advert._id]);

  const handleChangeFavoriteAds = () => {
    if (!isLoggedIn) {
      alert('Please log in');
    } else {
      if (isFavorite) {
        dispatch(deleteFavoriteAdvert(advert._id));
      } else {
        dispatch(addFavoriteAdvert(advert._id));
      }
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <ButtonFavoriteStyle onClick={handleChangeFavoriteAds}>
      <IconFavoriteStyle>
        <use
          href={`${sprite}#${isFavorite ? 'icon-active' : 'icon-normal-1'}`}
        ></use>
      </IconFavoriteStyle>
    </ButtonFavoriteStyle>
  );
};
