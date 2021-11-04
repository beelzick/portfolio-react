import TypographySlide from '../components/Animated/TypographySlide'
import ProjectBox from '../components/ProjectBox/ProjectBox'
import styles from './Section.module.css'
import { v4 as uuidv4 } from 'uuid';
import ProjectsContainer from '../components/ProjectBox/ProjectsContainer'

const projects = [
    {
        imgUrl: 'https://res.cloudinary.com/dfvpybkta/image/upload/v1634578204/eze-miniature-2.webp',
        title: 'EzeSneakers',
        description: 'EzeSneakers is an e-commerce showcase website that offers restored shoes from brands like Nike, Adidas, Puma. This project is built on top of React and Next.js.',
        gitHref: 'https://github.com/beelzick/eze-sneakers',
        demoHref: 'https://eze-sneakers.vercel.app/'
    },
    {
        imgUrl: 'https://res.cloudinary.com/dfvpybkta/image/upload/v1634687297/portfolio-thumb.webp',
        title: 'Portfolio',
        description: 'This portfolio is built on top of React.',
        gitHref: 'https://github.com/beelzick/portfolio-react',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dfvpybkta/image/upload/v1634595524/workout-places-thumb_eokaxv.webp',
        title: 'Workout Places',
        description: 'This showcase project mainly focuses on the backend side with express. It includes CRUD operations and database relationships.',
        gitHref: 'https://github.com/beelzick/workout-places',
        demoHref: 'https://workout-places-showcase.herokuapp.com/'
    },
]

export default function SectionProjects() {
    return <section className={styles.sectionProjects} name='projects'>
        <TypographySlide variant='h3' component='h3' align='center' mb={9}>
            SHOWCASE PROJECTS
        </TypographySlide>
        <ProjectsContainer>
            {projects.map(({ imgUrl, title, description, gitHref, demoHref }, i) => (
                <ProjectBox
                    imgUrl={imgUrl}
                    title={title}
                    description={description}
                    gitHref={gitHref}
                    demoHref={demoHref}
                    key={uuidv4()}
                    i={i}
                />
            ))}
        </ProjectsContainer>
    </section>
}