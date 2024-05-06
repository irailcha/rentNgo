import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://rentngobackend.onrender.com';

// // Utility to add JWT
// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

export const fetchAdverts = createAsyncThunk(
  'ads/fetchAdverts',

  async ({ page = 1, limit = 12 }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts?page=${page}&limit=${limit}`);

      return data;
    } catch (e) {
      console.error('Adverts failed:', e.message);
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCarImages = createAsyncThunk(
  'ads/fetchCarImages',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts`);
      const Images = data.map(advert => advert.img);
      const unique = Array.from(new Set(Images));

      return unique;
      // При успішному запиті повертаємо проміс із даними
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const addFavoriteAds = createAsyncThunk(
//   'ads/addFavoriteAds',
//   async (advertId, thunkAPI) => {
//     try {
//       const { data } = await axios.patch(`/adverts/${advertId}/addFavorite`);
//       setAuthHeader(data.token);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteFavoriteAds = createAsyncThunk(
//   'ads/deleteFavoriteAds',
//   async (advertId, thunkAPI) => {
//     try {
//       const { data } = await axios.patch(`/adverts/${advertId}/deleteFavorite`);
//       setAuthHeader(data.token);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
