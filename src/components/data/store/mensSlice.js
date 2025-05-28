// store/mensSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_ITEMS1 } from '../data/Menimg';

const mensSlice = createSlice({
  name: 'mens',
  initialState: DEFAULT_ITEMS1,
  reducers: {
    setMensItems: (state, action) => {
      return action.payload;
    }
  }
});

export const mensActions = mensSlice.actions;
export default mensSlice;
