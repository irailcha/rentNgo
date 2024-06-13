import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, fetchCarImages, fetchCarBrands } from './operations';

const initialState = {
  adverts: [],
  carImages: [],
  carBrands: [],
  error: null,
  isLoading: false,
};

export const advertSlice = createSlice({
  name: 'ads',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.adverts = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(fetchCarImages.fulfilled, (state, action) => {
        state.carImages = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCarImages.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(fetchCarBrands.fulfilled, (state, action) => {
        state.carBrands = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCarBrands.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export const { setCarBrand } = advertSlice.actions;

export const advertReducer = advertSlice.reducer;
