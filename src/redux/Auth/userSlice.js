import { createSlice } from '@reduxjs/toolkit';
import {
  signup,
  signin,
  signout,
  refreshUser,
  addFavoriteAdvert,
  deleteFavoriteAdvert,
  fetchFavoriteList,
} from './operations';

const initialState = {
  user: { username: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isFavorite: false,
  favoriteList: [],
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signin.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(signout.fulfilled, state => {
        state.user = { username: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.favoriteList = [];
        state.error = null;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.user = { username: null, email: null };
        state.token = null;
      })
      .addCase(addFavoriteAdvert.fulfilled, (state, action) => {
        state.favoriteList.push(action.payload);
      })
      .addCase(deleteFavoriteAdvert.fulfilled, (state, action) => {
        state.favoriteList = state.favoriteList.filter(
          fav => fav._id !== action.payload._id
        );
      })
      .addCase(fetchFavoriteList.fulfilled, (state, action) => {
        state.favoriteList = action.payload;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
