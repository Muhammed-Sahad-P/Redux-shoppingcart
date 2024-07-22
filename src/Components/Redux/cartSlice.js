import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
          addTocart:(state,action) => {
            state.push(action.payload)
          }

    }
})

export const {addTocart} = cartSlice.actions;
export default cartSlice.reducer;