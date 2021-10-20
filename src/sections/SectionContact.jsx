import styles from './Section.module.css'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';

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

const variants = {
    visible: i => ({
        opacity: 1,
        transition: {
            delay: i * 0.3,
            duration: 0.4
        }
    }),
    hidden: { opacity: 0 }
}

export default function SectionContact() {
    return (
        <section className={styles.sectionContact}>
            <div className={styles.contactContent}>
                <Grid container
                    justifyContent='center'
                    alignItems='center' sx={{ height: { xs: '150px', sm: '200px' } }}>
                    {contactIcons.map((item, i) => (
                        <IconButton
                            key={uuidv4()}
                            sx={{ marginRight: '5px' }}
                            href={item.href}
                            aria-label={item.aria}
                            initial='hidden'
                            animate='visible'
                            variants={variants}
                            custom={i + 1}
                            component={motion.a}
                        >
                            <item.icon
                                sx={{ fontSize: { xs: '70px', sm: '90px', md: '110px', lg: '150px' }, color: '#fff' }}
                            />
                        </IconButton>
                    ))}
                </Grid>
            </div>
        </section>
    )
}