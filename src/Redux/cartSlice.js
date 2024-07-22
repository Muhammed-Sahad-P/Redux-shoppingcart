import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
          addTocart:(state,action) => {
            state.push(action.payload)
          },
          removeCart:(state,action) =>{
            return state.filter(item => item.id !== action.payload)
          }

    }
})

export const {addTocart,removeCart} = cartSlice.actions;
export default cartSlice.reducer;