import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/item";

const itemSlice= createSlice({
    name: 'item',
    initialState: DEFAULT_ITEMS,
    reducers:{
        addInitialItems: (store, action)=>{
            console.log('reducer', store, action)
            return store;
        }
    }
});

export const itemAction= itemSlice.actions;

export default itemSlice
