import { configureStore } from '@reduxjs/toolkit';
import useReducer from './userSlice';
import useMode from './modeSlice';
import useData from './dataSlice';

const appStore = configureStore({
    reducer: {
        user: useReducer,
        mode: useMode,
        data: useData,
    },
});

export default appStore;