import { configureStore } from "@reduxjs/toolkit";
import shoppingListSlice from "./shoppingListSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: { shoppingList: shoppingListSlice.reducer, user: userSlice.reducer },
});

export default store;
