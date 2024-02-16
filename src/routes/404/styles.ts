import styled from 'styled-components'

export const PageWrapper = styled('div')`
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    h2 {
        font-size: 18px;
    }

    p {
        color: var(--ui-lightgray);
        font-size: 14px;
        font-weight: 500;
    }
`
