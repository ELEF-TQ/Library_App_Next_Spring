import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosClient } from '@/api/index';
import Swal from 'sweetalert2';

interface User {
  id: number;
  username: string;
  email: string;
  // Add other user properties as needed
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

interface FormData {
  email: string;
  password: string;
}

// Async action to sign in
export const signIn = createAsyncThunk<User, FormData, { rejectValue: string }>(
    'auth/signIn',
    async (formData, { rejectWithValue }) => {
      try {
        const response = await axiosClient.post<User>('/auth/signin', formData);
        return response.data;
      } catch (error) {
        return rejectWithValue('Invalid email or password.');
      }
    }
  );

// Async action to sign up
export const signUp = createAsyncThunk<User, FormData, { rejectValue: string }>(
  'auth/signUp',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post<User>('/auth/signup', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue('An error occurred during sign-up.');
    }
  }
);

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        Swal.fire('Success!', 'Sign in successful!', 'success');
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string | null;
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        Swal.fire('Success!', 'Sign up successful!', 'success');
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string | null;
      });
  },
});

export const { signOut } = authSlice.actions;

export default authSlice.reducer;
