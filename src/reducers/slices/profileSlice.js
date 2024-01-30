import { createSlice } from '@reduxjs/toolkit'

//if the user is not instructor then we also hove to show the cart as well 
export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    user: null,
  },
  reducers: {
    setUser(state , action){
      console.log('user data is : '  ,action)
      state.user = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser } = profileSlice.actions

export default profileSlice.reducer