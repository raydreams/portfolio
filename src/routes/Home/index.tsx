import {
    PageWrapper,
    StyledLanding,
} from './styles'
import { motion } from 'framer-motion'

/** Components */
import Logo from '~components/Shared/Logo'
import Mail from '~components/Shared/Mail'
import Social from '~components/Shared/Social'

/** Typings */
import { SocialProps } from '~components/Shared/Social/types'

/** Data */
import Socials from '~data/Socials'

export default function Home() {
    return (
        <PageWrapper>
            <StyledLanding>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Logo />
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    A not so smart developer from Canada. Skilled
                    in being cool, coding a bit, and being not so smart in life.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Mail to="leo@starnode.host" />
                    <div>
                        {Socials.map((props: SocialProps, index: number) => (
                            <Social
                                key={index}
                                icon={props.icon}
                                href={props.href}
                            />
                        ))}
                    </div>
                </motion.div>
            </StyledLanding>
        </PageWrapper>
    )
}
