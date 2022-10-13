import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0
}

export const StepProgressCount  = createSlice({
    name: 'StepProgressCount',
    initialState,
    reducers: {
        increment: (state) => {
            state.count +=1
        },
        decrement: (state) => {
            if(state.count > 0) {
                state.count -=1
            }
        },
        reset: (state) => {
            state.count = 0
        }
    },
  })
  
  export const { increment, decrement, reset } = StepProgressCount.actions;
  
  export default StepProgressCount.reducer