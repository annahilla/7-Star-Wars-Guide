import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Starship } from "../types/types";

const initialState: Starship[] = [];

const starshipsSlice = createSlice({
  name: "starships",
  initialState,
  reducers: {
    getStarships: (state, action: PayloadAction<Starship[]>) => {
      state.push(...action.payload);
    }
  },
});

const starshipsReducer = starshipsSlice.reducer;

export const {getStarships} = starshipsSlice.actions;
export default starshipsReducer;