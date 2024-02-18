import styled from 'styled-components'

export const StyledProject = styled('div')`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #ffffff10;
    box-shadow: 0 0.5px 0 #ffffff30 inset;
    border-radius: 8px;

    transition: 0.2s ease;
    cursor: pointer;

    img {
        width: calc(100% - 15px);
        border-radius: 6px;
        margin: 10px 0 15px 0;
    }

    h3 {
        font-size: 16px;
    }

    p {
        text-align: center;
        color: var(--ui-lightgray);
        line-height: 25px;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 15px;
    }

    &:hover {
        background-color: #ffffff15;
    }

    &:active {
        scale: 0.96;
    }
`
