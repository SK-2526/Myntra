// store/womensSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_ITEMS2 } from '../data/Womenimg';

const womenSlice = createSlice({
  name: 'womens',
  initialState: DEFAULT_ITEMS2,
  reducers: {
    setMensItems: (state, action) => {
      return action.payload;
    }
  }
});

export const womensActions = womenSlice.actions;
export default womenSlice;
