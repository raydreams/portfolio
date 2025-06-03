import { type ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { FileText } from 'lucide-react'

/** Components */
import Lightbar from './Lightbar'
import Footer from './Footer'
import Logo from '~components/Shared/Logo'
import ThemeToggle from '~components/Shared/ThemeToggle'

const StyledLayout = styled('div')`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--bg-primary);
`

const Content = styled('main')`
    height: fit-content;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex: 1;
`

interface NavProps {
    $isFloating: boolean
}

const Nav = styled('nav')<NavProps>`
    position: fixed;
    top: ${props => props.$isFloating ? '30px' : '0'};
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    width: ${props => props.$isFloating ? 'auto' : '100%'};
    max-width: ${props => props.$isFloating ? '1200px' : 'none'};

    ${props => props.$isFloating ? `
        background: var(--nav-bg);
        backdrop-filter: blur(20px);
        border: 1px solid var(--nav-border);
        border-radius: 30px;
        box-shadow: var(--card-shadow);
    ` : `
        background: transparent;
    `}
`

interface NavContentProps {
    $isFloating: boolean
}

const NavContent = styled('div')<NavContentProps>`
    max-width: 1200px;
    margin: 0 auto;
    padding: ${props => props.$isFloating ? '16px 40px' : '20px'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    gap: 40px;
`

interface LogoWrapperProps {
    $isFloating: boolean
}

const LogoWrapper = styled.div<LogoWrapperProps>`
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: ${props => props.$isFloating ? '4px 0' : '0'};

    svg.brand {
        height: ${props => props.$isFloating ? '36px' : '40px'};
        width: ${props => props.$isFloating ? '58px' : '65px'};
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover {
        opacity: 0.8;
    }
`

const NavLinks = styled('div')`
    display: flex;
    gap: 8px;
    align-items: center;

    a {
        color: var(--text-secondary);
        text-decoration: none;
        font-size: 15px;
        font-weight: 500;
        transition: all 0.3s ease;
        padding: 12px 24px;
        border-radius: 16px;
        background: var(--card-bg);
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 8px;
        border: 1px solid var(--card-border);

        &:hover {
            color: var(--text-primary);
            background: var(--bg-secondary);
            transform: translateY(-1px);
            box-shadow: var(--card-shadow);
        }

        &.active {
            color: var(--accent-primary);
            background: var(--bg-secondary);
            border-color: var(--accent-primary);
        }

        svg {
            width: 16px;
            height: 16px;
        }
    }

    @media (max-width: 768px) {
        gap: 4px;

        a {
            padding: 10px 20px;
            font-size: 14px;
        }
    }

    @media (max-width: 500px) {
        a {
            padding: 8px 16px;
            font-size: 13px;
        }
    }
`

export default function Layout({ children }: { children: ReactNode }) {
    const location = useLocation()
    const [isFloating, setIsFloating] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setIsFloating(scrollPosition > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <StyledLayout>
            <Nav $isFloating={isFloating}>
                <NavContent $isFloating={isFloating}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <LogoWrapper $isFloating={isFloating}>
                            <Logo />
                        </LogoWrapper>
                    </Link>
                    <NavLinks>
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                            Home
                        </Link>
                        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                            About
                        </Link>
                        <Link to="/career" className={location.pathname === '/career' ? 'active' : ''}>
                            Career
                        </Link>
                        <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>
                            <FileText size={16} />
                        </Link>
                        <ThemeToggle />
                    </NavLinks>
                </NavContent>
            </Nav>
            <Lightbar />
            <Content style={{ marginTop: isFloating ? '120px' : '0' }}>{children}</Content>
            <Footer />
        </StyledLayout>
    )
}
