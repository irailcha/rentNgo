import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { BodyContainer } from './App.styled';
import { LoginPage } from '../../pages/LoginPage/LoginPage';
import { RegisterPage } from '../../pages/RegisterPage/RegisterPage';
const Home = lazy(() => import('../../pages/Home/Home'));
const Adverts = lazy(() => import('../../pages/Adverts/Adverts'));
const Favorite = lazy(() => import('../../pages/Favorite/Favorite'));
const BasketPage = lazy(() => import('../../pages/BasketPage/BasketPage'));
const NotFound = lazy(() => import('../../pages/NotFound'));

const App = () => {
  return (
    <>
      <BodyContainer>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="adverts" element={<Adverts />} />n
            <Route path="adverts/favorite" element={<Favorite />} />
            <Route path="basket" element={<BasketPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BodyContainer>
    </>
  );
};

export default App;
