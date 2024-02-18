import { useEffect } from 'react'
import { StyledProjectView } from './styles'

import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

/** Components */
import Image from '../Image'

/** Hooks */
import { useAppSelector } from '~hooks/useAppSelector'
import { useAppDispatch } from '~hooks/useAppDispatch'
import { setProjectView } from '~store/metadata'

export default function ProjectView() {
    const dispatch = useAppDispatch()
    const { open, title, description, images } = useAppSelector(
        (state) => state.metadataSlice.projectView,
    )

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [open])

    return (
        <AnimatePresence mode="wait">
            {open && (
                <StyledProjectView
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', bounce: 0, duration: 0.1 }}
                >
                    <motion.main
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{
                            type: 'spring',
                            bounce: 0,
                            duration: 0.5,
                        }}
                    >
                        <button
                            onClick={() =>
                                dispatch(setProjectView({ open: false }))
                            }
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <div>
                            {images.map((image: string, index: number) => (
                                <Image
                                    key={index}
                                    src={`/assets/images/projects/${image}`}
                                />
                            ))}
                        </div>
                    </motion.main>
                    <div
                        onClick={() =>
                            dispatch(setProjectView({ open: false }))
                        }
                    />
                </StyledProjectView>
            )}
        </AnimatePresence>
    )
}
