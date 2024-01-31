import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    loading : false,
    signupData : null,
  },
  reducers: {
    setToken(state , action){
      console.log('token is : '  ,action)
      state.token = action.payload
    },
    setLoading(state , action){
      state.loading = action.payload
    },
    setSignupData(state , action){
      console.log("the stored user information : " , action.payload)
      state.signupData = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setToken , setLoading , setSignupData} = authSlice.actions

export default authSlice.reducer