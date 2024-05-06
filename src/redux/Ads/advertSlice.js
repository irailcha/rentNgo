import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, fetchCarImages } from './operations';

const initialState = {
  adverts: [],
  carImages: [],
  isLoading: false,
  isError: null,
  page: 1,
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
      state.page = action.meta.arg.page;
    });
    builder.addCase(fetchCarImages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      state.carImages = action.payload;
    });
  },
});

export const advertReducer = advertSlice.reducer;
