// 1 st set initial state

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const Slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((items) => items.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = Slice.actions;

export default Slice.reducer;
