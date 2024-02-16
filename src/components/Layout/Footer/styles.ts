import styled from 'styled-components'

export const StyledFooter = styled('footer')`
    width: 100%;
    max-width: 1000px;
    margin: 125px auto 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 60px;

    > div {
        width: 100%;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;

        font-size: 13px;
        font-weight: 500;

        &:last-of-type {
            justify-content: flex-end;
        }
    }

    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;

        > div {
            align-items: center !important;
            justify-content: center !important;
            text-align: center;
        }
    }

    @media (max-width: 350px) {
        > div {
            font-size: 12px;
        }
    }
`
