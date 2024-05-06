// filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    jobRole: [],
    exp: [],
    location: [],
    remote: [],
    minBasePay: [],
  },
  reducers: {
    setJobRole: (state, action) => {
      state.jobRole = action.payload;
    },
    setExperience: (state, action) => {
      state.exp = action.payload
    },
    setlocation: (state, action) => {
      state.location = action.payload;
    },
    setRemote: (state, action) => {
      state.remote = action.payload
    },
    setMinBasePay: (state, action) => {
      state.minBasePay = action.payload
    },
  },
});

export const { setJobRole, setExperience, setlocation, setRemote, setMinBasePay } = filtersSlice.actions;

export default filtersSlice.reducer;
