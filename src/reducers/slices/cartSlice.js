import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
//remember to add toast when something is added or removed or resetted

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalItems: localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0,
    cartItems : [],
  },
  reducers: {
    setTotalItems(state , action){
      state.totalItems = action.payload
    },
    //add to cart
    addToCart(state,action){
        state.cartItems.push(action.payload)
    },
    //remove from cart
    removeFromCart(state,action){
        state.cartItems = state.cartItems.filter(item => item != action.payload) 
    },
    //resetcart
    resetCart(state,action){
        state.cartItems = []
    }
  }
})

// Action creators are generated for each case reducer function
export const { setTotalItems , addToCart , removeFromCart , resetCart } = cartSlice.actions

export default cartSlice.reducer