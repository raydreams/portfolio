import { motion } from 'framer-motion'
import styled from 'styled-components'

/** Components */
import Logo from '~components/Shared/Logo'
import Mail from '~components/Shared/Mail'
import Social from '~components/Shared/Social'

/** Typings */
import { SocialProps } from '~components/Shared/Social/types'

/** Data */
import Socials from '~data/Socials'

const PageWrapper = styled('div')`
    position: relative;
    z-index: 2;
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const LandingSection = styled('section')`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
`

const LandingContent = styled('div')`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
`

const LogoWrapper = styled(motion.div)`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`

const SocialContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`

const SocialLinks = styled('div')`
    display: flex;
    gap: 20px;
    justify-content: center;
`

const ShowcaseSection = styled('section')`
    width: 100%;
    padding: 100px 0;
    background: rgba(255, 255, 255, 0.02);
`

const ShowcaseContent = styled('div')`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
`

const SectionTitle = styled(motion.h2)`
    font-size: 32px;
    font-weight: 600;
    color: white;
    margin-bottom: 40px;
    text-align: center;
`

const ProjectGrid = styled('div')`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
`

const ProjectCard = styled(motion.div)`
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

        img {
            transform: scale(1.05);
        }
    }
`

const ProjectImage = styled('div')`
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }
`

const ProjectContent = styled('div')`
    padding: 24px;

    h3 {
        font-size: 24px;
        font-weight: 600;
        color: white;
        margin-bottom: 12px;
    }

    p {
        color: var(--ui-lightgray);
        font-size: 15px;
        line-height: 1.6;
        margin-bottom: 20px;
    }
`

const ProjectTags = styled('div')`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const ProjectTag = styled('span')`
    padding: 4px 12px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    font-size: 13px;
    color: var(--ui-lightgray);
`

const projects = [
    {
        title: "AI-Powered Task Manager",
        description: "A modern task management application with AI-driven insights and smart scheduling capabilities.",
        image: "/projects/task-manager.jpg",
        tags: ["React", "Node.js", "TensorFlow", "MongoDB"]
    },
    {
        title: "Real-time Collaboration Platform",
        description: "A collaborative workspace platform with real-time editing, chat, and file sharing capabilities.",
        image: "/projects/collab-platform.jpg",
        tags: ["Next.js", "WebSocket", "PostgreSQL", "AWS"]
    },
    {
        title: "Smart Home Dashboard",
        description: "An intuitive dashboard for managing smart home devices with automation and analytics.",
        image: "/projects/smart-home.jpg",
        tags: ["React", "IoT", "Python", "GraphQL"]
    }
]

export default function Home() {
    return (
        <PageWrapper>
            <LandingSection>
                <LandingContent>
                    <LogoWrapper
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Logo />
                    </LogoWrapper>
                    <SocialContainer
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Mail to="rehan@morani.dev" />
                        <SocialLinks>
                            {Socials.map((props: SocialProps, index: number) => (
                                <Social
                                    key={index}
                                    icon={props.icon}
                                    href={props.href}
                                />
                            ))}
                        </SocialLinks>
                    </SocialContainer>
                </LandingContent>
            </LandingSection>

            <ShowcaseSection>
                <ShowcaseContent>
                    <SectionTitle
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Featured Projects
                    </SectionTitle>
                    <ProjectGrid>
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <ProjectImage>
                                    <img src={project.image} alt={project.title} />
                                </ProjectImage>
                                <ProjectContent>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <ProjectTags>
                                        {project.tags.map(tag => (
                                            <ProjectTag key={tag}>{tag}</ProjectTag>
                                        ))}
                                    </ProjectTags>
                                </ProjectContent>
                            </ProjectCard>
                        ))}
                    </ProjectGrid>
                </ShowcaseContent>
            </ShowcaseSection>
        </PageWrapper>
    )
}
