import { createSlice } from "@reduxjs/toolkit";

const sliceObject = {
  name: "auth",
  initialState: {
    loggedIn: false,
    userData: null,
  },
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
      state.loggedIn = true;
    },
    logout: (state, action) => {
      state.loggedIn = false;
      state.userData = null;
    },
  },
};
const authSlice = createSlice(sliceObject);

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
