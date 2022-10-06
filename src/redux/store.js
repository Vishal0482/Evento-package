import { configureStore } from '@reduxjs/toolkit';
import createEventReducer from './createEvent';

export const store = configureStore({
  reducer: {
    createEvent : createEventReducer,
  },
})