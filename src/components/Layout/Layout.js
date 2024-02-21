import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Loader } from '../helpers/Loader';

import { MainContainer } from './Layout.style';
export const Layout = () => {
  return (
    <div>
      <AppBar />
      <MainContainer>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </MainContainer>
    </div>
  );
};
