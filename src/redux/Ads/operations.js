import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://rentngobackend.onrender.com';

export const fetchAdverts = createAsyncThunk(
  'ads/fetchAdverts',
  async ({ page = 1, limit = 12 }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts?&page=${page}&limit=${limit}`);

      return data;
    } catch (error) {
      console.error('Adverts fetch failed:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchCarImages = createAsyncThunk(
  'ads/fetchCarImages',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts`);
      const images = data.map(advert => advert.img);
      const unique = Array.from(new Set(images));

      return unique;
      // При успішному запиті повертаємо проміс із даними
    } catch (error) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarBrands = createAsyncThunk(
  'ads/fetchCarBrands',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts`);
      const brands = data.map(advert => advert.make);
      const unique = Array.from(new Set(brands));

      return unique;
      // При успішному запиті повертаємо проміс із даними
    } catch (error) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
