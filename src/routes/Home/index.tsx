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
    position: relative;

    &:hover {
        background: rgba(255, 255, 255, 0.05);
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

        .project-image {
            transform: scale(1.05);
        }

        .project-links {
            opacity: 1;
            transform: translateY(0);
        }
    }
`

const ProjectImage = styled('div')`
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover::after {
        opacity: 1;
    }
`

const ProjectLinks = styled('div')`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    display: flex;
    gap: 12px;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
    z-index: 1;
`

const ProjectLink = styled('a')`
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);

    &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
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
    padding: 6px 12px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    font-size: 13px;
    color: var(--ui-lightgray);
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-1px);
    }
`

const projects = [
    {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website built with React, TypeScript, and Styled Components. Features smooth animations, dark theme, and a clean design.",
        image: "/projects/portfolio.jpg",
        tags: ["React", "TypeScript", "Styled Components", "Framer Motion"],
        links: [
            { label: "View Live", href: "https://morani.dev" },
            { label: "Source Code", href: "https://github.com/heyitsleo/portfolio" }
        ]
    },
    {
        title: "Task Management App",
        description: "A full-stack task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
        image: "/projects/task-manager.jpg",
        tags: ["Next.js", "Node.js", "MongoDB", "WebSocket"],
        links: [
            { label: "View Demo", href: "https://tasks.morani.dev" },
            { label: "Source Code", href: "https://github.com/heyitsleo/task-manager" }
        ]
    },
    {
        title: "AI Image Generator",
        description: "An AI-powered image generation tool that creates unique artwork based on text prompts using machine learning models.",
        image: "/projects/ai-art.jpg",
        tags: ["Python", "TensorFlow", "React", "AWS"],
        links: [
            { label: "Try It Out", href: "https://ai-art.morani.dev" },
            { label: "Source Code", href: "https://github.com/heyitsleo/ai-art-generator" }
        ]
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
                        <Mail to="morani.rehann@gmail.com" />
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
                                <ProjectImage className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <ProjectLinks className="project-links">
                                        {project.links.map(link => (
                                            <ProjectLink 
                                                key={link.label} 
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {link.label}
                                            </ProjectLink>
                                        ))}
                                    </ProjectLinks>
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
