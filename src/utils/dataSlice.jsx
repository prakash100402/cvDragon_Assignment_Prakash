import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name:'data',
    initialState:null,
    reducers: {
        addData: (state, action)=>{
           return action.payload;
        },
        removeData: ()=>{
            return null;
        },
    },
});

export const { addData, removeData } = dataSlice.actions;

export default dataSlice.reducer;