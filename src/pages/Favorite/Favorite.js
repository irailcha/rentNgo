import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';
import { FavoriteList } from '../../components/FavoriteList/FavoriteList';
// import { useSelector } from 'react-redux';

const Favorite = () => {
  const [favoriteList, setFavoriteList] = useState([]);
  const location = useLocation();
  // const navigate = useNavigate();
  // const isLogIn = useSelector(state => state.user.isLogin);
  // useEffect(() => {
  //   if (!isLogIn) {
  //     navigate('/login', { replace: true });
  //   }
  // }, [navigate, isLogIn]);
  useEffect(() => {
    const storedFavoriteList = localStorage.getItem('favoriteList');
    if (storedFavoriteList) {
      setFavoriteList(JSON.parse(storedFavoriteList));
    }
  }, []);
  return (
    <div>
      <Link to={location.state?.from ?? '/adverts'}>
        <GoArrowLeft /> Back
      </Link>
      <FavoriteList favoriteList={favoriteList} />
    </div>
  );
};

export default Favorite;
