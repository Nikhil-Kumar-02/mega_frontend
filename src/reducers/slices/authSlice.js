import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
  },
  reducers: {
    setToken(state , action){
      state.token = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setToken } = authSlice.actions

export default authSlice.reducer