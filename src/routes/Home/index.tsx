import { motion } from 'framer-motion'
import styled from 'styled-components'
import { ArrowRight, Github, Globe, Code2, Terminal, Database, Server } from 'lucide-react'

/** Components */
import Logo from '~components/Shared/Logo'

const PageWrapper = styled('div')`
    position: relative;
    z-index: 2;
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const HeroSection = styled('section')`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
    background: linear-gradient(
        to bottom,
        var(--bg-primary),
        var(--bg-secondary)
    );
`

const HeroContent = styled('div')`
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

const Title = styled(motion.h1)`
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    background: linear-gradient(
        135deg,
        var(--accent-primary),
        var(--accent-secondary)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;
`

const Subtitle = styled(motion.p)`
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    color: var(--text-secondary);
    max-width: 600px;
    line-height: 1.6;
`

const CTAButton = styled(motion.a)`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--accent-primary);
    color: white;
    padding: 16px 32px;
    border-radius: 12px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    margin-top: 20px;
    border: none;
    cursor: pointer;

    &:hover {
        background: var(--accent-secondary);
        transform: translateY(-2px);
        box-shadow: var(--card-shadow);
    }

    svg {
        width: 20px;
        height: 20px;
        transition: transform 0.3s ease;
    }

    &:hover svg {
        transform: translateX(4px);
    }
`

const ProjectsSection = styled('section')`
    width: 100%;
    padding: 100px 0;
    background: var(--bg-secondary);
`

const SectionContent = styled('div')`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
`

const SectionTitle = styled(motion.h2)`
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 60px;
    text-align: center;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 4px;
        background: var(--accent-primary);
        border-radius: 2px;
    }
`

const ProjectGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
`

const ProjectCard = styled(motion.div)`
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
        transform: translateY(-5px);
        box-shadow: var(--card-shadow);

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
        background: linear-gradient(
            to bottom,
            transparent,
            var(--bg-primary)
        );
        opacity: 0.7;
    }
`

const ProjectContent = styled('div')`
    padding: 24px;

    h3 {
        font-size: 24px;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 12px;
    }

    p {
        color: var(--text-secondary);
        font-size: 15px;
        line-height: 1.6;
        margin-bottom: 20px;
    }
`

const ProjectLinks = styled('div')`
    display: flex;
    gap: 12px;
`

const ProjectLink = styled('a')`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: var(--bg-secondary);
    border: 1px solid var(--card-border);
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
        background: var(--accent-primary);
        color: white;
        border-color: var(--accent-primary);
        transform: translateY(-2px);
    }

    svg {
        width: 16px;
        height: 16px;
    }
`

const ProjectTags = styled('div')`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
`

const ProjectTag = styled('span')`
    padding: 6px 12px;
    background: var(--bg-secondary);
    border: 1px solid var(--card-border);
    border-radius: 20px;
    font-size: 13px;
    color: var(--text-secondary);
    transition: all 0.3s ease;

    &:hover {
        background: var(--accent-primary);
        color: white;
        border-color: var(--accent-primary);
        transform: translateY(-1px);
    }
`

const TechStackSection = styled('section')`
    width: 100%;
    padding: 100px 0;
    background: var(--bg-primary);
`

const TechGrid = styled('div')`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 40px;
`

const TechCard = styled(motion.div)`
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: var(--card-shadow);
        border-color: var(--accent-primary);
    }

    svg {
        width: 40px;
        height: 40px;
        color: var(--accent-primary);
    }

    h3 {
        font-size: 20px;
        font-weight: 600;
        color: var(--text-primary);
    }

    p {
        color: var(--text-secondary);
        font-size: 14px;
        line-height: 1.6;
    }
`

const projects = [
    {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website built with React, TypeScript, and Styled Components. Features smooth animations, theme switching, and a clean design.",
        image: "/projects/portfolio.jpg",
        tags: ["React", "TypeScript", "Styled Components", "Framer Motion"],
        links: [
            { label: "View Live", href: "https://morani.dev", icon: Globe },
            { label: "Source Code", href: "https://github.com/heyitsleo/portfolio", icon: Github }
        ]
    },
    {
        title: "Task Management App",
        description: "A full-stack task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
        image: "/projects/task-manager.jpg",
        tags: ["Next.js", "Node.js", "MongoDB", "WebSocket"],
        links: [
            { label: "View Demo", href: "https://tasks.morani.dev", icon: Globe },
            { label: "Source Code", href: "https://github.com/heyitsleo/task-manager", icon: Github }
        ]
    },
    {
        title: "AI Image Generator",
        description: "An AI-powered image generation tool that creates unique artwork based on text prompts using machine learning models.",
        image: "/projects/ai-art.jpg",
        tags: ["Python", "TensorFlow", "React", "AWS"],
        links: [
            { label: "Try It Out", href: "https://ai-art.morani.dev", icon: Globe },
            { label: "Source Code", href: "https://github.com/heyitsleo/ai-art-generator", icon: Github }
        ]
    }
]

const techStack = [
    {
        title: "Frontend Development",
        description: "Building modern, responsive web applications with React, TypeScript, and modern CSS frameworks.",
        icon: Code2
    },
    {
        title: "Backend Development",
        description: "Creating robust server-side applications using Node.js, Python, and various databases.",
        icon: Server
    },
    {
        title: "Database Design",
        description: "Designing and implementing efficient database schemas and queries for optimal performance.",
        icon: Database
    },
    {
        title: "DevOps & Deployment",
        description: "Setting up CI/CD pipelines, containerization, and cloud infrastructure for scalable applications.",
        icon: Terminal
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

export default function Home() {
    return (
        <PageWrapper>
            <HeroSection>
                <HeroContent>
                    <LogoWrapper
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Logo />
                    </LogoWrapper>
                    <Title
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Rehan Morani
                    </Title>
                    <Subtitle
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Software Engineer specializing in full-stack development, with a passion for building scalable and user-friendly applications.
                    </Subtitle>
                    <CTAButton
                        href="/resume"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Resume <ArrowRight />
                    </CTAButton>
                </HeroContent>
            </HeroSection>

            <ProjectsSection>
                <SectionContent>
                    <SectionTitle
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Featured Projects
                    </SectionTitle>
                    <ProjectGrid
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.title}
                                variants={itemVariants}
                            >
                                <ProjectImage className="project-image">
                                    <img src={project.image} alt={project.title} />
                                </ProjectImage>
                                <ProjectContent>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <ProjectLinks className="project-links">
                                        {project.links.map((link) => (
                                            <ProjectLink
                                                key={link.label}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <link.icon />
                                                {link.label}
                                            </ProjectLink>
                                        ))}
                                    </ProjectLinks>
                                    <ProjectTags>
                                        {project.tags.map((tag) => (
                                            <ProjectTag key={tag}>{tag}</ProjectTag>
                                        ))}
                                    </ProjectTags>
                                </ProjectContent>
                            </ProjectCard>
                        ))}
                    </ProjectGrid>
                </SectionContent>
            </ProjectsSection>

            <TechStackSection>
                <SectionContent>
                    <SectionTitle
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Tech Stack
                    </SectionTitle>
                    <TechGrid
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {techStack.map((tech) => (
                            <TechCard
                                key={tech.title}
                                variants={itemVariants}
                            >
                                <tech.icon />
                                <h3>{tech.title}</h3>
                                <p>{tech.description}</p>
                            </TechCard>
                        ))}
                    </TechGrid>
                </SectionContent>
            </TechStackSection>
        </PageWrapper>
    )
}
