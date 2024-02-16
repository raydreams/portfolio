import { combineReducers } from '@reduxjs/toolkit'

/** Slices */
import metadataSlice from './metadata'

export const combinedReducer = combineReducers({
    metadataSlice,
})

export default combinedReducer
