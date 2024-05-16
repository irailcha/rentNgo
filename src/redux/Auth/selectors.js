import { createSelector } from '@reduxjs/toolkit';

export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectFavoriteList = createSelector(
  selectUser,
  user => user.favoriteList
);
