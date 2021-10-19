import styles from './Section.module.css'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { v4 as uuidv4 } from 'uuid';

const contactIcons = [
    {
        href: 'https://github.com/beelzick',
        icon: GitHubIcon,
        aria: 'GitHub',
    },
    {
        href: 'https://www.linkedin.com/in/kacper-zabielski-329911217/',
        icon: LinkedInIcon,
        aria: 'LinkedIn'
    },
    {
        href: 'mailto: kacper.zabielski05@gmail.com',
        icon: EmailIcon,
        aria: 'Email'
    },
    {
        href: 'https://www.facebook.com/kacper.zabielski/',
        icon: FacebookIcon,
        aria: 'Facebook'
    },
]

export default function SectionContact() {
    return <section className={styles.sectionContact}>
        <div className={styles.contactContent}>
            <Grid container justifyContent='center' alignItems='center' sx={{ height: { xs: '150px', sm: '200px' } }}>
                {contactIcons.map((item) => (
                    <IconButton key={uuidv4()} sx={{ marginRight: '5px' }} href={item.href} aria-label={item.aria}>
                        <item.icon
                            sx={{ fontSize: { xs: '70px', sm: '90px', md: '110px', lg: '150px' }, color: '#fff' }}
                        />
                    </IconButton>
                ))}
            </Grid>
        </div>
    </section>
}