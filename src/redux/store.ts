import { configureStore } from "@reduxjs/toolkit";
import localeSlice from "./features/locale/localeSlice";

const store = configureStore({
    reducer: {
        locale: localeSlice
    }
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store