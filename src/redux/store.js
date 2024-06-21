import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist/es/constants';

import { authReducer } from './Auth/userSlice.js';
import { advertReducer } from './Ads/advertSlice.js';
import { filterReducer } from './Ads/filterSlice.js';

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const advertPersistConfig = {
  key: 'ads',
  storage,
};

const filterPersistConfig = {
  key: 'filter',
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  ads: persistReducer(advertPersistConfig, advertReducer),
  filter: persistReducer(filterPersistConfig, filterReducer),
});

const persistedReducer = persistReducer(
  { key: 'root', storage, whitelist: ['auth', 'ads', 'filter'] },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
