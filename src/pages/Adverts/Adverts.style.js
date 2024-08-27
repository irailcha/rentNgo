import styled from '@emotion/styled';
import backgroundImage from '../../images/backgraundAdverts.jpg';

export const ButtonStyle = styled.button`
  display: inline-block;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  background-color: transparent;
  color: #fff;
  margin: auto 0;

  :hover {
    color: #0b44cd;
  }
`;

export const ButtonUpPage = styled.button`
  position: absolute;
  display: block;
  background-color: #3470ff;
  color: #ffffff;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  right: 0;
  bottom: 0;

  float: right;
  margin: 10px;
  width: 40px;
  height: 40px;

  :hover {
    background-color: #ffffff;
    color: #3470ff;
  }
`;

export const ContainerAdverts = styled.div`
padding-top: 50px;
  border-radius: 12px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.2);
  background-blend-mode: lighten;
`;
