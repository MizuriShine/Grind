import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  // user: {
  //   email: string;
  // } | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  // user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // loginSuccess(state, action: PayloadAction<{ email: string }>) {
    //   state.isAuthenticated = true;
    //   //state.user = action.payload;
    // },
    loginSuccess(state, action: PayloadAction) {
      state.isAuthenticated = true;
      console.log("Auth!");
      //state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      //state.user = null;
    },
  },
});

export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('/api/user/check-auth', {
                credentials: 'include',
            });
            if (!response.ok) throw new Error('Not authenticated');
            return await response.json();
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue('An unknown error occurred');
            }
        }
    }
);

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
