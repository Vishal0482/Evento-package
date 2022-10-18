import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: JSON.parse(localStorage.getItem('stepcount')) || 0
}

export const stepCountPogress = createSlice({
  name: 'stepCountPogress',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
      localStorage.setItem("stepcount", JSON.stringify(state.count))
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1
        localStorage.setItem("stepcount", JSON.stringify(state.count))
      }
    },
    reset: (state) => {
      state.count = 0
      localStorage.setItem("stepcount", JSON.stringify(state.count))
    }
  }
});

export const { increment, decrement, reset } = stepCountPogress.actions

export default stepCountPogress.reducer


