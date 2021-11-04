import NavBar from '../components/NavBar'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import styles from './Section.module.css'
import { motion } from 'framer-motion'
export default function SectionHome() {

    return <section className={styles.sectionHome}>
        <NavBar />
        <Grid container direction='column' sx={{ padding: '20px', height: '100%' }} justifyContent='center' alignItems='center'>
            <Typography
                initial={{ opacity: 0, y: -1400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                variant='h1'
                component={motion.h1}
                color='secondary'
                sx={{ width: '100' }}
                align='center'
            >
                KACPER ZABIELSKI
            </Typography>
            <Typography
                initial={{ opacity: 0, y: -1400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                variant='h2'
                component={motion.h2}
                align='center'
            >
                Looking for an opportunity to work as a Junior Fronted(React) Developer
            </Typography>
        </Grid>
    </section>
}