import { createSlice } from '@reduxjs/toolkit'
// import toast from 'react-hot-toast'
//remember to add toast when something is added or removed or resetted

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalItems: localStorage.getItem("totalItems") ? localStorage.getItem("totalItems") : 0,
    cartItems : localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    totalPrice : localStorage.getItem("totalPrice") ? JSON.parse(localStorage.getItem("totalPrice")) : 0,
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
      console.log('the current items in cart ' , state.cartItems);
      console.log("item to be removed " , action.payload);
      state.cartItems = state.cartItems.filter(item => item !== action.payload) 
    },
    //resetcart
    resetCart(state,action){
      state.cartItems = []
    },
    setTotalPrice(state , action){
      state.totalPrice = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setTotalItems , addToCart , removeFromCart , resetCart , setTotalPrice} = cartSlice.actions

export default cartSlice.reducer