import { configureStore } from "@reduxjs/toolkit";
import { RootState } from "../../src/redux/store";
import authReducer from "../../src/redux/authSlice";
import starshipsReducer from "../../src/redux/starshipsSlice";

export const mockState: RootState = {
    starships: {
      starships: [
        { 
            name: "CR90 corvette", 
            model: "CR90 corvette",
            cost_in_credits: "3500000",
            max_atmosphering_speed: "950",
            manufacturer: "Corellian Engineering Corporation",
            length: "150",
            crew: "30-165",
            url: "",
            pilots: [],
            films: []
        },
      ],
      pilots: [],
      films: [],
      nextPage: null,
      loading: false,
      error: null,
    },
    auth: {
      email: '',
      isAuthenticated: false,
      error: null,
    },
};

export const createMockStore = (state: RootState = mockState) => {
  return configureStore({
    reducer: {
      starships: starshipsReducer,
      auth: authReducer,
    },
    preloadedState: state,
  });
};