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
        }
    },

});

export const { modeDark, modeLight } = modeSlice.actions;

export default modeSlice.reducer;