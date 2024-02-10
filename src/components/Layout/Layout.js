import { Outlet } from 'react-router-dom';
import sprite from '../../images/sprite.svg#sprite';
import {
  HeaderContainer,
  LogoLinkStyle,
  IconFavoriteStyle,
  NavContainer,
  NavLinkPage,
  MainContainer,
} from './Layout.style';

export const Layout = () => {
  return (
    <div>
      <HeaderContainer>
        <LogoLinkStyle href="/">Rent-n-go</LogoLinkStyle>

        <NavContainer>
          <NavLinkPage to="/">Home</NavLinkPage>
          <NavLinkPage to="/adverts">Adverts</NavLinkPage>
          <NavLinkPage to="/favorite">
            <IconFavoriteStyle>
              <use href={`${sprite}#icon-normal-1`}></use>
            </IconFavoriteStyle>
          </NavLinkPage>
        </NavContainer>
      </HeaderContainer>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </div>
  );
};
