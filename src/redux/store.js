import { configureStore } from '@reduxjs/toolkit';
import StepProgressCountReducer from './stepProgressCount';
import createEventReducer from './createEvent';

export const store = configureStore({
  reducer: {
    createEvent : createEventReducer,
    StepProgressCount: StepProgressCountReducer,
  },
})