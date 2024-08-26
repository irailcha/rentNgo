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

export const CarCard = ({ advert, onClick, favoriteList }) => {
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
  } = advert;


const [isOpen, setIsOpen] = useState(false);


useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'; 
  } else {
    document.body.style.overflow = 'auto'; 
  }
}, [isOpen]);



  return (
    <div key={advert._id}>
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
             isFavorite={favoriteList.some(fav => fav.id === advert.id)} 
          onClick={onClick}
          advert={advert}
        />
      </CarCardStyle>
      {isOpen && (
        <ModalCarInfo
          onClose={() => setIsOpen(false)}
          fullAdvertInfo={advert}
        />
      )}
    </div>
  );
};
