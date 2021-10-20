import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import SwiperAbout from '../components/SwiperAbout/SwiperAbout'
import SlideText from '../components/SwiperAbout/SlideText'
import TypographySlide from '../components/animated/TypographySlide'
import MotionDiv from '../components/animated/MotionDiv'

export default function SectionAbout() {
    return (
        <section className='section-height' name='about'>
            <Grid container sx={{ height: '100%' }} direction='column' alignItems='center'>
                <TypographySlide variant='h3' component='h3' mb={9}>
                    ABOUT ME
                </TypographySlide>

                <Grid container justifyContent='center' alignItems='center' mb={2}>
                    <MotionDiv>
                        <SwiperAbout />
                    </MotionDiv>
                </Grid>
                <SlideText />
                <MotionDiv>
                    <Button size='large' color='secondary' variant='outlined' className='button-next' sx={{ width: 'fit-content' }}>
                        click me
                    </Button>
                </MotionDiv>
            </Grid>
        </section>
    )
}