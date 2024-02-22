import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { FavoriteList } from '../../components/FavoriteList/FavoriteList';
import { WarningModal } from '../../components/WarningModal/WarningModal';

const Favorite = () => {
  const [favoriteList, setFavoriteList] = useState([]);
  const [isOpen] = useState(false);

  const isLogin = useSelector(state => state.user.isLogin);
  useEffect(() => {
    const storedFavoriteList = localStorage.getItem('favoriteList');
    if (storedFavoriteList) {
      setFavoriteList(JSON.parse(storedFavoriteList));
    }
  }, []);

  return (
    <div>
      {isLogin ? (
        <FavoriteList favoriteList={favoriteList} />
      ) : (
        <WarningModal isOpen={isOpen} />
      )}
    </div>
  );
};

export default Favorite;
