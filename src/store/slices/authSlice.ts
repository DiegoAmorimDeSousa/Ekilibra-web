import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  email: string;
  token: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password, googleToken }: { email?: string; password?: string, googleToken?: string }, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
        googleToken
      });

      return response.data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error || "Erro ao fazer login");
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ name, phone, email, password, googleToken }: { name?: string; phone?: string; email?: string; password?: string, googleToken?: string }, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/users/register", {
        name,
        phone,
        email,
        password,
        googleToken
      });
      return response.data; 
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error || "Erro ao criar conta");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
