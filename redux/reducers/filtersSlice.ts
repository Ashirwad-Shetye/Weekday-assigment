// filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    jobRole: '',
    minExp: 0,
    maxExp: Infinity,
    // Add more filter fields as needed
  },
  reducers: {
    setJobRole: (state, action) => {
      state.jobRole = action.payload;
    },
    setExperience: (state, action) => {
      state.minExp = action.payload.minExp;
      state.maxExp = action.payload.maxExp;
    },
    // Add more reducers for other filters
  },
});

export const { setJobRole, setExperience } = filtersSlice.actions;

export default filtersSlice.reducer;
