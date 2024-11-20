import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { setUser, setError } from "./authSlice";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      thunkAPI.dispatch(setUser({ email: user.email! }));
    } catch (error: any) {
      thunkAPI.dispatch(setError(error.message));
    }
  }
);

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (
    { email, password }: { email: string; password: string },
    { dispatch }
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userEmail = userCredential.user.email || "";
      
      dispatch(setUser({ email: userEmail }));
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  }
);