import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledImageView = styled(motion.div)`
    height: 100vh;
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 999;

    > button {
        position: absolute;
        top: 15px;
        right: 15px;

        height: 24px;
        width: 24px;

        background: none;
        border: none;

        cursor: pointer;

        svg {
            height: 24px;
            width: 24px;
        }

        &:hover {
            opacity: 0.8;
        }
    }

    > img {
        width: 100%;
        max-width: 1000px;
    }

    > div {
        height: 100vh;
        width: 100%;

        position: absolute;
        top: 0;
        left: 0;

        background-color: #00000090;
        z-index: -1;
    }
`
