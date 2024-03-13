import { useSelector } from 'react-redux';
import { UserMenu } from '../UserMenu/UserMenu';
import { FiUserCheck } from 'react-icons/fi';
import { FiUserPlus } from 'react-icons/fi';
import { SlHeart } from 'react-icons/sl';
import { selectIsLoggedIn } from '../../redux/Auth/selectors';

import {
  HeaderContainer,
  LogoLinkStyle,
  NavContainer,
  NavLinkPage,
  LinksStyle,
} from './AppBar.style';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
      </NavContainer>
      <NavContainer>
        <LinksStyle>
          <a href="tel:+1234567890">+1234567890</a>
          <a href="example@example.com">example@example.com</a>
        </LinksStyle>
      </NavContainer>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <NavContainer>
          <LinksStyle>
            <NavLinkPage to="auth/signin">
              <FiUserCheck /> Sign in
            </NavLinkPage>
            <NavLinkPage to="auth//signup">
              <FiUserPlus /> Sign up
            </NavLinkPage>
          </LinksStyle>
        </NavContainer>
      )}
    </HeaderContainer>
  );
};
