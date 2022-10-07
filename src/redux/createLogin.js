import { createSlice } from '@reduxjs/toolkit';




// const fetch2 = async (body, token = "") => {
//   const res = await fetch('http://64.227.167.195:8000/api/login', {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(body)
//   })
//   return await res.json()
// }

// export const signupUser = createAsyncThunk(
//   'signupUser',
//   async (body) => {
//     const result = await fetch2('http://64.227.167.195:8000/api/login', body)
//     return result
//   }
// )

const initialState = {
  token:"",
  email: ""
}

const createLogin = createSlice({
  name: 'createLogin',
  initialState,
  reducers: {
    addLogin: (state,action)=>{
      state.email = action.payload.email
      state.token = action.payload.token
      localStorage.setItem("token",action.payload.token);
    }
  },
  // extraReducers: {
  //   [signupUser.fulfilled]: (state, action) => {
  //     state.loading = false
  //     if (action.payload.errors) {
  //       state.errors = action.payload.errors
  //     }
  //   },
  //   [signupUser.pending]: (state, action) => {
  //     state.loading = true
  //   }
  // }
})

export const {addLogin } = createLogin.actions

export default createLogin.reducer