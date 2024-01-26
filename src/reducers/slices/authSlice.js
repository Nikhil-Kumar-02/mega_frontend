import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
    loading : false,
    signupData : null,
  },
  reducers: {
    setToken(state , action){
      state.token = action.payload
    },
    setLoading(state , action){
      state.loading = action.payload
    },
    setSignupData(state , action){
      state.signupData = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setToken , setLoading , setSignupData} = authSlice.actions

export default authSlice.reducer