import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Adverts from '../../pages/Adverts/Adverts';
import Favorite from '../../pages/Favorite/Favorite';
import NotFound from '../../pages/NotFound';
import { Layout } from '../Layout/Layout';
import { BodyContainer } from './App.styled';

const App = () => {
  return (
    <>
      <BodyContainer>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="adverts" element={<Adverts />} />
            <Route path="favorite" element={<Favorite />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BodyContainer>
    </>
  );
};

export default App;
