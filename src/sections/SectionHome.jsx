import NavBar from '../components/NavBar'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import styles from './Section.module.css'

export default function SectionHome() {

    return <section className={styles.sectionHome}>
        <NavBar />
        <div style={{ height: '64px' }} />
        <Grid container sx={{ minHeight: 'calc(100vh - 64px)', padding: { xs: '20px', md: '30px' } }}>
            <Grid
                item
                xs={12} md={8}
                container
                direction='column'
                className={styles.titleContainer}
                sx={{ paddingTop: { md: '60px', lg: 'unset' } }}
            >
                <Typography
                    variant='h1'
                    component='h1'
                    color='secondary'
                    sx={{ width: '100%' }}
                >
                    KACPER ZABIELSKI
                </Typography>
                <Typography
                    variant='h2'
                    component='h2'
                    color='white'
                    sx={{ width: '100%' }}
                >
                    I have a strong desire to learn new things
                </Typography>
            </Grid>
            <Grid
                item
                xs={12} md={4}
                container
                direction='column'
                alignItems='center'
                sx={{ paddingTop: { md: '60px', lg: 'unset' } }}
            >
                <img
                    className={styles.img}
                    src='https://res.cloudinary.com/dfvpybkta/image/upload/v1634427029/pngfind.com-person-png-600927_prjle1.webp'
                    alt='Picture of me'
                />
            </Grid>
        </Grid>
    </section >
}