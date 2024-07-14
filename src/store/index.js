import {configureStore} from '@reduxjs/toolkit';
import budgetSlice from './budgetSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, budgetSlice.reducer);

const budgetstore = configureStore({
  reducer: {
    budget: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(budgetstore);
export default budgetstore;
