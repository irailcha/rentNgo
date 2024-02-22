import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 100;
`;

export const ContainerModal = styled.div`
  position: absolute;
  display: block;
  z-index: 111;
  width: 350px;

  overflow-y: auto;
  background-color: #ffffff;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  padding: 20px;
  transform: 250ms cubic-bezier(0, 0.99, 0.99, 0.01);
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 15px;
  justify-content: space-around;
  margin-top: 20px;
`;

export const NavLinkPage = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: #3470ff;
  :hover {
    color: #0b44cd;
    text-decoration: underline;
  }
`;
export const TitleStyle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #121417;
`;
