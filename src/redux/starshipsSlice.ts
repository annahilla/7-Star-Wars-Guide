import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Starship } from "../types/types";

interface StarshipsState {
  starships: Starship[];
  nextPage: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: StarshipsState = {
  starships: [],
  nextPage: 'https://swapi.dev/api/starships',
  loading: false,
  error: null,
};

export const fetchStarships = createAsyncThunk(
  'starships/fetchStarships',
  async (url:string = 'https://swapi.dev/api/starships') => {
    const response = await fetch(url);
    const data = await response.json();
    return { 
      results: data.results as Starship[],
      next: data.next as string | null
    };
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
    .addCase(fetchStarships.fulfilled, (state, action: PayloadAction<{ results: Starship[]; next: string | null }>) => {
      state.loading = false;
      state.starships = [...state.starships, ...action.payload.results];
      state.nextPage = action.payload.next;
    })
    .addCase(fetchStarships.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch starships';
      });
},
});

const starshipsReducer = starshipsSlice.reducer;

export default starshipsReducer;
