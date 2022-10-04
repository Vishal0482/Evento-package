import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryName: "",
  displayName: ""
}

export const createEvent  = createSlice({
    name: 'createEvent',
    initialState,
    reducers: {
        addEvent: (state, action) => {
            state.categoryName = action.payload.categoryName
            state.displayName = action.payload.displayName
        }
    },
  })
  
  export const { addEvent } = createEvent.actions
  
  export default createEvent.reducer