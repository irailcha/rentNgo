export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsFavorite = state => state.auth.selectIsFavorite;

export const selectFavoriteList = state => state.auth.favoriteList;
