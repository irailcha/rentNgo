import React, {useState} from 'react';
import sprite from '../../images/sprite.svg';
import EnterModal from '../EnterModal/EnterModal';
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
  ImageContainer,
} from './ModalCarInfo.styled';

export const ModalCarInfo = ({onClose, fullAdvertInfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!fullAdvertInfo) {
    return null; 
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
  } = fullAdvertInfo;




  return (
    <>
    <ModalBackDrop>
      <ContainerModal>
        <ButtonCloseStyle onClick={onClose}>
          <IconCloseStyle>
            <use href={`${sprite}#icon-x-1`}></use>
          </IconCloseStyle>
        </ButtonCloseStyle>
        <ImageContainer>
          <ImageStyle src={img} alt={make} />
        </ImageContainer>

        <ContainerInfoCar>
          <div>
            <TitleStyle>
              {make}<TitleStyleSpan> {" "} {model} </TitleStyleSpan>, {year}
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
          <ButtonStyle type="button" onClick={() => setIsOpen(true)}>Rental car</ButtonStyle>
        </ContainerInfoCar>
      </ContainerModal>
    </ModalBackDrop>
    {isOpen && (
        <EnterModal
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
        />
      )}
    </>
  );
};
