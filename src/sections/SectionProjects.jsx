import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ProjectBox from '../components/ProjectBox/ProjectBox'
import styles from './Section.module.css'

export default function SectionProjects() {
    return <section className={styles.sectionProjects} name='projects'>
        <Typography variant='h3' component='h3' align='center' mb={9}>
            SHOWCASE PROJECTS
        </Typography>
        <Grid container justifyContent='center' alignItems='center'>
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
        </Grid>
    </section>
}