import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, fetchCarImages } from './operations';

const initialState = {
  adverts: [],
  carImages: [],
  isLoading: false,
  isError: null,
};

const advertSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAdverts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      state.adverts = action.payload;
    });
    builder.addCase(fetchCarImages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      state.carImages = action.payload;
    });
  },
});

export const advertReducer = advertSlice.reducer;
