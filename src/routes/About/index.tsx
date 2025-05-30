import { motion } from 'framer-motion'
import styled from 'styled-components'

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
`

const HeroContent = styled('div')`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    padding: 0 40px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`

const ProfileImage = styled(motion.div)`
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(45deg, rgba(0, 0, 0, 0.2), transparent);
    }
`

const HeroText = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 24px;

    h1 {
        font-size: 48px;
        font-weight: 700;
        color: white;
        line-height: 1.2;
        margin: 0;

        @media (max-width: 900px) {
            font-size: 36px;
        }
    }

    p {
        font-size: 18px;
        line-height: 1.6;
        color: var(--ui-lightgray);
        margin: 0;
    }
`

const Section = styled('section')`
    width: 100%;
    padding: 100px 0;
    background: rgba(255, 255, 255, 0.02);
`

const SectionContent = styled('div')`
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 40px;
`

const SectionTitle = styled(motion.h2)`
    font-size: 32px;
    font-weight: 600;
    color: white;
    margin-bottom: 40px;
`

const CardGrid = styled('div')`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
`

const Card = styled(motion.div)`
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
        margin-bottom: 16px;
    }

    p {
        color: var(--ui-lightgray);
        line-height: 1.6;
        font-size: 15px;
        font-weight: 500;
    }
`

const InterestsGrid = styled('div')`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
`

const InterestCard = styled(motion.div)`
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 24px;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.05);
        transform: translateY(-2px);
    }

    h4 {
        font-size: 18px;
        font-weight: 600;
        color: white;
        margin-bottom: 12px;
    }

    p {
        color: var(--ui-lightgray);
        font-size: 14px;
        line-height: 1.5;
    }
`

const interests = [
    {
        title: "Photography",
        description: "Capturing moments and landscapes through my lens, exploring different perspectives and techniques."
    },
    {
        title: "Hiking",
        description: "Exploring nature trails and mountains, finding peace in the great outdoors."
    },
    {
        title: "Reading",
        description: "Diving into science fiction and tech books, always learning something new."
    },
    {
        title: "Music",
        description: "Playing guitar and discovering new genres, finding inspiration in melodies."
    }
]

const approaches = [
    {
        title: "Problem Solving",
        description: "I approach challenges with a systematic mindset, breaking down complex problems into manageable pieces and finding elegant solutions."
    },
    {
        title: "Collaboration",
        description: "I believe in the power of teamwork and open communication, fostering an environment where ideas can flourish and grow."
    },
    {
        title: "Continuous Learning",
        description: "I'm constantly exploring new technologies and methodologies, staying at the forefront of software development."
    }
]

export default function About() {
    return (
        <PageWrapper>
            <HeroSection>
                <HeroContent>
                    <ProfileImage
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src="/profile.jpg" alt="Profile" />
                    </ProfileImage>
                    <HeroText>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Hi, I'm Rehan Morani
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            I'm a passionate software engineer with a keen eye for detail and a love for creating elegant solutions. With expertise in full-stack development and a focus on user experience, I strive to build applications that make a difference.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
                        </motion.p>
                    </HeroText>
                </HeroContent>
            </HeroSection>

            <Section>
                <SectionContent>
                    <SectionTitle
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        My Approach
                    </SectionTitle>
                    <CardGrid>
                        {approaches.map((approach, index) => (
                            <Card
                                key={approach.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <h3>{approach.title}</h3>
                                <p>{approach.description}</p>
                            </Card>
                        ))}
                    </CardGrid>
                </SectionContent>
            </Section>

            <Section>
                <SectionContent>
                    <SectionTitle
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Interests & Hobbies
                    </SectionTitle>
                    <InterestsGrid>
                        {interests.map((interest, index) => (
                            <InterestCard
                                key={interest.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <h4>{interest.title}</h4>
                                <p>{interest.description}</p>
                            </InterestCard>
                        ))}
                    </InterestsGrid>
                </SectionContent>
            </Section>
        </PageWrapper>
    )
} 