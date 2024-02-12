import React, { useState, useEffect } from 'react';
import { FavoriteList } from '../../components/FavoriteList/FavoriteList';

const Favorite = () => {
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    const storedFavoriteList = localStorage.getItem('favoriteList');
    if (storedFavoriteList) {
      setFavoriteList(JSON.parse(storedFavoriteList));
    }
  }, []);
  return (
    <div>
      <FavoriteList favoriteList={favoriteList}/>
    </div>
  );
};

export default Favorite;
