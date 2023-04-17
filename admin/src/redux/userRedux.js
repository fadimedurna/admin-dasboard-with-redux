import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    success: false,
    token: null,
  },
  reducers: {
    loginStart: (state, action) => {
      state.isFetching = true;
      state.error = false;
      state.success = false;
      state.token = action.payload;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.success = true;
      state.token = action.payload.accessToken;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.success = false;
    },
    logoutStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.success = false;
    },
    logoutSuccess: (state) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = false;
      state.token = null;
    },
    logoutFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.success = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutFailure,
  logoutStart,
  logoutSuccess,
} = userSlice.actions;
export default userSlice.reducer;
