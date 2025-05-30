import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styled from 'styled-components'

const PageWrapper = styled('div')`
    position: relative;
    z-index: 2;
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 100px 0;
`

const Content = styled('div')`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 120px;
    position: relative;
`

const Section = styled('section')`
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: relative;
`

const SectionTitle = styled(motion.h2)`
    font-size: 32px;
    font-weight: 600;
    color: white;
    margin-bottom: 20px;
`

const TimelineContainer = styled('div')`
    position: relative;
    padding-left: 50px;
`

const TimelineLine = styled(motion.div)`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--ui-lightblue);
    transform-origin: top;
`

const TimelineDot = styled(motion.div)`
    position: absolute;
    left: -6px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--ui-lightblue);
    box-shadow: 0 0 20px var(--ui-lightblue);
`

const TimelineItem = styled(motion.div)`
    position: relative;
    margin-bottom: 60px;
    opacity: 0;

    &:last-child {
        margin-bottom: 0;
    }
`

const TimelineContent = styled('div')`
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 30px;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.05);
        transform: translateY(-2px);
    }

    h3 {
        font-size: 24px;
        font-weight: 600;
        color: white;
        margin-bottom: 8px;
    }

    h4 {
        font-size: 18px;
        font-weight: 500;
        color: var(--ui-lightblue);
        margin-bottom: 12px;
    }

    .date {
        font-size: 14px;
        color: var(--ui-lightgray);
        opacity: 0.8;
        margin-bottom: 16px;
        display: inline-block;
        padding: 4px 12px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 20px;
    }

    p {
        color: var(--ui-lightgray);
        line-height: 1.6;
        font-size: 15px;
        font-weight: 500;
    }
`

const ProgressDots = styled('div')`
    position: fixed;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 16px;
    z-index: 100;

    @media (max-width: 1200px) {
        display: none;
    }
`

const ProgressDot = styled(motion.div)<{ $active: boolean }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => props.$active ? 'var(--ui-lightblue)' : 'rgba(255, 255, 255, 0.1)'};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.2);
    }
`

const educationData = [
    {
        title: "Bachelor of Computer Science",
        institution: "University of Technology",
        date: "2018 - 2022",
        description: "Focused on software engineering, algorithms, and data structures. Participated in various hackathons and coding competitions. Graduated with honors and received the Dean's Award for Academic Excellence.",
        skills: ["Software Engineering", "Data Structures", "Algorithms", "Machine Learning"]
    },
    {
        title: "Advanced Web Development",
        institution: "Tech Academy",
        date: "2020",
        description: "Intensive program covering modern web development technologies and best practices. Built several full-stack applications using React, Node.js, and cloud services.",
        skills: ["React", "Node.js", "AWS", "CI/CD"]
    }
]

const experienceData = [
    {
        title: "Senior Software Engineer",
        institution: "Tech Innovations Inc.",
        date: "2022 - Present",
        description: "Leading development of enterprise applications, mentoring junior developers, and implementing best practices in software development. Spearheaded the migration to microservices architecture.",
        skills: ["Team Leadership", "System Architecture", "Microservices", "DevOps"]
    },
    {
        title: "Software Developer",
        institution: "Digital Solutions Ltd",
        date: "2020 - 2022",
        description: "Developed and maintained web applications, collaborated with cross-functional teams, and contributed to architectural decisions. Implemented CI/CD pipelines and automated testing.",
        skills: ["Full-stack Development", "CI/CD", "Testing", "Agile"]
    }
]

const skillsData = [
    {
        category: "Frontend Development",
        skills: ["React", "TypeScript", "HTML5", "CSS3", "Styled Components", "Next.js"]
    },
    {
        category: "Backend Development",
        skills: ["Node.js", "Python", "SQL", "REST APIs", "GraphQL", "MongoDB"]
    },
    {
        category: "DevOps & Tools",
        skills: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Kubernetes"]
    },
    {
        category: "Soft Skills",
        skills: ["Team Leadership", "Problem Solving", "Communication", "Agile", "Mentoring"]
    }
]

export default function Career() {
    const [activeSection, setActiveSection] = useState(0)
    const sectionsRef = useRef<Array<HTMLDivElement | null>>([])
    const { scrollYProgress } = useScroll()
    const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 1])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = sectionsRef.current.findIndex(
                            (ref) => ref === entry.target
                        )
                        if (index !== -1) {
                            setActiveSection(index)
                        }
                    }
                })
            },
            { threshold: 0.5 }
        )

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section)
        })

        return () => observer.disconnect()
    }, [])

    const scrollToSection = (index: number) => {
        sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <PageWrapper>
            <ProgressDots>
                {['Education', 'Experience', 'Skills'].map((section, index) => (
                    <ProgressDot
                        key={section}
                        $active={activeSection === index}
                        onClick={() => scrollToSection(index)}
                        animate={{
                            scale: activeSection === index ? 1.2 : 1,
                            backgroundColor: activeSection === index 
                                ? 'var(--ui-lightblue)' 
                                : 'rgba(255, 255, 255, 0.1)'
                        }}
                    />
                ))}
            </ProgressDots>

            <Content>
                <Section ref={(el: HTMLDivElement | null) => (sectionsRef.current[0] = el)}>
                    <SectionTitle
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Education
                    </SectionTitle>
                    <TimelineContainer>
                        <TimelineLine
                            style={{ scaleY: timelineProgress }}
                        />
                        {educationData.map((item, index) => (
                            <TimelineItem
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <TimelineDot
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.2 }}
                                />
                                <TimelineContent>
                                    <h3>{item.title}</h3>
                                    <h4>{item.institution}</h4>
                                    <span className="date">{item.date}</span>
                                    <p>{item.description}</p>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </TimelineContainer>
                </Section>

                <Section ref={(el: HTMLDivElement | null) => (sectionsRef.current[1] = el)}>
                    <SectionTitle
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Work Experience
                    </SectionTitle>
                    <TimelineContainer>
                        <TimelineLine
                            style={{ scaleY: timelineProgress }}
                        />
                        {experienceData.map((item, index) => (
                            <TimelineItem
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <TimelineDot
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.2 }}
                                />
                                <TimelineContent>
                                    <h3>{item.title}</h3>
                                    <h4>{item.institution}</h4>
                                    <span className="date">{item.date}</span>
                                    <p>{item.description}</p>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </TimelineContainer>
                </Section>

                <Section ref={(el: HTMLDivElement | null) => (sectionsRef.current[2] = el)}>
                    <SectionTitle
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Skills & Expertise
                    </SectionTitle>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {skillsData.map((category, index) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <TimelineContent>
                                    <h3>{category.category}</h3>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                style={{
                                                    padding: '6px 12px',
                                                    background: 'rgba(255, 255, 255, 0.05)',
                                                    borderRadius: '20px',
                                                    fontSize: '14px',
                                                    color: 'var(--ui-lightgray)'
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </TimelineContent>
                            </motion.div>
                        ))}
                    </div>
                </Section>
            </Content>
        </PageWrapper>
    )
} 