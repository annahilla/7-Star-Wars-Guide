import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Starship } from "../types/types";

interface StarshipsState {
  data: Starship[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: StarshipsState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchStarships = createAsyncThunk(
  "starships/fetchStarships",
  async () => {
    const response = await fetch("https://swapi.dev/api/starships");
    if (!response.ok) {
      throw new Error("Failed to fetch starships");
    }
    const data = await response.json();
    return data.results as Starship[];
  }
);

const starshipsSlice = createSlice({
  name: "starships",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStarships.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStarships.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchStarships.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

const starshipsReducer = starshipsSlice.reducer;
export type IRootState = ReturnType<typeof starshipsReducer>;

export default starshipsReducer;
