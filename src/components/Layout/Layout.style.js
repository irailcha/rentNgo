import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  padding: 20px 0;
  justify-content: space-around;
  position: sticky;
  border-bottom: 1px solid rgba(138, 138, 137, 0.2);
`;

export const LogoLinkStyle = styled.a`
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: #3470ff;

  :hover {
    color: #0b44cd;
  }
`;

export const IconFavoriteStyle = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 18px;
  height: 18px;
  fill: #3470ff;
  transition: width 0.3s ease, height 0.3s ease;
  transform-origin: center;

  &:active {
    width: 21.6px; /* Збільште ширину на 20% */
    height: 21.6px; /* Збільште висоту на 20% */
    fill: #0b44cd;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const NavLinkPage = styled(NavLink)`
  text-decoration: none;
  position: relative;
  display: inline-block;

  font-weight: 700;
  font-size: 20px;
  line-height: 22px;

  &:active {
    color: #0b44cd;
  }
`;

export const MainContainer = styled.div`
  position: relative;
  padding-top: 50px;
`;
