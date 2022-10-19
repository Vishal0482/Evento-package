import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: JSON.parse(localStorage.getItem("category")) || null,
  aboutPlace: null,
  personalDetail : null,
  capacity: null,
  companyDetail: null,
  termsAndCondition: null,
}

export const createEvent  = createSlice({
    name: 'createEvent',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            state.category = action.payload.category
            localStorage.setItem("category",JSON.stringify(state.category));
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
        },
        removeData: (state, action) => {
          state[action.payload] = null
        }
    },
  })
  
  export const { addCategory, addAboutPlace, addPersonalDetails, addCapacity, addCompanyDetail, addTermsAndCondition, removeData } = createEvent.actions
  
  export default createEvent.reducer