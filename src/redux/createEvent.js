import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: {
    id: "",
    categoryName: "",
    displayName: "",
  },
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
            state.category.id = action.payload.id
            state.category.categoryName = action.payload.categoryName
            state.category.displayName = action.payload.displayName
        },
        addAboutPlace: (state, action) => {
          state.aboutPlace = action.payload.aboutPlace
        },
        addPersonalDetails: (state, action) => {
          state.personalDetail = action.payload.personalDetail
        },
        addCompanyDetail: (state, action) => {
          state.companyDetail = action.payload.companyDetail
        },
        addTermsAndCondition: (state, action) => {
          state.termsAndCondition = action.payload.companyDetail
        }
    },
  })
  
  export const { addCategory, addAboutPlace, addPersonalDetails, addCompanyDetail, addTermsAndCondition } = createEvent.actions
  
  export default createEvent.reducer