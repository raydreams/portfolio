import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './consts'

export type MetadataState = {
    imageView: {
        open: boolean
        url: string
    }
}

export const metadataSlice = createSlice({
    name: 'metadata',
    initialState: initialState,
    reducers: {
        setImageView: (state, action) => {
            state.imageView.open = action.payload.open
            state.imageView.url = action.payload.url
        },
    },
})

export const { setImageView } = metadataSlice.actions

export default metadataSlice.reducer
