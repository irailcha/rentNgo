import React from 'react';
import { CarCard } from '../CarCard/CarCard';
export const FavoriteList = ({ favoriteList }) => {
  return (
    <div>
      {favoriteList.length === 0 ? (
        <p>No favorite yet</p>
      ) : (
        <ul>
          {favoriteList.map(advert => (
            <li key={advert.id}>
              <CarCard car={advert} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
