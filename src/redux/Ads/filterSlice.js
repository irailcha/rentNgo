import { createSlice } from '@reduxjs/toolkit';
import { fetchCarBrands } from './operations';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCarBrands.fulfilled, (state, action) => {
      return state.filter(make => make.id !== action.payload);
    });
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
