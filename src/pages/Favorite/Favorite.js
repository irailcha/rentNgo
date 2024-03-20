import React, { useState, useEffect } from 'react';

import { FavoriteList } from '../../components/FavoriteList/FavoriteList';

import { useAuth } from '../../hooks/useAuth';

const Favorite = () => {
  const [favoriteList, setFavoriteList] = useState([]);

  const { isLoggedIn } = useAuth();
  useEffect(() => {
    const storedFavoriteList = localStorage.getItem('favoriteList');
    if (storedFavoriteList) {
      setFavoriteList(JSON.parse(storedFavoriteList));
    }
  }, []);

  return (
    <div>{isLoggedIn && <FavoriteList favoriteList={favoriteList} />}</div>
  );
};

export default Favorite;
