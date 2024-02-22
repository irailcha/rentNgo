import React from 'react';

import { TitleStyle } from './WarningModal.style';
import {
  ModalBackDrop,
  ContainerModal,
  NavLinkPage,
  NavContainer,
} from './WarningModal.style';

export const WarningModal = () => {
  return (
    <ModalBackDrop>
      <ContainerModal>
        <TitleStyle>Sorry... You need to log in to the account</TitleStyle>
        <NavContainer>
          <NavLinkPage to="/login">Sign in</NavLinkPage>
          <NavLinkPage to="/register">Sign up</NavLinkPage>
        </NavContainer>
      </ContainerModal>
    </ModalBackDrop>
  );
};
