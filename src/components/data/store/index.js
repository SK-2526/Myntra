//This is  Store which contains data about cards 
import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from './bagSlice';
import mensSlice from "./mensSlice";
import womenSlice from "./womenSlice";
import KidSlice from "./KidSlice";
import HomeSlice from "./HomeSlice";
import BeautySlice from "./BeautySlice";


const myntraStore= configureStore({
    reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    mens: mensSlice.reducer,
    womens:womenSlice.reducer,
    kids: KidSlice.reducer,
    home: HomeSlice.reducer,
    beauty: BeautySlice.reducer,
    bag: bagSlice.reducer,
    }
});

export default myntraStore









