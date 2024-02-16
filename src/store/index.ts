import { configureStore } from '@reduxjs/toolkit'
import combinedReducer from './combined'

export const store = configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
