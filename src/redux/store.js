import { configureStore } from '@reduxjs/toolkit';
import createEventReducer from './createEvent';
import createLogin from './createLogin';

export const store = configureStore({
  reducer: {
    createEvent: createEventReducer,
    createLogin: createLogin
  },
})