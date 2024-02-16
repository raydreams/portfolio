import { ImageProps } from './types'
import { useAppDispatch } from '~hooks/useAppDispatch'
import { setImageView } from '~store/metadata'

/**
 * Unlike a regular <img /> component, this will open an additional preview upon being clicked.
 */
export default function Image(props: ImageProps) {
    const dispatch = useAppDispatch()

    return (
        <img
            src={props.src}
            alt={props.alt}
            height={props.height}
            width={props.width}
            onClick={() =>
                dispatch(
                    setImageView({
                        open: true,
                        url: props.src,
                    }),
                )
            }
            draggable={false}
            loading="lazy"
        />
    )
}
