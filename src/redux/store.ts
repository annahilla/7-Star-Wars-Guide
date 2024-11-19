import { configureStore } from '@reduxjs/toolkit';
import starshipsReducer from './starshipsSlice';

const store = configureStore({
  reducer: {
    starships: starshipsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;