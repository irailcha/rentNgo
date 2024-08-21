import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { BodyContainer } from './App.styled';
import Home from '../../pages/Home/Home';
import Adverts from '../../pages/Adverts/Adverts';
const ErrorPage = lazy(() => import('../../pages/ErrorPage'));

const App = () => {
    return (
        <BodyContainer>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="adverts" element={<Adverts />} />

                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BodyContainer>
    );
};

export default App;