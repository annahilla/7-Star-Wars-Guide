import { configureStore } from '@reduxjs/toolkit';
import starshipsReducer from './starshipsSlice';
import authReducer from './authSlice'

const store = configureStore({
  reducer: {
    starships: starshipsReducer,
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
