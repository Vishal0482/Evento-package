import { configureStore } from '@reduxjs/toolkit';
import createEventReducer from './createEvent';
import createLogin from './createLogin';
import stepCountPogress from './stepCountPogress';

export const store = configureStore({
  reducer: {
    createEvent: createEventReducer,
    createLogin: createLogin,
    stepCountPogress: stepCountPogress,
  },
})