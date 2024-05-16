import { createSelector } from '@reduxjs/toolkit';

export const selectCarImages = state => state.ads.carImages;

export const selectCarBrands = state => state.ads.carBrands;

export const selectError = state => state.ads.error;

export const selectAdverts = state => state.ads.adverts;

export const selectIsLoading = state => state.ads.isLoading;

export const selectFilter = state => state.filter;

export const selectVisibleAdverts = createSelector(
  [selectAdverts, selectFilter],
  (adverts, filter) => {
    return adverts.filter(advert =>
      advert.mark.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
