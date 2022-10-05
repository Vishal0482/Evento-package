import { configureStore } from '@reduxjs/toolkit';
import createEventReducer from './createEvent';
import personalDetailsReducer  from './personalDetails';

export const store = configureStore({
  reducer: {
    createEvent : createEventReducer,
    addPersonalDetails : personalDetailsReducer,
  },
})