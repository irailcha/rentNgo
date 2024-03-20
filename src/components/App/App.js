import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { BodyContainer } from './App.styled';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { refreshUser } from '../../redux/Auth/operations';
import { useAuth } from '../../hooks/useAuth';

// Ліниве завантаження компонентів
const Home = lazy(() => import('../../pages/Home/Home'));
const Adverts = lazy(() => import('../../pages/Adverts/Adverts'));
const Favorite = lazy(() => import('../../pages/Favorite/Favorite'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);
const NotFound = lazy(() => import('../../pages/NotFound'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>...is refresh</p>
  ) : (
    <>
      <BodyContainer>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="adverts" element={<Adverts />} />

            <Route
              path="adverts/favorite"
              element={
                <PrivateRoute redirectTo="/signin" component={<Favorite />} />
              }
            />
            <Route path="auth">
              <Route
                path="signin"
                element={
                  <RestrictedRoute
                    redirectTo="/adverts"
                    component={<LoginPage />}
                  />
                }
              />

              <Route
                path="signup"
                element={
                  <RestrictedRoute
                    redirectTo="/signin"
                    component={<RegisterPage />}
                  />
                }
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BodyContainer>
    </>
  );
};

export default App;
