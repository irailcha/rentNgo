import React from 'react';
import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { useAuth } from '../../hooks/useAuth';

const Favorite = () => {
  const { isLoggedIn } = useAuth();

  return <div>{isLoggedIn && <FavoriteList />}</div>;
};

export default Favorite;
