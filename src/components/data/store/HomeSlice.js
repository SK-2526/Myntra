import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_ITEMS4 } from '../data/HomeLiv';

const HomeSlice = createSlice({
  name: 'home',
  initialState: DEFAULT_ITEMS4,
  reducers: {
    setMensItems: (state, action) => {
      return action.payload;
    }
  }
});

export const HomeActions = HomeSlice.actions;
export default HomeSlice
