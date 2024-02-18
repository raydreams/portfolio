import {
    PageWrapper,
    StyledLanding,
    StyledProjects,
    ProjectList,
    ProjectsAbout,
} from './styles'
import { motion } from 'framer-motion'

/** Components */
import Logo from '~components/Shared/Logo'
import Mail from '~components/Shared/Mail'
import Social from '~components/Shared/Social'
import Project from '~components/Shared/Project'

/** Typings */
import { SocialProps } from '~components/Shared/Social/types'
import { ProjectProps } from '~components/Shared/Project/types'

/** Data */
import Socials from '~data/Socials'
import Projects from '~data/Projects'

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
                    A hobby programmer and student from Greece who specializes
                    in frontend web development.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Mail to="contact@naibuu.dev" />
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
            <StyledProjects>
                <ProjectsAbout>
                <h2>Here are some of my projects.</h2>
                <p>
                    My journey began in 2019, and since then I've created many
                    notable projects. Here are some of the notable ones.
                </p>
                </ProjectsAbout>
                <ProjectList>
                    {Projects.map((props: ProjectProps, index: number) => (
                        <Project
                            key={index}
                            title={props.title}
                            description={props.description}
                            images={props.images}
                        />
                    ))}
                </ProjectList>
            </StyledProjects>
        </PageWrapper>
    )
}
