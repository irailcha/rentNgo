import styled from '@emotion/styled';

export const CardListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const CardItemStyle = styled.li`
  display: block;
  position: relative;
  max-width: 274px;
  margin-bottom: 50px;
`;

export const ButtonFavoriteStyle = styled.button`
  position: absolute;
  z-index: 1;
  top: 14px;
  right: 14px;
  background-color: transparent;
`;

export const IconFavoriteStyle = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${props => (props.isFavorite ? '#3470FF' : '#fff')};
  fill: ${props => (props.isFavorite ? '#3470FF' : 'transparent')};

  border: 1px solid transparent;
`;
export const ButtonStyle = styled.button`
  display: block;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  background-color: transparent;
  color: #3470ff;
  text-align: center;
  margin: 0 auto;

  :hover {
    color: #0b44cd;
  }
`;
