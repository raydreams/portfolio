import { useEffect } from 'react'
import { PageWrapper } from './styles'

import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/')
        }, 5000)

        return () => clearTimeout(timeout)
    }, [navigate])

    const texts = [
        'How did you end up here?',
        "Looks like you're a lost traveler!",
        'Sir, this is not your destination.',
        'Lost in the digital wilderness, are we?',
        'Navigational error: destination unknown.',
        "This is not the webpage you're looking for.",
        'A wrong turn in the digital labyrinth.',
        "You've entered the realm of 404.",
        'The road less traveled led you here.',
        'Lost in the endless expanse of the internet.',
        'Looks like your coordinates are scrambled.',
        '404 - Destination not found.',
    ]

    return (
        <PageWrapper>
            {/* <Image
                src="https://media.tenor.com/CbhnRg0n7ksAAAAC/kermit-the-frog-looking-for-directions.gif"
                alt="Kermit The Frog"
                width={400}
                height={256}
            /> */}
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {texts[Math.floor(Math.random() * texts.length)]} 🤔
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Sending you back shortly.
            </motion.p>
        </PageWrapper>
    )
}
