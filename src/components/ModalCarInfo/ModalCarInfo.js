import React from 'react';
import sprite from '../../images/sprite.svg';

import {
  ContainerModal,
  IconCloseStyle,
  ModalBackDrop,
  ButtonCloseStyle,
  TitleStyle,
  TitleStyleSpan,
  ImageStyle,
  ParagraphInfoStyle,
  InfoTitleStyle,
  RentalStyleContainer,
  AccessoriesStyle,
  ContainerInfoCar,
  ButtonStyle,
  InfoCarStyle,
} from './ModalCarInfo.styled';

export const ModalCarInfo = ({ onClose, fullArvertInfo }) => {
  if (!fullArvertInfo) {
    return null; // або інша логіка обробки відсутності advertInfo
  }
  const {
    img,
    make,
    model,
    year,
    address,
    id,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    mileage,
    rentalPrice,
  } = fullArvertInfo;

  return (
    <ModalBackDrop>
      <ContainerModal>
        <ButtonCloseStyle onClick={onClose}>
          <IconCloseStyle>
            <use href={`${sprite}#icon-x-1`}></use>
          </IconCloseStyle>
        </ButtonCloseStyle>
        <ImageStyle src={img} alt={make} />
        <ContainerInfoCar>
          <div>
            <TitleStyle>
              {make} <TitleStyleSpan> {model} </TitleStyleSpan>, {year}
            </TitleStyle>

            <ParagraphInfoStyle>
              <span>{address}</span> | <span>id: {id}</span> |{' '}
              <span>year: {year}</span> | <span>Type: {type}</span> |{' '}
              <span>Fuel Consumption: {fuelConsumption}</span> |{' '}
              <span>Engine Size: {engineSize}</span>
            </ParagraphInfoStyle>
            <InfoCarStyle>{description}</InfoCarStyle>
          </div>
          <div>
            <InfoTitleStyle>Accessories and functionalities:</InfoTitleStyle>
            <AccessoriesStyle>
              {accessories.map((accessorie, index) => (
                <li key={index}>{accessorie}</li>
              ))}
            </AccessoriesStyle>
          </div>
          <div>
            <InfoTitleStyle>Rental Conditions: </InfoTitleStyle>
            <RentalStyleContainer>
              <li>
                Minimum age : <span>25</span>{' '}
              </li>
              <li>Valid driver’s license</li>
              <li>Security deposite required </li>
              <li>
                Mileage: <span> {mileage}</span>
              </li>
              <li>
                Price: <span>{rentalPrice}</span>
              </li>
            </RentalStyleContainer>
          </div>
          <ButtonStyle>Rental car</ButtonStyle>
        </ContainerInfoCar>
      </ContainerModal>
    </ModalBackDrop>
  );
};
