import { Moon, Sun } from 'lucide-react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useTheme } from '~context/ThemeContext'

const ToggleButton = styled(motion.button)`
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    color: var(--text-primary);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-2px);
        box-shadow: var(--card-shadow);
    }

    svg {
        width: 20px;
        height: 20px;
        transition: all 0.3s ease;
    }
`

const IconWrapper = styled(motion.div)`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <ToggleButton
            onClick={toggleTheme}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
            <IconWrapper
                initial={false}
                animate={{
                    rotate: theme === 'light' ? 0 : 180,
                    opacity: theme === 'light' ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
            >
                <Sun />
            </IconWrapper>
            <IconWrapper
                initial={false}
                animate={{
                    rotate: theme === 'dark' ? 0 : -180,
                    opacity: theme === 'dark' ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
            >
                <Moon />
            </IconWrapper>
        </ToggleButton>
    )
} 