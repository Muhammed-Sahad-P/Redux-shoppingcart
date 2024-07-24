import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const product = action.payload
      state.push({...product, quantity: 1});
    },
    removeCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    incquantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },

    decquantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export const { addTocart, removeCart, incquantity, decquantity } =
  cartSlice.actions;
export default cartSlice.reducer;
