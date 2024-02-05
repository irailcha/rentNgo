import React, { useState } from 'react';
import { ModalCarInfo } from '../ModalCarInfo/ModalCarInfo';
import {
  CarBaseInfoStyle,
  ContainerTitleStyle,
  TitleStyleSpan,
  ImageStyle,
  Container,
  ButtonStyle,
  CarCardStyle,
} from './CarCard.styled';

export const CarCard = ({
  car: {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    functionalities,
  },
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
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
            {address} | {rentalCompany} | {type} | {model} | {id} |{' '}
            {functionalities[0]}
          </CarBaseInfoStyle>
        </div>
        <ButtonStyle
          type="button"
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          Learn more
        </ButtonStyle>
      </CarCardStyle>
      {modalIsOpen && (
        <ModalCarInfo
          onClose={() => {
            setModalIsOpen(false);
          }}
        />
      )}
    </div>
  );
};
