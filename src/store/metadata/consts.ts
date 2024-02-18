import { MetadataState } from '.'

export const initialState: MetadataState = {
    projectView: {
        open: false,
        title: '',
        description: '',
        images: [''],
    },
    imageView: {
        open: false,
        url: '',
    },
}
