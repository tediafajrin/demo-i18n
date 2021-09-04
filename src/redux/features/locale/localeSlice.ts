import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "../../store"

type Locale = {
    title?: string,
    description?: string
}

interface State {
    locale: Locale
}

const initialState: State = {
    locale: {}
}

const localeSlice = createSlice({
    name: 'locale',
    initialState,
    reducers: {
        setLocale: (state, action) => {
            state.locale = action.payload
        }
    }
})

export const selectLocale = (state: AppState) => state.locale.locale
export const { setLocale } = localeSlice.actions

export default localeSlice.reducer