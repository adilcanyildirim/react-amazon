import React from "react";
import { createSlice } from "@reduxjs/toolkit";

let initialState = { items: [], totalQuantity: 0, totalAmount: 0 };

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      console.log(action.payload);
      let newItem = action.payload;
      let existingItem = state.items.find(
        (addedItem) => addedItem.id === newItem.id
      );
      if (existingItem) {
        console.log("existingitem");
        let index = state.items.findIndex((item) => item.id === newItem.id);
        state.items[index].totalPrice =
          state.items[index].totalPrice + newItem.price;
        state.totalAmount = state.totalAmount + newItem.price;
        state.items[index].quantity = state.items[index].quantity + 1;
        state.totalQuantity = state.totalQuantity + 1;
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalAmount = state.totalAmount + newItem.price;
        state.totalQuantity = state.totalQuantity + 1;
        console.log(state.totalQuantity);
      }
    },
    removeFromCart(state, action) {
      console.log(state.items, "state");
      let id = action.payload;
      let index = state.items.findIndex((item) => item.id === id);
      state.totalQuantity = state.totalQuantity - 1;

      if (state.totalQuantity == 0) {
        state.totalAmount = 0;
      } else {
        state.totalAmount = state.totalAmount - state.items[index].price;
      }
      if (state.items[index].quantity === 1) {
        state.items.splice(index, 1);
      } else {
        state.items[index].quantity = state.items[index].quantity - 1;
      }
    },
  },
});

export const shoppingListActions = shoppingListSlice.actions;
export default shoppingListSlice;
