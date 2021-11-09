import TypographySlide from '../components/Animated/TypographySlide'
import ProjectBox from '../components/ProjectBox/ProjectBox'
import styles from './Section.module.css'
import { v4 as uuidv4 } from 'uuid';
import ProjectsContainer from '../components/ProjectBox/ProjectsContainer'
import projects from '~/helpers/projects';


export default function SectionProjects() {
    const typographyRest = {
        variant: 'h3',
        align: 'center',
        mb: 9,
    }
    return (
        <section className={styles.sectionProjects} id='projects'>
            <TypographySlide  {...typographyRest}>
                PROJECTS
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
    )
}