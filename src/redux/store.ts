
import { configureStore } from "@reduxjs/toolkit"; 

// created reducers
import counterReducer from "./features/counterSlice";
import userReducer from "./features/userExampleSlice"

export const store = configureStore({
    reducer: {
        // examples
        counterReducer,
        userReducer
    },
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store
