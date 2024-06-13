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
      .addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signout.fulfilled, state => {
        state.user = { username: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.favoriteList = [];
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
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.favoriteList.push(action.payload);
        state.isFavorite = true;
        state.isLoggedIn = true;
      })
      .addCase(deleteFavoriteAdvert.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.favoriteList = state.favoriteList.filter(
          ad => ad._id !== action.payload
        );
        state.isFavorite = false;
        state.isLoggedIn = true;
      })
      .addCase(fetchFavoriteList.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.favoriteList = action.payload;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
