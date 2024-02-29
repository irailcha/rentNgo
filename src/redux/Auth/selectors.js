// Исправлено на selectUser = state => state.userReducer.user;
export const selectUser = state => state.userReducer.user;

// Исправлено на selectIsLoggedIn = state => state.userReducer.isLoggedIn;
export const selectIsLoggedIn = state =>
  state.userReducer && state.userReducer.isLoggedIn;

// Исправлено на selectIsRefreshing = state => state.userReducer.isRefreshing;
export const selectIsRefreshing = state => state.userReducer.isRefreshing;
