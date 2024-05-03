// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { CarCard } from '../CarCard/CarCard';
// import { fetchFavoriteList } from '../../redux/Auth/operations';
// import { selectUser } from '../../redux/Auth/selectors';

// export const FavoriteList = () => {
//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);

//   const favoriteList = user.favoriteList;
//   useEffect(() => {
//     dispatch(fetchFavoriteList());
//   }, [dispatch]);

//   return (
//     <div>
//       {favoriteList &&
//         Array.isArray(favoriteList) &&
//         favoriteList.map(item => <li key={item._id}>{item._id}</li>)}
//     </div>
//   );
// };

export const FavoriteList = () => {
  return (
    <>
      <p>There will be your favorite adverts</p>
    </>
  );
};
