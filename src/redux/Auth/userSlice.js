import { createSlice } from '@reduxjs/toolkit';
import {
  signup,
  signin,
  signout,
  refreshUser,
  addFavoriteAdvert,
  deleteFavoriteAdvert,
} from './operations';

const initialState = {
  user: { username: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
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
      });
    // .addCase(addFavoriteAdvert.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = null;
    //   state.user.favoriteList.push(action.payload);
    // })
    // .addCase(deleteFavoriteAdvert.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = null;
    //   state.user.favoriteList = state.user.favoriteList.filter(
    //     ad => ad.id !== action.payload
    //   );
    // });
  },
});

export const authReducer = authSlice.reducer;
