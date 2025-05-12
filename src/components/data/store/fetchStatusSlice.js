import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice= createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false, //false: 'pending and true: 'Done'
        CurrentlyFetching: false, 
    },
    reducers:{
        markFetchDone: (state)=>{
            state.fetchDone = true;
        },
        markFetchingStarted: (state)=>{
            state.CurrentlyFetching= true;
        },
        markFetchingFinished: (state)=>{
            state.CurrentlyFetching= false;
        },
    }
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice
