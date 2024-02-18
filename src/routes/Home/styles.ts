import styled from 'styled-components'
import { Column } from '~components/Shared/Column'

export const PageWrapper = styled('div')`
    position: relative;
    z-index: 2;

    height: fit-content;
    width: 100%;

    display: flex;
    flex-direction: column;
`

export const StyledLanding = styled('div')`
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    svg.brand {
        height: 110px;
        width: 180px;
    }

    > p {
        color: var(--ui-lightgray);
        line-height: 25px;
        font-size: 15px;
        font-weight: 500;
        max-width: 400px;
    }

    > div {
        margin-top: 15px;

        display: flex;
        align-items: center;
        gap: 5px;

        > div {
            display: flex;
            align-items: center;
            gap: 5px;
        }
    }

    @media (max-width: 1000px) {
        width: 100%;
        align-items: center;

        > p {
            text-align: center;
            max-width: 380px !important;
        }
    }

    @media (max-width: 500px) {
        > div {
            flex-direction: column;
            gap: 2px;
        }
    }
`

export const StyledProjects = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ProjectsAbout = styled(Column)`
    text-align: justify;
    
    p {
        color: var(--ui-lightgray);
        line-height: 25px;
        font-size: 13px;
        font-weight: 500;
    }

    @media (max-width: 600px) {
        text-align: center;
    }
`

export const ProjectList = styled('div')`
    display: flex;
    gap: 12px;

    @media (max-width: 600px) {
        padding: 15px;
        flex-direction: column;
        justify-content: center;
    }
`
