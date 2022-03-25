import { createSlice } from "@reduxjs/toolkit";

let initialState = { user: null };

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    userLogin(state, action) {
      console.log(action.payload);
      state.user = action.payload;
    },
    userLogout(state, action) {
      state.user = null;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
