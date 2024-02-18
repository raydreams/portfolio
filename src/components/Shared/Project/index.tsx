import { StyledProject } from './styles'
import { ProjectProps } from './types'

/** Hooks */
import { useAppDispatch } from '~hooks/useAppDispatch'
import { setProjectView } from '~store/metadata'

/** Utils */
import trimText from '~utils/trimText'

export default function Project(props: ProjectProps) {
    const dispatch = useAppDispatch()

    return (
        <StyledProject
            onClick={() =>
                dispatch(
                    setProjectView({
                        open: true,
                        title: props.title,
                        description: props.description,
                        images: props.images,
                    }),
                )
            }
        >
            <img
                src={`/assets/images/projects/${props.images[0]}`}
                alt={props.title}
                draggable={false}
                loading="lazy"
            />
            <h3>{props.title}</h3>
            <p>{trimText(props.description, 60)}</p>
        </StyledProject>
    )
}
