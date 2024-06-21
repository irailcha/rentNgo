import { createSlice } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
import { filterAdsMake } from './operations';

// Додамо дію для встановлення обраного бренду
export const setFilterMake = createAction('filter/setFilterMake');

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    searchTerm: '',
    filteredAdverts: [],
    selectedMake: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilteredAdverts: (state, action) => {
      state.filteredAdverts = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(filterAdsMake.fulfilled, (state, action) => {
      state.filteredAdverts = action.payload;
    });
    builder.addCase(setFilterMake, (state, action) => {
      state.selectedMake = action.payload;
    });
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter, setFilteredAdverts } = filterSlice.actions;
