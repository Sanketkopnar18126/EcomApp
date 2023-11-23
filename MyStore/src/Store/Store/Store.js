import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "../Slice/Slice";

export const Store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
