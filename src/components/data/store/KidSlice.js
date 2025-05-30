import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_ITEMS3 } from '../data/Kids';

const KidSlice = createSlice({
  name: 'kids',
  initialState: DEFAULT_ITEMS3,
  reducers: {
    setMensItems: (state, action) => {
      return action.payload;
    }
  }
});

export const KidActions = KidSlice.actions;
export default KidSlice
