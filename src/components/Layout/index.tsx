import { type ReactNode } from 'react'
import styled from 'styled-components'

/** Components */
import Lightbar from './Lightbar'
import Footer from './Footer'

const StyledLayout = styled('div')`
    display: flex;
    flex-direction: column;
`

const Content = styled('main')`
    height: fit-content;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
`

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <StyledLayout>
            <Lightbar />
            <Content>{children}</Content>
            <Footer />
        </StyledLayout>
    )
}
