import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // personalSkill: "",
    // fullName: "",
    // mobileNo: "",
    // alterMobileNo: "",
    // email: "",
    // flatNo: "",
    // streetName: "",
    // areaName: "",
    // city: "",
    // state: "",
    // pincode: "",
    data: null,
}

export const personalDetails = createSlice({
    name: 'addPersonalDetails',
    initialState,
    reducers: {
        addPersonalDetails: (state, action) => {
            // state.personalSkill = action.payload.personalSkill,
            // state.fullName = action.payload.fullName,
            // state.mobileNo = action.payload.mobileNo,
            // state.alterMobileNo = action.payload.alterMobileNo,
            // state.email = action.payload.email,
            // state.flatNo = action.payload.flatNo,
            // state.streetName = action.payload.streetName,
            // state.areaName = action.payload.areaName,
            // state.city = action.payload.city,
            // state.state = action.payload.state,
            // state.pincode = action.payload.pincode,
            state.data = action.payload
        }
    },
})

export const { addPersonalDetails } = personalDetails.actions

export default personalDetails.reducer