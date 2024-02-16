import { Link } from '~components/Layout/Lightbar'
import {
    faBookOpen,
    faCommentDollar,
    faHome,
} from '@fortawesome/free-solid-svg-icons'

const Links: Link[] = [
    {
        icon: faHome,
        text: 'Home',
        href: '/',
    },
    {
        icon: faBookOpen,
        text: 'About',
        href: '/about',
    },
    {
        icon: faCommentDollar,
        text: 'Commission',
        href: '/commission',
    },
]

export default Links
