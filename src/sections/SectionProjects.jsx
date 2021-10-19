import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ProjectBox from '../components/ProjectBox/ProjectBox'
import styles from './Section.module.css'
import { v4 as uuidv4 } from 'uuid';

const projects = [
    {
        imgUrl: 'https://res.cloudinary.com/dfvpybkta/image/upload/v1634578204/eze-miniature-2.webp',
        title: 'EzeSneakers',
        description: 'EzeSneakers is an eccomerce showcase website which offers restored shoes from brands like Nike, Adidas, Puma',
        gitHref: 'https://github.com/beelzick/eze-sneakers',
        demoHref: 'https://eze-sneakers.vercel.app/'
    },
    {
        imgUrl: 'https://res.cloudinary.com/dfvpybkta/image/upload/v1634578204/eze-miniature-2.webp',
        title: 'Portfolio',
        description: 'Here is a source code of my portfolio app',
        gitHref: 'https://github.com/beelzick/portfolio-react',
        demoHref: 'https://kacper-zabielski.vercel.app/'
    },
    {
        imgUrl: 'https://res.cloudinary.com/dfvpybkta/image/upload/v1634595524/workout-places-thumb_eokaxv.webp',
        title: 'Workout Places',
        description: 'This project mainly focuses on the backend side with express. It includes CRUD operations and database relationships.',
        gitHref: 'https://github.com/beelzick/workout-places',
        demoHref: 'https://workout-places-showcase.herokuapp.com/'
    },
]

export default function SectionProjects() {
    return <section className={styles.sectionProjects} name='projects'>
        <Typography variant='h3' component='h3' align='center' mb={9}>
            SHOWCASE PROJECTS
        </Typography>
        <Grid container justifyContent='center' alignItems='center'>
            {projects.map(({ imgUrl, title, description, gitHref, demoHref }) => (
                <ProjectBox
                    imgUrl={imgUrl}
                    title={title}
                    description={description}
                    gitHref={gitHref}
                    demoHref={demoHref}
                    key={uuidv4()}
                />
            ))}
        </Grid>
    </section>
}