import styled from '@emotion/styled';

export const ModalTitle = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 8px;
  color: #121417;
  text-align:center;
  margin-bottom: 15px;
`;

export const ModalContact= styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  gap: 15px;

@media (max-width: 768px) {
 flex-direction: column;
  
}

`;

export const ModalContactLink = styled.a`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  background-color: #3470ff;
  color: #ffffff;
  border:none;
  border-radius: 12px;
  padding: 8px 12px 8px 12px;

    :hover {
    background-color: #0b44cd;
    cursor: pointer;

`;