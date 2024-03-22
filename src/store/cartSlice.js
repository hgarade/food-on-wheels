import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      removeWithId(state, action);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

const removeWithId = (state, action) => {
  return state.items.splice(
    state.items.findIndex((item) => item.id === action.payload.id),
    1
  );
};
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
