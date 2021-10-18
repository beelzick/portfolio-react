import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import SwiperAbout from '../components/SwiperAbout/SwiperAbout'
import SlideText from '../components/SwiperAbout/SlideText'

export default function SectionAbout() {
    return <section className='section-height' name='about'>
        <Grid container sx={{ height: '100%' }} direction='column' alignItems='center'>
            <Typography variant='h3' component='h3'mb={9}>
                ABOUT ME
            </Typography>
            <Grid container justifyContent='center' alignItems='center' mb={2}>
                <SwiperAbout />
            </Grid>
            <SlideText />
            <Button size='large' color='secondary' variant='outlined' className='button-next' sx={{ width: 'fit-content' }}>
                click me
            </Button>
        </Grid>
    </section>
}