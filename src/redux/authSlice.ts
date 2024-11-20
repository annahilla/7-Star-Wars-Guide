import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  email: string;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  email: "",
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ email: string }>) => {
      state.email = action.payload.email;
      state.isAuthenticated = true;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.email = "";
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

export const { setUser, setError, logout } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;