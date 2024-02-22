import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registration: {
    name: '',
    email: '',
    password: '',
  },
  login: {
    email: '',
    password: '',
  },
  isLogin: false,
};
const userSlice = createSlice({
  // Ім'я слайсу
  name: 'user',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    registrationField: (state, action) => {
      const { field, value } = action.payload;
      state.registration[field] = value;
    },
    loginField: (state, action) => {
      const { field, value } = action.payload;
      state.login[field] = value;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

// Генератори екшенів
export const { registrationField, loginField, setIsLogin } = userSlice.actions;
// Редюсер слайсу
export const userReducer = userSlice.reducer;
