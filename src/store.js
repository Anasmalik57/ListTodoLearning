// Reducer Imports
import todoReducer from "./slices/todoSlice.js";
import { configureStore } from '@reduxjs/toolkit';



const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    devTools: process.env.NODE_ENV != 'production'
})


export default store;