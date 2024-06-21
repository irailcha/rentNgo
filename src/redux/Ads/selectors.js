import { createSelector } from '@reduxjs/toolkit';

export const selectCarImages = state => state.ads.carImages;

export const selectCarBrands = state => state.ads.carBrands;

export const selectError = state => state.ads.error;

export const selectAdverts = state => state.ads.adverts;

export const selectIsLoading = state => state.ads.isLoading;

export const selectFilteredAdverts = state => state.filter.filteredAdverts;

export const selectFilteredAdvertsByMake = createSelector(
  [selectAdverts, state => state.filter.selectedMake],
  (adverts, selectedMake) => {
    if (!selectedMake) {
      return adverts;
    }
    return adverts.filter(
      advert => advert.make.toLowerCase() === selectedMake.toLowerCase()
    );
  }
);
