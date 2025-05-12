import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/item";

const bagSlice= createSlice({
    name: 'item',
    initialState: [],         //ID includes card Id which is stored in array form
    reducers:{
        addTobag: (state, action)=>{
            state.push(action.payload) ;
        },
        removeFrombag: (state, action)=>{
           return state.filter((itemId)=> itemId != action.payload)
        //here ItemId is a variable name     
        //This will remove items from card :
        //payload contains the data of whole array which
        }
    }
});
    
export const bagActions= bagSlice.actions;

export default bagSlice 
