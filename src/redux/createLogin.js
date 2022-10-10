import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  token: localStorage.getItem('token'),
  email: "",
  userId:localStorage.getItem('userId')
}

const createLogin = createSlice({
  name: 'createLogin',
  initialState,
  reducers: {
    addLogin: (state, action) => {
      state.email = action.payload.email
      state.token = action.payload.token
      state.userId = action.payload.userId
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userId", action.payload.userId);
    },
    logout:(state) =>{
      state.token = null
      state.userId = null
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
    }
  }
})

export const { addLogin , logout} = createLogin.actions

export default createLogin.reducer