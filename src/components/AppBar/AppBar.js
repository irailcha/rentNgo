import { useSelector } from 'react-redux';
import { UserMenu } from '../UserMenu/UserMenu';
import { FiUserCheck } from 'react-icons/fi';
import { FiUserPlus } from 'react-icons/fi';
import { SlHeart } from 'react-icons/sl';
import { GrBasket } from 'react-icons/gr';

import {
  HeaderContainer,
  LogoLinkStyle,
  NavContainer,
  NavLinkPage,
} from './AppBar.style';

export const AppBar = () => {
  const isLogin = useSelector(state => state.user.isLogin);

  return (
    <HeaderContainer>
      <LogoLinkStyle to="/">Rent-n-go</LogoLinkStyle>

      <NavContainer>
        <NavLinkPage to="/">Home</NavLinkPage>
        <NavLinkPage to="/adverts">Adverts</NavLinkPage>
      </NavContainer>
      <NavContainer>
        <NavLinkPage to="/adverts/favorite">
          <SlHeart />
        </NavLinkPage>

        <NavLinkPage to="/basket">
          <GrBasket />
        </NavLinkPage>
      </NavContainer>
      {isLogin ? (
        <UserMenu />
      ) : (
        <NavContainer>
          <NavLinkPage to="/login">
            <FiUserCheck /> Sign in
          </NavLinkPage>
          <NavLinkPage to="/register">
            <FiUserPlus /> Sign up
          </NavLinkPage>
        </NavContainer>
      )}
    </HeaderContainer>
  );
};
