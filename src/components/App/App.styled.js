import styled from '@emotion/styled';
import backgroundImage from '../../images/background.jpg';

export const BodyContainer = styled.div`
  position: relative;
  padding: 30px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
  background-color: rgba(255, 255, 255, 0.5);
  background-blend-mode: lighten;
`;
