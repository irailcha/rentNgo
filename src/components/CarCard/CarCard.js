import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalCarInfo } from '../ModalCarInfo/ModalCarInfo';
import { FavoriteList } from '../FavoriteList/FavoriteList';
import {
  selectIsLoggedIn,
  selectFavoriteList,
} from '../../redux/Auth/selectors';
import {
  addFavoriteAdvert,
  deleteFavoriteAdvert,
} from '../../redux/Auth/operations';
import {
  CarBaseInfoStyle,
  ContainerTitleStyle,
  TitleStyleSpan,
  ImageStyle,
  Container,
  ButtonStyle,
  CarCardStyle,
} from './CarCard.styled';

export const CarCard = ({ car }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
  } = car;

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const favoriteList = useSelector(selectFavoriteList);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favoriteList.some(fav => fav._id === car._id));
  }, [favoriteList, car._id]);

  const handleChangeFavoriteAds = async () => {
    if (!isLoggedIn) {
      alert('Please log in');
      return;
    }

    try {
      if (isFavorite) {
        await dispatch(deleteFavoriteAdvert(car._id)).unwrap();
        setIsFavorite(false);
      } else {
        await dispatch(addFavoriteAdvert(car._id)).unwrap();
        setIsFavorite(true);
      }
    } catch (error) {
      console.error('Error updating favorite ads:', error);
      alert('Failed to update favorite ads');
    }
  };

  return (
    <div key={car._id}>
      <CarCardStyle>
        <div>
          <Container>
            <ImageStyle src={img} alt={make} />
          </Container>
          <ContainerTitleStyle>
            <h2>
              {make}
              <TitleStyleSpan> {model}</TitleStyleSpan>, {year}
            </h2>
            <p>{rentalPrice}</p>
          </ContainerTitleStyle>
          <CarBaseInfoStyle>
            {address} | {rentalCompany} | {type} | {model} {id}
          </CarBaseInfoStyle>
        </div>
        <ButtonStyle type="button" onClick={() => setIsOpen(true)}>
          Learn more
        </ButtonStyle>
        <FavoriteList
          isFavorite={isFavorite && isLoggedIn}
          handleChangeFavoriteAds={handleChangeFavoriteAds}
        />
      </CarCardStyle>
      {isOpen && (
        <ModalCarInfo
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          fullArvertInfo={car}
        />
      )}
    </div>
  );
};
