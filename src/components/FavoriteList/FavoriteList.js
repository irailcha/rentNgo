import React from 'react';

export const FavoriteList = ({ favoriteList }) => {
  return (
    <div>
      {favoriteList.length === 0 ? (
        <p>No favorite yet</p>
      ) : (
        <ul>
          {favoriteList.map(item => (
            <li key={item.id}>{item.id}</li>
            // Тут ви можете вивести більше інформації про кожен обраний об'єкт,
            // наприклад, item.name, item.description тощо.
          ))}
        </ul>
      )}
    </div>
  );
};
