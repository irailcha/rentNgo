import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FavoriteList } from '../../components/FavoriteList/FavoriteList';

const Favorite = () => {
  const [favoriteList, setFavoriteList] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const storedFavoriteList = localStorage.getItem('favoriteList');
    if (storedFavoriteList) {
      setFavoriteList(JSON.parse(storedFavoriteList));
    }
  }, []);
  return (
    <div>
      <Link to={location.state?.from ?? '/adverts'}>Go to Adverts</Link>
      <FavoriteList favoriteList={favoriteList} />
    </div>
  );
};

export default Favorite;
