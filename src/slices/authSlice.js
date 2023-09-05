import { configureStore, createSlice } from "@reduxjs/toolkit";

// const mediaSlice = createSlice({
//     name: 'media',
//     initialState: {
//         value: []
//     },
//     reducers: {
//         isBookmarked: state => {
//             state.value = !
//         }
//     }
// })

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
