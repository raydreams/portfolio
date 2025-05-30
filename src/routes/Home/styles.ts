import styled from 'styled-components'

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

export const StyledShowcase = styled('div')`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 100px 20px;

    display: flex;
    flex-direction: column;
    gap: 40px;

    h2 {
        font-size: 32px;
        font-weight: 600;
        color: white;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
    }

    @media (max-width: 1000px) {
        padding: 60px 20px;
        
        h2 {
            text-align: center;
        }
    }

    @media (max-width: 500px) {
        .projects-grid {
            grid-template-columns: 1fr;
        }
    }
`