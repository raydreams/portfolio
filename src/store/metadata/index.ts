import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './consts'

export type MetadataState = {
    projectView: {
        open: boolean
        title: string
        description: string
        images: string[]
    }
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
        setProjectView: (state, action) => {
            state.projectView.open = action.payload.open
            state.projectView.title = action.payload.title
            state.projectView.description = action.payload.description
            state.projectView.images = action.payload.images
        },
    },
})

export const { setImageView, setProjectView } = metadataSlice.actions

export default metadataSlice.reducer
