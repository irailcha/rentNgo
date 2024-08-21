import React, { useEffect, useState } from 'react';

import { ModalCarInfo } from '../ModalCarInfo/ModalCarInfo';
import { FavoriteList } from '../FavoriteList/FavoriteList';

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


  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
const [favoriteList, setFavoriteList]=useState([])
const handleChangeFavorite = () => {
  setFavoriteList(prevFavoriteList => {
    const isAlreadyFav = prevFavoriteList.some(fav => fav.id === id);

    if (!isAlreadyFav) {
      // Додаємо автомобіль до списку улюблених
      setIsFavorite(true);
      return [...prevFavoriteList, car];
    } else {
      // Вилучаємо автомобіль з улюблених
      setIsFavorite(false);
      return prevFavoriteList.filter(fav => fav.id !== id);
    }
  });
};

useEffect(()=>{
localStorage.setItem("favoriteList", JSON.stringify(favoriteList));

}, [favoriteList])

useEffect(() => {
  const favoriteAdverts = localStorage.getItem('favoriteList');
  if (favoriteAdverts) {
    const parsedAdverts = JSON.parse(favoriteAdverts);
    setFavoriteList(parsedAdverts);
    const isFavorited = parsedAdverts.some(fav => fav.id === id);
    setIsFavorite(isFavorited);
  }
}, [id]);


console.log("Current favoriteList:", favoriteList);

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
          isFavorite={isFavorite}
          handleChangeFavorite={handleChangeFavorite}
        />
      </CarCardStyle>
      {isOpen && (
        <ModalCarInfo
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          fullAdvertInfo={car}
        />
      )}
    </div>
  );
};
