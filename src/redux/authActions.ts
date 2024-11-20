import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { setUser, setError, logout } from "./authSlice";

interface User {
  email:string;
  password: string;
}

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: User, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      thunkAPI.dispatch(setUser({ email: user.email! }));
    } catch (error: any) {
      if(error.code === "auth/invalid-credential") {
        const errorMessage = "Your email or password are incorrect."
        thunkAPI.dispatch(setError(errorMessage));
        return thunkAPI.rejectWithValue(errorMessage);
      } else {
        const errorMessage = "There was an error in the login process, please try again later."
        thunkAPI.dispatch(setError(errorMessage));
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  }
);

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (
    { email, password }: User, thunkAPI
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userEmail = userCredential.user.email || "";
      
      thunkAPI.dispatch(setUser({ email: userEmail }));
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        const errorMessage = "This email is already in use.";
        thunkAPI.dispatch(setError(errorMessage));
        return thunkAPI.rejectWithValue(errorMessage);
      } else if (error.code === "auth/invalid-email") {
        const errorMessage = "Please enter a valid email.";
        thunkAPI.dispatch(setError(errorMessage));
        return thunkAPI.rejectWithValue(errorMessage); 
      }  else if (error.code === "auth/weak-password") {
        const errorMessage = "Password should be at least 6 characters.";
        thunkAPI.dispatch(setError(errorMessage));
        return thunkAPI.rejectWithValue(errorMessage);
      } else {
        const errorMessage = "There was an error in the registration, please try again later.";
        thunkAPI.dispatch(setError(errorMessage));
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
      thunkAPI.dispatch(logout());
    } catch (error: any) {
      thunkAPI.dispatch(setError(error.message));
    }
  }
);
