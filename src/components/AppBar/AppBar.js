import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";

import {
  HeaderContainer,
  LogoLinkStyle,
  NavContainer,
  NavLinkPage,
  LinksStyle,
} from './AppBar.style';

export const AppBar = () => {

  return (
    <HeaderContainer>
   
   <LogoLinkStyle href="/rentNgo">RentNGo</LogoLinkStyle>
   
      <NavContainer>
        <NavLinkPage to="/">Home</NavLinkPage>
        <NavLinkPage to="/adverts">Adverts</NavLinkPage>
      </NavContainer>
      <NavContainer>
        <LinksStyle>
          <a href="tel:+1234567890"><AiFillPhone /></a>
          <a href="example@example.com"><AiFillMail /></a>
        </LinksStyle>
      </NavContainer>

  
    </HeaderContainer>
  );
};
