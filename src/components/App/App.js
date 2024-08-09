import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { BodyContainer } from './App.styled';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { refreshUser } from '../../redux/Auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Loader } from '../helpers/Loader';
import Home from '../../pages/Home/Home';
import Adverts from '../../pages/Adverts/Adverts';
import Favorite from '../../pages/Favorite/Favorite';

const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);
const ErrorPage = lazy(() => import('../../pages/ErrorPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>
      <Loader />
    </div>
  ) : (
    <BodyContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="adverts" element={<Adverts />} />
          <Route
            path="favorite"
            element={
              <PrivateRoute
                redirectTo="../auth/signin"
                component={<Favorite />}
              />
            }
          />
          <Route path="auth">
            <Route
              path="signin"
              element={
                <RestrictedRoute redirectTo="/" component={<LoginPage />} />
              }
            />

            <Route
              path="signup"
              element={
                <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
              }
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BodyContainer>
  );
};

export default App;
