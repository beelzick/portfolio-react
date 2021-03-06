import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import SwiperAbout from '../components/SwiperAbout/SwiperAbout'
import SlideText from '../components/SwiperAbout/SlideText'
import TypographySlide from '../components/Animated/TypographySlide'
import MotionDiv from '../components/Animated/MotionDiv'

export default function SectionAbout() {
    const typographyRest = {
        variant: 'h3',
        mb: 8
    }
    return (
        <section className='section-height' id='about'>
            <Grid container sx={{ height: '100%' }} direction='column' alignItems='center'>
                <TypographySlide  {...typographyRest}>
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