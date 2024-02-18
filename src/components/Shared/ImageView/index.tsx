import { StyledImageView } from './styles'
import { AnimatePresence, motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

/** Hooks */
import { useAppSelector } from '~hooks/useAppSelector'
import { useAppDispatch } from '~hooks/useAppDispatch'
import { setImageView } from '~store/metadata'

export default function ImageView() {
    const dispatch = useAppDispatch()
    const { open, url } = useAppSelector(
        (state) => state.metadataSlice.imageView,
    )

    return (
        <AnimatePresence mode="wait">
            {open && (
                <StyledImageView
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', bounce: 0, duration: 0.1 }}
                >
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                    >
                        <FontAwesomeIcon
                            icon={faXmark}
                            onClick={() =>
                                dispatch(setImageView({ open: false }))
                            }
                        />
                    </motion.button>
                    <motion.img
                        src={url}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        draggable={false}
                        loading="lazy"
                    />
                    <div
                        onClick={() => dispatch(setImageView({ open: false }))}
                    />
                </StyledImageView>
            )}
        </AnimatePresence>
    )
}
