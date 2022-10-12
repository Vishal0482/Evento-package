import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: null,
  aboutPlace: null,
  personalDetail: null,
  capacity: null,
  companyDetail: null,
  termsAndCondition: null,
}

export const createEvent = createSlice({
  name: 'createEvent',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.category = action.payload.category
    },
    addAboutPlace: (state, action) => {
      state.aboutPlace = action.payload.aboutPlace
    },
    addPersonalDetails: (state, action) => {
      state.personalDetail = action.payload.personalDetail
    },
    addCapacity: (state, action) => {
      state.capacity = action.payload.capacity
    },
    addCompanyDetail: (state, action) => {
      state.companyDetail = action.payload.companyDetail
    },
    addTermsAndCondition: (state, action) => {
      state.termsAndCondition = action.payload.termsAndCondition
    }
  },
})

export const { addCategory, addAboutPlace, addPersonalDetails, addCapacity, addCompanyDetail, addTermsAndCondition } = createEvent.actions

export default createEvent.reducer