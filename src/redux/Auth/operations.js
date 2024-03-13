import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://rentngobackend.onrender.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signup = createAsyncThunk(
  'auth/signup',

  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signup', credentials);
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

export const signin = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signin', credentials);
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
