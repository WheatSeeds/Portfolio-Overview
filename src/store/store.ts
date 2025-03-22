import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./portfolioSlice.ts";

const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;