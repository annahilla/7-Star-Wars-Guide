import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Film, Pilot, Starship } from "../types/types";

export interface StarshipsState {
  starships: Starship[];
  pilots: Pilot[];
  films: Film[];
  nextPage: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: StarshipsState = {
  starships: [],
  pilots: [],
  films: [],
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

export const fetchPilots = createAsyncThunk('starships/fetchPilots', 
  async (urls: string[]) => {
  const responses = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
  return responses as Pilot[];
});

export const fetchFilms = createAsyncThunk('starships/fetchFilms', 
  async (urls: string[]) => {
  const responses = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
  return responses as Film[];
});


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
      const newStarships = action.payload.results.filter(
        (newStarship) => !state.starships.some((starship) => starship.url === newStarship.url)
      );
      state.starships = [...state.starships, ...newStarships];
      state.nextPage = action.payload.next;
    })
    
    .addCase(fetchStarships.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch starships';
    })
    .addCase(fetchPilots.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchPilots.fulfilled, (state, action) => {
      state.loading = false;
      state.pilots = action.payload;
    })
    .addCase(fetchPilots.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch pilots';
    })
    .addCase(fetchFilms.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchFilms.fulfilled, (state, action) => {
      state.loading = false;
      state.films = action.payload;
    })
    .addCase(fetchFilms.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch films';
    });
},
});

const starshipsReducer = starshipsSlice.reducer;

export default starshipsReducer;
