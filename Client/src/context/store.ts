'use client'

import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "./features/BookSlice";

export const store = configureStore({
    reducer: {
        Book: BookReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;