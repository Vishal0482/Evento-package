import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  token: "",
  email: ""
}

const createLogin = createSlice({
  name: 'createLogin',
  initialState,
  reducers: {
    addLogin: (state, action) => {
      state.email = action.payload.email
      state.token = action.payload.token
      localStorage.setItem("token", action.payload.token);
    }
  }
})

export const { addLogin } = createLogin.actions

export default createLogin.reducer