import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledProjectView = styled(motion.div)`
    height: 100vh;
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 999;

    > main {
        height: 100%;
        max-width: 800px;
        padding: 0 15px 0 85px;

        position: relative;
        overflow-y: scroll;

        display: flex;
        flex-direction: column;

        background-image: url("data:image/svg+xml,%3Csvg width='1000' height='200' viewBox='0 0 1000 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H1000V200H0V0Z' fill='white'/%3E%3Cpath d='M72 0H73V200H72V0Z' fill='%23E27F7F'/%3E%3Cpath d='M0 50H1000V51H0V50Z' fill='%2370ADCF'/%3E%3Cpath d='M0 0H1000V1H0V0Z' fill='%2370ADCF'/%3E%3Cpath d='M0 150H1000V151H0V150Z' fill='%2370ADCF'/%3E%3Cpath d='M0 100H1000V101H0V100Z' fill='%2370ADCF'/%3E%3C/svg%3E%0A");
        background-repeat: repeat;
        background-position-x: 0%;

        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-track {
            background: white;
        }

        &::-webkit-scrollbar-thumb {
            background: var(--ui-lightgray);
            border: 2px solid white;
            border-radius: 99em;
        }

        button {
            position: absolute;
            top: 8px;
            left: 25px;

            font-size: 28px;

            background: none;
            border: none;

            cursor: pointer;

            svg {
                path {
                    fill: black;
                }
            }
        }

        h1 {
            font-family: 'Comic Neue', cursive;
            color: black;
            margin-top: 80px;
        }

        p {
            color: black;
            font-family: 'Comic Neue', cursive;
            line-height: 25px;
            font-size: 18px;
            font-weight: 600;

            margin-bottom: 50px;
            text-align: left;
        }

        div {
            display: flex;
            flex-direction: column;
            gap: 15px;

            img {
                width: 100%;
                cursor: pointer;

                &:hover {
                    opacity: 0.8;
                }

                &:last-of-type {
                    margin-bottom: 50px;
                }
            }
        }
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
