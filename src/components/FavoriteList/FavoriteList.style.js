import styled from '@emotion/styled';

export const ButtonFavoriteStyle = styled.button`
  position: absolute;
  z-index: 1;
  top: 14px;
  right: 14px;
  background-color: transparent;
`;

export const IconFavoriteStyle = styled.svg`
  width: 34px;
  height: 34px;
  stroke: ${props => (props.isFavorite ? '#3470FF' : '#fff')};
  fill: ${props => (props.isFavorite ? '#3470FF' : 'transparent')};
`;
