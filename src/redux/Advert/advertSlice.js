// advertSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAdverts } from '../../Api';

// Створюємо асинхронний thunk для завантаження оголошень
export const fetchAdvertsAsync = createAsyncThunk(
  'adverts/fetchAdverts',
  async page => {
    const response = await fetchAdverts(page);
    return response;
  }
);

// Створюємо початковий стан slice
const initialState = {
  advertList: [],
  isLoading: false,
  isError: false,
  page: 1,
  isLoadMoreHidden: true,
  favoriteList: [],
  make: '',
};

// Створюємо slice
const advertSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    setMake: (state, action) => {
      state.make = action.payload;
    },
    changeFavoriteList: (state, action) => {
      const advertId = action.payload;
      const updatedList = new Set(state.favoriteList);

      if (updatedList.has(advertId)) {
        updatedList.delete(advertId);
      } else {
        updatedList.add(advertId);
      }

      localStorage.setItem(
        'favoriteList',
        JSON.stringify(Array.from(updatedList))
      );
      state.favoriteList = Array.from(updatedList);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdvertsAsync.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAdvertsAsync.fulfilled, (state, action) => {
        state.advertList = [...state.advertList, ...action.payload];
        state.isLoadMoreHidden = false;

        if (action.payload.length < 12) {
          state.isLoadMoreHidden = true;
        }

        state.page += 1;
        state.isLoading = false;
      })
      .addCase(fetchAdvertsAsync.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

// Експортуємо reducer та actions
export const { setMake, changeFavoriteList } = advertSlice.actions;
export const advertReducer = advertSlice.reducer;
