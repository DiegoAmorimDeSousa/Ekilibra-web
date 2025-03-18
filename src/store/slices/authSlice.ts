import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id?: string;
  name?: string;
  phone?: string;
  age?: string | number;  
  dateOfBirth?: string;
  picture?: string;
  role?: string;
  email?: string;
  token?: string;
  password?: string;
  invitedMembers?: object[]
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

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (user: User, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:5000/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        return thunkAPI.rejectWithValue("Erro ao atualizar perfil");
      }

      const updatedUser = await response.json();
      return updatedUser;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error || "Erro ao atualizar o perfil");
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ name, phone, email, password, googleToken, isAcceptInvate }: { name?: string; phone?: string; email?: string; password?: string, googleToken?: string, isAcceptInvate?: boolean }, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/users/register", {
        name,
        phone,
        email,
        password,
        googleToken,
        isAcceptInvate,
      });
      return response.data; 
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error || "Erro ao criar conta");
    }
  }
);

export const newMember = createAsyncThunk(
  "auth/new-member",
  async ({ name, phone, email, age, dateOfBirth, role, id, ownerName }: { name?: string; phone?: string; email?: string; age?: number, dateOfBirth?: string, role?: string, id?: string, ownerName?: string }, thunkAPI) => {
    try {
      await axios.post("http://localhost:5000/users/new-member", {
        name,
        phone,
        email,
        age,
        dateOfBirth,
        role,
        id,
        ownerName
      });
      return 200; 
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
        state.user = action.payload?.user;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload?.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
