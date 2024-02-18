import { ProjectProps } from '~components/Shared/Project/types'

const Projects: ProjectProps[] = [
    {
        title: 'Hybris',
        description:
            'Modpack for modern versions of Minecraft. My job was to create most of the designs of the client, such as the interface used, the logo, the launcher and more. 💡 Fun fact: Hybris was actually meant to be called Surge originally.',
        images: ['/hybris/1.webp', '/hybris/2.webp'],
    },
    {
        title: 'VTube Center',
        description:
            'The place to find any VTuber you want, with plenty of categories to choose from and filters to help you find the perfect one you need. My role was to assist with the frontend development and design of the website.',
        images: ['/vtube/1.webp', '/vtube/2.webp'],
    },
    {
        title: 'My Portfolio',
        description:
            "My personal website! I'm really proud how the website turned out, you can find the source code on GitHub.",
        images: ['/portfolio/1.webp'],
    },
]

export default Projects
