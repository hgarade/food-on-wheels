import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
    user: userReducer,
  },
});

export default appStore;
