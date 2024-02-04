import React from 'react';
import sprite from '../../images/sprite.svg';
import {
  ContainerModal,
  IconCloseStyle,
  ModalBackDrop,
  ButtonCloseStyle,
} from './ModalCarInfo.styled';

export const ModalCarInfo = ({ onClose, advertInfo }) => {
  if (!advertInfo) {
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
  } = advertInfo;

  return (
    <ModalBackDrop>
      <ContainerModal>
        <ButtonCloseStyle onClick={onClose}>
          <IconCloseStyle>
            <use href={`${sprite}#icon-x-1`}></use>
          </IconCloseStyle>
        </ButtonCloseStyle>
        <div>
          <img src={img} alt={make} />
          <h2>
            {make}
            {model}, {year}
          </h2>
          <p>
            {address} | id:{id} | year:{year} | Type: {type} | Fuel Consumption:{' '}
            {fuelConsumption} | Engine Size: {engineSize} |{' '}
          </p>
          <p>{description}</p>
          <h3>Accessories and functionalities:</h3>
          <p>{accessories}</p>
          <h3>Rental Conditions: </h3>
          <p>Minimum age : 25 </p>
          <p>Valid driver’s license</p>
          <p>Security deposite required </p>
          <p>Mileage:{mileage}</p>
          <p>Price: {rentalPrice}</p>
          <button>Rental car</button>
        </div>
      </ContainerModal>
    </ModalBackDrop>
  );
};
