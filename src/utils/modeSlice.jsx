import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
    name: 'mode',
    initialState:null,
    reducers:{
        modeDark: ()=>{
            return "dark";
        },
        modeLight: ()=>{
            return "light";
        },
        removeMode: ()=>{
            return null;
        },
    },

});

export const { modeDark, modeLight, removeMode } = modeSlice.actions;

export default modeSlice.reducer;