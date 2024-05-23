import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",

  initialState: {
    users: [],
    loggedin: null,
    isAuthenticated: false,
  },

  reducers: {
    adduser: (state, action) => {
      console.log("test=>>", action.payload);
      state.users.push(action.payload);
    },

    deleteuser: (state, action) => {
      state.users = state.users.filter((item) => item.id !== action.payload.id);
    },

    login: (state, action) => {
      state.loggedin = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
    },

    logout: (state, action) => {
      state.loggedin = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout, adduser, deleteuser } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
