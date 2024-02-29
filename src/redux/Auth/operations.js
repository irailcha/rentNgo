import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65a6c60674cf4207b4f0c864.mockapi.io';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'users/register',

  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      // При успішному запиті повертаємо проміс із даними
      token.set(data.token);
      return data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'users/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signin', credentials);
      // При успішному запиті повертаємо проміс із даними
      return data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
    // При успішному запиті повертаємо проміс із даними
  } catch (e) {
    // При помилці запиту повертаємо проміс
    // який буде відхилений з текстом помилки
    return thunkAPI.rejectWithValue(e.message);
  }
});
