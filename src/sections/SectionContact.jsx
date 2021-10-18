import styles from './Section.module.css'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { v4 as uuidv4 } from 'uuid';
export default function SectionContact() {
    return <section className={styles.sectionContact}>
        <div className={styles.contactContent}>
            <Grid container justifyContent='center' alignItems='center' sx={{ height: { xs: '150px', sm: '200px' } }}>
                {[GitHubIcon, LinkedInIcon, FacebookIcon, EmailIcon].map(Icon => (
                    <IconButton key={uuidv4()} sx={{ marginRight: '5px' }}>
                        <Icon
                            sx={{ fontSize: { xs: '70px', sm: '90px', md: '110px', lg: '150px' }, color: '#fff' }}
                        />
                    </IconButton>
                ))}
            </Grid>
        </div>
    </section>
}