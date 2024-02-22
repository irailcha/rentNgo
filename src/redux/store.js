import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './Auth/userSlice';
import { advertReducer } from './Advert/advertSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    advert: advertReducer,
  },
});
