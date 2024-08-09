import styled from '@emotion/styled';

export const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 100;
`;

export const ContainerModal = styled.div`
  position: fixed;
  z-index: 111;
  overflow-y: auto;
  background-color: #ffffff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 24px;
  padding: 40px;
  width: 90%;
  max-width: 541px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

export const IconCloseStyle = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #000000;
`;
export const ButtonCloseStyle = styled.button`
  background-color: transparent;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const TitleStyle = styled.h2`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #121417;
`;
export const TitleStyleSpan = styled.span`
  color: #3470ff;
`;

export const ImageStyle = styled.img`
  height: auto;
  width: 100%;
  object-fit: contain;
`;

export const ImageContainer = styled.div`
  max-width: 461px;
  max-height: 248px;
  overflow: hidden;
  border-radius: 14px;
`;

export const ParagraphInfoStyle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 14px;
  color: rgba(18, 20, 23, 0.5);
`;

export const InfoTitleStyle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 8px;
  color: #121417;
`;

export const AccessoriesStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;

  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgba(18, 20, 23, 0.5);
`;

export const RentalStyleContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    border: none;
    border-radius: 35px;
    padding: 7px 14px;
    background-color: #f9f9f9;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #363535;
  }

  span {
    color: #3470ff;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
  }
`;

export const ContainerInfoCar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonStyle = styled.button`
  display: block;
  width: 40%;
  border-radius: 12px;
  padding: 12px 50px;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  background-color: #3470ff;
  color: #ffffff;
  margin: auto;

  :hover {
    background-color: #0b44cd;
  }
`;

export const InfoCarStyle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #121417;
`;
