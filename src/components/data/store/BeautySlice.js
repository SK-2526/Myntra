import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_ITEMS5 } from '../data/Beauty';

const BeautySlice = createSlice({
  name: 'beauty',
  initialState: DEFAULT_ITEMS5,
  reducers: {
    setMensItems: (state, action) => {
      return action.payload;
    }
  }
});

export const BeautyActions = BeautySlice.actions;
export default BeautySlice
