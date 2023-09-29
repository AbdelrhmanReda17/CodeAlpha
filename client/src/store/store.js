import { configureStore } from '@reduxjs/toolkit';
import blogsSlice from './blogsSlice';
import appSlice from './appSlice';
import authSlice from './authSlice';

export const store = configureStore({
    reducer : {
        blogsReducer : blogsSlice,
        appReducer : appSlice,
        authReducer : authSlice
    }
})



